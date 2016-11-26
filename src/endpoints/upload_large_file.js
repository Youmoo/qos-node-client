/**
 * 分片上传
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict'

import fs from 'fs'
import sign from '../crypto/sign'
import get_file_size from '../util/get_file_size'
import upload_slice_init from './upload_slice_init'
import upload_slice_data from './upload_slice_data'
import upload_slice_finish from './upload_slice_finish'

export default function upload_large_file ({appId, secretId, secretKey, url, bucket: b1}, {form: {biz_attr = '', insertOnly = 1, slice_size = 524288} = {}, localFile, bucket: b2, fileId}) {
  return new Promise((resolve, reject) => {
    const bucket = b2 || b1

    const auth = sign({appId, secretId, secretKey, bucket, fileId})

    let filesize

    get_file_size(localFile)
      .then(size => {
        filesize = size
        upload_slice_init({appId, secretId, secretKey, url, bucket}, {
          auth,
          filesize,
          localFile,
          fileId,
          slice_size,
          biz_attr,
          insertOnly
        }).then(json => {
          const {session} = json.data

          const promises = []
          let offset = 0
          fs.createReadStream(localFile, {highWaterMark: slice_size})
            .on('data', filecontent => {
              promises.push(upload_slice_data({appId, secretId, secretKey, bucket, url }, {
                auth,
                fileId,
                filecontent,
                session,
                offset
              }))
              offset += filecontent.length
            })
            .on('end', () => {
              Promise.all(promises)
                .then(() => {
                  upload_slice_finish({appId, secretId, secretKey, url, bucket}, {auth, fileId, session, filesize})
                    .then(resolve)
                    .catch(reject)
                }).catch(reject)
            })
        }).catch(reject)
      }).catch(reject)
  })
}

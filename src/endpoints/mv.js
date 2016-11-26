/**
 * 移动文件
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict'

import fetch, {post as method} from '../util/fetch'

const op = 'move'

export const config = {
  op,
  method,
  params: ['dest_fileid', 'to_over_write']
}

export default function mv ({appId, secretId, secretKey, url, bucket: b1}, {bucket: b2, fileId, destFileId: dest_fileid, overwrite: to_over_write = 0}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, fileId, dest_fileid, to_over_write})
}

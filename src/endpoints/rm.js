/**
 * 删除文件或文件夹
 *
 * auth 是一次性的
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict'

import fetch, {post as method} from '../util/fetch'

const op = 'delete'

export const config = {
  op,
  method
}

export default function rm ({appId, secretId, secretKey, url, bucket: b1}, {bucket: b2, fileId}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, fileId})
}

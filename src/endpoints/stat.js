/**
 * 查询文件或文件夹属性
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict'

import fetch, {get as method} from '../util/fetch'

const op = 'stat'

export const config = {
  op,
  method
}

export default function stat ({appId, secretId, secretKey, url, bucket: b1}, {bucket: b2, fileId}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, fileId})
}

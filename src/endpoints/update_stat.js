/**
 * 更新文件属性
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

import fetch, {post as method} from "../util/fetch";

const op = 'update';

export const config = {
  op,
  method,
  params: ['biz_attr', 'authority', 'custom_headers']
};

export default function update_stat({appId, secretId, secretKey, url, bucket:b1}, {bucket:b2, fileId, biz_attr = '', authority, headers:custom_headers = {}}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, fileId, biz_attr, authority, custom_headers});
}

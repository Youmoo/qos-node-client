/**
 * 创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 * @see https://www.qcloud.com/doc/api/435/6061
 */
'use strict';

import fetch, {post as method} from "../util/fetch";

const op = 'create';

export const config = {
  op,
  method,
  params: ['biz_attr']
};

export default function mkdir({appId, secretId, secretKey, url, bucket:b1}, {bucket:b2, fileId, bizAttr:biz_attr = '', timestamp, expired, random}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, fileId, biz_attr, timestamp, expired, random});
}

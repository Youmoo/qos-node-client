/**
 * 列举目录
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

import fetch, {get as method} from "../util/fetch";

const op = 'list';

export const config = {
  op,
  method,
  params: [/*'op',*/'context', 'num']
};

export default function ls({appId, secretId, secretKey, url, bucket:b1}, {bucket:b2, timestamp, expired, random, dir:fileId, num = 20, context}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {
    b2,
    timestamp,
    expired,
    random,
    fileId,
    num,
    context
  })
}

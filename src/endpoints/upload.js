/**
 * 上传小文件
 *
 * 用`content-type:application/json`也能发送成功
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

import fs from "fs";
import fetch, {post as method} from "../util/fetch";

const op = 'upload';

export const config = {
  op,
  method,
  params: ['filecontent', 'biz_attr', 'insertOnly']
};

export default function upload({appId, secretId, secretKey, url, bucket:b1}, {form:{biz_attr = '', insertOnly = 1}={}, localFile, bucket:b2, fileId, timestamp, expired, random}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {
    b2,
    biz_attr,
    insertOnly,
    filecontent: fs.createReadStream(localFile),
    fileId,
    timestamp,
    expired,
    random
  });
}

/**
 * 分片上传查询
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

import fetch, {post as method} from "../util/fetch";

const op = 'upload_slice_list';

export const config = {
  op,
  method
};

export default function upload_slice_list_easy({appId, secretId, secretKey, url, bucket:b1}, {bucket:b2, fileId}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, fileId});
}

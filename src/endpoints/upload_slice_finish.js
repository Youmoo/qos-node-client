/**
 * 逐个上传分片
 *
 * @author youmoo
 * @since 2016/11/25
 */
'use strict';

import fetch, {post as method} from "../util/fetch";

const op = 'upload_slice_finish';

export const config = {
  op,
  method,
  params: ['session', 'filesize']
};

export default function upload_slice_finish({appId, secretId, secretKey, url, bucket:b1}, {bucket:b2, auth, fileId, filesize, session}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, auth, fileId, filesize, session});
}

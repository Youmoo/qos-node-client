/**
 * 逐个上传分片
 *
 * @author youmoo
 * @since 2016/11/25
 */
'use strict';

import fetch, {post as method} from "../util/fetch";

const op = 'upload_slice_data';

export const config = {
  op,
  method,
  params: [{name: 'filecontent', apply: v => v}, 'session', 'offset'],
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

export default function upload_slice_data({appId, secretId, secretKey, url, bucket:b1},
  {bucket:b2, auth, fileId, filecontent, offset, session}) {
  return fetch(config, {appId, secretId, secretKey, url, b1}, {b2, auth, fileId, filecontent, offset, session})
}

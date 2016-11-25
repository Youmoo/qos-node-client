/**
 * 逐个上传分片
 *
 * @author youmoo
 * @since 2016/11/25
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;
exports.default = upload_slice_data;

var _fetch = require('../util/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'upload_slice_data';

const config = exports.config = {
  op,
  method: _fetch.post,
  params: [{ name: 'filecontent', apply: v => v }, 'session', 'offset'],
  headers: {
    'Content-Type': 'multipart/form-data'
  }
};

function upload_slice_data({ appId, secretId, secretKey, url, bucket: b1 }, { bucket: b2, auth, fileId, filecontent, offset, session }) {
  return (0, _fetch2.default)(config, { appId, secretId, secretKey, url, b1 }, { b2, auth, fileId, filecontent, offset, session });
}
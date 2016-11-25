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
exports.default = upload_slice_finish;

var _fetch = require('../util/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'upload_slice_finish';

const config = exports.config = {
  op,
  method: _fetch.post,
  params: ['session', 'filesize']
};

function upload_slice_finish({ appId, secretId, secretKey, url, bucket: b1 }, { bucket: b2, auth, fileId, filesize, session }) {
  return (0, _fetch2.default)(config, { appId, secretId, secretKey, url, b1 }, { b2, auth, fileId, filesize, session });
}
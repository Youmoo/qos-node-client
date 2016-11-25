/**
 * 移动文件
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;
exports.default = mv;

var _fetch = require('../util/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'move';

const config = exports.config = {
  op,
  method: _fetch.post,
  params: ['dest_fileid', 'to_over_write']
};

function mv({ appId, secretId, secretKey, url, bucket: b1 }, { bucket: b2, fileId, destFileId: dest_fileid, overwrite: to_over_write = 0 }) {
  return (0, _fetch2.default)(config, { appId, secretId, secretKey, url, b1 }, { b2, fileId, dest_fileid, to_over_write });
}
/**
 * 查询文件或文件夹属性
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;
exports.default = stat;

var _fetch = require('../util/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'stat';

const config = exports.config = {
  op,
  method: _fetch.get
};

function stat({ appId, secretId, secretKey, url, bucket: b1 }, { bucket: b2, fileId }) {
  return (0, _fetch2.default)(config, { appId, secretId, secretKey, url, b1 }, { b2, fileId });
}
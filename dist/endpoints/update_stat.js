/**
 * 更新文件属性
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;
exports.default = update_stat;

var _fetch = require('../util/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'update';

const config = exports.config = {
  op,
  method: _fetch.post,
  params: ['biz_attr', 'authority', 'custom_headers']
};

function update_stat({ appId, secretId, secretKey, url, bucket: b1 }, { bucket: b2, fileId, biz_attr = '', authority, headers: custom_headers = {} }) {
  return (0, _fetch2.default)(config, { appId, secretId, secretKey, url, b1 }, { b2, fileId, biz_attr, authority, custom_headers });
}
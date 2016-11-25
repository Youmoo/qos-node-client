/**
 * 创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 * @see https://www.qcloud.com/doc/api/435/6061
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;
exports.default = mkdir;

var _fetch = require('../util/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'create';

const config = exports.config = {
  op,
  method: _fetch.post,
  params: ['biz_attr']
};

function mkdir({ appId, secretId, secretKey, url, bucket: b1 }, { bucket: b2, fileId, bizAttr: biz_attr = '', timestamp, expired, random }) {
  return (0, _fetch2.default)(config, { appId, secretId, secretKey, url, b1 }, { b2, fileId, biz_attr, timestamp, expired, random });
}
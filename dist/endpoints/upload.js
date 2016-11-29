/**
 * 上传小文件
 *
 * 用`content-type:application/json`也能发送成功
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;
exports.default = upload;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _fetch = require('../util/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'upload';

const config = exports.config = {
  op,
  method: _fetch.post,
  params: [{ name: 'filecontent', apply: v => v }, 'biz_attr', 'insertOnly']
};

function upload({ appId, secretId, secretKey, url, bucket: b1 }, { form: { biz_attr = '', insertOnly = 1 } = {}, localFile, bucket: b2, fileId, timestamp, expired, random }) {
  return (0, _fetch2.default)(config, { appId, secretId, secretKey, url, b1 }, {
    b2,
    biz_attr,
    insertOnly,
    filecontent: _fs2.default.createReadStream(localFile),
    fileId,
    timestamp,
    expired,
    random
  });
}
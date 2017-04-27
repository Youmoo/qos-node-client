/**
 * 初始化分片上传
 *
 * <multi_effect_signature>
 *
 * @author youmoo
 * @since 2016/11/25
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = undefined;
exports.default = upload_slice_init;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _sign = require('../crypto/sign');

var _sign2 = _interopRequireDefault(_sign);

var _fetch = require('../util/fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const op = 'upload_slice_init';

const config = exports.config = {
  op,
  method: _fetch.post,
  params: ['filesize', 'slice_size', 'biz_attr', 'insertOnly']
};

function upload_slice_init({ appId, secretId, secretKey, url, bucket: b1 }, { bucket: b2, auth, fileId, localFile, filesize, slice_size, biz_attr = '', insertOnly = 1 }) {
  return new Promise((resolve, reject) => {
    if (!localFile) {
      reject({
        err: new Error(`${op}: parameter 'localFile' is required`)
      });
      return;
    }

    const bucket = b2 || b1;

    if (!auth) {
      auth = (0, _sign2.default)({ appId, secretId, secretKey, bucket, fileId });
    }

    const uri = `${url}${bucket}${fileId}`;

    const formData = {
      op,
      filesize, // 文件总大小,单位byte
      slice_size, // 分片大小,单位byte
      biz_attr, // 文件属性，业务端维护,不必填
      insertOnly // 同名文件覆盖选项，0 覆盖 1 不覆盖，报错
    };

    _request2.default.post({
      uri,
      formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': auth
      }
    }, (err, resp, body) => {
      if (err) {
        reject({ err });
        return;
      }

      const json = JSON.parse(body);

      if (resp.statusCode != 200) {
        if (json.code === -4019) {
          // todo 断点续传
        }
        reject({
          statusCode: resp.statusCode,
          statusMessage: resp.statusMessage,
          json
        });
        return;
      }
      resolve(json);
    });
  });
}
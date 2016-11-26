/**
 * @author youmoo
 * @since 2016/11/25
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = exports.post = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _sign = require('../crypto/sign');

var _sign2 = _interopRequireDefault(_sign);

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _default_response_handler = require('./default_response_handler');

var _default_response_handler2 = _interopRequireDefault(_default_response_handler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const post = exports.post = 'post';
const get = exports.get = 'get';

function fetch({ op, method, params = [], headers = {} }, { appId, secretId, secretKey, url, b1 }, _ref) {
  let { b2, auth, fileId, timestamp, expired, random } = _ref;

  let extra = _objectWithoutProperties(_ref, ['b2', 'auth', 'fileId', 'timestamp', 'expired', 'random']);

  const [m, form] = method.toLowerCase() === post ? [post, 'formData'] : [get, 'qs'];

  return new Promise((resolve, reject) => {
    const bucket = b2 || b1;

    const data = params.reduce((p, v) => {
      const { name = v } = v; // :)

      let value = extra[name];
      if (v.apply) {
        value = v.apply(value);
      } else if (value && typeof value === 'object') {
        // 支持对象值自动序列化
        value = JSON.stringify(value);
      }
      p[name] = value;
      return p;
    }, { op });

    auth = auth || (0, _sign2.default)({ appId, bucket, secretId, secretKey, fileId, timestamp, expired, random });
    const uri = `${ url }${ bucket }${ fileId }`;

    headers = _extends({
      'Content-Type': 'application/json',
      'Authorization': auth
    }, headers);

    console.info(m, 'uri:', uri);
    // console.info(form, data);
    console.log(headers);

    // 发送请求
    _request2.default[m]({
      uri,
      [form]: data,
      headers
    }, (0, _default_response_handler2.default)(resolve, reject));
  });
}

exports.default = fetch;
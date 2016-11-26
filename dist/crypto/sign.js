/**
 * qos 签名
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sign({ appId: a, bucket: b, secretId: k, secretKey, timestamp: t = Date.now() / 1000, expired: e = t + 1000 * 60 * 5, random: r = randomIntInclusive(0, 100000), fileId: f = '' }) {
  // 在这里进行统一的参数验证
  if (!b) {
    throw new Error('parameter `bucket` is required.');
  }

  if (f !== '' && !f.startsWith('/')) {
    throw new Error(`parameter 'fileId' must start with '/', current value is '${ f }'`);
  }

  // 一个fileId由 /appId/bucket/path组成
  f = `/${ a }/${ b }${ encodeURI(f) }`;

  // 貌似这里参数的顺序可以任意
  const multi = `a=${ a }&b=${ b }&k=${ k }&e=${ e }&t=${ t }&r=${ r }&f=${ f }`;
  const multi_sha1 = _crypto2.default.createHmac('sha1', secretKey).update(multi).digest();
  const u = Buffer.from(multi, 'utf-8');

  let total = new Uint8Array(multi_sha1.length + u.length);
  total.set(multi_sha1, 0);
  total.set(u, multi_sha1.length);
  return new Buffer(total).toString('base64');
}

// 生成随机数
function randomIntInclusive(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

exports.default = sign;
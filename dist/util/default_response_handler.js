/**
 * qos 默认的请求结果处理器
 *
 * @author youmoo
 * @since 2016/11/25
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = (resolve, reject) => (err, resp, body) => {
  if (err) {
    reject({ err });
    return;
  }

  const json = JSON.parse(body);

  if (resp.statusCode !== 200) {
    reject({
      statusCode: resp.statusCode,
      statusMessage: resp.statusMessage,
      json
    });
    return;
  }
  resolve(json);
};
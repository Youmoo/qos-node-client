/**
 * 为测试提供一个统一的客户端实例
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.largeFile = exports.localFile = undefined;

var _index = require("../index");

var _index2 = _interopRequireDefault(_index);

var _config = require("./config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const client = _index2.default.createClient({ appId: _config.appId, secretId: _config.secretId, secretKey: _config.secretKey, bucket: _config.bucket });

// 方便追踪promise问题
process.on('unhandledRejection', function (reason, p) {
  console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
  // application specific logging here
});

exports.default = client;
const localFile = exports.localFile = __dirname + '/lovely-cat.jpg';
const largeFile = exports.largeFile = __dirname + '/green-city.jpg';
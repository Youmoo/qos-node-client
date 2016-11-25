/**
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fileId = '/cattty.jpg';


_client2.default.upload({ localFile: _client.localFile, fileId }).then(res => {
  console.log('上传成功', res);
}).catch(err => {
  console.error('上传文件时报错', err);
});
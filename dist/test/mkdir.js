/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fileId = '/testt/';

_client2.default.mkdir({ fileId }).then(res => {
  console.log('文件创建成功', res);
}).catch(err => {
  console.error('文件创建失败', err);
});
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

const bucket = 'demo';
const fileId = '/catt.jpg';

_client2.default.rm({ bucket, fileId }).then(res => {
  console.log('文件删除成功', res);
}).catch(err => {
  console.error('文件删除失败', err);
});
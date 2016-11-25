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
const dir = '/';

_client2.default.ls({ bucket, dir }).then(res => {
  console.log('ls 结果: ', JSON.stringify(res, null, 2));
}).catch(err => {
  console.error('ls 失败: ', err);
});
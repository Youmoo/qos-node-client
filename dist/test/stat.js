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

_client2.default.stat({ bucket, fileId: '/cat.jpg' }).then(res => {
  console.log('stat: ', res);
}).catch(err => {
  console.error('stat: ', err);
});

_client2.default.stat({ bucket, fileId: '/' }).then(res => {
  console.log('stat: ', res);
}).catch(err => {
  console.error('stat: ', err);
});
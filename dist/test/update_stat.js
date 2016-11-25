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

const biz_attr = 'hello world';
const authority = 'eWPrivateRPublic';
const headers = {
  'Content-Type': 'text/plain'
};

_client2.default.updateStat({ bucket, fileId: '/sample_file.txt', authority, headers }).then(res => {
  console.log('stat: ', res);
}).catch(err => {
  console.error('stat: ', err);
});
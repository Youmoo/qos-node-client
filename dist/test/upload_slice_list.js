/**
 * 分片上传文件
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

var _client = require('./client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fileId = '/测试分片.jpeg';

_client2.default.uploadSliceList({ fileId }).then(res => {
  console.log('分片上传请求结果: ', res);
}).catch(err => {
  console.error('分片上传请求失败: ', err);
});
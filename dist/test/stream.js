/**
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const file = '/Users/youmoo/workspace/yej/backup/yej_server_db_160606.sql.2016-10-21_03-30-01';

let stream = _fs2.default.createReadStream(file, {
  highWaterMark: 512 * 1024 // 每次读取512k
});

let i = 0;
stream.on('data', data => {
  _fs2.default.writeFile('/tmp/sql/' + i++ + '.sql', data, console.log);
}).on('end', () => console.log('done'));
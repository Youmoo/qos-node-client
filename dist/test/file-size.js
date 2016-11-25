/**
 * 检测文件大小
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const localFile = process.argv[1];

_fs2.default.stat(localFile, (err, stat) => {
  console.log(stat);
});
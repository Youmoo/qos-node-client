/**
 * @module util
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取文件大小
 */
function getFileSize(file) {
  return new Promise((resolve, reject) => {
    _fs2.default.stat(file, (err, stat) => {
      if (err) {
        reject('获取文件大小时出错: ', err);
        return;
      }
      resolve(stat.size);
    });
  });
}

exports.default = getFileSize;
/**
 * 获取文件的sha1
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sha1(f, cb) {
  // the file you want to get the hash
  const fd = _fs2.default.createReadStream(f);
  const hash = _crypto2.default.createHash('sha1');
  hash.setEncoding('hex');

  hash.on('finish', function () {
    cb(null, hash.read()); // the desired sha1sum
  });
  // read all file and pipe it (write it) to the hash object
  fd.pipe(hash);
}

exports.default = sha1;
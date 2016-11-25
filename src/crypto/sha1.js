/**
 * 获取文件的sha1
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

import fs from "fs";
import crypto from "crypto";

function sha1(f, cb) {

  // the file you want to get the hash
  const fd = fs.createReadStream(f);
  const hash = crypto.createHash('sha1');
  hash.setEncoding('hex');

  hash.on('finish', function () {

    cb(null, hash.read());// the desired sha1sum

  });
// read all file and pipe it (write it) to the hash object
  fd.pipe(hash);
}

export default sha1;

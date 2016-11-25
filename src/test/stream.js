/**
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

import fs from "fs";

const file = '/Users/youmoo/workspace/yej/backup/yej_server_db_160606.sql.2016-10-21_03-30-01';


let stream = fs.createReadStream(file, {
  highWaterMark: 512 * 1024// 每次读取512k
});

let i = 0;
stream.on('data', (data) => {
  fs.writeFile('/tmp/sql/' + (i++) + '.sql', data, console.log);
}).on('end', () => console.log('done'));



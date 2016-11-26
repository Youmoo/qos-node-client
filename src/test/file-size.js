/**
 * 检测文件大小
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict'

import fs from 'fs'

const localFile = process.argv[1]

fs.stat(localFile, (err, stat) => {
  console.log(stat)
})

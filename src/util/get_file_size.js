/**
 * @module util
 * @author youmoo
 * @since 2016/11/24
 */
'use strict'

import fs from 'fs'

/**
 * 获取文件大小
 */
function getFileSize (file) {
  return new Promise((resolve, reject) => {
    fs.stat(file, (err, stat) => {
      if (err) {
        reject('获取文件大小时出错: ', err)
        return
      }
      resolve(stat.size)
    })
  })
}

export default getFileSize

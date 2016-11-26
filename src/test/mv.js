/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict'

import client from './client'

const bucket = 'demo'

client.mv({bucket, fileId: '/sample_filee.txt', destFileId: '/sample_file.txt'})
  .then(res => {
    console.log('stat: ', res)
  })
  .catch(err => {
    console.error('stat: ', err)
  })

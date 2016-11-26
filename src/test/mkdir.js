/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict'

import client from './client'

const fileId = '/testt/'

client.mkdir({fileId})
  .then(res => {
    console.log('文件创建成功', res)
  })
  .catch(err => {
    console.error('文件创建失败', err)
  })

/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict'

import client from './client'

const bucket = 'demo'
const dir = '/hello/world/'

client.rmdir({bucket, dir})
  .then(res => {
    console.log('文件夹删除成功', res)
  })
  .catch(err => {
    console.error('文件夹删除失败', err)
  })

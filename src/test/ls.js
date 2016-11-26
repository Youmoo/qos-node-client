/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict'

import client from './client'

const bucket = 'demo'
const dir = '/'

client.ls({bucket, dir})
  .then(res => {
    console.log('ls 结果: ', JSON.stringify(res, null, 2))
  })
  .catch(err => {
    console.error('ls 失败: ', err)
  })

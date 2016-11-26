/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict'

import client from './client'

const bucket = 'demo'

client.stat({bucket, fileId: '/cat.jpg'})
  .then(res => {
    console.log('stat: ', res)
  })
  .catch(err => {
    console.error('stat: ', err)
  })

client.stat({bucket, fileId: '/'})
  .then(res => {
    console.log('stat: ', res)
  })
  .catch(err => {
    console.error('stat: ', err)
  })

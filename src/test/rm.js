/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';


import client from "./client";

const bucket = 'demo';
const fileId = '/catt.jpg';

client.rm({bucket, fileId})
  .then(res => {
    console.log('文件删除成功', res);
  })
  .catch(err => {
    console.error('文件删除失败', err);
  });

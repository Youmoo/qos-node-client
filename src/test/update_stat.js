/**
 * 测试创建目录
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';


import client from "./client";

const bucket = 'demo';

const biz_attr = 'hello world';
const authority = 'eWPrivateRPublic';
const headers = {
  'Content-Type': 'text/plain'
};

client.updateStat({bucket, fileId: '/sample_file.txt', authority, headers})
  .then(res => {
    console.log('stat: ', res);
  })
  .catch(err => {
    console.error('stat: ', err);
  });

/**
 * 分片上传文件
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';


const fileId = '/测试分片52.jpeg';

import client, {largeFile as localFile} from "./client";

client.uploadLargeFile({localFile, fileId})
  .then(res => {
    console.log('分片上传请求结果: ', res);
  })
  .catch(err => {
    console.error('分片上传请求失败: ', err);
  });

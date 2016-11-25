/**
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

const fileId = '/cattty.jpg';
import client, {localFile} from "./client";

client.upload({localFile, fileId})
  .then(res => {
    console.log('上传成功', res);
  })
  .catch(err => {
    console.error('上传文件时报错', err);
  });

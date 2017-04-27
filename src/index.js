/**
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

import sign from "./crypto/sign";
import mkdir from "./endpoints/mkdir";
import ls from "./endpoints/ls";
import upload from "./endpoints/upload";
import rm from "./endpoints/rm";
import upload_large_file from "./endpoints/upload_large_file";
import stat from "./endpoints/stat";
import updateStat from "./endpoints/update_stat";
import mv from "./endpoints/mv";
import {upload_slice_list_easy as sliceList} from "./endpoints/upload_slice_list";

/**
 * qos类
 */
class ObjectStorage {

  /**
   * 创建一个qos实例
   */
  constructor({appId, secretId, secretKey, region = 'tj', bucket, delta = 60 * 5}) {
    this.appId = appId;
    this.secretId = secretId;
    this.secretKey = secretKey;
    this.delta = delta;
    this.url = `http://${region}.file.myqcloud.com/files/v2/${appId}/`;
    this.bucket = bucket;
  }

  /**
   * 签名操作
   */
  sign({bucket = this.bucket, fileId, timestamp = Date.now() / 1000, expired = timestamp + this.delta, random}) {
    const {appId, secretId, secretKey, delta}=this;
    return sign({appId, bucket, secretId, secretKey, timestamp, expired, random, fileId})
  }

  /**
   *  创建目录
   */
  mkdir({bucket, fileId, biz_attr = ''}) {
    return mkdir(this, {bucket, fileId, biz_attr});
  }

  /**
   * 删除目录
   */
  rmdir({bucket, dir}) {
    return this.rm({bucket, file: dir});
  }

  /**
   * 删除文件或目录
   */
  rm({bucket, fileId}) {
    return rm(this, {bucket, fileId});
  }

  /**
   * 列出目录下的文件
   */
  ls({bucket, dir = '/', num = 10}) {
    return ls(this, {bucket, dir, num})
  }

  /**
   * 简单上传文件
   */
  upload({form:{biz_attr = '', insertOnly = 1}={}, localFile, bucket = this.bucket, fileId, timestamp, expired, random}) {
    return upload(this, {form: {biz_attr, insertOnly}, localFile, bucket, fileId, timestamp, expired, random});
  }

  /**
   * 查询文件属性
   */
  stat({bucket = this.bucket, fileId}) {
    return stat(this, {bucket, fileId})
  }

  /**
   * 更新文件属性
   */
  updateStat({fileId, biz_attr, authority, headers}) {
    return updateStat(this, {fileId, biz_attr, authority, headers});
  }

  /**
   * 移动文件
   */
  mv({bucket, fileId, destFileId, overwrite = 0}) {
    return mv(this, {bucket, fileId, destFileId, overwrite})
  }

  /**
   * 分片上传查询
   */
  uploadSliceList({bucket, fileId}) {
    return sliceList(this, {bucket, fileId})
  }

  /**
   * 分片上传文件
   */
  uploadLargeFile({form:{biz_attr = '', insertOnly = 1, slice_size = 524288}={}, localFile, bucket, fileId, timestamp, expired, random}) {
    return upload_large_file(this, {
      form: {biz_attr, insertOnly, slice_size},
      localFile,
      bucket,
      fileId,
      timestamp,
      expired,
      random
    });
  }
}

export default {
  /**
   * 创建一个qos实例
   */
  createClient: ({appId, secretId, secretKey, region, bucket, delta = 3000}) => {
    return new ObjectStorage({appId, secretId, secretKey, region, bucket, delta});
  }
};

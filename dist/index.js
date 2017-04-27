/**
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sign = require("./crypto/sign");

var _sign2 = _interopRequireDefault(_sign);

var _mkdir = require("./endpoints/mkdir");

var _mkdir2 = _interopRequireDefault(_mkdir);

var _ls = require("./endpoints/ls");

var _ls2 = _interopRequireDefault(_ls);

var _upload = require("./endpoints/upload");

var _upload2 = _interopRequireDefault(_upload);

var _rm = require("./endpoints/rm");

var _rm2 = _interopRequireDefault(_rm);

var _upload_large_file = require("./endpoints/upload_large_file");

var _upload_large_file2 = _interopRequireDefault(_upload_large_file);

var _stat = require("./endpoints/stat");

var _stat2 = _interopRequireDefault(_stat);

var _update_stat = require("./endpoints/update_stat");

var _update_stat2 = _interopRequireDefault(_update_stat);

var _mv = require("./endpoints/mv");

var _mv2 = _interopRequireDefault(_mv);

var _upload_slice_list = require("./endpoints/upload_slice_list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * qos类
 */
class ObjectStorage {

  /**
   * 创建一个qos实例
   */
  constructor({ appId, secretId, secretKey, region = 'tj', bucket, delta = 60 * 5 }) {
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
  sign({ bucket = this.bucket, fileId, timestamp = Date.now() / 1000, expired = timestamp + this.delta, random }) {
    const { appId, secretId, secretKey, delta } = this;
    return (0, _sign2.default)({ appId, bucket, secretId, secretKey, timestamp, expired, random, fileId });
  }

  /**
   *  创建目录
   */
  mkdir({ bucket, fileId, biz_attr = '' }) {
    return (0, _mkdir2.default)(this, { bucket, fileId, biz_attr });
  }

  /**
   * 删除目录
   */
  rmdir({ bucket, dir }) {
    return this.rm({ bucket, file: dir });
  }

  /**
   * 删除文件或目录
   */
  rm({ bucket, fileId }) {
    return (0, _rm2.default)(this, { bucket, fileId });
  }

  /**
   * 列出目录下的文件
   */
  ls({ bucket, dir = '/', num = 10 }) {
    return (0, _ls2.default)(this, { bucket, dir, num });
  }

  /**
   * 简单上传文件
   */
  upload({ form: { biz_attr = '', insertOnly = 1 } = {}, localFile, bucket = this.bucket, fileId, timestamp, expired, random }) {
    return (0, _upload2.default)(this, { form: { biz_attr, insertOnly }, localFile, bucket, fileId, timestamp, expired, random });
  }

  /**
   * 查询文件属性
   */
  stat({ bucket = this.bucket, fileId }) {
    return (0, _stat2.default)(this, { bucket, fileId });
  }

  /**
   * 更新文件属性
   */
  updateStat({ fileId, biz_attr, authority, headers }) {
    return (0, _update_stat2.default)(this, { fileId, biz_attr, authority, headers });
  }

  /**
   * 移动文件
   */
  mv({ bucket, fileId, destFileId, overwrite = 0 }) {
    return (0, _mv2.default)(this, { bucket, fileId, destFileId, overwrite });
  }

  /**
   * 分片上传查询
   */
  uploadSliceList({ bucket, fileId }) {
    return (0, _upload_slice_list.upload_slice_list_easy)(this, { bucket, fileId });
  }

  /**
   * 分片上传文件
   */
  uploadLargeFile({ form: { biz_attr = '', insertOnly = 1, slice_size = 524288 } = {}, localFile, bucket, fileId, timestamp, expired, random }) {
    return (0, _upload_large_file2.default)(this, {
      form: { biz_attr, insertOnly, slice_size },
      localFile,
      bucket,
      fileId,
      timestamp,
      expired,
      random
    });
  }
}

exports.default = {
  /**
   * 创建一个qos实例
   */
  createClient: ({ appId, secretId, secretKey, region, bucket, delta = 3000 }) => {
    return new ObjectStorage({ appId, secretId, secretKey, region, bucket, delta });
  }
};
/**
 * 分片上传
 *
 * @author youmoo
 * @since 2016/11/24
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = upload_large_file;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _sign = require('../crypto/sign');

var _sign2 = _interopRequireDefault(_sign);

var _get_file_size = require('../util/get_file_size');

var _get_file_size2 = _interopRequireDefault(_get_file_size);

var _upload_slice_init = require('./upload_slice_init');

var _upload_slice_init2 = _interopRequireDefault(_upload_slice_init);

var _upload_slice_data = require('./upload_slice_data');

var _upload_slice_data2 = _interopRequireDefault(_upload_slice_data);

var _upload_slice_finish = require('./upload_slice_finish');

var _upload_slice_finish2 = _interopRequireDefault(_upload_slice_finish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function upload_large_file({ appId, secretId, secretKey, url, bucket: b1 }, { form: { biz_attr = '', insertOnly = 1, slice_size = 524288 } = {}, localFile, bucket: b2, fileId }) {
  return new Promise((resolve, reject) => {
    const bucket = b2 || b1;

    const auth = (0, _sign2.default)({ appId, secretId, secretKey, bucket, fileId });

    let filesize;

    (0, _get_file_size2.default)(localFile).then(size => {
      filesize = size;
      (0, _upload_slice_init2.default)({ appId, secretId, secretKey, url, bucket }, {
        auth,
        filesize,
        localFile,
        fileId,
        slice_size,
        biz_attr,
        insertOnly
      }).then(json => {
        const { session } = json.data;

        const promises = [];
        let offset = 0;
        _fs2.default.createReadStream(localFile, { highWaterMark: slice_size }).on('data', filecontent => {
          promises.push((0, _upload_slice_data2.default)({ appId, secretId, secretKey, bucket, url }, {
            auth,
            fileId,
            filecontent,
            session,
            offset
          }));
          offset += filecontent.length;
        }).on('end', () => {
          Promise.all(promises).then(() => {
            (0, _upload_slice_finish2.default)({ appId, secretId, secretKey, url, bucket }, { auth, fileId, session, filesize }).then(resolve).catch(reject);
          }).catch(reject);
        });
      }).catch(reject);
    }).catch(reject);
  });
}
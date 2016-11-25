/**
 * @author youmoo
 * @since 2016/11/25
 */
'use strict';

import sign from "../crypto/sign";
import request from "request";
import handler from "./default_response_handler";

export const post = 'post';
export const get = 'get';

function fetch({op, method, params = [], headers = {}}, {appId, secretId, secretKey, url, b1}, {b2, auth, fileId, timestamp, expired, random, ...extra}) {

  const [m,form]=method.toLowerCase() === post ? [post, 'formData'] : [get, 'qs'];

  return new Promise((resolve, reject) => {

    const bucket = b2 || b1;

    const data = params.reduce((p, v) => {
      const {name = v}=v;// :)

      let value = extra[name];
      if (v.apply) {
        value = v.apply(value);
      }
      else if (value && (typeof value === 'object')) {// 支持对象值自动序列化
        value = JSON.stringify(value);
      }
      p[name] = value;
      return p;
    }, {op});

    auth = auth || sign({appId, bucket, secretId, secretKey, fileId, timestamp, expired, random});
    const uri = `${url}${bucket}${fileId}`;

    headers = {
      'Content-Type': 'application/json',
      'Authorization': auth,
      ...headers
    };

    console.info(m, 'uri:', uri);
    // console.info(form, data);
    console.log(headers);

    // 发送请求
    request[m]({
      uri,
      [form]: data,
      headers
    }, handler(resolve, reject));

  })
}

export default fetch;

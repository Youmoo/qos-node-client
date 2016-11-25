/**
 * 为测试提供一个统一的客户端实例
 *
 * @author youmoo
 * @since 2016/11/23
 */
'use strict';

import qos from "../index";
import {appId, secretId, secretKey, bucket} from "./config";

const client = qos.createClient({appId, secretId, secretKey, bucket});

// 方便追踪promise问题
process.on('unhandledRejection', function (reason, p) {
  console.log("Possibly Unhandled Rejection at: Promise ", p, " reason: ", reason);
  // application specific logging here
});

export default client;

export const localFile = __dirname + '/lovely-cat.jpg';
export const largeFile = __dirname + '/green-city.jpg';

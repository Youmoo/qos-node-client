Node client for [qos](https://www.qcloud.com/doc/api/435/6052)
===============

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

`npm i -S qos-node-client`

## Usage

先创建一个qos client:

```
const qos = require('qos-node-client');

const appId = '66666666';
const secretId = 'hello world';
const secretKey = '你好，世界';
const bucket = 'demo';

const client = qos.createClient({appId, secretId, secretKey, bucket});
```

上传:

```
const localFile = '/path/to/lovely-cat.jpg';
const fileId = '/dir/to/file.jpg';
client.upload({localFile, fileId})
  .then(res => {
    console.log('上传成功', res);
  })
  .catch(err => {
    console.error('上传文件时报错', err);
  });
```

更多参数及用法请参见[test](src/test)


## 实现的功能

- 目录接口
  1. [x] 创建目录
  2. [x] 列出目录
  3. [x] 查询目录属性
  4. [x] 删除目录
- 文件接口
  1. [x] 简单文件上传
  2. [x] 初始化文件上传
  3. [x] 逐个上传分片
  4. [x] 结束上传分片
  5. [x] 查询文件属性
  6. [x] 查询上传分片
  7. [x] 更新文件属性
  8. [x] 删除文件
  9. [x] 移动文件


### 入参说明

|    名称   |  类型  | 是否必填 |                说明               |
|-----------|--------|----------|-----------------------------------|
| appId     | number | Y        | appId                             |
| secretId  | string | Y        | secretId                          |
| secretKey | string | Y        | secretKey                         |
| region    | string | Y        | 区域                              |
| bucket    | string | Y        | bukcet                            |
| fileId    | string | N        | 文件或文件夹名                    |
| timestamp | number | N        | 时间戳，默认为当前时间            |
| delta     | number | N        | 多久过期，默认5分钟               |
| expired   | number | N        | 过期时间，默认等于timestamp+delta |
| random    | number | N        | 随机数                            |
| auth      | string | Y        | Authorization                     |
| bizAttr   | string | N        | 自定义属性                      |
| context   | string | N        | 翻页列出目录下文件时使用        |
| num       | number | N        | 每页记录数,默认20                   |

## todo

- [ ] 引入jest作为测试
- [ ] 创建一个cli工具，用于在控制台上传、下载、查询文件

## faq

1. 如何确定入参`fileId`的值?
    `fileId`是bucket之后的路径名且必须以`/`开头。
    - 假设文件在bucket b中的位置是/b/path/file.ext, 则fileId=/path/file.ext
    - 假设文件夹在bucket b中的位置是/b/path/dir, 则fileId=/path/dir


## Copyright and license

Code copyright 2016 Youmoo. Code released under [the MIT license](LICENSE).

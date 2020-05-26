# 短链接生成(第三方)
本接口是为了方便 [你不会百度吗](https://nbhbdm.cn) 的接入而设计的...调用 [缩我](https://suo.im) 的 API 接口。   
目前此接口已经被使用于[你不会百度吗](https://nbhbdm.cn)。   
注意：该接口由于可能会引起他人滥用，故采用token鉴权的方式进行认证。   
## 数据介绍
将一个长链接转换为短链接。
## 获取方式
HTTP GET
```
http://api.tzg6.com/api/shortlink?token={token}&url={url}
```
token：你申请到的 API Token （必选）   
URL：需要转换为短链接的URL （必选）   
## 返回参数
该接口将直接返回生成后的短链接。
## 返回数据示例
```
https://suo.im/5Ln61B
```
## 备注
若接口出现异常，将只返回``` status ```参数。   
``` status ```参数仅在接口出现异常时返回。
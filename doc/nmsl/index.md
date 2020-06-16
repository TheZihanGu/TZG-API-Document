# 祖安接口
注意：该接口由于可能会引起他人滥用，故采用 token 鉴权的方式进行认证。   
你可以在[这里](/token-apply.html)申请Token.
## 数据介绍
从我们的数据库中随机输出一句祖安语录.
## 获取方式
HTTP GET
```
https://api.tzg6.com/api/nmsl?token={token}
```
token：你申请到的 API Token （必选）   
若要申请API Token，请前往[Token申请](https://api.tzg6.com/token-apply.html)
## 返回参数
``` id ```: 语句编号   
``` text ```: 随机选取到的祖安语录   
## 返回数据示例
```
[{
	"id": 1,
	"text": "这是一句用于文档的示例文字。"
}]
```
## 备注
若接口出现异常，将只返回``` status ```参数。   
``` status ```参数仅在接口出现异常时返回。
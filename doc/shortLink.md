# 短链接服务
便捷, 几乎无限制, 自主开发的短链接服务.
::: tip
注意：该接口由于可能会引起他人滥用，故采用**接口专用token**鉴权的方式进行认证。   
你可以查看本篇文档的相关内容来申请专用Token.
:::
## 数据介绍
将一个长链接转换为短链接。
## 获取方式
HTTP GET
```
https://r7t.net/generateURL?token={token}&longLink={longLink}
```
token：你申请到的专用 API Token （必选）   
longLink：需要转换为短链接的URL （必选）  
## 返回参数
```status```: 状态码   
```shortLink```: 短链接后缀   
```message```: 详细信息   
## 返回数据示例
```
{
    "status":"200",
    "shortLink":"test",
    "message":"Request OK."
}
```
## 状态码含义
```200```: 请求正常. 无需其他操作.   
```403```: Token 不存在. 请确认 Token 的可用性.   
```405```: 在请求的参数中未定义 ```longLink```.   
## 申请专用 Token
为了防止接口被滥用, 我们决定采用 **专用Token** 的方式进行鉴权。   
与 TZG-API Token 不同, 专用Token将仅适用于此接口。   
你可以通过以下方式申请专用Token.
### 申请方式
请使用 **申请普通Token时使用的邮箱** 发送邮件到 [zihangu@tzg.asia](mailto:zihangu@tzg.asia) 进行申请。
格式如下：

```
申请人昵称:
申请人联系邮箱:
申请人普通Token:
申请原因:
```

我们将在收到申请后的3个工作日内为你审核并颁发 Token.   
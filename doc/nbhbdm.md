# 你不会百度吗
这是一个 [你不会百度吗](https://nbhbdm.cn) 网站的 API 接口，供开发者基于此网站进行开发。   
## 数据介绍
通过 API 获取 [你不会百度吗](https://nbhbdm.cn) 普通链接及短链接。
## 获取方式
HTTP GET
## 请求URL
```
https://api.nbhbdm.cn/api/nbhbdm?keyword={keyword}
```
keyword: 需要搜索的关键词 (必选)   
## 返回参数
``` status ```: 状态   
``` slink ```: 生成的 你不会百度吗 短链接   
``` nlink ```: 原链接
## 返回数据示例
```
{
    "status":"ok",
    "slink":"http://suo.im/64KzXD",
    "nlink":"https://nbhbdm.cn/?s=%E5%93%88%E5%93%88%E5%93%88"
}
```   
### 异常返回
若短链接接口出现异常，将会进行异常返回。错误信息将会包含在```slink```中。
```
{
    "status":"error",
    "slink":"connection error",
    "nlink":"https://nbhbdm.cn/?s=%E5%93%88%E5%93%88%E5%93%88"
}
```
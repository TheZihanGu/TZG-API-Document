# BiliBV
一时兴起写的接口，可以将B站的BV号转换为AV号。   
感谢知乎 @mcfx 提供算法支持。[如何看待 2020 年 3 月 23 日哔哩哔哩将稿件的「av 号」变更为「BV 号」？- mcfx的回答](https://www.zhihu.com/question/381784377/answer/1099438784)
## 数据介绍
将 BiliBili BV号转换为AV号。
## 获取方式
HTTP GET
## 请求URL
```
https://api.tzg6.com/api/bilibv?bv={BV}
```
BV: 要被转换为AV的BV号 (必选)   
## 返回参数
``` status ```: 状态   
``` av ```: 转换后的 av 号或错误信息
## 返回数据示例
```
{
    "status": "ok",
    "av": "av668550954"
}
```   
### 异常返回
```
{
    "status": "error",
    "av": "Decoding failed."
}
```
## 备注
该接口算法还在测试中。如果您发现该接口解码的数据不正确，请前往[留言板](https://zihangu.com/?page_id=175)进行反馈。
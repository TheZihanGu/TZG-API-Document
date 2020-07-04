# 灰白图片生成
没有什么好说的，主要是为了哀悼日时使用的。   
## 数据介绍
HTTP POST 一张图片，然后通过返回的链接获取灰白图片.    
顺序：先 POST 再GET.
## 获取方式
HTTP GET, HTTP POST
## 请求URL(POST)
```
https://api.tzg6.com/api/mourn/upload-avatar
key: avatar, value: image file
```
## 返回参数(POST)
``` result ```: 灰白图片结果链接
## 返回数据示例
```
{
    "Result": "https://api.tzg6.com/api/mourn?file=SAMPLE"
}
```
## 请求URL(GET)
```
https://api.tzg6.com/api/mourn?file=[filename]
```
file: 上传的文件名
## 返回参数(GET)
直接发送```image/PNG```类型的图片数据.
# MC服务器状态贴图生成
此API已经被应用到[TZG MCStatus](https://mcstatus.tzg6.com).
## 数据介绍
获取Minecraft服务器的状态，MOTD、在线人数和最大人数等信息，并生成贴图.
## 获取方式
HTTP GET
## 请求URL
```
https://api.tzg6.com/api/mcstatus-image.png?ip={ServerIP}&port={Ports}&motd={Motd}
```
ServerIP: 被获取状态的Minecraft服务器IP (必选)   
Ports: 被获取状态的Minecraft服务器端口号 (必选)   
Motd: 自定义生成图片的标题，若不指定将默认使用服务器的Motd信息，不能使用中文。(可选)   
## 返回参数
此接口将直接返回生成后的图片内容。(Image/PNG)
## 返回数据示例
<div style="text-align:center"><img style="float:middle" src='http://api.tzg6.com/api/mcstatus-image.png?ip=mc.tzg6.com&port=25565&motd=TZG-Craft' height="150"></div>
## 隐私
在图片生成后，我们的程序将会立即删除生成的图片或在一天后进行删除。我们不会将您的服务器信息提供给任何第三方机构或个人。
# MC服务器状态查询
这个接口原本是想写一个机器人查询去解析的...结果弃坑了（   
（然后就写了一个MCStatus，你可以在[这里](https://mcstatus.tzg6.com)找到。
## 数据介绍
获取Minecraft服务器的状态，包括延迟、版本、MOTD、在线人数和最大人数等信息。
## 获取方式
HTTP GET
## 请求URL
```
https://api.tzg6.com/api/mcstatus?ip={ServerIP}&port={Ports}
```
ServerIP: 被获取状态的Minecraft服务器IP (必选)   
Ports: 被获取状态的Minecraft服务器端口号 (必选)   
## 返回参数
``` address ```: 服务器IP   
``` port ```: 服务器端口号   
``` latency ```: PING延迟   
``` online ```: 是否在线   
``` version ```: 服务器版本   
``` motd ```: 服务器MOTD   
``` current_players ```: 目前服务器在线人数   
``` max_players ```: 最大服务器在线人数   
## 返回数据示例
```
{
	"address": "127.0.0.1",
	"port": "25565",
	"latency": 37,
	"online": true,
	"version": "1.15.2",
	"motd": "TZG-API Test Server",
	"current_players": "20",
	"max_players": "20"
}
```
## 备注
若服务器处于离线状态，接口将仅返回``` address ```、``` port ```和``` online ```参数。
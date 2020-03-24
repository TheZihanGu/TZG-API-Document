# Mojang Helper
解决Mojang API获取数据时返回No'Access-Control-Allow-Origin' header is present on the requested resource的问题。
## 数据介绍
此接口目前包含MCProfiles和MCSession两个接口的获取处理，分别获取的是以下两个接口的数据：   
* https://api.mojang.com/users/profiles/minecraft/
* https://sessionserver.mojang.com/session/minecraft/profile/
## 获取方式
HTTP GET
## 请求URL
```
https://api.tzgz6.com/api/mcprofiles?name={username}
https://api.tzgz6.com/api/mcsession?id={uuid}
```
username: 玩家的正版用户名(不区分大小写) (必选)   
uuid: 玩家的UUID (必选)   
## 返回参数
接口返回参数与Mojang API返回参数一致。
## 返回数据示例
```
{
    "id":"f03695547707486ab2308518f04102f7",
    "name":"Undefined"
}
```   
```
{
    "id":"f03695547707486ab2308518f04102f7",
    "name":"Undefined",
    "properties":[
        {
            "name":"textures",
            "value":"eyJ0aW1lc3RhbXAiOjE1ODUwMTAxNjk1OTMsInByb2ZpbGVJZCI6ImYwMzY5NTU0NzcwNzQ4NmFiMjMwODUxOGYwNDEwMmY3IiwicHJvZmlsZU5hbWUiOiJVbmRlZmluZWQiLCJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjNlZTYyYjkxMWIxM2Y4ZjkyYTg4NDBkMjcwYTBmYjY4ODMyZGM4YjQzMGQxZjM4YTVmOTVjNmZlMjI0OGVjMCIsIm1ldGFkYXRhIjp7Im1vZGVsIjoic2xpbSJ9fX19"
        }
    ]
}
```   
## 备注
若MCProfiles未传入name，将返回一个名为Undefined的玩家的数据，请注意程序进行判断。
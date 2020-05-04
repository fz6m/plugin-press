---
sidebar: auto
---

# **介绍** 

## 框架
这里主要是基于酷Q `NoneBot` 开发框架的几个插件使用说明

## 酷Q是什么？
[酷Q](https://cqp.cc) 是一个轻巧、免费、高效的 QQ 机器人核心，可以基于此利用不同的语言开发各种聊天功能

## NoneBot是什么？
如果你使用过 NoneBot ，可马上进入插件使用说明。<br/>
如果你不了解 NoneBot ，你需要先学习 酷Q 的HttpApi插件使用方式：<br/>
你可以在GitHub上学习 [HttpApi](https://github.com/richardchien/coolq-http-api) 的使用方式，参考他的 [开发文档](https://cqhttp.cc/docs/) 做相应的配置。<br/>
之后，再学习 [NoneBot](https://github.com/richardchien/nonebot) 与其相应的 [开发文档](https://nonebot.cqp.moe/) 

## 可能用到的
如果你之前没有接触过 NoneBot ，第一次使用前建议安装 NoneBot 计划任务的依赖，这在很多 NoneBot 插件内都需要使用到：
```python
    pip install "nonebot[scheduler]"
```
当然，如果实际使用插件中报错了也可以再安装~
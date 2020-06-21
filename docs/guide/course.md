---
sidebar: auto
---

# 从零开始

::: tip 提示
从零开始使用本插件的教程，如果你已经明白怎么使用 cqhttp 与 nonebot 则无需本章内容。
:::

## 部署 cqhttp 插件
### 下载
我们的插件依赖于 cqhttp 中控台提供的 httpapi 进行通信，所以需要先部署 cqhttp 插件。

下载地址：[cqhttp releases](https://github.com/richardchien/coolq-http-api/releases)

在 releases 中下载最新一个版本的 `.cpk` 即可：
<img :src="$withBase('/cqhttp_releases.jpg')">

下载完毕之后放入 酷Q 根目录下的 `app` 文件夹（插件文件夹）内。

### 配置
在 酷Q 内重载一遍插件列表，启动刚刚下载的 cqhttp 插件，这时 cqhttp 配置文件会生成在 酷Q 根目录下的 `data/app/io.github.richardchien.coolqhttpapi/config/` 内，有一个以你机器人 QQ 号命名的 `.json` 文件。

启动过程中会有中控台弹出，无需理会，关闭该插件，之后找到该配置文件，修改其如下部分：
```json
   "use_ws_reverse": true,
   "ws_reverse_api_url": "ws://127.0.0.1:8080/ws/api/",
   "ws_reverse_event_url": "ws://127.0.0.1:8080/ws/event/",
```

如果没有相应的参数就添加该参数，如果有就修改其值。

其中 `use_ws_reverse` 代表使用 websockets （ nonebot 的通信方式），`ws_reverse_api_url` 和 `ws_reverse_event_url` 代表主动请求 api 和事件上报的双向 ws 通道对应的地址，如果你不想运行在 `8080` 端口或者已有占据 `8080` 端口的程序，可以自行更改端口号。

保存该文件即部署完毕 cqhttp 插件。

## 部署 Python 环境
很多人都是因为 Python 的易用性选择 cqhttp 插件，基本都会使用 Python ，如果没有接触过 Python ，可以按照以下流程部署 Python 环境：
1. 在网上下载 Python 安装包并安装
2. 安装时注意勾选将 Python 添加至系统路径
3. 如果没有勾选，可以自己在网上查找将 Python 添加至系统路径的教程

## 安装 nonebot 依赖
 `nonebot` 是 Python 的一个库，是对 cqhttp 提供的 httpapi 接口的一个方便的封装。

 需要安装以下 `nonebot` 的基础依赖：
 ```shell
   pip install nonebot
   pip install "nonebot[scheduler]"
   pip install aiocqhttp
 ```

注：
1. 不知道怎么安装依赖自己百度搜索 Python 怎么安装依赖包即可，打开 cmd 输入命令即可安装。
2. 如果安装太慢或者超时报红导致安装失败，可以使用大清镜像源，使用例子：
   ```shell
      pip install -i https://pypi.tuna.tsinghua.edu.cn/simple 包名
      pip install -i https://pypi.tuna.tsinghua.edu.cn/simple nonebot
   ```

## 其他
至此，已经全部部署好了 cqhttp 插件、 Python 运行环境、 nonebot 依赖，可以进入插件使用部分的文档。
---
sidebar: auto
---

# Pixiv 看图

::: tip 提示
这个插件必须要求 酷Q Pro 版本，因为要发送图片。
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases/download/0.1/Pixiv.zip) 下载解压，将解压得到的 `CQPixiv` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `pixiv` 文件夹在同一级目录，文件夹 `CQPixiv` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'pixiv'),
        'pixiv'
    )
```

### 安装依赖
本插件需要安装以下依赖：
```sh
    pip install ujson
    pip install python-dateutil
    pip install pixivpy
```
注：如果安装 `ujson` 依赖失败，你可以不安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

### 配置账号
你需要准备一个 Pixiv 的账号，以保证能获取到 Pixiv 的图片地址信息，在 `CQPixiv/pixiv/data/account.json` 内配置如下格式的账号密码信息即可：
```json
{
    "account": "username",
    "password": "password"
}
```

### 修改撤回时长
本插件默认发送图片 30 s 后撤回，为什么这么设定，是因为有些情况是 r18 图，这样你的号就没了，很危险，所以需要手动更改这个时长，你可以在 `CQPixiv/pixiv/main.py` 的第 `24` 行找到如下部分：
```python
    messageID = message['message_id']
    await asyncio.sleep(30) # 括号内的数字为撤回的秒数
    await bot.delete_msg(message_id = messageID)
```
如果你不需要撤回，请把这三行注释掉，如下：
```python
    # messageID = message['message_id']
    # await asyncio.sleep(30)
    # await bot.delete_msg(message_id = messageID)
```

### 配置管理员
插件需要配置管理员才能启动收集图片功能，所以你需要在 `CQPixiv/pixiv/data/administrators.json` 内配置管理员 QQ 号，如下格式：
```json
{
    "user": [
        123456789, 987654321
    ]
}
```

## 使用
插件默认是没有任何图包的，需要配置了管理员的账户使用收集图包命令。
### 下载画师包
本插件目前只支持按画师 id 收集图包，所以画师 id 请提前自行确认，群内指令格式：
```
    kkt 画师id
    kkt 28246124
```
收集成功与失败均有相应的消息提示。

注：并不是真正下载画师的所以图片到本地，而是收集其图片地址信息，需要使用时再下载实际的图片。

### 查看图片
在群内使用如下指令可以 从目前所有画师的图包 中随机的抽取一张图片发送：
```
    图来
    不够
```

## 其他
### 增改指令
你可以在 `CQPixiv/pixiv/main.py` 的第 38 行找到触发看图的指令列表：
```python
    drawingCommand = ['图来', '不够']
```
可以在第 43 行找到触发收集图片的前缀指令列表：
```python
    getResourceCommand = ['kkt']
```

### 封号问题
如果你的群里有内鬼，你可能会被以 **组织相关传销、广告活动** 封禁。

原理：因为你发一个指令就出一张图，所以系统认定你在组织活动。
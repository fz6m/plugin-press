---
sidebar: auto
---

# 一言

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases/download/0.1/Hitokoto.zip) 下载解压，将解压得到的 `CQHitokoto` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `hitokoto` 文件夹在同一级目录，文件夹 `CQHitokoto` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'hitokoto'),
        'hitokoto'
    )
```

### 安装依赖
本插件需要安装以下依赖：
```sh
    pip install ujson
```
注：如果安装 `ujson` 依赖失败，你可以不安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

## 使用
你可以在群内使用如下指令触发一言功能：
```
    一言
    一言 anime
    一言 comic
    一言 game
    一言 novel
    一言 myself
    一言 internet
    一言 other
```
参数的含义如下：
参数|含义
:-:|:-:
anime|动画
comic|漫画
game|游戏
novel|小说
myself|原创
internet|来自网络
other|其他
空|随机
错误的参数|随机

## 备份
一言数据源自 `https://v1.hitokoto.cn/`。

为了防止倒闭，所有使用过的一言都会以 `.json` 形式保存在 `hitokoto/data/backup.json` 中，目前还没有调用本地备份数据的功能，如果他倒闭了会再出此功能。
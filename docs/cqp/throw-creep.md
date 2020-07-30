---
sidebar: auto
---

# 丢人爬

::: tip 提示
这个插件必须要求 酷Q Pro 版本，因为要发送图片。
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases/download/0.13/Throw.Creep.zip) 下载解压，将解压得到的 `CQThrow&Creep` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `creep` 文件夹在同一级目录，文件夹 `CQThrow&Creep` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'creep'),
        'creep'
    )
```

### 安装依赖
本插件需要安装以下依赖：
```sh
    pip install pillow
```

## 开始使用
你可以在群内发送如下指令之一触发该插件：
```
    # 触发爬命令
    爬 @群友
    @群友 爬

    # 触发丢命令
    丢 @群友
    @群友 丢
```
触发相应命令后，即会回复相应的图片。

## 其他
### 触发命令
你可以在 `CQThrow&Creep/creep/match.py` 的第 9-10 行找到如下触发指令列表：
```python
    creepCommandList = ['爬', '爪巴', '给爷爬', '爬啊', '快爬']
    throwCommandList = ['丢', '我丢']
```
分别对应：<br>
 - `creepCommandList`：爬的触发命令，只要消息中含有该列表中的指令同时 at 了人就会触发。
 - `throwCommandList`：丢的触发命令，只要消息中含有该列表中的指令同时 at 了人就会触发。

你可以对相应的指令列表进行增删修改。

### 爬的概率
你可以在 `CQThrow&Creep/creep/throw.py` 的第 11 行找到爬的概率：
```python
    # 爬的概率 越大越容易爬 取值区间 [0, 100]
    creep_limit = 80
```

## 插件原作者
感谢该插件提议原作者：[clague](https://github.com/clague)
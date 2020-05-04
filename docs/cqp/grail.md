---
sidebar: auto
---

# 小游戏Demo

::: tip 提示
使用插件过程中，若需修改配置文件必须保证在 UTF-8 编码下保存。<br>
若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/tree/master/rar) 下载解压，将解压得到的 `CQGrail` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `HolyGrailWar` 文件夹在同一级目录，文件夹 `CQGrail` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'HolyGrailWar'),
        'HolyGrailWar'
    )
```

### 安装依赖
本插件依赖加速处理 `json` 库、时间处理库以及分词库，需要安装以下依赖：
```sh
    pip install ujson
    pip install python-dateutil
    pip install jieba_fast
```
注1：如果安装 `ujson` 依赖失败，你可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```
注2：如果安装 `jieba_fast` 快速分词库失败，可以参考 [这篇文章](https://blog.csdn.net/qq_21567385/article/details/104688274) 解决安装失败可能的问题，全部问题解决完毕可能会占用你 `1` 小时左右的时间以及 `8 G` 的硬盘空间，但可以获得分词速度 `x 2` 倍的收益。<br>
如果你不愿意处理问题，并接受一定程度的低速处理，可以选择安装原版 `jieba` 库：
```sh
    pip install jieba
```
安装完毕之后，在 `HolyGrailWar/matching.py` 内修改前几行的库导入：
```python
    # 需要修改的行
    import jieba_fast as jieba
```
修改后：
```python
    # import jieba_fast as jieba
    import jieba
```

### 验证目录结构
保证在你的 `HolyGrailWar` 文件夹下，存在 `Config` 和 `User` 两个文件夹，且 `User` 内结构如下：
```python
    ━ User
      ├ Battle
      ├ Data
      ├ Ranking
      ├ SequenceCode
      └ Servant
```
其中所有文件夹均为空文件夹，未避免不必要的错误，在没有搞清楚具体配置文件结构前，请不要擅自往文件夹内加入文件。

### 开始使用
在群内使用 `帮助` 命令即可开启用户导航，进行游戏。

### 配置文件
用户信息修改：使用后可以参照 `User` 文件夹内的配置文件修改相应的参数。<br>
用户信息增删：在不了解源码的情况下，请勿人为增加或删除配置文件内的信息。<br>
<br>
核心配置修改：可以参照 `Config` 文件夹内的配置文件修改相应的参数。<br>
核心配置增删：在不了解源码的情况下，请参照已经出现过的结构增删信息块，否则可能出现错误。<br>

## 了解源码结构

### 使用 Debug 模式
可以通过 `Pycharm` 或 `Vscode` 的 Debug 调试模式打断点快速了解源码执行流程与函数。

### 增删逻辑
如需定义新的配置文件参数和功能，找到相应的功能函数修改相应的逻辑即可。

### 定义自己的新功能
参照已有的 主功能函数 调用的 打包好的函数 与参数，自定义自己的新功能。<br>
有时对 配置文件 的参数调用判断不是全面的，在使用时，请自行调试查清。


## 文案
感谢相关交流群的创意文案
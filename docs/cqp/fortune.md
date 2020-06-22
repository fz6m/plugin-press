---
sidebar: auto
---

# V 运势

::: tip 提示
这个插件必须要求 酷Q Pro 版本，因为要发送图片。<br>
同时保证所有配置文件在 UTF-8 编码下保存。<br>
若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases) 下载解压，将解压得到的 `CQVortune` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `vortune` 文件夹在同一级目录，文件夹 `CQVortune` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'vortune'),
        'vortune'
    )
```

### 安装依赖
本插件需要安装以下依赖：
```sh
    pip install ujson
    pip install python-dateutil
    pip install pillow
```
注：如果安装 `ujson` 依赖失败，你可以不安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

## 开始使用
你可以在群内发送如下指令之一触发该插件：
```
    今日人品
    今日运势
    抽签
    人品
    运势
    小狐狸签
    吹雪签
```
当使用 `小狐狸签` 和 `吹雪签` 时，底图固定为白上吹雪。

## 其他
### 触发命令
你可以在 `CQVortune/vortune/main.py` 的第 12 行找到如下触发指令列表：
```python
    commandList = ['今日人品', '今日运势', '抽签', '人品', '运势', '小狐狸签', '吹雪签']
```

### 文案增改
你可以在 `CQVortune/vortune/data/fortune/copywriting.json` 找到所有运势文案内容，按照其已有格式添加结构即可：
```json
    {
        "good-luck": 10,
        "content": "曾经的努力和经验会成为他人眼中魅力的样子"
    }
```
其中：<br>
`good-luck` ： 吉凶度 的编号，在同文件夹的 `CQVortune/vortune/data/fortune/goodLuck.json` 可以找到吉凶度设定，受字体限制，吉凶度是日语，请不要加入中文。<br>
`content` ：运势文案内容。

### 文案来源
插件自带了 100 余个运势文案，来自于 hololive 早安系列第 3.21 - 3.29 期，如果想自己添加文案却没有头绪，可以参考其他期视频添加。

### 吉凶度
配置 吉凶度 设定的 `goodLuck.json` 文件，如果需要改动，要保证新增满足如下结构：
```json
    {
        "good-luck": 10,
        "name": "大吉"
    }
```
其中：<br>
`name`：为吉凶度名称，最多 3 个汉字或假名，必须为日语。<br>
`good-luck`：代表 吉凶度 代号，默认已经提供了 19 个吉凶度可供选择，其吉凶排序来自于 [wiki](https://ja.wikipedia.org/wiki/%E5%90%89%E5%87%B6) 百科。

要问为什么 吉 在 小吉 之后，我也不知道，实际使用时可以根据习惯来选择吉凶度，单独给予每一个吉凶度代号是为了方便不会日语的人，不需要在意其具体好坏。

一些吉凶度说明：
名称|含义
:-:|:-:
半吉|没有 大吉、中吉、小吉、吉 那么好，但是要比 末吉、末小吉 要好
末吉|这里的“末”指好运将要到来的意思，也就是现在并没有好坏，未来将会演变为 吉、小吉、中吉 等，当然也有可能变为 大吉
仕事運|“仕事”是工作的意思，也就是工作、职场上的好运
勉強運|“勉強”是学习的意思，也就是与学习、学业相关的运气
関係運|指人际关系方面的运气
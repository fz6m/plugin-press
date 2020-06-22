---
sidebar: auto
---

# 图片旋转

::: tip 提示
这个插件必须要求 酷Q Pro 版本，因为要发送图片。
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases) 下载解压，将解压得到的 `CQPicrotating` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `picrotating` 文件夹在同一级目录，文件夹 `CQPicrotating` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'picrotating'),
        'picrotating'
    )
```

### 安装依赖
本插件需要安装以下依赖：
```sh
    pip install ujson
    pip install pillow
```
注：如果安装 `ujson` 依赖失败，你可以不安装，从而会自动使用已有 `json` 库代替 `ujson` （性能较低），你也可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

## 开始使用
该插件是一个被动功能，当有群友发送图片时便会随机触发此功能进行随机旋转并回复。

## 配置
### 旋转概率
一般情况不建议修改概率。你可以在 `CQPicrotating/picrotating/main.py` 的第 48 行找到如下部分：
```python
    # 抽取一个 0 - 100 间的数，如果大于 60 则进行旋转
    extract = random.randint(0, 100)
    if extract > 60:
```
由于产生随机数是假随机，所以有的时候触发频繁有的时候怎么都不会触发，设置为 60 或 70 （也就是有 40% 、30% 概率触发）较好。

### 屏蔽群
有时候一些群会通过此功能引导你的机器人发送违规图片，所以你可以在 `CQPicrotating/picrotating/config/shield.json` 配置需要屏蔽的群号列表，例子如下：
```json
{
    "group": [
        12345678, 87654321
    ]
}
```
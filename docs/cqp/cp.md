---
sidebar: auto
---

# CP 小故事

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases/download/0.1/cp.zip) 下载解压，将解压得到的 `CQCp` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `cp` 文件夹在同一级目录，文件夹 `CQCp` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'cp'),
        'cp'
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
在群内使用以下格式的指令可以触发随机的 CP 小故事：
```
    cp 攻 受
```
其中 攻 、 受 均为任意文字<br>
举例：
```
    cp 夏哥 心心
```

## 文案
文案源自 [mxh-mini-apps / mxh-cp-stories](https://github.com/mxh-mini-apps/mxh-cp-stories) ，你可以在 `CQCp/cp/data/content.json` 找到，并可以按照已有格式添加文案。
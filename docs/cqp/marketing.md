---
sidebar: auto
---

# 营销号文案生成器

## 部署流程

### 使用 cpk 版
你可以选择不安装 nonebot 版本，本插件提供可以直接使用的 `.cpk` 插件版，在 [releases](https://github.com/fz6m/nonebot-plugin/releases/download/0.0/com.fz6m.marketing.cpk) 下载后直接放入 `app` 插件文件夹即可开始使用。

### 解压
如果你选择使用 nonebot 版本，将 [本插件](https://github.com/fz6m/nonebot-plugin/releases/download/0.1/Marketing.zip) 下载解压，将解压得到的 `CQMarketing` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `cp` 文件夹在同一级目录，文件夹 `CQMarketing` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'marketing'),
        'marketing'
    )
```
## 使用
在群内，你可以使用如下格式的指令触发功能：
```
    营销号|营销|yxh 主体 事件 另一种解释 
```
举例：
```
    营销 吃鸡 遁地 网络太卡了
    营销号 臭鼬 接头 臭鼬接了个头
```
另外，你也可以省略第三个参数 `另一种解释` ，从而会自动进行 同义反复 （Tautology），比如：
```
    yxh 臭鼬 接头
```
相当于
```
    yxh 臭鼬 接头 臭鼬接头
```

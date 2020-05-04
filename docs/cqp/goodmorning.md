---
sidebar: auto
---

# 早晚安

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/tree/master/rar) 下载解压，将解压得到的 `CQGoodmorning` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `GoodMorning` 文件夹在同一级目录，文件夹 `CQGoodmorning` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'GoodMorning'),
        'GoodMorning'
    )
```

### 安装依赖
本插件依赖加速处理 json 的库，需要安装以下依赖：
```sh
    pip install ujson
    pip install python-dateutil
```
注：如果安装 `ujson` 依赖失败，你可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

## 开始使用
当有群友在群内发送与 早晚安 相关的消息时，就会自动登记并统计工作 / 睡眠的时间（如果有）。

## 自定义化与相关配置
### 触发关键词
触发 早晚安 为完全匹配（防止不必要的消息），相关触发命令可在 `GoodMorning/match.py` 内找到如下代码：
```python
    # Recognition instruction
    goodMorningInstructionSet = ['早', '早安', '哦哈哟', 'ohayo', 'ohayou', '早安啊', '早啊', '早上好']
    goodNightInstructionSet = ['晚', '晚安', '哦呀斯密', 'oyasumi', 'oyasimi', '睡了', '睡觉了']
```

### 部分配置
一般情况下，并不需要自定义配置，所以没有抽取相应的配置文件，如果需要，请按如下方式寻找：

文件：`GoodMorning/main.py`
单位：小时

```python
# Line 104
# 早安后 4 小时内不能晚安
if sleepingTime <= 4:
# Line 165
# 晚安后 4 小时内不能早安
if soberTime <= 4:
# Line 109
# 睡眠时间小于 24 小时，才会统计睡眠时间
if sleepingTime < 24:
# Line 170
# 工作时间小于 24 小时，才会统计工作时间
if soberTime < 24:
```

### 统计排行过期时间
* 起床排名：每天 `00:00` 重置排名
* 晚安排名：每天 `12:00` 重置排名

注：考虑到修仙，假如 `00:00` 点过后再 晚安 ，依然参与前一天的晚安排名。

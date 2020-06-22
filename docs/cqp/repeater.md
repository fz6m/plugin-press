---
sidebar: auto
---

# 复读机

::: tip 提示
如果要发送图片，请使用 酷Q Pro 版本。<br>
同时保证所有配置文件在 UTF-8 编码下保存。<br>
若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases) 下载解压，将解压得到的 `CQrepeater` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `repeater` 以及 `repeater_data` 两个文件夹在同一级目录，文件夹 `CQrepeater` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'repeater'),
        'repeater'
    )
```
### 配置
在 `repeater_data/` 文件夹中，几个文件的配置方法如下：
#### `gjc_no.txt` :
在本文件内可填入屏蔽复读机的群号，一个群号占一行。
#### `gjc.txt` :
可以设定额外的回复关键词，每个关键词为一行，如下：
参数 | 说明
 :-: | :-
key | 触发关键词
model | model = 1 为精确匹配，0 为模糊匹配(含有即可)
lock | 是否需要锁定，lock = 1 为含锁，当含锁的关键词被触发一次后，下次需要在 60 s 后才能被再次触发，一般用于语音等敏感消息
sendMsg | 回复消息内容，可以使用 CQ码 回复语音，图片等
格式：
```
    key model lock sendMsg
```
例子：
```
    早 0 1 [CQ:record,file=alice.silk]
```
::: tip 注意
这个复读机插件本身包含复读2次就会 +1 的功能。
:::
## 更改锁定时长
在 `repeater/__init__.py` 中，有这么一部分：
```python
    ···
    # 60 即为带锁时长，可自由修改
    if sub>60:
        with open(p,"w") as f:
            f.write(str(s))
        return 1
    else:
        return 0
    ···
```




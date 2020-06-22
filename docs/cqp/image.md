---
sidebar: auto
---

# 表情包自定义

::: tip 提示
这个插件必须要求 酷Q Pro 版本，因为要发送图片。<br>
同时保证所有配置文件在 UTF-8 编码下保存。<br>
若为 ANSI ，可使用 NotePad++ 编码 -> 转为 UTF-8
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases) 下载解压，将解压得到的 `CQimage` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `image` 以及 `image_data` 两个文件夹在同一级目录，文件夹 `CQimage` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'image'),
        'image'
    )
```

### 安装依赖
本插件依赖处理图片的 python 库，需要安装以下依赖：
```sh
    pip install pillow
```

### 设置用户指南图片
本插件自身附带了一些表情，可供基本使用。之后会专门讲解如何自定义新的表情包。<br>
为了方便用户一键调出可以切换的表情有哪些，本插件在 `CQimage` 文件夹内提供了一个极其简易的列表图片，请将此 `list.jpg` 文件移动到 `酷Q/data/image/` 文件夹内，以便用户在群内发送指令：
```
    img list
```
以上指令可以触发用户指南图片 `list.jpg` 的发送，如果想要用自己的用户指南图片，更换该图片文件即可，不过图片名字不能更改，必须为 `list.jpg` !<br>

到此为止，部署完毕。<br>
启动 HttpApi 插件，在群内发送如下命令：
```
    xxxx.jpg
    xxxx.JPG
```
例子：
```
    rcnb.jpg
    ???.JPG
```
即可触发得到自定义的表情包。

## 用户更换表情包
用户是通过别名来更换表情包的，用户不应该使用复杂的英文参数，这样不够友好，所以我们的表情包别名定义在 `image_data/bieming/` 下的 `name.ini` 中，格式如下：
```
    表情别名 表情id
```
在后文自定义表情部分将介绍什么是 `表情id` 。
例子：
```
    狗妈1 kaguranana
```
当用户在群内发送：
```
    img 图片的别名
```
用户就会更换自己的表情包底图，每个用户使用的表情包是独立的，持久的，在下次更换之前不会改变。
例子：
```
    img 狗妈1
```
即可更换到别名标识为 `狗妈1` 的表情包底图。

## 自定义表情包
用户是不可以自定义新表情包的，因为文字位置用户不能控制，必须由我们先定义好表情配置才能提供给用户使用。<br>
流程如下：
### 建立文件夹
在 `image_data/` 下建立一个由你决定的为 `表情id` 的文件夹，假设为 `katsuna` ，此时路径为 `image_data/katsuna/` 。

### 定义表情
一张表情拥有一个独立的文件夹，在 `katsuna/` 下建立一个表情配置文件 `config.ini` ，来配置我们的表情，参数说明与格式如下：
参数 | 说明
 :-: | :-
name | 表情图文件名，且必须与文件夹名相同
font_max | 表情图内添加文字可能的最大长度
font_size | 表情图内添加文字的尺寸，一般为40，小图30，大图50
font_center_x | 表情图内添加文字的中心点x位
font_center_y | 表情图内添加文字的中心点y位（由上至下）
color | 表情图内添加文字的颜色，一般为black/white
font_sub | 控制文字大小衰减的档位，一般为5
格式：
```json
{
        "name":"", 
        "font_max":,
        "font_size":, 
        "font_center_x":, 
        "font_center_y":, 
        "color":"",
        "font_sub":
}
```
例子：
```json
{
        "name":"katsuna",
        "font_max":230,
        "font_size":35,
        "font_center_x":125,
        "font_center_y":278,
        "color":"black",
        "font_sub":5
}
```

### 添加别名
在 `image_data/bieming/name.ini` 中，添加一行如下格式的别名标识：
```
    用户使用的别名 表情id
```
例子：
```
    kora katsuna
```
那么下次用户发送 `img kora` ，就会更换到这个新的表情底图。
::: warning 三个一样
必须注意的是， `表情id` 不光是文件夹的名字，也是配置文件中 `name` 属性的值，也与提供给用户别名切换文件中的 第二个 参数相同。
:::

## 剔除用户指南
如果你觉得用户指南比较麻烦，可以剔除用户指南部分，可以在 `image/__init__.py` 中删除如下部分代码：
```python
···
    if msg=="img list":
        if os.path.exists("../data/image/list.jpg"):
            qun = context["group_id"]
            await bot.send_msg(group_id=qun,message="[CQ:image,file=list.jpg]")
···
```
## 设定表情配置的一种快捷方法
<br>
<img :src="$withBase('/guide_image.jpg')" class="my-img">



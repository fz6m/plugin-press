---
sidebar: auto
---

# Bestdori 自制谱作图器

::: tip 提示
这个插件必须要求 酷Q Pro 版本，因为要发送图片
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/releases/download/0.11/BestdoriMake.zip) 下载解压，将解压得到的 `CQBangbang` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `bangbang` 以及 `bangbang_data` 两个文件夹在同一级目录，文件夹 `CQBangbang` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'bangbang'),
        'bangbang'
    )
```

### 安装依赖
本插件还依赖处理图片的 python 库，需要安装以下依赖：
```sh
    pip install requests
    pip install pillow
    pip install ujson
    pip install msgpack
```
注：如果安装 `ujson` 依赖失败，你可以在 [这里](https://www.lfd.uci.edu/~gohlke/pythonlibs/#ujson) 下载对应你 `python` 版本和位数的 `ujson` 安装包，之后执行本地安装即可：
```sh
    pip install 本地 ujson 安装包(.whl)路径
```

### 配置屏蔽群
为了不打扰非 邦邦 相关群，可以配置屏蔽群号列表，在屏蔽列表内的群不能使用相关指令，如果你不打算配置屏蔽群，可以跳过此步。<br>
配置文件在 `bangbang_data/qunShield.txt` ，需要屏蔽的群号按行写入，示例：
```
    1234567
    9876543
```
### 配置推送群
本插件可以自动推送 `Bestdori` 社区最新上传的谱面信息，并推送到所有配置的群内，如果你不打算使用推送功能，可以跳过此步。<br>
配置文件在 `bangbang_data/send.txt` ，需要推送的群号按行写入，示例：
```
    1234567
    9876543
```

### 开始使用
群内发送如下格式指令可以得到相应的反馈，下文还会给出相关使用示例：
```
    指令名 id/关键词
    .指令名id/关键词
```
目前支持的指令：
 指令 | 说明
 :-: | :-
 ssp | 按关键词搜索相关谱面，默认显示最新的 10 张
 kkp | 按 id 查询该谱面的基本信息（歌曲名、Level、时长、作者）
 search | 按 id 查询该谱面的详细信息（封面、歌曲名、歌手、Level、时长、作者、上传时间、介绍）
 map | 按 id 作出谱面图片
 注：为了使用指令更加简便， `ssp` 指令还可以缩写成 `s`、`sp` 。 `kkp` 可缩写成 `k`、`kp` 。 `search` 可错写成 `serch` 。下文还会介绍如何删改相关指令。 <br><br>
 例子：
```
    // 查询名字包含 鸡你太美 的谱面
    s 鸡你太美
    sp 鸡你太美
    .s鸡你太美
    .ssp鸡你太美

    // 查询标签包含 Arcaea 的谱面
    s #Arcaea

    // 查询标签包含 鸡头 名字包含 鸡 的谱面
    s #鸡头 鸡

    // 查询 id 为 7070 的谱面基本信息
    k 7070
    kkp 7070
    .k7070

    // 查询 id 为 7070 的谱面详细信息
    search 7070

    // 查看 id 为 7070 的谱面图片
    map 7070
```

## 增删改指令名
如果你想删改相关指令，可以在 `bangbang/__init__.py` 文件内找到如下部分：
```python
    ···
    # base info
    baseKeyList = ['k','kp','kkp']
    code = await command.reasonable(msg,baseKeyList)
    ···
```
每一个功能的可用指令都是用列表封装的，如果你想增删改查询谱面 基本信息 的相关指令，在 `baseKeyList` 变量内修改即可，其他功能修改指令方法相同。

## 修改谱面图质量
因为 酷Q 能发送图片最大的大小和你的网络情况有关，一般图片超过 10 s 还未被上传成功的话，发送就会失败，也就是说，假如你的服务器带宽只有 1 M ，那么你的图片最大只能发送 1 M 左右，所以必须要对谱面图片做出压缩限制，本插件默认配置就可以满足 1 M 带宽的服务器使用，无需更改。<br>
如果你拥有更高的带宽，可以进行如下更改提升你的谱面图质量，在 `bangbang/mapGet.py` 中前几行，你可以找到如下部分：
```python
    ···
    async def mapGet(id,bot,qun):
        comRatio = 3
    ···
```
其中 `comRatio` 即为图片压缩比例，对于 1 M 带宽的网络，我们推荐设置为 3 ，如果你想提升图片质量，可调整至 2 或 1 ， 2 即为压缩一倍， 1 即为不压缩，但是设定为 1 时图片会大出几倍，导致上传失败，请谨慎使用。<br>
另外，图片的压缩还有一个模糊参数，这个功能是 `PIL` 库自带的压缩可选项，你可以在 `bangbang/mapGet.py` 尾部找到如下部分：
```python
    #存图片
    backgroundPlus.resize((int((plusWidth+marginPlus*2)/comRatio),
    int((plusHeight+marginPlus*2)/comRatio))).convert('RGB').
    save(imageP,quality=50) 
```
其中，参数 `quality` 后的值即为模糊比，最大设定为 100 （不模糊压缩），数值越小模糊程度越大，相对应的图片就越大。但是不建议修改此参数，因为图片清晰度的主要原因在于 `comRatio` 设定的压缩比，这也是没有单独抽取此参数的原因。

## 单独作出高质量的谱面图
有些时候你可能需要很高质量、清晰的谱面图，在 `bangbang/HighQualityImage.py` 内准备了解决方案，可以让你本地手动运行获得高质量的谱面图。<br>
在使用前，你需要配置好该文件内的 作图参数 ，以下是该文件的配置部分：
```python
    # 核心参数 设定以下四个即可
    # 谱面 id
    id = 7070
    # 压缩参数-压缩百分比 | 高质量图可以设定为 1(不压缩)或2(压缩一倍)
    comRatio = 2
    # 音轨剪断节数 | 一般 2-4 min 歌曲设定为 8-12 若歌曲特别短
    # 如 1 min 可设定为更小值 不建议小于 5 
    cutNumber = 12
    # 压缩参数-画面质量 | 一般设定为 50-100
    imageQuality = 80
```
另外，使用前也必须安装相关的依赖和确保静态资源文件没有被移动位置，在该 `HighQualityImage.py` 内均有详细说明，配置好后手动运行即可得到高质量的谱面图。
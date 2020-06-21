---
sidebar: auto
---

# TwitterPush

::: tip 提示
在使用本插件之前，要确保你可以科学上网，因为获取要获取推文。
:::

## 部署流程
### 解压
将 [本插件](https://github.com/fz6m/nonebot-plugin/tree/master/rar) 下载解压，将解压得到的 `CQtwitter` 文件夹放在 酷Q 根目录下，为了保证路径不出错误，还要检查如下事项：<br>
保证你的 NoneBot 主程序 `main.py(这里假设为main.py)` 和 `twitter` 以及 `twitterConfig` 两个文件夹在同一级目录，文件夹 `CQtwitter` 里已经包含了一个示例主程序 `main.py` 可供参考，如果你还有其他插件，你可以直接把 `main.py` 中有关导入本插件的部分拷贝进你的主程序 `_.py` 文件。
```python
    #导入本插件
    nonebot.load_plugins(
        path.join(path.dirname(__file__), 'twitter'),
        'twitter'
    )
```
### 配置翻译
为了获得良好的推文体验，还需配置你的翻译模块，这里推荐免费的 [百度翻译](https://api.fanyi.baidu.com/) ，即申请即用。<br>
申请之后你可以得到 百度 提供给你的 `appid` 与 `secretKey` ，配置在 `twitter/fanyi.py` 内即可。
```python
appid = ''  # 你的appid
secretKey = ''  # 你的密钥
```
### 安装依赖
你需要安装本插件依赖的几个 python 库，如下：
```sh
    pip install requests
    pip install bs4
```

### 设定用户
下面在 `twitterConfig` 文件夹内设定转发推文的目标账户。首先，在 `user.txt` 内配置目标用户，参数说明和配置例子如下所示：
 参数 | 说明
 :-: | :-
 id | 转推的账户
 x | 每次获取的推文数量，一般设为 2
 y | 每次要推送的推文在数组中的位置，如果该用户有置顶推文设为 1 ，如果没有设为 0 
 name | 推文里称呼该用户的名字
格式：
```text
id x y name
```
例子：
```text
minatoaqua 2 1 湊あくあ
```
以上用户可以在 `user.txt`内配置多个，每个占一行。<br><br>
之后配置转发群的群号，在 `qun.txt` 内按行填写，格式如下：
```text
群号 需要推送的账号name(要与上文中name对应)
```
例子：
```text
12345678 湊あくあ
```
如果要一群多个推送，即填写多行。

### 调试
开始进行插件调试。<br>
启动 HttpApi 插件，之后启动你的主程序，我们这里假设的是 `main.py`，如果 HttpApi 中控台上报正常，等待 1 分钟后检查主程序 `main.py` 是否有报错，如果有，请按报错检查是 **缺少依赖** 还是 **没有科学上网** ，或者是 **翻译配置错误**。<br>
若没有，继续检查 `twitterConfig` 文件夹下是否生成了 `new_time_账号id.txt` ，这是一个内含检测指定的第 y 条推文发布时间的文件，可以检测是否有新推文。<br>
如果一切正常，你将可以正常使用本插件，下一次该用户更新推文，你将会在 `qun.txt` 内指定的群里看到推文消息。

## 翻译功能的去除
假如你因为翻译模块出错或者不想使用 百度翻译 ，你可以进行剔除翻译功能或者更换翻译模块，在 `twitter/twitter.py` 内，有如下内容：
```python
···
    # 把外文送进翻译模块
    fy=await fanyi.fan(fy) 
    # 在消息里添加译文
    fy='翻译:'+fy
···
```
这就意味着你可以自由的改删翻译模块。

## 翻译增强功能
考虑到翻译软件是不可能完美翻译人名等，我们可以在 `twitterConfig/fy_plus.txt` 内设定翻译增强，设定格式如下：
```text
用户的name(必须和上文name一致) 需要修正的字符串 修正之后的字符串
```
例子：<br>
这个例子是把几个人名部分做翻译增强，防止翻译模块翻译错误，引发尴尬。
```text
湊あくあ 湊あくあ 湊阿夸
湊あくあ あくあ 阿夸
湊あくあ ちゃん 酱
```
当然，不设定翻译增强设定也不会影响插件运作。

## 更改推送检测时间
一般情况，我们的科学上网速度并不快，设定为 1 min 一次足矣，如果特别需要，可以参考 [APScheduler指南](https://apscheduler.readthedocs.io/en/latest/userguide.html) 更改 `twitter/__init__.py` 内的检测时间。
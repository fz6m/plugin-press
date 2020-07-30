(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{372:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"从零开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从零开始"}},[t._v("#")]),t._v(" 从零开始")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("从零开始使用本插件的教程，如果你已经明白怎么使用 cqhttp 与 nonebot 则无需本章内容。")])]),t._v(" "),a("h2",{attrs:{id:"部署-cqhttp-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-cqhttp-插件"}},[t._v("#")]),t._v(" 部署 cqhttp 插件")]),t._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),a("p",[t._v("我们的插件依赖于 cqhttp 中控台提供的 httpapi 进行通信，所以需要先部署 cqhttp 插件。")]),t._v(" "),a("p",[t._v("下载地址："),a("a",{attrs:{href:"https://github.com/richardchien/coolq-http-api/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("cqhttp releases"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("在 releases 中下载最新一个版本的 "),a("code",[t._v(".cpk")]),t._v(" 即可：")]),t._v(" "),a("img",{staticClass:"my-img",attrs:{src:t.$withBase("/cqhttp_releases.jpg")}}),t._v(" "),a("p",[t._v("下载完毕之后放入 酷Q 根目录下的 "),a("code",[t._v("app")]),t._v(" 文件夹（插件文件夹）内。")]),t._v(" "),a("h3",{attrs:{id:"安装运行库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装运行库"}},[t._v("#")]),t._v(" 安装运行库")]),t._v(" "),a("p",[t._v("为防止 CQHTTP 中控台缺少运行库启动不了，需要先安装相应的运行库："),a("a",{attrs:{href:"https://aka.ms/vs/16/release/vc_redist.x86.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("运行库下载"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("在 酷Q 内重载一遍插件列表，启动刚刚下载的 cqhttp 插件，这时 cqhttp 配置文件会生成在 酷Q 根目录下的 "),a("code",[t._v("data/app/io.github.richardchien.coolqhttpapi/config/")]),t._v(" 内，有一个以你机器人 QQ 号命名的 "),a("code",[t._v(".json")]),t._v(" 文件。")]),t._v(" "),a("p",[t._v("启动过程中会有中控台弹出，无需理会，关闭该插件，之后找到该配置文件，修改其如下部分：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"use_ws_reverse"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws_reverse_api_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://127.0.0.1:8080/ws/api/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ws_reverse_event_url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws://127.0.0.1:8080/ws/event/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("如果没有相应的参数就添加该参数，如果有就修改其值。")]),t._v(" "),a("p",[t._v("其中 "),a("code",[t._v("use_ws_reverse")]),t._v(" 代表使用 websockets （ nonebot 的通信方式），"),a("code",[t._v("ws_reverse_api_url")]),t._v(" 和 "),a("code",[t._v("ws_reverse_event_url")]),t._v(" 代表主动请求 api 和事件上报的双向 ws 通道对应的地址，如果你不想运行在 "),a("code",[t._v("8080")]),t._v(" 端口或者已有占据 "),a("code",[t._v("8080")]),t._v(" 端口的程序，可以自行更改端口号。")]),t._v(" "),a("p",[t._v("保存该文件即部署完毕 cqhttp 插件。")]),t._v(" "),a("h2",{attrs:{id:"部署-python-环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#部署-python-环境"}},[t._v("#")]),t._v(" 部署 Python 环境")]),t._v(" "),a("p",[t._v("很多人都是因为 Python 的易用性选择 cqhttp 插件，基本都会使用 Python ，如果没有接触过 Python ，可以按照以下流程部署 Python 环境：")]),t._v(" "),a("ol",[a("li",[t._v("在网上下载 Python 安装包并安装")]),t._v(" "),a("li",[t._v("安装时注意勾选将 Python 添加至系统路径")]),t._v(" "),a("li",[t._v("如果没有勾选，可以自己在网上查找将 Python 添加至系统路径的教程")])]),t._v(" "),a("h2",{attrs:{id:"安装-nonebot-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-nonebot-依赖"}},[t._v("#")]),t._v(" 安装 nonebot 依赖")]),t._v(" "),a("p",[a("code",[t._v("nonebot")]),t._v(" 是 Python 的一个库，是对 cqhttp 提供的 httpapi 接口的一个方便的封装。")]),t._v(" "),a("p",[t._v("需要安装以下 "),a("code",[t._v("nonebot")]),t._v(" 的基础依赖：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("  pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" nonebot\n  pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nonebot[scheduler]"')]),t._v("\n  pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" aiocqhttp\n")])])]),a("p",[t._v("注：")]),t._v(" "),a("ol",[a("li",[t._v("不知道怎么安装依赖自己百度搜索 Python 怎么安装依赖包即可，打开 cmd 输入命令即可安装。")]),t._v(" "),a("li",[t._v("如果安装太慢或者超时报红导致安装失败，可以使用大清镜像源，使用例子："),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("   pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -i https://pypi.tuna.tsinghua.edu.cn/simple 包名\n   pip "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -i https://pypi.tuna.tsinghua.edu.cn/simple nonebot\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"开始使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始使用"}},[t._v("#")]),t._v(" 开始使用")]),t._v(" "),a("p",[t._v("至此，已经全部部署好了 cqhttp 插件、 Python 运行环境、 nonebot 依赖，可以进入插件使用部分的文档。")]),t._v(" "),a("h3",{attrs:{id:"多插件示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多插件示例"}},[t._v("#")]),t._v(" 多插件示例")]),t._v(" "),a("p",[t._v("一个具有多插件的根目录中，应该只有一个 "),a("code",[t._v("CQHTTP")]),t._v(" 的主目录：")]),t._v(" "),a("img",{staticClass:"my-img",attrs:{src:t.$withBase("/example/1.jpg")}}),t._v(" "),a("p",[t._v("其中含有各种插件的目录文件夹：")]),t._v(" "),a("img",{staticClass:"my-img",attrs:{src:t.$withBase("/example/2.jpg")}}),t._v(" "),a("p",[t._v("主程序应该导入各个插件，注意 "),a("code",[t._v("nonebot.init(config)")]),t._v(" 与 "),a("code",[t._v("nonebot.run()")]),t._v(" 应该只有一行：")]),t._v(" "),a("img",{staticClass:"my-img",attrs:{src:t.$withBase("/example/3.jpg")}}),t._v(" "),a("h2",{attrs:{id:"常见错误"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见错误"}},[t._v("#")]),t._v(" 常见错误")]),t._v(" "),a("ul",[a("li",[t._v("启动错主程序： bot 主程序是最外层的 "),a("code",[t._v("main.py")]),t._v(" ，而不是插件文件夹内的文件。")]),t._v(" "),a("li",[t._v("未安装 python 依赖：点击启动主程序 "),a("code",[t._v("main.py")]),t._v(" 一闪而过，说明有 python 依赖未安装，可通过 cmd 命令行执行 "),a("code",[t._v("python main.py")]),t._v(" 通过报错确认是哪个依赖未安装或存在什么问题。")]),t._v(" "),a("li",[t._v("未安装运行库：启动 cqhttp 插件后未弹出控制台，或能正常弹出控制台，但部分插件运行正常却不能使用，说明未安装运行库，请参照上文教程安装运行库。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
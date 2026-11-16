# b站弹幕跳转

一个轻量油猴脚本：让 B 站的「时间跳转弹幕」可以直接点击，一键把播放进度跳到弹幕所指的时间点。

## 功能

- 点击播放器内带时间标记的弹幕（如 `00:12`、`1:23:45`），视频自动跳转到对应时间
- 支持 `mm:ss` 与 `hh:mm:ss` 两种时间格式
- 无需打开弹幕列表、无需手动拖动进度条

## 安装

### 方式一：Greasyfork（推荐）

打开 [Greasyfork 脚本页](https://greasyfork.org/scripts/454816)，点击「安装此脚本」。

### 方式二：手动安装

1. 先安装用户脚本管理器：[Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)
2. 新建脚本，将 [index.js](./index.js) 的内容整体粘贴进去
3. 保存并启用

## 使用

1. 打开任意 B 站视频页（`bilibili.com/video/*`）
2. 点击播放器上显示时间戳的弹幕
3. 播放进度自动跳转到该时间点

## 兼容性

- 浏览器：Chrome（及 Chromium 内核浏览器）
- 用户脚本管理器：Tampermonkey / Violentmonkey
- 仅在 B 站主站生效（`@noframes`，不在 iframe 中运行）

## 工作原理

脚本监听播放器弹幕层的点击事件，当被点击的元素是时间跳转弹幕时：

1. 从弹幕文本中解析出时间（`mm:ss` / `hh:mm:ss`）
2. 换算为秒数
3. 设置 `video.currentTime` 完成跳转

播放器样式上额外为时间弹幕开启了 `pointer-events`，使其可被点击。

## 项目结构

```
.
├── index.js    # 脚本本体（油猴脚本）
└── README.md
```

## 反馈

问题或建议请提交到 [Issues](https://github.com/wah0713/biliDanmakuJump/issues)。

## 许可证

[MIT](https://opensource.org/licenses/MIT)

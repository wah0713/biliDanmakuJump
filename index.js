// ==UserScript==
// @name         b站弹幕跳转
// @namespace    https://github.com/wah0713/biliDanmakuJump
// @version      0.0.1
// @description  b站弹幕跳转
// @supportURL   https://github.com/wah0713/biliDanmakuJump/issues
// @updateURL    https://greasyfork.org/scripts/454816/code/download.user.js
// @author       wah0713
// @compatible   chrome
// @license      MIT
// @icon         https://i0.hdslb.com/bfs/static/jinkela/long/images/favicon.ico
// @require      https://code.jquery.com/jquery-1.12.4.min.js
// @match        *://bilibili.com/*
// @match        *://*.bilibili.com/*
// @noframes     true
// @run-at       document-idle
// @grant        GM_addStyle
// @grant        unsafeWindow
// ==/UserScript==

(function () {
    const video = document.querySelector('video')
    $('.bpx-player-row-dm-wrap').on('click', '.bili-danmaku-x-show', function () {
        const str = $(this)[0].textContent
        const time = str.match(/\d+/g)
        if (!time) {
            return
        }
        const seconds = Number(time.at(-1) ?? 0) + Number(time.at(-2) ?? 0) * 60 + Number(time.at(-3) ?? 0) * `3600`
        video.currentTime = seconds
    })


    GM_addStyle(`
.bili-danmaku-x-show{
  pointer-events: auto;
}
`)
})()
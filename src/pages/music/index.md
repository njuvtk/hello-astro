---
title: "音乐播放器"
h1: "音乐播放器"
desc: "享受美妙的音乐时光"
layout: "@/layouts/PageLayout/PageLayout.astro"
type: "music"
---

:::note{type="info"}
这里是我的音乐收藏，享受美妙的音乐时光 🎵
:::

## 推荐音乐

<div class="vh-node vh-vhMusic" data-id="33894312"></div>

<div class="vh-node vh-vhMusic" data-id="31445772"></div>

<div class="vh-node vh-vhMusic" data-id="447925559"></div>

## 播放列表

<div class="vh-node vh-vhMusic" data-type="playlist" data-id="13998261384"></div>

:::note{type="info"}
现在支持的功能：

- **单首歌曲**：`<div class="vh-node vh-vhMusic" data-id="歌曲ID"></div>`
- **播放列表**：`<div class="vh-node vh-vhMusic" data-type="playlist" data-id="歌单ID"></div>`

API使用：
- 歌曲URL：`https://music.lovedo.ip-ddns.com/song/url?id={ID}&quality=320k`
- 歌词：`https://music.163.com/api/song/media?id={ID}`
- 播放列表：`https://music.163.com/api/playlist/detail?id={歌单ID}`

:::
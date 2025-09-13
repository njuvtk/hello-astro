---
title: 哪吒面板nat小鸡
categories: 记录
tags:
  - nat小鸡
  - 哪吒面板
id: nezha-nat-xiao-ji
date: 2025-08-13
updated: 2025-08-13
cover: "https://img.njuv.pp.ua/file/dyS2q3T6.jpg"
recommend: false # 是否推荐文章
top: false # 是否置顶文章
hide: false # 是否隐藏文章
---
# 背景

法国nat小鸡
CPU 1vCore
内存 512MiB
磁盘 5GiB SSD

域名一个（可选）

# 安装哪吒面板[https://nezha.wiki/guide/dashboard.html]

## 安装脚本

```bash
curl -L https://raw.githubusercontent.com/nezhahq/scripts/refs/heads/main/install.sh -o nezha.sh && chmod +x nezha.sh && sudo ./nezha.sh
```

![示例图](https://xsx.xx.kg/file/PmS0IcwQ.png)

# 安装完成后，访问面板地址

```bash
http://<your-server-ip>:设置的端口
```

# 想域名访问？！

# 安装CloudFlare Tunnel

## 创建Tunnel

使用CloudFlare账号登入https://one.dash.cloudflare.com，然后在左侧边栏找到网络–>Tunnels（Networks -> Tunnels）.

点击创建隧道（Create a tunnel）以创建一个新的CloudFlare Tunnel.

选择隧道类型为Cloudflared，点击选择Cloudflared进入下一步，为隧道命名，你可以任意填写隧道名称，为了后面的区分，我建议你填一个具有区分性的名字，如：Nezha等，然后点击保存隧道（Save tunnel）即可.

选择环境，复制命令并在终端中运行，以安装Cloudflare Tunnel.

添加公共主机名
子域 (随便)
域 (选一个)
类型 (HTTP)
URL (localhost:设置的端口)

# 完成，访问域名即可打开哪吒面板
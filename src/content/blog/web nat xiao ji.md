---
title: web页面nat小鸡
categories: 记录
tags:
  - nat小鸡
  - web页面
id: web-nat-xiao-ji
date: 2025-06-24
updated: 2025-06-24
cover: ""
recommend: false # 是否推荐文章
top: false # 是否置顶文章
hide: false # 是否隐藏文章
---


# 🌐 低内存 VPS 一键部署静态网站 + Cloudflare Tunnel 保活公开访问

> 利用 Caddy + Cloudflared Tunnel，极速部署 GitHub Page 或任意静态网页到你的低配 VPS（如 128MB NAT 机），实现公开可访问的高可用服务。


## ✨ 项目特点

* 💡 **全自动安装配置**：Caddy、Cloudflared、一键部署与启动。
* 🚀 **低资源占用**：适用于 128MB 内存小机。
* 🔐 **无需公网 IP 或端口映射**：通过 Cloudflare Tunnel 公开访问。
* 🔁 **自动更新网页内容**：支持定时从 GitHub 拉取更新。
* 🧹 **一键卸载**：干净清理，方便复用环境。
* 📦 **支持菜单/分步骤部署**：适配不同需求。


## 📦 使用方法（二选一）

### 1. 克隆项目

```bash
git clone https://github.com/njuvtk/vpstool.git
cd vpstool
chmod +x web.sh
```

### 2. 运行脚本

```bash
./web.sh
```

### 或者 🚀 快速开始

> 建议使用 Debian 11+/Ubuntu 20.04+ 运行

```bash
curl -fsSL https://raw.githubusercontent.com/njuvtk/vpstool/main/web.sh | bash
```

你将看到如下菜单：

```
🌐 静态站部署脚本菜单
1. 安装依赖
2. 安装 Caddy
3. 配置 Caddy
4. 克隆网页仓库 + 定时更新
5. 安装 cloudflared 并配置 Tunnel
6. 启动服务并设置开机自启
7. 一键全自动部署
8. 一键删除部署环境
0. 退出
```

### 3. 推荐：使用“一键全自动部署”

输入 `7`，按照提示依次填写：

* GitHub 仓库地址（如 `https://github.com/xxx/xxx.github.io.git`）
* 主域名（如 `example.com`）
* 子域名前缀（如 `blog`）
* Tunnel 名称（建议简短英文）

系统将自动完成以下步骤：

* 安装依赖软件
* 安装并配置 Caddy，监听 80 端口，展示网页内容
* 克隆 GitHub 仓库到本地目录
* 创建 Cloudflare Tunnel 并绑定子域名
* 自动设置开机自启与定时网页更新


## 📂 网页存放目录

默认网页克隆到：

```
/var/www/mysite
```

你可以将该目录绑定至 Caddy 或替换为其他路径。


## ⏰ 网页定时自动更新

已集成 `cron` 任务，每 10 分钟执行一次 `git pull`：

```
*/10 * * * * root cd /var/www/mysite && git pull --quiet
```

可手动修改 `/etc/cron.d/github-site-pull` 自定义周期。


## 🔐 使用 Cloudflare Tunnel 的优势

* 🚫 无需端口映射
* ✅ 支持 HTTPS 自动证书
* 🌍 快速全球访问（通过 Cloudflare 边缘网络）


## 🧹 卸载部署环境

输入菜单 `8`，将自动执行以下操作：

* 关闭并删除 Caddy 和 Cloudflared 服务
* 删除相关配置、网页、日志、systemd 文件
* 移除定时任务、清理 APT 软件包与缓存


## 📜 日志输出

所有操作日志写入：

```
/var/log/deploy-web.log
```


## 💬 常见问题

### 1. `cloudflared` 登录失败？

请确保：

* 已用浏览器访问并登录 Cloudflare 帐号
* Tunnel 名称无重复
* 域名已添加至 Cloudflare 面板

### 2. GitHub 仓库内容没变化？

确认：

* Git 仓库设置为 public
* 主分支为 `main` 或 `master`
* 脚本已定时更新并写入 cron 文件


## 🧪 未来计划

* 自动检查是否已有 tunnel、支持重复使用
* 支持绑定自定义 HTTPS 证书
* 支持非 GitHub 静态站部署
* 支持备份/还原配置


## 🧠 适用场景

* 无公网 IP、nat小内存 VPS 搭建网站
* 在线简历、Markdown 页面、博客托管
* 教学/测试用途快速部署 HTML 页面


## 📎 示例部署地址

你部署成功后，将能通过：

```
https://www.njuv.pp.ua
```

访问你托管的网页（由 Cloudflare 免费加速和代理）。


## 📌 项目地址

[🔗 https://github.com/njuvtk/vpstool](https://github.com/njuvtk/vpstool)

欢迎 Star ⭐、Fork 🔀、PR 💬！



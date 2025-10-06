---
title: 开源工具 cc-switch：任意切换 Claude Code 与 Cursor 的 AI 服务配置
published: 2025-10-06
description: '一款实用的桌面工具，让你在不同 AI 服务商和模型配置之间一键切换，告别繁琐的手动配置'
image: './开源工具cc-switch：任意切换cc与codex的编码模型/cc-switch.png'
tags: [工具推荐, AI, Claude Code, Cursor]
category: '工具'
draft: false
lang: ''
---

如果你在使用 Claude Code 或 Codex，可能会遇到这样的困扰：想在不同的 AI 服务商之间切换（比如从官方 API 换到 DeepSeek，或者切换不同的模型配置），每次都要手动修改配置文件，既麻烦又容易出错。

最近发现了一个实用的开源工具 [cc-switch](https://github.com/farion1231/cc-switch)，专门解决这个痛点——一键切换不同的 AI 服务配置，支持 Claude Code 和 Codex，还能常驻系统托盘随时调用。

## 工具简介

cc-switch 是一个桌面应用程序，专门用来管理和切换 Claude Code 与 Cursor 的 AI 服务配置。你可以预先设置好多个不同的服务商配置（比如官方 API、DeepSeek、Qwen 等），需要时只需点击一下就能完成切换，不用再手动编辑配置文件。

**适用场景：**
- 经常在不同 AI 服务商之间切换
- 需要为不同项目使用不同的模型配置
- 想要快速测试对比不同服务商的效果
- 同时使用 Claude Code 和 Codex，希望统一管理配置

## 主要特性

### 支持多个 AI 服务商

除了官方的 Claude API，cc-switch 还支持：
- DeepSeek
- Qwen（通义千问）
- GLM（智谱）
- 其他兼容 Anthropic API 格式的服务

### 同时支持两大编码智能体

- **Claude Code**：Anthropic 官方的 编码智能体，支持终端以及vscode插件两种使用形式
- **Codex**：OpenAI 官方的编码智能体，其本地版本支持撞断以及vscode插件两种使用方式

一个工具搞定两个平台的配置管理。

### 系统托盘常驻

安装后会常驻系统托盘，需要切换时随时调出，不会占用桌面空间，用完就收起。

### 跨平台支持

支持 Windows、macOS、Linux 三大主流操作系统，无论你用什么系统都能用。

### 多语言界面

内置多语言支持，可以根据需要切换界面语言。

## 使用体验

### 安装方式

前往 [GitHub Releases](https://github.com/farion1231/cc-switch/releases) 页面，下载对应系统的安装包：
- Windows：下载 `.exe` 安装程序
- macOS：下载 `.dmg` 文件
- Linux：下载 `.AppImage` 或 `.deb` 包

安装完成后，应用会自动常驻系统托盘。

### 使用说明

首次打开 cc-switch，你需要添加你的 AI 服务配置：

点击「添加供应商」添加你的 API 配置。

当你需要切换服务时，有两种方式：

**方式一：主界面切换**
在主界面选择供应商后点击切换。

**方式二：系统托盘快速切换**
通过系统托盘（菜单栏）直接选择目标供应商，立即生效。

应用会自动写入对应应用的 live 配置文件（Claude Code：`settings.json`；Codex：`auth.json` + `config.toml`），然后重启或新开终端以确保生效。

**注意**：若需切回官方登录，在预设中选择"官方登录"并切换即可；重启终端后按官方流程登录。整个过程只需几秒钟，无需手动操作任何配置文件。


## 结语

对于经常需要在不同 AI 服务商之间切换的开发者来说，cc-switch 是个很实用的小工具。它解决了手动修改配置的麻烦，让切换变得简单高效。

如果你也在使用 Claude Code 或 Codex，不妨试试这个工具，相信会让你的开发体验更流畅。

::github{repo="farion1231/cc-switch"}

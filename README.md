# NSCHA 文档站

NSCHA（**N**on-**S**urveillance **C**APTCHA for **H**uman **A**uthentication）的产品文档站，
部署目标为 `https://nscha.nsbbs.eu.cc`。

> 内容约束：本站解释的是我们自己的产品。除必要的通用方案对照外，不出现其他项目或产品名称，
> 也不引用第三方品牌词作为字段名或标题。

## 技术栈与结构

Docusaurus 3 + React 19 + MDX，中文单语言。信息架构采用「**章节入口页 + 同名子目录**」：

```
docs/
├── intro.mdx                 docs/intro/*.mdx                 介绍
├── getting-started.mdx       docs/getting-started/*.mdx       入门指南
├── how-it-works.mdx          docs/how-it-works/*.mdx          工作原理
├── privacy.mdx               docs/privacy/*.mdx               隐私
├── configuration.mdx         docs/configuration/*.mdx         配置参考
├── advanced.mdx              docs/advanced/*.mdx              进阶
├── limitations.mdx           docs/limitations/*.mdx           局限
└── reference.mdx             docs/reference/*.mdx             参考
```

`docs` 挂在根路由（`routeBasePath: '/'`），`intro.mdx` 的 `slug: /` 同时作为站点首页。
侧栏在 `sidebars.ts` 中显式编排，主题色板在 `src/css/custom.css`（Cobalt 深灰 + `#95b806`）。

## 本地运行

```bash
pnpm install
pnpm start          # 开发服务器，默认 http://localhost:3000
pnpm build          # 静态产物输出到 build/
pnpm serve          # 预览 build/ 产物
pnpm typecheck      # TS 配置检查
```

构建会检查断链（`onBrokenLinks: 'throw'`），新增页面后记得同步 `sidebars.ts`。

## 部署

纯静态站点，`build/` 可以直接托管到任意静态服务或 Vercel：

- Build Command：`pnpm build`
- Output Directory：`build`
- 自定义域名：`nscha.nsbbs.eu.cc`

不需要数据库、不需要服务端环境变量。`url` / `baseUrl` 在 `docusaurus.config.ts` 中调整。

## 配套的可部署组件服务

`E:\nscha-widget`（独立仓库）是本站所描述协议的**实际交付物**：一个无状态
Serverless Function 提供 `/challenge`、`/redeem`、`/verify`，一个单文件 `widget.js`
提供可嵌入的 `<nscha-widget>` 自定义元素。别人用一行 `<script>` 即可接入，
同样可以托管到 Vercel。本站所有代码片段都与该服务的真实接口一一对应。

## 内容来源

接口路径、环境变量与默认值均以独立可部署的 `nscha-widget` 服务为准；站内代码片段
都是可直接复制的真实代码。涉及「一次性」的表述特指**兑换**，令牌本身在有效期内
不做全局一次性消费 —— 详见「局限 → 诚实边界」。

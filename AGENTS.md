# Repository Guidelines

## 项目结构与模块组织

本项目使用 Astro、严格模式 TypeScript、原生 CSS 和 Markdown 构建个人作品集，通过 GitHub Pages 发布。

- `src/pages/`：路由入口；中文位于根路径，英文位于 `en/`，路由文件只负责传入语言。
- `src/views/`：共享页面视图，使用 `lang` 参数与 `copy` 对象维护双语文案。
- `src/components/`、`src/layouts/`：可复用组件与页面骨架。
- `src/data/site.ts`、`site.en.ts`：中英文个人资料；`src/i18n/` 提供语言与路径工具。
- `src/content/projects/`：中文项目案例，`en/` 保存同名英文案例；字段遵循 `src/content.config.ts`。
- `src/styles/global.css`：全局样式与设计变量；`public/`：直接发布的静态资源。

## 构建、检查与本地开发

使用 Node.js 22，与部署工作流保持一致。

- `npm ci`：按 `package-lock.json` 安装依赖。
- `npm run dev`：启动开发服务器，默认地址为 `http://localhost:4321`。
- `npm run check`：执行 Astro 与 TypeScript 检查。
- `npm run build`：构建静态站点到 `dist/`。
- `npm run preview`：在本地预览构建结果。

依赖变更须同步提交 `package.json` 与 `package-lock.json`。推送到 `main` 会触发 `.github/workflows/deploy.yml` 自动构建和部署。

## 代码风格与命名

沿用现有代码的两空格缩进；TypeScript 使用单引号、分号及显式类型。Astro 组件和视图采用 PascalCase，如 `ProjectRow.astro`；页面与案例文件使用小写或 kebab-case，如 `smart-warehouse.md`。

共享样式优先复用全局 CSS 变量，组件样式放在 scoped `<style>` 中。内部链接使用 `localePath`，案例路径使用 `projectSlug`。当前没有配置 ESLint 或 Prettier，避免无关的全文件格式化。

## 验证要求

当前没有自动化测试框架、测试目录、`npm test` 命令或覆盖率门槛。代码与内容变更后运行 `npm run check` 和 `npm run build`，并用预览服务器检查受影响页面。

界面变更须验证桌面与移动端、深浅主题、键盘操作和减少动态效果设置。双语变更须检查语言切换、对应案例链接；修改简历页时检查打印效果。CI 当前只执行构建，类型检查需本地运行。

## 提交与 Pull Request

沿用历史中的 `feat:`、`fix:`、`style:` 前缀，简短描述实际变化，如 `fix: 修正英文案例链接`。每次提交聚焦一个目的，不混入已有的无关改动。

PR 应说明修改目的、影响页面及验证结果；有相关 issue 时附链接。视觉变更附桌面与移动端截图，并说明双语内容是否同步。

## 内容与隐私

修改个人资料时同步中英文数据，修改案例时保持两种语言的文件名一致。明确区分主导、独立负责、协作参与及学习经历，不补造指标或项目截图。

`docs/` 存放私人资料且已被忽略；不要提交其中内容、凭据或未脱敏的公司资料。`public/` 内文件会直接公开，加入资源前确认可发布。不要手动编辑生成目录 `dist/`、`.astro/`。

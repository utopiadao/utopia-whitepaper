# CLAUDE.md - 乌托邦白皮书项目指南

## 项目概述

**项目名称**: 乌托邦白皮书 (UTOPIA Whitepaper)  
**技术栈**: VitePress + Vue 3 + Element Plus + GitHub Pages  
**设计理念**: 极简主义 + 移动端优先 + 暗金色主题  
**更新日期**: 2025-01-08

## 重要更新（2025-01-08）

### 内容来源变更
- **旧内容源**: `乌托邦白皮书.txt`（已删除，内容错误）
- **新内容源**: `/白皮书/` 文件夹中的 `.md` 文件
- **章节结构**: 11个主章节 + 前言，第9章有2个子章节

### 内容处理规范
1. **数学公式**: 使用 KaTeX 渲染，确保公式格式正确
2. **图标清理**: 删除标题前的装饰性图标
3. **图片说明**: 将图片描述转换为对应的 UI 组件或图表
4. **章节审核**: 每章完成后必须等待用户确认才能继续

## 最新架构决策

### 1. 极简化设计
- **首页**: 只保留一句话概括 + 两个按钮（开始阅读、经济模型）+ 粒子背景特效
- **导航栏**: 只有「白皮书」和「经济模型」两个链接
- **组件策略**: 优先使用 Element Plus，必要时使用 Chart.js 和 Mermaid.js

### 2. UI 框架选择
- **已移除**: Arco Design Vue（用户反馈后替换）
- **当前使用**: Element Plus + 自定义暗色主题
- **原因**: 更好的社区支持和组件质量

### 3. 视觉设计规范
基于 `整体视觉定位.txt` 文件：
- **主色调**: 暗金色系 (#E5A000)
- **背景色**: 深邃黑色 (#141722)
- **文字色**: 温暖米色 (#EEE8DE)
- **设计风格**: 神秘、高贵、科技感

## 技术架构

### 核心依赖
- VitePress: ^1.6.3
- Vue: ^3.5.13
- Element Plus: ^2.9.2
- @element-plus/icons-vue: ^2.3.1
- 粒子特效: 自定义 Canvas 实现
- Chart.js: 商业图表展示
- Mermaid.js: 技术架构图
- KaTeX: 数学公式渲染

### 当前组件（极简化后）
1. **ParticlesBackground.vue** - 粒子背景特效（唯一保留的自定义组件）
2. **Element Plus 组件** - 在文档内容中按需使用

### 已删除的组件
- 所有自定义图表组件（NetworkValueChart、DimensionRadar、PhoenixCycle等）
- 所有仪表板组件（RealtimeDashboard、Calculator等）
- 所有装饰组件（DatavBorder、DatavDecoration等）
- 理由：用户要求不创建自定义组件，只使用 Element Plus 原生组件

## 项目结构

```
gitbook/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js          # VitePress 主配置
│   │   ├── config/
│   │   │   ├── zh.js          # 中文配置（主语言）
│   │   │   └── en.js          # 英文配置
│   │   ├── theme/
│   │   │   ├── index.js       # 主题入口
│   │   │   ├── Layout.vue     # 布局组件
│   │   │   ├── custom.css     # 基础自定义样式
│   │   │   ├── override.css   # VitePress 样式覆盖
│   │   │   ├── element-dark-theme.css # Element Plus 暗色主题
│   │   │   └── mobile-debug.css # 移动端调试样式
│   │   └── components/
│   │       └── ParticlesBackground.vue # 粒子背景
│   ├── whitepaper/            # 白皮书内容
│   ├── economics/             # 经济模型内容
│   ├── test-mobile.md         # 移动端测试页面
│   └── index.md              # 首页
├── package.json
└── CLAUDE.md                 # 本文件
```

## 移动端适配重点

### 当前问题追踪
1. **导航栏**
   - 语言切换器在移动端需要显示
   - 桌面端导航栏中间区域颜色不一致
   - 高度统一为 56px（移动端）/ 64px（桌面端）

2. **文档页面目录栏**
   - 移除上下边框线
   - 优化按钮样式（圆角、半透明背景）
   - 字体大小调整为 14px

3. **样式文件结构**
   - `element-dark-theme.css` - Element Plus 暗色主题变量
   - `override.css` - VitePress 默认样式覆盖
   - `custom.css` - 自定义样式和响应式设计
   - `mobile-debug.css` - 移动端问题修复和调试

## 开发规范

### 内容格式规范
1. **标题层级**：
   - H1 - 章节标题
   - H2 - 大标题
   - H3 - 小标题
   
2. **内容格式**：
   - 特性描述：`**标题** - 描述内容`
   - 时间线：`**阶段** → **主题**` 换行后写描述
   - 列表项：使用 `-` 而非数字编号
   
3. **间距规范**：
   - 段落之间：1个空行
   - 标题与内容：1个空行
   - 无额外缩进

### Git 提交规范
- feat: 新功能
- fix: 修复问题
- docs: 文档更新
- style: 样式调整
- refactor: 代码重构
- test: 测试相关
- chore: 构建过程或辅助工具的变动

## 常用命令
```bash
# 开发
npm run dev

# 构建
npm run build

# 预览
npm run preview

# 测试移动端
# 1. 打开开发服务器
# 2. 使用浏览器开发者工具切换到移动端视图
# 3. 访问 /test-mobile 页面进行测试
```

## 调试技巧

### 移动端调试
1. 在浏览器控制台运行：`document.body.classList.add('debug-mode')`
2. 这会为关键元素添加彩色边框：
   - 红色 = 容器元素
   - 蓝色 = 按钮元素

### 样式优先级
1. `mobile-debug.css` - 最高优先级，用于修复特定问题
2. `override.css` - 覆盖 VitePress 默认样式
3. `element-dark-theme.css` - Element Plus 主题
4. `custom.css` - 基础自定义样式

## 注意事项
1. **不要创建自定义组件** - 只使用 Element Plus 原生组件
2. **保持极简** - 首页只有核心信息，导航只有两个链接
3. **移动端优先** - 所有设计决策都要考虑移动端体验
4. **暗金色主题** - 严格遵循视觉规范
5. **CSS 使用规范**:
   - **禁止在 Markdown 文件中内嵌 CSS** - 所有样式通过全局配置文件管理
   - **使用 VitePress 默认样式** - 避免过度自定义
   - **内容与样式分离** - Markdown 只负责内容，样式由主题统一处理
   - **避免特殊 CSS 选择器** - 不使用复杂的组合选择器（如 h2 + p strong）

## 用户反馈历史
1. "这些组件你是自己创建的还是使用现成的，我建议使用现成开源的" → 改用 Element Plus
2. "首页和侧边栏都挺难看的" → 重新设计，使用真实组件
3. "首页，只保留一句话概括..." → 极简化设计
4. "Arco Design Vue不要这个组件库" → 换成 Element Plus
5. "移动端的适配效果不好" → 创建专门的移动端优化样式
6. "完全删除，使用VitePress 默认样式" → 删除所有 Markdown 文件中的内嵌 CSS

## 待办事项
- [x] 重建白皮书内容结构（使用正确的源文件）
- [x] 建立统一的内容格式规范
- [x] 删除所有 Markdown 文件中的内嵌 CSS
- [ ] 逐章优化内容排版（第一章已完成）
- [ ] 处理数学公式显示问题
- [ ] 设计图片描述对应的 UI 组件
- [ ] 完成英文内容翻译
- [ ] 配置 GitHub Actions 自动部署
- [ ] 测试不同设备的显示效果

## 项目维护
- 主要开发者: Claude Assistant
- 项目所有者: zbin
- 最后更新: 2025-01-07

## 重要决策记录

### 2025-01-07 CSS 使用规范调整
- **问题**：Markdown 文件中内嵌大量重复 CSS，导致排版混乱
- **原因**：过度使用 CSS 选择器造成意外的样式副作用
- **决策**：完全删除 Markdown 中的内嵌 CSS，使用 VitePress 默认样式
- **效果**：内容与样式分离，排版更加统一和稳定

---

**提示**: 这是一个持久化的项目指南文件，任何重要的项目决策和配置都应该更新到这里。
# PRD: CC — Claire's Portfolio Chatbot

**Version:** 0.1
**Status:** In Progress

---

## 1. 背景与目标

**背景**
Claire Han 的作品集以静态内容为主，访客（HR / 面试官）时间有限，往往直接跳到项目，难以快速建立对 Claire 这个人的整体认知。

**目标**
通过一个常驻的 AI 对话助手，让访客用自然语言了解 Claire 的背景、项目和设计观点，同时将这个 chatbot 本身作为 Claire AI 能力的直接体现。

**成功标准**
- 访客能在 2 分钟内通过对话了解 Claire 的核心背景
- 面试官看到 chatbot 后对 Claire 的 AI 能力产生正向印象
- 对话回答准确，不产生错误信息

---

## 2. 用户画像

| 用户 | 目标 | 时间 |
|---|---|---|
| HR / 招聘方 | 快速判断 Claire 是否符合岗位要求 | 极短，< 5 分钟 |
| 面试官 / 设计 Lead | 深入了解某个项目的设计决策 | 较长，愿意探索 |
| 同行设计师 | 了解 Claire 的设计方法论和工具 | 不定 |

---

## 3. 核心 Use Cases

**P0（必须有）**
- 问 Claire 的背景、经历、技能
- 问某个具体项目（问题、方案、结果）
- 问 Claire 的个人意向（城市、角色偏好）
- 用中文或英文提问，得到对应语言的回答
- 每次回答后，自动推荐 2-3 个相关 follow-up 问题

**P1（重要）**
- 首次进入时显示默认 suggested questions（3个）
- 回答中包含项目链接，引导去看 case study
- 侧边栏可以收起 / 展开

**P2（可以之后做）**
- Case study 页面的 suggested questions 随页面内容变化
- 对话历史在单次 session 内保留

---

## 4. 交互设计

**布局**
- 全站右侧固定侧边栏，宽度约 30%
- 默认展开，可收起；Header 导航栏有 "Chat with CC" 入口，收起后可重新打开
- 移动端：默认收起，点击 Header 按钮后底部抽屉展开

**侧边栏结构（从上到下）**
```
标题：Chat with CC
副标题：CC is Claire's assistant to help you know what kind of designer Claire is.
──────────────────────────────────────
[对话消息区，可滚动]
──────────────────────────────────────
[Suggested questions chips]
  - 首次进入：显示 3 个默认问题
  - 每次回答后：动态更新为 2-3 个 contextual follow-up 问题
[输入框]  [发送按钮]
CC is AI and can make mistakes
```

**命名**
CC = Claire's Copilot

---

## 5. Suggested Follow-ups 设计

**机制**
每次 Claude 返回回答时，同时生成 2-3 个 follow-up 问题，显示在输入框上方。问题基于当前对话上下文动态生成，随着对话深入自然 narrow down。

**技术实现**
API 返回结构化 JSON，包含两个字段：

```json
{
  "answer": "Claire 在 ByteDance 主要负责...",
  "suggestions": [
    "What was the biggest challenge in that project?",
    "How did she work with engineering?",
    "What was the impact?"
  ]
}
```

**默认问题（首次进入，无对话时）**
- "Tell me about Claire"
- "What's your fav project?"
- "Claire's AI workflow"

---

## 6. 技术架构

```
[前端 Chat UI] → [Next.js API Route /api/chat] → [Claude API]
                          ↑
              [data/knowledge.md — Claire 的知识库]
```

- **AI 模型**：Claude Haiku（成本低，速度快，对话场景足够）
- **回答方式**：Streaming（逐字输出，体验更自然）
- **知识库**：`data/knowledge.md`，内容更新后立即生效，无需重新部署

---

## 7. 知识库范围

CC 能回答的内容（详见 `data/knowledge.md`）：
- 个人背景、工作经历、教育背景
- 4 个项目的问题、方案、结果
- AI 工作流和工具使用
- 个人意向（城市、角色、timeline）
- 设计方法论和理念

CC **不**回答：
- 与 Claire 无关的问题
- 薪资期望（引导发邮件）
- 知识库中没有的私人信息

---

## 8. 边界与防护

| 场景 | 处理方式 |
|---|---|
| 问无关问题 | 礼貌拒绝，引导回来 |
| 问薪资 | 引导发邮件：clairehan4869@gmail.com |
| 恶意刷请求 | Rate limiting：同一 IP 每分钟最多 10 次 |
| 单次对话过长 | 最多 20 轮后提示直接联系 Claire |
| 回答不准确 | 底部 disclaimer + 鼓励直接联系 Claire 核实 |

---

## 9. 不在本期范围内

- 多语言 UI（界面文字暂时英文）
- 对话历史跨 session 保存
- 后台管理界面
- Case study 页面的上下文感知推荐问题

---

## 10. 开发计划

| 阶段 | 内容 | 完成标准 |
|---|---|---|
| Step 1 | 完善 knowledge.md | 内容覆盖所有 P0 use cases |
| Step 2 | API Route + 基础对话（含 suggestions 返回） | 终端可跑通对话 |
| Step 3 | 独立 demo 页测试边界 case | 确认回答质量和边界处理 |
| Step 4 | 侧边栏 UI 开发 | 视觉上可 demo |
| Step 5 | 集成进首页 + 移动端适配 | 合并进作品集主分支 |

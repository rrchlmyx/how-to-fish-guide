# 《AI 产品（国外—热词游戏站）》六关作业材料

项目：How to Fish 英文攻略站  
网站名：Hook & Haul  
准备日期：2026-08-25

## 关卡 1：完成游戏词判断表

候选词判断表见：`research-workbook.png` 第一部分。

- How to Fish：趋势强劲上涨；美国月搜索量约 480；KD 21；细分词 20+；SERP 竞争中等；结论：做。
- Anime Origins：趋势上涨后趋稳；美国月搜索量约 390；KD 11；细分词 20+；SERP 竞争中高；结论：备选。
- RUNAWAYS Roblox：近 7 天 CCU 上涨 218%；新词工具尚未报告有效 KD/搜索量；细分词 15+；SERP 竞争中等；结论：备选。

数据说明：

- KD 与月搜索量使用 Natiad 免费 Keyword Difficulty Checker，美国 Google 索引，查询日期 2026-08-25。
- 对于尚未产生 KD 的新词，明确写 N/A，没有编造数字。
- How to Fish 于 2026-08-20 上线，公开报道显示上线首日约 1 万并发，8 月 24 日超过 26.8 万并发，两天销量超过 100 万份。

本关收获文案：

> 最大的收获是确认“热度”必须和“可做性”一起看。How to Fish 的并发和销量短期爆发，但主词有普通钓鱼教程的歧义，首页也已经出现同名 wiki 和成熟媒体内容。因此不能只做一个泛首页，而要切入 islands、lures、fish list、bosses 等具体搜索意图。工具中没有数据的新词我保留为 N/A，没有为了填表编造 KD。

## 关卡 2：关键词清单和页面矩阵

页面矩阵见：`research-workbook.png` 第二部分；网站已落实以下 11 个页面：

1. how to fish game → `/`
2. how to fish beginner guide → `/guides/beginner-guide`
3. how to fish controls → `/guides/controls`
4. how to fish islands → `/guides/islands-progression`
5. how to fish lures → `/guides/lures-and-baits`
6. how to fish fish list → `/guides/fish-list`
7. how to fish best weapons → `/guides/weapons-and-upgrades`
8. how to fish money guide → `/guides/money-guide`
9. how to fish bosses → `/guides/bosses`
10. how to fish radar → `/guides/radar-and-navigation`
11. how to fish achievements → `/guides/achievements`

本关收获文案：

> 最大的收获是理解页面不是为了“看起来完整”，而是为了逐一承接玩家的问题。Google 自动补全和近期攻略标题都集中在 cooking、islands、lures、fish list、weapons、bosses、money 等明确动作上，所以我合并了同义词，并按照一个搜索意图一个内页的原则做了首版页面矩阵。

## 关卡 3：页面素材来源记录

来源矩阵见：`research-workbook.png` 第三部分。每个网站页面底部也列出了直接引用的来源 URL。

主要来源：

- Steam 官方商店页：发行信息、开发商、平台、玩法简介。
- SteamDB 与近期新闻报道：上线时间、并发趋势、销量。
- AllThings.How：岛屿顺序、任务交付、Boss 与装备路线。
- GrindNStrat：控制方式、岛屿、武器、烹饪与核心循环。
- NerdsChalk / TposeGaming：诱饵等级、鱼池和 Boss 诱饵。
- Times of India / IndieBunny：鱼类清单和收藏检查。
- How to Fish Game Wiki：新手优先级和任务物品安全提醒。

本关收获文案：

> 最大的收获是把 AI 的角色限制在“整理和交叉核验”，而不是凭空生成事实。How to Fish 是刚发布的新游戏，不同攻略对个别任务物品的叫法存在差异，所以网站保留来源链接，并明确提示以游戏内当前任务文字为最终依据；不确定的数值和机制不写。

## 关卡 4：本地可访问的网站版本

- 项目目录：`how-to-fish-guide`
- 本地地址：`http://127.0.0.1:3000`
- 本地首页截图：`hook-and-haul-local.png`
- 技术栈：Next.js 16、React 19、TypeScript、CSS
- 页面：1 个首页、1 个导航页、10 个攻略详情页、4 个法律/说明页、robots、sitemap、研究工作簿。
- 验证：`npm run lint` 与 `npm run build` 均通过，23 个静态页面成功生成。

本关收获文案：

> 最大的收获是先把真实搜索需求和可信素材定下来，再做网站结构。首版没有依赖未经授权的游戏图片，而是用原创的声呐和航海视觉系统完成页面；同时加入独立 metadata、文章结构化数据、内链、robots、sitemap、移动端布局和来源记录，确保它不是只有外观的空站。

## 关卡 5：网站上线和数据接入结果

待完成的外部账号步骤：

- 创建远程 GitHub 仓库并推送代码。
- 导入 Vercel 并取得公开链接。
- 设置 `NEXT_PUBLIC_SITE_URL`。
- 在 GA4 创建 Web 数据流，设置 `NEXT_PUBLIC_GA_ID` 并重新部署。
- 在 GSC 验证网站、请求首页索引并提交 `/sitemap.xml`。

代码已经预留 GA4 环境变量并生成 `/robots.txt` 与 `/sitemap.xml`。账号授权成功后补入线上链接和验证截图。

本关收获文案：

> 最大的收获是认识到“构建通过”不等于“上线闭环完成”。公网 HTTPS、正确 canonical、robots、sitemap、GSC 验证、索引请求和 GA 实时访问必须构成一条可复核证据链。没有真正完成的账号步骤不提前写成成功。

## 关卡 6：数据复盘和补页计划

初始复盘见：`research-workbook.png` 第四部分。

当前状态为网站上线前基线，因此 GSC 展示、点击、平均排名与搜索词均暂无真实数据，不能编造。

首轮候选补页计划：

1. All fish values and sell prices：当 fish/value 类搜索开始获得展示时建立完整价格页。
2. Boss lure locations：当具体 bait/lure 查询有展示时，从现有诱饵页拆出独立页面。
3. Volcano and whale walkthrough：当 endgame/whale 查询出现时补充独立终局攻略。

本关收获文案：

> 最大的收获是把“补什么页面”从主观猜测变成数据问题。网站刚上线时没有 GSC 数据，就应该明确记录为无数据，并先列候选假设；等搜索词报告出现后，再按照“有展示但没有对应页面”“已有页面表现好”“页面未收录”三类信号决定真正补页顺序。


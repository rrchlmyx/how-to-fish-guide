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

关键词清单见：`02-keyword-list-corrected.png`（11 个词，按通用需求 / 个性需求分组）。  
页面矩阵见：`02-page-matrix-corrected.png`（每页关键词、用户问题、URL、页面类型和优先级）。

网站已落实以下 11 个页面：

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

逐页来源记录见：`03-page-sources-corrected.png`。按关卡 2 的 11 个规划页面逐页记录，每页包含 2 个来源及其可支持的内容。每个网站页面底部也列出了直接引用的来源 URL。

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

完成状态：

- 生产网站：`https://how-to-fish-guide-mu.vercel.app/`
- GitHub：`https://github.com/rrchlmyx/how-to-fish-guide`
- GSC：网址前缀资源已通过 HTML 元标记验证。
- Sitemap：`/sitemap.xml` 已提交成功，GSC 首次读取发现 16 个网页。
- GA4：衡量 ID `G-S9Y1GGYZ2B` 已接入，实时报告已收到访问。
- 复核修正：原 sitemap 与 robots 的默认域名仍为旧占位地址，现已统一为实际生产域名并重新部署。

本关收获文案：

> 最大的收获是认识到“构建通过”不等于“上线闭环完成”。公网 HTTPS、正确 canonical、robots、sitemap、GSC 验证、索引请求和 GA 实时访问必须构成一条可复核证据链。没有真正完成的账号步骤不提前写成成功。

## 关卡 6：数据复盘和补页计划

首次上线复盘见：`06-data-review-corrected.png`。

当前可确认生产部署、GSC 验证、sitemap 读取和 GA4 实时采集链路均已打通。网站上线时间不足 1 天，GSC 尚未形成可用于判断自然搜索表现的曝光、点击、平均排名和查询词样本，因此不据首小时访问量判断 SEO 成败。

- 我的站：`https://how-to-fish-guide-mu.vercel.app/`
- GSC 总展示：当前报告可用值 0
- GSC 总点击：当前报告可用值 0
- 当前判断：只做技术排查，暂不判断换词或升级
- 下次复盘：上线第 7 天（2026-09-01）与第 14 天（2026-09-08）

首轮候选补页计划：

1. Co-op / multiplayer：官方与实机来源核验完成，且 GSC 出现相关查询后优先发布。
2. Quest items / trophies：按当前游戏内任务文本核验数量与交付对象后发布，避免复制冲突数值。
3. Fish prices / cooking：完成实测价格表，或 GSC 出现 price/cooking 查询后从现有页面拆分。

本关收获文案：

> 最大的收获是把“补什么页面”从主观猜测变成数据问题。网站刚上线时没有 GSC 数据，就应该明确记录为无数据，并先列候选假设；等搜索词报告出现后，再按照“有展示但没有对应页面”“已有页面表现好”“页面未收录”三类信号决定真正补页顺序。


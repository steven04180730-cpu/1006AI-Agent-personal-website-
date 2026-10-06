import { Project, SkillCategory, SocialLink } from '../types';

/**
 * ==============================================================================
 * 個人基本資訊與社群連結 (Basic Information & Social Profiles)
 * 方便隨時修改姓名、標語、信箱與社群帳號
 * ==============================================================================
 */
export const PERSONAL_INFO = {
  nameZh: '施定宇',
  nameEn: 'Steven Shih',
  titleZh: 'Full-Stack Developer & AI Systems Engineer',
  titleEn: 'Full-Stack Developer & AI Systems Engineer',
  valuePropZh: '專注於高可用後端架構、跨平台應用與 AI Agent 整合。',
  valuePropEn: 'Specializing in high-availability backend architectures, cross-platform applications, and autonomous AI Agent integration.',
  email: 'steven04180730@gmail.com',
  locationZh: '台北 / 支援遠端協作 (Taipei · Remote)',
  locationEn: 'Taipei · Open to Remote Globally',
  statusZh: '開放技術挑戰與高影響力專案合作 (Open for Opportunities)',
  statusEn: 'Available for technical leadership & engineering challenges',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/steven-shih', // 置換為您的真實 GitHub 網址
    icon: 'github',
    handle: '@steven-shih',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/steven-shih', // 置換為您的真實 LinkedIn 網址
    icon: 'linkedin',
    handle: 'Steven Shih',
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/steven_shih_dev', // 置換為您的真實 X 網址
    icon: 'x',
    handle: '@steven_shih_dev',
  },
  {
    name: 'Instagram',
    url: 'https://instagram.com/steven.shih', // 置換為您的真實 IG 網址
    icon: 'instagram',
    handle: '@steven.shih',
  },
  {
    name: 'Email',
    url: 'mailto:steven04180730@gmail.com',
    icon: 'mail',
    handle: 'steven04180730@gmail.com',
  },
];

/**
 * ==============================================================================
 * 核心量化指標 (Key Engineering Metrics)
 * 展示於 Hero 區塊下方，凸顯工程厚度
 * ==============================================================================
 */
export const HERO_METRICS = [
  {
    value: '120k+',
    labelZh: 'API 峰值請求 / 秒 (Peak RPS)',
    labelEn: 'Peak RPS Handled',
    descZh: '邊緣閘道實測壓測吞吐量',
    descEn: 'Edge gateway benchmark throughput',
  },
  {
    value: '< 8ms',
    labelZh: '核心服務 p99 延遲',
    labelEn: 'Core Service p99 Latency',
    descZh: '分散式快取與零拷貝最佳化',
    descEn: 'Distributed cache & zero-copy tuning',
  },
  {
    value: '99.95%',
    labelZh: '生產環境服務可用性 SLA',
    labelEn: 'Production Availability SLA',
    descZh: '具備自動容錯與自我修復管線',
    descEn: 'With automated failover & self-healing',
  },
  {
    value: '10+',
    labelZh: '端到端產品架構落地',
    labelEn: 'End-to-End Systems Deployed',
    descZh: '涵蓋 AI Agent、雲原生到跨平台應用',
    descEn: 'Spanning AI Agents, Cloud & Native Apps',
  },
];

/**
 * ==============================================================================
 * 精選專案列表 (Featured Engineering Projects)
 * 包含具體指標、技術堆疊、架構決策與反思
 * ==============================================================================
 */
export const PROJECTS: Project[] = [
  {
    id: 'aegisflow',
    category: 'ai',
    title: 'AegisFlow — 分散式 AI Agent 工作流排程引擎',
    titleEn: 'AegisFlow — Distributed Agentic Workflow Engine',
    headline: '具備 DAG 有向無環圖拓撲、串流推論與自動中斷續跑的企業級 Agent 協同核心',
    headlineEn: 'Enterprise agent orchestration core with streaming DAG topology and autonomous fault recovery',
    impactMetric: '複合式推理延遲降低 42% · 狀態修復率 99.9%',
    impactMetricEn: '42% Reduction in Multi-Hop Latency · 99.9% State Recovery',
    description:
      '為高複雜度企業決策設計的自主 AI Agent 框架。採用事件驅動架構，結合動態 DAG 拓撲解析、向量語意記憶庫與非同步函數調用（Function Calling），解決傳統 LLM 鏈條脆弱、幻覺擴散與超時重跑痛點。',
    descriptionEn:
      'An autonomous AI agent framework designed for complex enterprise reasoning. Built on event-driven architecture, featuring dynamic DAG topologies, vector semantic memory, and asynchronous tool calling to eliminate hallucination cascading and fragile execution chains.',
    techStack: [
      'TypeScript',
      'Go',
      'LangGraph',
      'Redis Streams',
      'PostgreSQL',
      'Docker',
      'OpenTelemetry',
    ],
    liveUrl: 'https://demo-aegisflow.internal.dev',
    githubUrl: 'https://github.com/steven-shih/aegisflow-engine',
    architectureDetails: {
      overview:
        '核心引擎由 Go 編寫高併發事件調度器，透過 Redis Streams 實現子代理（Sub-agent）任務解耦；前端操作台使用 React 19 與自研虛擬畫布，實時可視化多代理思考路徑與 Token 消耗熱圖。',
      overviewEn:
        'The core engine utilizes a high-concurrency Go scheduler decoupling sub-agent tasks via Redis Streams, coupled with a React 19 virtualized canvas visualizing real-time agent reasoning DAGs and token expenditure heatmaps.',
      challenges: [
        '非同步工具調用容易引發上下文污染與超長對話記憶體溢出',
        '多步驟推理中單點模型超時導致整個長工作流失敗',
        '高頻 Token 串流輸出對 WebSocket 連線池產生背壓（Backpressure）',
      ],
      challengesEn: [
        'Context window contamination and memory explosion in long multi-agent iterations',
        'Single model timeout cascading into complete workflow abandonment',
        'High-frequency token streaming creating heavy backpressure on WebSocket pools',
      ],
      keyDecisions: [
        '導入分層記憶架構：短期狀態存於 Redis，長期語意存於向量檢索庫，大幅縮減每輪提示詞體積',
        '實現基於 Raft 思想的檢查點（Checkpoint）機制，支援單一步驟熱重試與漸進式降級',
        '在邊緣層採用 Leaky Bucket 流控演算法，動態協調客戶端渲染速率與後端推理節奏',
      ],
      keyDecisionsEn: [
        'Engineered tiered memory architecture separating transient state in Redis from long-term embeddings in vector store',
        'Implemented checkpointing mechanics enabling single-node warm retries and deterministic fallback policies',
        'Applied edge leaky-bucket rate limiting to balance browser render cadence with server-side generation',
      ],
    },
  },
  {
    id: 'hyperscale-gateway',
    category: 'backend',
    title: 'HyperScale Gateway — 高併發邊緣 API 路由與授權網關',
    titleEn: 'HyperScale Gateway — High-Throughput Edge API Gateway',
    headline: '單機承載 120,000+ RPS、p99 延遲低於 7.8ms 的極致效能基礎設施',
    headlineEn: 'Ultra-low latency edge gateway processing 120k+ RPS with sub-8ms p99 response times',
    impactMetric: '峰值 120k+ RPS · p99 延遲 < 7.8ms · 記憶體佔用 < 85MB',
    impactMetricEn: '120k+ Peak RPS · Sub-8ms p99 Latency · Under 85MB RAM Footprint',
    description:
      '專為微服務群設計的高效能反向代理與安全存取層。整合分散式滑動視窗限流、無鎖記憶體快取、JWT 零拷貝解析與 eBPF 網路監控，為大規模雲端架構提供無懈可擊的流量防護與路由轉發。',
    descriptionEn:
      'High-performance reverse proxy and access tier designed for modern microservices. Integrates distributed sliding-window rate limiting, zero-copy JWT validation, lock-free memory cache, and eBPF network telemetry.',
    techStack: [
      'Go',
      'Rust',
      'Redis Cluster',
      'gRPC',
      'Prometheus',
      'eBPF',
      'Linux Kernel',
    ],
    liveUrl: 'https://demo-gateway.internal.dev',
    githubUrl: 'https://github.com/steven-shih/hyperscale-gateway',
    architectureDetails: {
      overview:
        '採用 Go 與 Rust 混合雙層架構：關鍵路徑的密碼學雜湊驗證委託 Rust SIMD 加速庫，路由邏輯與分散式叢集狀態協調由 Go goroutines 高效調度，全面消除 GC 停頓對微秒級流量的衝擊。',
      overviewEn:
        'Employs a hybrid Go and Rust architecture: cryptographic token verification offloaded to Rust SIMD routines, while dynamic routing and cluster sync run via Go goroutines, eliminating GC stutter on time-critical paths.',
      challenges: [
        '面對突發式流量激增時，傳統中介軟體序列化與解析造成 CPU 爭用嚴重',
        '跨可用區分散式限流產生額外網路 RTT，拉高整體端到端延遲',
      ],
      challengesEn: [
        'CPU thrashing caused by repetitive serialization and parsing during sudden traffic bursts',
        'Cross-AZ distributed rate limiting incurring substantial network RTT and inflating tail latencies',
      ],
      keyDecisions: [
        '採用零拷貝位元組流讀取與自訂二進位通訊協定，將反序列化開銷降至趨近於零',
        '設計本地自適應滑動視窗搭配 Redis 非同步批次同步，減少 87% 的跨節點同步請求',
      ],
      keyDecisionsEn: [
        'Implemented zero-copy byte slice scanners and lean binary protocols, eliminating parsing overhead',
        'Architected local adaptive token buckets paired with asynchronous Redis batching, slashing cross-node hops by 87%',
      ],
    },
  },
  {
    id: 'omnisync',
    category: 'fullstack',
    title: 'OmniSync Canvas — 毫秒級多端即時協作白板與狀態引擎',
    titleEn: 'OmniSync Canvas — Real-Time Multiplayer State & Canvas Engine',
    headline: '基於 CRDT 與 WebSockets 的去中心化無衝突協同編輯平台',
    headlineEn: 'Conflict-free collaborative workspace driven by CRDTs and low-latency WebSockets',
    impactMetric: '百人同時協作 0 衝突 · 離線優先同調率 99.98%',
    impactMetricEn: 'Zero Conflicts with 100+ Concurrent Editors · 99.98% Offline Sync Accuracy',
    description:
      '結合現代圖形繪製技術與狀態同步演算法的全端即時協同系統。支援多人即時游標跟隨、無失真向量筆刷、多層圖元管理，以及在極端弱網環境下的強大離線編輯與自動追趕合流。',
    descriptionEn:
      'Full-stack real-time collaborative workspace merging modern graphic rendering with mathematical state convergence. Features multi-user live cursors, smooth vector strokes, hierarchical layers, and robust offline-first synchronization under intermittent network loss.',
    techStack: [
      'React 19',
      'TypeScript',
      'Yjs / CRDT',
      'WebSockets',
      'HTML5 Canvas',
      'Tailwind CSS',
      'Node.js',
    ],
    liveUrl: 'https://demo-omnisync.internal.dev',
    githubUrl: 'https://github.com/steven-shih/omnisync-canvas',
    architectureDetails: {
      overview:
        '前端利用 Canvas 2D 雙緩衝機制與空間四元樹（Quadtree）加速碰撞檢測，確保 60 FPS 順暢縮放平移；通訊層採用 Binary WebSocket 傳輸 Yjs 差量更新，後端叢集以 Redis Pub/Sub 廣播跨房間事件。',
      overviewEn:
        'Frontend implements double-buffered Canvas 2D with quadtree spatial partitioning for continuous 60 FPS viewport manipulation; updates are transmitted as binary delta blobs over WebSockets backed by Redis pub/sub.',
      challenges: [
        '大量圖元（>5,000 物件）在多端同時移動時引發瀏覽器主執行緒重排重繪卡頓',
        '斷網長達數小時後重連造成的龐大差量衝突與記憶體膨脹',
      ],
      challengesEn: [
        'Main thread stutter and repainting bottlenecks when manipulating 5,000+ objects simultaneously',
        'State divergence and memory ballooning when clients reconnect after hours of offline editing',
      ],
      keyDecisions: [
        '採用局部視窗虛擬化渲染（Viewport Culling），僅重繪可見區域圖元',
        '引入增量壓縮快照與垃圾回收演算法，將長期協作文件的 CRDT 結構體積縮減 65%',
      ],
      keyDecisionsEn: [
        'Engineered dynamic viewport culling so offscreen canvas objects consume zero draw calls',
        'Implemented incremental state snapshotting and tombstone GC to reduce document metadata size by 65%',
      ],
    },
  },
  {
    id: 'pulseops',
    category: 'backend',
    title: 'PulseOps Telemetry — 全鏈路分散式追蹤與根因智慧診斷平台',
    titleEn: 'PulseOps Telemetry — Distributed Tracing & Anomaly Synthesis',
    headline: '每日聚合數千萬級 Trace/Log，藉由輕量統計模型秒級收斂微服務級聯故障',
    headlineEn: 'Aggregating tens of millions of traces daily with statistical root-cause synthesis',
    impactMetric: '平均故障修復時間 (MTTR) 降低 58% · 日處理 50M+ 遙測事件',
    impactMetricEn: '58% Reduction in MTTR · 50M+ Daily Telemetry Events Ingested',
    description:
      '為大規模微服務與分散式叢集量身打造的可觀測性分析系統。透過自動注入的 OpenTelemetry 探針串接全鏈路日誌與調用鏈，結合依賴拓撲分析與異常突波偵測，將傳統漫長的除錯排查轉化為直覺的根本原因診斷報告。',
    descriptionEn:
      'Observability and diagnostic platform engineered for microservice clusters. Ingests OpenTelemetry traces and structured logs into ClickHouse, mapping dynamic dependency graphs and surfacing cascading anomalies to accelerate operational troubleshooting.',
    techStack: [
      'Next.js',
      'ClickHouse',
      'OpenTelemetry',
      'Kafka',
      'Grafana',
      'Tailwind CSS',
      'Python',
    ],
    liveUrl: 'https://demo-pulseops.internal.dev',
    githubUrl: 'https://github.com/steven-shih/pulseops-telemetry',
    architectureDetails: {
      overview:
        '日誌與鏈路數據經由 Kafka 緩衝並批次寫入 ClickHouse 欄式資料庫，查詢速度達秒級響應億級行；分析模組利用拓撲路徑圖演算法比對正常基線與異常時延，自動高亮顯示致病節點。',
      overviewEn:
        'Telemetry pipelines stream via Kafka into partitioned ClickHouse columnar storage for sub-second analytical queries across billions of rows; an anomaly synthesizer correlates trace spans against baseline histograms.',
      challenges: [
        '高負載下海量追蹤資料對儲存體積與網路頻寬造成沈重成本負擔',
        '微服務依賴環路中警報風暴（Alert Storming）淹沒工程師真正要處理的根因',
      ],
      challengesEn: [
        'Massive network and disk costs incurred by indiscriminate full-sampling telemetry',
        'Cascading alert storms paralyzing engineering incident triage during service degradation',
      ],
      keyDecisions: [
        '實施頭尾自適應採樣（Tail-Based Sampling）：100% 保留異常與高延遲鏈路，正常鏈路採樣 1%',
        '架構告警拓撲因果去重機制，將單一故障引發的數百條告警收斂為單一結構化事件',
      ],
      keyDecisionsEn: [
        'Deployed tail-based sampling retaining 100% of errors and outliers while sampling nominal traces at 1%',
        'Built topological graph suppression collapsing cascading multi-service alerts into a single root cause ticket',
      ],
    },
  },
];

/**
 * ==============================================================================
 * 技術能力與架構分群 (Skills & Architecture)
 * 絕無無意義的「85%」百分比條，採用專業維度標籤與應用場景備註
 * ==============================================================================
 */
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    title: '全端與跨平台體驗',
    titleEn: 'Frontend & Cross-Platform',
    subtitle: '極致渲染效能、型別安全與多端響應體系',
    subtitleEn: 'High-framerate rendering, strict types & responsive design',
    skills: [
      { name: 'React 19 / Next.js', proficiencyContext: '核心主修 · SSR / RSC 架構', proficiencyContextEn: 'Core Stack · SSR / RSC', highlight: true },
      { name: 'TypeScript', proficiencyContext: '全鏈路型別安全 · 泛型設計', proficiencyContextEn: 'End-to-End Strict Typing', highlight: true },
      { name: 'React Native / Flutter', proficiencyContext: '跨平台行動端產品落地', proficiencyContextEn: 'Cross-Platform Mobile Apps' },
      { name: 'Tailwind CSS', proficiencyContext: '現代響應式與設計系統封裝', proficiencyContextEn: 'Design Systems & Layouts' },
      { name: 'HTML5 Canvas / WebGL', proficiencyContext: '低延遲視覺化與 60 FPS 繪圖', proficiencyContextEn: 'Low-latency 60FPS Rendering' },
      { name: 'State Architecture (Zustand/TanStack)', proficiencyContext: '複雜狀態分離與快取失效策略', proficiencyContextEn: 'Complex State & Invalidation' },
    ],
  },
  {
    id: 'backend',
    title: '後端與雲原生架構',
    titleEn: 'Backend & Cloud Systems',
    subtitle: '高併發、低延遲微服務與分散式資料持久化',
    subtitleEn: 'High concurrency, resilient microservices & scalable data storage',
    skills: [
      { name: 'Go (Golang)', proficiencyContext: '高併發微服務 · 零拷貝邊緣網關', proficiencyContextEn: 'Concurrent Services & Gateways', highlight: true },
      { name: 'Node.js / Bun', proficiencyContext: '非同步 I/O · 串流處理管線', proficiencyContextEn: 'Async I/O & Streaming Pipelines', highlight: true },
      { name: 'Python', proficiencyContext: '演算法實作 · 資料管線與後端服務', proficiencyContextEn: 'Data Pipelines & Automation' },
      { name: 'PostgreSQL / SQL', proficiencyContext: '索引優化 · 複合查詢與事務隔離', proficiencyContextEn: 'Index Optimization & Transactions', highlight: true },
      { name: 'Redis / Dragonfly', proficiencyContext: '分散式快取 · Pub/Sub · 滑動視窗限流', proficiencyContextEn: 'Distributed Cache & Rate Limiting' },
      { name: 'Docker & Kubernetes', proficiencyContext: '容器化封裝 · 叢集佈署與編排', proficiencyContextEn: 'Containerization & Orchestration' },
      { name: 'gRPC / Protocol Buffers', proficiencyContext: '內部服務低延遲二進位通訊', proficiencyContextEn: 'High-Efficiency Inter-Service RPC' },
    ],
  },
  {
    id: 'ai-systems',
    title: 'AI 系統與 Agent 管線',
    titleEn: 'AI Systems & Agent Workflows',
    subtitle: '大語言模型工程、自主工作流編排與生產級檢索增強 (RAG)',
    subtitleEn: 'LLM systems, multi-agent coordination & production RAG',
    skills: [
      { name: 'LangGraph & Multi-Agent DAG', proficiencyContext: '動態圖拓撲編排 · 容錯修復機制', proficiencyContextEn: 'Dynamic DAG & Self-Healing Workflows', highlight: true },
      { name: 'Function Calling & Tool Use', proficiencyContext: '結構化輸出驗證 · 外部 API 自主協同', proficiencyContextEn: 'Tool Use & Structured Schema Output', highlight: true },
      { name: 'Vector DBs (Qdrant / pgvector)', proficiencyContext: '高維語意檢索 · 混和檢索 (Hybrid Search)', proficiencyContextEn: 'Semantic Embeddings & Hybrid Search' },
      { name: 'LLM Streaming & WebSocket', proficiencyContext: '低延遲文字串流 · 背壓防護調度', proficiencyContextEn: 'Low-Latency Streaming & Backpressure' },
      { name: 'Prompt Engineering & Eval', proficiencyContext: '少樣本微調測試 · 幻覺防護護欄 (Guardrails)', proficiencyContextEn: 'Few-Shot Rigor & Hallucination Guardrails' },
    ],
  },
  {
    id: 'devops',
    title: '維運、可觀測性與可靠性',
    titleEn: 'DevOps & Observability',
    subtitle: '全鏈路追蹤、CI/CD 自動化與極致系統韌性',
    subtitleEn: 'Full-stack tracing, automated CI/CD & defense-in-depth reliability',
    skills: [
      { name: 'OpenTelemetry & ClickHouse', proficiencyContext: '全鏈路分散式追蹤 · 億級日誌秒查', proficiencyContextEn: 'Distributed Tracing & Columnar Logs', highlight: true },
      { name: 'Prometheus & Grafana', proficiencyContext: '關鍵 SLO / SLA 告警與即時儀表板', proficiencyContextEn: 'SLO/SLA Metrics & Real-time Dashboards' },
      { name: 'CI/CD (GitHub Actions)', proficiencyContext: '自動化測試 · 建置管線與多階層部署', proficiencyContextEn: 'Automated Testing & Delivery Pipelines' },
      { name: 'Linux Kernel & eBPF', proficiencyContext: '網路協定棧調優 · 系統瓶頸排查', proficiencyContextEn: 'Kernel Tuning & Diagnostics' },
      { name: 'Security & OAuth 2.0 / JWT', proficiencyContext: '防禦性架構 · 授權鑑權安全基準', proficiencyContextEn: 'Zero-Trust Auth & Defense-in-Depth' },
    ],
  },
];

/**
 * ==============================================================================
 * 工程哲學與核心原則 (Engineering Philosophy)
 * ==============================================================================
 */
export const CORE_PHILOSOPHY = [
  {
    index: '01',
    titleZh: '指標驅動與防禦性設計 (Metric-Driven & Defensive)',
    titleEn: 'Metric-Driven & Defensive Design',
    descZh: '不依賴主觀直覺猜測瓶頸；每一項架構優化都以具體延遲指標、記憶體佔用與系統吞吐量為依歸，並在每一處邊界預留超時熔斷與優雅降級。',
    descEn: 'Architectural changes are governed by hard empirical data. Every integration boundary incorporates strict timeouts, circuit breakers, and graceful degradation.',
  },
  {
    index: '02',
    titleZh: '端到端型別安全與架構簡約 (End-to-End Type Safety)',
    titleEn: 'End-to-End Type Safety & Simplicity',
    descZh: '從前端狀態、API 通訊合約到資料庫 Schema，嚴格落實靜態型別約束與二進位驗證，拒絕過度設計，追求程式碼結構的極致可讀性與維護性。',
    descEn: 'From user interactions to database schemas, static contracts prevent runtime regressions. Favor explicit clarity over unnecessary conceptual abstractions.',
  },
  {
    index: '03',
    titleZh: '系統韌性與真正的實用主義 (Resilience & Pragmatism)',
    titleEn: 'System Resilience & True Pragmatism',
    descZh: '技術的價值在於穩定解決現實世界的問題。無論是微服務的跨可用區容災，還是 AI Agent 的自主重試與防幻覺機制，穩定性永遠先於流行詞彙。',
    descEn: 'Technology exists to solve real constraints reliably. Resilient failure recovery, deterministic recovery, and product durability always take precedence over hype.',
  },
];

// ============================================================
// PORTFOLIO DATA — Edit this file to update your portfolio
// ============================================================

export const profile = {
  name: 'Abhishek Khati',
  displayName: 'Abhishek Khati',
  headline: 'Data Analytics | SQL & Python | Building Intelligent Systems',
  eyebrow: 'BCA FINAL YEAR · DATA ANALYST · AI/ML',
  heroHeadline: 'Turning Data Into Insight.\nBuilding Ideas Into Reality.',
  heroDescription:
    'Builds SQL, Python, Excel, and Power BI workflows for data cleaning, exploratory analysis, and business dashboards. Solves analytical problems using CTEs, Window Functions, and statistical modeling.',
  education: 'BCA Final Year · MIET Kumaon (Kumaun University)',
  location: 'Haldwani, Uttarakhand, India',
  phone: '+91 94565 03217',
  whatsapp: 'https://wa.me/919456503217?text=Hi%20Abhishek%2C%20saw%20your%20portfolio%20and%20wanted%20to%20connect!',
  about: `I am a BCA final-year student at MIET Kumaon (Kumaun University) developing practical solutions in data analytics and intelligent software systems. I build automated workflows using SQL, Python, Excel, and Power BI for cleaning datasets, exploratory analysis, and business dashboards. My approach is rooted in writing efficient SQL queries (CTEs, Window Functions, Subqueries) and applying statistical methods to convert raw numbers into actionable business insights.`,
  // Set to true when you are actively seeking opportunities
  availableForWork: true,
  availabilityLabel: 'Open to Data Analyst & AI/ML Opportunities',
  // Social links
  email: 'khatiabhishek65@gmail.com',
  linkedin: 'https://www.linkedin.com/in/abhishek-khati-b263b0319',
  github: 'https://github.com/Abhishek-khati',
  hackerrank: 'https://www.hackerrank.com/profile/akhati713',
  // Profile photo: Place your image in the /public folder
  avatarUrl: '/profile_photo.jpeg',
  // Path to your resume PDF in /public folder
  resumeUrl: '/DATA_ANALYST_RESUME_AK.pdf',
}

export const skills = {
  'Data Analysis': [
    { name: 'SQL', level: 'working' },
    { name: 'PostgreSQL', level: 'working' },
    { name: 'MySQL', level: 'working' },
    { name: 'Excel', level: 'working' },
    { name: 'Power BI', level: 'working' },
    { name: 'DAX', level: 'familiar' },
    { name: 'Data Cleaning', level: 'working' },
    { name: 'Exploratory Data Analysis', level: 'working' },
  ],
  Programming: [
    { name: 'Python', level: 'working' },
    { name: 'Pandas', level: 'working' },
    { name: 'NumPy', level: 'working' },
    { name: 'Matplotlib', level: 'working' },
    { name: 'Seaborn', level: 'familiar' },
  ],
  'AI & Machine Learning': [
    { name: 'Scikit-learn', level: 'familiar' },
    { name: 'Random Forest', level: 'familiar' },
    { name: 'XGBoost', level: 'familiar' },
    { name: 'Feature Engineering', level: 'familiar' },
    { name: 'LangChain', level: 'learning' },
    { name: 'LLM Experimentation', level: 'learning' },
  ],
  'Dev & Tools': [
    { name: 'Git', level: 'working' },
    { name: 'GitHub', level: 'working' },
    { name: 'Docker', level: 'familiar' },
    { name: 'Streamlit', level: 'familiar' },
    { name: 'HTML/CSS', level: 'working' },
    { name: 'JavaScript', level: 'familiar' },
  ],
  'Emerging Tech': [
    { name: 'Blockchain', level: 'learning' },
    { name: 'Web3', level: 'learning' },
    { name: 'Workflow Automation', level: 'learning' },
    { name: 'AI-powered Apps', level: 'learning' },
  ],
}

// Skill proficiency legend
// working   = use regularly in projects
// familiar  = understand and have used
// learning  = currently exploring

export interface ProjectImage {
  title: string
  src: string
  desc: string
}

export interface Project {
  id: string
  name: string
  category: string
  tagline: string
  summary: string
  description: string
  technologies: string[]
  highlights: string[]
  github: string
  demo: string
  presentation: string
  featured: boolean
  color: string
  note?: string
  image?: string
  images?: ProjectImage[]
  spotlightMetrics?: { val: string; lbl: string }[]
  spotlightArchitecture?: string[]
}

export const projects: Project[] = [
  {
    id: 'credit-risk-ifrs9',
    name: 'Credit Risk Analytics & IFRS 9 Dashboard Suite',
    category: 'Financial Analytics · Power BI',
    tagline: 'Enterprise portfolio performance, IFRS 9 ECL staging, and multi-scenario stress testing.',
    summary:
      'Developed an end-to-end Power BI dashboard suite to monitor loan portfolio performance, calculate IFRS 9 Expected Credit Loss (ECL), and evaluate credit risk under multiple economic stress scenarios.',
    description: `This comprehensive Power BI suite provides enterprise-grade credit risk intelligence across an auto loan securitisation portfolio. Built around a robust star-schema relational model, it computes complex regulatory IFRS 9 staging rules, vintage delinquency roll-rates, dynamic waterfall loss attribution, and macroeconomic stress impact.`,
    technologies: ['Microsoft Power BI', 'DAX', 'Power Query', 'Financial Risk Modeling', 'Microsoft Excel', 'GitHub'],
    highlights: [
      '3 Dedicated Dashboards: Portfolio Performance, IFRS 9 Expected Credit Loss (ECL), and Stress Testing & Waterfall Analysis',
      'Analyzed core credit risk metrics: Probability of Default (PD), Loss Given Default (LGD), Exposure at Default (EAD), Default Rate, Collection Efficiency, and Net Loss',
      'Implemented dynamic DAX measures and scenario-based analysis comparing Base, Moderate, Severe, and Extreme stress scenarios',
      'Engineered waterfall & sensitivity analyses to decompose marginal risk factors (PD, LGD, EAD) on Expected Credit Loss',
      'Designed star-schema data architecture with fact and dimension tables for high-performance interactive slicing',
      'Evaluated key credit loss drivers, vintage pool runoffs, and DPD delinquency migration',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#00D2FF',
    image: '/projects/credit-risk-p1.png',
    images: [
      {
        title: 'Dashboard Page 1: Auto Loan Securitisation & Portfolio Performance',
        src: '/projects/credit-risk-p1.png',
        desc: 'Comprehensive portfolio overview tracking 500 active loans, ₹546M total loan volume, DPD delinquency buckets (Current to 120+ DPD), cumulative net loss curves across vintages (2021-Q1 to 2022-Q1), India state loan distribution, vehicle segments, and pool run-off trends.',
      },
      {
        title: 'Dashboard Page 2: IFRS 9 Expected Credit Loss (ECL) & Staging Analysis',
        src: '/projects/credit-risk-p2.png',
        desc: 'Regulatory IFRS 9 staging breakdown: Stage 1 ($272.93M exposure), Stage 2 ($27.15M), and Stage 3 ($17.70M). Features an interactive Risk Heatmap cross-tabulating PD vs LGD bands, CIBIL score tier provisions, vehicle collateral exposure, and high-risk state concentration.',
      },
      {
        title: 'Dashboard Page 3: Stress Testing, Cash Flow Waterfall & Sensitivity Analysis',
        src: '/projects/credit-risk-p3.png',
        desc: 'Macroeconomic scenario comparison across Base, Moderate, Severe, and Extreme stress conditions. Dynamic cash-flow waterfall tracking BOP ($6.19bn) to EOP ($6.01bn), recovery efficiency (129.12%), and sensitivity analysis highlighting marginal ECL shocks to +10%/+20% shifts in PD, LGD, and EAD.',
      },
    ],
    spotlightMetrics: [
      { val: '3 Dashboards', lbl: 'Full Suite Pages' },
      { val: 'IFRS 9 ECL', lbl: 'Stage 1, 2 & 3 Risk' },
      { val: '4 Scenarios', lbl: 'Macro Stress Tests' },
    ],
    spotlightArchitecture: [
      'Star-schema relational model with normalized fact and dimension tables',
      'Dynamic DAX measures calculating PD, LGD, EAD and Expected Credit Loss',
      'Vintage delinquency curves & DPD roll-rate bucketing (Current to 120+ DPD)',
      'Cash flow waterfall attribution & macroeconomic scenario sensitivity models',
    ],
  },
  {
    id: 'customer-shopping',
    name: 'Customer Shopping Behavior Analysis',
    category: 'Data Analytics',
    tagline: 'From raw transactions to actionable business insights.',
    summary:
      'Analyzed customer shopping data to uncover purchasing behavior, customer segments, product preferences, and business trends using Python, SQL, and Power BI.',
    description: `This project involved end-to-end analysis of a retail customer dataset — starting from raw data ingestion and cleaning, through SQL-based querying and customer segmentation, to an interactive Power BI dashboard presenting business-ready insights.`,
    technologies: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'SQLAlchemy', 'Power BI'],
    highlights: [
      'Data cleaning and preparation pipeline',
      'SQL-based behavioral analysis',
      'Customer segmentation',
      'Business insights dashboard',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#5CE1FF',
    image: '/projects/customer-shopping.png',
    spotlightMetrics: [
      { val: '1,400+', lbl: 'Transactions' },
      { val: '4 Clusters', lbl: 'Behavior Segments' },
      { val: 'Power BI', lbl: 'Executive Dashboard' },
    ],
    spotlightArchitecture: [
      'PostgreSQL data ingestion with schema constraints & foreign keys',
      'Python (Pandas) automated data cleaning & outlier filtration',
      'Aggregated SQL views calculating repeat customer frequency & LTV',
      'Interactive Power BI dashboard with dynamic slicers & DAX measures',
    ],
  },
  {
    id: 'hr-analytics',
    name: 'HR Analytics & Employee Attrition Dashboard',
    category: 'Data Analytics · Power BI',
    tagline: 'Workforce turnover drivers, compensation thresholds, and retention analytics.',
    summary:
      'Developed an interactive Power BI dashboard to analyze employee attrition patterns, identify key turnover drivers, and generate data-driven insights to support employee retention and HR decision-making.',
    description: `Engineered an end-to-end HR Business Intelligence dashboard in Power BI analyzing workforce attrition across 924 employee records. Evaluated turnover rates across departments, salary slabs, age cohorts, tenure, and job roles. Uncovered that employees in the under-5K salary bracket account for the vast majority of attrition (105 of 127 total exits), with Laboratory Technicians and Research Scientists representing the highest-risk job families.`,
    technologies: ['Microsoft Power BI', 'Power Query', 'DAX', 'HR Analytics', 'Data Modeling', 'Excel', 'GitHub'],
    highlights: [
      'Tracked core HR KPIs across 924 employees: 127 total exits (13.7% Attrition Rate), 37 avg age, and 6.9 avg tenure',
      'Identified critical compensation threshold: employees in the <₹5K salary slab represented 82.6% of total company attrition (105 exits)',
      'Isolated high-turnover job roles: Laboratory Technicians (60 exits) and Research Scientists (44 exits) as primary flight risks',
      'Analyzed demographic attrition patterns highlighting the 28–30 age group and Life Sciences / Medical education backgrounds',
      'Built dynamic multi-dimensional slicers filtering by department (R&D, HR, Sales), gender, and performance ratings',
      'Delivered actionable HR compensation review and retention recommendations to curb talent drain in critical technical roles',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#FF4D6D',
    image: '/projects/hr-analytics-dashboard.png',
  },
  {
    id: 'blinkit-vs-zepto',
    name: 'Blinkit vs Zepto Sales Analysis Dashboard',
    category: 'Data Analytics · Power BI',
    tagline: 'Quick-commerce competitive benchmarking, delivery speed, and payment mix analytics.',
    summary:
      'Developed an interactive Power BI dashboard to compare Blinkit and Zepto across sales performance, delivery efficiency, customer ratings, product categories, and payment preferences to generate actionable business insights.',
    description: `Constructed an end-to-end competitive intelligence dashboard in Microsoft Power BI analyzing 105K+ quick-commerce grocery orders between Blinkit and Zepto. Benchmark metric performance across delivery velocity (15.20 min avg), rating distributions (2.86 avg), city sales rankings across Mumbai, Chennai, Delhi, Bangalore, and payment preferences dominated by UPI (50.85%).`,
    technologies: ['Microsoft Power BI', 'Power Query', 'DAX', 'Data Modeling', 'Data Visualization', 'GitHub'],
    highlights: [
      'Built interactive competitive benchmarking dashboard tracking ₹105K+ sales volume and delivery efficiency',
      'Uncovered platform dynamics: Blinkit led in overall sales volume, while Zepto dominated delivery speed and customer ratings',
      'Mapped peak seasonality: June represented the peak demand month for both platforms, led by Biscuits (Blinkit) and Milk (Zepto)',
      'Analyzed customer payment mix: UPI dominated at 50.85%, followed by Cards (37.32%) and Cash on Delivery (11.82%)',
      'Ranked top city demand markets: Mumbai (₹26K) led, followed by Chennai (₹22K), Delhi (₹21K), and Bangalore (₹20K)',
      'Delivered actionable recommendations on inventory staging, delivery route optimization, and category-targeted promotions',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#A855F7',
    image: '/projects/blinkit-zepto-dashboard.png',
  },
  {
    id: 'netflix-analysis',
    name: 'Netflix Data Analysis Using PostgreSQL',
    category: 'Data Analytics · SQL',
    tagline: 'Content distribution trends, actor deep-dives, and 15 business SQL queries.',
    summary:
      'Analyzed Netflix movies and TV shows data using PostgreSQL to uncover content distribution trends, identify top content-producing countries and actors, and solve real-world business problems through SQL queries.',
    description: `Conducted comprehensive exploratory data analysis on Netflix movies and TV shows dataset using PostgreSQL. Leveraged advanced string functions (STRING_TO_ARRAY, UNNEST, SPLIT_PART), Common Table Expressions (CTEs), window functions, aggregate functions, and CASE WHEN statements to solve 15 business-oriented analytical questions including cast, director, and India-specific catalog analysis.`,
    technologies: ['PostgreSQL', 'SQL', 'CTEs', 'Window Functions', 'String Functions', 'Exploratory Data Analysis', 'GitHub'],
    highlights: [
      'Analyzed global content distribution across movies and TV shows, ratings, release cadence, and genre clusters',
      'Identified most common content ratings and top 5 content-producing countries across the global catalog',
      'Investigated movie durations, TV show seasons, and yearly content trends, including India-specific catalog deep-dives',
      'Applied advanced string functions (STRING_TO_ARRAY, UNNEST, SPLIT_PART) to unpack multi-valued country, genre, and cast arrays',
      'Implemented CTEs, window functions, and CASE WHEN logic to solve 15 structured business analytical questions',
      'Analyzed director and actor contributions (including Rajiv Chilaka and Salman Khan) and frequently featured Indian actors',
      'Applied date functions, filtering, and NULL handling to ensure robust data exploration and actionable insights',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#E50914',
    image: '/projects/netflix-sql.png',
  },
  {
    id: 'spotify-sql',
    name: 'Spotify SQL Data Analysis Project',
    category: 'Data Analytics · SQL',
    tagline: 'Exploratory streaming performance and advanced PostgreSQL window queries.',
    summary:
      'Analyzed Spotify streaming data using PostgreSQL to explore music performance, identify top tracks and artists, compare streaming platforms, and derive insights using advanced SQL queries.',
    description: `Conducted comprehensive data cleaning, exploratory analysis, and 15 business-oriented SQL challenges across easy, medium, and advanced difficulty tiers. Leveraged PostgreSQL CTEs, DENSE_RANK() window functions, conditional aggregations, and platform-cross comparisons between Spotify and YouTube.`,
    technologies: ['PostgreSQL', 'SQL', 'Window Functions', 'CTEs', 'Exploratory Data Analysis', 'GitHub'],
    highlights: [
      'Executed 15 structured analytical queries spanning easy, medium, and advanced difficulty levels',
      'Ranked top 3 most-viewed tracks per artist using DENSE_RANK() window functions',
      'Compared track streaming volume across Spotify and YouTube using conditional CASE aggregation',
      'Tracked tracks exceeding 1B+ streams, artist productivity, and album-level acoustic attributes',
      'Calculated cumulative engagement metrics, energy-to-liveness ratios, and acoustic variations',
      'Performed full schema validation, data type normalization, and outlier data cleansing',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#1DB954',
    image: '/projects/spotify-sql.png',
  },
  {
    id: 'retail-sales-sql',
    name: 'Retail Sales Analysis Using SQL',
    category: 'Data Analytics · SQL',
    tagline: 'Exploratory retail sales trends, customer shift patterns, and PostgreSQL reporting.',
    summary:
      'Analyzed retail transaction data using PostgreSQL to identify sales trends, evaluate customer purchasing behavior, compare product category performance, and generate actionable business insights through SQL queries.',
    description: `Conducted end-to-end relational database analysis on retail transaction records using PostgreSQL. Handled data cleaning and NULL removal, exploratory data analysis across categories, customer segmentation, shift-wise order categorization (Morning, Afternoon, Evening), and solved 10 business-critical analytical questions using CTEs and window ranking functions.`,
    technologies: ['PostgreSQL', 'SQL', 'CTEs', 'Window Functions', 'Date-Time Functions', 'Data Cleaning', 'GitHub'],
    highlights: [
      'Performed thorough data cleaning and NULL value elimination to establish pristine data integrity',
      'Conducted exploratory data analysis across product categories, unique customer counts, and revenue volume',
      'Identified top 5 highest-spending customers and mapped category-wise demographic distribution',
      'Solved 10 core business-oriented queries using Common Table Expressions (CTEs) and window functions',
      'Analyzed monthly sales seasonality and isolated peak sales windows using ranking algorithms',
      'Segmented transactions into Morning, Afternoon, and Evening business shifts to monitor hourly shopping patterns',
      'Developed strong foundation in SQL-based business analysis, data cleaning, and retail sales reporting',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#F59E0B',
    image: '/projects/retail-sales-sql.png',
  },
  {
    id: 'chainshield-ai',
    name: 'ChainShield AI — Web3 & AI Hackathon',
    category: 'AI + Blockchain Security',
    tagline: 'Built at HackIndia 2026: Layered Web3 smart-contract security powered by AI analysis.',
    summary:
      'Developed during HackIndia 2026 (India’s Biggest Web3 & AI Hackathon at MIET Kumaon) by Team Hack. Combines AST rule-based vulnerability scanning with LLM reasoning for Solidity smart contracts.',
    description: `Built and pitched live during HackIndia Spark 10 (Uttarakhand North Region) at MIET Kumaon, Haldwani. ChainShield AI combines deterministic AST rule-based vulnerability detection with AI-assisted contextual explanations for Solidity smart contracts.

The project demonstrates how static analysis and LLM reasoning can work together in a developer security workflow, helping identify reentrancy, access control flaws, and gas inefficiencies with actionable plain-English explanations. Presented to technical judges including GCS Technologies leadership and HackIndia organizers.`,
    technologies: ['Solidity', 'Web3', 'AI / LLM Reasoning', 'React', 'TypeScript', 'Docker'],
    highlights: [
      'Pitched live to industry jury and founders at HackIndia Spark 10 (MIET Kumaon)',
      'Built by Team Hack: Certificate ID HI-2026-E0034-U012095-UZG9',
      'AST-based static vulnerability scanning for common smart-contract flaws',
      'AI-assisted security explanation layer for developer remediation',
      'Full interactive client deployed live on Vercel',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: 'https://chainshieldai-client.vercel.app/',
    presentation: '',
    featured: true,
    color: '#8B7CFF',
    image: '/hackathon/hackindia-pitch.png',
    images: [
      {
        src: '/hackathon/hackindia-pitch.png',
        title: 'Live Jury Pitch & Defense — HackIndia 2026',
        desc: 'Abhishek Khati and Team Hack presenting ChainShield AI architecture to industry judges and organizers at MIET Kumaon.',
      },
      {
        src: '/hackathon/hackindia-dev.png',
        title: 'Sprint Development & Live Prototype Testing',
        desc: 'Testing smart-contract security scanner and LLM explanation pipeline live on-stage during the HackIndia Spark-10 sprint.',
      },
      {
        src: '/certificates/hackindia-certificate.png',
        title: 'Official Certificate of Participation',
        desc: 'Awarded to Abhishek Khati (Team Hack) for HackIndia Spark 10 – Uttarakhand (North Region). Certificate ID: HI-2026-E0034-U012095-UZG9.',
      },
      {
        src: '/projects/chainshield-ai.png',
        title: 'ChainShield AI — Application Architecture',
        desc: 'Deployed interactive security review client with real-time Solidity vulnerability scanning and AI risk annotations.',
      },
    ],
    note: 'HackIndia 2026 competitive prototype — demonstrates rapid product engineering under 36-hour sprint constraints.',
  },
  {
    id: 'convexity-agent',
    name: 'Convexity Sensitivity AI Agent',
    category: 'Financial Analytics',
    tagline: 'Fixed-income portfolio risk through AI-assisted scenario analysis.',
    summary:
      'An analytical project exploring fixed-income portfolio sensitivity, yield-curve changes, and Monte Carlo risk scenarios with an interactive Streamlit dashboard.',
    description: `This project models the sensitivity of fixed-income portfolios to yield-curve shifts. It uses Python for calculations, LangChain for AI-assisted analysis commentary, and Streamlit to present an interactive risk exploration interface.`,
    technologies: ['Python', 'Pandas', 'LangChain', 'Streamlit', 'Excel'],
    highlights: [
      'Portfolio risk analysis',
      'Yield-curve scenario exploration',
      'Monte Carlo simulations',
      'Interactive analytical dashboard',
    ],
    github: 'EDITABLE_GITHUB_URL',
    demo: 'EDITABLE_DEMO_URL',
    presentation: '',
    featured: true,
    color: '#4FFFA4',
  },
  {
    id: 'forex-signal',
    name: 'Forex Trading Signal AI Agent',
    category: 'ML · Financial Analytics',
    tagline: 'Signal classification experiments on currency-pair data.',
    summary:
      'An experimental project combining technical indicators, machine-learning classifiers, and risk-oriented visualizations for forex signal analysis.',
    description: `This experimental project applies technical indicator computation, feature engineering, and machine-learning classifiers (Random Forest, XGBoost) to currency-pair price data. Results are visualized in Power BI for strategy exploration.`,
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'XGBoost', 'Power BI'],
    highlights: [
      'Technical indicator computation',
      'Signal classification experiments',
      'Currency-pair analysis',
      'Risk and strategy visualizations',
    ],
    github: 'EDITABLE_GITHUB_URL',
    demo: 'EDITABLE_DEMO_URL',
    presentation: '',
    featured: false,
    color: '#FFB86C',
    note: 'Experimental research project. Does not claim profitable strategies, predictive accuracy, or live trading performance.',
  },
  {
    id: 'silver-analytics',
    name: 'Silver Market Analytics Dashboard',
    category: 'Market Data Analytics',
    tagline: 'Trend analysis, volatility metrics, and forecast comparison for silver.',
    summary:
      'An analytical dashboard exploring silver-price trends, volatility, technical indicators, forecast comparisons, and macroeconomic context.',
    description: `This project combines Python-based data processing, SQL storage, machine-learning price trend models, and a rich Power BI dashboard to analyze the silver commodities market — covering price trends, rolling volatility, drawdown metrics, and macroeconomic drivers.`,
    technologies: ['Python', 'SQL', 'Power BI', 'DAX', 'HTML', 'CSS', 'JavaScript', 'Machine Learning'],
    highlights: [
      'Price trend analysis',
      'Rolling volatility and drawdown metrics',
      'Forecast model comparison',
      'Market-driver exploration',
    ],
    github: 'EDITABLE_GITHUB_URL',
    demo: 'EDITABLE_DEMO_URL',
    presentation: '',
    featured: false,
    color: '#C0C0C0',
    note: 'Analytics project. Results are for analytical exploration, not financial advice.',
  },
  {
    id: 'smart-crop-advisory',
    name: 'Smart Crop Advisory System',
    category: 'AgriTech · Data & ML Advisory',
    tagline: 'Precision crop recommendations and soil nutrient analytics developed during MIET Kumaon Hackathon.',
    summary:
      'Engineered an intelligent agricultural decision-support tool analyzing soil composition (N-P-K), seasonal rainfall, temperature, and soil pH to deliver crop recommendations and yield optimization advice.',
    description: `Developed under competitive sprint conditions at MIET Kumaon, this AgriTech advisory platform evaluates multidimensional agronomic datasets.

By analyzing soil chemistry metrics alongside localized weather variables, the model generates data-backed crop choices and actionable fertilizer advisory to assist local farmers in maximizing yield and reducing crop loss.`,
    technologies: ['Python', 'Machine Learning', 'Data Modeling', 'Soil Analytics', 'Streamlit', 'AgriTech'],
    highlights: [
      'Developed during inter-departmental technical hackathon at MIET Kumaon',
      'Engineered multi-variable feature inputs: Nitrogen, Phosphorus, Potassium, pH, and precipitation',
      'Built algorithmic crop recommendation pipeline for regional farming profiles',
      'Designed user-friendly advisory summary cards with optimal planting windows',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#10B981',
    note: 'Hackathon AgriTech prototype focused on data-driven agricultural decision making.',
  },
  {
    id: 'sql-learning-platform',
    name: 'Interactive SQL Learning Platform',
    category: 'EdTech · Relational Databases',
    tagline: 'Browser-based SQL execution sandbox built during Graphic Era Hill University Hackathon.',
    summary:
      'Designed and pitched at Graphic Era Hill University (Haldwani) Hackathon. An interactive educational platform featuring real-time SQL query execution, guided challenge tracks, and relational schema exploration.',
    description: `Built during a competitive hackathon at Graphic Era Hill University (Haldwani Campus), this educational database platform simplifies SQL learning for undergraduate computer science students.

The platform provides live in-browser query execution, dynamic syntax feedback, step-by-step problem tracks (from basic SELECTs to advanced window functions and multi-table JOINs), and an interactive relational schema viewer.`,
    technologies: ['PostgreSQL / SQLite', 'SQL Engine', 'React', 'TypeScript', 'Node.js', 'Database Architecture'],
    highlights: [
      'Developed and pitched live at Graphic Era Hill University (GEHU, Haldwani) Hackathon',
      'Interactive in-browser SQL query execution sandbox with immediate tabular output',
      'Progressive difficulty tracks covering Joins, Group By, Subqueries, and Window Functions',
      'Schema visualization tool explaining primary-foreign key relationships visually',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#6366F1',
    note: 'Hackathon EdTech project demonstrating database pedagogy and browser execution sandboxing.',
  },
]

export const journey = [
  {
    id: 1,
    title: 'Data Foundations',
    icon: '🗄️',
    details:
      'Built practical knowledge of SQL, relational databases, spreadsheets, and data-cleaning workflows.',
    date: '', // Add date once confirmed
  },
  {
    id: 2,
    title: 'Analytics & Visualization',
    icon: '📊',
    details:
      'Developed analytical workflows and business dashboards using Python (Pandas, Matplotlib) and Power BI.',
    date: '',
  },
  {
    id: 3,
    title: 'AI & Machine Learning',
    icon: '🤖',
    details:
      'Experimented with predictive models, financial analytics, and AI-assisted applications using Scikit-learn, XGBoost, and LangChain.',
    date: '',
  },
  {
    id: 4,
    title: 'HackIndia 2026 (Web3 & AI)',
    icon: '🚀',
    details:
      'Competed at India’s Biggest Web3 & AI Hackathon (HackIndia Spark 10, MIET Kumaon) with Team Hack, designing ChainShield AI and pitching live to industry judges.',
    date: 'Sept 2026',
  },
  {
    id: 5,
    title: "What's Next",
    icon: '🌐',
    details:
      'Deepening foundations in data science, machine learning, and intelligent applications. Seeking internships and collaborative projects.',
    date: '',
    isNext: true,
  },
]

export const certifications: {
  title: string
  issuer: string
  date: string
  url: string
  image: string
}[] = [
  // Add verified certifications here once confirmed.
  // Example format:
  // {
  //   title: 'Google Data Analytics Certificate',
  //   issuer: 'Google / Coursera',
  //   date: 'Month YYYY',
  //   url: 'https://credential-verification-url',
  //   image: '',
  // },
]

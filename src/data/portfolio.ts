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
  about: `I am a BCA final-year student at MIET Kumaon (Kumaun University) developing practical solutions in data analytics and intelligent software systems. Driven by an intense curiosity to grow in tech, I love deep-dive problem-solving—from cracking complex relational database challenges like the famous SQL Murder Mystery to engineering end-to-end predictive pipelines with Python, Streamlit, and modern ML. My approach is rooted in writing efficient, production-grade SQL (CTEs, Window Functions, Multi-table Joins) and applying statistical modeling to transform raw numbers into actionable business intelligence.`,
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
  resumeUrl: '/Abhishek_resume_Ak47.pdf',
}

export const skills = {
  'Data Analysis': [
    { name: 'SQL', level: 'working' },
    { name: 'PostgreSQL', level: 'working' },
    { name: 'MySQL', level: 'working' },
    { name: 'SQLite', level: 'working' },
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
    { name: 'SQLAlchemy', level: 'working' },
    { name: 'Plotly', level: 'working' },
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
  tabLabel?: string
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
        tabLabel: 'Portfolio Overview',
        title: 'Dashboard Page 1: Auto Loan Securitisation & Portfolio Performance',
        src: '/projects/credit-risk-p1.png',
        desc: 'Comprehensive portfolio overview tracking 500 active loans, ₹546M total loan volume, DPD delinquency buckets (Current to 120+ DPD), cumulative net loss curves across vintages (2021-Q1 to 2022-Q1), India state loan distribution, vehicle segments, and pool run-off trends.',
      },
      {
        tabLabel: 'IFRS 9 ECL Staging',
        title: 'Dashboard Page 2: IFRS 9 Expected Credit Loss (ECL) & Staging Analysis',
        src: '/projects/credit-risk-p2.png',
        desc: 'Regulatory IFRS 9 staging breakdown: Stage 1 ($272.93M exposure), Stage 2 ($27.15M), and Stage 3 ($17.70M). Features an interactive Risk Heatmap cross-tabulating PD vs LGD bands, CIBIL score tier provisions, vehicle collateral exposure, and high-risk state concentration.',
      },
      {
        tabLabel: 'Macro Stress Tests',
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
    id: 'silver-analytics',
    name: 'Silver Price Forecasting & Commodity Market Intelligence Suite',
    category: 'Commodities Analytics · Power BI · ML',
    tagline: 'Star-schema data architecture, 4-tier Power BI dashboard suite, and ensemble ML forecasting.',
    summary:
      'Developed an enterprise-grade commodity intelligence and forecasting suite in Power BI and Python tracking 25+ years of silver market dynamics, quantitative volatility, multi-model ML forecasts (0.53 RMSE), and macroeconomic demand fundamentals across Solar PV and EVs.',
    description: `Engineered an end-to-end commodity market analytics platform and forecasting suite built on a production star-schema data model in Microsoft Power BI and Python.

Centralized DimDate integrates daily OHLCV price histories (2000–2025), COMEX & LBMA physical supply/demand fundamentals, futures basis term structures, and weekly CFTC Commitments of Traders (COT) institutional flows.

The suite features four specialized analytical pages:
1. Silver Price Analytics: Monitors RSI 14 momentum (59.07), intraday range spikes ($1.01K sum), VWAP ($118.90K), 487M trading volume, and SMA20/SMA60 trendlines.
2. Risk Analytics: Measures 20-day rolling volatility (0.26), portfolio Sharpe ratio (0.22), maximum drawdown (-0.76), volatility volume mapping, and drawdown waterfall attributions.
3. Model Forecast Comparison: Benchmarks Baseline SMA, Random Forest, and XGBoost against an Ensemble model (XGB + RF + SMA) achieving lowest RMSE (0.53), lowest MAE (0.42), lowest MAPE (1.55%), and 52.47% directional accuracy.
4. Macro & Sentiment Intelligence: Correlates Gold vs Silver ratios, news sentiment scores (1.19), annual supply/demand balances, exponential industrial green-energy demand from Solar Panels (~120 MOz) and Electric Vehicles (~30 MOz), and CFTC commercial net hedging.`,
    technologies: [
      'Microsoft Power BI',
      'DAX',
      'Power Query',
      'Python',
      'XGBoost',
      'Random Forest',
      'SQL',
      'Star-Schema Modeling',
      'Financial Time Series',
    ],
    highlights: [
      'Architected Star-Schema Model: Central DimDate dimension connected via one-to-many relationships across 6 fact and domain tables',
      '4-Page Power BI Suite: Dedicated dashboards for Price Analytics, Risk Analytics, Forecast Comparison, and Macro & Sentiment Intelligence',
      'Ensemble ML Forecasting: Developed multi-model framework (XGBoost + RF + SMA) delivering 0.53 RMSE, 0.42 MAE, and 52.47% directional accuracy',
      'Quantitative Risk Framework: Evaluated 20D rolling volatility (0.26), Sharpe ratio (0.22), maximum drawdown (-0.76), and waterfall loss attribution',
      'Technical Market Signals: Visualized RSI 14 (59.07 gauge), Intraday Ranges ($1.01K sum), VWAP ($118.90K), and SMA20/SMA60 crossovers',
      'Macro & Industrial Fundamentals: Tracked Gold/Silver ratios, ETF holdings, and exponential clean-energy demand from Solar PV (~120 MOz) and EVs (~30 MOz)',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#94A3B8',
    image: '/projects/silver-price-analytics.png',
    images: [
      {
        tabLabel: 'Silver Price Analytics',
        title: 'Dashboard Page 1: Silver Price Analytics & Technical Indicators',
        src: '/projects/silver-price-analytics.png',
        desc: 'Interactive price monitoring dashboard featuring Sum of VWAP (118.90K), 487M volume, Latest Close ($36.97), RSI 14 momentum gauge (59.07), SMA20/SMA60 trendlines (2000–2025), intraday range spikes, and granular historical price summary table.',
      },
      {
        tabLabel: 'Risk Analytics',
        title: 'Dashboard Page 2: Risk Analytics & Volatility Profiles',
        src: '/projects/silver-risk-analytics.png',
        desc: 'Institutional risk dashboard measuring 20-day rolling volatility (0.26), portfolio Sharpe ratio (0.22), maximum drawdown (-0.76), risk-return scatter plot, historical volatility mapping against trading volume, return percentage distribution, and cumulative drawdown waterfall.',
      },
      {
        tabLabel: 'Forecast Comparison',
        title: 'Dashboard Page 3: Model Forecast Comparison & Evaluation',
        src: '/projects/silver-forecast-comparison.png',
        desc: 'Machine learning benchmarking suite evaluating Ensemble (XGBoost + Random Forest + SMA) vs standalone models. Showcases lowest RMSE (0.53), lowest MAE (0.42), lowest MAPE (1.55%), highest directional accuracy (52.47%), actual vs forecast time-series trajectories, and full model scorecards.',
      },
      {
        tabLabel: 'Macro and Sentiment',
        title: 'Dashboard Page 4: Macroeconomic Drivers & Market Sentiment',
        src: '/projects/silver-macro-sentiment.png',
        desc: 'Cross-asset macro intelligence tracking Gold vs Silver price dynamics, News Sentiment gauge (1.19), physical ETF holdings, annual supply vs demand balance, exponential industrial demand from Solar PV (~120 MOz) and EVs (~30 MOz), and weekly CFTC Commitments of Traders (COT) positioning.',
      },
      {
        tabLabel: 'Data Architecture',
        title: 'Data Architecture: Power BI Relational Star-Schema Model',
        src: '/projects/silver-forecast-model.png',
        desc: 'Production-grade dimensional data model featuring a centralized DimDate dimension connected via one-to-many relationships across 6 fact and domain tables: Daily OHLCV, Macroeconomic indicators, Supply/Demand balances, Futures contracts, Weekly sentiment, Forecast comparisons, and Model performance scores.',
      },
    ],
    spotlightMetrics: [
      { val: '4 Dashboards', lbl: 'Full Suite Pages' },
      { val: '0.53 RMSE', lbl: 'Ensemble ML Model' },
      { val: '7 Tables', lbl: 'Star-Schema Architecture' },
    ],
    spotlightArchitecture: [
      'Star-schema relational model with DimDate filtering 6 normalized fact tables',
      'Multi-model ML competition comparing XGBoost, Random Forest, and SMA Ensemble',
      'Dynamic DAX measures calculating 20D rolling volatility, Sharpe Ratio, and Drawdowns',
      'Macro correlation analysis tracking DXY, Gold/Silver ratio, Fed Funds, and CFTC COT flows',
    ],
  },
  {
    id: 'forex-signal',
    name: 'Forex Trading Signal AI Agent & Multi-Tier Analytics Suite',
    category: 'Quantitative Finance · ML · Power BI',
    tagline: 'Multi-currency signal generation, technical indicator pipeline, ML classifiers, and institutional risk management.',
    summary:
      'Developed an end-to-end algorithmic Forex intelligence platform and 5-page Power BI dashboard suite tracking 2,000+ signals across 5 currency pairs, technical trend indicators (Ichimoku, Bollinger, MACD), Random Forest & XGBoost ML classifiers (0.92 F1), and institutional risk metrics (VaR 95%, CVaR, Kelly sizing).',
    description: `Engineered an advanced algorithmic Forex trading intelligence suite combining automated technical indicator calculation, supervised machine-learning signal classification, and an institutional quantitative risk management framework.

The platform processes high-frequency price feeds across 5 major currency pairs (AUDUSD, EURUSD, GBPUSD, USDINR, USDJPY) to generate, validate, and attribute trading signals.

The suite features 5 comprehensive Power BI dashboard pages:
1. Signal Overview: High-level executive cockpit monitoring 2K total signals, 150 completed trades, latest close ($165.04), average RSI (51.93), and average ATR (0.43). Features a signal distribution donut breakdown (553 Strong Buy [27.6%], 519 Buy [26.2%], 397 Strong Sell [20.0%], 352 Sell [17.8%]), historical candlestick trends, real-time signal classification tables, and multi-currency price comparison trajectories.
2. Trading Performance & Technical Indicators: Deep dive into technical indicator divergence and momentum filters including Dual SMA trends (SMA_Long vs SMA_Short), Bollinger Bands envelope (%B band width), Ichimoku Cloud (Kijun, Tenkan, Chikou, Senkou Span), MACD histogram momentum, and 14-period RSI smoothing.
3. Quantitative Risk Management: Rigorous institutional risk framework quantifying Value at Risk (VaR 95% at -$492.39), Conditional VaR (CVaR 95% Expected Shortfall at -$492.39), maximum drawdown (-0.04 / -4%), portfolio Sharpe Ratio (-14.53), Calmar Ratio (-1.18K), and Sortino downside deviation. Incorporates fractional Kelly Criterion and Half-Kelly position sizing against win rates and payoff ratios.
4. Currency Pair Analysis: Granular cross-pair comparative analytics evaluating average ATR volatility (USDJPY ~700 vs EURUSD/AUDUSD), volume profiles (USDJPY 2.2M, GBPUSD 2.1M, USDINR 2.1M), cross-pair price correlations, and cumulative PnL attribution.
5. ML / RL Model Performance: Supervised learning benchmark comparing Random Forest and XGBoost classifiers. Evaluates precision (1.05), recall (0.85), accuracy (1.01), and F1-score (0.92). Features Gini feature importance ranking identifying 5-day rolling volatility (vol_5d, ~0.14) and MACD Histogram (~0.12) as primary predictive drivers over 10-day returns, Bollinger %B, and RSI 14.`,
    technologies: [
      'Python',
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Random Forest',
      'XGBoost',
      'Microsoft Power BI',
      'DAX',
      'Power Query',
      'Financial Risk Modeling',
    ],
    highlights: [
      '5-Page Power BI Suite: Dedicated dashboards for Signal Overview, Trading Performance, Risk Management, Currency Pair Analysis, and ML Performance',
      '2,000+ Signals Generated: Categorized into Strong Buy (27.6%), Buy (26.2%), Strong Sell (20.0%), and Sell (17.8%) across 5 currency pairs',
      'Institutional Risk Modeling: Quantified VaR 95%, Conditional VaR (CVaR), Max Drawdown (-4%), Sharpe, Calmar, and Sortino ratios',
      'Technical Indicator Engine: Integrated Bollinger Bands, Ichimoku Cloud, MACD Histograms, Dual SMAs, and 14-period RSI momentum',
      'Machine Learning Benchmarking: Trained Random Forest and XGBoost models achieving 0.92 F1-score with Gini feature importance attribution',
      'Optimal Position Sizing: Modeled Kelly Criterion & Half-Kelly sizing formulas against historical win rates and payoff ratios',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#FF6B6B',
    image: '/projects/forex-signal-overview.png',
    images: [
      {
        tabLabel: 'Signal Overview',
        title: 'Dashboard Page 1: Forex Signal Overview & Executive Cockpit',
        src: '/projects/forex-signal-overview.png',
        desc: 'Executive trading cockpit tracking 2,000 total signals, 5 currency pairs, 150 executed trades, latest close ($165.04), average RSI (51.93), signal distribution breakdown (Strong Buy, Buy, Strong Sell, Sell), candlestick trend, and multi-pair historical price trajectories.',
      },
      {
        tabLabel: 'Trading Performance',
        title: 'Dashboard Page 2: Technical Indicators & Trading Performance',
        src: '/projects/forex-trading-performance.png',
        desc: 'Comprehensive technical indicator monitor displaying moving average trends (SMA_Long vs SMA_Short), Bollinger Bands envelope (%B), Ichimoku Cloud (Kijun, Tenkan, Chikou), MACD histogram momentum, and RSI 14 trends across historical dates.',
      },
      {
        tabLabel: 'Risk Management',
        title: 'Dashboard Page 3: Quantitative Risk Management & Value at Risk',
        src: '/projects/forex-risk-management.png',
        desc: 'Institutional risk dashboard calculating Value at Risk (VaR 95% at -$492.39), Conditional VaR (CVaR / Expected Shortfall), maximum drawdown (-0.04), risk ratios (Sharpe -14.53, Calmar, Sortino), drawdown USD/percentage analysis, and Kelly Criterion position sizing.',
      },
      {
        tabLabel: 'Currency Pair Analysis',
        title: 'Dashboard Page 4: Cross-Currency Pair Analysis & Volatility',
        src: '/projects/forex-currency-analysis.png',
        desc: 'Cross-pair comparative analytics evaluating average ATR volatility by pair (USDJPY ~700, USDINR ~150, GBPUSD, AUDUSD, EURUSD), trading volume comparison (2M+ volume each), price correlations, and cumulative PnL attribution.',
      },
      {
        tabLabel: 'ML Model Performance',
        title: 'Dashboard Page 5: Machine Learning Signal Model Performance',
        src: '/projects/forex-ml-performance.png',
        desc: 'Supervised machine learning evaluation benchmarking Random Forest and XGBoost classifiers. Displays precision (1.05), recall (0.85), F1-score (0.92), model comparison bar charts, and feature importance rankings with 5-day volatility (vol_5d) and MACD_Hist as top predictive drivers.',
      },
    ],
    spotlightMetrics: [
      { val: '5 Dashboards', lbl: 'Full Suite Pages' },
      { val: '2,000+', lbl: 'Generated Signals' },
      { val: '0.92 F1', lbl: 'ML Model Score' },
    ],
    spotlightArchitecture: [
      'Multi-currency data pipeline tracking 5 major FX pairs (AUDUSD, EURUSD, GBPUSD, USDINR, USDJPY)',
      'Technical indicator engine computing Bollinger Bands, Ichimoku Cloud, MACD, and 14D RSI',
      'Supervised ML classification pipeline (Random Forest & XGBoost) with 0.92 F1-score',
      'Quantitative risk framework tracking VaR 95%, CVaR, Drawdown, and Kelly position sizing',
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
    name: 'BondIQ — Convexity Sensitivity AI Agent',
    category: 'Fixed Income · Quant Risk · Streamlit & AI',
    tagline: 'AI-powered fixed income risk analytics, yield-curve shift scenarios, and predictive portfolio insights.',
    summary:
      'Engineered an institutional fixed-income risk analytics platform and hybrid AI agent in Python 3.11 and Streamlit evaluating a ₹32.06M bond portfolio across modified duration (4.203), DV01 (₹12,839.10), non-linear convexity scenarios (-200 to +200 bps), multi-currency risk, and a Grok LLM natural-language intelligence assistant.',
    description: `BondIQ is an enterprise-grade quantitative fixed-income risk intelligence platform and AI agent engineered with Python 3.11, Streamlit, and Plotly, powered by a relational SQLite database via SQLAlchemy ORM.

Designed to assist fixed-income portfolio managers and risk officers, BondIQ computes real-time bond sensitivities, yield curve shock simulations, sector spread analytics, and predictive risk scoring across a ₹32.06M institutional bond portfolio.

The platform includes five specialized analytical views:
1. Home Dashboard & Executive Summary: Tracks portfolio market value (₹32,059,346), Modified Duration (4.203), Effective Duration (4.204), and portfolio DV01 (₹12,839.10 per basis point shift).
2. Portfolio Analysis & Convexity Sensitivity: Models asymmetrical price movements under parallel yield curve shocks from -200 bps (+₹2.98M / +9.29%) down to +200 bps (-₹2.41M / -7.53%), capturing the protective positive convexity curvature.
3. Risk Analysis & Exposure Attribution: Visualizes multi-currency allocations (INR 78%, USD 10.7%, GBP 4.66%, EUR 4.28%, AUD 2.38%, JPY 0.01%) and credit risk rating distributions across Energy, Infrastructure, Steel, and NBFC sectors with Option-Adjusted Spreads (94 to 207 bps).
4. AI Assistant (Hybrid Grok LLM + Rule-Based): Conversational intelligence layer combining Grok AI with structured SQLite database querying via SQLAlchemy. Allows natural-language prompts like "What is portfolio duration?", "Which sector has highest risk?", and "Analyze convexity sensitivity" with automatic rule-based fallbacks.
5. Prediction Engine & Risk Scoring: Calculates predictive portfolio outcomes for ±50 bps shocks and synthesizes multi-factor portfolio health into an intuitive 42/100 risk score.`,
    technologies: [
      'Python 3.11',
      'Streamlit',
      'Plotly',
      'Pandas',
      'NumPy',
      'SQLite',
      'SQLAlchemy',
      'Grok AI / LLM',
      'Financial Risk Modeling',
    ],
    highlights: [
      'Interactive Streamlit Interface: Built with Streamlit & Plotly featuring dark-mode quantitative dashboards and real-time scenario modeling',
      'Convexity & DV01 Engine: Computes Modified Duration (4.203), Effective Duration (4.204), Total DV01 (₹12,839.10), and non-linear yield curve shifts (-200 to +200 bps)',
      'Hybrid AI Assistant: Integrated Grok LLM with rule-based fallback and SQLAlchemy ORM database queries for natural language portfolio Q&A',
      'Credit & Spread Profiling: Evaluated Option-Adjusted Spreads (OAS 94–207 bps) across AAA/AA/A corporate bonds in Energy, Steel, Infrastructure, and NBFC sectors',
      'Multi-Currency Exposure: Decomposed FX concentration across INR (78%), USD (10.7%), GBP, EUR, AUD, and JPY',
      'Predictive Risk Scoring: Synthesized duration, spread volatility, and scenario loss limits into a standardized 42/100 risk score',
    ],
    github: 'https://github.com/Abhishek-khati',
    demo: '',
    presentation: '',
    featured: true,
    color: '#00E5FF',
    image: '/projects/bondiq-home-dashboard.png',
    images: [
      {
        tabLabel: 'Home Dashboard',
        title: 'BondIQ Executive Summary: Portfolio Value & Key Durations',
        src: '/projects/bondiq-home-dashboard.png',
        desc: 'Executive summary cockpit displaying Total Market Value (₹32,059,346), Modified Duration (4.203), Effective Duration (4.204), and Total DV01 (₹12,839.10) for institutional fixed-income risk monitoring.',
      },
      {
        tabLabel: 'Portfolio Analysis',
        title: 'Convexity Sensitivity Analysis: Yield Curve Shock Scenarios',
        src: '/projects/bondiq-convexity-analysis.png',
        desc: 'Interactive scenario modeling simulating rate shifts from -200 bps (+₹2,977,505 / +9.29%) to +200 bps (-₹2,412,476 / -7.53%), highlighting positive convexity gains under easing monetary policy.',
      },
      {
        tabLabel: 'Risk Analysis',
        title: 'Risk Analysis: Currency Allocations & Sector Spread Spreads',
        src: '/projects/bondiq-risk-analysis.png',
        desc: 'Multidimensional risk decomposition displaying global currency exposure (INR 78%, USD 10.7%, GBP, EUR, AUD, JPY) alongside sector credit ratings and Option-Adjusted Spreads (OAS) across Energy, Infra, Steel, and NBFC issuances.',
      },
      {
        tabLabel: 'AI Assistant',
        title: 'Hybrid Grok LLM + Rule-Based Portfolio Intelligence Assistant',
        src: '/projects/bondiq-ai-assistant.png',
        desc: 'Conversational risk analyst powered by Grok AI and SQLAlchemy SQLite database intelligence. Answers complex queries on portfolio duration, highest-risk sectors, and scenario sensitivities with instant fallback reliability.',
      },
      {
        tabLabel: 'Predictions',
        title: 'Predictive Portfolio Risk Scoring & ±50 bps Projections',
        src: '/projects/bondiq-portfolio-predictions.png',
        desc: 'Predictive analytics module projecting rate shocks (+50 bps: -₹656,090 / -2.05%, -50 bps: +₹691,405 / +2.16%) with an aggregate Portfolio Risk Score of 42/100.',
      },
    ],
    spotlightMetrics: [
      { val: '₹32.06M', lbl: 'Portfolio Value' },
      { val: '4.203', lbl: 'Modified Duration' },
      { val: 'Grok LLM', lbl: 'Hybrid AI Assistant' },
    ],
    spotlightArchitecture: [
      'Python 3.11 & Streamlit front-end with interactive Plotly sensitivity charts',
      'SQLAlchemy ORM data layer managing SQLite fixed-income database entities',
      'Convexity & DV01 risk engine calculating non-linear parallel yield curve shifts',
      'Hybrid Grok LLM integration with rule-based fallback for conversational risk analysis',
    ],
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
    featured: false,
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
    featured: false,
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

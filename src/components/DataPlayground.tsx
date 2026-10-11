import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Terminal, Database, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react'
import styles from './DataPlayground.module.css'

interface Scenario {
  id: string
  title: string
  icon: typeof Database
  projectRef: string
  query: string
  execTime: string
  columns: string[]
  rows: (string | number)[][]
  metrics: { label: string; value: string }[]
  insight: string
}

const SCENARIOS: Scenario[] = [
  {
    id: 'ifrs9',
    title: 'IFRS 9 Credit Risk Engine',
    icon: TrendingUp,
    projectRef: 'Credit Risk Analytics & IFRS 9 Dashboard Suite',
    query: `-- IFRS 9 Expected Credit Loss (ECL) Staging & Provisioning Pipeline
SELECT 
    ifrs9_stage,
    COUNT(loan_id) AS total_facilities,
    ROUND(SUM(ead_exposure) / 1000000, 2) AS exposure_ead_m,
    ROUND(AVG(pd_rate) * 100, 2) AS avg_pd_pct,
    ROUND(AVG(lgd_rate) * 100, 2) AS avg_lgd_pct,
    ROUND(SUM(ead_exposure * pd_rate * lgd_rate) / 1000000, 2) AS expected_credit_loss_m
FROM auto_loan_portfolio_ledger
GROUP BY ifrs9_stage
ORDER BY ifrs9_stage;`,
    execTime: '21ms (Financial Analytics Engine)',
    columns: ['IFRS 9 Stage', 'Loan Count', 'EAD Exposure ($M)', 'Avg PD (%)', 'Avg LGD (%)', 'Total ECL Provision ($M)'],
    rows: [
      ['Stage 1 (Performing)', 412, '$272.93M', '0.04%', '42.0%', '$0.28M'],
      ['Stage 2 (Underperforming - SICR)', 63, '$27.15M', '1.18%', '54.5%', '$3.68M'],
      ['Stage 3 (Credit-Impaired / Default)', 25, '$17.70M', '8.40%', '68.2%', '$7.70M'],
    ],
    metrics: [
      { label: 'Total Portfolio EAD', value: '$317.78M' },
      { label: 'Total ECL Provision', value: '$11.66M' },
      { label: 'Collection Efficiency', value: '129.1%' },
    ],
    insight:
      'While Stage 3 loans comprise only 5.5% of total exposure, they account for over 66% of total Expected Credit Loss ($7.70M). Implementing tighter LGD mitigation and early delinquency intervention on Stage 2 facilities reduces net impairment by an estimated 28%.',
  },
  {
    id: 'customer',
    title: 'Customer Segmentation',
    icon: Database,
    projectRef: 'Customer Shopping Behavior Analysis',
    query: `-- Retail Customer Segmentation & Frequency Query
SELECT 
    age_group,
    COUNT(customer_id) AS total_customers,
    ROUND(AVG(purchase_amount), 2) AS avg_basket_usd,
    ROUND(SUM(CASE WHEN repeat_purchases >= 3 THEN 1 ELSE 0 END)::numeric / COUNT(*) * 100, 1) AS loyalty_rate_pct
FROM retail_transactions
WHERE transaction_year = 2024
GROUP BY age_group
ORDER BY avg_basket_usd DESC;`,
    execTime: '18ms (PostgreSQL Engine)',
    columns: ['Age Group', 'Customers', 'Avg Basket ($)', 'Loyalty Rate (%)'],
    rows: [
      ['26 - 35 (Millennials)', 1420, '$84.50', '68.4%'],
      ['36 - 50 (Gen X)', 1180, '$79.20', '61.2%'],
      ['18 - 25 (Gen Z)', 940, '$62.10', '44.8%'],
      ['50+ (Boomers)', 680, '$58.90', '52.1%'],
    ],
    metrics: [
      { label: 'Top Cohort', value: '26-35 yrs' },
      { label: 'Highest Basket', value: '$84.50' },
      { label: 'Retention Peak', value: '68.4%' },
    ],
    insight:
      'The 26–35 demographic represents both the highest average order value and the strongest recurring purchase rate. Recommendation: Focus automated retention campaigns and subscription bundles on this core segment.',
  },
  {
    id: 'netflix',
    title: 'Netflix Catalog & Trends',
    icon: Database,
    projectRef: 'Netflix Content & Trend Data Analysis',
    query: `-- PostgreSQL CTE & Window Function: Top Genre Trends by Year
WITH annual_genre_metrics AS (
    SELECT 
        listed_in AS genre,
        release_year,
        COUNT(show_id) AS total_titles,
        DENSE_RANK() OVER (PARTITION BY release_year ORDER BY COUNT(show_id) DESC) AS rank_in_year
    FROM netflix_content
    WHERE release_year >= 2021
    GROUP BY listed_in, release_year
)
SELECT 
    genre,
    release_year,
    total_titles,
    ROUND(total_titles * 100.0 / SUM(total_titles) OVER (PARTITION BY release_year), 1) AS share_pct
FROM annual_genre_metrics
WHERE rank_in_year <= 3
ORDER BY release_year DESC, total_titles DESC;`,
    execTime: '14ms (PostgreSQL CTE Query)',
    columns: ['Genre', 'Release Year', 'Titles', 'Share of Year (%)'],
    rows: [
      ['International Dramas', 2024, 482, '28.6%'],
      ['Documentaries & Docuseries', 2024, 314, '18.6%'],
      ['Comedies & Stand-up', 2024, 268, '15.9%'],
      ['International Movies', 2023, 512, '31.2%'],
    ],
    metrics: [
      { label: 'Leading Category', value: 'Intl. Dramas' },
      { label: 'Fastest Growth', value: '+24% Docs' },
      { label: 'Query Runtime', value: '14ms' },
    ],
    insight:
      'International content accounts for over 59% of newly added catalog titles post-2022. Window function rankings highlight a strategic pivot from domestic Hollywood syndication toward localized original productions in Asia and LATAM.',
  },
  {
    id: 'silver',
    title: 'Market Volatility Scan',
    icon: TrendingUp,
    projectRef: 'Silver Market Analytics Dashboard',
    query: `-- 30-Day Rolling Volatility & Max Drawdown Analysis
SELECT 
    date_trunc('month', trade_date)::date AS trade_month,
    ROUND(AVG(close_price), 2) AS avg_spot_silver,
    ROUND(STDDEV(daily_return_pct) * SQRT(252), 2) AS annualized_volatility,
    ROUND(MIN(price_drawdown_pct), 2) AS max_drawdown
FROM silver_daily_metrics
GROUP BY trade_month
ORDER BY trade_month DESC
LIMIT 4;`,
    execTime: '24ms (Analytical Pipeline)',
    columns: ['Month', 'Avg Spot ($)', 'Annual Vol (%)', 'Max Drawdown (%)'],
    rows: [
      ['Oct 2024', '$31.85', '28.4%', '-4.12%'],
      ['Sep 2024', '$29.40', '31.2%', '-6.80%'],
      ['Aug 2024', '$28.10', '26.9%', '-3.95%'],
      ['Jul 2024', '$30.65', '34.5%', '-8.40%'],
    ],
    metrics: [
      { label: 'Current Spot', value: '$31.85' },
      { label: '30D Volatility', value: '28.4%' },
      { label: 'Max Recovery', value: '+13.3%' },
    ],
    insight:
      'Volatility contracted from 34.5% to 28.4% alongside a healthy spot price consolidation above $31. Macro correlation with real yield changes suggests steady institutional accumulation during low-drawdown phases.',
  },
  {
    id: 'security',
    title: 'ChainShield Security Scan',
    icon: ShieldCheck,
    projectRef: 'ChainShield AI Hackathon',
    query: `// Deterministic AST Vulnerability & LLM Security Analysis
SCAN contract VaultLiquidity {
  CHECK ReentrancyPattern       => [CLEAN]
  CHECK UncheckedLowLevelCalls  => [WARNING - Line 142: call.value()]
  CHECK AccessControlRole       => [CRITICAL - Missing onlyRole modifier]
  DISPATCH LLM_Contextual_Engine(
    model: "claude-3-security",
    prompt: "Synthesize mitigation strategy with PoC exploit vector"
  )
}`,
    execTime: '312ms (Hybrid Rule + LLM)',
    columns: ['Vulnerability Type', 'Severity', 'Target Function', 'Mitigation Rationale'],
    rows: [
      ['Access Control Bypass', 'CRITICAL', 'withdrawTreasury()', 'Apply OpenZeppelin Ownable2Step & AccessControl modifier'],
      ['Unchecked Call Return', 'MEDIUM', 'forwardReward()', 'Verify boolean return value or implement SafeERC20'],
      ['Timestamp Dependency', 'LOW', 'distributeEpoch()', 'Replace block.timestamp with block.number checkpoint'],
    ],
    metrics: [
      { label: 'Critical Flaws', value: '1 Found' },
      { label: 'AST Rules Checked', value: '42 Rules' },
      { label: 'Security Score', value: '74 / 100' },
    ],
    insight:
      'Deterministic AST parsing caught missing access modifiers before gas execution. LLM reasoning provided context-aware patch recommendations, preventing potential flash-loan drain exploits in the vault.',
  },
]

export default function DataPlayground() {
  const [activeScenario, setActiveScenario] = useState<Scenario>(SCENARIOS[0])
  const [isRunning, setIsRunning] = useState(false)
  const [runSuccess, setRunSuccess] = useState(true)

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
      setRunSuccess(true)
    }, 380)
  }

  const handleSelect = (scenario: Scenario) => {
    setActiveScenario(scenario)
    setIsRunning(true)
    setTimeout(() => {
      setIsRunning(false)
    }, 280)
  }

  return (
    <section id="playground" className={`section ${styles.playground}`}>
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', marginInline: 'auto' }}>
          <p className="section-label" style={{ justifyContent: 'center' }}>
            Interactive Proof of Work
          </p>
          <h2 className="section-title">Live Analytics & SQL Sandbox</h2>
          <p className="section-subtitle" style={{ marginInline: 'auto' }}>
            Test-drive the analytical queries and intelligent workflows behind my projects.
            Select a scenario below to run simulated live queries and examine generated insights.
          </p>
        </div>

        <div className={styles.terminalWrapper}>
          {/* Top Bar */}
          <div className={styles.terminalHeader}>
            <div className={styles.windowControls}>
              <span className={`${styles.dot} ${styles.dotRed}`} />
              <span className={`${styles.dot} ${styles.dotYellow}`} />
              <span className={`${styles.dot} ${styles.dotGreen}`} />
            </div>

            <div className={styles.terminalTitle}>
              <Terminal size={14} />
              <span>abhi-analytics-engine :: session_active</span>
            </div>

            <div className={styles.liveBadge}>
              <span className={styles.liveDot} />
              <span>PostgreSQL & Python Live</span>
            </div>
          </div>

          {/* Scenario Selector */}
          <div className={styles.scenarioBar}>
            {SCENARIOS.map(s => {
              const Icon = s.icon
              const isActive = activeScenario.id === s.id
              return (
                <button
                  key={s.id}
                  className={`${styles.scenarioBtn} ${isActive ? styles.scenarioBtnActive : ''}`}
                  onClick={() => handleSelect(s)}
                >
                  <Icon size={14} />
                  <span>{s.title}</span>
                </button>
              )
            })}
          </div>

          {/* Body */}
          <div className={styles.terminalContent}>
            {/* Left: Code Query */}
            <div className={styles.querySide}>
              <div className={styles.queryHeader}>
                <span className={styles.queryLabel}>Source Query & Logic</span>
                <span className={styles.execTime}>⚡ {activeScenario.execTime}</span>
              </div>

              <div className={styles.codeBox}>
                <code>{activeScenario.query}</code>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <button className={styles.execButton} onClick={handleRun} disabled={isRunning}>
                  <Play size={14} fill="currentColor" />
                  <span>{isRunning ? 'Executing Pipeline...' : 'Run Analysis Pipeline'}</span>
                </button>
                <span style={{ fontSize: '0.74rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                  Ref: {activeScenario.projectRef}
                </span>
              </div>
            </div>

            {/* Right: Results & Insight */}
            <div className={styles.resultSide}>
              {/* Metrics row */}
              <div className={styles.metricGrid}>
                {activeScenario.metrics.map(m => (
                  <div key={m.label} className={styles.metricBox}>
                    <span className={styles.metricVal}>{m.value}</span>
                    <span className={styles.metricLbl}>{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Table output */}
              <div className={styles.tableWrap}>
                <table className={styles.resultTable}>
                  <thead>
                    <tr>
                      {activeScenario.columns.map(col => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <AnimatePresence mode="wait">
                      {activeScenario.rows.map((row, rIdx) => (
                        <motion.tr
                          key={rIdx}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: rIdx * 0.05 }}
                        >
                          {row.map((val, cIdx) => (
                            <td key={cIdx}>{val}</td>
                          ))}
                        </motion.tr>
                      ))}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>

              {/* Insight Takeaway */}
              <div className={styles.insightCard}>
                <div className={styles.insightHeader}>
                  <Sparkles size={16} />
                  <span>Key Analytical Takeaway</span>
                </div>
                <p className={styles.insightText}>{activeScenario.insight}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

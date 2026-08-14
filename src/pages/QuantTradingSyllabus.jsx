import React from 'react';
import { ArrowLeft } from 'lucide-react';

const QuantTradingSyllabus = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={() => setCurrentPage('goals')}
          style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%', color: 'var(--text-primary)', border: 'none', cursor: 'pointer' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="page-title">Quant Trading Syllabus</h1>
          <p className="page-subtitle">Complete Roadmap: Mathematics, Statistics, Programming, and Quantitative Research</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        
        <h2 style={{ color: 'var(--text-primary)', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>Stage 0 — Programming for Quant Research</h2>
        <p><strong>Duration:</strong> 2–4 weeks</p>
        <ul>
          <li><strong>Learn/Revise:</strong> Python, NumPy, Pandas, Matplotlib, SciPy, Jupyter, Git/GitHub, SQL basics</li>
          <li><strong>Build:</strong> Download historical stock data, calculate returns, calculate volatility, plot price/return distributions, calculate correlation, create a simple portfolio.</li>
          <li><strong>Goal:</strong> Become comfortable manipulating financial data with Python.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>STAGE 1 — Mathematics Foundation</h2>
        
        <h3 style={{ color: 'var(--text-primary)', marginTop: '16px' }}>Step 1 — Precalculus</h3>
        <p>📖 <em>Precalculus Mathematics in a Nutshell — George F. Simmons</em> | <strong>Duration:</strong> 1–2 months</p>
        <ul>
          <li><strong>Focus on:</strong> Algebra, Functions, Polynomials, Exponentials, Logarithms, Trigonometry, Coordinate geometry, Sequences.</li>
          <li><strong>Project:</strong> Implement compound interest, loan amortization, exponential growth, log returns, trigonometric functions.</li>
        </ul>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '16px' }}>Step 2 — Calculus</h3>
        <p>📖 <em>Calculus: Early Transcendentals — Stewart</em> | <strong>Duration:</strong> 3–4 months</p>
        <ul>
          <li><strong>Part A:</strong> Limits, Continuity, Derivatives, Applications</li>
          <li><strong>Part B:</strong> Integrals, Fundamental theorem, Integration techniques</li>
          <li><strong>Part C & D:</strong> Sequences/series, Taylor series, Multivariable calculus, Partial derivatives, Vectors</li>
          <li><strong>Project:</strong> Build Python implementations of Newton-Raphson, Numerical integration, Gradient descent.</li>
        </ul>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '16px' }}>Step 3 — Linear Algebra</h3>
        <p>📖 <em>Introduction to Linear Algebra — Gilbert Strang</em> | <strong>Duration:</strong> 2–3 months</p>
        <ul>
          <li><strong>Learn:</strong> Vectors, Matrices, Linear equations, Vector spaces, Basis, Orthogonality, Least squares, Eigenvalues, Eigenvectors, SVD.</li>
          <li><strong>Project:</strong> Build a Portfolio Risk Analyzer (Input: Stocks, Output: Correlation/Covariance matrix, Portfolio volatility/beta, PCA factors).</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>STAGE 2 — Probability & Statistics</h2>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '16px' }}>Step 4 — Probability</h3>
        <p>📖 <em>Introduction to Probability — Blitzstein & Hwang</em> | <strong>Duration:</strong> 2–3 months</p>
        <ul>
          <li><strong>Learn:</strong> Counting, Conditional probability, Bayes theorem, Random variables, Distributions, Expectation, Variance, LLN, CLT, Markov chains.</li>
          <li><strong>Projects:</strong> Simulate Coin flips, Random walks, Monte Carlo estimation, Monte Carlo portfolio simulation.</li>
        </ul>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '16px' }}>Step 5 & 6 — Statistics & Bayesian Statistics</h3>
        <p>📖 <em>All of Statistics (Wasserman) & Statistical Rethinking (McElreath)</em></p>
        <ul>
          <li><strong>Learn:</strong> Estimation, MLE, Bayesian inference, Hypothesis testing, Regression, Bootstrap, MCMC, Causal inference.</li>
          <li><strong>Quant Application:</strong> "Is this trading strategy actually producing an edge, or did I just get lucky?"</li>
          <li><strong>Project:</strong> Test a Moving Average Momentum strategy for statistical significance, out-of-sample performance, and build Bayesian probability models.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>STAGE 3 — Computational Mathematics</h2>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '16px' }}>Steps 7, 8 & 9 — Numerical & Convex Optimization</h3>
        <p>📖 <em>Süli & Mayers, Boyd & Vandenberghe, Nocedal & Wright</em></p>
        <ul>
          <li><strong>Learn:</strong> Root finding, Numerical integration, ODE solver, Convex functions, Linear/Quadratic programming, Duality, Gradient methods, BFGS.</li>
          <li><strong>Project:</strong> Build a Portfolio Optimizer (Minimum-volatility portfolio, Maximum-Sharpe portfolio, Risk contribution, weights).</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>STAGE 4 — Financial Time Series</h2>

        <h3 style={{ color: 'var(--text-primary)', marginTop: '16px' }}>Step 10 — Financial Time Series</h3>
        <p>📖 <em>Analysis of Financial Time Series — Ruey S. Tsay</em> | <strong>Duration:</strong> 3–4 months</p>
        <ul>
          <li><strong>Learn:</strong> Financial returns, Stationarity, AR, MA, ARMA, ARIMA, Volatility, ARCH, GARCH, Multivariate time series, Forecasting.</li>
          <li><strong>Projects:</strong> Return Forecasting, GARCH Volatility Forecasting, Pairs Trading, Mean Reversion, Momentum Strategy.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>STAGE 5 — Become a Quant Researcher</h2>
        <p>Build your own research pipeline:</p>
        <code>Market Data → Data Cleaning → Feature Engineering → Hypothesis → Strategy → Backtest → Transaction Costs → Risk Analysis → Out-of-Sample Test → Paper Trading</code>
        <ul style={{ marginTop: '16px' }}>
          <li><strong>Learn:</strong> Look-ahead bias, Survivorship bias, Overfitting, Slippage, Position sizing, Drawdown, Sharpe ratio, Walk-forward testing.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>STAGE 6 & 7 — Financial Mathematics & Volatility Trading</h2>
        <ul>
          <li><strong>Books (Steps 11-15):</strong> <em>Stochastic Calculus (Shreve), Monte Carlo Finance (Glasserman), Arbitrage Theory (Björk), Volatility Surface (Gatheral), Stochastic Volatility (Bergomi)</em></li>
          <li><strong>Topics:</strong> Brownian motion, Martingales, Black-Scholes, Hedging, Monte Carlo simulation, Continuous-time models, Volatility smile/skew, Variance swaps.</li>
          <li><strong>Projects:</strong> Monte Carlo Option Pricing Engine, Construct Implied Volatility Surface.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>STAGE 8 — Bayesian Filtering</h2>
        <ul>
          <li><strong>Step 16:</strong> <em>Bayesian Filtering and Smoothing (Särkkä)</em></li>
          <li><strong>Learn:</strong> State-space models, Kalman filter, Particle filters.</li>
          <li><strong>Quant Application:</strong> Estimate a hidden market state from noisy observations to generate trading signals.</li>
        </ul>

        <div style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>⚠️ One Important Change</h3>
          <p style={{ margin: 0 }}>
            Do NOT wait until Book 16 to trade. Your practical path should run alongside the books. Around Book 10 (Tsay), you should already be building serious quantitative strategies rather than merely studying theory.
            <br/><br/>
            <strong>Your ultimate target:</strong> Independently go from Hypothesis → Data → Mathematical model → Statistical test → Backtest → Transaction costs → Risk analysis → Out-of-sample validation → Paper trading → Live trading.
            <br/><br/>
            The goal of this roadmap is to give you the tools to discover whether an apparent edge is real, robust, and worth risking capital on.
          </p>
        </div>

      </div>
    </div>
  );
};

export default QuantTradingSyllabus;

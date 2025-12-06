---
title: "GGSN Throughput Forecasting for Network Capacity Planning"
description: "Time series forecasting with <10% MAPE enabling 6-month capacity planning"
date: 2024-06-01
category: "timeseries"
projectType: "industry"
featured: true
image: "/images/telecom-forecasting.jpg"
tags: ["Time Series", "Forecasting", "Spark", "Production ML", "Airflow"]
techStack: ["Python", "statsmodels", "Spark", "Airflow", "PostgreSQL", "pandas", "scikit-learn"]
weight: 6
---

## Challenge

Indonesian telecom needed to predict network throughput across 10+ regions for proactive infrastructure investment. Irregular seasonality (Ramadan holidays) and regional variations complicated traditional forecasting approaches.

## Solution

Implemented multi-method time series approach comparing ETS, ARIMA, and regression-based forecasting with RAN driver variables. Custom outlier detection with IQR method and rolling imputation for data quality.

## Impact

- <10% MAPE across all regions
- Enabled 6-month capacity forecasting
- Supported data-driven infrastructure investment decisions
- Handled irregular seasonality (Ramadan adjustments)

## Key Features

- ETS for smooth trends with clear seasonality
- ARIMA with first-order differencing for autocorrelated series
- OLS regression leveraging RAN metrics (cell throughput, active users, PRB utilization)
- Custom outlier detection (IQR method)
- Rolling imputation for missing values
- Regional model comparison framework

## Technical Deep Dive

### Key Technical Decisions

1. **Multi-method approach**: ETS for stable trends, ARIMA for autocorrelation, regression for causal drivers
2. **Regional models**: Different regions exhibit different patterns
3. **RAN features**: Cell-level metrics improve accuracy vs time-only models
4. **Custom outlier handling**: IQR detection + rolling mean imputation

### Implementation Highlights

Automated model selection per region based on validation MAPE. ETS chosen for regions with clear seasonality, ARIMA for high autocorrelation, regression where RAN features have strong correlation.

### Challenges & Solutions

Handling Ramadan holidays causing irregular seasonality. Solved with external regressors for holiday periods and adaptive seasonal windows.

## Results

- **Average MAPE**: <10%
- **Forecast Horizon**: 6 months
- **Regions Covered**: 10+
- **Deployment**: Production

## Key Learnings

- Multi-method approach outperforms single-model forecasting
- Domain features (RAN metrics) significantly improve accuracy
- Regional variations require localized models
- Robust data preprocessing critical for production forecasting

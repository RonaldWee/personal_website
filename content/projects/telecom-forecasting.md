---
title: "GGSN Throughput Forecasting for Network Capacity Planning"
description: "Time series forecasting with <10% MAPE enabling 6-month capacity planning"
date: 2024-06-01
category: "timeseries"
projectType: "enterprise"
featured: true
image: "/images/telecom-forecasting.jpg"
tags: ["Time Series", "Forecasting"]
techStack: ["Python", "statsmodels", "pandas", "scikit-learn"]
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


## Key Learnings

- Multi-method approach outperforms single-model forecasting
- Domain features (RAN metrics) significantly improve accuracy
- Regional variations require localized models
- Robust data preprocessing critical for production forecasting

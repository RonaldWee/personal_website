---
title: "Multi-Class Customer Spending Classification"
description: "End-to-end ML pipeline with feature engineering and model optimization"
date: 2024-07-01
category: "ml"
projectType: "personal"
featured: false
image: "/images/customer-segmentation.jpg"
tags: ["ML", "Classification", "scikit-learn", "Feature Engineering", "PCA"]
techStack: ["scikit-learn", "pandas", "NumPy", "Matplotlib", "Seaborn", "Python"]
github: "https://github.com/ronaldnovero/customer-segmentation"
weight: 7
---

## Challenge

E-commerce business needed to classify customers into spending tiers for targeted marketing campaigns. Imbalanced classes and multicollinearity in purchasing features required careful preprocessing.

## Solution

Built end-to-end ML pipeline with comprehensive feature engineering (total spending aggregation), distribution normalization (log/sqrt transforms), PCA for dimensionality reduction, and systematic model comparison via GridSearchCV.

## Impact

- High macro F1-score for balanced classification
- Production-ready pipeline with PCA dimensionality reduction
- Optimal SVM model selection through systematic evaluation
- Enabled targeted marketing campaigns

## Key Features

- Feature engineering (total spending aggregation)
- Outlier handling via IQR clipping
- Distribution normalization (log/sqrt transforms)
- StandardScaler for zero mean, unit variance
- PCA for multicollinearity handling
- GridSearchCV with 5-fold cross-validation
- Model comparison: Neural Network, SVM (OvR), KNN

## Technical Deep Dive

### Key Technical Decisions

1. **PCA over feature selection**: Multicollinearity evident in correlation matrix
2. **StandardScaler before PCA**: Required for variance-based dimensionality reduction
3. **SVM One-vs-Rest**: Best performance for multi-class with clear decision boundaries
4. **Log/sqrt transforms**: Normalize right-skewed spending distributions

### Implementation Highlights

Feature engineering creates total spending feature. IQR clipping removes outliers without losing samples. StandardScaler normalizes, PCA reduces to optimal dimensions (explained variance >95%). GridSearchCV finds best SVM hyperparameters (kernel, C, gamma).

### Challenges & Solutions

Class imbalance and multicollinearity. Solved with PCA reducing correlated features and SVM One-vs-Rest handling imbalanced classes better than single multiclass classifier.

## Results

- **Macro F1-Score**: 0.89
- **Best Model**: SVM (OvR)
- **PCA Components**: 12
- **CV Folds**: 5

## Key Learnings

- Feature engineering more impactful than model complexity
- PCA effective for handling multicollinearity in customer data
- Systematic model comparison via GridSearchCV prevents bias
- Distribution normalization critical for tree-based and distance-based models

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


## Key Learnings

- Feature engineering more impactful than model complexity
- PCA effective for handling multicollinearity in customer data
- Systematic model comparison via GridSearchCV prevents bias
- Distribution normalization critical for tree-based and distance-based models

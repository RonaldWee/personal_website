---
title: "Multimodal RAG with ColPali Vision-Language Embeddings"
description: "Preserving visual context in document retrieval with multi-vector embeddings"
date: 2024-04-01
category: "rag"
projectType: "personal"
featured: true
image: "/images/multimodal-rag.jpg"
tags: ["RAG", "Multimodal AI", "ColPali", "Next.js", "Qdrant"]
techStack: ["Next.js 14", "TypeScript", "FastAPI", "ColPali", "Qdrant", "Tesseract OCR", "pdfplumber", "Google Colab", "Cloudflare Tunnel"]
github: "https://github.com/RonaldWee/colpali_rag"
weight: 4
---

## Challenge

Traditional RAG systems extract only text from PDFs, losing valuable visual information (charts, diagrams, layouts). Needed system handling both digital and scanned documents while preserving visual context for accurate retrieval.

## Solution

Built Next.js + FastAPI RAG system using ColPali vision-language embeddings for multimodal document retrieval. Two-stage retrieval with mean-pooled vectors for fast filtering and MaxSim on full multi-vectors for accurate ranking.

## Impact

- Handles both digital and scanned PDFs seamlessly
- Sub-2s retrieval with multi-vector reranking
- Free GPU compute via Google Colab
- Multimodal embeddings capture text + visual layout

## Key Features

- Hybrid PDF support (digital + scanned)
- ColPali multi-vector embeddings (1024 patches per page)
- Two-stage retrieval (fast dense search + MaxSim reranking)
- Vision LLM captioning for visual elements
- Remote GPU via Colab + Cloudflare Tunnel
- Fat payload approach (thumbnails, text, captions in DB)

## Key Learnings

- ColPali multi-vectors capture visual layout that text embeddings miss
- Two-stage retrieval essential: speed vs accuracy tradeoff
- Fat payload trades storage for speed—no reprocessing needed
- Colab + Cloudflare enables free GPU inference for personal projects

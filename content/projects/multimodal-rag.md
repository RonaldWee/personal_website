---
title: "Multimodal RAG with ColPali Vision-Language Embeddings"
description: "Preserving visual context in document retrieval with multi-vector embeddings"
date: 2024-04-01
category: "rag"
projectType: "personal"
featured: true
image: "/images/multimodal-rag.jpg"
tags: ["RAG", "Multimodal AI", "ColPali", "Next.js", "Qdrant"]
techStack: ["Next.js 14", "TypeScript", "FastAPI", "ColPali", "Qdrant", "Tesseract OCR", "pdfplumber", "Google Colab", "Cloudflare Tunnel", "Claude 3.5 Sonnet"]
github: "https://github.com/ronaldnovero/multimodal-rag"
demo: "https://multimodal-rag.vercel.app"
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

## Technical Deep Dive

### Architecture

Next.js frontend, FastAPI backend, ColPali API on Colab T4 GPU, Qdrant vector DB with multi-vector support

### Key Technical Decisions

1. **ColPali over CLIP**: Multi-vector embeddings capture fine-grained visual details
2. **Two-stage retrieval**: Mean-pooled for speed, MaxSim for accuracy
3. **Fat payload**: Trade storage for speed (no reprocessing, instant UI display)
4. **Colab + Cloudflare**: Free GPU via public tunnel

### Implementation Highlights

Each page generates 1024 patch embeddings (128-dim each). Stage 1 uses mean-pooled vector for fast top-15 candidate retrieval. Stage 2 computes MaxSim scores on full multi-vectors for accurate top-5 ranking.

### Challenges & Solutions

Balancing retrieval speed with multi-vector accuracy. Two-stage approach achieves ~1-2s total (vs ~10s+ pure multi-vector) while maintaining accuracy.

## Results

- **Retrieval Time**: 1-2s
- **Vectors per Page**: 1024
- **Storage per Page**: 550-650KB
- **GPU Cost**: $0

## Key Learnings

- ColPali multi-vectors capture visual layout that text embeddings miss
- Two-stage retrieval essential: speed vs accuracy tradeoff
- Fat payload trades storage for speed—no reprocessing needed
- Colab + Cloudflare enables free GPU inference for personal projects

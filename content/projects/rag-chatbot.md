---
title: "Enterprise RAG Chatbot with Advanced Document Parsing"
description: "Production RAG pipeline with 25% increase in context precision using advanced parsing and validation"
date: 2024-01-01
category: "rag"
projectType: "industry"
featured: true
image: "/images/rag-chatbot.jpg"
tags: ["RAG", "GenAI", "FastAPI", "LlamaIndex", "Production ML"]
techStack: ["MinerU", "LlamaIndex", "FastAPI", "Milvus", "Docker", "BAAI bge-m3", "YOLOv2", "Python"]
github: "https://github.com/ronaldnovero/rag-chatbot"
weight: 1
---

## Challenge

Client needed accurate Q&A over policy documents with complex tables and diagrams. Traditional PDF parsers failed to preserve table structure and semantic meaning, leading to incomplete context and hallucinated answers.

## Solution

Built production-grade RAG pipeline using MinerU for PDF parsing, implementing semantic chunking with atomic table preservation, sub-query generation for complex questions, and LLM-as-judge validation with retry logic.

## Impact

- 25% increase in context precision
- 23% reduction in hallucinations (faithfulness)
- 20% improvement in answer relevancy
- Successfully delivered production-grade POC driving client acquisition

## Key Features

- YOLOv2-based layout detection for tables and figures
- Atomic table chunking with metadata preservation
- Sub-query generation for complex multi-part questions
- Deduplication and semantic reranking
- Answer validation with retry logic (max 3 attempts)
- Docker containerization for deployment

## Technical Deep Dive

### Architecture

FastAPI backend orchestrating MinerU PDF parsing, Milvus vector storage, and LlamaIndex RAG pipeline

### Key Technical Decisions

1. **MinerU over PyPDF**: Better table structure preservation with YOLOv2 detection
2. **Atomic table chunking**: Each table row as separate chunk with full table context
3. **Sub-query generation**: Break complex questions into focused sub-queries
4. **LLM-as-judge validation**: Auto-retry on low confidence scores

### Implementation Highlights

Hybrid chunking strategy combining semantic text chunks (512 tokens) with atomic table chunks. Each table row stored separately but maintains reference to parent table for context.

### Challenges & Solutions

Handling tables spanning multiple pages and preserving relationships between table footnotes and data rows. Solved with metadata linking and parent-child chunk relationships.

## Results

- **Context Precision**: +25%
- **Faithfulness**: +23%
- **Answer Relevancy**: +20%
- **Production Ready**: ✓

## Key Learnings

- Atomic table chunking dramatically improves retrieval accuracy for structured data
- Sub-query generation handles complex questions better than single-pass retrieval
- LLM-as-judge validation catches hallucinations before they reach users
- Production RAG requires robust error handling and retry mechanisms

---
title: "Production Speech-to-Text Orchestration Platform"
description: "50% latency reduction through parallel processing and multi-model orchestration"
date: 2024-03-01
category: "microservices"
projectType: "industry"
featured: true
image: "/images/transcript-orchestrator.jpg"
tags: ["Microservices", "Speech AI", "FastAPI", "Real-time Processing", "gRPC"]
techStack: ["FastAPI", "WebSocket", "gRPC", "PostgreSQL", "Docker", "Whisper", "Silero VAD", "WeSpeaker", "Emotion2Vec+", "NeMo ITN"]
weight: 3
---

## Challenge

Enterprise needed flexible transcription supporting multiple ASR backends (Whisper, Meralion, INS8), real-time streaming, batch processing, speaker identification, emotion recognition, and PII redaction—all with sub-second latency.

## Solution

Built FastAPI microservices platform orchestrating 3 ASR models with parallel execution of transcription and speaker identification. Implemented context-aware post-processing pipeline with sliding window approach for entities spanning chunk boundaries.

## Impact

- 50% latency reduction through parallel processing
- Sub-second streaming responses
- 3 ASR backend options (multilingual, low-latency, telephony)
- Real-time + batch processing modes
- Production-grade fault tolerance

## Key Features

- Parallel execution of transcription and speaker identification
- Context-aware post-processing with sliding 3-chunk windows
- Streaming WebSocket pipeline with auto-trimming buffers
- Multi-worker deployment with gRPC coordination
- Fault-tolerant independent service failures
- PII redaction for compliance

## Key Learnings

- Parallel execution with fault isolation achieves both speed and reliability
- Context-aware post-processing essential for entities spanning boundaries
- Sliding window approach balances accuracy and memory efficiency
- Multi-worker coordination requires careful service discovery and load balancing

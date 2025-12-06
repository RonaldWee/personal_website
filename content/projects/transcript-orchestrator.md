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

## Technical Deep Dive

### Architecture

FastAPI orchestrator coordinating Whisper/Meralion/INS8 ASR models, Silero VAD for segmentation, WeSpeaker for speaker ID, Emotion2Vec+ for emotion, and NeMo/Meralion for post-processing

### Key Technical Decisions

1. **Parallel execution**: 50% faster by running transcription + speaker ID concurrently
2. **Sliding window post-processing**: Handles entities spanning boundaries (phone numbers)
3. **Fault isolation**: Independent exception handling prevents cascading failures
4. **Multi-worker coordination**: gRPC for load balancing and service discovery

### Implementation Highlights

ThreadPoolExecutor manages parallel tasks with independent error handling. Context-aware post-processing uses 3-chunk sliding window (previous, current, next) for each stage (ITN, punctuation, PII).

### Challenges & Solutions

Handling entities spanning chunk boundaries (e.g., phone number split across sentences). Solved with sliding window approach maintaining context across chunks and PII storing original text for accurate detection.

## Results

- **Latency Reduction**: 50%
- **Streaming Response Time**: <1s
- **Concurrent Workers**: 16/service
- **Fault Tolerance**: ✓

## Key Learnings

- Parallel execution with fault isolation achieves both speed and reliability
- Context-aware post-processing essential for entities spanning boundaries
- Sliding window approach balances accuracy and memory efficiency
- Multi-worker coordination requires careful service discovery and load balancing

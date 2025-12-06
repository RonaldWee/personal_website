---
title: "Domain-Specific Speech Recognition with LoRA Fine-Tuning"
description: "30% WER reduction through parameter-efficient fine-tuning with 98% fewer parameters"
date: 2024-02-01
category: "speech"
projectType: "industry"
featured: true
image: "/images/speech-recognition.jpg"
tags: ["Speech AI", "LoRA", "Fine-tuning", "Ray", "PyTorch"]
techStack: ["Whisper", "LoRA/PEFT", "Ray Tune", "PyTorch", "BitsAndBytes", "torchaudio", "Hugging Face"]
weight: 2
---

## Challenge

Whisper ASR model struggled with Singapore government service terminology (CPF, TADM, CorpPass, IRAS), achieving only 40% WER on domain-specific content. Full fine-tuning required 20GB VRAM and risked catastrophic forgetting.

## Solution

Implemented parameter-efficient fine-tuning using LoRA adapters with 8-bit quantization. Automated hyperparameter optimization using Ray Tune with ASHA scheduler across multiple GPUs for efficient resource usage.

## Impact

- 30% WER reduction (40% baseline → 10% fine-tuned)
- 98% reduction in trainable parameters vs full fine-tuning
- 95% memory savings (20GB → 1.6GB VRAM)
- Multi-GPU distributed hyperparameter optimization

## Key Features

- LoRA adapters on encoder/decoder Q,V projection layers
- 8-bit quantization for memory efficiency
- Audio augmentation pipeline (speed, pitch, noise)
- Automated hyperparameter search (learning rate, lora_r, lora_alpha, dropout)
- ASHA early stopping for efficient resource usage
- Multi-GPU distributed training with Ray

## Key Learnings

- LoRA enables domain adaptation without catastrophic forgetting
- Quantization makes advanced models accessible on consumer hardware
- Automated HPO essential for finding optimal adapter configuration
- Audio augmentation critical for generalizing beyond training distribution

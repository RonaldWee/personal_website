---
title: "Multi-Agent Travel Planning System with Real-Time Data"
description: "7-agent system orchestrating flights, hotels, attractions, and cultural tips"
date: 2024-05-01
category: "multiagent"
projectType: "personal"
featured: true
image: "/images/ai-travel-planner.jpg"
tags: ["Multi-Agent", "CrewAI", "FastAPI", "Real-time APIs", "Next.js"]
techStack: ["FastAPI", "Python", "CrewAI", "Next.js 14", "TypeScript", "OpenRouter", "Amadeus API", "Google Places API"]
github: "https://github.com/ronaldnovero/ai-travel-planner"
demo: "https://ai-travel-planner.vercel.app"
weight: 5
---

## Challenge

Creating comprehensive travel itineraries requires coordinating flights, hotels, budgets, attractions, and cultural tips from multiple data sources. Manual planning takes hours and often misses relevant options.

## Solution

Built CrewAI multi-agent system with 7 specialized agents orchestrating real-time API calls for flight/hotel search (Amadeus), attractions (Google Places), and budget estimation. Sequential execution with context passing ensures each agent builds on previous results.

## Impact

- Complete 7-day itineraries with timing and activities
- 5+ flight and hotel options with pricing
- Budget breakdowns for 3 tiers (tight/moderate/flexible)
- Categorized attractions (culture, food, nature)
- ~2-3 minute processing time

## Key Features

- 7 specialized agents (seasonality, flight, hotel, budget, attractions, itinerary, tips)
- Tool architecture wrapping external APIs
- Real-time flight/hotel searches
- Live attraction discovery
- Sequential execution with context passing
- JSON export for portability

## Technical Deep Dive

### Architecture

Next.js frontend, FastAPI backend, CrewAI orchestrating 7 agents with tool-based API integration

### Key Technical Decisions

1. **Multi-agent over monolithic**: Specialized roles for complex workflows
2. **Sequential execution**: Each agent builds on previous results
3. **Tool architecture**: Clean separation of AI logic and data sources
4. **CrewAI framework**: Production-ready agent orchestration

### Implementation Highlights

Each agent has specific role, goal, and tools. Seasonality agent analyzes best travel times. Flight/hotel agents use Amadeus API tools. Attractions agent uses Google Places. Itinerary agent synthesizes all results into day-by-day plan.

### Challenges & Solutions

Managing agent execution order and context passing. CrewAI sequential tasks ensure proper dependency handling (e.g., itinerary agent waits for flight/hotel/attractions results).

## Results

- **Processing Time**: 2-3 min
- **Agents**: 7
- **API Integrations**: 3
- **Itinerary Days**: 7

## Key Learnings

- Multi-agent systems enable complex workflows by decomposing into specialized roles
- Sequential execution with context passing ensures agent coordination
- Tool architecture provides clean abstraction—agents focus on reasoning, tools handle data
- Agent orchestration frameworks like CrewAI reduce boilerplate and handle edge cases

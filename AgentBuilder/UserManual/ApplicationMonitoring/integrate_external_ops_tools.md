---
sidebar_position: 3
sidebar_label: 'Integrating External Ops Tools'
hide_title: true
pagination_label: Integrating External Ops Tools
title: 'Integrating External Ops Tools with AgentBuilder'
description: 'How to integrate LLMOps tools like LangSmith and Langfuse for tracking and evaluation in AgentBuilder.'
---

## Why Use LLMOps Tools?

Large Language Models (LLMs) are powerful but complex. Their internal workings are not fully understood, making it challenging to develop, evaluate, and operate LLM-based applications. Common challenges include:
- Evaluating output quality
- Assessing inference costs
- Measuring response latency
- Debugging complex chains, agents, and tools
- Understanding user intent

LLMOps tools like LangSmith and Langfuse provide comprehensive tracking and evaluation for LLM applications, supporting the full lifecycle from prototyping to production.

---

### Prototyping Phase
- Rapid experimentation with prompts, models, RAG strategies, and parameters.
- Integrate Langfuse to track every step of AgentBuilder app execution, providing clear debugging and performance insights.

### Testing Phase
- Continue data collection to improve performance.
- Use LangSmith to add runs as examples, extending test coverage to real-world scenarios.

### Production Phase
- Monitor key data points, add benchmark datasets, perform manual annotations, and analyze results.
- During large-scale usage, continuously monitor costs and performance to optimize both the model and the application.

---

## How to Integrate AgentBuilder with Ops Tools

- When orchestrating LLM applications with AgentBuilder Workflow, you often use multiple nodes and complex logic.
- Integrating with external Ops tools helps break the "black box" of application orchestration.
- Configure the platform to track data and metrics throughout the lifecycle, making it easy to assess quality, performance, and cost.

---



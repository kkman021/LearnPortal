---
sidebar_position: 2
sidebar_label: 'Application Types'
hide_title: true
pagination_label: Application Types
title: 'Application Types in AgentBuilder'
description: 'Description and comparison of different application types available in AgentBuilder.'
---

AgentBuilder provides four types of applications:

- **Chatbot**
- **Text Generator**
- **Agent**
- **Workflow**

![Application Types](https://docs.wise-paas.advantech.com/dataSource/resource/1723619018446389897.png)

---

## Differences Between Text Generator and Chatbot

| Feature                | Text Generator         | Chatbot                |
|------------------------|-----------------------|------------------------|
| WebApp Interface       | Form + Results        | Chat-based             |
| WebAPI Endpoint        | completion-messages   | chat-messages          |
| Interaction Mode       | One question, one answer | Multi-turn conversation |
| Streaming Results      | Supported             | Supported              |
| Context Preservation   | Per session           | Continuous             |
| User Input Form        | Supported             | Supported              |
| Datasets and Plugins   | Supported             | Supported              |
| AI Opening Remarks     | Not supported         | Supported              |
| Example Scenarios      | Translation, judgment, indexing | Chatting      |

---

## Application Types Overview

- **Chatbot**
  - Built on LLM for conversational interaction.
  - Supports two orchestrate methods:
    - *Basic orchestrate*: Simple configuration, no need to modify built-in prompts.
      - ![Basic Orchestrate](https://docs.wise-paas.advantech.com/dataSource/resource/1723619028642978247.png)
      - Edit page: ![Edit Page](https://docs.wise-paas.advantech.com/dataSource/resource/1723619039238481936.png)
    - *Chatflow orchestrate*: Arranges chatbots as workflows, highly customizable, allows editing built-in prompts.
      - ![Chatflow Orchestrate](https://docs.wise-paas.advantech.com/dataSource/resource/1723619050460436216.png)
      - Edit page: ![Edit Page](https://docs.wise-paas.advantech.com/dataSource/resource/1723619059537586439.png)

- **Text Generator**
  - Automatically generates high-quality text based on user prompts (e.g., summaries, translations).
    - ![Text Generator](https://docs.wise-paas.advantech.com/dataSource/resource/1723619069098930403.png)
    - Edit page: ![Edit Page](https://docs.wise-paas.advantech.com/dataSource/resource/1723619080288116281.png)

- **Agent**
  - Uses LLMs to autonomously plan goals, break down tasks, invoke tools, iterate, and complete tasks without human intervention.
    - ![Agent](https://docs.wise-paas.advantech.com/dataSource/resource/1723619088014863298.png)
    - Edit page: ![Edit Page](https://docs.wise-paas.advantech.com/dataSource/resource/1723619095104145092.png)

- **Workflow**
  - Orchestrates multiple tasks and models into a workflow for complex scenarios.
    - ![Workflow](https://docs.wise-paas.advantech.com/dataSource/resource/1723619102342346752.png)
    - Edit page: ![Edit Page](https://docs.wise-paas.advantech.com/dataSource/resource/1723619110123456789.png)

---



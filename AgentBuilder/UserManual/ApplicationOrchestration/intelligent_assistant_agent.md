---
sidebar_position: 3
sidebar_label: 'Intelligent Assistant (Agent)'
hide_title: true
pagination_label: Intelligent Assistant (Agent)
title: 'Building an Intelligent Assistant (Agent) in AgentBuilder'
description: 'Guide to creating and orchestrating intelligent assistant (agent) applications in AgentBuilder.'
---

An Intelligent Assistant (Agent) uses large language models to autonomously plan goals, break down tasks, invoke tools, iterate, and complete complex tasks without human intervention.

---

## Quick Start with Agent Templates
- Explore the "Explore" section for ready-made Agent Assistant templates.
- Integrate templates into your workspace or create a custom Agent Assistant in Studio.
- Use cases: analyzing financial reports, composing documents, designing logos, organizing travel plans, and more.

---

## How to Orchestrate an Agent Application

**Example: Travel Assistant**

- *Create Application*
  - Go to **Studio > CREATE APP > Create from Blank**.
  - Select **Agent** as the application type, enter a name, and click **Create**.
  - ![Create Agent](https://docs.wise-paas.advantech.com/dataSource/resource/1723622472420483730.png)

- *Orchestrate Application*
  - ![Orchestrate Agent](https://docs.wise-paas.advantech.com/dataSource/resource/1723622489024422274.png)
  - **Select Model:**
    - Click the model name in the upper right to choose the inference model. For best results, use a strong model (e.g., GPT-4).
    - ![Select Model](https://docs.wise-paas.advantech.com/dataSource/resource/1723622497705011189.png)
  - **Fill in Prompts:**
    - Prompts define the agent's role and skills. Example:
      ```
      ## Role: Travel Assistant
      ### Skills:
      - Proficient in using tools to provide comprehensive information on local conditions, accommodations, etc.
      - Can use emojis to make the conversation more engaging.
      ```

---



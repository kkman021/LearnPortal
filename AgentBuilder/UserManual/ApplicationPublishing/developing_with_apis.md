---
sidebar_position: 6
sidebar_label: 'Developing with APIs'
hide_title: true
pagination_label: Developing with APIs
title: 'Developing with APIs in AgentBuilder'
description: 'How to use AgentBuilder Backend-as-a-Service APIs for frontend and backend development.'
---

AgentBuilder provides a "Backend-as-a-Service" API, allowing developers to access LLM capabilities directly in frontend apps without backend complexity.

---

## Benefits of Using AgentBuilder APIs
- Securely access LLMs from frontend apps without backend development.
- Visual application design with real-time updates.
- Well-encapsulated LLM APIs.
- Effortlessly switch LLM providers and centrally manage API keys.
- Visual operation: log analysis, annotation, user activity observation.
- Continuous addition of tools, plugins, and knowledge.

---

## How to Use
- Choose an application and find **API Access** in the left navigation of the Apps section.
- View API documentation and manage credentials for API access.
- ![API Access](https://docs.wise-paas.advantech.com/dataSource/resource/1723623263527428021.png)
- Create multiple access credentials for different users or developers. API users can use the AI capabilities provided by the developer, while prompts, knowledge, and tools remain encapsulated.

> **Best Practice:** API keys should be accessed via backend calls, not exposed in frontend code or requests, to prevent abuse or attacks.

---

## Text Generator Application Example
- Used to generate high-quality text (articles, summaries, translations, etc.) by calling the `completion-messages` API.
- Model parameters and prompt templates are set in the AgentBuilder Prompt Arrangement page.
- Find API documentation and example requests in the **API Access** section of your application.

---



---
sidebar_position: 1
sidebar_label: 'Extending AgentBuilder with APIs'
hide_title: true
pagination_label: Extending AgentBuilder with APIs
title: 'Extending AgentBuilder with APIs'
description: 'How to extend AgentBuilder with custom APIs for moderation and external data tools.'
---

AgentBuilder allows developers to extend its capabilities by integrating custom APIs. This is useful for adding features such as content moderation or connecting to external data tools.

---

## Supported Extension Modules

- **Moderation:** For sensitive content moderation
- **External Data Tool:** For connecting to external data sources

---

## How to Integrate an API Extension

- Prepare your API and an API Key for authentication (AgentBuilder can generate an API Key if needed).
- Ensure your API follows the required specifications so AgentBuilder can call it correctly.

![API Extension Settings](https://docs.wise-paas.advantech.com/dataSource/resource/1723628296461136596.png)

---

## API Specification

- AgentBuilder will call your API using:
  - `POST {Your-API-Endpoint}`
- **Headers:**
  - `Content-Type: application/json` (request body is JSON)
  - `Authorization: Bearer {api_key}` (API Key for authentication)
- **Request Body:**
  - Contains the extension point and parameters for your module

---

*All image links use the full domain. Content is rewritten for clarity and conciseness, with unnecessary details removed.*

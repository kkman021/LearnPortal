---
sidebar_position: 1
sidebar_label: 'Connecting to an External Knowledge Base'
hide_title: true
pagination_label: Connecting to an External Knowledge Base
title: 'Connecting to an External Knowledge Base in AgentBuilder'
description: 'How to integrate and connect external knowledge bases with AgentBuilder applications.'
---

AgentBuilder allows you to integrate external knowledge bases, enabling your AI applications to access a broader range of information sources. This is especially useful for teams that require advanced retrieval accuracy or need to manage internal materials using custom RAG (Retrieval-Augmented Generation) algorithms or cloud-hosted knowledge services (e.g., AWS Bedrock).

---

## Why Connect to an External Knowledge Base?

- Directly access text content hosted in a cloud provider's knowledge base—no need to duplicate content in AgentBuilder.
- Retrieve content processed by your own algorithms in a self-built knowledge base, allowing you to focus on optimizing your retrieval mechanism.

---

## Integration Steps

- **Create a Compliant External Knowledge Base API**
  - Before setup, ensure your API follows AgentBuilder's External Knowledge Base API specifications for smooth integration.

- **Add External Knowledge API in AgentBuilder**
  - Go to the **Knowledge** page.
  - Click **External Knowledge API** (top right), then **Add External Knowledge API**.
  - Fill in the required fields:
    - **Name:** A custom name for your API.
    - **API Endpoint:** The URL of your external knowledge base API (e.g., `https://your-api-endpoint/retrieval`).
    - **API Key:** The connection key for your external knowledge base.

![Connect to an External Knowledge Base](https://docs.wise-paas.advantech.com/dataSource/resource/1730970247452589372.png)

- **Connect to the External Knowledge Base**
  - On the **Knowledge** page, click **Connect to an External Knowledge Base** under the Add Knowledge Base card to configure parameters and complete the connection.

---

*All image links have been updated to use the full domain. Content is rewritten for clarity and conciseness, with unnecessary details removed.*

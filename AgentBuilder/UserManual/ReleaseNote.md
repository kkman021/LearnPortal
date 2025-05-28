---
sidebar_position: 2
sidebar_label: 'Release Notes'
hide_title: true
pagination_label: Release Notes
title: 'AgentBuilder Release Notes'
description: ''
---


## Release Notes

### 2025-04-25　v1.0.7 released

**New features**
- **Knowledge Base**：Supports multi-threaded indexing, no longer blocked by OCR threads.
- **Chatbot**：Supports previewing referenced files.
- **App Publishing**：Supports publishing to the Teams platform via Azure Bot Services.
- **Customization**：Integrates SSO unified system-level settings, enabling configurations such as logo replacement.
- **External Integration**：Supports deployment to the MSF platform and integration with its Desk.
- **Service Deployment**：Supports Docker deployment.

**Bug fixes**
- **Tenant Management**：Fixed an issue where the owner of AgentBuilder's Tenant would occasionally disappear.

---

### 2025-02-21　v1.0.6 released

**New features**
- **Workflow**：Optimized exception handling to allow nodes such as LLM, HTTP requests and tools to continue operating even if errors occur.
- **Workflow**：Added retry mechanism for LLM, HTTP request and tool nodes.
- **Workflow**：Can manage multiple workflow versions and support recovery to a specific version.
- **Workflow**：You can now view the running status of workflow applications in real time.
- **Workflow**：Start node input supports personal information such as cookies and username.
- **Chatbot**：Video, Audio and PDF files can be previewed directly on the Chatbot UI.
- **Chatbot**：Supports displaying the thinking process of reasoning models, such as: DeepSeek R1.
- **Chatbot**：Support input parameter hiding settings.
- **Model Management**：Supports DeepSeek R1 models from various platforms, including DeepSeek, Siliconflow, Azure AI Foundry, Ollama, Volcengine, OpenRouter, Nvidia Catalog, etc.
- **Knowledge Base**：Supports Parent child Retrieval, improving efficiency and accuracy through multi-level document segmentation and retrieval technology.

**Function modification**
- **Knowledge Base**：Removed useless knowledge base administrator permissions, and defaulted to only the owner having permission to view all knowledge bases.

**Bug fixes**
- **Model Support**：Fixed the issue where Ollama would report an error when using certain models.

---

### 2025-01-10　v1.0.5 released

**New features**
- **Tool**：PandasA Tool supports dynamic CSV file parsing.
- **Tool**：Datainsight Tool supports writing Data.
- **Chatbot**：Javascript embedding method supports dark style and setting transparency.
- **Chatbot**：Speech-to-text function supports automatic sending after conversion.
- **Chatbot**：Chatbot and Agent type applications support file upload function (LLM supports it).
- **Chatbot**：Chatflow/Workflow type applications support file download, just configure the file variable in the reply. A download icon and link will appear. If there is a node in the process that generates files, you can export them.
- **Workflow**：Supports scheduling functions, and you can set the execution frequency of the workflow.
- **Workflow**：Iteration nodes support parallel processing.
- **Workflow**：Template conversion nodes support form functions through HTML syntax, and can present form effects during the conversation.
- **Workflow**：Added environment variables to store private keys or credentials.
- **Workflow**：Added session variables and variable assignment nodes to write node output to session variables, enabling reference contextual function of past conversations.
- **Workflow**：File extractor supports reading .vtt files.
- **App Management**：App icons support PNG, GIF, WebP formats.
- **External Integration**：AgentBuilder can access Chat and Embedding models through the standard OpenAI Compatible API format.
- **External Integration**：Added a separate page for model management to provide for integration with other services.

**Bug Fixes**
- **Knowledge**：Fix the issue where content with hyperlinks in Word documents cannot be parsed normally.

---

### 2024-10-08　v1.0.3 released

**New Features**
- **Application Orchestration**：Workflow orchestration mode supports parallel execution of nodes to improve execution.
- **External Integration**：Integrate SSO unified identity authentication.
- **External Integration**：Integrate Desk for unified tenant and user management.
- **External Integration**：Support embedding Chatbot UI through iframe, which can receive question parameters and new sessions.
- **Tools**：Datainsight/Notification tool supports identity authorization function.
- **Tools**：Tool supports obtaining Cookie parameters.

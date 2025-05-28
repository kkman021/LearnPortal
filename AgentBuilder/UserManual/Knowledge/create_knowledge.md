---
sidebar_position: 1
sidebar_label: 'Creating a Knowledge Base'
hide_title: true
pagination_label: Creating a Knowledge Base
title: 'Creating a Knowledge Base in AgentBuilder'
description: 'Step-by-step guide to building and integrating a knowledge base in AgentBuilder.'
---

AgentBuilder makes it easy to build a knowledge base by uploading documents or importing online data. This knowledge base can then be integrated into your AI applications for advanced Q&A and retrieval tasks.

---

## Steps to Create a Knowledge Base

- **Create a Knowledge Base**
  - Go to the **Knowledge** section in AgentBuilder and click **Create Knowledge**.
  - Choose to import either local document files or online data.

- **Choose Chunking Mode**
  - Select a chunking mode and preview the splitting results. This step preprocesses and structures your content by dividing long texts into smaller, manageable chunks.

- **Configure Indexing and Retrieval**
  - Set the indexing method and retrieval settings. When a user query is received, the knowledge base searches documents using your chosen retrieval method and extracts the most relevant content chunks.

- **Wait for Embedding**
  - Allow time for the system to complete chunk embeddings.

- **Link to Your Application**
  - Once finished, link the knowledge base to your application. You can now build LLM-powered Q&A features based on your knowledge base.

![Create Knowledge Base](https://docs.wise-paas.advantech.com/dataSource/resource/1741847166182956635.png)

---

## Importing Text Data

- **Upload Local Files**
  - Drag and drop or select files to upload. Batch upload limits depend on your subscription plan.
  - The upload size limit for a single document is 15MB.

![Import Text Data](https://docs.wise-paas.advantech.com/dataSource/resource/1741847277400356876.png)

- **Import Data from Website**
  - Crawl content from public web pages using third-party tools like Jina Reader and Firecrawl. Parsed content is imported as Markdown into the knowledge base.

---

*All image links use the full domain. Steps use symbols, and the content is rewritten for clarity and conciseness.*

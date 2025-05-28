---
sidebar_position: 7
sidebar_label: 'Annotation Reply'
hide_title: true
pagination_label: Annotation Reply 
title: 'Annotation Reply in AgentBuilder'
description: 'How to use and enable annotation reply for customizable, high-quality responses in AgentBuilder applications.'
---
## When to Use Annotation Reply

- **Customized responses for specific fields:**
  - For example, in customer service or knowledge base Q&A, you may want the system to provide clear, standard answers for certain questions or mark some as "unanswerable."
- **Rapid tuning for POC or DEMO products:**
  - Quickly build a prototype and improve Q&A results by tagging replies.
- **Bypassing LLM generation:**
  - Annotation reply can skip LLM generation, avoiding hallucination issues in retrieval-augmented generation (RAG).

---

## How Annotation Reply Works

- Enable the reply tagging feature.
- Annotate LLM dialogue responses by adding or editing high-quality answers as tags. These are saved persistently.
- When a similar question is asked, the system searches for matching annotated questions.
  - If a match is found, the tagged answer is returned directly (LLM/RAG is skipped).
  - If no match is found, the regular workflow continues (LLM or RAG is used).
- Disabling the feature stops annotation-based replies.

---

## Enabling Annotation Reply in Prompt Orchestration

- In your chatbot or agent app, go to **left menu > Orchestrate > ADD FEATURE > Annotation Reply**.
- ![Enable Annotation Reply](https://docs.wise-paas.advantech.com/dataSource/resource/1723620079627377229.png)
- Set parameters:
  - **Score threshold:** Minimum similarity score for matching replies.
  - **Embedding model:** Used to vectorize annotated text. Changing the model regenerates embeddings.
- Click **Save & Enable** to activate. The system will generate embeddings for all saved annotations.

---



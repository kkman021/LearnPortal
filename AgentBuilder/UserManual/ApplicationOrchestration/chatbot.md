---
sidebar_position: 1
sidebar_label: 'Chatbot'
hide_title: true
pagination_label: Chatbot
title: 'Building a Chatbot Application in AgentBuilder'
description: 'How to create and orchestrate chatbot applications in AgentBuilder for continuous dialogue scenarios.'
---

Conversational applications use a Q&A mode to engage in continuous dialogue with users.

---

## Applicable Scenarios
- Customer service
- Online education
- Healthcare
- Financial services

These applications help organizations improve efficiency, reduce costs, and enhance user experience.

---

## How to Orchestrate a Chatbot

- Chatbot supports prompts, variables, context, conversation opener, and next-step suggestions.

**Example: Interviewer Application**

- *Create Application*
  - Go to **Studio > CREATE APP > Create from Blank**.
  - Enter the application name, select **Chatbot** as the type, choose **Basic** for orchestration, and click **Create**.
  - ![Create Chatbot](https://docs.wise-paas.advantech.com/dataSource/resource/1723621444025145443.png)

- *Orchestrate Application*
  - After creation, you are redirected to the Orchestrate page.
  - ![Orchestrate Page](https://docs.wise-paas.advantech.com/dataSource/resource/1723621451686343698.png)
  - **Fill in Prompts:**
    - Prompts provide instructions and constraints for AI responses. You can insert variables (e.g., `{{input}}`), which are replaced by user input.
    - Use the built-in prompt generator to create suitable prompts.
    - ![Prompt Example](https://docs.wise-paas.advantech.com/dataSource/resource/1725346556896563002.png)

---



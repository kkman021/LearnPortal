---
sidebar_position: 8
sidebar_label: 'Moderation Tool'
hide_title: true
pagination_label: Moderation Tool
title: 'Moderation Tool in AgentBuilder'
description: 'How to enable and use content moderation features in AgentBuilder applications.'
---

Content moderation helps ensure content security, user experience, and compliance with legal requirements in AI applications.

---

## Enabling Content Moderation
- In chatbot applications, go to the orchestration page and select **ADD FEATURE > TOOLBOX > Content moderation**.
![Enable Content Moderation](https://docs.wise-paas.advantech.com/dataSource/resource/1723620683572675824.png)
![Content Moderation Toolbox](https://docs.wise-paas.advantech.com/dataSource/resource/1723620691471544724.png)

## Using the OpenAI Moderation API
- OpenAI and other LLM providers offer moderation models to block content related to violence, sex, or illegal activities.
- You can use the OpenAI Moderation API in AgentBuilder to review input or output and provide preset replies.
![OpenAI Moderation API](https://docs.wise-paas.advantech.com/dataSource/resource/1723620700554089667.png)

## Custom Keywords
- Developers can define sensitive keywords (e.g., "kill") to trigger moderation and return a default response like "The content is violating usage policies."
![Custom Keyword Moderation](https://docs.wise-paas.advantech.com/dataSource/resource/1723620714188364470.png)

## Moderation Extension
- Companies can implement custom sensitive word filtering by writing an API extension.
![Moderation Extension](https://docs.wise-paas.advantech.com/dataSource/resource/1723620726761508509.png)
- Example: Block queries about the US president's name and return a policy violation message.
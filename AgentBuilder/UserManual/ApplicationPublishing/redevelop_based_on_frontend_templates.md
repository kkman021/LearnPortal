---
sidebar_position: 7
sidebar_label: 'Re-Develop Based on Frontend Templates'
hide_title: true
pagination_label: Re-Develop Based on Frontend Templates
title: 'Re-Develop Based on Frontend Templates in AgentBuilder'
description: 'How to use and customize open source frontend templates for AgentBuilder applications.'
---

If you are developing new products or prototyping, you can quickly launch AI sites using AgentBuilder. AgentBuilder also encourages developers to freely create custom frontend applications. To support this, AgentBuilder provides:
- SDKs for quick API access in various languages
- WebApp Templates for each application type

WebApp Templates are open source under the MIT license. You can modify and deploy them to achieve all AgentBuilder capabilities or use them as reference code for your own app.

## How to Use WebApp Templates
- The fastest way is to click **Use this template** on GitHub (equivalent to forking a new repository).
- Configure your AgentBuilder App ID and API Key:
  ```js
  export const APP_ID = ''
  export const API_KEY = ''
  ```
- More configuration in `config/index.ts`:
  ```ts
  export const APP_INFO = {
    title: 'Chat APP',
    description: '',
    copyright: '',
    privacy_policy: '',
    default_language: 'en-US'
  }
  export const isShowPrompt = true
  export const promptTemplate = ''
  ```
- The App ID can be found in the App's URL (the long string is the unique App ID).
- Each WebApp Template includes a README with deployment instructions. Templates usually include a lightweight backend to keep API keys secure.

---



---
sidebar_position: 5
sidebar_label: 'Embedding in Websites'
hide_title: true
pagination_label: Embedding in Websites
title: 'Embedding AgentBuilder Applications in Websites'
description: 'How to embed AgentBuilder AI applications into business websites using iframe or script.'
---

AgentBuilder allows you to embed your AI application into your business website, enabling features like AI customer service and business knowledge Q&A with your data in minutes.

---

## How to Embed
- Click the **Embedded** button on the WebApp card.
- Copy the embedding code and paste it into your website where you want the AI app to appear.

### 1. Using `<iframe>`
- Copy the iframe code to the desired tag (e.g., `<div>`, `<section>`) on your website.
- ![Embed with iframe](https://docs.wise-paas.advantech.com/dataSource/resource/1727402130732499649.png)

### 2. Using `<script>`
- Copy the script code to the `<head>` or `<body>` tag of your website.
- ![Embed with script](https://docs.wise-paas.advantech.com/dataSource/resource/1736922225204504690.png)

#### Parameter Descriptions
| Parameter Name                | Value         | Required | Description                                                                                   |
|-------------------------------|--------------|----------|-----------------------------------------------------------------------------------------------|
| newConversation               | true         | false    | Start a new conversation.                                                                     |
| question                      | Hi           | false    | Auto-ask this question when the dialog opens.                                                 |
| showFullScreen                | true         | false    | Show chatbot full screen control buttons.                                                     |
| fullScreenShowHeaderBoxShadow | true         | false    | Show parent app header shadow in full screen.                                                 |
| hideHeader                    | true         | false    | Hide chatbot's top header in mobile mode.                                                     |
| variables                     | key: 'value' | false    | Default variable values for new conversations. Use `key:  hide: true, value: 'xxx' ` to hide. |
| theme                         | dark         | false    | Chatbot theme: light, dark, lightTransparent, darkTransparent.                                |
| lang                          | en-US        | false    | Chatbot language: en-US, zh-Hans, zh-Hant. Defaults to chatbot settings if not set.           |
| answerIframeStyle             | key: 'value' | false    | Custom styles for the answer iframe. Example: `width: "100%", height: "1200px"`.         |
| getCitation                   | true         | false    | Get citation info.                                                                            |

> **Note:** When embedding with iframe, use the above parameters to create the iframe link as needed.

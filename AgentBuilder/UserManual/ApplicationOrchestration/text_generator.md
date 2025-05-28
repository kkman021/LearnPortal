---
sidebar_position: 2
sidebar_label: 'Text Generator'
hide_title: true
pagination_label: Text Generator
title: 'Building a Text Generator Application in AgentBuilder'
description: 'How to create and orchestrate text generator applications in AgentBuilder for automated content creation.'
---

Text generators automatically create high-quality text based on user prompts. They can generate summaries, translations, and more.

---

## Applicable Scenarios
- News media
- Advertising
- SEO
- Marketing

Text generators provide efficient, rapid text creation, reducing labor costs and improving productivity.

---

## How to Orchestrate a Text Generator

- Supports prefix prompts, variables, context, and generating similar content.

**Example: Translation Application**

- *Create Application*
  - Go to **Studio > CREATE APP > Create from Blank**.
  - Select **Text Generator** as the type, enter a name, and click **Create**.
  - ![Create Text Generator](https://docs.wise-paas.advantech.com/dataSource/resource/1723621926247133157.png)

- *Orchestrate Application*
  - After creation, you are redirected to the Orchestration page.
  - ![Orchestrate Page](https://docs.wise-paas.advantech.com/dataSource/resource/1723622033514549271.png)
  - **Fill in Prefix Prompts:**
    - Prompts provide instructions and constraints for the AI's response. You can insert variables (e.g., `{{query}}`), which are replaced by user input.
    - Example prompt:
      ```
      Please translate the following text to English: {{query}}
      ```

---



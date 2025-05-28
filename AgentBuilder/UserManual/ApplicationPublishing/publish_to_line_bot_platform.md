---
sidebar_position: 8
sidebar_label: 'Publishing to LINE Bot Platform'
hide_title: true
pagination_label: Publishing to LINE Bot Platform
title: 'Publishing to LINE Bot Platform in AgentBuilder'
description: 'Instructions for publishing AgentBuilder applications to the LINE Bot platform.'
---

You can publish your AgentBuilder application to LINE. After publishing, users can chat with your bot in the LINE app.

---

## Step 1: Create a LINE Channel
- Go to the [LINE Developers Console](https://developers.line.biz/console/) and log in.
- On the Console home page, click **Create** and enter the provider name.
  - ![Create Provider](https://docs.wise-paas.advantech.com/dataSource/resource/1723629647975609328.png)
  - ![Provider List](https://docs.wise-paas.advantech.com/dataSource/resource/1723604943106293896.png)
- On the Providers page, click the **Channels** tab, then **Create a Messaging API channel** and configure it as per the official documentation.
  - ![Create Channel](https://docs.wise-paas.advantech.com/dataSource/resource/1723604952802242858.png)
  - ![Channel Config](https://docs.wise-paas.advantech.com/dataSource/resource/1723604959829579931.png)
- After creating the channel, go to the **Basic settings** page and copy the channel secret.
  - ![Channel Secret](https://docs.wise-paas.advantech.com/dataSource/resource/1723604968631215353.png)
- Go to the **Messaging API** tab, scroll to **Channel access token (long-lived)**, click **Issue**, and copy the generated token.
  - ![Channel Token](https://docs.wise-paas.advantech.com/dataSource/resource/1723604979829228802.png)
- In the **LINE Official Account features** section, find **Auto-reply messages** and click **Edit**.
  - ![Auto-reply Config](https://docs.wise-paas.advantech.com/dataSource/resource/1723604988800185858.png)

---



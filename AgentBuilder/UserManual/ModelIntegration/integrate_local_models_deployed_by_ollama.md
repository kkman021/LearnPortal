---
sidebar_position: 1
sidebar_label: 'Integrating Local Models Deployed by Ollama'
hide_title: true
pagination_label: Integrating Local Models Deployed by Ollama
title: 'Integrating Local Models Deployed by Ollama with AgentBuilder'
description: 'Guide to integrating and troubleshooting local models deployed by Ollama in AgentBuilder, including setup, configuration, and network access.'
---
Ollama is a local inference framework client that enables one-click deployment of large language models such as Llama 2, Mistral, and Llava. AgentBuilder supports accessing both inference and embedding capabilities of models deployed with Ollama.

---

## How to Download and Launch Ollama

- **Download Ollama**
  - Visit [https://ollama.com/download](https://ollama.com/download) to download the Ollama client for your operating system.

- **Run Ollama and Start a Model**
  - Open a terminal and run:
    ```
    ollama run llava
    ```
  - After launching, Ollama starts an API service on local port 11434, accessible at `http://localhost:11434`.
  - For other models, see the [Ollama Models Library](https://ollama.com/library).

---

## Integrating Ollama in AgentBuilder

- Go to **Settings > Model Providers > Ollama** in AgentBuilder.
- Fill in the following fields:
  - **Model name:** `llava`
  - **Base URL:** `http://<your-ollama-endpoint-domain>:11434`
    - For local deployments, use `http://localhost:11434`.
    - For Docker deployments, use your local network IP (e.g., `http://192.168.1.100:11434`) or Docker host IP (e.g., `http://172.17.0.1:11434`).
  - **Completion mode:** `Chat`
  - **Model context size:** `4096` (default)
  - **Upper bound for max tokens:** `4096` (default)
  - **Vision support:** `Yes` (if the model supports multimodal input, e.g., `llava`)
- Click **Save** to enable the model in your application.
- For embedding models, select "Text Embedding" as the model type.

![Ollama Model Provider Settings](https://docs.wise-paas.advantech.com/dataSource/resource/1727426571071517035.png)

---

## Using Ollama Models in Your Application

- Go to the **Prompt Eng.** page of your app.
- Select the `llava` model under the Ollama provider and configure the model parameters as needed.

![Using Ollama Model in App](https://docs.wise-paas.advantech.com/dataSource/resource/1727426770421132877.png)

---

## FAQ & Troubleshooting

- **Docker Deployment Error:**
  - If you see an error like:
    ```
    httpconnectionpool(host=127.0.0.1, port=11434): max retries exceeded with url:/cpi/chat (Caused by NewConnectionError: fail to establish a new connection: [Errno 111] Connection refused)
    ```
  - This means the Ollama service is not accessible from the Docker container. Expose the Ollama service to the network and use the host's IP address or `host.docker.internal`.

- **Setting Environment Variables:**
  - **macOS:**
    - Use `launchctl setenv OLLAMA_HOST "0.0.0.0"` and restart Ollama.
    - If needed, use `http://host.docker.internal:11434` as the endpoint.
  - **Linux (systemd):**
    - Edit the service: `systemctl edit ollama.service` and add:
      ```
      [Service]
      Environment="OLLAMA_HOST=0.0.0.0"
      ```
    - Reload and restart: `systemctl daemon-reload && systemctl restart ollama`
  - **Windows:**
    - Quit Ollama, set environment variables (`OLLAMA_HOST`, etc.) in the system settings, then restart Ollama from a new terminal.

- **Exposing Ollama on the Network:**
  - By default, Ollama binds to `127.0.0.1:11434`. Change the bind address with the `OLLAMA_HOST` environment variable to allow network access.

---



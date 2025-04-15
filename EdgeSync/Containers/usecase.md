---
sidebar_label: 'Quick Sample Case'
title: 'Quick Sample Case'
description: 'A case running with container'
sidebar_position: 5.3
hide_title: true

---

## Sample Scenario

A software developer needs to implement a chatbot for customer support. Using Advantech's LLM container, they deploy it with a few simple Docker commands. The container runs with allocated memory resources and optimized settings. When the developer tests the system with product queries, the LLM responds accurately and quickly. This approach allows the developer to focus on building the user interface rather than developing complex AI infrastructure from scratch.

## LLM in Advantech Container Catalog
The **[Advantech Container Catalog](https://dev-marketplace.advantech.com/en-us/containers?pageIndex=1)** provide a powerful LLM (Large Language Model) container. This container includes the latest natural language processing technology and can handle various language tasks such as text generation, semantic analysis, and machine translation.

## Usage Steps

1. **Download the Container**: 
   - Visit our Container Catalog website.
   - Search for the LLM container.
   - Download the container image using the provided link or command.
   ```sh
   docker pull advantech/llm-service:v1.0
   ```
   :::caution
   The actual image name may vary. Please refer to the **[Container Catalog](https://dev-marketplace.advantech.com/en-us/containers?pageIndex=1)** for the latest version.
   :::

2. **Deploy the Container**: 
   - Use Docker to deploy the LLM container on your device.
   ```sh
   docker run -d --name llm_container advantech/llm-service:v1.0
   ```

3. **Configure the Environment**: 
   - Set up environment variables and resource allocation based on your requirements:
   
   > **Notice**: For detailed environment configurations and available parameters, please refer to the specific container documentation in the Container Catalog. Different container versions may have different configuration options.

   Common environment variables:
   - `LLM_MEMORY_LIMIT`: Memory limit for the container (recommended: 1g to 4g)
   - `LLM_MODEL_PATH`: Custom model path (optional)
   - `LLM_MAX_TOKENS`: Maximum tokens per request (default: 2048)

   Example deployment with environment variables:
   ```sh
   docker run -d \
     --name llm_container \
     -m 2g \
     -e LLM_MAX_TOKENS=4096 \
     -p 8080:8080 \
     advantech/llm-service:v1.0
   ```

4. **Run the Application**: 
   - Start the container and interact with the LLM through its API service.
   - The service runs on port 8080 by default.
   
   Example API interaction:
   ```sh
   curl -X POST http://localhost:8080/api/v1/generate \
     -H "Content-Type: application/json" \
     -d '{"text": "Hello, world!"}'
   ```

   Example successful response:
   ```json
   {
     "generated_text": "Hello! How can I assist you today?",
     "status": "success",
     "model": "llm-v1",
     "processing_time": "0.5s"
   }
   ```

   Possible error responses:
   ```json
   {
     "error": "Service unavailable",
     "status": "error",
     "code": 503
   }
   ```

## Extending the Docker Image

Developers can extend this Docker image to create their own LLM applications with a web-based user interface (Web UI) for easier interaction. Here's how to create and package a custom application:

1. **Create a Python Web Application**:
   Create a file named `app.py`:
   ```python
   from flask import Flask, request, jsonify
   import requests
   import json
   import os

   app = Flask(__name__)

   LLM_API_URL = os.getenv('LLM_API_URL', 'http://localhost:8080/api/v1/generate')

   @app.route('/generate', methods=['POST'])
   def generate_text():
       data = request.json
       prompt = data.get('text')
       if not prompt:
           return jsonify({"error": "No text provided"}), 400

       headers = {
           "Content-Type": "application/json"
       }
       payload = {"text": prompt}
       
       response = requests.post(
           LLM_API_URL,
           headers=headers,
           data=json.dumps(payload),
           timeout=30
       )
       
       return jsonify(response.json())

   if __name__ == "__main__":
       port = int(os.getenv('PORT', 5000))
       app.run(host='0.0.0.0', port=port)
   ```

2. **Create Requirements File**:
   Create a file named `requirements.txt`:
   ```
   flask>=2.0.0
   requests>=2.26.0
   ```

3. **Create a Dockerfile**:
   ```Dockerfile
   FROM advantech/llm-service:v1.0

   WORKDIR /app

   # Install dependencies first to leverage Docker cache
   COPY requirements.txt /app/
   RUN pip install --no-cache-dir -r requirements.txt

   # Copy application code
   COPY app.py /app/

   # Set environment variables
   ENV PORT=5000
   ENV LLM_API_URL=http://localhost:8080/api/v1/generate

   # Expose the port
   EXPOSE 5000

   CMD ["python", "app.py"]
   ```

4. **Build and Run the Custom Image**:
   ```sh
   docker build -t custom-llm-webui:v1.0 .
   docker run -d \
     -p 5000:5000 \
     --name custom-llm-webui \
     custom-llm-webui:v1.0
   ```
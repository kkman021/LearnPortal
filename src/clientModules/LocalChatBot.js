import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Only execute on client-side and if the document is ready
if (ExecutionEnvironment.canUseDOM) {
  // Add n8n chat CSS
  const linkElement = document.createElement('link');
  linkElement.rel = 'stylesheet';
  linkElement.href = 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/style.css';
  document.head.appendChild(linkElement);
  
  // Add n8n chat script
  const script = document.createElement('script');
  script.type = 'module';
  script.innerHTML = `
    import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

    createChat({
      webhookUrl: 'http://localhost:5678/webhook/0ddbf76c-dac5-44e8-98ec-1ef2d49d50f3/chat'
    });
  `;
  document.body.appendChild(script);
}
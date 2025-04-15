import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Only execute on client-side and if the document is ready
if (ExecutionEnvironment.canUseDOM) {
  // Load the AgentBuilder script
  const script = document.createElement('script');
  script.src = 'https://app-agentbuilder-aiagent-ensaas.wise-paas.advantech.com.tw/embed.min.js';
  script.id = 'RWn9owrOi8XQZX25';
  script.onload = () => {
    // Initialize the chatbot after the script has loaded
    window.agentBuilderChatBot.render({
      token: 'RWn9owrOi8XQZX25',
      baseUrl: 'https://app-agentbuilder-aiagent-ensaas.wise-paas.advantech.com.tw',
      newConversation: true,
      question: 'Hi',
      showFullScreen: true,
      fullScreenShowHeaderBoxShadow: true,
      hideHeader: true,
      theme: 'light',
      lang: 'en-US',
      answerIframeStyle: {width: '100%', height: '100%'},
      getCitation: true,
      getSystemModelSettings: true,
    });

    // Ensure close icon is displayed after render
    setTimeout(() => {
      const closeIcon = document.getElementById("AgentBuilder-chatbot-window-close-icon");
      if (closeIcon) {
        closeIcon.style.display = "block";
        closeIcon.style.top = "5px";
      }
    }, 3000); // Wait for 1 second to ensure the element is created
  };
  document.body.appendChild(script);
}
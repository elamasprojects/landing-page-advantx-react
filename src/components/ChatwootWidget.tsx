/*

import { useEffect } from 'react';

declare global {
  interface Window {
    chatwootSDK: {
      run: (config: {
        websiteToken: string;
        baseUrl: string;
      }) => void;
    };
    $chatwoot: {
      on: (event: string, callback: (data: any) => void) => void;
    };
  }
}

const ChatwootWidget = () => {
  useEffect(() => {
    const BASE_URL = "https://devchatwoot.ezequiellamas.com";
    const WEBSITE_TOKEN = '9NbC3Ku7z5U4E8TtSzdryPwQ';
    const N8N_WEBHOOK_URL = 'https://devwebhookn8n.ezequiellamas.com/webhook/d1be5928-d6ee-45d4-858b-126edf0e7582';

    // Function to send data to n8n webhook
    const sendToN8N = async (eventData: any) => {
      try {
        const payload = {
          timestamp: new Date().toISOString(),
          event: eventData.type || 'chat_event',
          data: eventData,
          source: 'chatwoot_widget',
          userAgent: navigator.userAgent,
          url: window.location.href
        };

        const response = await fetch(N8N_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          console.error('Failed to send data to n8n:', response.status);
        }
      } catch (error) {
        console.error('Error sending data to n8n:', error);
      }
    };

    // Check if the script is already loaded
    const existingScript = document.querySelector('script[src*="sdk.js"]');
    
    if (existingScript) {
      // If script already exists, just run the SDK
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: WEBSITE_TOKEN,
          baseUrl: BASE_URL
        });
        
        // Set up event listeners for existing widget
        setTimeout(() => {
          if (window.$chatwoot) {
            setupEventListeners();
          }
        }, 1000);
      }
      return;
    }

    // Create and load the script
    const script = document.createElement('script');
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;
    
    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: WEBSITE_TOKEN,
          baseUrl: BASE_URL
        });
        
        // Set up event listeners after SDK is loaded
        setTimeout(() => {
          if (window.$chatwoot) {
            setupEventListeners();
          }
        }, 1000);
      }
    };

    // Function to set up event listeners
    const setupEventListeners = () => {
      if (window.$chatwoot) {
        // Listen for conversation started
        window.$chatwoot.on('conversation:started', (data) => {
          sendToN8N({
            type: 'conversation_started',
            ...data
          });
        });

        // Listen for message sent
        window.$chatwoot.on('message:sent', (data) => {
          sendToN8N({
            type: 'message_sent',
            ...data
          });
        });

        // Listen for message received
        window.$chatwoot.on('message:received', (data) => {
          sendToN8N({
            type: 'message_received',
            ...data
          });
        });

        // Listen for conversation ended
        window.$chatwoot.on('conversation:ended', (data) => {
          sendToN8N({
            type: 'conversation_ended',
            ...data
          });
        });

        // Listen for widget opened
        window.$chatwoot.on('widget:opened', (data) => {
          sendToN8N({
            type: 'widget_opened',
            ...data
          });
        });

        // Listen for widget closed
        window.$chatwoot.on('widget:closed', (data) => {
          sendToN8N({
            type: 'widget_closed',
            ...data
          });
        });
      }
    };

    // Append the script to the document head
    document.head.appendChild(script);

    // Cleanup function to remove the script if component unmounts
    return () => {
      const scriptToRemove = document.querySelector('script[src*="sdk.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return null; // This component doesn't render anything visible
};

export default ChatwootWidget;

*/
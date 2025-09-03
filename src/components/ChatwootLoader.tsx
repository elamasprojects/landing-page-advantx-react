import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: {
        websiteToken: string;
        baseUrl: string;
      }) => void;
    };
  }
}

export default function ChatwootLoader() {
  useEffect(() => {
    const BASE_URL = "https://devchatwoot.ezequiellamas.com";
    const s = document.createElement("script");
    s.src = `${BASE_URL}/packs/js/sdk.js`;
    s.async = true; s.defer = true;
    s.onload = () => {
      window.chatwootSDK?.run({
        websiteToken: "9NbC3Ku7z5U4E8TtSzdryPwQ",
        baseUrl: BASE_URL,
      });
    };
    document.body.appendChild(s);
    return () => { document.body.removeChild(s); };
  }, []);
  return null;
}
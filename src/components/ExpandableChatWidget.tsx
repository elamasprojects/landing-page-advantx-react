"use client";

import { useState, FormEvent } from "react";
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";
import { AIInput } from "@/components/ui/ai-input";
import { ExpandableChat, ExpandableChatHeader, ExpandableChatBody, ExpandableChatFooter } from "@/components/ui/expandable-chat";
import { ChatMessageList } from "@/components/ui/chat-message-list";
import { useToast } from "@/hooks/use-toast";
interface Message {
  id: number;
  content: string;
  sender: "user" | "ai";
  timestamp?: Date;
}
export function ExpandableChatWidget() {
  const [messages, setMessages] = useState<Message[]>([{
    id: 1,
    content: "Hola!! Soy el asistente de IA de AdvantX. En qué te puedo ayudar hoy?",
    sender: "ai"
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleAISubmit = async (value: string) => {
    if (!value.trim()) return;
    const userMessage: Message = {
      id: messages.length + 1,
      content: value,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    try {
      // Send message to webhook
      const response = await fetch('https://koinluzxltubzxwdolzt.supabase.co/functions/v1/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvaW5sdXp4bHR1Ynp4d2RvbHp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MTgyMjksImV4cCI6MjA2NjM5NDIyOX0.tJoPy5HGxUMFh21AREn7Vc4DapV0oFiEGIDb2rHo3Pc'}`
        },
        body: JSON.stringify({
          message: value,
          timestamp: new Date().toISOString()
        })
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      // Read webhook reply from the edge function response
      const result = await response.json().catch(() => ({} as any));
      const reply: string = (result?.reply ?? result?.message ?? result?.text ?? "").toString();
      const fallback = "Gracias por tu mensaje. Te contactaremos pronto.";
      const aiResponse: Message = {
        id: messages.length + 2,
        content: reply && reply.trim().length > 0 ? reply : fallback,
        sender: "ai",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  const handleAttachFile = () => {
    // File attachment functionality
  };
  const handleMicrophoneClick = () => {
    // Voice recording functionality
  };
  return <ExpandableChat size="lg" position="bottom-right" icon={<img src="/avatar.png" alt="AI" className="h-6 w-6 rounded-full" />}>
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chatea con la IA de AdvantX </h1>
        <p className="text-sm text-muted-foreground">Averiguá cómo te podemos ayudar!</p>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map(message => <ChatBubble key={message.id} variant={message.sender === "user" ? "sent" : "received"}>
              <ChatBubbleAvatar className="h-8 w-8 shrink-0" src={message.sender === "user" ? "/lovable-uploads/2079ad8f-d5f2-46a7-b6c4-3883b4c97f5a.png" : "/avatar.png"} fallback={message.sender === "user" ? "US" : "AI"} />
              <ChatBubbleMessage variant={message.sender === "user" ? "sent" : "received"}>
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>)}

          {isLoading && <ChatBubble variant="received">
              <ChatBubbleAvatar className="h-8 w-8 shrink-0" src="/avatar.png" fallback="AI" />
              <ChatBubbleMessage isLoading />
            </ChatBubble>}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <AIInput 
          placeholder="Escribe tu mensaje..." 
          onSubmit={handleAISubmit}
          className="py-0"
        />
      </ExpandableChatFooter>
    </ExpandableChat>;
}
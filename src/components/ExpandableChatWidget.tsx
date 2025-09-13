"use client";

import { useState, FormEvent } from "react";
import { Send, Bot, Paperclip, Mic, CornerDownLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from "@/components/ui/chat-bubble";
import { ChatInput } from "@/components/ui/chat-input";
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
    content: "¡Hola! Soy tu asistente de IA. ¿En qué puedo ayudarte hoy?",
    sender: "ai"
  }]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
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
          message: input,
          timestamp: new Date().toISOString()
        })
      });
      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Add AI response
      const aiResponse: Message = {
        id: messages.length + 2,
        content: "Gracias por tu mensaje. Te contactaremos pronto.",
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
  return <ExpandableChat size="lg" position="bottom-right" icon={<Bot className="h-6 w-6" />}>
      <ExpandableChatHeader className="flex-col text-center justify-center">
        <h1 className="text-xl font-semibold">Chatea con la IA de AdvantX </h1>
        <p className="text-sm text-muted-foreground">Averiguá cómo te podemos ayudar!</p>
      </ExpandableChatHeader>

      <ExpandableChatBody>
        <ChatMessageList>
          {messages.map(message => <ChatBubble key={message.id} variant={message.sender === "user" ? "sent" : "received"}>
              <ChatBubbleAvatar className="h-8 w-8 shrink-0" src={message.sender === "user" ? "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&q=80&crop=faces&fit=crop" : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop"} fallback={message.sender === "user" ? "US" : "AI"} />
              <ChatBubbleMessage variant={message.sender === "user" ? "sent" : "received"}>
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>)}

          {isLoading && <ChatBubble variant="received">
              <ChatBubbleAvatar className="h-8 w-8 shrink-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&q=80&crop=faces&fit=crop" fallback="AI" />
              <ChatBubbleMessage isLoading />
            </ChatBubble>}
        </ChatMessageList>
      </ExpandableChatBody>

      <ExpandableChatFooter>
        <form onSubmit={handleSubmit} className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1">
          <ChatInput value={input} onChange={e => setInput(e.target.value)} placeholder="Escribe tu mensaje..." className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0" />
          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex">
              <Button variant="ghost" size="icon" type="button" onClick={handleAttachFile}>
                <Paperclip className="size-4" />
              </Button>

              <Button variant="ghost" size="icon" type="button" onClick={handleMicrophoneClick}>
                <Mic className="size-4" />
              </Button>
            </div>
            <Button type="submit" size="sm" className="ml-auto gap-1.5" disabled={isLoading || !input.trim()}>
              Enviar
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </ExpandableChatFooter>
    </ExpandableChat>;
}
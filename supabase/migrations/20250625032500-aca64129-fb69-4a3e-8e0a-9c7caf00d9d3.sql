
-- Crear tabla para suscripciones al newsletter
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  is_active BOOLEAN NOT NULL DEFAULT true
);

-- Crear tabla para mensajes de contacto
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- Habilitar RLS (Row Level Security) para ambas tablas
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Crear políticas para permitir inserción pública (formularios públicos)
CREATE POLICY "Allow public newsletter subscriptions" 
  ON public.newsletter_subscriptions 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

CREATE POLICY "Allow public contact messages" 
  ON public.contact_messages 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

-- Crear políticas para lectura solo por administradores autenticados
CREATE POLICY "Admins can view newsletter subscriptions" 
  ON public.newsletter_subscriptions 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can view contact messages" 
  ON public.contact_messages 
  FOR SELECT 
  USING (auth.role() = 'authenticated');

-- Crear índices para optimizar consultas
CREATE INDEX idx_newsletter_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_contact_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX idx_contact_status ON public.contact_messages(status);

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { message, timestamp } = await req.json()
    
    if (!message) {
      return new Response(
        JSON.stringify({ error: 'Message is required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Get webhook URL from secrets
    const webhookUrl = Deno.env.get('CHAT_WEBHOOK_URL')
    
    if (!webhookUrl) {
      console.error('CHAT_WEBHOOK_URL not configured')
      return new Response(
        JSON.stringify({ error: 'Webhook not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Send message to webhook
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        timestamp: timestamp || new Date().toISOString(),
        source: 'website_chat'
      })
    })

    if (!webhookResponse.ok) {
      console.error('Webhook failed:', webhookResponse.status, webhookResponse.statusText)
      throw new Error('Failed to send to webhook')
    }

    // Try to forward the webhook's reply back to the client
    const contentType = webhookResponse.headers.get('content-type') || ''
    let reply: string | null = null
    let data: unknown = null
    try {
      if (contentType.includes('application/json')) {
        data = await webhookResponse.json()
        const d = data as Record<string, unknown>
        const possible = [d?.reply, d?.message, d?.text]
        const firstString = possible.find(v => typeof v === 'string') as string | undefined
        reply = firstString ?? JSON.stringify(d)
      } else {
        reply = await webhookResponse.text()
      }
    } catch (_e) {
      try {
        reply = await webhookResponse.text()
      } catch {
        reply = null
      }
    }

    return new Response(
      JSON.stringify({ success: true, reply, data }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error in send-message function:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
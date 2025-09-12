import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Phone, Mail, CheckCircle, AlertTriangle, Clock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const {
    toast
  } = useToast();

  // Load Calendly embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    try {
      const {
        error
      } = await supabase.from('contact_messages').insert([{
        name: formData.name,
        email: formData.email,
        company: formData.company || null,
        phone: formData.phone || null,
        message: formData.message
      }]);
      if (error) {
        console.error('Error submitting contact form:', error);
        toast({
          title: "Error",
          description: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "¡Mensaje enviado!",
          description: "Te contactaremos en las próximas 24 horas."
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar tu mensaje. Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);
    try {
      const {
        error
      } = await supabase.from('newsletter_subscriptions').insert([{
        email: newsletterEmail
      }]);
      if (error) {
        if (error.code === '23505') {
          // Unique constraint violation
          toast({
            title: "Ya estás suscrito",
            description: "Este email ya está suscrito a nuestro newsletter.",
            variant: "destructive"
          });
        } else {
          console.error('Error subscribing to newsletter:', error);
          toast({
            title: "Error",
            description: "Hubo un problema al suscribirte. Por favor intenta nuevamente.",
            variant: "destructive"
          });
        }
      } else {
        toast({
          title: "¡Suscripción exitosa!",
          description: "Te has suscrito correctamente a nuestro newsletter."
        });
        setNewsletterEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al suscribirte. Por favor intenta nuevamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491157388695', '_blank');
  };
  return <>
      {/* Agenda Section with Calendly */}
      <section id="agenda" className="py-20 bg-gradient-to-br from-primary-900 to-purple-900 dark:from-primary-950 dark:to-purple-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Agenda tu
              <span className="bg-gradient-to-r from-primary-300 to-purple-300 bg-clip-text text-transparent"> consultoría gratuita</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              En 20 minutos, identificaremos oportunidades de automatización que pueden ahorrar miles de dólares a tu empresa
            </p>
          </div>

          {/* Calendly Inline Embed */}
          <div className="flex justify-center mb-10">
            <div
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/advant_x/ezequiellamas?hide_gdpr_banner=1&primary_color=7806ea"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          {/* Notice: icon above, centered text, no background box */}
          <div className="mb-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center mb-4" aria-hidden="true">
                <AlertTriangle className="h-8 w-8 text-amber-400" />
              </div>
              <p className="text-base md:text-lg leading-relaxed text-white/90">
                Lo peor que puede pasar en esta llamada es que te lleves un diagrama claro de los procesos y automatizaciones aplicables a tu negocio para que los uses, ya sea con nosotros, con otra empresa o por tu cuenta.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-white/90 mt-3">
                No podemos garantizar que siga siendo así, pero por ahora es gratis y sin compromiso.
              </p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
            </div>
          </div>

          {/* WhatsApp CTA below */}
          <div className="text-center">
            <p className="text-gray-300 mb-4">O también nos puedes contactar por Whatsapp</p>
            <Button onClick={handleWhatsAppClick} className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700">
              <Phone className="w-4 h-4" />
              Abrir WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section (hidden for now) */}
      {false && (
      <section id="contacto" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              ¿Listo para
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Transformar</span> tu Empresa?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Contáctanos hoy y descubre cómo la automatización con IA puede revolucionar tu negocio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="dark:bg-gray-800 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 dark:text-gray-100">
                  <MessageCircle className="w-6 h-6 text-primary-600" />
                  Envíanos un Mensaje
                </CardTitle>
                <CardDescription className="dark:text-gray-300">
                  Te responderemos en menos de 24 horas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="dark:text-gray-200">Nombre *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="dark:text-gray-200">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company" className="dark:text-gray-200">Empresa</Label>
                      <Input id="company" name="company" value={formData.company} onChange={handleInputChange} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="dark:text-gray-200">Teléfono</Label>
                      <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} className="mt-1 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="dark:text-gray-200">Mensaje *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Cuéntanos sobre tu proyecto o necesidades de automatización..." required className="mt-1 min-h-[120px] dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
                  </div>

                  <Button type="submit" className="w-full bg-primary-600 hover:bg-primary-700" size="lg" disabled={isSubmittingContact}>
                    {isSubmittingContact ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="dark:bg-gray-800 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="dark:text-gray-100">Información de Contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span className="dark:text-gray-300">contacto@advantx.co</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span className="dark:text-gray-300">+54 9 11 5738-8695</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="dark:text-gray-300">Lun - Vie: 9:00 AM - 6:00 PM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 border-primary-200 dark:border-primary-800">
                <CardHeader>
                  <CardTitle className="text-primary-800 dark:text-primary-200">¿Por qué elegirnos?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm dark:text-gray-300">Consultoría gratuita sin compromiso</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm dark:text-gray-300">ROI garantizado en 90 días</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm dark:text-gray-300">Soporte técnico 24/7</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    <span className="text-sm dark:text-gray-300">Implementación en semanas</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Newsletter Subscription moved to end of page */}
      {false && (
      <section className="py-16 bg-primary-600 dark:bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Recibe los últimos insights sobre automatización e IA directamente en tu inbox
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Tu email" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} required className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300 dark:bg-gray-700 dark:text-white" />
            <button type="submit" disabled={isSubmittingNewsletter} className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50">
              {isSubmittingNewsletter ? 'Suscribiendo...' : 'Suscribirse'}
            </button>
          </form>
        </div>
      </section>
      )}
    </>;
};
export default ContactCTA;
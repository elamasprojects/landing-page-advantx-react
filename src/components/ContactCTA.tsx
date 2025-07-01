import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, MessageCircle, Phone, Mail, Clock, CheckCircle } from 'lucide-react';
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

  // Load Cal.com embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://app.cal.com"});
      Cal.ns["30min"]("ui", {"theme":"dark","hideEventTypeDetails":true,"layout":"month_view"});
    `;
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
    window.open('https://wa.me/5491162379365', '_blank');
  };
  return <>
      {/* Agenda Section */}
      <section id="agenda" className="py-20 bg-gradient-to-br from-primary-900 to-purple-900 dark:from-primary-950 dark:to-purple-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Agenda tu Consultoría
              <span className="bg-gradient-to-r from-primary-300 to-purple-300 bg-clip-text text-transparent"> Gratuita</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              En 30 minutos identificaremos oportunidades de automatización que pueden ahorrar miles de dólares a tu empresa
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Benefits */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Análisis Gratuito</h3>
                  <p className="text-gray-300">Evaluación completa de tus procesos sin costo</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">30 Minutos</h3>
                  <p className="text-gray-300">Sesión enfocada y productiva</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-2 rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Horario Flexible</h3>
                  <p className="text-gray-300">Disponible de lunes a viernes</p>
                </div>
              </div>
            </div>

            {/* Scheduling Options */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Calendar className="w-6 h-6" />
                    Videollamada
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Reunión virtual por Zoom o Google Meet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700" data-cal-link="advantx/30min" data-cal-namespace="30min" data-cal-config='{"layout":"month_view","theme":"dark"}'>
                    Agendar Videollamada
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Phone className="w-6 h-6" />
                    WhatsApp
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Comunicación directa por WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" onClick={handleWhatsAppClick} className="w-full border-green text-zinc-50 bg-green-700 hover:bg-green-600 text-center rounded-md">
                    Contactar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                    <span className="dark:text-gray-300">contacto@advantx.com</span>
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

      {/* Newsletter Subscription */}
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
    </>;
};
export default ContactCTA;
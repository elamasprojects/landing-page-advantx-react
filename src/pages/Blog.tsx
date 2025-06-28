import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Blog = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingNewsletter(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: newsletterEmail }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Ya estás suscrito",
            description: "Este email ya está suscrito a nuestro newsletter.",
            variant: "destructive",
          });
        } else {
          console.error('Error subscribing to newsletter:', error);
          toast({
            title: "Error",
            description: "Hubo un problema al suscribirte. Por favor intenta nuevamente.",
            variant: "destructive",
          });
        }
      } else {
        toast({
          title: "¡Suscripción exitosa!",
          description: "Te has suscrito correctamente a nuestro newsletter.",
        });
        setNewsletterEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al suscribirte. Por favor intenta nuevamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Agentes de Voz con IA: El Futuro de las Ventas Automatizadas",
      excerpt: "Descubre cómo los agentes de voz impulsados por inteligencia artificial están revolucionando la prospección de clientes y las llamadas de ventas, aumentando las conversiones hasta un 300%.",
      author: "Juan Cruz",
      date: "2025-06-15",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Tendencias",
      content: "Los agentes de voz con IA están transformando radicalmente el panorama de las ventas B2B. Estos sistemas pueden realizar cientos de llamadas por día, calificar leads automáticamente y agendar reuniones de alta calidad sin intervención humana."
    },
    {
      id: 2,
      title: "AI Setter: Cómo Automatizamos la Prospección de Leads para una Startup",
      excerpt: "Caso de estudio completo: cómo implementamos un sistema de AI Setter que generó 50+ reuniones calificadas por mes para una startup tecnológica, reduciendo el costo por lead en un 70%.",
      author: "Ezequiel Lamas",
      date: "2025-05-20",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      category: "Casos de Éxito",
      content: "Una startup de SaaS logró escalar su proceso de prospección de 10 a 500+ contactos semanales implementando nuestro sistema AI Setter. El ROI fue del 400% en los primeros 3 meses."
    },
    {
      id: 3,
      title: "Chatbots vs Agentes de Voz: ¿Cuál Elegir para Tu Negocio?",
      excerpt: "Análisis detallado de las ventajas y desventajas entre chatbots tradicionales y los nuevos agentes de voz con IA. Incluye casos de uso, costos y métricas de conversión reales.",
      author: "Juan Cruz",
      date: "2025-04-18",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Comparativas",
      content: "Mientras los chatbots son excelentes para respuestas rápidas y soporte 24/7, los agentes de voz brillan en conversaciones complejas de ventas y seguimiento personalizado de leads."
    },
    {
      id: 4,
      title: "ROI Comprobado: Métricas Reales de Automatización con IA",
      excerpt: "Datos concretos de 15 implementaciones: tiempo de recuperación de inversión, aumento en conversiones, reducción de costos operativos y mejora en satisfacción del cliente.",
      author: "Equipo AdvantX",
      date: "2025-03-25",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Análisis",
      content: "Nuestros clientes experimentan en promedio un ROI del 320% en los primeros 6 meses, con una reducción del 60% en costos de adquisición de clientes y un aumento del 40% en la tasa de conversión."
    },
    {
      id: 5,
      title: "Implementación de Agentes de IA: Guía Paso a Paso",
      excerpt: "Tutorial completo para implementar agentes de IA en tu empresa: desde la planificación inicial hasta la medición de resultados. Incluye checklist descargable y mejores prácticas.",
      author: "Ezequiel Lamas",
      date: "2025-02-28",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Guías",
      content: "La implementación exitosa de agentes de IA requiere una planificación cuidadosa. Cubrimos desde la selección de casos de uso hasta la integración con sistemas existentes y el entrenamiento del equipo."
    },
    {
      id: 6,
      title: "Seguridad y Privacidad en Agentes de IA Conversacionales",
      excerpt: "Mejores prácticas para mantener la seguridad de datos sensibles cuando implementas agentes de IA que manejan información confidencial de clientes y procesos de negocio críticos.",
      author: "Equipo AdvantX",
      date: "2025-01-15",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Seguridad",
      content: "La seguridad no es opcional cuando se trata de IA empresarial. Implementamos protocolos de encriptación end-to-end, auditorías de acceso y cumplimiento con regulaciones internacionales de privacidad."
    }
  ];

  const categories = ["Todos", "Tendencias", "Casos de Éxito", "Guías", "Análisis", "Comparativas", "Seguridad"];

  return (
    <div className="min-h-screen dark:bg-gray-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-600 to-purple-700 dark:from-primary-800 dark:to-purple-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blog de
            <span className="bg-gradient-to-r from-primary-200 to-purple-200 bg-clip-text text-transparent"> AdvantX</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Insights, casos de éxito y las últimas tendencias en automatización empresarial con inteligencia artificial
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors
                         bg-gray-100 text-gray-700 hover:bg-primary-100 hover:text-primary-700
                         dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-800 dark:hover:text-primary-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer dark:bg-gray-800 dark:border-gray-700">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-800 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="dark:text-gray-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <input
              type="email"
              placeholder="Tu email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300 dark:bg-gray-700 dark:text-white"
            />
            <button 
              type="submit"
              disabled={isSubmittingNewsletter}
              className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
            >
              {isSubmittingNewsletter ? 'Suscribiendo...' : 'Suscribirse'}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

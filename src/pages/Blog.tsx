
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
      title: "El Futuro de la Automatización con IA en las Empresas",
      excerpt: "Descubre cómo la inteligencia artificial está transformando los procesos empresariales y qué esperar en los próximos años.",
      author: "Equipo AdvantX",
      date: "2024-01-15",
      readTime: "5 min",
      image: "/placeholder.svg",
      category: "Tendencias"
    },
    {
      id: 2,
      title: "Casos de Éxito: Automatización de Procesos de RR.HH.",
      excerpt: "Conoce cómo empresas líderes han optimizado sus departamentos de recursos humanos con nuestras soluciones de IA.",
      author: "María González",
      date: "2024-01-12",
      readTime: "7 min",
      image: "/placeholder.svg",
      category: "Casos de Éxito"
    },
    {
      id: 3,
      title: "Guía Completa: Implementación de Chatbots Inteligentes",
      excerpt: "Todo lo que necesitas saber para implementar chatbots con IA en tu empresa y mejorar la atención al cliente.",
      author: "Carlos Rodríguez",
      date: "2024-01-10",
      readTime: "10 min",
      image: "/placeholder.svg",
      category: "Guías"
    },
    {
      id: 4,
      title: "ROI de la Automatización: Métricas que Importan",
      excerpt: "Aprende a medir el retorno de inversión de tus proyectos de automatización y justificar nuevas implementaciones.",
      author: "Ana Martínez",
      date: "2024-01-08",
      readTime: "6 min",
      image: "/placeholder.svg",
      category: "Análisis"
    },
    {
      id: 5,
      title: "Inteligencia Artificial vs. Automatización Tradicional",
      excerpt: "Comparamos las ventajas de la IA moderna frente a los métodos tradicionales de automatización empresarial.",
      author: "Equipo AdvantX",
      date: "2024-01-05",
      readTime: "8 min",
      image: "/placeholder.svg",
      category: "Comparativas"
    },
    {
      id: 6,
      title: "Seguridad en la Era de la IA Empresarial",
      excerpt: "Mejores prácticas para mantener la seguridad de tus datos mientras implementas soluciones de inteligencia artificial.",
      author: "Roberto Silva",
      date: "2024-01-03",
      readTime: "12 min",
      image: "/placeholder.svg",
      category: "Seguridad"
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
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-t-lg"></div>
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

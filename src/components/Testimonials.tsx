
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import LogoCarousel from './LogoCarousel';

const Testimonials = () => {
  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechStart Solutions",
      content: "AutomateAI transformó completamente nuestros procesos. Ahorramos 40 horas semanales y aumentamos nuestra productividad en un 300%. La inversión se pagó en solo 3 meses.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "Carlos Ruiz",
      role: "Director de Operaciones, RetailMax",
      content: "La automatización de nuestro servicio al cliente fue increíble. Ahora atendemos 10x más consultas con la mitad del personal, y la satisfacción del cliente aumentó significativamente.",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Ana Martínez",
      role: "Gerente General, FinanceFlow",
      content: "Implementaron un sistema de procesamiento de documentos que revolucionó nuestra empresa. Lo que antes tomaba días, ahora se hace en minutos. Excelente equipo y soporte.",
      rating: 5,
      avatar: "AM"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 dark:from-slate-900 dark:to-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Lo que dicen nuestros
            <span className="bg-gradient-to-r from-primary-300 to-purple-300 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent"> Clientes</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Empresas de todo el mundo confían en nuestras soluciones de automatización
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm border-white/20 dark:border-slate-700 hover:bg-white/15 dark:hover:bg-slate-800/70 transition-all">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <Quote className="w-8 h-8 text-primary-300 dark:text-primary-400 mb-4" />
                
                <p className="text-gray-200 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary-600 dark:bg-primary-500 rounded-full flex items-center justify-center font-bold text-white mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logo Carousel */}
        <LogoCarousel />
      </div>
    </section>
  );
};

export default Testimonials;

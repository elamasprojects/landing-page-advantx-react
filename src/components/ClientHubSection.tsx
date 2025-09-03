import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ClientHubSection = () => {
  const benefits = [
    "Ve tu ROI mensual en tiempo real",
    "Accede a todos tus deliverables",
    "Programa reuniones cuando quieras",
    "Soporte 24/7 con IA"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-slate-900 dark:to-primary-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Content Column - 60% width (3/5) */}
          <div className="lg:col-span-3 order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6">
              🎯 Transparencia Total en Tu Proyecto de IA
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ve Exactamente Cómo Tu Inversión en IA 
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent"> Genera Resultados Reales</span>
            </h2>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Accede a tu dashboard exclusivo donde puedes monitorear el progreso, ROI y resultados de tu implementación de IA 24/7
            </p>

            {/* Main Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
              Cuando inviertes en transformación de IA, mereces ver exactamente qué está pasando. Nuestro Client Hub te da visibilidad completa de tu proyecto: desde el ROI que estás generando hasta cada milestone completado. Sin sorpresas, sin dudas.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button 
              onClick={() => window.location.href = '/client-hub'}
              className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Conocé más sobre Client Hub
            </Button>
          </div>

          {/* Image Column - 40% width (2/5) */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <div className="relative">
              <img
                src="/lovable-uploads/ee570630-9479-4413-b496-da2b68877236.png"
                alt="AdvantX Client Hub Dashboard - Monitor your AI implementation progress, ROI metrics, and project deliverables in real-time"
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200 dark:border-slate-700 hover:shadow-3xl transition-shadow duration-300"
                loading="lazy"
              />
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-primary-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientHubSection;
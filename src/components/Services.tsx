
import { Bot, BarChart3, Workflow, MessageSquare, FileText, Zap, Phone, Target, Globe, Smartphone } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Chatbots Inteligentes",
      description: "Automatización de atención al cliente 24/7 con IA conversacional avanzada que resuelve consultas complejas.",
      features: ["Procesamiento de lenguaje natural", "Integración multicanal", "Aprendizaje continuo"],
      badge: "Landing Page Bonificada"
    },
    {
      icon: Target,
      title: "AI Setter",
      description: "Un agente de IA que prospecta por vos y agenda llamadas de venta para tu negocio de forma completamente automatizada.",
      features: ["Prospección automática", "Calificación de leads", "Agenda de reuniones automática"],
      badge: "Landing Page Bonificada"
    },
    {
      icon: Phone,
      title: "Agentes de Voz",
      description: "Asistentes de IA conversacionales que pueden realizar llamadas automáticas y manejar interacciones de voz complejas.",
      features: ["Reconocimiento de voz avanzado", "Conversaciones naturales", "Integración telefónica"],
      badge: "Landing Page Bonificada"
    },
    {
      icon: FileText,
      title: "Procesamiento de Documentos",
      description: "Extracción y procesamiento automático de información de documentos con IA.",
      features: ["OCR inteligente", "Clasificación automática", "Validación de datos"]
    },
    {
      icon: Globe,
      title: "Landing Page",
      description: "Diseño y desarrollo de páginas de aterrizaje optimizadas para conversión con IA integrada.",
      features: ["Diseño responsive", "Optimización SEO", "Integración con chatbots"]
    },
    {
      icon: Smartphone,
      title: "Web App",
      description: "Desarrollo de aplicaciones web personalizadas con automatización e inteligencia artificial.",
      features: ["Interfaz intuitiva", "Integración de IA", "Escalabilidad completa"]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-slate-900 dark:to-primary-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent"> Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones de automatización con IA diseñadas para transformar tu negocio
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm hover:scale-105 relative">
              {service.badge && (
                <Badge variant="secondary" className="absolute top-3 right-3 z-10 text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  {service.badge}
                </Badge>
              )}
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-600 dark:from-primary-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 bg-primary-500 dark:bg-primary-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ¿Necesitas una solución personalizada?
          </p>
          <button 
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Consultar Solución Personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

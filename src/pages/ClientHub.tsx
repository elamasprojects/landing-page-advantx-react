import { Check, ArrowRight, Shield, Clock, DollarSign, BarChart3, Calendar, FolderOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Timeline } from '@/components/ui/timeline';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ClientHub = () => {
  const features = [
    {
      icon: BarChart3,
      title: "ROI En Vivo - Sin Estimaciones, Números Reales",
      description: "Cada minuto, calculamos exactamente cuánto dinero te está ahorrando la IA basado en tus empleados reales, horas ahorradas y costos operativos. No son proyecciones - son tus ahorros actuales.",
      example: "Ejemplo: Si tienes 20 empleados ahorrando 3 horas semanales a $35/hora, verás en tiempo real: $10,920 ahorrados este mes"
    },
    {
      icon: Clock,
      title: "Progreso del Proyecto - Paso a Paso",
      description: "Sabes exactamente en qué fase estás, qué sigue, y cuándo estará completado. Desde Setup hasta Go-Live, cada milestone visible.",
      phases: [
        { name: "Semana 1: Setup & Recolección de Info", status: "completed" },
        { name: "Semanas 2-3: Implementación & Desarrollo", status: "progress" },
        { name: "Semana 4: Testing & Go-Live", status: "upcoming" },
        { name: "Ongoing: Soporte & Optimización", status: "upcoming" }
      ]
    },
    {
      icon: DollarSign,
      title: "Historia de Pagos Clara",
      description: "Ve exactamente qué pagaste, cuándo vence lo siguiente y por qué servicios. Todo documentado, nada confuso."
    },
    {
      icon: Clock,
      title: "Soporte Instantáneo 24/7",
      description: "¿Pregunta sobre tu proyecto a las 2 AM? Nuestro AI Assistant tiene todas las respuestas sobre tu implementación, ROI y próximos pasos."
    },
    {
      icon: Calendar,
      title: "Scheduling Sin Fricción",
      description: "¿Necesitas una reunión? Un click y eliges el horario que te conviene. Sin emails de ida y vuelta."
    },
    {
      icon: FolderOpen,
      title: "Todos Tus Deliverables",
      description: "Acceso inmediato a documentación, entrenamientos, configuraciones y reportes. Tu biblioteca personal de la implementación."
    }
  ];

  const securityFeatures = [
    "Acceso exclusivo con credenciales únicas",
    "Auth seguro y encriptado con RLS policies",
    "Solo tú y tu equipo autorizado",
    "Respaldos automáticos"
  ];

  const steps = [
    "Firmamos el contrato → Recibes credenciales de acceso",
    "Día 1 → Tu dashboard está activo con info básica",
    "Cada día → Ve progreso actualizado y ROI en tiempo real",
    "24/7 → Acceso completo desde cualquier dispositivo"
  ];

  const faqs = [
    { question: "¿Hay costo adicional?", answer: "No, está incluido en tu implementación" },
    { question: "¿Funciona en móvil?", answer: "Sí, completamente responsive" },
    { question: "¿Mi equipo puede acceder?", answer: "Sí, múltiples usuarios permitidos" },
    { question: "¿Los datos son seguros?", answer: "Auth seguro y encriptado con RLS policies" }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-slate-900 dark:to-primary-900/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 via-purple-600/10 to-primary-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-8">
              🎯 Client Hub: Tu Portal de Proyecto, 100% personalizado
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-8">
              Finalmente, Un Proyecto de IA Donde{' '}
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
                Sabes Exactamente Qué Está Pasando
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              ¿Cansado de proyectos tecnológicos que son "cajas negras"? Con Client Hub, tienes control total y visibilidad 100% transparente de tu implementación de IA.
            </p>
          </div>
        </div>
      </section>

      {/* Dashboard Images Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-slate-700">
                <img 
                  src="/lovable-uploads/5633f4f3-c1ba-40fc-ac88-fb902ec792d5.png" 
                  alt="Dashboard Principal" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-slate-700">
                <img 
                  src="/lovable-uploads/41c83a3f-366e-497b-8828-1c5df8dfc1f6.png" 
                  alt="Centro de Ayuda" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-slate-700">
                <img 
                  src="/lovable-uploads/6df305a4-59b6-41f9-b5b4-145f9a844925.png" 
                  alt="Calendario" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-slate-700">
                <img 
                  src="/lovable-uploads/2079ad8f-d5f2-46a7-b6c4-3883b4c97f5a.png" 
                  alt="Perfil de Usuario" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Portal All-in-one para tu{' '}
              <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
                Proyecto
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      {feature.example && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                          <p className="text-green-800 dark:text-green-300 font-medium text-sm">
                            {feature.example}
                          </p>
                        </div>
                      )}
                      {feature.phases && (
                        <div className="space-y-3 mt-4">
                          {feature.phases.map((phase, phaseIndex) => (
                            <div key={phaseIndex} className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                                phase.status === 'completed' ? 'bg-green-500' :
                                phase.status === 'progress' ? 'bg-yellow-500' : 'bg-gray-300 dark:bg-gray-600'
                              }`}>
                                {phase.status === 'completed' && (
                                  <Check className="w-3 h-3 text-white m-0.5" />
                                )}
                                {phase.status === 'progress' && (
                                  <div className="w-2 h-2 bg-white rounded-full m-1 animate-pulse"></div>
                                )}
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 text-sm">
                                {phase.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why We Created Client Hub */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-800 dark:to-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              🎯 Por Qué Creamos Client Hub
            </h2>
            <div className="space-y-6">
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                "Después de 100+ implementaciones de IA, notamos que nuestros clientes más exitosos eran los que entendían exactamente qué estaba pasando en su proyecto. Los que fallaban eran los que se sentían 'en la oscuridad'."
              </p>
              <p className="text-xl font-semibold text-primary-600 dark:text-primary-400">
                "Client Hub elimina esa oscuridad. Tienes el mismo nivel de visibilidad que nosotros."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-slate-700">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                Tu Información, Segura y Privada
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            🚀 Cómo Funciona{' '}
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent">
              (Súper Simple)
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <Timeline
              items={[
                {
                  id: "1",
                  title: "Firmamos el contrato",
                  description: "Recibes credenciales de acceso",
                  status: "completed"
                },
                {
                  id: "2", 
                  title: "Día 1",
                  description: "Tu dashboard está activo con info básica",
                  status: "completed"
                },
                {
                  id: "3",
                  title: "Cada día",
                  description: "Ve progreso actualizado y ROI en tiempo real", 
                  status: "active"
                },
                {
                  id: "4",
                  title: "24/7",
                  description: "Acceso completo desde cualquier dispositivo",
                  status: "pending"
                }
              ]}
              variant="spacious"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 via-purple-600 to-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ⚡ Listo Para Transparencia Total?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
            "El Client Hub está incluido sin costo adicional en todas nuestras implementaciones de IA. Es nuestra forma de demostrar confianza total en nuestro trabajo."
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg">
              Solicitar Propuesta + Access Client Hub
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            FAQ Rápido
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientHub;
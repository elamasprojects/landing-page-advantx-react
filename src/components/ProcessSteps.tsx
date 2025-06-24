
import { Search, Cog, TrendingUp } from 'lucide-react';

const ProcessSteps = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Analizamos tus procesos actuales e identificamos oportunidades de automatización con el mayor impacto en tu negocio.",
      icon: Search,
      color: "from-blue-500 to-primary-600"
    },
    {
      number: "02", 
      title: "Implementación",
      description: "Desarrollamos e integramos soluciones de IA personalizadas que se adaptan perfectamente a tu flujo de trabajo existente.",
      icon: Cog,
      color: "from-primary-600 to-purple-600"
    },
    {
      number: "03",
      title: "Escalado",
      description: "Optimizamos continuamente los sistemas y expandimos la automatización a nuevas áreas para maximizar tu retorno de inversión.",
      icon: TrendingUp,
      color: "from-purple-600 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Implementación en
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> 3 Pasos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso probado que garantiza resultados desde el primer día
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gradient-to-r from-blue-200 via-primary-200 to-purple-200 hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative z-10">
                  {/* Step Number */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} text-white font-bold text-xl mb-6`}>
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <step.icon className="w-12 h-12 text-primary-600" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-8 lg:hidden">
                    <div className="w-0.5 h-16 bg-gradient-to-b from-primary-300 to-purple-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

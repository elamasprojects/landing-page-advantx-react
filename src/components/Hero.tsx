
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-primary-50 dark:from-slate-900 dark:via-slate-800 dark:to-primary-900/20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 dark:bg-primary-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 dark:bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 dark:bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/** Announcement Badge oculto temporalmente
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-800 dark:text-primary-300 text-sm font-medium mb-8 animate-fade-in">
          <Zap className="w-4 h-4 mr-2" />
          Revolucionamos procesos empresariales con IA
        </div>
        */}

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-800 dark:text-gray-100 mb-6 animate-fade-in leading-tight max-w-7xl mx-auto lg:max-w-none lg:w-[92vw] lg:relative lg:left-1/2 lg:-translate-x-1/2">
          <span className="block">
            <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 dark:from-primary-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Automatiza</span>{" "}
            tu{" "}
            <span className="text-gray-800 dark:text-gray-100">proceso de</span>
            <br className="hidden md:block" />
            <span className="whitespace-nowrap">
              <span className="text-gray-800 dark:text-gray-100">ventas</span>{" "}con{" "}
              <span className="bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 dark:from-primary-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">IA</span>
            </span>
          </span>
        </h1>

        {/* Benefits: condensed descriptive text */}
        <div className="mb-12 max-w-4xl mx-auto animate-fade-in">
          <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400 text-pretty">
            Reducimos costos hasta un 50%, mejoramos la velocidad de respuesta y aumentamos las ventas con un asistente de IA que atiende 24/7.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in">
          <Button 
            onClick={() => scrollToSection('agenda')}
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Agenda tu Consultoría Gratuita
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            onClick={() => scrollToSection('calculadora')}
            variant="outline"
            size="lg"
            className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-500/20 px-8 py-4 rounded-full text-lg font-semibold transition-all"
          >
            Calcular ROI
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-primary-100 dark:bg-primary-500/20 p-3 rounded-full">
              <Shield className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">100% Seguro</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Datos protegidos</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-primary-100 dark:bg-primary-500/20 p-3 rounded-full">
              <TrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">ROI Garantizado</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Resultados medibles</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3">
            <div className="bg-primary-100 dark:bg-primary-500/20 p-3 rounded-full">
              <Zap className="w-6 h-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900 dark:text-white">Implementación Rápida</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">En semanas, no meses</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, TrendingUp, DollarSign, Clock } from 'lucide-react';

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
        {/* Announcement Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-500/20 text-primary-800 dark:text-primary-300 text-sm font-medium mb-8 animate-fade-in">
          <Zap className="w-4 h-4 mr-2" />
          Revolucionamos procesos empresariales con IA
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in text-balance">
          <span className="block bg-gradient-to-r from-primary-600 via-purple-600 to-blue-600 dark:from-primary-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Automatizá todo tu proceso de ventas con IA
          </span>
        </h1>

        {/* Subtitle (styled list, centered) */}
        <div className="mb-12 max-w-5xl mx-auto animate-fade-in text-pretty">
          <ul className="grid gap-6 text-center">
            <li className="flex flex-col items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-green-50 text-green-700 ring-1 ring-green-500/20 dark:bg-green-500/15 dark:text-green-300">
                <DollarSign className="h-4 w-4" />
              </span>
              <div className="space-y-1">
                <span className="block text-lg md:text-xl font-semibold tracking-tight bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent dark:from-green-400 dark:to-emerald-400">
                  Reduciendo un 50% los costos
                </span>
                <span className="block text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  la IA responde como un humano en su mejor humor por una fracción del costo. No te cobra extra los findes y feriados y no falta nunca.
                </span>
              </div>
            </li>
            <li className="flex flex-col items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-500/20 dark:bg-blue-500/15 dark:text-blue-300">
                <Clock className="h-4 w-4" />
              </span>
              <div className="space-y-1">
                <span className="block text-lg md:text-xl font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-indigo-400">
                  Mejorando la tasa de respuesta
                </span>
                <span className="block text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  un cliente al que se le responde rápido es un cliente que no se va con la competencia.
                </span>
              </div>
            </li>
            <li className="flex flex-col items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-purple-50 text-purple-700 ring-1 ring-purple-500/20 dark:bg-purple-500/15 dark:text-purple-300">
                <TrendingUp className="h-4 w-4" />
              </span>
              <div className="space-y-1">
                <span className="block text-lg md:text-xl font-semibold tracking-tight bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-pink-400">
                  Aumentando las ventas
                </span>
                <span className="block text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                  las personas consultan y compran casi siempre fuera del horario 9-5; nuestro chatbot vende 24/7.
                </span>
              </div>
            </li>
          </ul>
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

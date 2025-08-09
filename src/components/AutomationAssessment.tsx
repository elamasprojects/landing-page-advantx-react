import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, CheckCircle, Bot, Workflow, BarChart3, FileText, MessageSquare, Zap } from 'lucide-react';

interface FormData {
  industry: string;
  companySize: string;
  currentChallenges: string[];
  processes: string[];
  techLevel: string;
  budget: string;
  timeline: string;
}

const AutomationAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    industry: '',
    companySize: '',
    currentChallenges: [],
    processes: [],
    techLevel: '',
    budget: '',
    timeline: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const startPhrases = [
    'buscar mi mejor automatización'
  ];

  const normalize = (s: string) => s
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim();

  const shouldStartFor = (text: string) => {
    const normalized = normalize(text);
    return startPhrases.some(p => normalized.includes(normalize(p)));
  };

  const handleStartExplicit = () => setHasStarted(true);

  const handleDelegatedStart: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const text = target.innerText || '';
    if (shouldStartFor(text)) {
      setHasStarted(true);
    }
  };

  const questions = [
    {
      id: 'industry',
      title: '¿En qué sector opera tu empresa?',
      type: 'single',
      options: [
        'Comercio electrónico',
        'Servicios financieros',
        'Manufactura',
        'Salud',
        'Educación',
        'Inmobiliaria',
        'Retail',
        'Tecnología',
        'Otros'
      ]
    },
    {
      id: 'companySize',
      title: '¿Cuál es el tamaño de tu empresa?',
      type: 'single',
      options: [
        '1-10 empleados',
        '11-50 empleados',
        '51-200 empleados',
        '201-500 empleados',
        'Más de 500 empleados'
      ]
    },
    {
      id: 'currentChallenges',
      title: '¿Cuáles son tus principales desafíos actuales?',
      subtitle: 'Puedes seleccionar múltiples opciones',
      type: 'multiple',
      options: [
        'Atención al cliente 24/7',
        'Procesamiento manual de documentos',
        'Gestión de inventario',
        'Seguimiento de leads',
        'Reportes y análisis',
        'Comunicación interna',
        'Facturación y cobranza',
        'Gestión de proyectos'
      ]
    },
    {
      id: 'processes',
      title: '¿Qué procesos consumen más tiempo en tu empresa?',
      subtitle: 'Selecciona los que más impacto tienen',
      type: 'multiple',
      options: [
        'Responder consultas de clientes',
        'Ingreso de datos',
        'Generación de reportes',
        'Coordinación de equipos',
        'Seguimiento de ventas',
        'Gestión de proveedores',
        'Control de calidad',
        'Administración de recursos'
      ]
    },
    {
      id: 'techLevel',
      title: '¿Cuál es el nivel tecnológico actual de tu empresa?',
      type: 'single',
      options: [
        'Básico - Principalmente procesos manuales',
        'Intermedio - Algunas herramientas digitales',
        'Avanzado - Sistemas integrados',
        'Muy avanzado - Automatización parcial'
      ]
    },
    {
      id: 'budget',
      title: '¿Cuál es tu presupuesto estimado para automatización?',
      type: 'single',
      options: [
        '$500 - $1,000 USD',
        '$1,000 - $2,500 USD',
        '$2,500 - $5,000 USD',
        'Más de $5,000 USD'
      ]
    },
    {
      id: 'timeline',
      title: '¿En qué plazo necesitas implementar estas soluciones?',
      type: 'single',
      options: [
        'Inmediatamente (1-2 meses)',
        'Corto plazo (3-6 meses)',
        'Mediano plazo (6-12 meses)',
        'Largo plazo (más de 1 año)'
      ]
    }
  ];

  const handleOptionSelect = (questionId: string, value: string, isMultiple: boolean) => {
    setFormData(prev => {
      if (isMultiple) {
        const currentValues = prev[questionId as keyof FormData] as string[];
        const newValues = currentValues.includes(value)
          ? currentValues.filter(v => v !== value)
          : [...currentValues, value];
        return { ...prev, [questionId]: newValues };
      } else {
        return { ...prev, [questionId]: value };
      }
    });
  };

  const canContinue = () => {
    const currentQuestion = questions[currentStep];
    const currentValue = formData[currentQuestion.id as keyof FormData];
    
    if (currentQuestion.type === 'multiple') {
      return Array.isArray(currentValue) && currentValue.length > 0;
    }
    return Boolean(currentValue);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const generateRecommendations = () => {
    const recommendations = [];
    
    // Chatbot recommendation
    if (formData.currentChallenges.includes('Atención al cliente 24/7') || 
        formData.processes.includes('Responder consultas de clientes')) {
      recommendations.push({
        icon: Bot,
        title: 'Chatbot Inteligente',
        description: 'Automatiza la atención al cliente 24/7 con IA conversacional.',
        priority: 'Alta',
        roi: '300-500%'
      });
    }

    // Process automation
    if (formData.currentChallenges.includes('Procesamiento manual de documentos') ||
        formData.processes.includes('Ingreso de datos')) {
      recommendations.push({
        icon: Workflow,
        title: 'Automatización de Procesos',
        description: 'Elimina tareas manuales repetitivas y optimiza flujos de trabajo.',
        priority: 'Alta',
        roi: '200-400%'
      });
    }

    // Analytics
    if (formData.currentChallenges.includes('Reportes y análisis') ||
        formData.processes.includes('Generación de reportes')) {
      recommendations.push({
        icon: BarChart3,
        title: 'Análisis Predictivo',
        description: 'Genera insights automáticos y predicciones basadas en datos.',
        priority: 'Media',
        roi: '150-300%'
      });
    }

    // Document processing
    if (formData.processes.includes('Ingreso de datos') ||
        formData.currentChallenges.includes('Facturación y cobranza')) {
      recommendations.push({
        icon: FileText,
        title: 'Procesamiento de Documentos',
        description: 'Extrae y procesa información de documentos automáticamente.',
        priority: 'Media',
        roi: '200-350%'
      });
    }

    // Virtual assistant
    if (formData.currentChallenges.includes('Comunicación interna') ||
        formData.processes.includes('Coordinación de equipos')) {
      recommendations.push({
        icon: MessageSquare,
        title: 'Asistente Virtual',
        description: 'Mejora la productividad del equipo con asistentes de IA.',
        priority: 'Baja',
        roi: '100-200%'
      });
    }

    // API Integration
    if (formData.techLevel.includes('Avanzado') || formData.techLevel.includes('Muy avanzado')) {
      recommendations.push({
        icon: Zap,
        title: 'Integración de APIs',
        description: 'Conecta sistemas existentes para crear ecosistemas eficientes.',
        priority: 'Media',
        roi: '150-250%'
      });
    }

    return recommendations.length > 0 ? recommendations : [
      {
        icon: Bot,
        title: 'Consultoría Personalizada',
        description: 'Análisis detallado de tus procesos para identificar oportunidades.',
        priority: 'Alta',
        roi: 'Por definir'
      }
    ];
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  if (showResults) {
    const recommendations = generateRecommendations();
    
    return (
      <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-900 dark:to-primary-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¡Tus Recomendaciones Están Listas!
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Basado en tu información, estas son las soluciones que más impacto tendrían en tu empresa:
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {recommendations.map((rec, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <rec.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {rec.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          rec.priority === 'Alta' ? 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400' :
                          rec.priority === 'Media' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400' :
                          'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                        }`}>
                          Prioridad {rec.priority}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-3">
                        {rec.description}
                      </p>
                      <div className="flex items-center text-sm text-primary-600 dark:text-primary-400">
                        <span className="font-medium">ROI estimado: {rec.roi}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 text-lg"
            >
              Solicitar Consulta Gratuita
            </Button>
          </div>
        </div>
      </section>
    );
  }

  if (!hasStarted) {
    return (
      <section className="py-24 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-900 dark:to-primary-900/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Cuál es tu mejor automatización?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Empezá el formulario para descubrir tus mejores oportunidades de automatización.
            </p>
          </div>
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 gap-3 text-center" onClick={handleDelegatedStart}>
                <Button onClick={handleStartExplicit} variant="secondary" className="w-full">
                  Buscar mi mejor automatización
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                Tip: si ves otro botón con un texto similar, también iniciará el formulario.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-slate-900 dark:to-primary-900/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Descubre Qué Automatizaciones
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent"> Necesitas</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Responde unas preguntas rápidas y obtén recomendaciones personalizadas
          </p>
          <div className="w-full max-w-md mx-auto mb-8">
            <Progress value={progress} className="h-3" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Pregunta {currentStep + 1} de {questions.length}
            </p>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {currentQuestion.title}
              </h3>
              {currentQuestion.subtitle && (
                <p className="text-gray-600 dark:text-gray-300">
                  {currentQuestion.subtitle}
                </p>
              )}
            </div>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => {
                const isSelected = currentQuestion.type === 'multiple' 
                  ? (formData[currentQuestion.id as keyof FormData] as string[])?.includes(option)
                  : formData[currentQuestion.id as keyof FormData] === option;

                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(currentQuestion.id, option, currentQuestion.type === 'multiple')}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                      isSelected 
                        ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {option}
                      </span>
                      {isSelected && (
                        <CheckCircle className="w-5 h-5 text-primary-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleNext}
                disabled={!canContinue()}
                size="lg"
                className="px-8"
              >
                {currentStep === questions.length - 1 ? 'Ver Mis Resultados' : 'Continuar'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AutomationAssessment;

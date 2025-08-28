import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronRight, CheckCircle } from 'lucide-react';
import { FormData } from '@/types/automationAssessment';
import { questions } from '@/data/assessmentQuestions';

interface AutomationAssessmentQuestionsProps {
  currentStep: number;
  formData: FormData;
  onOptionSelect: (questionId: string, value: string, isMultiple: boolean) => void;
  onNext: () => void;
}

const AutomationAssessmentQuestions = ({
  currentStep,
  formData,
  onOptionSelect,
  onNext
}: AutomationAssessmentQuestionsProps) => {
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const canContinue = () => {
    const currentValue = formData[currentQuestion.id as keyof FormData];
    
    if (currentQuestion.type === 'multiple') {
      return Array.isArray(currentValue) && currentValue.length > 0;
    }
    return Boolean(currentValue);
  };

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
                    onClick={() => onOptionSelect(currentQuestion.id, option, currentQuestion.type === 'multiple')}
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
                onClick={onNext}
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

export default AutomationAssessmentQuestions;
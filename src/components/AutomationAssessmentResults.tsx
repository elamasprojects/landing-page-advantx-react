import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Recommendation } from '@/types/automationAssessment';

interface AutomationAssessmentResultsProps {
  recommendations: Recommendation[];
}

const AutomationAssessmentResults = ({ recommendations }: AutomationAssessmentResultsProps) => {
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
};

export default AutomationAssessmentResults;
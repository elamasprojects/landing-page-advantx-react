import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface AutomationAssessmentStartProps {
  onStart: () => void;
}

const AutomationAssessmentStart = ({ onStart }: AutomationAssessmentStartProps) => {
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

  const handleDelegatedStart: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const text = target.innerText || '';
    if (shouldStartFor(text)) {
      onStart();
    }
  };

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
              <Button onClick={onStart} variant="secondary" className="w-full">
                Buscar mi mejor automatización
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AutomationAssessmentStart;
import React, { useState } from 'react';
import { FormData } from '@/types/automationAssessment';
import { generateRecommendations } from '@/services/recommendationService';
import AutomationAssessmentStart from './AutomationAssessmentStart';
import AutomationAssessmentQuestions from './AutomationAssessmentQuestions';
import AutomationAssessmentResults from './AutomationAssessmentResults';
import { questions } from '@/data/assessmentQuestions';

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

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  if (showResults) {
    const recommendations = generateRecommendations(formData);
    return <AutomationAssessmentResults recommendations={recommendations} />;
  }

  if (!hasStarted) {
    return <AutomationAssessmentStart onStart={() => setHasStarted(true)} />;
  }

  return (
    <AutomationAssessmentQuestions
      currentStep={currentStep}
      formData={formData}
      onOptionSelect={handleOptionSelect}
      onNext={handleNext}
    />
  );
};

export default AutomationAssessment;

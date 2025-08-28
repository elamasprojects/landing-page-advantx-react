import { Bot, Workflow, BarChart3, FileText, MessageSquare, Zap } from 'lucide-react';
import { FormData, Recommendation } from '@/types/automationAssessment';

export const generateRecommendations = (formData: FormData): Recommendation[] => {
  const recommendations: Recommendation[] = [];
  
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
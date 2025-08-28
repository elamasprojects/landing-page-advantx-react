import { Question } from '@/types/automationAssessment';

export const questions: Question[] = [
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
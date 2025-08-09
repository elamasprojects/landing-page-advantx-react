import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = () => {
  const faqs = [
    {
      question: "¿Cuánto tiempo toma implementar una solución de automatización?",
      answer: "El tiempo de implementación varía según la complejidad del proyecto. Soluciones simples como chatbots pueden estar listas en 2-4 semanas, mientras que automatizaciones complejas pueden tomar 2-3 meses. Siempre comenzamos con un piloto para mostrar resultados rápidos."
    },
    {
      question: "¿Qué pasa si mi empresa no tiene datos suficientes para entrenar la IA?",
      answer: "No es un problema. Utilizamos técnicas de aprendizaje por transferencia y modelos pre-entrenados que pueden funcionar con datos limitados. También ayudamos a estructurar y recopilar los datos necesarios durante el proceso de implementación."
    },
    {
      question: "¿Cómo garantizan la seguridad de nuestros datos?",
      answer: "La seguridad es nuestra prioridad. Utilizamos encriptación end-to-end, cumplimos con estándares internacionales como ISO 27001 y GDPR, y podemos implementar soluciones on-premise si es necesario. Todos nuestros sistemas pasan por auditorías de seguridad regulares."
    },
    {
      question: "¿Qué sucede si la automatización no funciona como esperamos?",
      answer: "Ofrecemos una garantía de satisfacción. Si los resultados no cumplen con los KPIs acordados en los primeros 90 días, trabajamos sin costo adicional hasta alcanzar los objetivos o devolvemos el 100% de la inversión."
    },
    {
      question: "¿Necesitamos contratar personal técnico adicional?",
      answer: "No es necesario. Nuestras soluciones son plug-and-play y incluyen capacitación completa para tu equipo. Además, ofrecemos soporte técnico continuo y mantenimiento para que puedas enfocarte en tu negocio principal."
    },
    {
      question: "¿Pueden integrarse con nuestros sistemas existentes?",
      answer: "Sí, nuestras soluciones están diseñadas para integrarse perfectamente con sistemas existentes como CRM, ERP, bases de datos y aplicaciones personalizadas. Utilizamos APIs estándar y conectores pre-construidos para las plataformas más populares."
    },
    {
      question: "¿Cuál es el costo típico de una implementación?",
      answer: "Los costos varían según el alcance del proyecto. Proyectos básicos pueden comenzar desde $400, mientras que automatizaciones más completas pueden llegar a $3000+. Ofrecemos consultoría gratuita para evaluar tu caso específico y proporcionar un presupuesto detallado en minutos."
    },
    {
      question: "¿Ofrecen soporte después de la implementación?",
      answer: "Absolutamente. Cada implementación cuenta con un mentenimiento mensual que incluye los gastos de servicios de terceros, soporte técnico prioritario y actualizaciones futuras del servicio."
    }
  ];

  return (
    <section id="faqs" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-primary-900/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Preguntas
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"> Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Respuestas a las dudas más comunes sobre automatización con IA
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            ¿Tienes alguna otra pregunta?
          </p>
          <button 
            onClick={() => document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
          >
            Agenda una Consultoría Gratuita
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQs;

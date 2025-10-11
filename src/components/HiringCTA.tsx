const HiringCTA = () => {
  return (
    <section className="bg-white dark:bg-white text-gray-900 py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Querés trabajar con nosotros?</h2>
        <p className="text-gray-600 mb-8 text-lg">
          Sumate al equipo de AdvantX y ayudanos a construir el futuro con IA.
        </p>
        <a
          href="https://hiring.advantx.co"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg shadow hover:shadow-lg transition-colors"
        >
          Trabajá con nosotros!
        </a>
      </div>
    </section>
  );
};

export default HiringCTA;



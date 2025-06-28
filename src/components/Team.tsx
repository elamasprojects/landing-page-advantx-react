
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const founders = [
    {
      name: "Juan Cruz Fernandez",
      role: "CEO & Co-fundador",
      bio: "5 años de experiencia en procesos y marketing digital. Abogacía en UBA.",
      image: "/lovable-uploads/efaa7ab0-1150-479c-b4e7-7333ea8994d5.png",
      social: {
        linkedin: "https://www.linkedin.com/in/juancruzferz/",
        twitter: "#"
      }
    },
    {
      name: "Ezequiel Lamas",
      role: "CTO & Co-fundador",
      bio: "Especialista en arquitecturas de IA escalables e integración de sistemas empresariales. Ingeniería Industrial en ITBA.",
      image: "/lovable-uploads/4a6d1cef-d9c3-4c86-982b-24ab179b70d4.png",
      social: {
        linkedin: "https://www.linkedin.com/in/ezequiel-lamas-ab5568256/",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Conoce a nuestros
            <span className="bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 bg-clip-text text-transparent"> Fundadores</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Un equipo de expertos en IA con experiencia en las mejores empresas tecnológicas del mundo
          </p>
        </div>

        {/* Founders */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl dark:hover:shadow-2xl transition-shadow dark:bg-slate-800 dark:border-slate-700">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-6">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Info */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {founder.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-4">
                    {founder.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex space-x-4">
                    <a 
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary-100 dark:bg-primary-500/20 hover:bg-primary-200 dark:hover:bg-primary-500/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </a>
                    <a 
                      href={founder.social.twitter}
                      className="w-10 h-10 bg-primary-100 dark:bg-primary-500/20 hover:bg-primary-200 dark:hover:bg-primary-500/30 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">20+</div>
            <div className="text-gray-600 dark:text-gray-400">Procesos Automatizados</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">5+</div>
            <div className="text-gray-600 dark:text-gray-400">Empresas Transformadas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">$50K+</div>
            <div className="text-gray-600 dark:text-gray-400">Ahorrado por Clientes</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

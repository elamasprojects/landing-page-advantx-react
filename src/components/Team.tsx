
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const founders = [
    {
      name: "Alejandro Torres",
      role: "CEO & Co-fundador",
      bio: "Ex-Director de IA en Google. 15 años de experiencia en machine learning y automatización empresarial. PhD en Computer Science por MIT.",
      image: "AT",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Isabella Rodríguez",
      role: "CTO & Co-fundadora",
      bio: "Ex-Principal Engineer en Microsoft Azure. Especialista en arquitecturas de IA escalables y integración de sistemas empresariales. MS en AI por Stanford.",
      image: "IR",
      social: {
        linkedin: "#",
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
                  <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-purple-600 dark:from-primary-400 dark:to-purple-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6">
                    {founder.image}
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
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
            <div className="text-gray-600 dark:text-gray-400">Procesos Automatizados</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">150+</div>
            <div className="text-gray-600 dark:text-gray-400">Empresas Transformadas</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">$50M+</div>
            <div className="text-gray-600 dark:text-gray-400">Ahorrado por Clientes</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">98%</div>
            <div className="text-gray-600 dark:text-gray-400">Satisfacción del Cliente</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

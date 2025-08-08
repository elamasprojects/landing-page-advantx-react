import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Newsletter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('newsletter_subscriptions').insert([
        { email: newsletterEmail }
      ]);

      if (error) {
        if ((error as any).code === '23505') {
          toast({
            title: 'Ya estás suscrito',
            description: 'Este email ya está suscrito a nuestro newsletter.',
            variant: 'destructive',
          });
        } else {
          console.error('Error subscribing to newsletter:', error);
          toast({
            title: 'Error',
            description: 'Hubo un problema al suscribirte. Por favor intenta nuevamente.',
            variant: 'destructive',
          });
        }
      } else {
        toast({
          title: '¡Suscripción exitosa!',
          description: 'Te has suscrito correctamente a nuestro newsletter.',
        });
        setNewsletterEmail('');
      }
    } catch (e) {
      console.error('Error subscribing to newsletter:', e);
      toast({
        title: 'Error',
        description: 'Hubo un problema al suscribirte. Por favor intenta nuevamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-primary-600 dark:bg-primary-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Mantente Actualizado</h2>
        <p className="text-xl text-primary-100 mb-8">
          Recibe los últimos insights sobre automatización e IA directamente en tu inbox
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Tu email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300 dark:bg-gray-700 dark:text-white"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Suscribiendo...' : 'Suscribirse'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;



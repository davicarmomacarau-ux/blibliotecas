import PricingCard from '../PricingCard';
import AnimatedButton from '../AnimatedButton';

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-black text-white flex flex-col items-center justify-center gap-12">
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Meu Projeto Open Source 🚀
        </h1>
        <p className="text-gray-400 max-w-md mx-auto">
          Componentes modernos, animados e reutilizáveis para interfaces SaaS.
        </p>
      </div>

      {/* Seção de Botões Animados */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <AnimatedButton variant="primary">
          Testar Gratuitamente ✨
        </AnimatedButton>
        <AnimatedButton variant="secondary">
          Ver Documentação 📖
        </AnimatedButton>
      </div>

      {/* Seção dos Cards de Preço */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
        <PricingCard 
          title="Plano Gratuito" 
          price="R$ 0" 
          features={['Até 3 projetos', 'Suporte da comunidade', 'Recursos básicos']} 
        />
        <PricingCard 
          title="Plano Pro (SaaS)" 
          price="R$ 99" 
          features={['Projetos ilimitados', 'Suporte prioritário', 'Acesso ao código fonte completo']} 
          isPopular={true} 
        />
      </div>
    </main>
  );
}
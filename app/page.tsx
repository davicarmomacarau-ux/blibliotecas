import PricingCard from '../PricingCard';

export default function Home() {
  return (
    <main className="min-h-screen p-12 bg-black text-white flex flex-col items-center justify-center gap-8">
      <h1 className="text-3xl font-bold">Meu Projeto Open Source 🚀</h1>
      <p className="text-gray-400">Componentes reutilizáveis para desenvolvedores.</p>
      
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
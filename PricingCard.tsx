import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features, isPopular }: PricingCardProps) {
  return (
    <div className={ + ' + p-6 rounded-2xl border  flex flex-col gap-4 shadow-lg + ' + >
      {isPopular && <span className=bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full w-fit>Mais Popular</span>}
      <h3 className=text-xl font-bold>{title}</h3>
      <div className=text-4xl font-extrabold>{price}<span className=text-sm font-normal text-gray-400>/mês</span></div>
      <ul className=flex flex-col gap-2 text-gray-300 text-sm>
        {features.map((feature, index) => (
          <li key={index}>✓ {feature}</li>
        ))}
      </ul>
      <button className=mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition-colors>
        Começar Agora
      </button>
    </div>
  );
}
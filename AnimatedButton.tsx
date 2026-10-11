import React from 'react';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
}

export default function AnimatedButton({ children, onClick, variant = 'primary' }: AnimatedButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 duration-150 overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02]",
    secondary: "bg-zinc-900 border border-zinc-800 text-zinc-100 hover:border-zinc-700 hover:bg-zinc-800/80 hover:scale-[1.02]"
  };

  return (
    <button onClick={onClick} className={${baseStyles}}>
      {/* Efeito de brilho passado ao fazer hover */}
      <span className="absolute inset-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Conteúdo do botão com leve transição */}
      <span className="relative z-10 flex items-center gap-2 group-hover:translate-x-0.5 transition-transform duration-200">
        {children}
      </span>
    </button>
  );
}
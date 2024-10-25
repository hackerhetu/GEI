import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/10 rounded-full"
            style={{
              width: `${Math.random() * 300}px`,
              height: `${Math.random() * 300}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tight">
          <span className="text-orange-500">Made </span>
          <span className="text-white">in </span>
          <span className="text-green-500">Bharat</span>
        </h1>
        <h2 className="text-4xl font-semibold">
          For the World
        </h2>
        <p className="text-xl max-w-2xl mx-auto">
          India's very own Geopolitical intelligence platform
        </p>
        
        <ArrowDown className="w-8 h-8 mx-auto mt-12 animate-bounce" />
      </div>
    </div>
  );
};

export default HeroSection;
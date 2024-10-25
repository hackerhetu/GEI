import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  altText?: string;
}

interface ProductSectionProps {
  reversed?: boolean;
  product: Product;
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  reversed = false, 
  product 
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-4">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-500/5 rounded-full"
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
      <div className={`relative z-10 flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 max-w-7xl mx-auto`}>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
            <img
              src={product.imageUrl}
              alt={product.altText || product.title}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            {product.title}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {product.description}
          </p>
          <div className="space-x-4">
            <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:scale-105">
              Learn More
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
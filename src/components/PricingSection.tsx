import React from 'react';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹999',
      period: '/month',
      features: [
        'Basic intelligence reports',
        'Weekly newsletter',
        'Basic API access',
        'Email support'
      ]
    },
    {
      name: 'Pro',
      price: '₹2,499',
      period: '/month',
      features: [
        'Advanced intelligence reports',
        'Daily newsletter',
        'Full API access',
        'Priority support',
        'Custom alerts'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '/year',
      features: [
        'Custom intelligence solutions',
        'Dedicated analyst',
        'Unlimited API access',
        '24/7 support',
        'Custom integration'
      ]
    }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black text-white px-4 py-20">
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-300">
            Scale your intelligence capabilities with our flexible pricing plans
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="relative">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className={`h-full bg-gray-900 backdrop-blur-sm rounded-xl p-8 border-2 
                ${plan.popular ? 'border-blue-500' : 'border-gray-800'}`}>
                <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3 text-gray-300">
                      <Check className="w-5 h-5 text-blue-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all 
                  ${plan.popular 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-gray-800 hover:bg-gray-700 text-white'}`}>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
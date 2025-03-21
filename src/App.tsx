import React from 'react';
import { Star, Check, ArrowRight, Shield, Clock, Truck } from 'lucide-react';

function App() {
  const affiliateLink = "https://afflat3c2.com/trk/lnk/978DE929-901E-40FF-A412-6025702C3091/?o=25003&c=918273&a=754506&k=14835F1890239D540BA92E8F608763E7&l=26488";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#f8f3eb] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <p className="text-sm font-semibold text-emerald-600 tracking-wide uppercase mb-4">
              Natural Health Solutions
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Health With Premium Vitamins & Supplements
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Discover the power of natural, science-backed supplements that help you feel your absolute best every day.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a 
                href={affiliateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-700 transition flex items-center gap-2"
              >
                Shop Now <ArrowRight size={20} />
              </a>
            </div>
            <div className="flex justify-center items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
              </div>
              <p>4.9/5 from over 10,000+ reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&q=80"
              alt="Natural supplements"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Our Supplements?
            </h2>
            <div className="space-y-4">
              {[
                'Premium Natural Ingredients',
                'Science-Backed Formulations',
                'Made in Australia',
                'Third-Party Tested',
                'Sustainable Packaging',
                'Money-Back Guarantee'
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <Check className="text-emerald-600" size={24} />
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Shield size={32} className="text-emerald-600 mb-4" />
              <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600 text-sm">Premium ingredients, tested for purity</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock size={32} className="text-emerald-600 mb-4" />
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick dispatch within 24 hours</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Truck size={32} className="text-emerald-600 mb-4" />
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Health Journey Today
            </h2>
            <p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their health with our premium supplements.
            </p>
            <a 
              href={affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition flex items-center gap-2 mx-auto inline-flex"
            >
              Shop Now <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>*These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
          <p className="mt-2">© 2024 All Rights Reserved. This is an affiliate marketing website.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
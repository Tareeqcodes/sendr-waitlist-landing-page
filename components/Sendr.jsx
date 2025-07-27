'use client';
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Package, Users, Shield, Wallet, MapPin, Star, Check, ArrowRight, Send } from 'lucide-react';

const Sendr = () => {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  // Replace "xovebzpo" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xovebzpo");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Reset email field after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setEmail('');
    }
  }, [state.succeeded]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      // Create form data
      const formData = new FormData();
      formData.append('email', email);
      formData.append('source', 'waitlist'); // Track source
      
      await handleSubmit(formData);
    }
  };

  const AnimatedCard = ({ children, delay = 0 }) => (
    <div 
      className={`transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
              <Send className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Sendr
            </span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedCard>
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Send <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Smarter</span>.
              <br />
              Travel <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Richer</span>.
            </h1>
          </AnimatedCard>
          
          <AnimatedCard delay={200}>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Connect with trusted travelers to send packages anywhere, or earn money while you travel.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <form onSubmit={onSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting || !email}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>
                    {state.submitting ? 'Joining...' : state.succeeded ? 'Added!' : 'Join Waitlist'}
                  </span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                  <p className="text-green-300 font-medium">🎉 Thanks for joining! We'll be in touch soon.</p>
                </div>
              )}
            </form>
          </AnimatedCard>

          <AnimatedCard delay={600}>
            <p className="text-slate-400 text-sm">
              🚀 Be among the first 1,000 early users to get exclusive perks
            </p>
          </AnimatedCard>
        </div>
      </section>

      {/* What is Sendr Section */}
      <section className="relative z-10 px-6 py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard delay={800}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">What is Sendr?</h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Sendr is a peer-to-peer delivery app that connects people who want to send packages 
                with travelers already heading in that direction. It's like ridesharing, but for packages.
              </p>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, title: "Post Package", desc: "List what you need to send" },
              { icon: Users, title: "Match Traveler", desc: "Get matched with trusted travelers" },
              { icon: Shield, title: "Secure Payment", desc: "Pay safely via escrow system" },
              { icon: Check, title: "Confirm Delivery", desc: "Release payment when delivered" }
            ].map((step, index) => (
              <AnimatedCard key={index} delay={1000 + index * 200}>
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why Sendr Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <AnimatedCard delay={1600}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Sendr?</h2>
            </div>
          </AnimatedCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Affordable Delivery", 
                desc: "No courier markup - pay travelers directly for better rates",
                icon: Wallet
              },
              { 
                title: "Lightning Fast", 
                desc: "Same-day or next-day delivery by real travelers on the move",
                icon: MapPin
              },
              { 
                title: "Built on Trust", 
                desc: "Verified users, ratings system, and secure escrow payments",
                icon: Shield
              },
              { 
                title: "Earn While Traveling", 
                desc: "Turn your trips into income opportunities effortlessly",
                icon: Star
              }
            ].map((feature, index) => (
              <AnimatedCard key={index} delay={1800 + index * 200}>
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-slate-300">{feature.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="relative z-10 px-6 py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <AnimatedCard delay={2400}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h2>
              <p className="text-xl text-slate-300">Simple as 1-2-3</p>
            </div>
          </AnimatedCard>

          <div className="space-y-8">
            {[
              { 
                step: "01", 
                title: "List Your Package or Trip", 
                desc: "Post what you need to send or where you're traveling" 
              },
              { 
                step: "02", 
                title: "Get Matched", 
                desc: "Our smart algorithm connects senders with travelers" 
              },
              { 
                step: "03", 
                title: "Deliver & Get Paid", 
                desc: "Complete the delivery and earn money, or receive your package" 
              }
            ].map((item, index) => (
              <AnimatedCard key={index} delay={2600 + index * 200}>
                <div className="flex items-center space-x-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-4xl font-black text-orange-500 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-slate-300 text-lg">{item.desc}</p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedCard delay={3200}>
            <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-blue-500/10 backdrop-blur-sm border border-white/10">
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-medium mb-4">
                "Trusted by early users worldwide"
              </blockquote>
              <p className="text-slate-400">
                Join thousands of satisfied users who are already part of the Sendr community
              </p>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 px-6 py-16 bg-gradient-to-r from-orange-500/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedCard delay={3400}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Delivery?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the waitlist and be the first to experience the smarter way to send packages and earn while traveling.
            </p>
          </AnimatedCard>

          <AnimatedCard delay={3600}>
            <form onSubmit={onSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                    required
                    disabled={state.submitting}
                  />
                  <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting || !email}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-orange-500/25 hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span>
                    {state.submitting ? 'Joining...' : state.succeeded ? 'Welcome!' : 'Join Waitlist'}
                  </span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
              {state.succeeded && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-center">
                  <p className="text-green-300 font-medium">🚀 You're on the list! Check your email for updates.</p>
                </div>
              )}
            </form>
          </AnimatedCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-6 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Sendr
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 Sendr. Connecting people, delivering possibilities.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Sendr;
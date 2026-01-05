
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-primary-gradient">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/40 backdrop-blur-sm border border-white/40 rounded-full text-xs font-bold text-charcoal/80 uppercase tracking-widest animate-pulse">
            <span className="w-2 h-2 bg-accent rounded-full"></span>
            For Professionals with 5-15+ Years Experience
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-charcoal leading-[1.1] reveal">
            You’ve Done Everything Right — <span className="font-serif italic font-normal">So Why Hasn’t Your Income Doubled Yet?</span>
          </h1>
          
          <p className="text-xl text-charcoal/70 leading-relaxed max-w-xl reveal">
            You’re not underpaid because you lack skills. You’re underpaid because companies don’t see your value. It’s time to move from invisible worker to <span className="text-charcoal font-bold underline decoration-accent/40 decoration-4">premium authority</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 reveal">
            <a href="#cta" className="group w-full sm:w-auto bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#E55930] transition-all hover:shadow-2xl hover:shadow-accent/30 active:scale-95">
              Join the Masterclass
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#framework" className="w-full sm:w-auto px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 border border-charcoal/10 hover:bg-white/50 transition-all text-charcoal/80">
              <Play className="w-4 h-4 fill-charcoal" />
              See What You’ll Learn
            </a>
          </div>

          <div className="flex items-center gap-4 pt-4 text-charcoal/60 reveal">
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i+10}/40/40`} className="w-10 h-10 rounded-full border-2 border-white" alt="Professional" />
              ))}
            </div>
            <p className="text-sm font-medium">Trusted by 2,000+ professionals from top MNCs</p>
          </div>
        </div>

        <div className="relative hidden md:block reveal">
          <div className="relative z-10 w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl animate-float">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
              alt="Arjun Mehta" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl">
              <p className="text-charcoal font-serif italic text-lg leading-snug">
                "Skill alone does not create demand. Positioning does. I help you build the demand you deserve."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-charcoal font-bold">Arjun Mehta</span>
                <span className="text-accent font-semibold text-sm">Growth Partner</span>
              </div>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/40 rounded-full blur-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

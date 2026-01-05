
import React from 'react';
import { Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const ProblemReframing: React.FC = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-charcoal mb-8">
            The Hard Truth About <br/><span className="font-serif italic font-normal">Career Growth</span>
          </h2>
          <p className="text-xl text-body leading-relaxed">
            In the top 1% of earners, skill is a <span className="text-charcoal font-bold">commodity</span>. 
            Positioning is the <span className="text-accent font-bold">differentiator</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-px bg-gray-100 -z-10 hidden md:block"></div>
          
          <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all reveal group">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Zap className="text-accent w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">The Talent Trap</h3>
            <p className="text-body leading-relaxed">
              If you’re the best at your job, companies have every incentive to keep you right where you are. Hard work alone creates dependency, not advancement.
            </p>
          </div>

          <div className="bg-white border border-accent/20 p-10 rounded-3xl shadow-xl shadow-accent/5 reveal group relative">
             <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              The Insight
            </div>
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg shadow-accent/20">
              <TrendingUp className="text-white w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Branding = Premium</h3>
            <p className="text-body leading-relaxed">
              Think of Starbucks vs. Local Coffee. The product is 90% the same, but the brand allows for a 500% price premium. Professionals operate by the same rules.
            </p>
          </div>

          <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all reveal group">
            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-accent w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-charcoal mb-4">Future Proofing</h3>
            <p className="text-body leading-relaxed">
              In an AI-driven world, your "tasks" will be automated. Your <span className="text-charcoal font-bold">Personal Brand</span>—your trust and authority—is the only thing that can't be coded.
            </p>
          </div>
        </div>

        <div className="mt-24 p-12 bg-charcoal rounded-[3rem] text-center reveal">
          <p className="text-2xl md:text-3xl text-white font-medium max-w-4xl mx-auto leading-relaxed">
            “You’re not underpaid because you lack skills. <br className="hidden md:block" />
            <span className="text-accent italic font-serif">You’re underpaid because companies don’t see your value.</span>”
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemReframing;

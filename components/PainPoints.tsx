
import React from 'react';
// Added missing Users import
import { CheckCircle2, Users } from 'lucide-react';

const PainPoints: React.FC = () => {
  const struggles = [
    "You’ve been in the same role for 3+ years with only 'inflation' hikes.",
    "You’re doing the work of two people, but your manager doesn't see your potential.",
    "You fear AI or the next layoff could make your 10 years of experience irrelevant.",
    "You see peers with less technical skill getting promoted over you.",
    "You feel like you've hit a 'salary ceiling' that no one else can break."
  ];

  return (
    <section className="py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div className="reveal">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">The Invisible Barrier</span>
          <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-8 leading-tight">
            Does your paycheck reflect <br/><span className="text-accent underline decoration-accent/20">your true value?</span>
          </h2>
          <p className="text-lg text-body mb-12">
            Most professionals are trapped in the "Performance Paradox." They work harder, expecting visibility to follow. It doesn't.
          </p>
          
          <div className="space-y-6">
            {struggles.map((struggle, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl hover:bg-white hover:shadow-xl hover:shadow-charcoal/5 transition-all group reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="mt-1 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                </div>
                <p className="text-charcoal/80 font-medium">{struggle}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative reveal">
          <div className="bg-charcoal p-12 rounded-[2.5rem] relative z-10 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Users className="w-40 h-40 text-white" />
            </div>
            <h3 className="text-3xl font-serif italic text-white mb-8">
              "I used to think my work would speak for itself. It did—but only to my desk. Arjun taught me how to make it speak to the Boardroom."
            </h3>
            <div className="flex items-center gap-4 border-t border-white/10 pt-8">
              <img src="https://picsum.photos/seed/user5/64/64" className="w-14 h-14 rounded-full border-2 border-accent" alt="Testimonial" />
              <div>
                <p className="text-white font-bold text-lg">Vikram S.</p>
                <p className="text-white/60 text-sm">VP of Operations, 14+ Yrs Exp</p>
              </div>
            </div>
            <div className="mt-8 inline-block px-4 py-2 bg-accent/20 border border-accent/30 rounded-lg">
              <span className="text-accent font-bold text-sm">Result: ₹18L hike in 4 months</span>
            </div>
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-10 -right-10 w-full h-full bg-primary-gradient rounded-[2.5rem] -z-10 rotate-3"></div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

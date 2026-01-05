
import React from 'react';
import { Award, Star, Users } from 'lucide-react';

const AboutCoach: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative reveal">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Arjun Mehta" className="w-full aspect-square object-cover" />
            </div>
            {/* Stats floating */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl z-20 hidden lg:block">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-charcoal">12+ Years</div>
                    <div className="text-xs font-bold text-muted uppercase tracking-widest">Experience</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-charcoal">2,500+</div>
                    <div className="text-xs font-bold text-muted uppercase tracking-widest">Clients</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full bg-accent/5 rounded-[3rem] -z-10 -rotate-3"></div>
          </div>

          <div className="reveal">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">The Mind Behind The Framework</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-8">Meet Arjun Mehta</h2>
            
            <div className="space-y-6 text-lg text-body">
              <p>
                I didn't start as a coach. I spent a decade in the trenches of top MNCs, watching talented people stay stagnant while mediocre 'networkers' climbed the ladder.
              </p>
              <p>
                I realized it wasn't about networking—it was about <span className="text-charcoal font-bold italic">Reputational Capital</span>. I spent years deconstructing the positioning of the world's most successful professionals to create the 5 Capitals Framework.
              </p>
              <p>
                Today, I act as a Growth Partner for ambitious leaders who are ready to double their impact and their income.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <div className="px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="flex gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-accent fill-accent" />)}
                </div>
                <p className="text-xs font-bold text-charcoal uppercase tracking-widest">4.9/5 Rating</p>
              </div>
              <div className="px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                <p className="text-xl font-bold text-charcoal">₹100Cr+</p>
                <p className="text-xs font-bold text-muted uppercase tracking-widest">Cumulative Hikes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoach;

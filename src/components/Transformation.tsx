
import React from 'react';
import sapnaImage from '../assets/images/Testimonials/sapna.png';

const Transformation: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-primary-gradient p-6 sm:p-8 md:p-12 lg:p-24 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-[100px] -mr-48 -mt-48"></div>

          <div className="grid md:grid-cols-2 gap-16 relative z-10 items-center">
            <div className="reveal">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 sm:mb-8 leading-tight">
                The Shift from <br />
                <span className="font-serif italic font-normal">Invisible Expert</span> <br />
                to <span className="text-accent underline decoration-charcoal/10">Premium Authority</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-charcoal/80 mb-8 sm:mb-10 leading-relaxed">
                When you understand branding, you stop asking for permission to grow. You start creating the conditions where growth is inevitable.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-charcoal mb-2">₹15L+</div>
                  <p className="text-charcoal/60 font-medium text-sm">Avg. Salary Increase</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-charcoal mb-2">5,000+</div>
                  <p className="text-charcoal/60 font-medium text-sm">Lives Impacted</p>
                </div>
              </div>
            </div>

            <div className="bg-white/40 backdrop-blur-xl border border-white/40 p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] reveal shadow-2xl">
              <div className="space-y-8">
                <div className="pb-8 border-b border-charcoal/5">
                  <div className="text-xs font-bold text-accent uppercase tracking-tighter mb-4">Before Sakshi</div>
                  <p className="text-charcoal/70 italic">"I was hoping my performance reviews would finally show my worth. I stayed quiet and did the work, hoping to be noticed."</p>
                </div>
                <div>
                  <div className="text-xs font-bold text-accent uppercase tracking-tighter mb-4">After Sakshi</div>
                  <p className="text-charcoal font-bold text-xl leading-snug">
                    "Achieved 100% salary hike as Associate Manager in just 2 months. The skills and inspiration I gained here went beyond the creative realm—and opened doors to a role I once thought was out of reach."
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-charcoal/10">
                      <img
                        src={sapnaImage}
                        alt="Sapna"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-charcoal font-bold text-sm">Sapna</p>
                      <p className="text-charcoal/50 text-xs uppercase font-bold tracking-widest">Associate Manager</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;

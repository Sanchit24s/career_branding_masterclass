
import React from 'react';
import { Calendar, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { useFormDialog } from '../contexts/FormDialogContext';

const CTAOffer: React.FC = () => {
  const { openDialog } = useFormDialog();
  return (
    <section id="cta" className="py-16 sm:py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative bg-charcoal rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] p-6 sm:p-8 md:p-12 lg:p-20 text-center overflow-hidden shadow-2xl">
          {/* Animated Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#FF6A3D33,transparent)] opacity-50"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 bg-accent/20 border border-accent/30 rounded-full text-accent font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Limited to 50 Seats
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.1]">
              Stop Waiting. <br/>
              <span className="font-serif italic font-normal text-white/90">Start Positioning.</span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Join the "Career Branding & 5 Capitals" Masterclass. This is the last time this session will be offered at this introductory price.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <Calendar className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-white font-bold">Sunday, 15th Oct</p>
                <p className="text-white/40 text-xs">Live Interaction</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <Clock className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-white font-bold">11:00 AM - 1:30 PM</p>
                <p className="text-white/40 text-xs">2.5 High-Value Hours</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-accent mx-auto mb-3" />
                <p className="text-white font-bold">Lifetime Access</p>
                <p className="text-white/40 text-xs">Recording & Tools</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="text-center mb-4">
                <p className="text-white/40 line-through text-lg">₹4,999</p>
                <p className="text-white text-5xl font-bold tracking-tighter">₹999 <span className="text-lg font-normal text-white/40">only</span></p>
              </div>

              <button 
                onClick={openDialog}
                className="group relative bg-accent text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 sm:gap-3 hover:bg-[#E55930] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-accent/20 w-full sm:w-auto"
              >
                Secure Your Spot Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <p className="text-white/40 text-sm">100% Satisfaction Guarantee • No-Questions-Asked Refund</p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center reveal">
          <p className="text-body text-lg italic">
            "The cost of inaction is another year of the same salary, the same invisibility, and the same fear."
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTAOffer;

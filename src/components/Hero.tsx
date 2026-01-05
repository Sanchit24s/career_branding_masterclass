
import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import sakshiImage from '../assets/images/Sakshi1.png';
import { useFormDialog } from '../contexts/FormDialogContext';

const Hero: React.FC = () => {
  const { openDialog } = useFormDialog();
  return (
    <section className="relative min-h-screen pt-20 sm:pt-24 pb-12 sm:pb-20 overflow-hidden bg-primary-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-16 items-start relative z-10 min-h-[80vh] pt-6 sm:pt-8">
        {/* Left Side - Text Content */}
        <div className="space-y-8 relative z-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.1] reveal" data-reveal-order="1">
            You've Done Everything Right — <br />
            <span className="font-serif italic font-normal">So Why Hasn't Your Income Doubled Yet?</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-charcoal/70 leading-relaxed max-w-xl reveal" data-reveal-order="2">
            You're not underpaid because you lack skills. You're underpaid because companies don't see your value. It's time to move from invisible worker to <span className="text-charcoal font-bold underline decoration-accent/40 decoration-4">premium authority</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 pt-4 reveal" data-reveal-order="3">
            <button
              onClick={openDialog}
              className="group bg-charcoal text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 hover:bg-charcoal/90 transition-all hover:shadow-2xl hover:shadow-charcoal/20 active:scale-95 w-full sm:w-auto"
            >
              Join the Masterclass
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="#framework" className="inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-3 sm:py-4 bg-white/80 backdrop-blur-sm rounded-full font-semibold text-sm sm:text-base text-charcoal hover:bg-white transition-all shadow-lg hover:shadow-xl border border-charcoal/5 w-full sm:w-auto justify-center">
              <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-charcoal" />
              See What You'll Learn
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4 text-charcoal/60 reveal" data-reveal-order="4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map(i => (
                <img key={i} src={`https://picsum.photos/seed/${i + 10}/40/40`} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white" alt="Professional" />
              ))}
            </div>
            <p className="text-xs sm:text-sm font-medium">Trusted by 2,000+ professionals from top MNCs</p>
          </div>

          {/* Decorative geometric shapes */}
          <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-white/30 rotate-45 rounded-lg blur-sm hidden sm:block"></div>
          <div className="absolute -bottom-10 -left-20 w-32 h-32 bg-white/20 rotate-12 rounded-lg blur-sm hidden sm:block"></div>
        </div>

        {/* Right Side - Image with Background Text */}
        <div className="relative hidden md:block reveal" data-reveal-order="5">
          {/* Large background text overlay */}
          <div className="absolute inset-0 flex items-start justify-center pointer-events-none z-0 pt-8 overflow-hidden">
            <span className="text-[8rem] sm:text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white/10 select-none leading-none tracking-tighter whitespace-nowrap">
              SAKSHI<br />CHANDRAAKAR
            </span>
          </div>

          {/* Person Image */}
          <div className="relative z-10 w-full aspect-[3/4] max-w-md ml-auto mr-0">
            <img
              src={sakshiImage}
              alt="Sakshi Chandraakar"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

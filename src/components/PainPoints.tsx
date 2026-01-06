
import React from 'react';
import { AnimatedTestimonials } from './ui/animated-testimonials';
import sarvagyaImage from '../assets/images/Testimonials/sarvagya.png';
import pravinImage from '../assets/images/Testimonials/pravin.png';
import pankajiniImage from '../assets/images/Testimonials/pankajini.png';
import shellyImage from '../assets/images/Testimonials/shelly.png';
import urvashiImage from '../assets/images/Testimonials/Urvashi.png';
import nandaImage from '../assets/images/Testimonials/nanda.png';

const PainPoints: React.FC = () => {
  const painSignals = [
    "You've been in the same role for 3+ years with only 'inflation' hikes.",
    "You're doing the work of two people, but your manager doesn't see your potential.",
    "You see peers with less technical skill getting promoted over you."
  ];

  const testimonials = [
    {
      quote: "160% hike in 1.5 months after applying the framework.",
      name: "SARVAGYA",
      designation: "Career Branding Success Story",
      src: sarvagyaImage,
      result: "Result: 160% hike in 1.5 months"
    },
    {
      quote: "116% hike in the same company & recruiters still chased me with multiple offers.",
      name: "PRAVIN",
      designation: "Career Branding Success Story",
      src: pravinImage,
      result: "Result: 116% hike in the same company"
    },
    {
      quote: "From low confidence to dream role + 100% hike.",
      name: "PANKAJINI",
      designation: "Career Branding Success Story",
      src: pankajiniImage,
      result: "Result: Dream role + 100% hike"
    },
    {
      quote: "I'm super happy to share that I've joined my dream company, American Express, as a Risk and Compliance Analyst with a 100% hike.",
      name: "SHELLY",
      designation: "Career Branding Success Story",
      src: shellyImage,
      result: "Result: Declined IBM Offer & Landed American Express with a 100% Salary Hike"
    },
    {
      quote: "Following Sakshi Ma'am's guidance, I set my sights on a 100% hike and was able to stay committed to the process.",
      name: "URVASHI",
      designation: "Career Branding Success Story",
      src: urvashiImage,
      result: "Result: Achieved a 90% Salary Hike in a Product Role Transition"
    },
    {
      quote: "I'm elated to share that I secured a job with a whopping 110% hike!!! My deepest gratitude to you and CBH for always supporting and encouraging.",
      name: "NANDA",
      designation: "Career Branding Success Story",
      src: nandaImage,
      result: "Result: Secured a Dream Job with a Whopping 110% Hike!!!"
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* Left Side - The Realization */}
        <div className="reveal">
          <span className="text-accent font-bold uppercase tracking-widest text-sm">The Invisible Barrier</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-6 sm:mb-8 leading-tight">
            Does your paycheck reflect <br />
            <span className="text-accent underline decoration-accent/20">your true value?</span>
          </h2>
          <p className="text-base sm:text-lg text-body mb-8 sm:mb-12 leading-relaxed">
            Most professionals are trapped in the "Performance Paradox." They work harder, expecting visibility to follow. It doesn't.
          </p>

          <div className="space-y-6">
            {painSignals.map((signal, idx) => (
              <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 100}ms` }}>
                <p className="text-charcoal/80 font-medium leading-relaxed pl-6 border-l-2 border-charcoal/10">
                  {signal}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - The Proof with Animated Testimonials */}
        <div className="relative">
          {/* Soft gradient background shape - matching Transformation section style */}
          <div className="absolute -bottom-10 -right-10 w-full h-full bg-primary-gradient rounded-[2.5rem] -z-10 rotate-3 overflow-hidden"></div>

          {/* Premium testimonial card - matching site's card style */}
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] relative z-10 shadow-2xl reveal">
            <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;

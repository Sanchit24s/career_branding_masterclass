
import React from 'react';
import { Target, Users, TrendingUp, ShieldCheck, ArrowRight } from 'lucide-react';

const LearningOutcomes: React.FC = () => {
  const outcomes = [
    {
      title: "The Invisibility Audit",
      desc: "Identify exactly why your current efforts are being ignored by leadership.",
      icon: Target
    },
    {
      title: "Hiring Psychology",
      desc: "How high-ticket roles are actually filled (hint: it's not through portals).",
      icon: Users
    },
    {
      title: "The 5 Capitals Map",
      desc: "Step-by-step framework to transition from execution to authority.",
      icon: TrendingUp
    },
    {
      title: "Premium Positioning",
      desc: "How to articulate your value so companies see you as an investment, not a cost.",
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Inside the Masterclass</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4">
              A Strategic Roadmap for the <br/><span className="font-serif italic font-normal">Top 1% Professional</span>
            </h2>
          </div>
          <p className="text-body text-lg max-w-sm">
            We don't do hacks. We do frameworks that have worked for over 2,500 professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {outcomes.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl hover:translate-y-[-8px] transition-all duration-300 border border-gray-100 shadow-sm reveal group">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6 text-accent group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-4">{item.title}</h3>
              <p className="text-body text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="w-full h-1 bg-gray-50 rounded-full overflow-hidden">
                <div className="h-full bg-accent/20 w-0 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;

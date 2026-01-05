
import React from 'react';
// Added missing ArrowRight import
import { Target, Users, BookOpen, Heart, Landmark, ArrowRight } from 'lucide-react';

const Framework: React.FC = () => {
  const capitals = [
    {
      title: "Intellectual Capital",
      desc: "Moving beyond 'tasks' to 'solving problems' at scale.",
      icon: BookOpen,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Social Capital",
      desc: "Building a network that works for you while you sleep.",
      icon: Users,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Reputational Capital",
      desc: "How you are talked about when you aren't in the room.",
      icon: Target,
      color: "bg-accent/10 text-accent"
    },
    {
      title: "Emotional Capital",
      desc: "The resilience and confidence that allows you to negotiate.",
      icon: Heart,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Economic Capital",
      desc: "The actual conversion of value into high-yield assets.",
      icon: Landmark,
      color: "bg-emerald-50 text-emerald-600"
    }
  ];

  return (
    <section id="framework" className="py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 reveal">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Exclusive Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-charcoal mt-4 mb-8">
              The 5 Capitals <br/><span className="text-accent">Framework</span>
            </h2>
            <p className="text-lg text-body mb-8 leading-relaxed">
              Most career advice focuses on 1 Capital: Intellectual (learning skills). 
              The top 1% focuses on the 4 other Capitals that actually drive income.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-charcoal font-semibold">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Used by CEOs & VP-level professionals
              </div>
              <div className="flex items-center gap-3 text-charcoal font-semibold">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Built for the Indian corporate ecosystem
              </div>
              <div className="flex items-center gap-3 text-charcoal font-semibold">
                <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                Zero fluff, all actionable strategy
              </div>
            </div>
            
            <a href="#cta" className="mt-12 inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
              Learn how to apply this <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="lg:col-span-3 space-y-4">
            {capitals.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl flex items-center gap-6 shadow-sm hover:shadow-md transition-all border border-gray-100 reveal group" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-12 ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-charcoal mb-1">{item.title}</h3>
                  <p className="text-body">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Framework;
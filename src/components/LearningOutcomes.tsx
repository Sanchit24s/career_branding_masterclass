
import React from 'react';
import { Feature197 } from './ui/accordion-feature-section';

const LearningOutcomes: React.FC = () => {
  const features = [
    {
      id: 1,
      title: "Why Your Growth Has Been Slow — Even When Your Work Is Good",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      description:
        "Uncover the real reasons your income hasn't kept pace with your effort. You'll see why working harder, adding more skills, or changing jobs hasn't created the breakthrough you're aiming for."
    },
    {
      id: 2,
      title: "The Unseen Reasons You’re Getting Passed Over For Hikes And Promotions",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
      description:
        "Understand how managers, leadership, and recruiters actually evaluate \"promotion material\" versus \"backup support\"—and why your true potential isn't translating into money or titles yet."
    },
    {
      id: 3,
      title: "The Proven 5 Capitals Framework For Career Branding",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      description:
        "Discover the 5 Hidden Career Capitals that separate top 10% earners from everyone else—and how to start activating them in your own career, step by step, without burning out or constantly switching companies."
    },
    {
      id: 4,
      title: "Why Job Portals Often Fail You — And What Actually Gets You Shortlisted",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
      description:
        "Learn the real rules of hiring that no one explains—from how premium roles are filled to why your profile gets ignored—and what you must change so decision-makers instantly see you as a top candidate."
    },
    {
      id: 5,
      title: "The Step-By-Step 6-Stage Process To Master The 5 Capitals",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
      description:
        "Walk away with a clear, practical roadmap to apply the 5 Capitals in your own career immediately after the masterclass—so you know exactly what to do next, this quarter in 2026."
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8 reveal">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-widest text-xs sm:text-sm">Inside the Masterclass</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mt-3 sm:mt-4">
              What You’ll Learn In This <br /><span className="font-serif italic font-normal">99-Minute Masterclass</span>
            </h2>
          </div>
          <p className="text-body text-base sm:text-lg max-w-sm">
            This is not another generic resume or interview tips session. You’ll get a clear, strategic system you can start using the same day.
          </p>
        </div>

        <div className="reveal">
          <Feature197 features={features} />
        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;

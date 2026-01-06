
import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const Qualification: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-3 sm:mb-4">Is This Masterclass For You?</h2>
          <p className="text-body text-sm sm:text-base">
            Read this carefully. The right people get life-changing clarity from this session. The wrong people get \"more information.\"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <div className="bg-emerald-50/50 p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-emerald-100 reveal">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 rounded-full flex items-center justify-center overflow-hidden shrink-0">
                <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-emerald-900">This Masterclass Is Life Changing If You Are...</h3>
            </div>
            <ul className="space-y-5">
              {[
                "An ambitious working professional with 5 to 15+ years of experience.",
                "Stuck in a role with no real growth, recognition, or clear path ahead.",
                "Applying for months with little to no traction from the right kind of opportunities.",
                "Getting shortlisted but not cracking final rounds—and you don't know why.",
                "Serious about making a strong career jump this quarter in 2026, not \"someday.\""
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-emerald-800 font-medium">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-red-50/50 p-6 sm:p-8 md:p-10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] border border-red-100 reveal">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-500 rounded-full flex items-center justify-center overflow-hidden shrink-0">
                <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-900">But, Do Not Attend The Masterclass If You Are...</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Looking for quick hacks, resume templates, or shortcuts instead of real strategy.",
                "Just wanting a new job for survival without thinking about long-term growth.",
                "Not serious about upskilling or building a strong career brand.",
                "Unwilling to invest time, money, or effort into your own growth.",
                "Expecting \"tips & tricks\" instead of a deep, practical framework you can apply."
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-3 text-red-800 font-medium opacity-70">
                  <div className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0"></div>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;

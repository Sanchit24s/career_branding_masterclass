
import React, { useEffect } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Users,
  Target,
  ShieldCheck,
  TrendingUp,
  ArrowUpRight,
  Menu,
  X,
  Star,
  Zap,
  Award,
  Calendar
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import PainPoints from './components/PainPoints';
import ProblemReframing from './components/ProblemReframing';
import Framework from './components/Framework';
import Transformation from './components/Transformation';
import LearningOutcomes from './components/LearningOutcomes';
import Qualification from './components/Qualification';
import AboutCoach from './components/AboutCoach';
import LeadGenerationForm from './components/LeadGenerationForm';
import CTAOffer from './components/CTAOffer';
import Footer from './components/Footer';
import { FormDialogProvider, useFormDialog } from './contexts/FormDialogContext';

function AppContent() {
  const { isOpen, closeDialog } = useFormDialog();

  // Simple scroll reveal effect - wait for page to fully load
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const revealDelay = el.getAttribute('data-reveal-delay');

          if (revealDelay) {
            // Apply custom delay for scroll-triggered animations
            const delay = parseInt(revealDelay);
            setTimeout(() => {
              el.classList.add('active');
            }, delay);
          } else {
            // Immediate activation for elements without delay
            el.classList.add('active');
          }
        }
      });
    }, observerOptions);

    const initReveal = () => {
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach(el => {
        // Check if element is already in viewport (above the fold)
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight * 1.5 && rect.bottom > -100;

        if (isInViewport) {
          // Get reveal order for staggered animation (Hero section elements)
          const revealOrder = el.getAttribute('data-reveal-order');
          const revealDelay = el.getAttribute('data-reveal-delay');

          if (revealOrder) {
            // Staggered fade-in: 200ms base delay + 200ms per order
            const delay = 200 + (parseInt(revealOrder) - 1) * 200;
            setTimeout(() => {
              el.classList.add('active');
            }, delay);
          } else if (revealDelay) {
            // Custom delay for elements like Framework capitals - smooth staggered animation
            const delay = 300 + parseInt(revealDelay);
            setTimeout(() => {
              el.classList.add('active');
            }, delay);
          } else {
            // For elements without order, fade in after all ordered elements
            setTimeout(() => {
              el.classList.add('active');
            }, 1000);
          }
        } else {
          // Observe elements that need to scroll into view
          observer.observe(el);
        }
      });
    };

    // Wait for page and all resources (images, backgrounds) to load
    if (document.readyState === 'complete') {
      // Page already loaded
      requestAnimationFrame(() => {
        setTimeout(initReveal, 200);
      });
    } else {
      // Wait for full page load
      window.addEventListener('load', () => {
        requestAnimationFrame(() => {
          setTimeout(initReveal, 200);
        });
      });
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('load', initReveal);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <TrustBar />
        <PainPoints />
        <ProblemReframing />
        <Framework />
        <Transformation />
        <LearningOutcomes />
        <Qualification />
        <AboutCoach />
        <CTAOffer />
      </main>
      <Footer />
      <LeadGenerationForm isOpen={isOpen} onClose={closeDialog} />
    </div>
  );
}

function App() {
  return (
    <FormDialogProvider>
      <AppContent />
    </FormDialogProvider>
  );
}

export default App;

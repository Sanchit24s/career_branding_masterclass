
import React, { useState, useEffect } from 'react';
import { useFormDialog } from '../contexts/FormDialogContext';
import { X } from 'lucide-react';

const Navbar: React.FC = () => {
  const { openDialog } = useFormDialog();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-4 md:py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">SC</span>
          </div>
          <span className="font-bold text-base sm:text-lg md:text-xl tracking-tight text-charcoal">SAKSHI CHANDRAAKAR</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#framework" className="text-sm font-medium text-charcoal/70 hover:text-accent transition-colors">The Framework</a>
          <a href="#about" className="text-sm font-medium text-charcoal/70 hover:text-accent transition-colors">About</a>
          <button 
            onClick={openDialog}
            className="bg-charcoal text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-charcoal/90 transition-all active:scale-95 shadow-lg shadow-charcoal/10"
          >
            Join Masterclass
          </button>
        </div>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-charcoal p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-charcoal/10">
          <div className="px-4 py-6 space-y-4">
            <a 
              href="#framework" 
              className="block text-base font-medium text-charcoal hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              The Framework
            </a>
            <a 
              href="#about" 
              className="block text-base font-medium text-charcoal hover:text-accent transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <button 
              onClick={() => {
                openDialog();
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-charcoal text-white px-6 py-3 rounded-full text-base font-semibold hover:bg-charcoal/90 transition-all active:scale-95 shadow-lg shadow-charcoal/10"
            >
              Join Masterclass
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

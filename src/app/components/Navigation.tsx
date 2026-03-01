import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const goHome = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const navItems = [
    { label: 'Platform', id: 'platform' },
    { label: 'Byproducts', id: 'byproducts' },
    { label: 'Science', id: 'science' },
    { label: 'Team', id: 'team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={goHome}
            className="text-xl font-bold text-stone-900 transition-colors"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#8F662E')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}
          >
            Co▪Matter
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-stone-700 font-medium transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8F662E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('connect')}
              className="px-6 py-2 text-white rounded-lg font-semibold transition-all"
              style={{ backgroundColor: '#8F662E' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7A5626')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8F662E')}
            >
              Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-700"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-stone-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-stone-700 font-medium"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#8F662E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '')}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('connect')}
              className="w-full mt-2 px-6 py-2 text-white rounded-lg font-semibold"
              style={{ backgroundColor: '#8F662E' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#7A5626')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#8F662E')}
            >
              Connect
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
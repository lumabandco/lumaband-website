'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from './CartProvider';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const { quantity } = useCart();
  const headerRef = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const onScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'The Need', href: '/#problem' },
    { name: 'Features', href: '/#features' },
    { name: 'Technology', href: '/#technology' },
    { name: 'About Us', href: '/about' },
  ];

  return (
    <>
      <header ref={headerRef} style={{ zIndex: 1000 }}>
        <Link href="/" className="logo">
          <img src="/logo.png" alt="LumaBand Logo" style={{ height: '36px', width: 'auto' }} />
          <span>LumaBand</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={pathname === link.href ? 'active' : ''}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/order" className="cart-icon desktop-only" title="View Cart">
            <ShoppingCart size={22} />
            <span className={`cart-count${quantity > 0 ? ' visible' : ''}`}>{quantity}</span>
          </Link>
          <Link href="/order" className="btn btn-primary desktop-only">Order Now</Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle Menu"
            style={{ 
              background: 'none', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer'
            }}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--bg-color)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              padding: '100px 5% 40px',
              gap: '20px'
            }}
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={closeMenu}
                style={{ 
                  fontSize: '2rem', 
                  fontWeight: 600, 
                  color: 'var(--primary)',
                  textDecoration: 'none'
                }}
              >
                {link.name}
              </Link>
            ))}
            <div style={{ marginTop: 'auto', display: 'flex', gap: '20px', flexDirection: 'column' }}>
              <Link 
                href="/order" 
                onClick={closeMenu}
                className="btn btn-primary" 
                style={{ padding: '20px', textAlign: 'center', fontSize: '1.2rem' }}
              >
                Order LumaBand Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

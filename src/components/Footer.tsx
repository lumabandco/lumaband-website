'use client';

import Link from 'next/link';
import { Instagram, Facebook, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo">
            <img src="/logo.png" alt="LumaBand Logo" />
            <span>LumaBand</span>
          </div>
          <p>Designed and built by high school students from Global Indian International School to make the world better.</p>
        </div>

        <div className="footer-links">
          <h4>Product</h4>
          <ul>
            <li><Link href="/#features">Features</Link></li>
            <li><Link href="/#technology">Technology</Link></li>
            <li><Link href="/preorder">Pricing & Order</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/about#sustainability">Sustainability</Link></li>
            <li><Link href="mailto:lumaband.co@gmail.com">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Follow Us</h4>
          <div className="socials">
            <a href="https://www.instagram.com/lumaband.co/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.facebook.com/share/19vmmc8zUT/" target="_blank" rel="noopener noreferrer" title="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://www.linkedin.com/company/lumaband./?originalSubdomain=sg" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:lumaband.co@gmail.com" title="Email Us">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} LumaBand. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { Activity, Bell, DollarSign, BatteryCharging, Radio, Smartphone, Zap, Check, Heart, Globe, CheckCircle, ArrowRight, Shield, Clock, ChevronRight, Play, Terminal, Accessibility as AccessibilityIcon } from 'lucide-react';
import FloatingShapes from '../components/FloatingShapes';

export default function Home() {
  return (
    <>
      <div className="bg-mesh">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <FloatingShapes />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">Next-Gen Fall Detection</div>
          <h1>Care You Can <span>Wear.</span></h1>
          <p>LumaBand keeps an empathetic eye on your family, sending instant alerts when a fall happens, giving older adults freedom and keeping you in the loop.</p>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '10px' }}>
            <Link href="/order" className="btn btn-primary btn-hero-cta">
              Order Your LumaBand Now <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        
        <div className="hero-visual">
          <img src="/product-pic1.png" alt="LumaBand Wearable" className="band-mockup" />
        </div>
      </section>

      {/* Stats Section */}
      <div className="theme-navy-contrast" style={{ marginTop: '100px' }}>
        <div className="ekg-container">
          <div className="ekg-line"></div>
        </div>

        <section id="problem" className="stats-section" style={{ position: 'relative', zIndex: 10, marginTop: 0 }}>
          <div className="stat-card">
            <h3>40%</h3>
            <p>Of injury-related deaths in Singapore are caused by falls, making it a critical health issue for elders.</p>
          </div>
          <div className="stat-card">
            <h3>20%</h3>
            <p>Of older adults globally live alone, increasing the risk of delayed medical response during emergencies.</p>
          </div>
          <div className="stat-card">
            <h3>94.2%</h3>
            <p>Accuracy of our custom AI detection model, minimizing false alarms and ensuring real help when needed.</p>
          </div>
        </section>
      </div>

      {/* Commercial Video Section */}
      <section id="commercial" style={{ padding: '100px 5% 50px', textAlign: 'center' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(42,84,121,0.15)', border: '1px solid var(--border-color)', position: 'relative' }}>
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/qD6YCma2Z84?si=3nIvbY88-Fu3I_a5" 
            title="YouTube video player" 
            frameBorder={0} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
            style={{ aspectRatio: '16/9', display: 'block' }}
          ></iframe>
        </div>
        <h2 style={{ marginTop: '40px', fontSize: 'clamp(2rem,3vw,2.5rem)', color: 'var(--text-main)' }}>See LumaBand in Action</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>The simplest way to keep your loved ones safe.</p>
      </section>

      {/* Features Section */}
        <section id="features" className="container py-24">
          <div className="section-header">
            <h2>Designed for Peace of Mind</h2>
            <p>LumaBand combines beautiful, wearable design with life-saving technology that operates seamlessly in the background.</p>
          </div>
          <div className="features-grid-v2">
          <div className="feature-card">
            <div className="feature-icon"><Activity /></div>
            <h3>Intelligent Fall Detection</h3>
            <p>Advanced motion sensors detect abnormal shifts in movement, impact, and orientation automatically, without requiring user intervention.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><Bell /></div>
            <h3>Instant Caregiver Alerts</h3>
            <p>Notifies up to 5 emergency contacts via SMS through the mobile app immediately after a fall is confirmed, sharing precise GPS locations.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><DollarSign /></div>
            <h3>No Subscriptions</h3>
            <p>A simple one-time purchase of SGD 74.99. No hidden call-center fees or monthly subscriptions required for full protection.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon"><BatteryCharging /></div>
            <h3>Dependable Battery</h3>
            <p>Powered by a 500 mAh LiPo battery, offering up to 8 hours of independent operation, keeping your loved ones safe throughout the day.</p>
          </div>
        </div>
      </section>

      {/* Technology Split Section */}
      <div className="theme-navy-contrast" style={{ marginTop: '150px', paddingBottom: '200px' }}>
        <div className="radar-container">
          <div className="radar-ring"></div>
          <div className="radar-ring"></div>
          <div className="radar-ring"></div>
        </div>

        <section id="technology" style={{ position: 'relative', zIndex: 2 }}>
          <div className="split-section">
            <div className="split-visual">
              <img src="/productfeatures(withproductannotated).jpg" alt="LumaBand Technology" />
            </div>
            <div className="split-content">
              <h2>Advanced technology that quietly cares.</h2>
              <p>LumaBand processes your movement data continuously in real-time using high-precision sensors and a purpose-built AI model. It doesn't wait for the user to react — it reacts for them.</p>
              
              <div className="tech-badges">
                <span className="tech-badge"><Activity size={16} /> Motion Sensing</span>
                <span className="tech-badge"><Radio size={16} /> Bluetooth Connected</span>
                <span className="tech-badge"><Smartphone size={16} /> App Companion</span>
                <span className="tech-badge"><Zap size={16} /> AI Powered</span>
              </div>
              <Link href="/about" className="btn btn-outline" style={{ marginTop: '30px', borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>Learn about our process</Link>
            </div>
          </div>

          <div className="split-section reverse" style={{ marginTop: '150px' }}>
            <div className="split-visual">
              <img src="/pekka.jpg" alt="LumaBand Mobile App Caregiver View" />
            </div>
            <div className="split-content">
              <h2>The smart ecosystem for caregivers.</h2>
              <p>Our AI model distinguishes between normal activities and real falls. If a fall occurs, an "I'm Okay" prompt appears on the app. If unacknowledged within 30 seconds, alerts and precise location are instantly sent to caregivers.</p>
              
              <div className="check-list">
                <div className="check-item"><Check size={20} /><span><strong>Low False Alarms:</strong> Less than 0.8% false alarm rate through AI refinement.</span></div>
                <div className="check-item"><Check size={20} /><span><strong>GPS Tracking:</strong> Precise location sharing with designated guardians.</span></div>
                <div className="check-item"><Check size={20} /><span><strong>Emergency Contacts:</strong> Fast-dial up to 5 preset emergency contacts.</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-header">
          <h2>Our Mission &amp; Values</h2>
          <p>We strive to deliver peace of mind to families everywhere through accessible, user-centric technology.</p>
        </div>
          <div className="values-grid-v2">
            <div className="value-item">
              <Heart className="text-primary-light" />
              <h4>Empathy</h4>
              <p>We place people at the center, understanding the real fears and needs of users and caregivers.</p>
            </div>
            <div className="value-item">
              <Terminal className="text-primary-light" />
              <h4>Innovation</h4>
              <p>Continuous improvement through research, neural networks, and smart engineering.</p>
            </div>
            <div className="value-item">
              <AccessibilityIcon className="text-primary-light" />
              <h4>Accessibility</h4>
              <p>Safety should never be a privilege. We keep our technology affordable and intuitive.</p>
            </div>
            <div className="value-item">
              <Shield className="text-primary-light" />
              <h4>Integrity</h4>
              <p>Protecting user privacy and maintaining the highest ethical standards in health tech.</p>
            </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box cta-box-premium">
          <div className="cta-premium-left">
            <p className="cta-label">Limited Early Access</p>
            <h2>Ready to protect <span>someone you love?</span></h2>
            <p className="cta-sub">One-time purchase. No hidden fees. No subscriptions. Just complete peace of mind.</p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/order" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '14px 36px' }}>Order Now — SGD 74.99</Link>
              <a href="#features" className="btn btn-outline">See What&apos;s Inside</a>
            </div>
          </div>
          <div className="cta-premium-right">
            <div className="cta-feature-pill"><CheckCircle size={18} /> One-time price, SGD 74.99</div>
            <div className="cta-feature-pill"><CheckCircle size={18} /> No subscriptions ever</div>
            <div className="cta-feature-pill"><CheckCircle size={18} /> Sustainable 3D-printed case</div>
            <div className="cta-feature-pill"><CheckCircle size={18} /> Lifetime algorithm updates</div>
            <div className="cta-feature-pill"><CheckCircle size={18} /> Alert up to 5 contacts</div>
          </div>
        </div>
      </section>
    </>
  );
}

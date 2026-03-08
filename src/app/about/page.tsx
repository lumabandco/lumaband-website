import Link from 'next/link';
import { 
  Heart, 
  Terminal, 
  Shield, 
  Accessibility as AccessibilityIcon,
  Check,
  ChevronRight,
  Package,
  Minimize,
  TrendingDown
} from 'lucide-react';
import FloatingShapes from '../../components/FloatingShapes';

export default function About() {
  return (
    <>
      <div className="bg-mesh">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <FloatingShapes />

      <section className="hero about-hero">
        <div className="hero-content">
          <div className="hero-badge">Our Mission</div>
          <h1>Empowering Independence through <span>Innovation.</span></h1>
          <p>LumaBand started with a personal story and a single goal: to ensure no senior ever has to wait for help after a fall.</p>
        </div>
        <div className="about-hero-image">
          <img src="/team-member(explaining2).png" alt="LumaBand Team Member" />
        </div>
      </section>

      <section className="split-section">
        <div className="split-visual">
          <img src="/teamreceivingcerts.jpg" alt="Our Team's Vision" style={{ objectPosition: 'center', borderRadius: '20px', boxShadow: '0 20px 40px rgba(42, 84, 121, 0.15)' }} />
        </div>
        <div className="split-content">
          <h2>The Origin Story</h2>
          <p>LumaBand originated from a team member&apos;s personal experience with a relative who suffered a fall without timely assistance. This motivated us—a group of high school students at Global Indian International School—to develop a practical, AI-driven solution.</p>
          <p>Consulting with an orthopedic surgeon, we confirmed that delayed responses are a critical clinical issue. We decided to build more than a product; we built a safety net.</p>
          
          <div style={{ marginTop: '40px', padding: '30px', borderRadius: '20px', background: 'var(--surface-color)', border: '1px solid var(--primary)' }}>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>A Letter from our President</h4>
            <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--text-main)' }}>&quot;LumaBand represents more than a product - it is a step towards enabling individuals to live with greater independence and dignity.&quot;</p>
            <p style={{ fontSize: '0.9rem', marginBottom: '0' }}>— Iraj Gupta, President</p>
          </div>
        </div>
      </section>

      <section id="mission-values" style={{ marginTop: '100px', padding: '100px 5%', background: 'rgba(42,84,121,0.04)' }}>
        <div className="section-header">
          <h2>Our Core Values</h2>
          <p>What drives every line of code and every design decision at LumaBand.</p>
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
              <Shield className="text-primary-light" />
              <h4>Integrity</h4>
              <p>Protecting user privacy and maintaining the highest ethical standards in health tech.</p>
            </div>
            <div className="value-item">
              <AccessibilityIcon className="text-primary-light" />
              <h4>Accessibility</h4>
              <p>Safety should never be a privilege. We keep our technology affordable and intuitive.</p>
            </div>
          </div>
      </section>

      <section className="split-section reverse" style={{ marginTop: '100px' }}>
        <div className="split-visual">
          <img src="/product-pic2.png" alt="Sustainability" />
        </div>
        <div className="split-content">
          <h2>Commitment to Sustainability</h2>
          <p>We believe in caring for our elders and our planet simultaneously. Our production process reflects this commitment.</p>
          <ul className="tech-spec-list">
            <li><Package size={20} /> <span><strong>Eco-Materials:</strong> 3D printed using sustainable PLA bioplastics.</span></li>
            <li><Minimize size={20} /> <span><strong>Efficient Design:</strong> Optimized prototyping to minimize material waste.</span></li>
            <li><TrendingDown size={20} /> <span><strong>Low Emissions:</strong> Resource-efficient components and minimal packaging.</span></li>
          </ul>
        </div>
      </section>

      {/* Achievements Gallery */}
      <section className="glass-panel" style={{ padding: '100px 5%', marginTop: '100px' }}>
        <div className="section-header">
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '25px' }}>
            <div className="hero-badge" style={{ marginBottom: 0 }}>National Champions</div>
            <h2 style={{ position: 'relative', margin: 0, display: 'inline-block' }}>
              <svg width="56" height="56" viewBox="0 0 24 24" fill="#FFD700" stroke="#DAA520" strokeWidth="1.5" strokeLinejoin="round" style={{ position: 'absolute', top: '-30px', left: '-40px', transform: 'rotate(-25deg)', filter: 'drop-shadow(0 4px 6px rgba(218,165,32,0.5))', zIndex: -1 }}>
                <path d="M2 4l4 11 6-11 6 11 4-11v16H2V4z"></path>
              </svg>
              JA Singapore Company of the Year
            </h2>
          </div>
          <p>Awarded <strong>1st Place overall</strong> for our innovation, business acumen, and social impact out of teams across Singapore, representing Singapore in the Asia-Pacific round in Seoul, South Korea.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
          <img src="/teamwithtrophy.jpg" alt="Team winning JA Singapore Company of the Year" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(42,84,121,0.15)', border: '1px solid var(--border-color)' }} />
          <img src="/fromsingaporetokorea_withteamincentre.png" alt="From Singapore to Korea" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(42,84,121,0.15)', border: '1px solid var(--border-color)' }} />
        </div>
      </section>

      <section className="cta-section" style={{ paddingTop: '100px' }}>
        <div className="cta-box">
          <h2>Join our mission.</h2>
          <p>Help us bring peace of mind to thousands of families across the Asia-Pacific region and beyond.</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <Link href="/order" className="btn btn-primary">Order Now</Link>
            <a href="mailto:lumaband.co@gmail.com" className="btn btn-outline">Become a Partner</a>
          </div>
        </div>
      </section>
    </>
  );
}

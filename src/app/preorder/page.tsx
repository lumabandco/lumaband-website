'use client';

import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useCart } from '../../components/CartProvider';
import FloatingShapes from '../../components/FloatingShapes';

const UNIT_PRICE = 74.99;

export default function Preorder() {
  const { quantity, setQuantity, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatCurrency = (amount: number) => 
    amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).replace('$', 'SGD ');

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      'full-name': formData.get('full-name'),
      'email': formData.get('email'),
      'phone': formData.get('phone'),
      'quantity': formData.get('quantity'),
      'box-color': formData.get('box-color'),
      'strap-color': formData.get('strap-color'),
      'region': formData.get('region'),
      'shipping-details': formData.get('shipping-details')
    };

    try {
      const response = await fetch('https://sheetdb.io/api/v1/1gxp9v2eah9if', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Order Placed! Thank you for trusting LumaBand. We will contact you soon.');
        clearCart();
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch {
      alert('Error placing order. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-mesh">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>
      <FloatingShapes />

      <section className="hero order-hero">
        <div className="hero-content">
          <div className="hero-badge">Limited Early Access</div>
          <h1>Order Your <span>LumaBand.</span></h1>
          <p>One-time purchase. Lifetime peace of mind. Join the families already protected by LumaBand.</p>
        </div>
        <div className="order-hero-card">
          <div className="ohc-price">SGD 74.99</div>
          <p className="ohc-label">One-time. No subscriptions.</p>
          <div className="ohc-features">
            <div><CheckCircle size={16} /><span>Fall Detection AI</span></div>
            <div><CheckCircle size={16} /><span>GPS Alerts to 5 Contacts</span></div>
            <div><CheckCircle size={16} /><span>8-Hour Battery Life</span></div>
            <div><CheckCircle size={16} /><span>Eco 3D-Printed Case</span></div>
          </div>
          <a href="#order-form" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '10px' }}>Fill in Your Order ↓</a>
        </div>
      </section>

      <section style={{ padding: '20px 5% 100px' }} id="order-form">
        <div className="cta-box" style={{ textAlign: 'left', maxWidth: '1100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px' }}>
          
          <div className="order-info">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>LumaBand Unit</h2>
            <div className="cta-price" style={{ marginBottom: '20px' }}>SGD 74.99</div>
            <p style={{ marginBottom: '30px' }}>Your purchase includes the LumaBand wearable, access to the mobile companion app, and lifetime updates to our fall-detection algorithm.</p>
            
            <div className="order-summary" style={{ background: 'rgba(42,84,121,0.04)', padding: '30px', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
              <h4 style={{ color: 'var(--primary)', marginBottom: '15px' }}>Order Snapshot</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Quantity:</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{quantity}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', borderTop: '1px solid var(--border-color)', paddingTop: '10px', marginTop: '6px' }}>
                  <span>Total Price:</span>
                  <span style={{ color: 'var(--primary)', fontWeight: 700 }}>{formatCurrency(quantity * UNIT_PRICE)}</span>
                </div>
                {quantity > 0 && (
                  <button 
                    type="button" 
                    onClick={clearCart}
                    style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer', textAlign: 'left', fontSize: '0.85rem', padding: 0, marginTop: '10px' }}
                  >
                    Clear Cart
                  </button>
                )}
              </div>
            </div>

            <div style={{ marginTop: '40px' }}>
              <ul className="tech-spec-list">
                <li><CheckCircle size={20} /> Sustainable 3D Printed Case</li>
                <li><CheckCircle size={20} /> No Monthly Subscriptions</li>
                <li><CheckCircle size={20} /> Lifetime Algorithm Updates</li>
              </ul>
            </div>
          </div>

          <div className="order-form-container">
            <form id="preorder-form" className="order-form" onSubmit={handleSubmit}>
              <input type="text" id="full-name" name="full-name" placeholder="Full Name" required />
              <input type="email" id="email" name="email" placeholder="Email Address" required />
              <input type="tel" id="phone" name="phone" placeholder="Phone Number" required />
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <select id="quantity" name="quantity" required value={quantity || ''} onChange={handleQuantityChange}>
                  <option value="" disabled>Quantity</option>
                  <option value="1">1 Unit</option>
                  <option value="2">2 Units</option>
                  <option value="3">3 Units</option>
                  <option value="4">4 Units</option>
                </select>
                <select id="box-color" name="box-color" required defaultValue="">
                  <option value="" disabled>Box Color</option>
                  <option value="red">Red</option>
                  <option value="black">Black</option>
                </select>
              </div>

              <select id="strap-color" name="strap-color" required defaultValue="">
                <option value="" disabled>Strap Color</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="gray">Gray</option>
              </select>

              <input type="text" id="region" name="region" placeholder="Shipping Region" required />
              
              <textarea id="shipping-details" name="shipping-details" placeholder="Full Shipping Address (Street, City, Zip)" required></textarea>
              
              <div style={{ background: 'rgba(42,84,121,0.08)', padding: '20px', borderRadius: '16px', textAlign: 'center', border: '1px dashed var(--primary)' }}>
                <p style={{ fontSize: '0.9rem', marginBottom: '10px', color: 'var(--text-muted)' }}>Scan to Pay Securely via PayNow / UPI</p>
                <img src="/payments.jpeg" alt="Payment QR" style={{ maxWidth: '150px', margin: '0 auto', borderRadius: '10px', boxShadow: '0 10px 20px rgba(0,0,0,0.3)', display: 'block' }} />
                <p style={{ fontSize: '0.8rem', marginTop: '10px', fontStyle: 'italic' }}>Reference: &quot;LumaBand Order - [Your Name]&quot;</p>
              </div>

              <button type="submit" disabled={isSubmitting} className="btn btn-primary" style={{ padding: '18px', fontSize: '1.1rem', width: '100%', marginTop: '20px' }}>
                {isSubmitting ? 'Processing Order...' : 'Place Your Order'}
              </button>
              
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '16px' }}>By ordering, you agree to our Terms of Service. Orders are processed within 3-5 business days.</p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

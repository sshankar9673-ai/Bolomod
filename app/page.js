'use client';
import { useState } from 'react';

export default function Store() {
  const [utr, setUtr] = useState('');
  const [plan, setPlan] = useState('5h');
  const [status, setStatus] = useState('');

  const handleBuy = () => {
    if (utr.length < 8) return alert("कृपया सही 12-अंकों का UTR नंबर दर्ज करें!");
    
    setStatus("✅ आपका UTR सबमिट हो गया है! एडमिन द्वारा अप्रूव होते ही आपकी Key एक्टिवेट हो जाएगी।");
  };

  return (
    <div style={{ padding: '20px', maxWidth: '450px', margin: '30px auto', background: '#0f172a', color: '#fff', borderRadius: '12px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#00d2ff' }}>🔥 BALAMOD TSR STORE 🔥</h2>
      
      <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <p style={{ fontSize: '14px', color: '#cbd5e1' }}>स्कैन करके पेमेंट करें:</p>
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=balamod@paytm" alt="Paytm QR" style={{ borderRadius: '10px', border: '2px solid #00d2ff' }} />
      </div>

      <label style={{ fontSize: '14px', fontWeight: 'bold' }}>1. प्लान चुनें:</label>
      <select value={plan} onChange={(e) => setPlan(e.target.value)} style={{ width: '100%', padding: '12px', margin: '8px 0 15px 0', background: '#1e293b', color: '#fff', borderRadius: '6px', border: '1px solid #334155' }}>
        <option value="1h">1 घंटा - ₹10</option>
        <option value="5h">5 घंटा - ₹25</option>
        <option value="10h">10 घंटा - ₹40</option>
        <option value="24h">24 घंटा - ₹90</option>
        <option value="30d">30 दिन - ₹320</option>
      </select>

      <label style={{ fontSize: '14px', fontWeight: 'bold' }}>2. Paytm UTR / Ref No. डालें:</label>
      <input 
        type="text" 
        value={utr} 
        onChange={(e) => setUtr(e.target.value)} 
        placeholder="12-अंकों का UTR दर्ज करें" 
        style={{ width: '100%', padding: '12px', margin: '8px 0 15px 0', boxSizing: 'border-box', background: '#1e293b', color: '#fff', borderRadius: '6px', border: '1px solid #334155' }}
      />

      <button onClick={handleBuy} style={{ width: '100%', padding: '14px', background: '#00d2ff', color: '#000', border: 'none', fontWeight: 'bold', borderRadius: '6px', cursor: 'pointer' }}>
        पेमेंट सबमिट करें (Buy Key)
      </button>

      {status && <p style={{ color: '#00ffcc', marginTop: '15px', textAlign: 'center', fontSize: '13px' }}>{status}</p>}
    </div>
  );
  }
  

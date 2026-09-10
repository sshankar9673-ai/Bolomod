'use client';
import { useState } from 'react';

export default function AdminPanel() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('5h');
  const [generatedKey, setGeneratedKey] = useState('');

  const handleLogin = () => {
    if (password === 'TSR14') {
      setAuth(true);
    } else {
      alert('गलत पासवर्ड!');
    }
  };

  // Automatic Random Key Generator Logic
  const handleGenerateRandomKey = () => {
    const randomChars = Math.random().toString(36).substring(2, 8).toUpperCase();
    const newKey = `TSR-BALA-${selectedPlan.toUpperCase()}-${randomChars}`;
    setGeneratedKey(newKey);
  };

  if (!auth) {
    return (
      <div style={{ padding: '40px', maxWidth: '350px', margin: '100px auto', background: '#0f172a', color: '#fff', borderRadius: '10px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h3>Admin Panel Login</h3>
        <input 
          type="password" 
          placeholder="एडमिन पासवर्ड डालें (TSR14)" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ width: '100%', padding: '10px', margin: '15px 0', boxSizing: 'border-box', background: '#1e293b', color: '#fff', border: '1px solid #334155', borderRadius: '4px' }}
        />
        <button onClick={handleLogin} style={{ width: '100%', padding: '12px', background: '#2563eb', color: '#fff', border: 'none', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
          लॉगिन
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '40px auto', background: '#0f172a', color: '#fff', borderRadius: '10px', fontFamily: 'sans-serif' }}>
      <h2>⚡ BALAMOD TSR ADMIN PANEL ⚡</h2>

      <div style={{ background: '#1e293b', padding: '20px', borderRadius: '8px', marginTop: '20px' }}>
        <h3>🔑 Automatic Random Key Generator</h3>
        
        <label>प्लांट चुनें:</label>
        <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} style={{ width: '100%', padding: '10px', margin: '10px 0 20px 0', background: '#0f172a', color: '#fff', borderRadius: '4px' }}>
          <option value="1h">1 घंटा</option>
          <option value="5h">5 घंटा</option>
          <option value="10h">10 घंटा</option>
          <option value="24h">24 घंटा</option>
          <option value="30d">30 दिन</option>
        </select>

        <button onClick={handleGenerateRandomKey} style={{ width: '100%', padding: '12px', background: '#00d2ff', color: '#000', border: 'none', fontWeight: 'bold', borderRadius: '4px', cursor: 'pointer' }}>
          रैंडम की जनरेट करें (Generate Random Key)
        </button>

        {generatedKey && (
          <div style={{ marginTop: '20px', padding: '15px', background: '#0f172a', border: '1px dashed #00ffcc', borderRadius: '6px', textAlign: 'center' }}>
            <p style={{ margin: 0, color: '#aaa', fontSize: '12px' }}>Generated Key:</p>
            <h2 style={{ color: '#00ffcc', margin: '10px 0' }}>{generatedKey}</h2>
          </div>
        )}
      </div>
    </div>
  );
            }
    

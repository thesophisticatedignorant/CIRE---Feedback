import React, { useState, useEffect } from 'react';
import { useWindowManager } from '../context/WindowManager';

export default function CookieConsentBanner() {
  const [show, setShow] = useState(false);
  const { togglePrivacyPolicy } = useWindowManager();

  useEffect(() => {
    const consent = localStorage.getItem('cire_cookie_consent_v2');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (status) => {
    localStorage.setItem('cire_cookie_consent_v2', status);
    setShow(false);
    
    // If we're using Vercel Analytics, it initializes automatically but we can 
    // control tracking if needed. For now, just recording the consent is enough.
    // If they accept, we could re-initialize or let the reload handle it.
    if (status === 'granted') {
      window.location.reload(); // Reload to initialize analytics cleanly if needed
    }
  };

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: '#1c1c1c',
      color: '#a0a0a0',
      padding: '1rem',
      fontSize: '0.75rem',
      fontFamily: 'var(--font-mono, monospace)',
      borderTop: '1px solid #333',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 -10px 30px rgba(0,0,0,0.5)'
    }}>
      <div style={{ marginBottom: '1rem', maxWidth: '800px', textAlign: 'center' }}>
        <p>
          MANDATORY WAIVER: By accessing and continuing to use this site, you explicitly consent to the mandatory collection of your metadata (including IP address, location, and device information) for security and analytics purposes. Continued use constitutes a complete waiver of privacy claims regarding this collected data as outlined in our{' '}
          <button 
            onClick={() => {
              if (togglePrivacyPolicy) togglePrivacyPolicy(true);
            }} 
            style={{ color: '#d0d0d0', textDecoration: 'underline', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}
          >
            Privacy Policy
          </button>.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button 
          onClick={() => handleConsent('granted')}
          style={{
            padding: '8px 24px',
            backgroundColor: '#fff',
            color: '#000',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#ddd'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#fff'}
        >
          I Acknowledge & Agree
        </button>
      </div>
    </div>
  );
}

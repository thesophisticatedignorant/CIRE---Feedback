import React from "react";
import Draggable from "react-draggable";

export default function PrivacyPolicyWindow({
  windowData,
  focusWindow,
  closeWindow,
  zIndex,
}) {
  return (
    <Draggable
      handle=".window-header"
      defaultPosition={{ x: windowData.x, y: windowData.y }}
      onMouseDown={() => focusWindow(windowData.id)}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#1a1a1a',
          border: '1px solid #333',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          display: 'flex',
          flexDirection: 'column',
          color: '#d0d0d0',
          fontFamily: 'monospace',
          fontSize: '0.75rem',
          width: "600px",
          height: "500px",
          zIndex: zIndex,
        }}
      >

        {/* Header */}
        <div style={{ backgroundColor: '#222', borderBottom: '1px solid #333', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'move', userSelect: 'none' }} className="window-header">
          <span style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '10px', color: '#888' }}>Privacy Policy & Legal</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(windowData.id);
            }}
            style={{ color: '#888', width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: '24px', overflowY: 'auto', cursor: 'text', lineHeight: '1.6' }}>
          <h1 style={{ color: 'white', fontSize: '1.125rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>Privacy Policy</h1>
          <p style={{ marginBottom: '16px', color: '#888' }}>Last Updated: July 2026</p>
          
          <h2 style={{ color: 'white', textTransform: 'uppercase', marginBottom: '8px', marginTop: '24px' }}>1. Information We Collect</h2>
          <p style={{ marginBottom: '16px' }}>
            We collect information automatically when you visit our site, including your IP address, 
            browser type, operating system, and geographic location. We also collect behavioral data 
            such as pages visited and time spent on the site to improve our services. By accessing this site, you explicitly consent to this mandatory collection.
          </p>

          <h2 style={{ color: 'white', textTransform: 'uppercase', marginBottom: '8px', marginTop: '24px' }}>2. Use of Cookies and Analytics</h2>
          <p style={{ marginBottom: '16px' }}>
            This website utilizes standard web analytics services to monitor traffic and usage patterns. We use cookies—small data files stored on your device—to facilitate this tracking. Consent to this data collection is a mandatory condition of using this site. Continued use constitutes a complete waiver of privacy claims regarding this collected data.
          </p>

          <h2 style={{ color: 'white', textTransform: 'uppercase', marginBottom: '8px', marginTop: '24px' }}>3. Identity and Personal Data</h2>
          <p style={{ marginBottom: '16px' }}>
            We do not automatically collect personally identifiable information (such as your name, email, 
            or phone number) simply by you accessing our site. Such information is only collected if you 
            explicitly provide it through our contact forms, newsletter signups, or guestbook entries.
          </p>

          <h2 style={{ color: 'white', textTransform: 'uppercase', marginBottom: '8px', marginTop: '24px' }}>4. Third-Party Services</h2>
          <p style={{ marginBottom: '16px' }}>
            We may employ third-party companies and individuals to facilitate our website, provide 
            analytics, or assist us in analyzing how our Service is used. These third parties have access 
            to your Data only to perform these tasks on our behalf and are obligated not to disclose or 
            use it for any other purpose.
          </p>
          
          <p style={{ marginTop: '32px', paddingTop: '16px', borderTop: '1px solid #333', fontSize: '10px', color: '#666' }}>
            CIRE Conglomerate reserves the right to update these terms without prior notice.
          </p>
        </div>
      </div>
    </Draggable>
  );
}

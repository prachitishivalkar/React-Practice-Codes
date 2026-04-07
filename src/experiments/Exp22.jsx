import React from 'react';
// Note: We keep these imports so you can switch them 
// but the styles will be added to your master App.css
import '../App.css'; 
import styles from '../App.module.css'; 

export default function Exp22() {
  // APPROACH 1: Inline Styling Object
  const inlineCardStyle = {
    backgroundColor: '#450a0a',
    border: '2px solid #991b1b',
    padding: '24px',
    borderRadius: '16px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const inlineTextStyle = {
    color: '#fecaca',
    fontSize: '1rem',
    fontWeight: 'bold',
    margin: 0
  };

  return (
    <div className="exp22-main-viewport">
      <div className="exp22-container">
        <header className="exp22-header">
          <h1>Styling Methodologies</h1>
          <p>React Practical No. 22: Implementation of CSS Approaches</p>
        </header>

        <div className="exp22-grid">
          {/* METHOD 1: INLINE STYLING */}
          <div style={inlineCardStyle}>
            <span style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 800 }}>METHOD 01</span>
            <h3 style={inlineTextStyle}>Inline Styling</h3>
            <p style={{ color: '#7f1d1d', marginTop: '10px', fontSize: '0.8rem' }}>Styles passed as JS objects</p>
          </div>

          {/* METHOD 2: EXTERNAL STYLESHEET */}
          <div className="exp22-externalCard">
            <span style={{ color: '#818cf8', fontSize: '0.75rem', fontWeight: 800 }}>METHOD 02</span>
            <h3 className="exp22-externalText">External CSS</h3>
            <p style={{ color: '#312e81', marginTop: '10px', fontSize: '0.8rem' }}>Global .css file import</p>
          </div>

          {/* METHOD 3: CSS MODULES */}
          <div className={styles.exp22ModuleCard}>
            <span style={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 800 }}>METHOD 03</span>
            <h3 className={styles.exp22ModuleTitle}>CSS Modules</h3>
            <p style={{ color: '#065f46', marginTop: '10px', fontSize: '0.8rem' }}>Scoped local identity</p>
          </div>
        </div>

        <footer className="exp22-footer">
          <p>Observe the class names in Browser Inspector (F12) to see local scoping in action.</p>
        </footer>
      </div>
    </div>
  );
}
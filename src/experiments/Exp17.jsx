import React, { useState } from 'react';

function Exp17() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    setCount(prev => prev + 1);
  };

  return (
    <div className={`exp17-app-canvas ${isActive ? 'exp17-active-mode' : ''}`}>
      <div className="exp17-hook-card">
        <h2 className="exp17-title">React Hook States</h2>
        
        <div className="exp17-state-monitor">
          <div className="exp17-stat-item">
            <label>Counter State</label>
            <span className="exp17-value">{count}</span>
          </div>
          <div className="exp17-stat-item">
            <label>Boolean State</label>
            <span className={`exp17-status-pill ${isActive ? 'exp17-on' : 'exp17-off'}`}>
              {isActive ? 'Active' : 'Inactive'}
            </span>
          </div>
        </div>

        <div className="exp17-input-section">
          <label>String State Preview</label>
          <input 
            type="text" 
            placeholder="Type something..." 
            className="exp17-input"
            value={text} 
            onChange={(e) => setText(e.target.value)} 
          />
          <p className="exp17-preview-text">{text || 'No text entered'}</p>
        </div>

        <button className="exp17-action-btn" onClick={handleToggle}>
          Toggle & Increment
        </button>
      </div>
    </div>
  );
}

export default Exp17;
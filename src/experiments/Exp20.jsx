import React, { useState } from 'react';

function Exp20() {
  const [items, setItems] = useState(['Master React', 'Learn CSS Grid', 'Optimize Keys']);

  const addItem = () => {
    const val = prompt("Enter Task:");
    if (val) setItems([val, ...items]); 
  };

  const remove = (index) => setItems(items.filter((_, i) => i !== index));

  return (
    <div className="exp20-layout-root">
      <div className="exp20-main-container">
        <header className="exp20-main-header">
          <h1>Key Reconciliation Demo</h1>
          <button className="exp20-primary-btn" onClick={addItem}>Add Task to Top</button>
        </header>

        <div className="exp20-dual-section">
          {/* LEFT SIDE: WITHOUT PROPER KEYS */}
          <section className="exp20-demo-panel exp20-danger-zone">
            <div className="exp20-panel-header">
              <h3>Without Keys</h3>
              <span className="exp20-badge">Using Index</span>
            </div>
            <div className="exp20-list-container">
              {items.map((item, index) => (
                <div key={index} className="exp20-list-row">
                  <span className="exp20-meta">Pos: {index}</span>
                  <input defaultValue={item} className="exp20-styled-input" />
                  <button className="exp20-del-btn" onClick={() => remove(index)}>&times;</button>
                </div>
              ))}
            </div>
            <p className="exp20-warning-text">⚠️ Focus & text will glitch when adding to top.</p>
          </section>

          {/* RIGHT SIDE: WITH PROPER KEYS */}
          <section className="exp20-demo-panel exp20-success-zone">
            <div className="exp20-panel-header">
              <h3>With Unique Keys</h3>
              <span className="exp20-badge">Using Identity</span>
            </div>
            <div className="exp20-list-container">
              {items.map((item) => (
                <div key={item} className="exp20-list-row">
                  <span className="exp20-meta">ID: {item.substring(0,3)}</span>
                  <input defaultValue={item} className="exp20-styled-input" />
                  <button className="exp20-del-btn" onClick={() => remove(items.indexOf(item))}>&times;</button>
                </div>
              ))}
            </div>
            <p className="exp20-success-text">✅ UI state stays perfectly synced with data.</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Exp20;
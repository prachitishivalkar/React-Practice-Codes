import React, { useState, useEffect } from 'react';

const LifecycleChild = ({ count }) => {
  useEffect(() => {
    // 1. Mounting Phase
    console.log("%c Child Mounted ", "background: #10b981; color: white");
    
    return () => {
      // 3. Unmounting Phase (Cleanup)
      console.log("%c Child Unmounted ", "background: #ef4444; color: white");
    };
  }, []); // Empty dependency array means this runs once

  useEffect(() => {
    // 2. Updating Phase
    if (count > 0) {
      console.log(`%c Child Updated: Count is ${count} `, "background: #3b82f6; color: white");
    }
  }, [count]); // Runs whenever 'count' changes

  return (
    <div className="exp16-status-box">
      <p>Lifecycle Monitor Active</p>
      <div className="exp16-pulse-dot"></div>
    </div>
  );
};

function Exp16() {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);

  return (
    <div className="exp16-container">
      <div className="exp16-life-card">
        <h2 className="exp16-title">Lifecycle Demo</h2>
        <p className="exp16-description">Check the browser console to see phases in action.</p>
        
        <div className="exp16-display-area">
          <h1 className="exp16-count-text">{count}</h1>
          {showChild && <LifecycleChild count={count} />}
        </div>

        <div className="exp16-action-grid">
          <button 
            onClick={() => setCount(c => c + 1)} 
            className="exp16-btn exp16-update"
          >
            Update (State Change)
          </button>
          
          <button 
            onClick={() => setShowChild(!showChild)} 
            className="exp16-btn exp16-toggle"
          >
            {showChild ? 'Unmount Component' : 'Mount Component'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Exp16;
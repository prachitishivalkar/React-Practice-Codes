import React, { useState } from 'react';

const StatusCard = ({ title, onStatusChange }) => {
  const statuses = ['Active', 'Paused', 'Archived'];
  return (
    <div className="exp15-status-card">
      <h4>{title}</h4>
      <div className="exp15-status-grid">
        {statuses.map((status) => (
          <button 
            key={status} 
            onClick={() => onStatusChange(status)} 
            className="exp15-status-btn"
          >
            Set to {status}
          </button>
        ))}
      </div>
    </div>
  );
};

function Exp15() {
  const [currentStatus, setCurrentStatus] = useState('Active');
  
  const updateSystemStatus = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  return (
    <div className="exp15-dashboard">
      <div className="exp15-main-panel">
        <header className="exp15-header">
          <h1>System Control</h1>
          <div className={`exp15-badge exp15-${currentStatus.toLowerCase()}`}>
            {currentStatus}
          </div>
        </header>
        <StatusCard title="Project Alpha Settings" onStatusChange={updateSystemStatus} />
      </div>
    </div>
  );
}

export default Exp15;
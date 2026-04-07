import React, { useState } from 'react';

function Exp18() {
  const [form, setForm] = useState({ username: '', email: '', bio: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="exp18-form-wrapper">
      <div className="exp18-form-container">
        {/* LIVE PREVIEW CARD */}
        <div className="exp18-live-preview-card">
          <div className="exp18-avatar-circle">{form.username.charAt(0) || '?'}</div>
          <h3>{form.username || 'Your Name'}</h3>
          <p className="exp18-preview-email">{form.email || 'email@example.com'}</p>
          <div className="exp18-preview-bio">
            <small>About me:</small>
            <p>{form.bio || 'Your story starts here...'}</p>
          </div>
        </div>

        {/* EDIT FORM */}
        <form className="exp18-realtime-form" onSubmit={(e) => e.preventDefault()}>
          <h2>Edit Profile</h2>
          <div className="exp18-field">
            <label>Username</label>
            <input 
              name="username" 
              value={form.username} 
              onChange={handleChange} 
              placeholder="e.g. Alex" 
              maxLength="20" 
            />
          </div>
          <div className="exp18-field">
            <label>Email</label>
            <input 
              name="email" 
              value={form.email} 
              onChange={handleChange} 
              placeholder="alex@service.com" 
            />
          </div>
          <div className="exp18-field">
            <label>Short Bio</label>
            <textarea 
              name="bio" 
              value={form.bio} 
              onChange={handleChange} 
              placeholder="Tell us something..." 
              rows="3" 
            />
          </div>
          <div className="exp18-char-count">{form.bio.length} / 150 characters</div>
        </form>
      </div>
    </div>
  );
}

export default Exp18;
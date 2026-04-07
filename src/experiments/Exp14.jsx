import React, { useState } from 'react';

function Exp14() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Registered:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', password: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="exp14-container">
      <div className="exp14-form-card">
        <h2>Create Account</h2>
        <p className="exp14-subtitle">Join our community today</p>
        
        <form onSubmit={handleSubmit}>
          <div className="exp14-input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="exp14-input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="hello@reallygoodcode.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="exp14-input-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className={submitted ? 'exp14-btn-success' : ''}>
            {submitted ? 'Registration Successful!' : 'Sign Up'}
          </button>
        </form>

        {submitted && <p className="exp14-success-msg">Check your email for verification!</p>}
      </div>
    </div>
  );
}

export default Exp14;
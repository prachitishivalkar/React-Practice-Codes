import React, { useState } from 'react';

function Exp19() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = "";
    if (name === "username") {
      if (value.length < 3) error = "Username must be at least 3 characters.";
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) error = "Please enter a valid email address.";
    } else if (name === "password") {
      if (value.length < 6) error = "Password must be at least 6 characters.";
    }
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some(err => err !== "") || 
                      Object.values(formData).some(val => val === "");
    
    if (hasErrors) {
      alert("Please fix the errors before submitting.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="exp19-validation-container">
      <div className="exp19-auth-card">
        <h2>Secure Register</h2>
        <form onSubmit={handleSubmit} noValidate className="exp19-form">
          <div className="exp19-field">
            <label className="exp19-label">Username</label>
            <input 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              className={`exp19-input ${errors.username ? 'exp19-error-border' : ''}`} 
              placeholder="User123" 
            />
            {errors.username && <span className="exp19-error-text">{errors.username}</span>}
          </div>

          <div className="exp19-field">
            <label className="exp19-label">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className={`exp19-input ${errors.email ? 'exp19-error-border' : ''}`} 
              placeholder="mail@example.com" 
            />
            {errors.email && <span className="exp19-error-text">{errors.email}</span>}
          </div>

          <div className="exp19-field">
            <label className="exp19-label">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className={`exp19-input ${errors.password ? 'exp19-error-border' : ''}`} 
              placeholder="••••••" 
            />
            {errors.password && <span className="exp19-error-text">{errors.password}</span>}
          </div>

          <button type="submit" className="exp19-auth-btn">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default Exp19;
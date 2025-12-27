import React, { useState } from 'react';
import SEO from '../components/SEO';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We'll be in touch soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-page">
      <SEO
        title="Contact Us"
        description="Get in touch with Bean Buzz. Visit us at Roast City, call us, or send a message. We'd love to hear from you."
      />
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Whether you have a question or just want to say hi.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>📍 Visit Us</h3>
            <p>123 Coffee Lane, Roast City</p>
          </div>
          <div className="info-item">
            <h3>📞 Call Us</h3>
            <p>(123) 456-7890</p>
          </div>
          <div className="info-item">
            <h3>✉️ Email</h3>
            <p>hello@beanbuzz.com</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="How can we help?"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

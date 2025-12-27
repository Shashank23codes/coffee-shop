import React from 'react';
import SEO from '../components/SEO';
import '../styles/About.css';

const About = () => (
  <section className="about-page">
    <SEO
      title="Our Story"
      description="Learn about Bean Buzz's journey since 2005. We are committed to ethical sourcing, master roasting, and building community."
    />
    <div className="about-hero">
      <h2>Our Story</h2>
      <p>
        Founded in 2005, Bean Buzz began with a simple mission: to serve the perfect cup of coffee.
        Situated in the heart of the city, we source the finest ethically grown beans from around the world.
      </p>
    </div>

    <div className="about-content">
      <div className="value-card">
        <h3>🌱 Ethical Sourcing</h3>
        <p>We work directly with farmers to ensure fair wages and sustainable practices.</p>
      </div>
      <div className="value-card">
        <h3>🔥 Master Roasting</h3>
        <p>Small-batch roasting brings out the unique character of every bean.</p>
      </div>
      <div className="value-card">
        <h3>❤️ Community</h3>
        <p>More than a coffee shop, we are a gathering place for friends and neighbors.</p>
      </div>
    </div>

    <div className="about-footer">
      <p>
        Our master roasters carefully craft each batch to bring out unique flavor profiles, ensuring that
        every sip allows you to experience the passion and dedication we put into our work.
      </p>
    </div>
  </section>
);

export default About;

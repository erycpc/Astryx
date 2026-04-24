import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="Home">
        <h1>Crafting Stories That Matter</h1>
        <p>Astryx is a film production company dedicated to creating authentic, powerful narratives that resonate across cultures and generations.</p>

        <Link to="/our-work" className="btn">Our Work</Link>
        <Link to="/contact-us" className="btn">Contact Us</Link>
      </div>

      {/* BTS Preview Section */}
      <div className="bts-preview-section">
        <h2>Behind The Scenes</h2>
        <p className="section-subtitle">Get an exclusive look at our creative process</p>
        
        <div className="bts-preview-grid">
          <div className="bts-preview-card">
            <video src="/bts1.mp4" controls></video>
            <div className="bts-preview-info">
              <h3>Making of Film 1</h3>
              <p>A glimpse into the making of Film 1.</p>
            </div>
          </div>

          <div className="bts-preview-card">
            <video src="/bts2.mp4" controls></video>
            <div className="bts-preview-info">
              <h3>Making of Film 2</h3>
              <p>A glimpse into the making of Film 2.</p>
            </div>
          </div>
        </div>
        
        <Link to="/behind-the-scenes" className="btn-view-more">View All Behind The Scenes</Link>
      </div>

      {/* Our Work Preview Section */}
      <div className="work-preview-section">
        <h2>Our Work</h2>
        <p className="section-subtitle">Get an exclusive look at our Latest Films</p>

        <div className="work-preview-grid">
          <div className="work-preview-card">
            <video src="/newfilm1.mp4" controls></video>
            <div className="work-preview-info">
              <h3>The Broken Promise</h3>
              <p>The Broken Promise is a heartfelt drama about love, regret, and second chances.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className="contact-preview-section">
        <h2>Let's Create Together</h2>
        <p className="section-subtitle">Have a story to tell? We'd love to hear from you</p>

        <div className="contact-preview-content">
          <div className="contact-preview-cards">
            <div className="contact-preview-card">
              <div className="contact-preview-icon">📧</div>
              <h3>Email Us</h3>
              <p><a href="mailto:hello@astryx.com">hello@astryx.com</a></p>
            </div>

            <div className="contact-preview-card">
              <div className="contact-preview-icon">📞</div>
              <h3>Call Us</h3>
              <p><a href="tel:+254123456789">+254 123 456 789</a></p>
            </div>

            <div className="contact-preview-card">
              <div className="contact-preview-icon">📍</div>
              <h3>Visit Us</h3>
              <p>123 Film Street<br />Nairobi, Kenya</p>
            </div>
          </div>

          <Link to="/contact-us" className="btn-contact-full">Get In Touch</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
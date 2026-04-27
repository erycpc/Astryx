function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">Let's bring your story to life</p>

      <div className="contact-content">
        <div className="contact-form-section">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="john@example.com"
                required 
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="+254 723 456 437"
              />
            </div>

            <div className="form-group">
              <label htmlFor="project">Project Type</label>
              <select id="project" name="project" required>
                <option value="">Select a service</option>
                <option value="film">Film Production</option>
                <option value="documentary">Documentary</option>
                <option value="commercial">Commercial</option>
                <option value="music-video">Music Video</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell Us About Your Project</label>
              <textarea 
                id="message" 
                name="message" 
                rows="6"
                placeholder="Share your vision with us..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Visit Us</h3>
            <p>123 Film Street<br />Nairobi, Kenya</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <h3>Email Us</h3>
            <p><a href="mailto:hello@astryx.com">hello@astryx.com</a></p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Call Us</h3>
            <p><a href="tel:+254123456789">+254 123 456 789</a></p>
          </div>

          <div className="contact-card">
            <div className="contact-icon">🕐</div>
            <h3>Working Hours</h3>
            <p>Mon - Fri: 9AM - 6PM<br />Sat: 10AM - 4PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
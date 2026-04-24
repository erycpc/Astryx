import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const btsItems = [
    { src: "/bts1.mp4", title: "Making of Film 1", desc: "A glimpse into the making of Film 1." },
    { src: "/bts2.mp4", title: "Making of Film 2", desc: "A glimpse into the making of Film 2." }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <main className="home-container">

      {/* Hero Section */}
      <section className="Home" aria-labelledby="hero-title">
        <h1 id="hero-title">Crafting Stories That Matter</h1>
        <p>Astryx is a film production company dedicated to creating authentic, powerful narratives that resonate across cultures and generations.</p>

        <Link to="/our-work" className="btn btn--primary">View Our Work</Link>
        <Link to="/contact-us" className="btn btn--secondary">Contact Us</Link>
      </section>

      {/* BTS Preview Section */}
      <section className="bts-preview-section" aria-labelledby="bts-title">
        <h2 id="bts-title">Behind The Scenes</h2>
        <p className="section-subtitle">Get an exclusive look at our creative process</p>
        
        <div className="bts-preview-grid">
          {btsItems.map((item, index) => (
            <div className="bts-preview-card" key={index}>
              <video src={item.src} controls preload="metadata" muted playsInline>
                <track kind="captions" src="/captions.vtt" srclang="en" label="English" />
              </video>
              <div className="bts-preview-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <Link to="/behind-the-scenes" className="btn-view-more">View All Behind The Scenes</Link>
      </section>

      {/* Our Work Preview Section */}
      <section className="work-preview-section" aria-labelledby="work-title">
        <h2 id="work-title">Our Work</h2>
        <p className="section-subtitle">Get an exclusive look at our Latest Films</p>

        <div className="work-preview-grid">
          <div 
            className={`work-preview-card ${isPlaying ? 'is-playing' : ''}`}
            onClick={togglePlay}
            role="button"
            aria-label={isPlaying ? "Pause video" : "Play video"}
            tabIndex={0}
          >
            <video ref={videoRef} src="/newfilm1.mp4" controls preload="metadata" muted playsInline>
              <track kind="captions" src="/captions.vtt" srclang="en" label="English" />
            </video>
            <div className="work-preview-info">
              <h3>The Broken Promise</h3>
              <p>The Broken Promise is a heartfelt drama about love, regret, and second chances.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Us */}
      <section className="contact-preview-section" aria-labelledby="contact-title">
        <h2 id="contact-title">Let's Create Together</h2>
        <p className="section-subtitle">Have a story to tell? We'd love to hear from you</p>

        <div className="contact-preview-content">
          <div className="contact-preview-cards" role="group" aria-label="Contact options">
            <div className="contact-preview-card">
              <span className="contact-preview-icon" aria-hidden="true">📧</span>
              <h3>Email Us</h3>
              <p><a href="mailto:hello@astryx.com">hello@astryx.com</a></p>
            </div>

            <div className="contact-preview-card">
              <span className="contact-preview-icon" aria-hidden="true">📞</span>
              <h3>Call Us</h3>
              <p><a href="tel:+254123456789">+254 123 456 789</a></p>
            </div>

            <div className="contact-preview-card">
              <span className="contact-preview-icon" aria-hidden="true">📍</span>
              <h3>Visit Us</h3>
              <p>123 Film Street<br />Nairobi, Kenya</p>
            </div>
          </div>

          <Link to="/contact-us" className="btn-contact-full">Get In Touch</Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
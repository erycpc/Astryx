import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About Us</h2>
        
        <div className="about-opening">
          <p className="about-hook">
            "We don't just make films. We make moments that stay with you long after the credits roll."
          </p>
        </div>

        <div className="about-story">
          <h3 className="about-heading">Our Story</h3>
          <p className="about-paragraph">
            Astryx was born in 2025 in the heart of Nairobi — not from a business plan, but from a shared obsession with truth. Our founders had grown tired of formulaic content and empty spectacle. They wanted to return to something rawer: stories that matter, voices that deserve to be heard.
          </p>
          <p className="about-paragraph">
            What drives us is simple — the belief that every person carries a story worth telling. Whether it's a quiet documentary about a street vendor's dream or a short film exploring the complexities of modern relationships, we approach each project with the same reverence. We're not interested in trends. We're interested in authenticity.
          </p>
          <p className="about-paragraph">
            Nairobi is our canvas, but our stories don't recognize borders. From urban rooftops to remote villages, we find beauty in the in-between spaces — the moments where cultures collide, where generations intersect, where the ordinary becomes extraordinary.
          </p>
        </div>

        <div className="about-services">
          <h3 className="about-heading">What We Do</h3>
          <ul className="about-services-list">
            <li><strong>Short Films</strong> — emotional narratives distilled into tight, powerful frames</li>
            <li><strong>Documentaries</strong> — uncovering truths the world hasn't seen</li>
            <li><strong>Branded Content</strong> — storytelling that sells without screaming</li>
            <li><strong>Music Videos</strong> — visual poetry set to sound</li>
          </ul>
        </div>

        <div className="about-approach">
          <h3 className="about-heading">Our Approach</h3>
          <p className="about-paragraph">
            We don't work with scripts alone — we work with people. Every project begins with listening, understanding the heartbeat of a story before we even pick up a camera. Our process is collaborative and deeply human: we spend time in the spaces we film, we let the environment shape the narrative, we trust our subjects as much as we trust our craft.
          </p>
          <p className="about-paragraph">
            This means we're willing to abandon the plan when reality offers something richer. We shoot with intention, edit with discipline, and deliver work that resonates beyond the screen.
          </p>
        </div>

        <div className="about-cta">
          <p className="about-cta-text">
            Let's create something that matters. <a href="/contact" className="about-cta-link">Reach out</a> — we'd love to hear your story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
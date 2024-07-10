import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/OurPrograms.css'; 

const OurPrograms = () => {
  return (
    <div className="prog-container">
      <h1>Our Programs</h1>
      <div className="programs">
        <Link to="/program/aatadalliAdhyatma" className="prog-card">
          <div className="our-prog-content">
            <h2>Aatadalli Adhyatma</h2>
            <p>Play, Learn, Enlighten: Dive into Tattva Jnana with Aatadalli Adhyatma!</p>
          </div>
        </Link>
        <Link to="/program/thoughtsAtTeenage" className="prog-card">
          <div className="our-prog-content">
            <h2>Thoughts at Teenage</h2>
            <p>Empowering Teen Minds: Shaping Futures with Clarity, Confidence, and Purpose at SSP's Thoughts at Teenage</p>
          </div>
        </Link>
        <Link to="/program/brahmavidyaClasses" className="prog-card">
          <div className="our-prog-content">
            <h2>Brahmavidya Classes</h2>
            <p>Unlocking Wisdom: Personalized Deep Dives into Dvaita Philosophy with SSP's Brahmavidya Classes</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default OurPrograms;
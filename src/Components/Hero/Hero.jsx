import React from "react";
import './Hero.css';
import logoanime from '../Assets/logoanime.mp4';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero">
                <div className="background"></div>
                <div className="hero-content">
                    <div className="left">
                        <h2 className="textured-text">Samskara Samskriti Prabodhini</h2>
                        <div>
                            <p className="text">Dharma Eva Hato Hanti Dharmo Rakshati RakshitaH</p>
                        </div>
                        <br />
                        <div className="home-left-para">
                        <p>Samskara Samskriti Prabodhini(SSP) is an initiative to awaken spirituality, reignite swadharma and promote moral consciousness, all while nurturing a deep reverence for nature and fostering patriotism.</p>
                        <br />
                        <p>To address the root cause for societal upheaval, SSP, through deep contemplation acknowledges that the solution lies within the wisdom of The Great Indian Epics. Its mission is to guide those who blindly follow others and empower those already aligned with righteousness, rather than focusing solely on reforming those who stray from the path.</p>
                        </div>
                    </div>
                    <div className="right">
                        <video className="logoanime-video" src={logoanime} autoPlay loop muted>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

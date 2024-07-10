import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/AboutUs.css';
import Sreedevi from '../Components/Assets/Sreedevi.jpg'
import Nandini from '../Components/Assets/Nandini.jpg'
import Nalini from '../Components/Assets/Nalini.jpg'
import Abhijna from '../Components/Assets/Abhijna.jpg'
import Prushnija from '../Components/Assets/Prushnija.jpg'
import Pravisha from '../Components/Assets/Pravisha.jpg'
import Ananya from '../Components/Assets/Ananya.jpg'
import Payoja from '../Components/Assets/Payoja.jpg'
import Praneetha from '../Components/Assets/Praneetha.jpg'


const AboutUs = () => {
    useEffect(() => {
        // Add animation on page load
        const aboutUsContainer = document.querySelector('.aboutUs-container');
        aboutUsContainer.classList.add('fade-in');
    }, []);

    return (
        <div>
            <div className="aboutUs-heading">
                <h1>About Us</h1>
            </div>
            <div className="aboutUs-container">
                <div className="para">
                    <p>God's magnificently crafted universe stood as a testament to harmony and balance. Yet, over time, it has transformed into a terrifying society where everyone is devoid of protection. This transformation stems from the forgetting of divine power, the abandonment of individual dharma by all varnashramas, misuse of nature and the disregard for human values.</p>
                    
                    <p>In this environment, where even extensive surveillance from authorities, courts, or CCTV cameras fails to bring rectification, SSP found its purpose. After a deep contemplation, SSP acknowledged that the solution lies within the wisdom of the great Indian epics which in turn guide individual to introspect thereby leaving a deep impression in one's mind, that is "Samskara". Such 'Samskara' can only be structured through "Samskriti". SSP strives to reawaken this 'Samskriti'. With this, "Samskara-Samskriti Prabodhinee" became functional in 2017.</p>
                    
                    <p>To cater to individuals of all age groups, SSP organizes a range of programs including
                        <Link to="/program/aatadalliAdhyatma" className="para">
                            <span> "Aatadalli Adhyatma"</span>,
                        </Link>
                        <Link to="/program/thoughtsAtTeenage" className="para">
                            <span> "Thoughts at Teenage"</span>,
                        </Link>
                         and
                        <Link to="/program/brahmavidyaClasses" className="para">
                            <span> "Brahmavidya Classes"</span>.
                        </Link>
                    </p>
                </div>
            </div>
            <div className="founder-cofounder">
                <div className="aboutUs-heading">
                    <h1>Founder & Cofounder</h1>
                </div>
                <div className="team-member-row">
                    <div className="member-container">
                        <div className="member">
                            <img src={Sreedevi} alt="Founder" />
                        </div>
                        <div className="member-info">
                            <h4>Sreedevi Kambaluru</h4>
                            <h5>Founder</h5>
                        </div>
                    </div>
                    <div className="member-container">
                        <div className="member">
                            <img src={Nandini} alt="Founder" />
                        </div>
                        <div className="member-info">
                            <h4>Nandini Tatri</h4>
                            <h5>CoFounder</h5>
                        </div>
                    </div>
                    <div className="member-container">
                        <div className="member">
                            <img src={Nalini} alt="Founder" />
                        </div>
                        <div className="member-info">
                            <h4>Nalini Navali</h4>
                            <h5>CoFounder</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="team-members">
                <div className="aboutUs-heading">
                    <h1>Team Members</h1>
                </div>
                <div className="team-member-row">
                    <div className="member">
                        <img src={Abhijna} alt="Abhijna VT" />
                        <p>Abhijna VT</p>
                    </div>
                    <div className="member">
                    <img src={Prushnija} alt="Prushnija AK" />
                    <p>Prushnija AK</p>
                    </div>
                    <div className="member">
                    <img src={Pravisha} alt="Pravisha RN" />
                    <p>Pravisha RN</p>
                    </div>
                </div>
                <div className="team-member-row">
                    <div className="member">
                    <img src={Ananya} alt="Ananya VT" />
                    <p>Ananya VT</p>
                    </div>
                    <div className="member">
                    <img src={Payoja} alt="Payoja AK" />
                    <p>Payoja AK</p>
                    </div>
                    <div className="member">
                    <img src={Praneetha} alt="Praneetha RN" />
                    <p>Praneetha RN</p>
                    </div>
                </div>
            </div>

            <div className="aboutus-page">
                <footer>
                    <p>&copy; 2024 SSP. All rights reserved.</p>
                </footer>
            </div>

        </div>
    );
};

export default AboutUs;

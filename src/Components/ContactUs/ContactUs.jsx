import React, { useState } from 'react';
import './ContactUs.css';
import { toast } from 'react-toastify';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard');
    }, (err) => {
      alert('Could not copy text');
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_CONTACT_US_ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        toast.success(<>
          Thank you for contacting us!<br />
          We will reach out to you soon.
        </>);
                
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      alert('Error submitting form. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='footer'>
      <div className="contact-container">
        <div className='contactUs-left'>
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder="Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <textarea type="text" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
        <div className='contactUs-right'>
          <div className="contact-options">
            <h2>Connect With Us</h2>
            <div className="contact-options-icons">
              <div className="contact-option" onClick={() => copyToClipboard('7259814804 / 9480400287')}>
                <i className="fa-solid fa-phone"></i>
                <span>7259814804 / 9480400287</span>
              </div>
              <div className="contact-option" onClick={() => copyToClipboard('ssprabodhini@gmail.com')}>
                <i className="fa-solid fa-envelope"></i>
                <span>ssprabodhini@gmail.com</span>
              </div>
              <div className="contact-option" onClick={() => copyToClipboard('7259814804 / 8275371850')}>
                <i className="fa-brands fa-whatsapp"></i>
                <span>7259814804 / 8275371850</span>
              </div>
              <div className="contact-option">
                <i className="fa-brands fa-youtube"></i>
                <a href="https://youtube.com/@samskarasamskritiprabodhinee?si=ZDZN9xd2fgaHXDYZ" target="_blank" rel="noopener noreferrer">YouTube Channel</a>
              </div>
              <div className="contact-option">
                <i className="fa-solid fa-location-dot"></i>
                <span>"Gurukarunyam", No.46, 9th main Venkatappa Layout, Banashankari 3rd Stage, Hosakerehalli, Bangalore 560085</span>
              </div>
              <div className="contact-option">
                <i className="fa-solid fa-location-dot"></i>
                <span>"Eeshavasya", 1st main, Sandhya Nagar, Dasappana Palya, Abbigere Road, Kereguddada Halli, Chikkabanavar (post) Bangalore - 560090</span>
              </div>
              <div className="contact-option">
                <i className="fa-solid fa-location-dot"></i>
                <span>Fl no. 8, B-2 BLDG, Paschima Resi, Vishrantinagar, Vitthalwadi, Hingne Kh, Pune - 411051</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactUs-page">
        <footer>
          <p>&copy; 2024 SSP. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default ContactUs;

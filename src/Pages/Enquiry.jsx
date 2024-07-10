import React, { useState, useEffect } from 'react';
import './CSS/Enquiry.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { raiseEnquiry } from '../api/authApi';
import { toast } from 'react-toastify';

const Enquiry = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //const { game } = location.state;
  const [game, setGame] = useState(location.state?.game || JSON.parse(localStorage.getItem('redirectGame')));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('user_info'));

  useEffect(() => {
    if (!location.state?.game) {
      localStorage.removeItem('redirectGame'); // Clear the game data from local storage after loading it
    }
  }, [location.state?.game]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('You must be logged in to raise an enquiry');
      localStorage.setItem('redirectAfterLogin', `/game/${game.id}/enquiry`);
      localStorage.setItem('redirectGame', JSON.stringify(game));
      navigate('/login');
      return;
    }

    const enquiryData = { 
      name, 
      email, 
      phone, 
      message, 
      gamename: game.name, 
      gamecategory: game.category 
    };

    setIsLoading(true);
    try {
      await raiseEnquiry(enquiryData);
      toast.success(<>
        Enquiry sent successfully!<br />
        We will reach out to you soon.
      </>);
      
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      
      alert('Error submitting enquiry');
    }
    setIsLoading(false);
  };

  return (
    <div className="enquiry-container">
      <div className="raise-enquiry">
        <h2>Raise Enquiry</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="gamename">Game name</label>
            <input
              type="text"
              id="gamename"
              value={game.name}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="gamecategory">Game category</label>
            <input
              type="text"
              id="gamecategory"
              value={game.category}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
      <div className="back">
        <Link to={`/game/${game.id}`}>
          <i className="fa-solid fa-circle-chevron-left fa-lg"></i>
        </Link>
      </div>
    </div>
  );
};

export default Enquiry;

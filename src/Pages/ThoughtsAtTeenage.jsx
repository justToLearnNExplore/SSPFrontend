import React from 'react'
import './CSS/Program.css'
import ImageSlider from '../Components/Slider/ImageSlider'
import tat from '../Components/Assets/tat';
import { Link } from 'react-router-dom';

const ThoughtsAtTeenage = () => {
  return (
    <div className='prog-box'>
      <div class="background-half"></div>
      <div className="prog-heading">
        <h1>Thoughts at Teenage</h1>
      </div>
      <div className="prog-left">
        <div className="prog-content">
          <p>"Thoughts at Teenage" is a special platform by Samskara Samskriti Prabodhinee (SSP) where deep and life-impacting discussions and debates are curated.</p>
          <p> SSP understands the need to address this particular age group because teenagers susceptible to experiencing feelings of instability, insecurity, and inferiority. Additionally, it is an age that needs to be handled carefully, as it will shape individuals for a lifetime, much like a potter shapes wet clay. </p>
          <p>SSP assists them in gaining clarity on setting their goals, making the process interesting and engaging. Besides this SSP encourages youths to contribute to society in various forms.</p>
          <p>Till date SSP has addressed 40+ teenagers impacting positivity on their lives.</p>
        </div>
      </div>
      <div className="prog-right">
        <div className="prog-img">
          <ImageSlider images={tat} heading={"Thoughts at Teenage"} />
        </div>
      </div>
      <div className="back">
        <Link to="/program">
          <i className="fa-solid fa-circle-chevron-left fa-lg"></i>
        </Link>
      </div>
    </div>
  )
}

export default ThoughtsAtTeenage
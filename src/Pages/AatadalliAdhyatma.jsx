import React from 'react'
import './CSS/Program.css'
import workshops from "../Components/Assets/workshops";
import ImageSlider from '../Components/Slider/ImageSlider';
import { Link } from 'react-router-dom';

const AatadalliAdhyatma = () => {
  return (
    <div className='prog-box'>
      <div class="background-half"></div>
      <div className="prog-heading">
        <h1>Aatadalli Adhyatma</h1>
      </div>
      <div className="prog-left">
        <div className="prog-content">
          <p>In today's fast-paced world, children often lack a crucial nutrient: spiritual wisdom, or Tattva Jnana. This deficiency arises from the neglect of spirituality due to the influence of Western education and the lack of time for parents to introduce Tattva Jnana. While special classes on spirituality could burden children further, SSP has devised a solution. As a first step, we introduce "Atadalli Adhyatma," a 3-day program conducted for 3 hours each day, designed to impart Tattva Jnana through engaging games.</p>
          <p>In these workshops, SSP immerses children in specially crafted games inspired by spiritual epics like Ramayana, Mahabharata, and Bhagavata. To date, we have developed 27+ spiritual games that are both educational and entertaining. SSP has successfully conducted over 30 workshops across various locations, including Pune, Gulbarga, Athani, Udupi, Hyderabad, Sosale, Sode, Bengaluru, and more.</p>
          <p>While Atadalli Adhyatma is tailored for children, individuals of all ages who seek spiritual wisdom are welcome to participate. Whether you're a child, a teenager, an adult, or a senior citizen, you'll find value in joining us on this journey of self-discovery.</p>
        </div>
      </div>
      <div className="prog-right">
      <div className="prog-img">
        <ImageSlider images={workshops} heading={"@"} />
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

export default AatadalliAdhyatma
import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import game_release from "../Components/Assets/game_release"
import ImageSlider from "../Components/Slider/ImageSlider";
import ContactUs from "../Components/ContactUs/ContactUs";


const Home = () => {
  return (
    <div>
      <Hero />
      <ImageSlider images={game_release} heading={"Our efforts are valued by..."} />
      <Popular />
      <ContactUs />
      
    </div>
  )
}

export default Home
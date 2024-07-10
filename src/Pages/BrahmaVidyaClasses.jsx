import React from 'react'
import './CSS/Program.css'
import bvc from "../Components/Assets/bvc";
import ImageSlider from '../Components/Slider/ImageSlider'
import { Link } from 'react-router-dom';

const BrahmaVidyaClasses = () => {
    return (
        <div className='prog-box'>
            <div class="background-half"></div>
            <div className="prog-heading">
                <h1>Brahmavidya Classes</h1>
            </div>
            <div className="prog-left">
                <div className="prog-content">
                    <p>"Brahmavidya classes" is another program initiated by Samskara Samskriti Prabodhinee (SSP) for those who wish to delve deeper into Madhva Sidhanta and Tattva Jnana. The program focuses on clearing fundamental concepts about Dvaita Sidhanta from scratch. It answers questions like WHY? HOW? WHAT? about the universe and its creator.</p>
                    <p>The program is structured as one-to-one sessions arranged twice a week. We conduct sessions in batches for juniors and seniors separately. These sessions provide participants with personalized attention and guidance, ensuring thorough understanding and clarity on the subject matter.</p>
                    <p>It's not merely a Shastra paatha adhyayana (scripture reading and study), but rather, it covers a wide range of topics, including atheism, the existence of God, the timeline of creation, and many more.</p>
                    <p>This comprehensive approach allows participants to explore and contemplate deeply on philosophical and metaphysical questions, fostering a deeper understanding and appreciation of Tattva Jnana through Madhva Sidhanta.</p>
                </div>
            </div>
            <div className='prog-right'>
            <div className="prog-img">
                <ImageSlider images={bvc} heading={"Brahmavidya Classes"} />
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

export default BrahmaVidyaClasses
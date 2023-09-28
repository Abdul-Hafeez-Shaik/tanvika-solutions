import React from 'react'
import '../Styles/aboutUs.css'
import primaryFocus from '../Assets/Images/primaryFocus.png'
import objectives from '../Assets/Images/objectives.png'
import visionIcon from '../Assets/Images/vision.png'
import missionIcon from '../Assets/Images/missionIcon.png'

function AboutUs() {
  return (
    <div className='main-container'>
        <div className='about-us-card'>
          <div className='img-container'>
            <img className='card-image' src={primaryFocus} alt="" />
          </div>
          <div className='text-container'>
            <h1>Primary Focus</h1>
            <p className='description1'>Our primary focus is to provide “complete quality service”. We have a comprehensive product line that meets the high standards.</p>
          </div>
        </div>
        <div className='about-us-card'>
          <div className='text-container'>
            <h1>Objectives</h1>
            <p className='description1'>Our objectives are to make the available facilities for high end training in information technology and electronics related field.</p>
          </div>
          <div className='img-container'>
            <img className='card-image' src={objectives} alt="" />
          </div>
        </div>
        <div className='about-us-card'>
          <div className='img-container'>
            <img className='card-image' src={visionIcon} alt="" />
          </div>
          <div className='text-container'>
            <h1>Vision</h1>
            <p className='description1'>Our vision is to meet the emerging market needs and to be at the forefront of application development
              and maintenance, be respected for setting the highest standards of professionalism and quality of service.
            </p>
          </div>
        </div>
        <div className='about-us-card' style={{marginBottom:"60px"}} >
          <div className='text-container'>
            <h1>Mission</h1>
            <p className='description1'>Our mission is to deliver high quality cost effective software solutions with fast turnaround and added business value</p>
          </div>
          <div className='img-container'>
            <img className='card-image' src={missionIcon} alt="" />
          </div>
        </div>
    </div>
  )
}

export default AboutUs
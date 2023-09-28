import React from 'react'
import '../Styles/careers.css'
import javaIcon from '../Assets/Images/Java.png'
import embededDeveloperIcon from '../Assets/Images/EmbeddeDeveloper.png'
import pythonIcon from '../Assets/Images/pythonIcon.png'
import marketingManagerIcon from '../Assets/Images/marketingManagerIcon.png'

function Careers() {
  return (
    <div className='careers-container'>
      <h1 className='careers-headings'>Java Full Stack Developer</h1>
      <h1 className='careers-headings'>Embedded Developer</h1>
      <h1 className='careers-headings'>Python Full Stack Developer</h1>
      <h1 className='careers-headings' >Marketing Managers</h1>
      <h1 className='careers-headings'>Internships</h1>
      <div className='card-container'>
        <div className='careers-card'>
          <div className='card-img-container'>
            <img src={javaIcon} alt="" className='card-img' />
          </div>
          <div className='card-text-container'>
            <h1 className='careers-headings'>Java Full Stack Developer</h1>
            <p className='description1'>Full Stack Java Developers are responsible for designing and implementing the logic & data storage of an application. They use Java and related technologies such as Spring and Hibernate to build robust and scalable systems that can handle millions of requests per second.</p>
          </div>
        </div>
        <div className='careers-card'>
          <div style={{marginLeft:"60px", marginRight:"10px"}} className='card-text-container'>
            <h1 className='careers-headings'>Embedded Developer</h1>
            <p className='description1'>Embedded developers are skilled software engineers that design and write code to control machines and devices. They specialize in developing programs for specific hardware used in cars, modems, appliances, and cellular devices, among others.</p>
          </div>
          <div className='card-img-container'>
            <img src={embededDeveloperIcon} alt="" className='card-img' />
          </div>
        </div>
        <div className='careers-card'>
          <div className='card-img-container'>
            <img style={{marginTop:"40px"}} src={pythonIcon} alt="" className='card-img' />
          </div>
          <div className='card-text-container'>
            <h1 className='careers-headings'>Python Developer</h1>
            <p className='description1'>A Python Web Developer is responsible for writing server-side web application logic. Python web developers usually develop back-end components, connect the application with the other (often third-party) web services, and support the front-end developers by integrating their work with the Python application.</p>
          </div>
        </div>
        <div className='careers-card'>
          <div style={{marginLeft:"60px", marginRight:"10px"}} className='card-text-container'>
            <h1 className='careers-headings'>Marketing Managers</h1>
            <p className='description1'>Marketing manager responsibilities include tracking and analyzing the performance of advertising campaigns, managing the marketing budget and ensuring that all marketing material is in line with our brand identity. To be successful in this role, you should have hands-on experience with web analytics tools and be able to turn creative ideas into effective advertising projects.</p>
            <p className='description1'>Ultimately, you will help us build and maintain a strong and consistent brand through a wide range of online and offline marketing channels.</p>
          </div>
          <div className='card-img-container'>
            <img style={{marginTop:"100px",height:"160px", width:"280px" }} src={marketingManagerIcon} alt="" className='card-img' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers
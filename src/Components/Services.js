import React, { useState } from 'react'
import '../Styles/services.css'
import coverImg from '../Assets/Images/cover-pic-sw-development.png';
import customSoftware from '../Assets/Images/custom-software.png';
import softwareProduct from '../Assets/Images/software-product.png';
import outSourcing from '../Assets/Images/outsourcing.png'
import maintainance from '../Assets/Images/maintenance.png';
import softwareTraining from '../Assets/Images/developer.png'
import teamWork from '../Assets/Images/service_team-augmentation.png';
import questionIcon from '../Assets/Images/question-sign.png'

function Services() {
  // const [page, setPage] = useState(1);
  return (
    <div className='services-container'>
        <div className='services-card'>
          <div className='text-container'>
            <h1 className='services-heading'>Software Development Services</h1>
            <p className='services-description'>Our Passion is to Deliver Software that Helps You Succeed Combining over 5 years of experience in IT and a great drive for innovation, Tanvika Solutions designs and builds software to rely on: secure, high-performing, scalable, and user-friendly.</p>
          </div>
          <div className='img-container'>
            <img className='cover-img' src={coverImg} alt="" />
          </div>
        </div>
        {/* <div className='services-text-container'> */}
          <h1 className='services-heading1'>  Why Choose Tanvika Solutions for Your Software Development Project <img style={{ height:"30px", width:"30px", marginLeft:"5px"}} src={questionIcon} alt="" /> </h1>
        {/* </div> */}
        <div>
          {/* <h1 className='services-heading1'>Different Collaboration Scenarios for Your Software Development.</h1> */}
          <div className='cardss'>
            <div className='services-card2'>
              <div className='card-img-container'>
                <img className='iconss' src={customSoftware} alt="" />
              </div>
              <div className='card-text-container'>
                <h1 className='services-heading2'>Custom Software Development</h1>
                <p className='services-description1'>We create software with long-term business value-tailored uniquely to your business processes and adjustable to future needs.</p>
              </div>
            </div>
            <div className='services-card2'>
              <div className='card-img-container'>
                <img className='iconss' src={softwareProduct} alt="" />
              </div>
              <div className='card-text-container'>
                <h1 className='services-heading2'>Software product development</h1>
                <p className='services-description1'>We create scalable and resilient SaaS, mobile and desktop software products with great UX and drive fast-paced product development – MVP launch in 1–4 months and consequent releases every 2–4 weeks.</p>
              </div>
            </div>
          </div>
          <div className='cardss'>
            <div className='services-card2'>
              <div className='card-img-container'>
                <img className='iconss' src={outSourcing} alt="" />
              </div>
              <div className='card-text-container'>
                <h1 className='services-heading2'>Full software development outsourcing</h1>
                <p className='services-description1'>We assemble self-managed development teams to take care of your current and future software needs. Your software development plans are not stuck with the lack of internal expertise and resources.</p>
              </div>
            </div>
            <div className='services-card2'>
              <div className='card-img-container'>
                <img className='iconss' src={maintainance} alt="" />
              </div>
              <div className='card-text-container'>
                <h1 className='services-heading2'>Software support and maintenance</h1>
                <p className='services-description1'>We ensure smooth functioning and relevancy of your software via continuous performance monitoring, proactive optimization and fast issue resolution, delivery of new features and integrations.</p>
              </div>
            </div>
          </div>
          <div className='cardss'>
            <div className='services-card2'>
              <div className='card-img-container'>
                <img className='iconss' src={teamWork} alt="" />
              </div>
              <div className='card-text-container'>
                <h1 className='services-heading2'>Dedicated teams</h1>
                <p className='services-description1'>We assemble high-performing and collaborative dedicated teams of pre-vetted IT talents from our permanent pool. With a tailored team focused solely on your project, you can efficiently address any skill gaps and speed up your development initiative.</p>
              </div>
            </div>
            <div className='services-card2'>
              <div className='card-img-container'>
                <img className='iconss' src={softwareTraining} alt="" />
              </div>
              <div style={{marginRight:"180px"}} className='card-text-container2'>
                <h1 className='services-heading2'>Software Training</h1>
                <p className='training-description'>Embeded Systems.</p>
                <p className='training-description'> Vlsi (Very Large scale Integration)</p>
                <p className='training-description'>Python Fullstack Development</p>
                <p className='training-description'>Android Programming</p>
                <p className='training-description'>Java Fullstack Development</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='training-container'>
          <h1 className='training-heading'>Software Training</h1>
          <p className='training-description'>Core JavaAdvanced Java (J2Ee)Spring & Hibernate.</p>
          <p className='training-description'>Android Programming.</p>
          <p className='training-description'>Python Programming.</p>
          <p className='training-description'>Embeded Systems, Vlsi,</p>
        </div> */}
        <div className='training-container2'>
          <h1 className='training-heading'>Academic Projects</h1>
          <ul>
            <li className='training-description'>MTech,Btech,MBA,MCA,Diploma(ECE,EEE,CSE,Civil,Mechnichal)</li>
            <li className='training-description1'>Final Year Projects for BE</li>
            <li className='training-description1'>Final Year Projects for BSC</li>
            <li className='training-description1'>Final Year Projects for MTech</li>
            <li className='training-description1'>Final Year Projects for Diploma</li>
            <li className='training-description1'>Final Year Projects for MCA</li>
            <li className='training-description1'>Final Year Projects for MBA</li>
          </ul>
          <p style={{marginTop:"15px"}} className='training-description'>
            As a part of the projects and development training, we offer Projects and workshops keeping in view the latest emerging trends and technologies under Parallel Development Process. We play a Dual Positive Role by satisfying the academic requirements and as well giving the necessary training in Software Design and Development which enables you to meet the industrial requirements with a wider knowledge and a greater confidence.
            We can proudly say that, we are the first in Hyderabad to provide training on Application package with Real Time Microsoft certified professionals who have not less than 5 years of work experience.
          </p>
          <p style={{marginTop:"15px"}} className='training-description'>
            Our Organization do provide online training, workshops, internship ,Robotics Training  and placement assistance along with academic projects for B.Tech, MCA,MBA,Diploma, M.Tech, M.Sc and B.sc Students.
            The executive leaders are the biggest asset of the organization. We push boundaries within clear goals. Our team works from a disciplined plan, agreed upon and followed through. We work together very efficiently, economically, and constantly.
          </p>
          <p style={{marginTop:"15px"}} className='training-description'>
            We challenge one another in efforts to serve our clients, always seeking and encouraging the next great idea. Our employees operate with the objective to develop individuals towards self-directed growth and long-term careers.
          </p>
        </div>
        <div className='text-container'>
          <h1 className='services-heading1'>Workshops</h1>
          <p style={{marginLeft:"40px", marginRight:"50px"}} className='services-description2'>
            We provide various educational workshops on latest trends & technologies for Engineering Students, Management Aspirants, IT Professionals, College Students, Working People. Our Training & Workshops are job oriented and on demand in Industry.
            We currently have more than 35 Workshops on latest and on demand topics including on technical & non-technical topic which will help them in getting good opportunities in Industry in terms of future aspects as well help them in updating there knowledge with the current technology.  Get all the details about workshops.
          </p>
          <div className='cardss'>
            <div  className='services-card3'>
              <h1 className='services-heading2'>CS/IT Workshops</h1>
                <p className='services-description1'>AI- Artificial Intelligence </p>
                <p className='services-description1'> Android App Development</p>
                <p className='services-description1'>Big Data & Hadoop </p>
                <p className='services-description1'>Cloud Computing </p>
                <p className='services-description1'>Python</p>
                <p className='services-description1'>IoT-Internet of Things</p>
                <p className='services-description1'>Game Development</p>
            </div>
            <div className='services-card3'>
            <h1 className='services-heading2'>Electronics Workshops</h1>
                <p className='services-description1'>IoT- Internet of Things</p>
                <p className='services-description1'> Arduino, Robotics</p>
                <p className='services-description1'>Embedded System</p>
                <p className='services-description1'>Embedded & VLSI </p>
                <p className='services-description1'>Python</p>
                <p className='services-description1'>Automation & Embedded</p>
                <p className='services-description1'>IoT using RaspberryPi</p>
                <p className='services-description1'>IoT using Arduino</p>
                <p className='services-description1'>Electrical Workshops</p>
                <p className='services-description1'>Industrial Automation - PLC & SCADA</p>
                <p className='services-description1'>Neural Network using MATLAB</p>
            </div>
          </div>
          <div   className='cardss'>
            <div style={{height:"410px"}} className='services-card3'>
              <h1 className='services-heading2'>Civil Workshops</h1>
                <p className='services-description1'>StaadPro</p>
                <p className='services-description1'> Foundation Analysis</p>
                <p className='services-description1'>Construction Project Management</p>
                <p className='services-description1'>AUTOCAD (2D & 3D)</p>
                <p className='services-description1'>ETABS</p>
                <p className='services-description1'>Primavera</p>
                <p className='services-description1'>Civil 3D</p>
                <p className='services-description1'>3DSMAX</p>
                <p className='services-description1'>Revit</p>
            </div>
            <div style={{height:"410px"}} className='services-card3'>
              <h1 className='services-heading2'>Web Design Workshops</h1>
                <p className='services-description1'>Wordpress CMS</p>
                <p className='services-description1'>Digital Marketing & SEO</p>
                <p className='services-description1'>Web Designing - HTML & CSS</p>
                <p className='services-description1'>Ethical Hacking & Forensics</p>
                <p className='services-description1'>Cyber Forensics</p>
                <p className='services-description1'>Network Security</p>
                <p className='services-description1'>Management & Professional Skills</p>
                <p className='services-description1'>Professional Skills Training</p>
                <p className='services-description1'>Crack the Interview</p>
                <p className='services-description1'>Industrial Automation - PLC & SCADA</p>
                <p className='services-description1'>Digital Marketing</p>
            </div>
            <div style={{height:"410px"}} className='services-card3'>
              <h1 className='services-heading2'>Mechanical & <br/> Automobile Workshops</h1>
                <p className='services-description1'>Automobile Mechanics & <br/>IC Engine Design</p>
                <p className='services-description1'>Automotive Electronics</p>
                <p className='services-description1'>AutoCAD </p>
                <p className='services-description1'>CATIA </p>
                <p className='services-description1'>SolidWorks</p>
                <p className='services-description1'>ANSYS</p>
                <p className='services-description1'>Robotics</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Services
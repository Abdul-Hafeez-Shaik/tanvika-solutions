import React from 'react'
import '../Styles/HomePage.css'
import softwareIcon from '../Assets/Images/software-development-image.png'
import teamwork from '../Assets/Images/teamwork-transperant.png'
import quality from '../Assets/Images/quality.png'
import onTimeDeliverables from '../Assets/Images/onTime.png'

function HomePage() {
  return (
    <div className='home-main-container'>
        <div className='context-and-image-container'>
          <div className='context-container'>
            <h1 className='home-heading'>Your Software <br/> Development Company!</h1>
            <p className='description'>
              We're a software development company that loves finding solutions to complicated problems! We focus on the betting industry, but we also implement solutions for fintech, healthcare, IoT, and startups. By creating fast and efficient mobile and web applications, we will help your business grow.
            </p>
          </div>
          <div className='image-container'>
            <img className='software-img' src={softwareIcon} alt="" />
          </div>
        </div>
        <div className='cards-container'>
          <div className='card'>
            <div className='card-img-container'>
              <img className='card-img' src={teamwork} alt="" />
            </div>
            <div className='card-text-container'>
              <h2 className='sub-headings' >Tanvika Team</h2>
              <p className='description1'>
                The executive leaders are the biggest asset of the organization. We push boundaries within clear goals. Our team works from a disciplined plan, agreed upon and followed through. We work together very efficiently, economically, and constantly.
                With well over a rich experience of these executives, the organization is capable of handling  projects  maintenance and Traning - both simple and complex.We respect, admire and love the talent of our co-workers and draw on them in our pursuits.
                We challenge one another in efforts to serve our clients, always seeking and encouraging the next great idea. Our employees operate with the objective to develop individuals towards self-directed growth and long-term careers.
              </p>
            </div>
          </div>
          <div className='card'>
            <div className='card-text-container'>
              <h1 className='sub-headings'>QUALITY OBJECTIVES</h1>
              <p className='description1'>
                Quality objectives are established during the annual operating plan process and through Quality Management review meetings and Brainstorming sessions held at each department. Customer Satisfaction We conduct customer satisfaction surveys to identify opportunities for improvement
              </p>
            </div>
            <div className='card-img-container'>
              <img className='card-img2' src={quality} alt="" />
            </div>
          </div>
          <div className='card'>
            <div className='card-img-container'>
              <img className='card-img' src={onTimeDeliverables} alt="" />
            </div>
            <div className='card-text-container'>
              <h1 className='sub-headings'>On-Time Deliverables</h1>
              <p className='description1'>Each department is measured on its ability to Provide all deliverables to the customers and users in accordance with agreed schedules New Products/services performance As a part of all new product development, a verification and validation plan is required Software Performance All software releases, including upgrades are subject to a test plan to ensure compliance to the requirements and specification System Testing All machine orders are tested to specifications approved by network engineering to minimize user and customer complaints.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HomePage
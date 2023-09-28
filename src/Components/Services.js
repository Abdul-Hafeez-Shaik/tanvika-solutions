import React, { useState } from 'react'
import '../Styles/services.css'

function Services() {
  const [page, setPage] = useState(1);
  return (
    <div className='services-container'>
        {/* <div className='services-cards'>
          <h1 className='services-heading'>Services</h1>
          <p className='list-items' >Software Development</p>
          <p className='list-items'>Web Development Services</p>
          <p className='list-items'>Application Maintenance</p>
          <p className='list-items'>Offshore Development Center</p>
          <p className='list-items'>Corporate training</p>
          <p className='list-items'>Internships</p>
          <p className='list-items'>Workshops</p>
          <p className='list-items'>Recruitment</p>
        </div>
        <div className='services-cards'>
          <h1 className='services-heading'>SOFTWARE TRAINING</h1>
          <p className='list-items'>Core JavaAdvanced Java (J2Ee)Spring & Hibernate</p>
          <p className='list-items'>Android Programming</p>
          <p className='list-items'>Python Programming</p>
          <p className='list-items'>Embedded Systems,Vlsi</p>
          <p className='list-items'>Autocad,Hypermesh,Pro-E,Ansys,Catia</p>
          <p className='list-items'>Stadpro,Revit,Hvac,Mep</p>
        </div> */}

        <div className='services-card'>
          <h1 className='sub-headings'>Software Development</h1>
          <ul className='list-card'>
            <li className='list-item'>Web Development Services</li>
            <li className='list-item' >Application Maintenance</li>
            <li className='list-item' >Offshore Development Center</li>
          </ul>
        </div>

    </div>
  )
}

export default Services
import React from 'react'
import './JobDisplay.css'


function DisplayJobs(props) {

    return (
        <div className='dj-container'>
            <div className='job-container'>
                {/* <p><b>ID:</b> {props.id}</p> */}
                <p className='job-titlee'><a href='/' className='job-title-link'><b>{props.jobTitle}</b></a></p>
                <p className='company-titlee'><b>{props.companyName}</b></p><br></br>
                <p className='company-job-description'><b>Job Description:</b><br/>{props.jobDescription}</p>
                <p className='company-location-description'><b>About The Company:</b><br/>{props.companyDescription}</p>
                <p className='job-locationn'><b>{props.location}</b></p>
                <div className='apply-btn-div'>
                    <a href='/resume'><button className='apply-btn'>APPLY</button></a>
                </div>
            </div>
        </div>
    )
}

export default DisplayJobs
import React from 'react'
import CompanyProfile from './CompanyProfile';

function CompanyInformation() {
    const myJobs = JSON.parse(localStorage.getItem("jobs"));


  return (
    <div>
        {myJobs.map((job) => (
        <CompanyProfile 
          key={job.id} 
          jobTitle={job.jobTitle} 
          jobDescription={job.jobDescription}
          companyDescription={job.companyDescription}
          location={job.location}
          companyName={job.companyName}
        />
        ))}
    </div>
  )
}

export default CompanyInformation

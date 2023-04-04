import React, { useState } from 'react'
// import Modal from './ModalDisplay';
import DisplayJobs from './JobDisplay'
import './JobForm.css'
import './Dashboard.css'


function MainComponent() {
  const [searchQuery, setSearchQuery] = useState('');
  const myJobs = JSON.parse(localStorage.getItem('jobs')) || [];

  const filteredJobs = myJobs.filter((job) =>
    job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className='add-job-input-field'>
        <a href='/addjob'>
          <button className='btn-add-job'>Add Job</button>
        </a>
        <input
          type='text'
          name='add-job'
          id='add-job'
          className='input-add-job'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search Job'
        />
        <button className='btn-search-job'>Search</button>
      </div>
      <div className='job-list'>
        {filteredJobs.length > 0 ? (
          <div className='job-list1'>
            {filteredJobs.map((job) => (
              <DisplayJobs
                key={job.id}
                jobTitle={job.jobTitle}
                jobDescription={job.jobDescription}
                companyDescription={job.companyDescription}
                location={job.location}
                companyName={job.companyName}
                id={job.id}
              />
            ))}
          </div>
        ) : (
          <div className='no-job-div'>
            <h1 className='there-is-no-job'>No Jobs Found</h1>
          </div>
        )}
      </div>
    </div>
  );
}
  
  export default MainComponent;
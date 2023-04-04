import React, {useState, useEffect} from 'react'
import './JobForm.css'

function FormForJobs() {
    const [jobTitle, setJobTitle] = useState('')
    const [location, setLocation] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [companyDescription, setCompanyDescription] = useState('')
    const [id, setId] = useState(1)
    const [companyName, setCompanyName] = useState('')
    const [jobs, setJobs] = useState([])


    const companyNameChangeHandler = (event) => {
        event.preventDefault()
        setCompanyName(event.target.value)
    }

    const jobTitleChangeHandler = (event) => {
        event.preventDefault()
        setJobTitle(event.target.value)
    }
    const locationChangeHandler = (event) => {
        event.preventDefault()
        setLocation(event.target.value)
    }
    const jobDescriptionChangeHandler = (event) => {
        event.preventDefault()
        setJobDescription(event.target.value)
    }
    const companyDescriptionChangeHandler = (event) => {
        event.preventDefault()
        setCompanyDescription(event.target.value)
    }
    const idChangeHandler = (event) => {
        event.preventDefault()
        setId(event.target.value)

    }

    const jobSubmitHandler = (event) => {
        event.preventDefault()
        const newJob = {
            id: id,
            jobTitle: jobTitle,
            location: location,
            jobDescription: jobDescription,
            companyDescription: companyDescription,
            companyName: companyName,
        }
        const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];
        const updatedJob = [...existingJobs, newJob]

        localStorage.setItem('jobs', JSON.stringify(updatedJob))
        setJobTitle('')
        setCompanyDescription('')
        setJobDescription('')
        setId(id + 1)
        setLocation('')
        setCompanyName('')
        setJobs(updatedJob)
        alert('You submitted the job successfully')
        window.location.href = '/dashboard';
    }

    useEffect(() => {
        const savedJobs = JSON.parse(localStorage.getItem('jobs')) || [];
        setJobs(savedJobs)
        setId(1 + savedJobs.length)
    }, [])


    return (
        <div className='form-div'>
            <div className='container'>
                <div className='main-form'>
                    <form onSubmit={jobSubmitHandler} className='form'>
                        <h3 className='form-title'>Input your job</h3>
                        <div className='job-job'>
                            <input placeholder='Input ID for the Job' name='id' type='number' id='id' value={id} onChange={idChangeHandler} className='job-id' disabled/>
                            <input placeholder='Input Company Name' name='company-name' type='text' id='company-name' value={companyName} onChange={companyNameChangeHandler} className='job-company-name'/>
                            <div>
                                <input placeholder='Job Title' name='jt' type='text' id='jt' value={jobTitle} onChange={jobTitleChangeHandler} className='job-title'/>
                                <input placeholder='Location' name='loc' type='text' id='loc' value={location} onChange={locationChangeHandler} className='job-company-location'/>
                            </div>
                            <div>
                                <textarea  placeholder='Short Job Description' name='jt' type='text' id='jt' value={jobDescription} onChange={jobDescriptionChangeHandler} className='job-description'/>
                                <textarea  placeholder='Short Company Description' name='cd' type='text' id='cd' value={companyDescription} onChange={companyDescriptionChangeHandler} className='job-company-description'/>
                            </div>
                        </div>
                        <button type='submit' className='btn-submit'>Submit</button>
                    </form>
                        <a href='/dashboard'><button className='btn-cancel'>Cancel</button></a>
                </div>
            </div>
        </div>
    )
}

export default FormForJobs
import React, { useState, useEffect } from 'react'
import './Resume.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'


function Resumee() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [email, setEmail] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [streetaddress, setStreetAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [code, setCode] = useState('')
  const [country, setCountry] = useState('')
  const [level, setLevel] = useState('')
  const [cl, setCl] = useState('')
  const [resume, setResume] = useState([])

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const uploadFile = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        localStorage.setItem('myFile', reader.result);
        console.log('File saved to local storage.');
      };
    }
  };

  const emailChangeHandler = (event) => {
    event.preventDefault()
    setEmail(event.target.value)
  }

  const firstnameChangeHandler = (event) => {
    event.preventDefault()
    setFirstname(event.target.value)
  }

  const lastnameChangeHandler = (event) => {
    event.preventDefault()
    setLastname(event.target.value)
    
  }

  const streetaddressChangeHandler = (event) => {
    event.preventDefault()
    setStreetAddress(event.target.value)
  }

  const cityChangeHandler = (event) => {
    event.preventDefault()
    setCity(event.target.value)
  }

  const stateChangeHandler = (event) => {
    event.preventDefault()
    setState(event.target.value)
  }

  const codeChangeHandler = (event) => {
    event.preventDefault()
    setCode(event.target.value)
  }

  const countryChangeHandler = (event) => {
    event.preventDefault()
    setCountry(event.target.value)
  }

  const levelChangeHandler = (event) => {
    event.preventDefault()
    setLevel(event.target.value)
  }

  const clChangeHandler = (event) => {
    event.preventDefault()
    setCl(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const newResume = {
      email: email,
      firstname: firstname,
      lastname: lastname,
      streetaddress: streetaddress,
      city: city,
      state: state,
      code: code,
      country: country,
      level: level,
      cl: cl,
    }
    const existingResume = JSON.parse(localStorage.getItem('resume')) || [];
    const updatedResume = [...existingResume, newResume]

    localStorage.setItem('resume', JSON.stringify(updatedResume))
    setEmail('')
    setFirstname('')
    setLastname('')
    setStreetAddress('')
    setState('')
    setCode('')
    setCountry('')
    setLevel('')
    setCl('')
    setCity('')
    setResume(updatedResume)
    alert('You submitted the resume successfully')
  }

  useEffect(() => {
    const savedResume = JSON.parse(localStorage.getItem('resume')) || [];
    setResume(savedResume)
  }, [])


  return (
    <div className='containerr'>
      <div className='resume-leftside'>
        <h2 className='title'>Resume Collection Form</h2>
        <form onSubmit={submitHandler}>
          <input placeholder='Email Address' className='email' onChange={emailChangeHandler} type='email' value={email}/>
          <input placeholder='First Name' className='firstname' onChange={firstnameChangeHandler} type='text' value={firstname}/>
          <input placeholder='Last Name' className='lastname' onChange={lastnameChangeHandler} type='text' value={lastname}/><br/>
          <input placeholder='Street Address' className='streetaddress' onChange={streetaddressChangeHandler} type='text' value={streetaddress}/>
          <input placeholder='City' className='city' onChange={cityChangeHandler} type='text' value={city}/>
          <input placeholder='State/Province' className='state' onChange={stateChangeHandler} type='text' value={state}/><br/>
          <input placeholder='Postal/Zip Code' className='code' onChange={codeChangeHandler} type='number' value={code}/>
          <input placeholder='Country' className='country' onChange={countryChangeHandler} type='text' value={country}/>
          <input placeholder='Skill Level (eg. College Graduate)' className='level' onChange={levelChangeHandler} type='text' value={level}/><br/>
          <textarea placeholder='Cover Letter' className='cl' onChange={clChangeHandler} type='text' value={cl}/>
          <div className='div-btn'>
              <button type='submit' className='sbmt-btn'>Submit Form</button>
              <a href='/dashboard'><button type='button' className='cancel-btn'>Cancel</button></a>
          </div>
        </form>
            
        <p>A resume collection form is used by recruiters to collect information from job applicants. With our free Resume Collection Form, you can create a form that matches the way you want to communicate with you job applicant, if you prefer to have job applicants fill out their information in a PDF, you can do that too! No matter what, you'll have the best form for the job before you send it out</p>
      </div>
      <div className='resume-rightside'>
        <h2 className='title1'>Or Send Your CV Here</h2>
        <div className='cloud-icon'>
            <FontAwesomeIcon icon={faCloudUploadAlt} size='5x'/>
        </div>
        <h5 className='cloud-paragraph'>Upload a resume from your computer or from popular cloud storage services. We will then parse the document and pre-fill our resume creation form for you</h5>
        <div className='cloud-btn-div'>
          <form>
            <input type="file" onChange={handleFileChange} />
            <button className='upload-btn' onClick={uploadFile}>Upload</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Resumee

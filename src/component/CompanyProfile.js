import React from 'react'

function CompanyProfile(props) {
  return (
    <div>
      {props.key}
      {props.jobTitle}
      {props.location}
      {props.jobDescription}
      {props.companyDescription}
      {props.companyName}
    </div>
  )
}

export default CompanyProfile

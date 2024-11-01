import React from 'react'
import "./AddJobs.css";
import { useState } from 'react';
    

function AddJobs() {

    const [errorMessage, setErrorMessage] = useState("");

    const [jobData, setJobData] = useState({
        companyName: '',
        jobTitle: '',
        jobId: '',
        jobLocation: '',
        applicationDate: '',
        applicationState: '',
        contactPerson: '',
        notes: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if(!value){
            setErrorMessage("Enter the "+name);
        }
        setJobData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submitted Job Data: ", jobData);
    };

  return (
    <form onSubmit={handleSubmit} className="job-form">

            <label>
                Company Name:
                <input
                type="text"
                name="companyName"
                value={jobData.companyName}
                onChange={handleChange}
                />
                {errorMessage && (
                    <p style={{ color: "red", margin: "0" }}>{errorMessage}</p>
                )}
            </label>

            <label>
                Job Title:
                <input
                type="text"
                name="jobTitle"
                value={jobData.jobTitle}
                onChange={handleChange}
                />
            </label>

            <label>
                Job ID/Reference Number
                <input
                type="text"
                name="jobId"
                value={jobData.jobId}
                onChange={handleChange}
                />
            </label>

            <label>
                Job Location:
                <input
                type="text"
                name="jobLocation"
                value={jobData.jobLocation}
                onChange={handleChange}
                />
            </label>

            <label>
                Application Date:
                <input
                type="date"
                name="applicationDate"
                value={jobData.applicationDate}
                onChange={handleChange}
                />
            </label>

            <label>
                Application Status:
                <select name="applicationStatus" value={jobData.applicationStatus} onChange={handleChange}>
                    <option value="">Select Status</option>
                    <option value="Applied">Applied</option>
                    <option value="Interview">Interview</option>
                    <option value="Offered">Offered</option>
                    <option value="Rejected">Rejected</option>
                </select>
            </label>

            <label>
                Contact Person:
                <input
                type="text"
                name="contactPerson"
                value={jobData.contactPerson}
                onChange={handleChange}
                />
            </label>

            <label>
                Notes:
                <input
                type="text"
                name="notes"
                value={jobData.notes}
                onChange={handleChange}
                />
            </label>

            <button type="submit">Submit</button>
    </form>
  )
}

export default AddJobs

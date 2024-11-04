import React from 'react'
import "./AddJobs.css";
import { useState } from 'react';
import axios from 'axios';
    

function AddJobs() {

    const [jobData, setJobData] = useState({
        companyName: '',
        jobTitle: '',
        jobId: '',
        salary:'',
        jobLocation: '',
        applicationDate: '',
        applicationStatus: '',
        contactPerson: '',
        notes: ''
    });

    const [errors, setErrors] = useState({
        companyName: '',
        jobTitle: '',
        jobId: '',
        applicationDate: ''
    });
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
            setJobData((prevData) => ({
                ...prevData,
                [name]: value,
        }));

        if (value) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              [name]: '',
            }));
        }
    };

    const handleBlur = (cred) => {
        if(!jobData[cred]){
            setErrors((prevErrors) => ({
                ...prevErrors,
                [cred]: `${cred} cannot be empty.`,
            }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8080/add-jobs', jobData);
            console.log(response.data);
            alert("Added Successfully");
            setJobData({
                companyName: '',
                jobTitle: '',
                jobId: '',
                salary:'',
                jobLocation: '',
                applicationDate: '',
                applicationStatus: '',
                contactPerson: '',
                notes: ''
            });
        }catch(error){
            alert("Failed to add job");
            console.log(error);
        }
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
                onBlur={() => handleBlur('companyName')}
                />
                {errors.companyName && (
                    <p style={{ color: "red", margin: "0", fontSize: "12px", fontWeight: "400"}}>{errors.companyName}</p>
                )}
            </label>

            <label>
                Job Title:
                <input
                type="text"
                name="jobTitle"
                value={jobData.jobTitle}
                onChange={handleChange}
                onBlur={() => handleBlur('jobTitle')}
                />
                {errors.jobTitle && (
                    <p style={{ color: "red", margin: "0", fontSize: "12px", fontWeight: "400"}}>{errors.jobTitle}</p>
                )}
            </label>

            <label>
                Job ID/Reference Number
                <input
                type="text"
                name="jobId"
                value={jobData.jobId}
                onChange={handleChange}
                onBlur={() => handleBlur('jobId')}
                />
                {errors.jobId && (
                    <p style={{ color: "red", margin: "0", fontSize: "12px", fontWeight: "400"}}>{errors.jobId}</p>
                )}
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
                Salary:
                <input
                type="number"
                name="salary"
                value={jobData.salary}
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
                {errors.applicationDate && (
                    <p style={{ color: "red", margin: "0", fontSize: "12px", fontWeight: "400"}}>{errors.applicationDate}</p>
                )}
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

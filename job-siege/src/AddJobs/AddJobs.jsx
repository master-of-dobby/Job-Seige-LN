import React from 'react'
import "./AddJobs.css";
import { useState } from 'react';
import axios from 'axios';
    

function AddJobs() {

    const [jobData, setJobData] = useState({
        companyName: "",
        referenceId: "",
        jobDescription: "",
        jobTitle: "",
        salary: "",
        jobLocation: "",
        applicationDate: "",
        applicationStatus: "",
        contactPerson: "",
        shortlisted: "" ,
        applicationLink: "",
        followingDate: "",
        notes: ""
    });

    const [errors, setErrors] = useState({
        companyName: '',
        jobTitle: '',
        referenceId: '',
        applicationDate: ''
    });

    const isFormValid = () => {
        return Object.values(jobData).every(field => field.trim() !== "");
    };
    
    
    
    const token = localStorage.getItem('token');
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
        if(!isFormValid()){
            alert("Enter all credentials before submitting");
            return;
        }
        try{
            const response = await axios.post('http://localhost:8080/add-jobs', jobData,
                {headers: {
                    'Authorization': `Bearer ${token}`, 
                },}
            );
            console.log(response.data);
            alert("Added Successfully");
            setJobData({
                companyName: "",
                referenceId: "",
                jobDescription: "",
                jobTitle: "",
                salary: "",
                jobLocation: "",
                applicationDate: "",
                applicationStatus: "",
                contactPerson: "",
                shortlisted: "" ,
                applicationLink: "",
                followingDate: "",
                notes: ""
            });
        }catch(error){
            alert("Failed to add job");
            console.log(error);
        }
    };

  return (
    <form onSubmit={handleSubmit} className="job-form">

            <label>
                Job ID/Reference Number
                <input
                type="text"
                name="referenceId"
                value={jobData.referenceId}
                onChange={handleChange}
                onBlur={() => handleBlur('referenceId')}
                />
                {errors.referenceId && (
                    <p style={{ color: "red", margin: "0", fontSize: "12px", fontWeight: "400"}}>{errors.referenceId}</p>
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
                Job Description:
                <input
                type="text"
                name="jobDescription"
                value={jobData.jobDescription}
                onChange={handleChange}
                />
            </label>

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
                Salary :
                <input
                type="text"
                name="salary"
                value={jobData.salary}
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
                Shortlisted : 
                <input
                type="text"
                name="shortlisted"
                value={jobData.shortlisted}
                onChange={handleChange}
                />
            </label>

            <label>
                Application Date:
                <input
                type="datetime-local"
                name="applicationDate"
                value={jobData.applicationDate}
                onChange={handleChange}
                onBlur={() => handleBlur('applicationDate')}
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
                Application Link:
                <input
                type="text"
                name="applicationLink"
                value={jobData.applicationLink}
                onChange={handleChange}
                />
            </label>

            <label>
                Following Date:
                <input
                type="datetime-local"
                name="followingDate"
                value={jobData.followingDate}
                onChange={handleChange}
                />
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

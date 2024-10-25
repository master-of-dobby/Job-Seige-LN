import React, { useState } from "react";
import "./TrackJob.css";

function TrackJobSection() {
  const [jobData, setJobData] = useState([
    {
      jobId: "101",
      company: "Tech Solutions",
      title: "Software Engineer",
      location: "San Francisco, CA",
      appliedOn: "2024-01-15",
      status: "Interview",
      shortlisted: "Yes",
      round1: "Pass",
      round2: "Pass",
      round3: "Pending",
      verdict: "Pending",
      nextChance: "N/A",
      analysis: "Strong technical skills",
    },
    {
      jobId: "102",
      company: "Creative Corp",
      title: "Product Designer",
      location: "New York, NY",
      appliedOn: "2024-02-20",
      status: "Applied",
      shortlisted: "No",
      round1: "N/A",
      round2: "N/A",
      round3: "N/A",
      verdict: "N/A",
      nextChance: "3 months",
      analysis: "Improve portfolio",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
    {
      jobId: "103",
      company: "Global Finance",
      title: "Data Analyst",
      location: "Remote",
      appliedOn: "2024-03-05",
      status: "Rejected",
      shortlisted: "No",
      round1: "Fail",
      round2: "N/A",
      round3: "N/A",
      verdict: "No",
      nextChance: "6 months",
      analysis: "Needs more experience",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const totalPages = Math.ceil(jobData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = jobData.slice(startIndex, startIndex + rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="track-job-section">
      <div className="your-jobs">
        <h1>Your Jobs</h1>
        <p>Siege here for a perfect life...</p>
      </div>
      <div className="table-paginatation">
        <table className="job-table">
          <thead>
            <tr>
              <th>Job Id</th>
              <th>Company</th>
              <th>Title</th>
              <th>Location</th>
              <th>Applied On</th>
              <th>Status</th>
              <th>Shortlisted</th>
              <th>Round 1</th>
              <th>Round 2</th>
              <th>Round 3</th>
              <th>Verdict</th>
              <th>Next Chance</th>
              <th>Analysis</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((job, index) => (
              <tr key={index}>
                <td>{job.jobId}</td>
                <td>{job.company}</td>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.appliedOn}</td>
                <td>{job.status}</td>
                <td>{job.shortlisted}</td>
                <td>{job.round1}</td>
                <td>{job.round2}</td>
                <td>{job.round3}</td>
                <td>{job.verdict}</td>
                <td>{job.nextChance}</td>
                <td>{job.analysis}</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination-controls">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrackJobSection;

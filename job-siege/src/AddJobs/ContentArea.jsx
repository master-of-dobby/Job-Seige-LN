import React from 'react';
import AddJobs from './AddJobs';

const ContentArea = ({ section }) => {
  return (
    <div className="content-area">
      {section === 'Job' && (
        <div>
          <h2>Job Information</h2>
          <AddJobs/>
        </div>
      )}
      {section === 'Round1' && (
        <div>
          <h2>Round 1 Details</h2>
          <p>Information about Round 1 of the job interview process.</p>
        </div>
      )}
      {section === 'Round2' && (
        <div>
          <h2>Round 2 Details</h2>
          <p>Information about Round 2 of the job interview process.</p>
        </div>
      )}
    </div>
  );
};

export default ContentArea;

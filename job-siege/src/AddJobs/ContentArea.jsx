import React from 'react';
import AddJobs from './AddJobs';
import RoundForm from '../AddRounds/RoundForm';

const ContentArea = ({ section, rounds }) => {
  return (
    <div className="content-area">
      {section === 'Job' && (
        <div>
          <h2>Job Information</h2>
          <AddJobs/>
        </div>
      )}
      {rounds.map((round, index) => (
            section === round  && (
              <div>
                <h2>{round} Details</h2>
                <RoundForm/>
              </div>
            )
        ))}
    </div>
  );
};

export default ContentArea;

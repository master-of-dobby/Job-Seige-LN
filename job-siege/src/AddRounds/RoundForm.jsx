import React, { useState } from 'react';
import "./RoundForm.css"

function RoundForm() {
  const [formData, setFormData] = useState({
    roundNo: '',
    name: '',
    date: '',
    status: '',
    feedback: '',
    duration: '',
    location: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form after submission if needed
    setFormData({
      roundNo: '',
      name: '',
      date: '',
      status: '',
      feedback: '',
      duration: '',
      location: '',
      notes: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Round No:
        <input
          type="number"
          name="roundNo"
          value={formData.roundNo}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Status:
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Feedback:
        <textarea
          name="feedback"
          value={formData.feedback}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Duration:
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Notes:
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RoundForm;

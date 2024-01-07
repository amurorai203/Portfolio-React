import React, { useState } from 'react';

function ContactForm() {

  const [formData, setFormData] = useState({
    textArea: ''
  });

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    setFormData({
      textArea: ''
    });
  };

  return (
    <div>
      <h2 className="text-left">Contact Form</h2>

      <form className="col-sm-2">
        <textarea
          value={formData.textArea}
          name="textarea"
          onChange={handleInputChange}
          type="textarea"
          rows="5"
        />
        <p></p>
        <button onClick={handleFormSubmit}>Submit</button>
      </form>

    </div>
  );
}

export default ContactForm;

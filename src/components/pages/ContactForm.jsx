import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

// Define the form textarea
// No action defined at the moment
function ContactForm() {

  // const [formData, setFormData] = useState({
  //   textArea: ''
  // });

  const form = useRef();

  const clearEMailForm = () => {
    form.current.user_name.value = "";
    form.current.user_email.value = "";
    form.current.message.value = "";
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current.user_email.value !== ""){
// console.log(form.current);
    emailjs.sendForm('service_9qq2dg8', 'template_andygithub', form.current, 'Ei3GDuHjFYeoP0UEZ')
      .then((result) => {
          console.log(result.text);
          alert("Email sent.");
          clearEMailForm();
      }, (error) => {
          console.log(error.text);
          alert("EMail sending error.");
      });
    } else {
      alert("Please input with your email address");
    }
  };

  // const handleInputChange = (event) => {
  //   // Getting the value and name of the input which triggered the change
  //   let value = event.target.value;
  //   const name = event.target.name;

  //   // Updating the input's state
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleFormSubmit = (event) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();

  //   setFormData({
  //     textArea: ''
  //   });
  // };

  return (
    <div className="contact-form">
      <h2 className="text-left">Contact Me</h2>

      <form className="col-sm-2" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <textarea className="message-text"
          // value={formData.textArea}
          name="message"
          type="textarea"
          rows="5"
        />
        <p></p>
        <input type="submit" value="Send" />
      </form>

    </div>
  );
}

export default ContactForm;

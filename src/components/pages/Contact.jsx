import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactForm from './ContactForm';


function Contact(props) {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
        <div className="card-container"></div>
      <section className="row justify-center">
      <div className="card-column">
        <figure className="card code-card">
          <h3 className="card-header">Email</h3>
          <div className="card-body">
            <a href="laihchi@gmail.com">laihchi@gmail.com</a>
          </div>
        </figure>
      </div>
      <div className="card-column">
        <figure className="card code-card">
          <h3 className="card-header">LinkedIn</h3>
          <div className="card-body">
            <a href="https://www.linkedin.com/in/andy-lai-7a80b330/" target="_blank">Andy Lai</a>
          </div>
        </figure>
      </div>
      <div className="card-column">
        <figure className="card code-card">
          <h3 className="card-header">Github</h3>
          <div className="card-body">
            <a href="https://github.com/amurorai203" target="_blank">amurorai203</a>
          </div>
        </figure>
      </div>
      <div className="card-column">
        <figure className="card code-card">
          <h3 className="card-header">CV</h3>
          <div className="card-body">
            <a href="https://amurorai203.github.io/Portfolio/ref/CV_AndyLai.pdf" target="_blank"><img src="https://amurorai203.github.io/Bootstrap-Portfolio/images/cv.jpg"></img></a>
          </div>

        </figure>
      </div> 
    </section>

      <Link to="contactform" role="button" className="btn btn-link">
        Contact More
      </Link>
      {/* <Link to="contact" role="button" className="btn btn-link">
        Contract Less
      </Link> */}
      <Routes>
        <Route path="contactform" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default Contact;

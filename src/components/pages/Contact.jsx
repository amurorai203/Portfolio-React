import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ContactForm from './ContactForm';


function Contact(props) {
  return (
    <div>
      <h1>Contact Me</h1>
      <p>
      <section class="row justify-center">
      <div class="card-column">
        <figure class="card code-card">
          <h2 class="card-header">Email</h2>
          <div class="card-body">
            <a href="laihchi@gmail.com">laihchi@gmail.com</a>
          </div>
        </figure>
      </div>
      <div class="card-column">
        <figure class="card code-card">
          <h2 class="card-header">LinkedIn</h2>
          <div class="card-body">
            <a href="https://www.linkedin.com/in/andy-lai-7a80b330/" target="_blank">Andy Lai</a>
          </div>
        </figure>
      </div>
      <div class="card-column">
        <figure class="card code-card">
          <h2 class="card-header">Github</h2>
          <div class="card-body">
            <a href="https://github.com/amurorai203" target="_blank">amurorai203</a>
          </div>
        </figure>
      </div>
      <div class="card-column">
        <figure class="card code-card">
          <h2 class="card-header">CV</h2>
          <div class="card-body">
            <a href="https://amurorai203.github.io/Portfolio/ref/CV_AndyLai.pdf" target="_blank"><img src="./assets/img/cv.jpg"></img></a>
          </div>

        </figure>
      </div> 
    </section>

      </p>
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

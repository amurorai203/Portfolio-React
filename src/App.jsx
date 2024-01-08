import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Interests from './components/pages/Interests';
import Contact from './components/pages/Contact';
import ContactForm from './components/pages/ContactForm';


function App() {
  // console.log(React);
  return (
    <Router>
      <Header />
      {/* Wrap Route elements in a Routes component */}
      <Routes>
        {/* Define routes using the Route component to render different page components at different paths */}
        {/* Define a default route that will render the Home component */}
        <Route path="Portfolio-React/" element={<Home />} />
        <Route path="Portfolio-React/projects/" element={<Projects />} />
        <Route path="Portfolio-React/interests/" element={<Interests />} />
        {/* Define a route that will have descendant routes */}
        <Route path="Portfolio-React/contact/*" element={<Contact />} />
      </Routes>
      <footer className="footer">
        <div className="align-bottom">
          <p>&copy; Powered by Github. With edX Front-End Web Development program.</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;

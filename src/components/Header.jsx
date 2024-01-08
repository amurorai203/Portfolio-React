import React from 'react';
import { NavLink } from 'react-router-dom';

// Define the Navbar items
function Header() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <NavLink
          to="Portfolio-React/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Portfolio-React/projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          to="Portfolio-React/interests" 
          end 
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
          > Interests
            </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="Portfolio-React/contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default Header;

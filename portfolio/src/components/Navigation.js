import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (

    <nav>
      <div className="navbar bg-base-100">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}

          className={currentPage === 'About' ? 'btn btn-primary normal-case text-xl nav-link active' : 'btn btn-ghost normal-case text-xl nav-link'} 
        >
          About Me
        </a>

        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'btn btn-primary normal-case text-xl nav-link active' : 'btn btn-ghost normal-case text-xl nav-link'} 
        >
          Portfolio
        </a>

        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}

          className={currentPage === 'Contact' ? 'btn btn-primary normal-case text-xl nav-link active' : 'btn btn-ghost normal-case text-xl nav-link'} 
        >
          Contact
        </a>

        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}

          className={currentPage === 'Resume' ? 'btn btn-primary normal-case text-xl nav-link active' : 'btn btn-ghost normal-case text-xl nav-link'} 
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navigation;


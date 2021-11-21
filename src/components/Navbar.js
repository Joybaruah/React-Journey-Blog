import React from 'react'

const Navbar = () => {
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <h2>JOY BARUAH</h2>
          </div>
          <ul className="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <button className="burger-menu">
            
          </button>
        </nav>
      </>
    );
}

export default Navbar

import React , {useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const menuToggle = () => {
      const link = document.querySelector('.links')
      link.classList.toggle('active');
      console.log('dd')
    };
    
    const menuHandle = () =>{
      setMenuOpen((menuOpen)=>!menuOpen)
    }
    return (
      <>
        <nav className="navbar">
          <div className="logo">
            <h2>JOY BARUAH</h2>
          </div>
          <ul className="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <div className="menu-icon" onClick={menuToggle}>
            {!menuOpen ? (
              <FaBars onClick={menuHandle} />
            ) : (
              <FaTimes onClick={menuHandle} />
            )}
          </div>
        </nav>
      </>
    );
}

export default Navbar

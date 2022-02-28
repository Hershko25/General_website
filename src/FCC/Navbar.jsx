import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import '../Css/Navbar.css';
import '../Css/Button.css'



export default function Navbar() {
  const [click, setClick] = useState(false); //Open or close mobile menu

  const closeMobileMenu = () => setClick(false);



  return (
 
    <header>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Web
            
          </Link>
         
          <ul className='menu-icon' onClick={()=>setClick(!click)}>
            <li className={click ? 'fas fa-times' : 'fas fa-bars'} />{/*If true then times else bars*/}
          </ul>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Product'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Product
              </Link>
            </li>
         
            <li className='nav-item'>
              <Link
                to='/Login' 
                className='nav-links'
                onClick={closeMobileMenu}
                
              >
               Login
              </Link>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sing In
              </Link>
            </li>
          </ul>
           <button className=' hide btn--outline btn--medium '>Sing In</button>{/*Sing in button*/}
        </div>
      </nav>
     </header>
  
  );
}


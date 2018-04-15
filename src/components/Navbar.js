import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/ideanowa.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure>s
        </Link>
      </div>
      <div className="navbar-start">
      <Link className="navbar-item" to="/">
          Strona Głowna
        </Link>
      <Link className="navbar-item" to="/projekty">
          Projekty
        </Link>
        <Link className="navbar-item" to="/ofundacji">
          O fundacji
        </Link>
        <Link className="navbar-item" to="/cele">
          Cele
        </Link>
        <Link className="navbar-item" to="/kontakt">
          Kontakt
        </Link>
      </div>
      <div className="navbar-end">
      
       
      </div>
    </div>
  </nav>
)

export default Navbar

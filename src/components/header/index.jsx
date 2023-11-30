import React from 'react'
import './style.css'
import { PiUserBold } from 'react-icons/pi'
import { CgMail } from 'react-icons/cg'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="header-container">
      <Link to={'/'}>
        <img src={Logo} alt="Ease logo" />
      </Link>
      <nav className="nav-content">
        <div className="nav-user">
          <CgMail />
          <div>
            <PiUserBold />
            <p>Sócrates</p>
          </div>
        </div>
      </nav>
    </header>
  )
}

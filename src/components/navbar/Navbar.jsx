import { useState } from 'react'

import LogoImage from '../../images/netflix-82871.png'
import AvatarImage from '../../images/avatar.png'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsIcon from '@material-ui/icons/Notifications'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

import './navbar.scss'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true)
    return () => (window.onscroll = null)
  }

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={LogoImage} alt="Logo" />

          <span>HomePage</span>

          <span>Series</span>

          <span>Movies</span>

          <span>New and Popular</span>

          <span>My List</span>
        </div>

        <div className="right">
          <SearchIcon className="navbar-right__icon" />

          <span>KID</span>

          <NotificationsIcon className="navbar-right__icon" />

          <img src={AvatarImage} alt="Avatar" />


          <div className="profile">
            <ArrowDropDownIcon className="navbar-right__icon" />

            <div className="options">
              <span>Settings</span>

              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix" />
      <img className='avatar'  src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt="avatar" />
   
   <div className='navleft'>
    <p style={{fontSize:'Bold'}}>HOME</p>
    <p>TV Shows</p>
    <p> Movies</p>
    <p>News & Popular</p>
    <p>My List</p>
    <p>Browse by Languages</p>
   </div>

   <div className='navright'>
   <p><i class="fa-solid fa-magnifying-glass"></i></p>
   <p>Children</p>
   <p><i class="fa-regular fa-bell"></i></p>


   </div>
   
   </div>
  )
}

export default NavBar

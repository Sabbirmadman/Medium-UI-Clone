import React from 'react'
import './Navbar.scss'
import Logo from '../../media/img/logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className='navbar'>
			<div className='nav_left'>
				<div className='logo'>
					<img src={Logo} alt='logo' className='nav_logo' />
					<span className='logo_text'>Medium</span>
				</div>
			</div>
			<div className='nav_right'>
				<div className='nav_links'>
					<Link to='/' className='link nav_link'>Our Story</Link>
					<Link to='/' className='link nav_link'>Membership</Link>
					<Link to='/' className='link nav_link'>Write</Link>
					<Link to='/' className='link nav_link'>Sign In</Link>
					<Link to='/' className='link nav_link green_btn'>Get Started</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
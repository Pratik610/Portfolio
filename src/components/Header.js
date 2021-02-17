import React from 'react'

const Header = () => {
	return (
		<div className='mt-2 p-1'>
			<h3 className='text-center d-md-none text-light mt-3 '>
				Hi , I'm Pratik Supekar
			</h3>
			<h1 className='text-center d-none d-md-block text-light mt-3'>
				&lt; Hi , I'm Pratik Supekar /&gt;
			</h1>

			<nav className='nav   justify-content-center mt-4 '>
				<a
					className='nav-link mr-md-5 ml-md-5  text-decoration-none text-light'
					href='#About'
				>
					About
				</a>
				<a
					className='nav-link mr-md-5 ml-md-5  text-decoration-none text-light'
					href='#Skills'
				>
					Skills
				</a>
				<a
					className='nav-link mr-md-5 ml-md-5  text-decoration-none text-light'
					href='#Projects'
				>
					Projects
				</a>
				<a
					className='nav-link mr-md-5 ml-md-5  text-decoration-none text-light'
					href='#Contact'
				>
					Contact
				</a>
			</nav>
		</div>
	)
}

export default Header

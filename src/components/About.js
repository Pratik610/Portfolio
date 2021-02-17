import React from 'react'
import Profile from '../images/Profile.jpg'

const About = () => {
	return (
		<div className='row  p-3 mt-1' id='About'>
			<h3 className='col-12 rounded-top  dark heading p-3 m-0 text-light'>
				About
			</h3>
			<div className='col-md-6 p-4 col-12 dark   d-flex justify-content-center'>
				<img
					className='rounded-circle img-fluid w-50   hvr-grow '
					src={Profile}
					alt=''
				/>
			</div>
			<div className='col-md-6 rounded-bottom dark col-12'>
				<div className=' p-3 mt-lg-5'>
					<div className='p-3 border hvr-sink box'>
						<h3 className='text-light '> What I Do </h3>
						<p className='m-2 pt-2 text-light pb-3'>
							I am a Student and a Self Taught Full-Stack Web-Developer
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About

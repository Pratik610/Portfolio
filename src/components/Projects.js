import React from 'react'
import ptv1 from '../images/ptv1.png'

const Projects = () => {
	return (
		<div id='Projects'>
			<div className='row dark text-light  p-3 mt-1'>
				<h3 className='col-12 rounded-top  heading p-3 m-0 text-light'>
					About
				</h3>
				<div className='col-12 mt-1 col-md-6'>
					<h5 className=''>Online Movies / TV-Series Streaming Website</h5>
					<ul className='mt-3   '>
						<li className='mt-3 '>The Website Is Made in PHP</li>
						<li className='mt-3'>It Use IMDB API To Fetch Info</li>
						<li className='mt-3'>MySQL DataBase</li>
					</ul>
					<h6 className='mt-lg-5 mt-3 mb-5 '>
						To Visit The Website{' '}
						<a href='https://piratetv.tk' target='_blank' rel='noreferrer'>
							Click Here
						</a>
					</h6>
				</div>

				<div className='col-12 col-md-6 '>
					<a href='https://piratetv.tk' target='_blank' rel='noreferrer'>
						<img
							src={ptv1}
							className='img-fluid border p-1 hvr-grow-rotate rounded  '
							alt=''
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Projects

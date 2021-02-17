import React from 'react'
import Social from '../images/Social.png'
const Contact = () => {
	return (
		<div id='Contact'>
			<div className='row dark text-light  p-3 mt-1'>
				<h3 className='col-12 rounded-top  heading p-3 m-0 text-light'>
					Contact
				</h3>
				<div className='col-12 col-md-6'>
					<img src={Social} className='img-fluid' alt='' />
				</div>
				<div className='col-12 col-md-6 pt-md-5 '>
					<div className='row text-center  pt-md-5'>
						<div className='col-4 mt-2  hvr-grow'>
							{' '}
							<a
								href='https://www.instagram.com/pratik610_/'
								target='_blank'
								rel='noreferrer'
								className='text-decoration-none text-light'
							>
								<i className='fab h1 fa-instagram'></i>
							</a>
						</div>
						<div className='col-4 mt-2 hvr-grow'>
							<a
								href='mailto:prat1ksupek4r@gmail.com'
								className='text-decoration-none text-light'
							>
								<i className='far h1 fa-envelope'></i>
							</a>
						</div>
						<div className='col-4 mt-2 hvr-grow'>
							{' '}
							<a
								href='https://twitter.com/pratik610'
								target='_blank'
								rel='noreferrer'
								className='text-decoration-none text-light'
							>
								<i class='fab h1 fa-twitter'></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact

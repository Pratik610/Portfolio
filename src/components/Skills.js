import React from 'react'

const Skills = () => {
	return (
		<div id='Skills'>
			<h3 className=' rounded-top dark p-3 m-0 text-light heading'>Skills</h3>
			<div className='text-light dark p-3'>
				<div className='row heading'>
					<div className='col-12 col-md-6   mt-1'>
						<label htmlFor='meter1' className='m-0'>
							HTML
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='90'
							className='w-100'
						></meter>
					</div>
					<div className='col-12 col-md-6  mt-1'>
						<label htmlFor='meter1' className='m-0'>
							CSS
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='70'
							className='w-100'
						></meter>
					</div>
					<div className='col-12 col-md-6  mt-1'>
						<label htmlFor='meter1' className='m-0'>
							Bootstrap
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='90'
							className='w-100'
						></meter>
					</div>
					<div className='col-12 col-md-6  mt-1'>
						<label htmlFor='meter1' className='m-0'>
							JavaScript
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='80'
							className='w-100'
						></meter>
					</div>
					<div className='col-12 col-md-6  mt-1'>
						<label htmlFor='meter1' className='m-0'>
							Jquery
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='80'
							className='w-100'
						></meter>
					</div>
					<div className='col-12 col-md-6  mt-1'>
						<label htmlFor='meter1' className='m-0'>
							React JS
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='75'
							className='w-100'
						></meter>
					</div>
					<div className='col-12 col-md-6 mt-1'>
						<label htmlFor='meter1' className='m-0'>
							Node JS
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='60'
							className='w-100'
						></meter>
					</div>

					<div className='col-12 col-md-6  mt-1'>
						<label htmlFor='meter1' className='m-0'>
							Php
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='65'
							className='w-100'
						></meter>
					</div>
					<div className='col-12 col-md-6  mt-1'>
						<label htmlFor='meter1' className='m-0'>
							MySQL
						</label>
						<meter
							id='meter1'
							min='0'
							max='100'
							low='40'
							high='75'
							optimum='90'
							value='60'
							className='w-100'
						></meter>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills

import React from 'react'

const Work = () => {
	var jobs = [
		{
			title: 'Frontend Developer',
			'comapny-name': 'ABC',
			'joining-date': '1/1/2022',
			'ends-Date': '1/1/2022',
			address: 'abc 123',
			'working-time': '2:00PM to 12:00PM',
			technologies: ['HTML', 'CSS', 'bootstrap'],
			'company-type': 'It company',
			desc: 'abc def ghi jkl',
		},
		{
			title: 'Frontend Developer',
			'comapny-name': 'ABC',
			'joining-date': '1/1/2022',
			'ends-Date': '1/1/2022',
			address: 'abc 123',
			'working-time': '2:00PM to 12:00PM',
			technologies: ['HTML', 'CSS', 'bootstrap'],
			'company-type': 'It company',
			desc: 'abc def ghi jkl',
		},
	]

	return (
		<div className="container-flued bg-dark bg-opacity-10 text-dark md:px-0">
			<div className="container py-4 mx-auto text-center">
				<h1 className="font-anton py-4 text-[24px] md:text-[30px] text-primary">
					Work Experience
				</h1>
				<ul>
					{jobs.map((job) => {
						return (
							<li
								className="px-2 py-3 my-4 bg-white rounded-sm shadow rounded-tl-xl rounded-br-xl md:px-4"
								key={job.id}
							>
								<div className="shoadow-xl ">
									<p>{job.title}</p>
								</div>
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Work

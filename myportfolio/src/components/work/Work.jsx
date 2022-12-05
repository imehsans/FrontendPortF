import React from 'react'

const Work = () => {
	var jobs = [
		{
			title: 'Frontend Developer1',
			'comapny-name': 'ABC',
			'joining-date': '1/1/2022',
			'ends-Date': '1/1/2022',
			address: {
				street: 'i-10/1',
				city: 'abc',
				country: 'xyz',
			},
			'working-time': '2:00PM to 12:00PM',
			technologies: ['HTML', 'CSS', 'bootstrap'],
			'company-type': 'It company',
			desc: 'abc def ghi jkl',
		},
		{
			title: 'Frontend Developer2',
			'comapny-name': 'ABC',
			'joining-date': '1/1/2022',
			'ends-Date': '1/1/2022',
			address: {
				street: '',
				city: 'abc',
				country: 'xyz',
			},
			'working-time': '2:00PM to 12:00PM',
			technologies: ['HTML', 'CSS', 'bootstrap'],
			'company-type': 'It company',
			desc: 'abc def ghi jkl',
		},
	]

	return (
		<div className="container-flued bg-dark bg-opacity-10 text-dark md:px-0">
			<div className="container px-1 py-4 mx-auto text-center md:px-0">
				<h1 className="font-anton py-4 text-[24px] md:text-[30px] text-primary">
					Work Experience
				</h1>
				<ul className="flex flex-col justify-between gap-10 md:flex-row">
					{jobs.map((job) => {
						return (
							<>
								<li
									className="w-full px-2 py-3 text-left bg-white shadow-xl max-auto rounded-tl-xl lg:w-1/2 rounded-br-xl md:px-4"
									key={job.id}
								>
									<div className="">
										<h1 className="text-[24px] font-normal">{job.title}</h1>
										<div className="flex mb-4 items-center gap-x-3 text-[20px]">
											<span className="italic font-semibold text-secondary">
												{job['comapny-name']}
											</span>
											<span className="text-light">
												[{job['joining-date']} - {job['ends-Date']} ]
											</span>
										</div>
										<div>
											<h1>Company Address</h1>
											<div className="px-1">
												{job.address.street.length !== 0 ? (
													<p>Street : {job.address.street}</p>
												) : (
													''
												)}
												{job.address.city.length !== 0 ? (
													<p>City : {job.address.city}</p>
												) : (
													''
												)}
												{job.address.country.length !== 0 ? (
													<p>Street : {job.address.country}</p>
												) : (
													''
												)}
											</div>
										</div>
									</div>
								</li>
							</>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Work

import React from 'react'

const Work = () => {
	var jobs = [
		{
			title: 'Frontend Developer',
			'company-name': 'Merik Solutions',
			'joining-date': '24/06/2022',
			'ends-Date': 'Current',
			address: {
				street: 'I-10/3',
				city: 'Islamabad',
				country: 'Pakistan',
				link: 'https://meriksolutions.biz',
			},
			'working-time': '6:00PM to 3:00AM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
				'ReduxJS',
				'GIT',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI.',
		},
		{
			title: 'Frontend Developer',
			'company-name': 'Merik Solutions',
			'joining-date': '24/06/2022',
			'ends-Date': 'Current',
			address: {
				street: 'I-10/3',
				city: 'Islamabad',
				country: 'Pakistan',
				link: 'https://meriksolutions.biz',
			},
			'working-time': '6:00PM to 3:00AM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
				'ReduxJS',
				'GIT',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI.',
		},
		{
			title: 'Frontend Developer',
			'company-name': 'Merik Solutions',
			'joining-date': '24/06/2022',
			'ends-Date': 'Current',
			address: {
				street: 'I-10/3',
				city: 'Islamabad',
				country: 'Pakistan',
				link: 'https://meriksolutions.biz',
			},
			'working-time': '6:00PM to 3:00AM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
				'ReduxJS',
				'GIT',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI.',
		},
		{
			title: 'Frontend Developer',
			'company-name': 'Merik Solutions',
			'joining-date': '24/06/2022',
			'ends-Date': 'Current',
			address: {
				street: 'I-10/3',
				city: 'Islamabad',
				country: 'Pakistan',
				link: 'https://meriksolutions.biz',
			},
			'working-time': '6:00PM to 3:00AM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
				'ReduxJS',
				'GIT',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI.',
		},
	]

	return (
		<div className="pb-8 container-flued bg-dark bg-opacity-10 text-dark md:px-0">
			<div className="container px-1 py-4 mx-auto text-center md:px-0">
				<h1 className="font-anton py-4 text-[24px] md:text-[30px] text-primary">
					Work Experience
				</h1>
				<ul className="flex flex-col flex-wrap justify-between md:flex-row">
					{jobs.map((job) => {
						return (
							<>
								{job ? (
									<li
										className="w-full px-2 py-3 text-left scale-95 bg-white shadow-xl hover:scale-100 max-auto md:w-1/2 rounded-xl md:px-4"
										key={job?.id}
									>
										<div className="p-3">
											<h1 className="text-[24px] font-normal">{job.title}</h1>
											<div className="flex flex-wrap mb-3 items-center gap-x-3 text-[20px]">
												<span className="italic font-semibold text-secondary">
													{job['company-name']}
												</span>
												<span className="text-light">
													[{job['joining-date']} - {job['ends-Date']} ]
												</span>
											</div>
											{job.address ? (
												<div className="mb-3">
													<h1>Company Address</h1>
													<div>
														{job?.address?.street ? (
															<p>-Street : {job?.address?.street}</p>
														) : (
															''
														)}
														{job?.address?.city ? (
															<p>-City : {job?.address?.city}</p>
														) : (
															''
														)}
														{job?.address?.country ? (
															<p>-Street : {job?.address?.country}</p>
														) : (
															''
														)}
														{job?.address?.link ? (
															<div>
																<a
																	href={job?.address?.link}
																	target="_blank"
																	className="underline text-secondary"
																	rel="noreferrer"
																>
																	View Company Website
																</a>
															</div>
														) : (
															''
														)}
													</div>
												</div>
											) : (
												''
											)}
											{job['working-time'] ? (
												<div className="mb-3">
													<p>Working Time : {job?.['working-time']}</p>
												</div>
											) : (
												''
											)}
											{job?.desc ? (
												<div className="mb-3">
													<h1>Description:</h1>
													<p>{job?.desc}</p>
												</div>
											) : (
												''
											)}
											{job?.technologies ? (
												<div className="mb-3">
													<h1 className="mb-2">
														Works On The Following Technologies:
													</h1>
													<ul className="flex flex-wrap py-3 gap-x-3 gap-y-6">
														{job.technologies.map((tech) => {
															return (
																<li key={tech?.id}>
																	<label className="px-3 py-2 capitalize border rounded border-primary text-primary hover:text-secondary hover:border-secondary">
																		{tech}
																	</label>
																</li>
															)
														})}
													</ul>
												</div>
											) : (
												''
											)}
										</div>
									</li>
								) : (
									<li>
										<p className="p-4 bg-white text-dark">Zero Experience!</p>
									</li>
								)}
							</>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

export default Work

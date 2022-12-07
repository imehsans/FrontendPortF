import React from 'react'

const Projects = () => {
	var Projects = [
		{
			name: 'SafetyConnect',
			img3: '',
			link: 'https://inspectionweb-react-ehsan.netlify.app/',
			detail: '',
		},
		{
			name: 'Cable-Co Dashboard',
			img3: '',
			link: 'https://cableco-dashboard-by-ehsan.netlify.app/',
			detail: '',
		},
		{
			name: 'SSL-Checker ToolKit',
			img3: '',
			link: 'https://toolkit-tailwind-by-ehsan.netlify.app/src/',
			detail: '',
		},
		{
			name: 'SCTE Site',
			img3: '',
			link: 'https://scte-site-by-ehsan.netlify.app/',
			detail: '',
		},
		{
			name: 'Apeam Site',
			img3: '',
			link: 'https://apem-site-by-ehsanullah.netlify.app/',
			detail: '',
		},
	]

	return (
		<div className="container py-8 mx-auto">
			<h1 className="font-anton text-center py-4 text-[24px] md:text-[30px] text-primary">
				Projects
			</h1>
			<ul className="flex flex-wrap overflow-hidden gap-y-4">
				{Projects?.map((project) => {
					return (
						<li
							className="w-1/3 px-3 py-4 duration-300 ease-in-out scale-95 shadow-2xl cursor-pointer hover:bg-opacity-20 h-80 hover:scale-90 bg-dark hover:bg-gradient-to-r hover cursor pointer hover:from-secondary hover:to-primary"
							key={project.key}
						>
							<a
								href={project.link}
								target="_blank"
								className="flex items-center justify-center w-full h-full opacity-0 hover:opacity-100 "
								rel="noreferrer"
							>
								<h1 className="text-[35px] font-anton text-white">
									{project?.name}
								</h1>
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Projects

import React from 'react'
const Projects = () => {
	var Projects = [
		{
			name: 'abc',
			img: 'img',
			link: '',
			detail: '',
		},
		{
			name: 'abc',
			img: 'img',
			link: '',
			detail: '',
		},
		{
			name: 'abc',
			img: 'img',
			link: '',
			detail: '',
		},
		{
			name: 'abc',
			img: 'img',
			link: '',
			detail: '',
		},
	]

	return (
		<div className="container py-8 mx-auto">
			<h1 className="font-anton text-center py-4 text-[24px] md:text-[30px] text-primary">
				Projects
			</h1>
			<ul className="flex gap-4 overflow-auto">
				{Projects.map((project) => {
					return (
						<li className="w-1/3 px-3 py-4 duration-300 ease-in-out scale-100 shadow-2xl bg-dark hover:bg-opacity-20 h-80 hover:scale-90 bg-gradient-to-r hover:from-secondary hover:to-primary">
							<h1>{project.name}</h1>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Projects

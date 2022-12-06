import React from 'react'

const Projects = () => {
	var Projects = [
		{
			name: 'abc',
			img: 'img',
		},
		{
			name: 'abc',
			img: 'img',
		},
		{
			name: 'abc',
			img: 'img',
		},
		{
			name: 'abc',
			img: 'img',
		},
	]

	return (
		<div className="container py-8 mx-auto">
			<h1 className="font-anton text-center py-4 text-[24px] md:text-[30px] text-primary">
				Projects
			</h1>
			<ul className="flex flex-wrap">
				{Projects.map((project) => {
					return (
						<li className="w-1/3 shadow-2xl bg-slate-500">
							<h1>pak is casdf asddw asad {project.name}</h1>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Projects

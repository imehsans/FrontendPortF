import React from 'react'

const Skills = () => {
	var skills = [
		{
			programming: [
				{
					img: './images/html5.png',
					title: 'HTML',
					command: '90%',
				},
				{
					img: './images/CSS3.png',
					title: 'CSS',
					command: '95%',
				},
				{
					img: './images/Bootstrap.png',
					title: 'Bootstrap',
					command: '95%',
				},
				{
					img: './images/Tailwind.png',
					title: 'TailwindCSS',
					command: '95%',
				},
				{
					img: './images/Sass.png',
					title: 'SASS',
					command: '90%',
				},
				{
					img: './images/javascript.png',
					title: 'JavaScript',
					command: '80%',
				},
				{
					img: './images/jquery.png',
					title: 'JQuery',
					command: '65%',
				},
				{
					img: './images/Ajax.png',
					title: 'AJAX',
					command: '50%',
				},
				{
					img: './images/React.png',
					title: 'ReactJs',
					command: '80%',
				},
				{
					img: './images/redux.png',
					title: 'Redux JS',
					command: '60%',
				},
				{
					img: './images/git.png',
					title: 'GIT',
					command: '70%',
				},
				{
					img: './images/nodejs.png',
					title: 'NodeJs',
					command: '10%',
				},
				{
					img: './images/mongodb.png',
					title: 'MongoDB',
					command: '10%',
				},
				{
					img: './images/express.png',
					title: 'ExpressJs',
					command: '10%',
				},
			],
			technical: [
				{
					img: '',
					title: 'HTML',
					command: 90,
				},
			],
			communication: [
				{
					img: '',
					title: 'HTML',
					command: '90',
				},
			],
			organizational: [
				{
					img: '',
					title: 'HTML',
					command: '90',
				},
			],
		},
	]

	return (
		<div className="container py-8 mx-auto text-center md:py-16">
			<h1 className="font-anton py-2 text-[24px] md:text-[35px] text-dark">
				Personal Skills
			</h1>
			<div>
				<div className="flex">
					<h1 className="font-semibold py-4 text-[18px] md:text-[20px] text-dark text-start">
						All Skills
					</h1>
					<h1 className="font-semibold py-4 text-[18px] md:text-[20px] text-dark text-start">
						All Skills
					</h1>
					<h1 className="font-semibold py-4 text-[18px] md:text-[20px] text-dark text-start">
						All Skills
					</h1>
					<h1 className="font-semibold py-4 text-[18px] md:text-[20px] text-dark text-start">
						All Skills
					</h1>
				</div>
				<div className="text-start">
					{skills.map((skill) => {
						return (
							<ul className="flex flex-wrap">
								{skill.programming.map((item) => {
									return (
										<li className="px-3 py-4 text-center transition ease-in-out delay-300 scale-90 border hover:delay-150 hover:scale-100 border-secondary">
											<div className="flex items-center justify-center w-32 h-32 overflow-hidden rounded-full bg-light bg-opacity-10">
												<img className="w-28" src={item.img} alt={item.title} />
											</div>
											<h1 className="font-semibold">{item.title}</h1>
											<p className="">Command {item.command}</p>
											<div class="h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
												<div
													class="h-2 bg-primary rounded-full"
													style={{ width: item.command }}
												></div>
											</div>
										</li>
									)
								})}
							</ul>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default Skills

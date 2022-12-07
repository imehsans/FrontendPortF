import React from 'react'

const AboutMe = () => {
	return (
		<div className="flex items-center justify-around px-4 pt-8 md:pt-16 md:bg-primary">
			<div className="w-3/4 text-center lg:w-1/4 md:w-1/2">
				<h1 className="font-anton text-primary mb-3 text-center md:text-start pt-4 text-[24px] md:text-[30px] md:text-dark">
					About me
				</h1>
				<p className="w-full pb-16 text-center text-dark md:text-start md:w-10/12 lg:w-3/4 xl:w-full">
					Front-End developer with proven experience at TODD's Group, Geeks Hub
					and Merik Solutions in helping companies create and maintain a better
					code base for reusability. Capable of continuous learning from senior
					Developers while still nurturing junior developers. Experience in
					driving projects forward as the development team lead, facilitating
					projects from concept launch. Passionate about learning and
					development with a desire to apply skills on a larger development
					team. Eager to tackle more complex problems and continue to find ways
					to minimize user efficiency.
				</p>
			</div>
			<div className="justify-center hidden w-1/2 md:flex">
				<img className="w-[300px] h-full" src="./images/aboutme.png" alt="" />
			</div>
		</div>
	)
}

export default AboutMe

import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'

const Introduction = () => {
	return (
		<div className="container flex flex-col items-center justify-around px-4 pt-8 mx-auto md:pt-16 mb-14 md:flex-row md:px-0">
			<div className="order-2 w-full md:w-1/2 md:order-1">
				<div className="text-[35px] md:text-[40px] lg:text-[50px] leading-tight font-anton text-dark mb-5 ">
					<h1>
						Hi, I am
						<span className="text-primary">
							<TypeWriterEffect
								startDelay={100}
								cursorColor="white"
								text="EHSANULLAH"
								typeSpeed={200}
								eraseSpeed={200}
							/>
						</span>
					</h1>
					<h1>
						<span>
							<TypeWriterEffect
								startDelay={50}
								cursorColor="white"
								text="Frontend Developer"
								typeSpeed={200}
								eraseSpeed={200}
							/>
						</span>
					</h1>
				</div>
				<p className="mb-5 font-semibold text-justify ">
					Innovative Programmer to make the world a more unified. A creative
					thinker, adept in software development and working with various
					<span className="italic text-secondary"> Data Structures </span>
					and
					<span className="italic text-secondary"> Design Pattern's.</span>
				</p>
				<button className="py-2 text-xl font-normal text-white rounded md:font-semibold md:py-3 bg-primary hover:bg-secondary ">
					<a
						className="px-4 mb-4 md:px-8"
						href="https://drive.google.com/file/d/1ogMx1zis4Raz0GQylZ5CTMWQmEagvoXS/view?usp=sharing"
					>
						Download Resume
					</a>
				</button>
			</div>
			<div className="order-1 w-48 h-48 mb-5 overflow-hidden scale-95 border-4 md:mb-0 rounded-xl md:rounded-full md:order-2 md:w-80 md:h-80 drop-shadow-md-xl shadow-dark md:drop-shadow-2xl bg-light border-secondary hover:border-8 hover:scale-100 ">
				<img
					src="https://user-images.githubusercontent.com/34196609/205230120-f2a10cee-5084-4a66-84bb-c88d65660b91.png"
					alt=""
				/>
			</div>
		</div>
	)
}

export default Introduction

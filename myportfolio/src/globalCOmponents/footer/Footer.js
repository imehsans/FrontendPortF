import React from 'react'
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaStackOverflow,
	FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
	var data = [
		{
			icon: <FaGithubSquare />,
			link: 'https://github.com/imehsans',
		},
		{
			icon: <FaLinkedin />,
			link: 'https://www.linkedin.com/in/ehsan-ullah-57b72a156/',
		},
		{
			icon: <FaStackOverflow />,
			link: 'https://stackoverflow.com/users/9044450/ehsan-ullah',
		},
		{
			icon: <FaTwitterSquare />,
			link: 'https://twitter.com/cdehsann',
		},
		{
			icon: <FaInstagramSquare />,
			link: 'https://www.instagram.com/cdehsan',
		},
		{
			icon: <FaFacebookSquare />,
			link: 'https://www.facebook.com/imehsan.s?mibextid=ZbWKwL',
		},
	]

	return (
		<div className="py-5 border-t-2 border-dashed border-primary bg-light bg-opacity-10">
			<ul className="flex justify-around w-11/12 mx-auto text-[40px] md:text-[50px] sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-5">
				{data?.map((item) => {
					return (
						<li
							key={item?.id}
							className="duration-300 ease-in-out scale-75 hover:scale-100"
						>
							<a href={item?.link} className="text-dark hover:text-primary">
								{item?.icon}
							</a>
						</li>
					)
				})}
			</ul>
			<div>
				<h2 className="text-center text-dark font-lighter">
					Copyright ©2023 All rights reserved
					<i> mehsanjadoon786@gmail.com</i>
				</h2>
			</div>
		</div>
	)
}

export default Footer

import React from 'react'
import {
	FaFacebookSquare,
	FaGithubSquare,
	FaInstagramSquare,
	FaLinkedin,
	FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<div className="py-5 bg-light bg-opacity-10">
			<ul className="flex justify-around w-11/12 mx-auto text-[40px] md:text-[50px] sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-5">
				<li className="scale-75 hover:scale-100">
					<a
						href="https://github.com/imehsans"
						className="text-dark hover:text-primary"
					>
						<FaGithubSquare />
					</a>
				</li>
				<li className="scale-75 hover:scale-100">
					<a
						href="https://www.linkedin.com/in/ehsan-ullah-57b72a156/"
						className="text-dark hover:text-primary"
					>
						<FaLinkedin />
					</a>
				</li>
				<li className="scale-75 hover:scale-100">
					<a
						href="https://twitter.com/cdehsann"
						className="text-dark hover:text-primary"
					>
						<FaTwitterSquare />
					</a>
				</li>
				<li className="scale-75 hover:scale-100">
					<a
						href="https://www.instagram.com/cdehsan"
						className="text-dark hover:text-primary"
					>
						<FaInstagramSquare />
					</a>
				</li>
				<li className="scale-75 hover:scale-100">
					<a
						href="https://www.facebook.com/imehsan.s?mibextid=ZbWKwL"
						className="text-dark hover:text-primary"
					>
						<FaFacebookSquare />
					</a>
				</li>
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

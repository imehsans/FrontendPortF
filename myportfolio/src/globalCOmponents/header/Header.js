import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggle = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<header>
			<div className="px-4 py-2 font-bold text-light bg-dark">
				<div className="container flex items-center justify-between mx-auto">
					<Link to="/">
						<h1 className="font-rubik font-light text-[40px] text-primary">
							Ehsan
						</h1>
					</Link>
					<div
						className={
							toggleMenu
								? 'md:flex  md:pt-0 pt-10 w-full md:w-auto'
								: 'hidden md:flex'
						}
						id="menu"
					>
						<div className="justify-between flex text-[24px] flex-col md:flex-row align-center">
							<Link
								className="px-4 py-2 border-b cursor-pointer md:inline-block hover:text-primary active:text-primary md:border-none"
								to="/work"
							>
								Work
							</Link>
							<Link
								className="px-3 py-2 border-b cursor-pointer md:inline-block hover:text-primary active:text-primary md:border-none"
								to="/blogs"
							>
								Blog
							</Link>
							<Link
								className="px-3 py-2 font-normal border-b cursor-pointer md:inline-block text-secondary hover:text-primary active:text-primary md:border-none"
								to="/contact"
							>
								Contact!
							</Link>
						</div>
					</div>
					<div className="cursor-pointer md:hidden">
						<input class="menu-btn hidden" type="checkbox" id="menu-btn" />
						<label
							class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
							for="menu-btn"
						>
							<span
								onClick={handleToggle}
								class="navicon bg-white-darkest text-black flex items-center relative"
							></span>
						</label>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

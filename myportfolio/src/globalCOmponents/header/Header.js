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
			<div className="flex justify-between px-4 py-2 font-bold text-light bg-dark align-items-center">
				<Link to="/">
					<h1 className="font-rubik font-light text-[40px] text-primary">E</h1>
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
							className=" md:inline-block cursor-pointer hover:text-[#FF6464] active:text-[#FF6464] border-b md:border-none py-2 px-3"
							to="/blogs"
						>
							Blog
						</Link>
						<Link
							className=" md:inline-block cursor-pointer hover:text-[#FF6464] active:text-[#FF6464] border-b md:border-none py-2 px-3"
							to="/contact"
						>
							Contact
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
		</header>
	)
}

export default Header

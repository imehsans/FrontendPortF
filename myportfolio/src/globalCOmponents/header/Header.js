import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [tab, setTab] = useState('home')
	const handleToggle = () => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<header>
			<div className="px-4 py-2 font-bold text-light bg-dark">
				<div className="container flex flex-wrap justify-between mx-auto">
					<Link className="order-1" to="/">
						<h1
							className="font-rubik font-light text-[40px] text-primary"
							onClick={() => setTab('home')}
						>
							JS-Dev
						</h1>
					</Link>
					<div
						className={
							toggleMenu
								? 'md:flex md:pt-0 order-3 pt-2 w-full md:w-auto'
								: 'hidden md:flex order-3'
						}
						id="menu"
					>
						<div className="justify-between md:items-center flex text-[24px] flex-col md:flex-row gap-x-8 align-center">
							<Link
								className="px-4 py-2 border-b cursor-pointer md:px-0 md:py-0 md:inline-block hover:text-primary active:text-primary md:border-none"
								to="/work"
								onClick={() => setTab('work')}
							>
								<span className={tab === 'work' ? 'text-primary' : ''}>
									Work Experience
								</span>
							</Link>
							<Link
								className="px-4 py-2 border-b cursor-pointer md:px-0 md:py-0 md:inline-block hover:text-primary active:text-primary md:border-none"
								to="/blogs"
								onClick={() => setTab('blog')}
							>
								<span className={tab === 'blog' ? 'text-primary' : ''}>
									Blogs
								</span>
							</Link>
							<Link
								className="px-4 py-2 border-b cursor-pointer md:px-0 md:py-0 md:inline-block hover:text-primary active:text-primary md:border-none"
								to="/skills"
								onClick={() => setTab('skills')}
							>
								<span className={tab === 'skills' ? 'text-primary' : ' '}>
									Skills
								</span>
							</Link>
							<Link
								className="px-4 py-2 border-b cursor-pointer md:px-0 md:py-0 md:inline-block hover:text-primary md:border-none"
								to="/projects"
								onClick={() => setTab('projects')}
							>
								<span className={tab === 'projects' ? 'text-primary' : ''}>
									Projects
								</span>
							</Link>
							<Link
								className="px-4 py-2 font-normal border-b cursor-pointer md:px-0 md:py-0 md:inline-block text-secondary hover:text-primary md:border-none"
								to="/contact"
								onClick={() => setTab('contacts')}
							>
								<span className={tab === 'contacts' ? 'text-primary' : ''}>
									Contact!
								</span>
							</Link>
						</div>
					</div>
					<div className="order-2 mt-3 cursor-pointer md:hidden">
						<input className="hidden menu-btn" type="checkbox" id="menu-btn" />
						<label
							className="relative block px-2 py-4 cursor-pointer select-none menu-icon md:hidden"
							htmlFor="menu-btn"
						>
							<span
								onClick={handleToggle}
								className="relative flex items-center text-black navIcon bg-white-darkest"
							></span>
						</label>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header

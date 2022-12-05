import React from 'react'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Work from '../work/Work'
import Introduction from './introduction.jsx/Introduction'
const Home = () => {
	return (
		<div>
			<Introduction />
			<Work />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}

export default Home

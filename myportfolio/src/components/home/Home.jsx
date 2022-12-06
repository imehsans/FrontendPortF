import React from 'react'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import Introduction from './introduction.jsx/Introduction'
const Home = () => {
	return (
		<div>
			<Introduction />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}

export default Home

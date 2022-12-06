import React from 'react'
import EducationAndTraning from './EducationAndTraning'
import WorkExp from './workExp'
const Work = () => {
	return (
		<div className="py-8 md:py-16 container-flued bg-light bg-opacity-10 text-dark md:px-0">
			<div className="container px-1 py-4 mx-auto text-center md:px-0">
				<WorkExp />
				<EducationAndTraning />
			</div>
		</div>
	)
}

export default Work

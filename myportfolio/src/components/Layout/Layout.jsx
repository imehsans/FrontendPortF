import { Outlet } from 'react-router-dom'
import Footer from '../../globalCOmponents/footer/Footer'
import Header from '../../globalCOmponents/header/Header'
const Layout = () => {
	return (
		<div className="text-dark">
			<Header />
			<div className="py-8 md:py-16">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default Layout

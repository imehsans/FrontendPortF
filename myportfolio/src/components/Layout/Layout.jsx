import { Outlet } from 'react-router-dom'
import Footer from '../../globalCOmponents/footer/Footer'
import Header from '../../globalCOmponents/header/Header'
const Layout = () => {
	return (
		<div className="text-dark">
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Layout

import { Outlet } from 'react-router-dom'
import Footer from '../../globalCOmponents/footer/Footer'
import Header from '../../globalCOmponents/header/Header'
const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default Layout

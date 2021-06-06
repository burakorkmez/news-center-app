import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<>
			{/* <h1>Hello</h1> */}
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;

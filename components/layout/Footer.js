import classes from './Footer.module.css';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className={classes.footer}>
			Developed by Burak Örkmez &copy;{year}
		</footer>
	);
};

export default Footer;

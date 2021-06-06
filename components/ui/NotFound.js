import classes from './NotFound.module.css';
const NotFound = () => {
	return (
		<div className={`container ${classes.notFoundContainer}`}>
			<h1>404</h1>
			<h3>Article Not Found</h3>
		</div>
	);
};

export default NotFound;

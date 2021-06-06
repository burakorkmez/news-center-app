import classes from './Intro.module.css';
const Intro = () => {
	return (
		<section id="intro">
			<div className={classes['vid-container']}>
				<video className={classes['news-video']} autoPlay muted loop>
					<source src="/video.mov" />
				</video>
			</div>
			<div className={`container`}>
				<h1 className={`text-center mt-3 ${classes.intro__heading}`}>
					The most up to date and the most popular news
				</h1>
				<svg className={classes.arrows}>
					<path className={classes.a1} d="M0 0 L30 32 L60 0"></path>
					<path className={classes.a2} d="M0 20 L30 52 L60 20"></path>
					<path className={classes.a3} d="M0 40 L30 72 L60 40"></path>
				</svg>
			</div>
			{/* {data.data.articles.map((news) => (
				<p>{news.title}</p>
			))} */}
		</section>
	);
};

export default Intro;

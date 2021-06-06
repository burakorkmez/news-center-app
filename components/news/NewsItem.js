import classes from './NewsItem.module.css';
import Link from 'next/link';
import Image from 'next/image';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import PersonIcon from '@material-ui/icons/Person';
const NewsItem = ({
	urlToImage,
	title,
	publishedAt,
	description,
	urlToNews,
	author,
}) => {
	return (
		<>
			<div className={`${classes.card} mt-3 m-3 `}>
				<div className={classes.img_container}>
					<img src={urlToImage} />
				</div>
				<div className={classes['card-content']}>
					<h3 className="text-center  px-2">{title}</h3>
					<p className={`mt-1 mb-3 ${classes.time_and_link_wrapper}`}>
						{description}{' '}
						<Link href={urlToNews}>
							<a target="_blank" className={classes.read_more}>
								Read More
							</a>
						</Link>
					</p>
					<div className={`flex ${classes.publishedAt_and_author_wrapper}`}>
						<time className="ml-2">
							<AccessTimeIcon /> {publishedAt}
						</time>
						<p className="mr-2">
							<PersonIcon fontSize="large" /> Author:{' '}
							{author ? author : 'Unspecified'}
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default NewsItem;

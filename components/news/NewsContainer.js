import { useEffect, useState } from 'react';
import Search from '../search/Search';
import NotFound from '../ui/NotFound';
import Spinner from '../ui/Spinner';
import NewsItem from './NewsItem';
import classes from './NewsItem.module.css';

const NewsContainer = ({ news }) => {
	const [fetchedNews, setFetchedNews] = useState(news);
	const [isLoading, setIsLoading] = useState(false);

	const onReqSend = async (country, category) => {
		setIsLoading(true);
		const res = await fetch(
			`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=4a6370d146f04df7bd7a04df993ea3be`
		);
		const fetchedNews = await res.json();
		// console.log(fetchedNews);
		setFetchedNews([]); // To clean up the fetched news
		setFetchedNews(fetchedNews.articles);
		setIsLoading(false);
	};

	return (
		<section id="hero">
			<Search onFormSubmit={onReqSend} />
			{!fetchedNews.length ? (
				<>
					<NotFound />
				</>
			) : (
				<>
					{isLoading ? (
						<Spinner />
					) : (
						<div className={`container grid ${classes.card_grid}`}>
							{fetchedNews.map((eachNews) => (
								<NewsItem
									key={eachNews.source.id}
									title={eachNews.title}
									urlToImage={eachNews.urlToImage}
									publishedAt={new Date(
										eachNews.publishedAt
									).toLocaleDateString({
										year: 'numeric',
										month: 'long',
										day: 'long',
									})}
									description={eachNews.description}
									urlToNews={eachNews.url}
									author={eachNews.author}
								/>
							))}
						</div>
					)}
				</>
			)}
		</section>
	);
};

export default NewsContainer;

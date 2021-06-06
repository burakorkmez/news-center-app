import Head from 'next/head';
import Intro from '../components/intro/Intro';
import NewsContainer from '../components/news/NewsContainer';

export default function Home({ data }) {
	return (
		<>
			<Intro />
			<NewsContainer news={data.articles} />
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		'https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=4a6370d146f04df7bd7a04df993ea3be'
	);
	const data = await res.json();

	return {
		props: { data },
	};
}

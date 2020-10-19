import React, { Fragment, useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Card from '../components/Card';
import moment from 'moment';
// import Pagination from '../components/Pagination';
import { motion } from 'framer-motion';

const URL =
	'http://newsapi.org/v2/everything?q=apple&apiKey=eb34586bc74f4280bdfe03b8d55250ee&sortBy=popularity';
let row1 = [];
let row2 = [];
const today = moment().format();
const yesterday = moment().subtract(1, 'days').format();
const page = 1;
const postsInPage = 20;

function Index() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	// const [postsInPage, setPostsInPage] = useState(20);
	// const [page, setPage] = useState(1);

	// const fetchUpdate = () => {
	// 	fetch(
	// 		`${URL}&from=${yesterday}&to=${today}&pageSize=${postsInPage}&page=${page}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((res) => {
	// 			console.log(res);
	// 			handlePosts(res.articles);
	// 		})
	// 		.catch((error) => console.error(error));
	// };

	useEffect(() => {
		fetch(
			`${URL}&from=${yesterday}&to=${today}&pageSize=${postsInPage}&page=${page}`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				if (res.status === 'error') {
					setErrorMessage(res.message);
					setError(true);
				}
				handlePosts(res.articles);
			})
			.catch((err) => console.error(err));
	}, []);

	// useEffect(() => {
	// 	fetchUpdate();
	// }, [page]);

	const handlePosts = (items) => {
		for (let i = 0; i < items.length; i++) {
			if (i % 2) {
				row2.push(items[i]);
			} else {
				row1.push(items[i]);
			}
		}
		setLoading(false);
		console.log(row1, row2);
	};

	// const handleChangePage = (data) => {
	// 	console.log(data);
	// 	setPage(data);
	// };

	return (
		<Fragment>
			{loading & !error ? (
				<motion.section
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
				>
					<SkeletonTheme
						color="#e2e8f0"
						className="rounded-lg"
						highlightColor="#cbd5e0"
					>
						<Skeleton height={350} />
					</SkeletonTheme>
					<SkeletonTheme
						color="#e2e8f0"
						className="rounded-lg"
						highlightColor="#cbd5e0"
					>
						<Skeleton height={320} />
					</SkeletonTheme>
				</motion.section>
			) : !loading && !error ? (
				<Fragment>
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
					>
						<article className="row-1 col-span-1">
							{row1.map((item, index) => (
								<Card
									key={index}
									url="/noticia/"
									urlNote={item.url}
									index={index}
									image={item.urlToImage}
									source={item.source.name}
									title={item.title}
									content={item.description}
									author={item.author}
									date={item.publishedAt}
									timing={0.25}
								/>
							))}
						</article>
						<article className="row-2 col-span-1">
							{row2.map((item, index) => (
								<Card
									key={index}
									url="/noticia/"
									urlNote={item.url}
									index={index}
									image={item.urlToImage}
									source={item.source.name}
									title={item.title}
									content={item.description}
									author={item.author}
									date={item.publishedAt}
									timing={0.5}
								/>
							))}
						</article>
					</motion.section>
					{/* <Pagination
						page={page}
						handleChangePage={handleChangePage}
					/> */}
				</Fragment>
			) : (
				<h1 className="text-4xl text-center w-full text-black leading-tight font-bold">
					{errorMessage}
				</h1>
			)}
		</Fragment>
	);
}

export default Index;

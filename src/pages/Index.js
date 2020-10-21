import React, { Fragment, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import moment from 'moment';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import Card from '../components/Card';
import Pagination from '../components/Pagination';
import PerPage from '../components/PerPage';
import { Link } from 'react-router-dom';

// require('dotenv').config();

const URL = process.env.REACT_APP_API_URL;
// 'http://newsapi.org/v2/everything?q=apple&apiKey=eb34586bc74f4280bdfe03b8d55250ee&sortBy=popularity';
// TODAY DATE WITH MOMENTJS AND GIVES THE API FORMAT
const today = moment().format();
// YESTERDAY DATE WITH API FORMAT
const yesterday = moment().subtract(1, 'days').format();

function Index(props) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [postsInPage, setPostsInPage] = useState(10);

	// UPDATES THE POSTS WITHOUT ANY DELAY OF STATE UPDATE
	const fetchUpdate = (index = page, perPage = postsInPage) => {
		fetch(
			`${URL}&from=${yesterday}&to=${today}&pageSize=${perPage}&page=${index}`
		)
			.then((res) => res.json())
			.then((res) => {
				if (res.status === 'error') {
					setErrorMessage(res.message);
					setError(true);
				}
				setPosts(res.articles);
				setLoading(false);
			})
			.catch((error) => {
				setErrorMessage(error);
				setError(true);
				console.error(error);
			});
	};

	// ON MOUNT FETCH API
	// IN CASE OF EXCESS OF REQUESTS TO API RETURNS AND ERROR
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
				setPosts(res.articles);
				setLoading(false);
				// handlePosts(res.articles);
			})
			.catch((err) => console.error(err));
	}, [page, postsInPage]);

	// HANDLES DE PAGINATION EVENT AND UPDATES THE STATES FOR LATER USE
	const handleChangePage = (data) => {
		console.log(data);
		setPage(data);
		setLoading(true);
		setPosts([]);
		fetchUpdate(data);
	};

	// HANDLES THE NUMBER OF POSTS PER PAGE
	// FOR NOW IT EMPTIES THE OLD POSTS AND STORES NEW ONES
	const handleChangePosts = (e) => {
		console.log(e.target.value);
		const thePosts = parseInt(e.target.value);
		setPostsInPage(thePosts);
		setLoading(true);
		setPosts([]);
		fetchUpdate(page, thePosts);
	};

	return (
		<Fragment>
			{loading & !error ? (
				// LOADING ANIMATION
				<motion.section
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 50 }}
					className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-6"
				>
					<Link to="/noticia/prueba">
						<SkeletonTheme
							color="#e2e8f0"
							className="rounded-xl"
							highlightColor="#cbd5e0"
						>
							<Skeleton height={350} />
						</SkeletonTheme>
					</Link>
					<Link to="/noticia/prueba">
						<SkeletonTheme
							color="#e2e8f0"
							className="rounded-xl"
							highlightColor="#cbd5e0"
						>
							<Skeleton height={300} />
						</SkeletonTheme>
					</Link>
				</motion.section>
			) : !loading && !error ? (
				<Fragment>
					{/* THE POSTS IN THE PAGE */}
					<motion.section
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="w-full"
					>
						{/* HANDLES THE PER PAGE POSTS SELECT */}
						<PerPage
							items={postsInPage}
							handleSelect={handleChangePosts}
						/>
						{/* MASONRY TYPE OF GRID */}
						<ResponsiveMasonry
							columnsCountBreakPoints={{ 320: 1, 750: 2 }}
						>
							<Masonry>
								{/* RENDER OF EVERY POST CARD */}
								{posts.map((item, index) => (
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
							</Masonry>
						</ResponsiveMasonry>
						{/* PAGINATION COMPONENT */}
					</motion.section>
				</Fragment>
			) : (
				// IN CASE OF API ERROR
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					// exit={{ opacity: 0 }}
					key={props.location.key + 'C'}
					className="text-4xl text-center w-full text-black leading-tight font-bold"
				>
					{errorMessage}
				</motion.h1>
			)}
			<Pagination page={page} handleChangePage={handleChangePage} />
		</Fragment>
	);
}

export default Index;

import { AnimatePresence } from 'framer-motion';
import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Card from '../components/Card';

const URL =
	'http://newsapi.org/v2/everything?q=apple&from=2020-10-18&to=2020-10-18&sortBy=popularity&apiKey=d6736e08a3ac4859aeda69469b97d4cc';
let row1 = [];
let row2 = [];

function Index() {
	// const [posts, setPost] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [postsInPage, setPostsInPage] = useState(10);
	// const [pagination, setPagination] = useState(1);

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				// setPost(res.articles);
				handlePosts(res.articles);
				// setLoading(false);
			})
			.catch((error) => console.error(error));
	}, []);

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

	return (
		<Fragment>
			{/* CARD ITEM */}
			{loading ? (
				// <p className="w-full text-center text-xl m-0 py-96 block">
				// 	Cargando...
				// </p>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
					<SkeletonTheme
						color="#000000"
						className="rounded-lg"
						highlightColor="#464646"
					>
						<Skeleton height={350} />
					</SkeletonTheme>
					<SkeletonTheme
						color="#000000"
						className="rounded-lg"
						highlightColor="#464646"
					>
						<Skeleton height={320} />
					</SkeletonTheme>
				</div>
			) : (
				<AnimatePresence>
					<div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="row-1 col-span-1">
							{row1.map((item, index) => (
								<Card
									url="/detalle/12345"
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
						</div>
						<div className="row-2 col-span-1">
							{row2.map((item, index) => (
								<Card
									url="/detalle/12345"
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
						</div>
					</div>
				</AnimatePresence>
			)}
		</Fragment>
	);
}

export default Index;

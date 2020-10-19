import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Card({
	index,
	title,
	image,
	author,
	date,
	content,
	source,
	url,
	timing
}) {
	const myTiming =
		timing === 0.25
			? index === 0
				? timing
				: (index + 2) * timing
			: index === 0
			? timing
			: (index + 1) * timing;
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 50
			}}
			animate={{
				opacity: 1,
				y: 0
			}}
			exit={{ opacity: 0, y: 50 }}
			transition={{ delay: myTiming }}
		>
			<motion.Link
				key={index}
				to={url}
				whileHover={{ scale: 1.025 }}
				className="mb-6 cursor-pointer w-full bg-white transition duration-200 shadow-none hover:shadow-2xl rounded-lg card-item overflow-hidden flex flex-col hover:z-10"
			>
				<img
					className="ci-image h-48 w-full object-cover m-0"
					src={image}
					alt="Card"
				/>
				<div className="ci-content p-4 flex-col">
					<div className="pill w-full my-3">
						<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium leading-5 bg-black text-white font-base">
							{source}
						</span>
					</div>
					<h4 className="title text-base leading-tight font-bold">
						{title}
					</h4>
					<p className="text text-sm leading-tight text-gray-700 mt-1">
						{content}
					</p>
					<div className="ci-c-autor-data flex items-center justify-start mt-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10 text-gray-500 fill-current"
							viewBox="0 0 24 24"
						>
							<path d="M12,2C6.579,2,2,6.579,2,12s4.579,10,10,10s10-4.579,10-10S17.421,2,12,2z M12,7c1.727,0,3,1.272,3,3s-1.273,3-3,3	c-1.726,0-3-1.272-3-3S10.274,7,12,7z M6.894,16.772c0.897-1.32,2.393-2.2,4.106-2.2h2c1.714,0,3.209,0.88,4.106,2.2	C15.828,18.14,14.015,19,12,19S8.172,18.14,6.894,16.772z" />
						</svg>
						<div className="ci-c-ad-texts flex flex-col ml-2 text-gray-500">
							<p className="m-0 text-xs leading-tight font-bold">
								{author}
							</p>
							<p className="m-0 text-xs leading-tight font-bold">
								{date}
							</p>
						</div>
					</div>
				</div>
			</motion.Link>
		</motion.div>
	);
}

export default Card;

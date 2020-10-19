import React, { useContext, useEffect } from 'react';
import { NewsContext } from '../globalState';
import { motion } from 'framer-motion';

function Detail(props) {
	const { news } = useContext(NewsContext);

	useEffect(() => {
		alert('test');
		// if (news.title === null) {
		// 	setTimeout(function () {
		// 		window.location.href = '/';
		// 	}, 4000);
		// }
	}, []);

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="news-section container mx-auto mt-10"
		>
			{news.title !== null ? (
				<article className="title"></article>
			) : (
				<h2 className="text-2xl w-full text-center font-bold">
					Se te va a redireccionar a home ya que se está usando el API
					en versión gratuita
				</h2>
			)}
		</motion.section>
	);
}

export default Detail;

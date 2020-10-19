import React, { useContext, useEffect, useState } from 'react';
import { NewsContext } from '../globalState';
import { motion } from 'framer-motion';
import moment from 'moment';

function Detail() {
	const { news } = useContext(NewsContext);
	const [loading, setLoading] = useState(true);
	const [title, setTitle] = useState(news.title);
	const [image, setImage] = useState(news.image);
	const [urlNote, setUrlNote] = useState(news.urlNote);
	const [content, setContent] = useState(news.content);
	const [author, setAuthor] = useState(news.author);
	const [date, setDate] = useState(news.date);
	const [source, setSource] = useState(news.source);

	const handleFill = () => {
		setTitle(getContent('title'));
		setImage(getContent('image'));
		setUrlNote(getContent('urlNote'));
		setContent(getContent('content'));
		setAuthor(getContent('author'));
		setDate(getContent('date'));
		setSource(getContent('source'));
		setLoading(false);
	};

	useEffect(() => {
		if (title === null && localStorage.getItem('title') === null) {
			setTimeout(function () {
				window.location.href = '/';
			}, 4000);
		} else {
			handleFill();
		}
	});

	const getContent = (name) => {
		return localStorage.getItem(name);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="news-section w-full flex"
		>
			{!loading ? (
				<motion.section
					initial={{ opacity: 0, y: 100 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 100 }}
					className="article-content w-full"
				>
					<article className="">
						<header className="w-full h-44 h-56 overflow-hidden rounded-lg relative">
							<img
								className="absolute left-0 top-0 h-full w-full object-cover"
								// src="https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=95&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-10%2F9bb85400-0f24-11eb-9ff6-15f915240ed1&client=amp-blogside-v2&signature=02fcea5ae3e514da343523b7d7523f6d8f48a028"
								src={image}
								alt="titulo imagen"
							/>
						</header>
						<h2 className="w-full text-center text-4xl font-bold mt-4">
							{title}
						</h2>
						<div className="flex items-center justify-center my-6">
							<span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium leading-4 bg-black text-white">
								{source}
							</span>
						</div>
						<h3 className="w-full text-center text-sm mt-1 text-gray-500 flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 fill-current mr-2"
								viewBox="0 0 24 24"
							>
								<path d="M12,2C6.579,2,2,6.579,2,12s4.579,10,10,10s10-4.579,10-10S17.421,2,12,2z M12,7c1.727,0,3,1.272,3,3s-1.273,3-3,3	c-1.726,0-3-1.272-3-3S10.274,7,12,7z M6.894,16.772c0.897-1.32,2.393-2.2,4.106-2.2h2c1.714,0,3.209,0.88,4.106,2.2	C15.828,18.14,14.015,19,12,19S8.172,18.14,6.894,16.772z" />
							</svg>
							{author}
							<span className="ml-2">
								{moment(date).format('DD/MM/YYYY')}
							</span>
						</h3>
						<div className="announce px-0 md:px-48">
							<span className="text-xs block w-full text-center text-gray-500 my-10 bg-gray-300 rounded-lg py-4">
								Se está usando la versión gratuita del API por
								lo que el acceso al contenido detalle de la
								noticia es limitado
								<a
									href={urlNote}
									target="_blank"
									className="block text-indigo-500"
									rel="noopener noreferrer"
								>
									Para acceder al artículo original sigue esta
									url
								</a>
							</span>
						</div>
						<div
							className="actual-content text-gray-700 px-6"
							dangerouslySetInnerHTML={{
								__html: content
							}}
						></div>
					</article>
				</motion.section>
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

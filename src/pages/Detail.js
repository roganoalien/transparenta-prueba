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
		// GETS DATA FROM LOCALSTORAGE FOR PERSISTANT OR FROM THE CONTEXT API [NEWS CONTEXT]
		const data = JSON.parse(localStorage.getItem('newsData')) || news;
		setTitle(data.title);
		setImage(data.image);
		setUrlNote(data.urlNote);
		setContent(data.content);
		setAuthor(data.author);
		setDate(data.date);
		setSource(data.source);
		setLoading(false);
	};

	useEffect(() => {
		// IF THERE'S NO NOTE STORED IT RESTRICT THE DATA AND REDIRECTS TO INDEX
		if (title === null && localStorage.getItem('newsData') === null) {
			setTimeout(function () {
				window.location.href = '/';
			}, 4000);
		} else {
			// IF DATA EXISTS THEN PROCEEDS TO FILL
			handleFill();
		}
	});

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="news-section w-full flex"
		>
			{!loading && title !== null ? (
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
							<span className="text-xs block w-full text-center text-gray-600 my-10 bg-gray-300 rounded-lg py-4 px-6 flex flex-col items-center justify-center">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									className="bi bi-alert-circle-fill fill-current h-6 w-6"
									viewBox="0 0 20 20"
								>
									<path
										fill-rule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8.998 3a1 1 0 112 0 1 1 0 01-2 0zM10 6a.905.905 0 00-.9.995l.35 3.507a.553.553 0 001.1 0l.35-3.507A.905.905 0 0010 6z"
										clip-rule="evenodd"
									/>
								</svg>
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
				// IN CASO OF NO DATA GIVES MESSAGE AND WAITS FOR REDIRECT
				<h2 className="text-2xl w-full text-center font-bold">
					Se te va a redireccionar a home ya que se está usando el API
					en versión gratuita
				</h2>
			)}
		</motion.section>
	);
}

export default Detail;

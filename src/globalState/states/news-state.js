import React, { useState, createContext } from 'react';

export const NewsContext = createContext();

export function NewsProvider({ children }) {
	const [news, setNews] = useState({
		image: null,
		title: null,
		url: null,
		content: null,
		// role: null,
		author: null,
		source: null,
		date: null
	});

	const removeNews = () => {
		setNews({
			image: null,
			title: null,
			url: null,
			content: null,
			// role: null,
			author: null,
			source: null,
			date: null
		});
	};

	return (
		<NewsContext.Provider value={{ news, setNews, removeNews }}>
			{children}
		</NewsContext.Provider>
	);
}

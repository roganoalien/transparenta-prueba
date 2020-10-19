import React from 'react';
import LayoutMenu from './LayoutMenu';

function Layout({ children }) {
	return (
		<section className="container mx-auto flex flex-col items-center justify-center px-6 mt-10">
			<article className="w-full md:w-10/12 lg:w-8/12 main-header full-size bg-black p-6 rounded-lg flex items-center justify-start shadow-2xl">
				<img
					src="https://www.apple.com/ac/globalnav/6/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__cxwwnrj0urau_large.svg"
					alt="Apple Logo"
					className="h-20 object-contain mx-6"
				/>
				<div className="titles-holder w-full pl-6">
					<h1 className="text-3xl tracking-tight leading-10 font-extrabold text-white sm:text-4xl sm:leading-none md:text-5xl">
						Noticias de <span className="text-white">Apple</span>
					</h1>
					<h2 className="mt-0 md:mt-2 text-sm sm:text-md md:text-lg font-base text-white">
						Todas las noticias de hoy y el día anterior
					</h2>
				</div>
			</article>
			<main className="w-full md:w-10/12 flex flex-wrap">
				<LayoutMenu />
				{children}
			</main>
			<footer className="container mx-auto px-6 mt-10 mb-6 text-center">
				<p className="text-base w-full text-gray-600">
					Desarrollo por{' '}
					<a
						href="https://rodrigogarcia.com.mx"
						className="text-indigo-500 font-bold"
						target="_blank"
						rel="noopener noreferrer"
					>
						Rodrigo García
					</a>{' '}
					para{' '}
					<a
						href="https://transparenta.mx"
						className="text-indigo-500 font-bold"
						target="_blank"
						rel="noopener noreferrer"
					>
						Transparenta.mx
					</a>
				</p>
			</footer>
		</section>
	);
}

export default Layout;

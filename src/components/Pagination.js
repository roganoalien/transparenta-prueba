import React from 'react';

function Pagination({ page, handleChangePage }) {
	const allPages = 4;
	const buttonsPage = [];
	// INSETS INSIDE ARRAY ALL BUTTONS NEEDED FOR THE PAGINATION (FASTER LOOP IN JS)
	for (let i = 0; i < allPages; i++) {
		const number = i + 1;
		buttonsPage.push(
			<button
				key={i}
				className={`-mt-px border-t-2 border-transparent pt-4 px-4 inline-flex items-center text-sm leading-5 font-medium focus:outline-none transition ease-in-out duration-150 ${
					page === number
						? 'text-black font-bold border-black focus:text-black focus:border-black'
						: 'text-gray-500 hover:text-gray-700'
				}`}
				onClick={() =>
					page !== number ? handleChangePage(number) : null
				}
			>
				{number}
			</button>
		);
	}

	return (
		// MANUAL STATE OF PAGINATION TO PREVENT HAVING LOTS OF PAGES CAUSE API GIVE MORE THAN A 1,000 ARTICLES ON RESPONSE
		// FOR NOW JUST 4 PAGES
		<section className="w-full pagination border-t border-gray-400 px-4 flex items-center justify-between sm:px-0 mt-6">
			<article className="w-0 flex-1 flex">
				<button
					className={`-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-700 transition ease-in-out duration-150 ${
						page === 1
							? 'opacity-50 pointer-events-none'
							: 'pointer-events-auto'
					}`}
					onClick={() => {
						if (page > 1) {
							handleChangePage(page - 1);
						}
					}}
				>
					<svg
						className="mr-3 h-5 w-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
							clipRule="evenodd"
						/>
					</svg>
					Anterior
				</button>
			</article>
			<article className="hidden md:flex">{buttonsPage}</article>
			<article className="w-0 flex-1 flex justify-end">
				<button
					className={`-mt-px border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none focus:text-gray-700 focus:border-gray-700 transition ease-in-out duration-150 ${
						page === 4
							? 'opacity-50 pointer-events-none'
							: 'pointer-events-auto'
					}`}
					onClick={() => {
						if (page < 4) {
							handleChangePage(page + 1);
						}
					}}
				>
					Siguiente
					<svg
						className="ml-3 h-5 w-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</button>
			</article>
		</section>
	);
}

export default Pagination;

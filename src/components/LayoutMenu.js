import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

function LayoutMenu() {
	return (
		<Fragment>
			<div className="block w-full mt-8 mb-5">
				<div className="border-b border-gray-400">
					<nav className="-mb-px flex">
						<NavLink
							exact
							to="/"
							className="w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-black hover:border-black focus:outline-none"
							activeClassName="border-black font-bold text-gray-900"
						>
							Inicio
						</NavLink>
						<NavLink
							to="/noticia"
							className="pointer-events-none w-1/4 py-4 px-1 text-center border-b-2 border-transparent font-medium text-sm leading-5 text-gray-500 hover:text-black hover:border-black focus:outline-none"
							activeClassName="border-black font-bold text-gray-900"
						>
							Noticia
						</NavLink>
					</nav>
				</div>
			</div>
		</Fragment>
	);
}

export default LayoutMenu;

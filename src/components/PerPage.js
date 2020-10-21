import React from 'react';
import { motion } from 'framer-motion';

function PerPage({ items, handleSelect }) {
	return (
		<motion.div
			key="ADKGJIJ#$!RT()J"
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			className="w-full flex items-center justify-end text-center sm:text-right mb-5 px-6"
		>
			<div className="w-full sm:w-5/12 lg:w-3/12 flex flex-col sm:flex-row items-center justify-center md:justify-end">
				<label
					htmlFor="perPage"
					className="block text-sm leading-5 font-medium text-gray-500 w-full mr-2 mt-1"
				>
					Posts por página
				</label>
				<select
					onChange={handleSelect}
					id="perPage"
					className="w-full sm:w-auto mt-1 form-select block pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 opacity-50"
				>
					<option
						value="10"
						defaultChecked={items === 10 ? true : false}
					>
						10
					</option>
					<option
						value="16"
						defaultChecked={items === 16 ? true : false}
					>
						16
					</option>
					<option
						value="20"
						defaultChecked={items === 20 ? true : false}
					>
						20
					</option>
				</select>
			</div>
		</motion.div>
	);
}

export default PerPage;

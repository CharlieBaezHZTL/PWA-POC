import React from 'react';
import { data } from '../data/data.js';
import { GrTransaction } from 'react-icons/gr';
import TransactionItem from './TransactionItem.jsx';

const RecentActivety = () => {
	return (
		<div className='w-full col-span-1 relative lg:h-[70vh] md:h-[50vh] m-auto p-4 border rounded-lg bg-white md:overflow-scroll'>
			<h1>Recent Activety</h1>
			<ul>
				{data.map((order, id) => (
					<li
						key={id}
						// className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer'
					>
						<TransactionItem short {...order} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default RecentActivety;

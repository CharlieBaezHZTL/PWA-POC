import React from 'react';
import { data } from '../data/data.js';
import TransactionItem from '@/components/TransactionItem.jsx';

const TransactionsWrapper = () => {
	return (
		<div className='bg-gray-100 min-h-screen'>
			<div className='p-4'>
				<div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
					<div className='my-3 p-2 grid md:grid-cols-4 grid-cols-2 items-center justify-between cursor-pointer'>
						<span>Transactions</span>
						<span className='md:text-left text-right'>Status</span>
						<span className='hidden md:grid'>Date</span>
						<span className='hidden md:grid'>Method</span>
					</div>
					<ul>
						{data.map((order, id) => {
							return (
								<li key={id}>
									<TransactionItem {...order} />
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default TransactionsWrapper;

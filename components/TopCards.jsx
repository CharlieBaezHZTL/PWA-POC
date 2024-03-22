import React from 'react';

const TopCards = () => {
	return (
		<div className='grid lg:grid-cols-5 gap-4 p-4'>
			<div className='col-span-2 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>$143,500</p>
					<p className='text-gray-600'>My Balance</p>
				</div>
				<p className='bg-blue-200 flex justify-center w-20 items-center p-2 rounded-lg'>
					<span className='text-blue-700 text-sm'>Available</span>
				</p>
			</div>
			<div className='col-span-2 lg:col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>+$12,750</p>
					<p className='text-gray-600'>Monthly Income</p>
				</div>
				<p className='bg-green-200 flex justify-center w-20 items-center p-2 rounded-lg'>
					<span className='text-green-700 text-sm'>+10%</span>
				</p>
			</div>
			<div className='col-span-2 lg:col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>$22,000</p>
					<p className='text-gray-600'>Savings</p>
				</div>
				<p className='bg-yellow-200 flex justify-center w-20 items-center p-2 rounded-lg'>
					<span className='text-yellow-700 text-sm'>No change</span>
				</p>
			</div>
			<div className='col-span-2 lg:col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
				<div className='flex flex-col w-full pb-4'>
					<p className='text-2xl font-bold'>$6,00</p>
					<p className='text-gray-600'>Expenses</p>
				</div>
				<p className='bg-orange-200 flex justify-center w-20 items-center p-2 rounded-lg'>
					<span className='text-orange-700 text-sm'>+2%</span>
				</p>
			</div>
		</div>
	);
};

export default TopCards;

import React, { useState } from 'react';
import { RxChevronDown, RxChevronUp, RxDotsVertical } from 'react-icons/rx';
import { GrTransaction } from 'react-icons/gr';

function TransactionItem({ id, transaction, total, status, method, date, short }) {
	const [showMore, setShowMore] = useState(false);
	return (
		<div className='bg-gray-50 hover:bg-gray-100 my-3 p-2 rounded-lg cursor-pointer'>
			<div
				id={id}
				className={`grid ${
					!short ? 'md:grid-cols-4' : ''
				} grid-cols-2 items-center justify-between`}
			>
				<div className='flex'>
					<div className='bg-teal-100 p-3 rounded-lg'>
						<GrTransaction size={20} className='text-teal-800' />
					</div>
					<div className={!short ? 'pl-4' : 'pl-4 flex grow shrink-0 items-center'}>
						<p className='text-gray-800 text-sm lg:text-base font-bold'>
							${total.toLocaleString()}
						</p>
						<p
							className={`text-gray-800 text-sm lg:text-base md:block ${
								short ? 'hidden pl-4 ' : ''
							}}`}
						>
							{transaction}
						</p>
					</div>
				</div>
				{!short ? (
					<p className='text-gray-600 md:text-left text-right'>
						<span
							className={
								status == 'Processing'
									? 'bg-green-200 p-2 rounded-lg'
									: status == 'Completed'
									? 'bg-blue-200 p-2 rounded-lg'
									: 'bg-yellow-200 p-2 rounded-lg'
							}
						>
							{status}
						</span>
					</p>
				) : null}
				<p
					className={
						!short
							? 'text-sm hidden md:flex'
							: ' text-xs self-start sm:self-center sm:text-sm text-right md:bg-gray-50 md:pl-4 md:w-max md:ml-auto'
					}
				>
					{date}
				</p>
				{!short ? (
					<div className='md:flex hidden justify-between items-center'>
						<p>{method}</p>
						<RxDotsVertical />
					</div>
				) : null}
			</div>
			<div className='w-full relative block md:hidden'>
				<div
					className={`flex ${
						short ? 'flex-col gap-1' : 'gap-5'
					} relative text-sm w-full transition-all pb-2 overflow-hidden`}
					style={{ maxHeight: `${showMore ? '100vh' : '0'}` }}
				>
					{short ? (
						<div className='flex flex-col py-1 px-3'>
							<h3 className='font-bold'>Transaction</h3>
							<p>{transaction}</p>
						</div>
					) : null}
					<div className='flex flex-col py-1 px-3'>
						<h3 className='font-bold'>Date</h3>
						<p>{date}</p>
					</div>
					<div className='flex flex-col py-1 px-3'>
						<h3 className='font-bold'>Method</h3>
						<p>{method}</p>
					</div>
				</div>
				<button
					className='absolute block text-center -translate-x-1/2 left-1/2 -bottom-1 px-4 rounded-lg hover:bg-teal-200'
					onClick={() => setShowMore(!showMore)}
				>
					{!showMore ? <RxChevronDown className='mx-auto' /> : <RxChevronUp className='mx-auto' />}
				</button>
			</div>
		</div>
	);
}

export default TransactionItem;

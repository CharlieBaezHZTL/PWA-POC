/* eslint-disable @next/next/link-passhref */
import React, { createContext, useState, useEffect } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { RxSquare, RxArrowUp, RxClock, RxDashboard, RxCross2 } from 'react-icons/rx';
import { FiSettings } from 'react-icons/fi';
import { useRouter } from 'next/router';

export const SidebarContext = createContext({
	isOpen: false,
	setIsOpen: () => {},
});

const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	useEffect(() => {
		setIsOpen(false);
	}, [router]);

	return (
		<div className='flex'>
			<SidebarContext.Provider value={{ isOpen, setIsOpen }}>
				<div
					style={{ left: `${isOpen ? '0' : '-100%'}` }}
					className='fixed transition-all md:!left-0 w-20 h-screen p-4 bg-white border-r-[1px] flex flex-col justify-between z-20'
				>
					<button
						className='absolute md:hidden block left-full top-0 bg-white hover:bg-teal-200 cursor-pointer my-4 p-3 rounded-lg'
						onClick={() => setIsOpen(false)}
					>
						<RxCross2 size={20} />
					</button>
					<div className='flex flex-col items-center'>
						<Link href='/'>
							<div className='bg-teal-800 text-white p-3 rounded-lg inline-block relative'>
								<RxSquare size={20} />
								<RxArrowUp
									size={16}
									className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
								/>
							</div>
						</Link>
						<span className='border-b-[1px] border-gray-200 w-full p-2'></span>
						<Link href='/'>
							<div className='bg-gray-100 hover:bg-teal-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
								<RxDashboard size={20} />
							</div>
						</Link>
						<Link href='/transactions'>
							<div className='bg-gray-100 hover:bg-teal-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
								<RxClock size={20} />
							</div>
						</Link>
						<Link href='/'>
							<div className='bg-gray-100 hover:bg-teal-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
								<FiSettings size={20} />
							</div>
						</Link>
					</div>
				</div>
				<main className='md:ml-20 w-full'>{children}</main>
			</SidebarContext.Provider>
		</div>
	);
};

export default Sidebar;

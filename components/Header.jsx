/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/router';
import { SidebarContext } from './Sidebar';

const Header = () => {
	const [pageTitle, setPageTitle] = useState('');
	const { setIsOpen } = useContext(SidebarContext);
	const router = useRouter();

	useEffect(() => {
		setPageTitle(router.asPath.split('/')[1]);
	}, [router]);

	return (
		<div className='flex md:justify-between gap-4 px-4 pt-4 w-full'>
			<button className='block md:hidden' onClick={() => setIsOpen(true)}>
				<RxHamburgerMenu size={20} />
			</button>
			<h2 className='text-lg'>
				{pageTitle?.charAt(0).toUpperCase() + pageTitle.slice(1) || 'Dashboard'}
			</h2>
			<h2 className='text-lg justify-self-end ml-auto'>Welcome Back, Rodger</h2>
		</div>
	);
};

export default Header;

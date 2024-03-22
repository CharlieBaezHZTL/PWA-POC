import Head from 'next/head';
import Header from '../components/Header';
import TopCards from '../components/TopCards';
import BarChart from '../components/BarChart';
import RecentActivety from '../components/RecentActivety';

export default function Home() {
	return (
		<>
			<Head>
				<title>Square Up - Dashboard</title>
			</Head>
			<main className='bg-gray-100 min-h-screen'>
				<Header />
				<TopCards />
				<div className='p-4 grid lg:grid-cols-3 grid-cols-1 gap-4'>
					<RecentActivety />
					<BarChart />
				</div>
			</main>
		</>
	);
}

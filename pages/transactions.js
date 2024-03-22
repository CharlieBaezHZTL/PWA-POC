import Head from 'next/head';
import TransactionsWrapper from '@/components/TransactionsWrapper';
import Header from '@/components/Header';

export default function Transactions() {
	return (
		<>
			<Head>
				<title>Square Up - Transactions</title>
			</Head>
			<main className='bg-gray-100 min-h-screen'>
				<Header />
				<TransactionsWrapper />
			</main>
		</>
	);
}

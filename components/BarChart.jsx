import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
	const [chartData, setChartData] = useState({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState({});

	useEffect(() => {
		setChartData({
			labels: ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'],
			datasets: [
				{
					label: 'Expenses $',
					data: [1201, 2290, 1798, 1182, 1782, 1475],
					borderColor: 'rgb(53, 162, 235)',
					backgroundColor: 'rgba(17, 94, 89, .5)',
				},
			],
		});
		setChartOptions({
			plugins: {
				legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: '6 Month Report',
				},
			},
			maintainAspectRatio: false,
			responsive: true,
		});
	}, []);

	return (
		<>
			<div className='w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white'>
				<Bar data={chartData} options={chartOptions} />
			</div>
		</>
	);
};

export default BarChart;

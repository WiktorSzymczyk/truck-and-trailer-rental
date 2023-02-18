import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='bg-[#222]'>
			{/* <div className='flex flex-row w-full h-[7vh]'>
				<h2 className='justify-center items-center space-x-8 text-white pr-[10%]'>
					.Trucks
				</h2>
				<ul className='flex justify-end items-center space-x-8 text-white'>
					<li>Home</li>
					<li>Products</li>
					<li>Contact Us</li>
				</ul>
			</div> */}
			<div className='flex bg-[#222] w-full h-[7vh] text-white items-center md:px-[20%] px-[15%]'>
				<h1 className='flex justify-start w-full font-semibold'>.Trucks</h1>
				<ul className='flex justify-end w-full space-x-8'>
					<Link
						className='font-semibold'
						to='/'
					>
						Home
					</Link>
					<Link to='/products'>Products</Link>
					<Link
						className='truncate'
						to='/contact'
					>
						Contact Us
					</Link>
				</ul>
			</div>
		</div>
	);
}

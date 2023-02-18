import React from 'react';
import Navbar from '../Navbar/Navbar';
import vid from '../../media/truck.mp4';
import HeroSelection from './HeroSelection';

export default function Home() {
	return (
		// <div className='mix-blend-multiply'>
		// 	<Navbar />
		// 	<header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
		// 		<video
		// 			autoPlay
		// 			loop
		// 			muted
		// 		>
		// 			<HeroSelection />
		// 			<source
		// 				src={vid}
		// 				type='video/mp4'
		// 			></source>
		// 		</video>
		// 	</header>

		<header className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
			<HeroSelection />
			<video
				autoPlay
				loop
				muted
				className='absolute z-10 w-auto min-w-full min-h-full max-w-none'
			>
				<source
					src={vid}
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
		</header>
		// </div>
	);
}

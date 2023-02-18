import React, { useState } from 'react';

export default function HeroSelection() {
	const [tractor, setTractor] = useState(true);

	return (
		<div className='relative z-30 p-5  text-white bg-[#353535] rounded-xl border-2 border-[#ffae00]'>
			<div className='flex flex-col'>
				<div className='flex flex-row gap-x-4'>
					{tractor ? (
						<h1
							onClick={() => setTractor(!tractor)}
							className='font-semibold text-lg'
						>
							Tractor Units
						</h1>
					) : (
						<h1
							onClick={() => setTractor(!tractor)}
							className='font-normal text-lg'
						>
							Tractor Units
						</h1>
					)}
					{tractor ? (
						<h1
							onClick={() => setTractor(!tractor)}
							className='font-normal text-lg'
						>
							Trailer Units
						</h1>
					) : (
						<h1
							onClick={() => setTractor(!tractor)}
							className='font-semibold text-lg'
						>
							Trailer Units
						</h1>
					)}
				</div>
				<h2 className='py-1'>Search Options</h2>
				{tractor ? (
					<div className='text-[#222] flex flex-col'>
						<select
							id='type'
							className='mt-3 p-1 rounded-sm border-2 border-[#ffae00]'
						>
							<option selected>Type (any)</option>
							<option value='Tractor'>Tractor Units</option>
							<option value='Rigids'>Rigids</option>
							<option value='Tippers'>Tippers</option>
							<option value='Crane'>Crane Trucks</option>
						</select>
						<select
							id='make'
							className='mt-3 p-1 rounded-sm border-2 border-[#ffae00]'
						>
							<option selected>Make (any)</option>
							<option value='Scania'>Scania</option>
							<option value='Volvo'>Volvo</option>
							<option value='DAF'>DAF</option>
							<option value='Iveco'>Iveco</option>
							<option value='Mercedes-Benz'>Mercedes-Benz</option>
							<option value='Renault'>Renault</option>
							<option value='MAN'>MAN</option>
							<option value='Other'>Other</option>
						</select>
						<button className='text-white font-semibold mt-5 py-1 border-2 border-[#ffae00]'>
							Search
						</button>
					</div>
				) : (
					<div className='text-[#222] flex flex-col'>
						<select
							id='type'
							className='mt-3 p-1 rounded-sm border-2 border-[#ffae00]'
						>
							<option selected>Type (any)</option>
						</select>
						<select
							id='make'
							className='mt-3 p-1 rounded-sm border-2 border-[#ffae00]'
						>
							<option selected>Make (any)</option>
						</select>
						<button className='text-white font-semibold mt-5 py-1 border-2 border-[#ffae00]' onClick={() => location.href=`http://localhost:3000/products`}>
							Search
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

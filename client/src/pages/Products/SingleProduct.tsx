import React from 'react';

export default function SingleProduct(props: { temp: any }) {
	return (
		<div className='grid grid-cols-2'>
			<div className='flex justify-end'>
				<div>
					<select>
						<option>dsadsa</option>
						<option>dsadsa</option>
						<option>dsadsa</option>
						<option>dsadsa</option> 
					</select>
				</div>
				<div>
					<div className='flex justify-end'>
						<img
							src={props.temp}
							className='h-[25%] w-[25%]'
						/>
					</div>
				</div>
			</div>
			<div className='flex justify-start pl-5 pt-2'>
				<h1>Scania R450 HighLine</h1>
			</div>
		</div>
	);
}

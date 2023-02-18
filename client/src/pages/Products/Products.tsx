import React from 'react';
import SingleProduct from './SingleProduct';
import temp from '../../media/scania.jpg';

export default function Products() {
	return (
		<div className='pt-10'>
			<SingleProduct temp={temp} />
		</div>
	);
}

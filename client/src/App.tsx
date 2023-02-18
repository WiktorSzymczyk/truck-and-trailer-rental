import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products/Products';

function App() {
	return (
		<div className='App'>
			<Navbar />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/products'
					element={<Products />}
				/>
				{/* <Route
					path='/products/:make/model/:id'
					element={<Products />}
				/> */}
				<Route
					path='/products/:make/model'
					element={<Products />}
				/>
			</Routes>
		</div>
	);
}

export default App;

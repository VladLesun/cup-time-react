import { Navigate, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Delivery from './Delivery';
import Products from './Products';
import Promo from './Promo';

const Main = () => {
	return (
		<main className='main'>
			<Routes>
				<Route path='/' element={<Navigate to='/products?category=tea' />} />
				<Route
					path='/products'
					element={
						<>
							<Promo />
							<Products />
						</>
					}
				/>
				<Route
					path='/cart'
					element={
						<>
							<Cart />
							<Delivery />
						</>
					}
				/>
			</Routes>
		</main>
	);
};

export default Main;

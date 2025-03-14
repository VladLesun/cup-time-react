import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';

const Header = () => {
	const location = useLocation();
	const { categories } = useProducts();
	const { cart } = useCart();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const getActiveClass = category => {
		const currentCategory = new URLSearchParams(location.search).get(
			'category'
		);

		return currentCategory === category ? 'header__menu-link_active' : '';
	};

	const handleOpenMenu = () => {
		setIsMenuOpen(true);
	};

	const handleCloseMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className='header'>
			<div className='container header__container'>
				<Link to='/' className='header__logo-link'>
					<img
						src='image/logo.svg'
						alt='Логотип Cup Time'
						className='header__logo'
					/>
				</Link>

				<nav
					className={`header__nav ${isMenuOpen ? 'header__nav_active' : ''}`}
				>
					<ul className='header__menu'>
						{Object.entries(categories).map(([key, value]) => (
							<li key={key} className='header__menu-item'>
								<Link
									to={`/products?category=${key}`}
									className={`header__menu-link ${getActiveClass(key)}`}
									onClick={handleCloseMenu}
								>
									{value}
								</Link>
							</li>
						))}
					</ul>

					<button
						className='header__close-btn'
						aria-label='Закрыть меню'
						onClick={handleCloseMenu}
					>
						<svg
							width='28'
							height='28'
							viewBox='0 0 28 28'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='7.28174'
								y='7.07532'
								width='20'
								height='1'
								transform='rotate(45 7.28174 7.07532)'
							/>
							<rect
								x='6.5752'
								y='21.2173'
								width='20'
								height='1'
								transform='rotate(-45 6.5752 21.2173)'
							/>
						</svg>
					</button>
				</nav>

				<div className='header__control'>
					<Link to='cart' className='header__cart-link'>
						{cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : 0}
					</Link>
					<button
						className='header__burger'
						aria-label='Открыть меню'
						onClick={handleOpenMenu}
					>
						<svg
							width='28'
							height='29'
							viewBox='0 0 28 29'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect x='4' y='9.5' width='20' height='1' />
							<rect x='4' y='14.5' width='20' height='1' />
							<rect x='4' y='19.5' width='20' height='1' />
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;

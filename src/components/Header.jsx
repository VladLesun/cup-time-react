import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';

const Header = () => {
	const location = useLocation();
	const { categories } = useProducts();
	const { cart } = useCart();

	const getActiveClass = category => {
		const currentCategory = new URLSearchParams(location.search).get(
			'category'
		);

		return currentCategory === category ? 'header__menu-link_active' : '';
	};

	const totalQuantity = cart
		? cart.reduce((acc, item) => item.quantity + acc, 0)
		: 0;

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

				<nav className='header__nav'>
					<ul className='header__menu'>
						{Object.entries(categories).map(([key, value]) => (
							<li key={key} className='header__menu-item'>
								<Link
									to={`/products?category=${key}`}
									className={`header__menu-link ${getActiveClass(key)}`}
								>
									{value}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link to='cart' className='header__cart-link'>
					{totalQuantity}
				</Link>
			</div>
		</header>
	);
};

export default Header;

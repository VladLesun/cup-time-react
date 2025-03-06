import { Link, useLocation } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';

const Header = () => {
	const location = useLocation();
	const { categories } = useProducts();

	const getActiveClass = category => {
		const currentCategory = new URLSearchParams(location.search).get(
			'category'
		);

		return currentCategory === category ? 'header__menu-link_active' : '';
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
					6
				</Link>
			</div>
		</header>
	);
};

export default Header;

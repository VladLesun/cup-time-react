import { Link } from 'react-router-dom';

const Promo = () => {
	return (
		<section className='promo'>
			<div className='container'>
				<div className='promo__container'>
					<h1 className='promo__title'>Попробуй новый вкус Арабики</h1>
					<Link
						to='/products?category=coffee'
						className='promo__link btn white-btn'
					>
						Перейти к кофе
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Promo;

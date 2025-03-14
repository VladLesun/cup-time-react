import { Link, useSearchParams } from 'react-router-dom';

const Promo = () => {
	const [searchParams] = useSearchParams();
	const category = searchParams.get('category');

	return (
		<section className='promo'>
			<div className='container'>
				<div className='promo__container'>
					<h1 className='promo__title'>Попробуй новый вкус Арабики</h1>

					{category !== 'coffee' ? (
						<Link
							to='/products?category=coffee'
							className='promo__link btn white-btn'
						>
							Перейти к кофе
						</Link>
					) : null}
				</div>
			</div>
		</section>
	);
};

export default Promo;

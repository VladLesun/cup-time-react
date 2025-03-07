import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import Product from './Product';
import SkeletonLoader from './SkeletonLoader';

const Products = () => {
	const [searchParams] = useSearchParams();
	const { products, setCategory, categories } = useProducts();
	const category = searchParams.get('category');

	const categoryTitle = categories[category] || 'Товары';

	useEffect(() => {
		setCategory(category);
	}, [category, setCategory]);

	return (
		<section className='products'>
			<div className='container'>
				<h2 className='products__title purple-title'>{categoryTitle}</h2>
				<ul className='products__list'>
					{products.length ? (
						products.map(product => <Product key={product.id} data={product} />)
					) : (
						<SkeletonLoader />
					)}
				</ul>
			</div>
		</section>
	);
};

export default Products;

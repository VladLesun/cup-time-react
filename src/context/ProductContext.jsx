import { createContext, useContext, useEffect, useState } from 'react';
import { API_URL } from '../api/api';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [category, setCategory] = useState('');

	const categories = {
		tea: 'Чай',
		coffee: 'Кофе',
		teapots: 'Чайники',
		cezves: 'Турки',
		other: 'Прочее',
	};

	useEffect(() => {
		fetch(`${API_URL}/api/products/${category}`)
			.then(response => {
				if (!response.ok) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then(data => setProducts(data))
			.catch(error => console.warn(error));
	}, [category]);
	return (
		<ProductContext.Provider value={{ products, setCategory, categories }}>
			{children}
		</ProductContext.Provider>
	);
};

export const useProducts = () => useContext(ProductContext);

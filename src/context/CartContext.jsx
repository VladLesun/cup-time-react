import { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(null);

	useEffect(() => {
		const storeCart = JSON.parse(localStorage.getItem('cart') || '[]');

		setCart(storeCart);
	}, []);

	useEffect(() => {
		if (Array.isArray(cart)) localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	const addToCart = (product, quantity) => {
		const newCart = [...cart];

		const itemIndex = newCart.findIndex(item => item.id === product.id);

		if (itemIndex >= 0) {
			newCart[itemIndex].quantity += quantity;
		} else {
			newCart.push({ ...product, quantity });
		}

		setCart(newCart);
	};

	const updateQuantity = (productId, quantity) => {
		if (quantity <= 0) {
			removerQuantity(productId);
		} else {
			setCart(
				cart.map(item => (item.id === productId ? { ...item, quantity } : item))
			);
		}
	};

	const removerQuantity = productId => {
		setCart(cart.filter(item => item.id !== productId));
	};

	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				updateQuantity,
				removerQuantity,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);

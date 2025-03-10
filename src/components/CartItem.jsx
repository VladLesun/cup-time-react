import { useState } from 'react';
import { API_URL } from '../api/api';
import { useCart } from '../context/CartContext';

const CartItem = ({ data }) => {
	const [itemQuantity, setItemQuantity] = useState(data.quantity);
	const { updateQuantity } = useCart();

	const handleDecrease = () => {
		const newQuantity = itemQuantity - 1;
		setItemQuantity(newQuantity);
		updateQuantity(data.id, newQuantity);
	};
	const handleIncrease = () => {
		const newQuantity = itemQuantity + 1;
		setItemQuantity(newQuantity);
		updateQuantity(data.id, newQuantity);
	};

	return (
		<li className='cart-item'>
			<article className='cart-item__article'>
				<img
					src={`${API_URL}${data.img}`}
					alt={data.title}
					className='cart-item__image'
				/>
				<div className='cart-item__info'>
					<h3 className='cart-item__title'>{data.title}</h3>
					<div className='cart-item__quantity quantity'>
						<button
							className='cart-item__quantity-button quantity-button cart-item__quantity-button_minus quantity-button_minus'
							onClick={handleDecrease}
						></button>
						<input
							className='cart-item__quantity-input quantity-input'
							type='number'
							value={data.quantity}
							readOnly
						/>
						<button
							className='cart-item__quantity-button quantity-button cart-item__quantity-button_plus quantity-button_plus'
							onClick={handleIncrease}
						></button>
					</div>
					<p className='cart-item__price'>
						{data.price * data.quantity}&nbsp;₽
					</p>
				</div>
			</article>
		</li>
	);
};

export default CartItem;

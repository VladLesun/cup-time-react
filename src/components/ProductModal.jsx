import { useState } from 'react';
import Modal from 'react-modal';
import { API_URL } from '../api/api';
import { useCart } from '../context/CartContext';

Modal.setAppElement('#root');

const ProductModal = ({ isOpen, onRequestClose, data }) => {
	const [quantity, setQuantity] = useState(1);
	const { addToCart } = useCart();

	if (!data) null;

	const handleDecrease = () => {
		const newQuantity = quantity - 1;
		if (quantity > 1) setQuantity(newQuantity);
	};
	const handleIncrease = () => {
		const newQuantity = quantity + 1;
		setQuantity(newQuantity);
	};
	const handleAddToCart = () => {
		addToCart(data, quantity);
		onRequestClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			className='modal'
			overlayClassName='modal__overlay'
			contentLabel='Product Modal'
		>
			<img
				className='modal__img'
				src={`${API_URL}${data.img}`}
				alt={data.title}
			/>
			<div className='modal__desc'>
				<h2 className='modal__title'>{data.title}</h2>
				<p className='modal__price'>{data.price}&nbsp;₽</p>
			</div>
			<ul className='modal__products'>
				{Object.entries(data.additional).map(([key, value]) => (
					<li className='modal__product' key={key}>
						<h3 className='modal__product-title'>{key}</h3>
						<p className='modal__product-desc'>{value}</p>
					</li>
				))}
			</ul>
			<div className='modal__add'>
				<div className='modal__quantity quantity'>
					<button
						className='modal__quantity-button quantity-button modal__quantity-button_minus quantity-button_minus'
						onClick={handleDecrease}
						disabled={quantity === 1}
					></button>
					<input
						className='modal__quantity-input quantity-input'
						type='number'
						value={quantity}
						readOnly
					/>
					<button
						className='modal__quantity-button quantity-button  modal__quantity-button_plus quantity-button_plus'
						onClick={handleIncrease}
					></button>
				</div>
				<button
					className='modal__add-btn btn purple-btn'
					onClick={handleAddToCart}
				>
					Добавить
				</button>
			</div>
			<button className='modal__close' onClick={onRequestClose}>
				<svg
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='currentColor'
					xmlns='http://www.w3.org/2000/svg'
				>
					<rect
						x='5.71228'
						y='14.1975'
						width='12'
						height='1.5'
						transform='rotate(-45 5.71228 14.1975)'
					/>
					<rect
						x='14.1976'
						y='15.2582'
						width='12'
						height='1.5'
						transform='rotate(-135 14.1976 15.2582)'
					/>
				</svg>
			</button>
		</Modal>
	);
};

export default ProductModal;

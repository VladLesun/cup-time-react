import { useState } from 'react';
import Modal from 'react-modal';
import { API_URL } from '../api/api';
import { useCart } from '../context/CartContext';
import { useDelivery } from '../context/DeliveryContext';
import CartItem from './CartItem';
import SkeletonLoader from './SkeletonLoader';

Modal.setAppElement('#root');

const Cart = () => {
	const [deliveryStatus, setDeliveryStatus] = useState(null);
	const [deliveryId, setDeliveryId] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const { cart, clearCart } = useCart();
	const { deliveryDetails, clearDeliveryDetails } = useDelivery();

	const handleSubmit = async () => {
		const deliveryData = {
			...deliveryDetails,
			items: cart.map(item => ({ id: item.id, quantity: item.quantity })),
		};

		try {
			const response = await fetch(`${API_URL}/api/orders`, {
				method: 'POST',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify(deliveryData),
			});

			if (!response.ok) {
				throw new Error('Ошибка при отправке заказа');
			}

			const result = await response.json();
			setDeliveryStatus('success');
			setDeliveryId(result.order.id);
			clearCart();
			clearDeliveryDetails();
		} catch (error) {
			setDeliveryStatus('error');
			console.warn(`Ошибка: ${error}`);
		} finally {
			setModalIsOpen(true);
		}
	};

	const closeModal = () => {
		setModalIsOpen(false);
	};

	return (
		<section className='cart'>
			<div className='container cart__container'>
				<h2 className='cart__title purple-title'>
					Корзина (
					{cart ? cart.reduce((acc, item) => item.quantity + acc, 0) : 0})
				</h2>
				<ul
					className={
						cart
							? cart.length !== 0
								? 'cart__items'
								: 'cart__items cart__items_empty'
							: ''
					}
				>
					{cart ? (
						cart.length !== 0 ? (
							cart.map(item => <CartItem key={item.id} data={item} />)
						) : (
							<p>В корзине пока пусто...</p>
						)
					) : (
						<SkeletonLoader />
					)}
				</ul>
				<div className='cart__summary'>
					<h3 className='cart__summary-title'>Итого:</h3>
					<p className='cart__total'>
						{cart
							? cart.reduce((acc, item) => item.quantity * item.price + acc, 0)
							: 0}
						&nbsp;₽
					</p>
					<button className='cart__order btn purple-btn' onClick={handleSubmit}>
						Заказать
					</button>
				</div>
			</div>

			<Modal
				className='modal-cart'
				overlayClassName='modal-cart__overlay'
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Cart Modal'
			>
				<h2 className='modal-cart__title'>
					{deliveryStatus === 'success'
						? `Заказ успешно отправлен! Номер вашего заказа: ${deliveryId}`
						: 'Произошла ошибка при отправке... Попробуйте позже...'}
				</h2>
				<button className='modal-cart__close' onClick={closeModal}>
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
		</section>
	);
};

export default Cart;

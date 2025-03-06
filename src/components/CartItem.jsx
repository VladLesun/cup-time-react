const CartItem = ({ data }) => {
	return (
		<li className='cart-item'>
			<article className='cart-item__article'>
				<img src={data.image} alt={data.title} className='cart-item__image' />
				<div className='cart-item__info'>
					<h3 className='cart-item__title'>{data.title}</h3>
					<div className='cart-item__quantity quantity'>
						<button className='cart-item__quantity-button quantity-button cart-item__quantity-button_minus quantity-button_minus'></button>
						<input
							className='cart-item__quantity-input quantity-input'
							type='number'
							value={1}
						/>
						<button className='cart-item__quantity-button quantity-button cart-item__quantity-button_plus quantity-button_plus'></button>
					</div>
					<p className='cart-item__price'>{data.price}&nbsp;₽</p>
				</div>
			</article>
		</li>
	);
};

export default CartItem;

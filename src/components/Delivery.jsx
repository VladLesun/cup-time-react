const Delivery = () => {
	return (
		<section className='delivery'>
			<div className='container delivery__container'>
				<h2 className='delivery__title purple-title'>Доставка</h2>

				<form className='delivery__form'>
					<input
						className='delivery__input'
						type='text'
						name='name'
						placeholder='Имя'
					/>
					<input
						className='delivery__input'
						type='tel'
						name='phone'
						placeholder='Телефон'
					/>
					<input
						className='delivery__input delivery__input_address'
						type='text'
						name='address'
						placeholder='Адрес'
					/>

					<fieldset className='delivery__payment'>
						<legend className='delivery__payment-title'>Оплата:</legend>
						<label className='delivery__payment-label'>
							<input
								className='delivery__radio'
								type='radio'
								name='payment'
								value='card'
							/>
							Картой
						</label>
						<label className='delivery__payment-label'>
							<input
								className='delivery__radio'
								type='radio'
								name='payment'
								value='cash'
								defaultChecked
							/>
							Наличные
						</label>
					</fieldset>
				</form>
			</div>
		</section>
	);
};

export default Delivery;

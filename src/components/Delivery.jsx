import { useDelivery } from '../context/DeliveryContext';

const Delivery = () => {
	const { deliveryDetails, updateDeliveryDetails } = useDelivery();

	const handleChange = e => {
		const { name, value } = e.target;
		updateDeliveryDetails(name, value);
	};

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
						value={deliveryDetails.name}
						onChange={handleChange}
					/>
					<input
						className='delivery__input'
						type='tel'
						name='phone'
						placeholder='Телефон'
						value={deliveryDetails.phone}
						onChange={handleChange}
					/>
					<input
						className='delivery__input delivery__input_address'
						type='text'
						name='address'
						placeholder='Адрес'
						value={deliveryDetails.address}
						onChange={handleChange}
					/>

					<fieldset className='delivery__payment'>
						<legend className='delivery__payment-title'>Оплата:</legend>
						<label className='delivery__payment-label radio'>
							<input
								className='delivery__radio radio__input'
								type='radio'
								name='payment'
								value='card'
								onChange={handleChange}
								checked={deliveryDetails.payment === 'card'}
							/>
							Картой
						</label>
						<label className='delivery__payment-label radio'>
							<input
								className='delivery__radio radio__input'
								type='radio'
								name='payment'
								value='cash'
								onChange={handleChange}
								checked={deliveryDetails.payment === 'cash'}
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

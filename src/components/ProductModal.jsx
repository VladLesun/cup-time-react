import Modal from 'react-modal';
import { API_URL } from '../api/api';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		padding: '0px',
		borderRadius: '6px',
		border: 'none',
	},
};

Modal.setAppElement('#root');

const ProductModal = ({ isOpen, onRequestClose, data }) => {
	if (!data) null;

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={customStyles}
			contentLabel='Product Modal'
		>
			<div className='modal'>
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
						<button className='modal__quantity-button quantity-button modal__quantity-button_minus quantity-button_minus'></button>
						<input
							className='modal__quantity-input quantity-input'
							type='number'
							value={1}
						/>
						<button className='modal__quantity-button quantity-button  modal__quantity-button_plus quantity-button_plus'></button>
					</div>
					<button className='modal__add-btn btn purple-btn'>Добавить</button>
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
			</div>
		</Modal>
	);
};

export default ProductModal;

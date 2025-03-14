import { createContext, useContext, useState } from 'react';

const DeliveryContext = createContext();

export const DeliveryProvider = ({ children }) => {
	const [deliveryDetails, setDeliveryDetails] = useState({
		name: '',
		phone: '',
		address: '',
		payment: 'cash',
	});

	const updateDeliveryDetails = (key, value) => {
		setDeliveryDetails(prevDetails => ({
			...prevDetails,
			[key]: value,
		}));
	};

	const clearDeliveryDetails = () => {
		setDeliveryDetails({
			name: '',
			phone: '',
			address: '',
			payment: 'cash',
		});
	};

	return (
		<DeliveryContext.Provider
			value={{ deliveryDetails, updateDeliveryDetails, clearDeliveryDetails }}
		>
			{children}
		</DeliveryContext.Provider>
	);
};

export const useDelivery = () => useContext(DeliveryContext);

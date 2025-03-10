import 'normalize.css';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
	<ProductProvider>
		<CartProvider>
			<App />
		</CartProvider>
	</ProductProvider>
);

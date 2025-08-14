import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routers';
import '@/styles/index.scss';
import Layout from './components/layout';
import ModalProvider from './context/useModalContext';
import { Provider } from 'react-redux';
import { store } from "@/redux/store";

export default function APP() {
	return (
		<Router>
			<Provider store={store}>
				<ModalProvider>
					<Layout>
						<AppRoutes />
					</Layout>
				</ModalProvider>
			</Provider>
		</Router>
	);
}

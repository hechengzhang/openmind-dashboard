import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routers';
import '@/styles/index.scss';
import Layout from './components/layout';
import GlobalProvider from './context/useGlobalContext';
import { Provider } from 'react-redux';
import { store } from "@/redux/store";

export default function APP() {
	return (
		<Router>
			<Provider store={store}>
				<GlobalProvider>
					<Layout>
						<AppRoutes />
					</Layout>
				</GlobalProvider>
			</Provider>
		</Router>
	);
}

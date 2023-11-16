import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SplashScreen from './components/SplashScreen.jsx';
import App from './App.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <SplashScreen />
	},
	{
		path: '/map',
		element: <App />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

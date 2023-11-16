import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { renderToStaticMarkup } from 'react-dom/server';
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Card from './Card';

import { useEffect, useState } from 'react';

import { fetchConcurrentAreas } from '../lib/utils';
import MuseumIcon from '../icons/MuseumIcon';
import ConcurrentArea from './ConcurrentArea';

const Map = () => {
	const [userLocation, setUserLocation] = useState(null);
	const [museums, setMuseums] = useState([]);
	const [concurrentAreas, setConcurrentAreas] = useState([]);

	const iconMarkup = renderToStaticMarkup(
		<div className='h-6 w-6 bg-white border-none'>
			<MuseumIcon />
		</div> // TODO: fix this customizable marker
	);

	const customMarkerIcon = divIcon({
		html: iconMarkup
	});

	const fetchMuseumData = async () => {
		try {
			const data = await fetch('http://localhost:3001/api/museums');
			const dataJSON = await data.json();

			setMuseums(dataJSON);
		} catch (err) {
			console.error(err);
		}
	};

	function getUserLocation() {
		const userLocationStorage = localStorage.getItem('userLocation');

		if (userLocationStorage) {
			setUserLocation(JSON.parse(userLocationStorage));
			return;
		}

		if (navigator.geolocation) {
			// The Geolocation API is supported
			navigator.geolocation.getCurrentPosition(
				function (position) {
					// Successfully obtained the user's location
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					setUserLocation([latitude, longitude]);

					localStorage.setItem(
						'userLocation',
						JSON.stringify([latitude, longitude])
					);

					console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
				},
				function (error) {
					// Handle errors, such as the user denying permission
					console.error(`Error getting location: ${error.message}`);
				}
			);
		} else {
			setUserLocation([41.3851, 2.1734]);
			// Geolocation is not supported by the browser
			console.error('Geolocation is not supported by your browser');
		}
	}

	useEffect(() => {
		getUserLocation();

		const fetchedConcurrentAreas = fetchConcurrentAreas();

		setConcurrentAreas(fetchedConcurrentAreas);

		fetchMuseumData();
	}, []);

	return userLocation === null ? (
		<div className='w-screen h-screen flex items-center justify-center flex-col gap-2 bg-gray-200'>
			<p className='font-bold text-2xl'></p>
			<div className='flex items-center justify-center w-16 h-16'>
				<div role='status'>
					<svg
						aria-hidden='true'
						className='w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600'
						viewBox='0 0 100 101'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
							fill='currentColor'
						/>
						<path
							d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
							fill='currentFill'
						/>
					</svg>
					<span className='sr-only'>Loading...</span>
				</div>
			</div>
		</div>
	) : (
		<MapContainer center={userLocation} zoom={14} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker position={userLocation}>
				<Popup>
					<p className='font-medium'>You&apos;re here!</p>
				</Popup>
			</Marker>
			{museums.length > 0 &&
				museums.map((museum) => {
					return (
						<Marker
							key={museum._id}
							position={[museum.latitude, museum.longitude]}
							icon={customMarkerIcon}
						>
							<Popup>
								<Card
									name={museum.name}
									description={museum.equipment_type}
									type={museum.use_type}
									x={museum.latitude}
									y={museum.longitude}
								/>
							</Popup>
						</Marker>
					);
				})}
			{concurrentAreas.length > 0 &&
				concurrentAreas.map((area) => {
					return (
						<ConcurrentArea key={area.dn + area.polygon[0][0]} area={area} />
					);
				})}
		</MapContainer>
	);
};

export default Map;

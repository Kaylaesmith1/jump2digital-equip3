import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useState } from 'react';

import { getUserLocation } from '../lib/utils';
import Loader from './Loader';
import Museums from './Museums';
import ConcurrentAreas from './ConcurrentAreas';

const Map = () => {
	const [userLocation, setUserLocation] = useState(null);

	useEffect(() => {
		getUserLocation(setUserLocation);
	}, []);

	return userLocation === null ? (
		<Loader />
	) : (
		<MapContainer center={userLocation} zoom={14} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Museums />
			<Marker position={userLocation}>
				<Popup>
					<p className='font-medium'>You&apos;re here!</p>
				</Popup>
			</Marker>
			<ConcurrentAreas />
		</MapContainer>
	);
};

export default Map;

import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useState } from 'react';

import { getUserLocation } from '../lib/utils';
import ConcurrentArea from './ConcurrentArea';
import Loader from './Loader';
import Museums from './Museums';
import { fetchConcurrentAreas } from '../lib/data';

const Map = () => {
	const [userLocation, setUserLocation] = useState(null);
	const [concurrentAreas, setConcurrentAreas] = useState([]);

	useEffect(() => {
		getUserLocation(setUserLocation);

		// const fetchedConcurrentAreas = fetchConcurrentAreas();

		// setConcurrentAreas(fetchedConcurrentAreas);

		fetchConcurrentAreas(setConcurrentAreas);
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
			{concurrentAreas.length > 0 &&
				concurrentAreas.map((area) => {
					return (
						<ConcurrentArea
							key={area.dn + area.coordinates[0][0]}
							area={area}
						/>
					);
				})}
		</MapContainer>
	);
};

export default Map;

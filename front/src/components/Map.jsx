import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { renderToStaticMarkup } from 'react-dom/server';
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Card from './Card';

import { useEffect, useState } from 'react';

import { fetchConcurrentAreas, getUserLocation } from '../lib/utils';
import MuseumIcon from '../icons/MuseumIcon';
import ConcurrentArea from './ConcurrentArea';
import Loader from './Loader';
import { fetchMuseums } from '../lib/data';

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

	useEffect(() => {
		getUserLocation(setUserLocation);

		const fetchedConcurrentAreas = fetchConcurrentAreas();

		setConcurrentAreas(fetchedConcurrentAreas);

		// fetchConcurrentAreas(setConcurrentAreas);

		fetchMuseums(setMuseums);
	}, []);

	return userLocation === null ? (
		<Loader />
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

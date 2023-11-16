import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { renderToStaticMarkup } from 'react-dom/server';
import { Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { useEffect, useState } from 'react';

import { fetchMuseumData } from '../lib/utils';
import MuseumIcon from '../icons/MuseumIcon';

const Map = () => {
	const [museums, setMuseums] = useState([]);

	const iconMarkup = renderToStaticMarkup(
		<div className='h-6 w-6 bg-white border-none'>
			<MuseumIcon />
		</div> // TODO: fix this customizable marker
	);

	const customMarkerIcon = divIcon({
		html: iconMarkup
	});

	useEffect(() => {
		const fetchedMuseums = fetchMuseumData();

		setMuseums(fetchedMuseums);
	}, []);

	return (
		<MapContainer center={[41.3851, 2.1734]} zoom={14} scrollWheelZoom={false}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			{museums.length > 0 &&
				museums.map((museum) => {
					return (
						<Marker
							key={museum.id}
							position={[museum.latitud, museum.longitud]}
							icon={customMarkerIcon}
						>
							<Popup>
								A pretty CSS3 popup. <br /> Easily customizable.
							</Popup>
						</Marker>
					);
				})}
			{/* <Marker position={[51.505, -0.09]} icon={customMarkerIcon}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker> */}
		</MapContainer>
	);
};

export default Map;

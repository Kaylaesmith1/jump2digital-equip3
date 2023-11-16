import React, { useEffect, useState } from 'react';
import { fetchMuseums } from '../lib/data';

import Card from './Card';
import MuseumIcon from '../icons/MuseumIcon';
import { renderToStaticMarkup } from 'react-dom/server';

import { divIcon } from 'leaflet';
import { Marker, Popup } from 'react-leaflet';

const Museums = React.memo(() => {
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
		fetchMuseums(setMuseums);
	}, []);

	return (
		<>
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
		</>
	);
});

Museums.displayName = 'Museums';

export default Museums;

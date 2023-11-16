import { Polygon } from 'react-leaflet';

export default function ConcurrentArea({ area }) {
	const pathOptions = {
		color: 'red',
		stroke: true,
		weight: 0.01,
		fillOpacity: 0.333
	};

	return <Polygon pathOptions={pathOptions} positions={area.coordinates} />;
}

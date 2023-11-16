import { Polygon } from 'react-leaflet';

export default function ConcurrentArea({ area }) {
	const pathOptions = {
		color: 'red',
		stroke: true,
		weight: 1
	};

	return <Polygon pathOptions={pathOptions} positions={area.polygon} />;
}

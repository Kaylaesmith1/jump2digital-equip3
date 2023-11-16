import { Polygon } from 'react-leaflet';

export default function ConcurrentArea({ area }) {
	console.log({ area });

	const pathOptions = {
		color: 'red',
		stroke: true,
		weight: 1
	};

	return <Polygon pathOptions={pathOptions} positions={area.coordinates} />;
}

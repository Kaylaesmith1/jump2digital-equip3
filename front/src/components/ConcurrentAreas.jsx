import { useEffect, useState } from 'react';
import { fetchConcurrentAreas } from '../lib/data';
import ConcurrentArea from './ConcurrentArea';

export default function ConcurrentAreas() {
	const [concurrentAreas, setConcurrentAreas] = useState([]);

	useEffect(() => {
		fetchConcurrentAreas(setConcurrentAreas);
	}, []);
	return (
		<>
			{concurrentAreas.length > 0 &&
				concurrentAreas.map((area) => {
					return (
						<ConcurrentArea
							key={area.dn + area.coordinates[0][0]}
							area={area}
						/>
					);
				})}
		</>
	);
}

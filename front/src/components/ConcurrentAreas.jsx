import { useEffect, useState } from 'react';
import { fetchConcurrentAreas, fetchConcurrentAreasPage } from '../lib/data';
import ConcurrentArea from './ConcurrentArea';

export default function ConcurrentAreas() {
	const [concurrentAreas, setConcurrentAreas] = useState([]);

	useEffect(() => {
		// fetchConcurrentAreas(setConcurrentAreas);
		const fetchPagesSequentially = async () => {
			for (let i = 1; i < 10; i++) {
				if (i === 1) {
					await fetchConcurrentAreasPage(i, 1000, setConcurrentAreas);
				} else {
					await new Promise((resolve) => setTimeout(resolve, 100));
					await fetchConcurrentAreasPage(i, 2000, setConcurrentAreas);
				}
			}
		};

		fetchPagesSequentially();
	}, []);

	return (
		<>
			{concurrentAreas.length > 0 &&
				concurrentAreas.map((area, i) => {
					return <ConcurrentArea key={i} area={area} />;
				})}
		</>
	);
}

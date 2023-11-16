export const fetchMuseums = async (setMuseums) => {
	try {
		const data = await fetch('http://localhost:3001/api/museums');
		const dataJSON = await data.json();

		setMuseums(dataJSON);
	} catch (err) {
		console.error(err);
	}
};

export const fetchConcurrentAreas = async (setConcurrentAreas) => {
	try {
		const data = await fetch('http://localhost:3001/api/zones');
		const dataJSON = await data.json();

		console.log({ dataJSON });

		setConcurrentAreas(dataJSON);
	} catch (err) {
		console.error(err);
	}
};

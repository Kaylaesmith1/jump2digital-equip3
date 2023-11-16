export const getUserLocation = (setUserLocation) => {
	const userLocationStorage = localStorage.getItem('userLocation');

	if (userLocationStorage) {
		setUserLocation(JSON.parse(userLocationStorage));
		return;
	}

	if (navigator.geolocation) {
		// The Geolocation API is supported
		navigator.geolocation.getCurrentPosition(
			function (position) {
				// Successfully obtained the user's location
				const latitude = position.coords.latitude;
				const longitude = position.coords.longitude;

				setUserLocation([latitude, longitude]);

				localStorage.setItem(
					'userLocation',
					JSON.stringify([latitude, longitude])
				);

				return;
			},
			function (error) {
				// Handle errors, such as the user denying permission
				console.error(`Error getting location: ${error.message}`);
			}
		);
	} else {
		// Geolocation is not supported by the browser
		console.error('Geolocation is not supported by your browser');
	}
	setUserLocation([41.3851, 2.1734]);
};

export const convertCoordinateToString = (coordinate) => {
	// Convert decimal degrees to degrees, minutes, and seconds
	const degrees = Math.floor(coordinate);
	const minutes = Math.floor((coordinate - degrees) * 60);
	const seconds = ((coordinate - degrees - minutes / 60) * 3600).toFixed(1);

	// Construct the string representation with special characters
	const result = `${degrees}°${minutes}'${seconds}"`;

	return result;
};

export const createGoogleMapsURL = (latitude, longitude) => {
	// Convert latitude and longitude to the required format for the URL
	const latString = convertCoordinateToString(latitude);
	const lngString = convertCoordinateToString(longitude);

	// Construct the Google Maps URL
	const googleMapsURL = `https://www.google.com/maps/place/${latString}+${lngString}`;

	return googleMapsURL;
};

export const typeColorCard = (type) => {
	let value = '';
	switch (type) {
		case "Centres d'exposicions":
			value =
				'bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300';
			break;

		case 'Centres patrimonials':
			value =
				'bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300';
			break;

		default:
			value =
				'bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300';
			break;
	}
	return value;
};

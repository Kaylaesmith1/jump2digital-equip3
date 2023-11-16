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

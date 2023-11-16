const mockDensityData = [
	{
		coordinates: [
			[41.3851, 2.1734],
			[41.3879, 2.1699],
			[41.3859, 2.1762],
			[41.3839, 2.1792]
		],
		dn: 16
	},
	{
		coordinates: [
			[41.3964, 2.1944],
			[41.3948, 2.1926],
			[41.3973, 2.1978]
		],
		dn: 17
	},
	{
		coordinates: [
			[41.4036, 2.1884],
			[41.4048, 2.1852],
			[41.4023, 2.1871]
		],
		dn: 18
	},
	{
		coordinates: [
			[41.4101, 2.1665],
			[41.4119, 2.1638],
			[41.4098, 2.1693]
		],
		dn: 19
	},
	{
		coordinates: [
			[41.4215, 2.1785],
			[41.4202, 2.1761],
			[41.4227, 2.1808]
		],
		dn: 20
	},
	{
		coordinates: [
			[41.4332, 2.1798],
			[41.4346, 2.1775],
			[41.4323, 2.1824]
		],
		dn: 21
	},
	{
		coordinates: [
			[41.4418, 2.2135],
			[41.4397, 2.2101],
			[41.4423, 2.2162]
		],
		dn: 22
	},
	{
		coordinates: [
			[41.4574, 2.2048],
			[41.4559, 2.2014],
			[41.4588, 2.2081],
			[41.4474, 2.2148],
			[41.4489, 2.1984],
			[41.4399, 2.223]
		],
		dn: 23
	},
	{
		coordinates: [
			[41.4669, 2.1235],
			[41.4684, 2.1211],
			[41.4662, 2.1262]
		],
		dn: 24
	},
	{
		coordinates: [
			[41.4774, 2.123],
			[41.4759, 2.1205],
			[41.4788, 2.1268]
		],
		dn: 25
	},
	{
		coordinates: [
			[41.4893, 2.1219],
			[41.4878, 2.1195],
			[41.4907, 2.1258]
		],
		dn: 26
	},
	{
		coordinates: [
			[41.4987, 2.0711],
			[41.4972, 2.0687],
			[41.5001, 2.075]
		],
		dn: 27
	},
	{
		coordinates: [
			[41.5089, 2.0864],
			[41.5074, 2.084],
			[41.5103, 2.0903]
		],
		dn: 28
	},
	{
		coordinates: [
			[41.5169, 2.1081],
			[41.5154, 2.1057],
			[41.5183, 2.112]
		],
		dn: 29
	},
	{
		coordinates: [
			[41.5256, 2.1412],
			[41.5241, 2.1388],
			[41.527, 2.1451]
		],
		dn: 30
	}
];

export const fetchConcurrentAreas = () => mockDensityData;

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

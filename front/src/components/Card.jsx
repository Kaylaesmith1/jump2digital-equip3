function createGoogleMapsURL(latitude, longitude) {
	// Convert latitude and longitude to the required format for the URL
	const latString = convertCoordinateToString(latitude);
	const lngString = convertCoordinateToString(longitude);

	// Construct the Google Maps URL
	const googleMapsURL = `https://www.google.com/maps/place/${latString}+${lngString}`;

	return googleMapsURL;
}

function convertCoordinateToString(coordinate) {
	// Convert decimal degrees to degrees, minutes, and seconds
	const degrees = Math.floor(coordinate);
	const minutes = Math.floor((coordinate - degrees) * 60);
	const seconds = ((coordinate - degrees - minutes / 60) * 3600).toFixed(1);

	// Construct the string representation with special characters
	const result = `${degrees}°${minutes}'${seconds}"`;

	return result;
}

const Card = ({ name, type, description, x, y }) => {
	const typeColor = (type) => {
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

	return (
		<div className='flex flex-col'>
			<div className='flex items-center gap-2'>
				<h1 className='text-xl font-bold'>{name}</h1>
				<span className={typeColor(type)}>{type}</span>
			</div>
			<p className='my-2'>{description}</p>
			<a
				href={createGoogleMapsURL(x, y)}
				rel='noreferrer'
				target='_blank'
				className='text-center'
			>
				Go to this citysight
			</a>
		</div>
	);
};

export default Card;

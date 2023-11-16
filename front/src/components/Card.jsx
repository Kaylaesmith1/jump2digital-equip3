import { createGoogleMapsURL, typeColorCard } from '../lib/utils';

const Card = ({ name, type, description, x, y }) => {
	return (
		<div className='flex flex-col'>
			<div className='flex items-center gap-2'>
				<h1 className='text-xl font-bold'>{name}</h1>
				<span className={typeColorCard(type)}>{type}</span>
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

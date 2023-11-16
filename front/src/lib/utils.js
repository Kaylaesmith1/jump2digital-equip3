const mockMuseumData = [
	{
		latitud: 41.3784,
		longitud: 2.1925,
		id: 0,
		nom: "Museu d'Art Contemporani de Barcelona",
		ambit: 'Art',
		tipus_us: 'Públic',
		tipus_equipament: 'Museu'
	},
	{
		latitud: 41.3851,
		longitud: 2.1734,
		id: 1,
		nom: "Museu Nacional d'Art de Catalunya",
		ambit: 'Art',
		tipus_us: 'Públic',
		tipus_equipament: 'Museu'
	},
	{
		latitud: 41.3879,
		longitud: 2.1699,
		id: 2,
		nom: 'Museu Picasso',
		ambit: 'Art',
		tipus_us: 'Públic',
		tipus_equipament: 'Museu'
	},
	{
		latitud: 41.375,
		longitud: 2.1444,
		id: 3,
		nom: 'CosmoCaixa Barcelona',
		ambit: 'Science',
		tipus_us: 'Públic',
		tipus_equipament: 'Museu'
	},
	{
		latitud: 41.3987,
		longitud: 2.1905,
		id: 4,
		nom: 'Fundació Joan Miró',
		ambit: 'Art',
		tipus_us: 'Públic',
		tipus_equipament: 'Museu'
	}
];

export const fetchMuseumData = () => mockMuseumData;

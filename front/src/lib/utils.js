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

const mockDensityData = [
	{
		polygon: [
			[41.3851, 2.1734],
			[41.3879, 2.1699],
			[41.3859, 2.1762],
			[41.3839, 2.1792]
		],
		dn: 16
	},
	{
		polygon: [
			[41.3964, 2.1944],
			[41.3948, 2.1926],
			[41.3973, 2.1978]
		],
		dn: 17
	},
	{
		polygon: [
			[41.4036, 2.1884],
			[41.4048, 2.1852],
			[41.4023, 2.1871]
		],
		dn: 18
	},
	{
		polygon: [
			[41.4101, 2.1665],
			[41.4119, 2.1638],
			[41.4098, 2.1693]
		],
		dn: 19
	},
	{
		polygon: [
			[41.4215, 2.1785],
			[41.4202, 2.1761],
			[41.4227, 2.1808]
		],
		dn: 20
	},
	{
		polygon: [
			[41.4332, 2.1798],
			[41.4346, 2.1775],
			[41.4323, 2.1824]
		],
		dn: 21
	},
	{
		polygon: [
			[41.4418, 2.2135],
			[41.4397, 2.2101],
			[41.4423, 2.2162]
		],
		dn: 22
	},
	{
		polygon: [
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
		polygon: [
			[41.4669, 2.1235],
			[41.4684, 2.1211],
			[41.4662, 2.1262]
		],
		dn: 24
	},
	{
		polygon: [
			[41.4774, 2.123],
			[41.4759, 2.1205],
			[41.4788, 2.1268]
		],
		dn: 25
	},
	{
		polygon: [
			[41.4893, 2.1219],
			[41.4878, 2.1195],
			[41.4907, 2.1258]
		],
		dn: 26
	},
	{
		polygon: [
			[41.4987, 2.0711],
			[41.4972, 2.0687],
			[41.5001, 2.075]
		],
		dn: 27
	},
	{
		polygon: [
			[41.5089, 2.0864],
			[41.5074, 2.084],
			[41.5103, 2.0903]
		],
		dn: 28
	},
	{
		polygon: [
			[41.5169, 2.1081],
			[41.5154, 2.1057],
			[41.5183, 2.112]
		],
		dn: 29
	},
	{
		polygon: [
			[41.5256, 2.1412],
			[41.5241, 2.1388],
			[41.527, 2.1451]
		],
		dn: 30
	}
];

export const fetchMuseumData = () => mockMuseumData;
export const fetchConcurrentAreas = () => mockDensityData;

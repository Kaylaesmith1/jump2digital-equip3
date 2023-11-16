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
			{ lat: 41.3851, lng: 2.1734 },
			{ lat: 41.3879, lng: 2.1699 },
			{ lat: 41.3859, lng: 2.1762 }
		],
		dn: 30
	},
	{
		polygon: [
			{ lat: 41.3964, lng: 2.1944 },
			{ lat: 41.3948, lng: 2.1926 },
			{ lat: 41.3973, lng: 2.1978 }
		],
		dn: 35
	},
	{
		polygon: [
			{ lat: 41.4036, lng: 2.1884 },
			{ lat: 41.4048, lng: 2.1852 },
			{ lat: 41.4023, lng: 2.1871 }
		],
		dn: 40
	},
	{
		polygon: [
			{ lat: 41.4101, lng: 2.1665 },
			{ lat: 41.4119, lng: 2.1638 },
			{ lat: 41.4098, lng: 2.1693 }
		],
		dn: 45
	},
	{
		polygon: [
			{ lat: 41.4215, lng: 2.1785 },
			{ lat: 41.4202, lng: 2.1761 },
			{ lat: 41.4227, lng: 2.1808 }
		],
		dn: 50
	},
	{
		polygon: [
			{ lat: 41.4332, lng: 2.1798 },
			{ lat: 41.4346, lng: 2.1775 },
			{ lat: 41.4323, lng: 2.1824 }
		],
		dn: 55
	},
	{
		polygon: [
			{ lat: 41.4418, lng: 2.2135 },
			{ lat: 41.4397, lng: 2.2101 },
			{ lat: 41.4423, lng: 2.2162 }
		],
		dn: 60
	},
	{
		polygon: [
			{ lat: 41.4574, lng: 2.2048 },
			{ lat: 41.4559, lng: 2.2014 },
			{ lat: 41.4588, lng: 2.2081 }
		],
		dn: 65
	},
	{
		polygon: [
			{ lat: 41.4669, lng: 2.1235 },
			{ lat: 41.4684, lng: 2.1211 },
			{ lat: 41.4662, lng: 2.1262 }
		],
		dn: 70
	},
	{
		polygon: [
			{ lat: 41.4774, lng: 2.123 },
			{ lat: 41.4759, lng: 2.1205 },
			{ lat: 41.4788, lng: 2.1268 }
		],
		dn: 75
	},
	{
		polygon: [
			{ lat: 41.4893, lng: 2.1219 },
			{ lat: 41.4878, lng: 2.1195 },
			{ lat: 41.4907, lng: 2.1258 }
		],
		dn: 80
	},
	{
		polygon: [
			{ lat: 41.4987, lng: 2.0711 },
			{ lat: 41.4972, lng: 2.0687 },
			{ lat: 41.5001, lng: 2.075 }
		],
		dn: 85
	},
	{
		polygon: [
			{ lat: 41.5089, lng: 2.0864 },
			{ lat: 41.5074, lng: 2.084 },
			{ lat: 41.5103, lng: 2.0903 }
		],
		dn: 90
	},
	{
		polygon: [
			{ lat: 41.5169, lng: 2.1081 },
			{ lat: 41.5154, lng: 2.1057 },
			{ lat: 41.5183, lng: 2.112 }
		],
		dn: 95
	},
	{
		polygon: [
			{ lat: 41.5256, lng: 2.1412 },
			{ lat: 41.5241, lng: 2.1388 },
			{ lat: 41.527, lng: 2.1451 }
		],
		dn: 100
	}
];

export const fetchMuseumData = () => mockMuseumData;
export const fetchDensityData = () => mockDensityData;

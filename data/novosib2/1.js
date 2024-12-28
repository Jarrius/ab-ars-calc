var lines = lines || {};
lines['novosib2'] = lines['novosib2'] || {};
lines['novosib2']['1'] = [
	{
		name: 'Золотая Нива',
		trackLength: 1740,
		arsDrawBreakpoint: 6,
		arsAllSteps: true,
		tStay: 30,
		K: 1,
		curves: {
			0: 0,
			95: 80,
			221: 0,
			394: 160,
			648: 0,
			861: 162,
			1115: 0,
			1309: 160,
			1563: 0,
		},
		slopes: {
			0: 0,
			649: 19,
			863: 0,
			1115: 26,
			1309: 0,
			1563: 17,
			1672: 0,
		},
		modes: {
			0: 'H',
			500: '0',
			1000: 'H',
			1155: '0',
			1657: 'T',
		},
		joints: [
			{ x: -4.5 - 12.5, name: '279', limit: 60 },
			{ x: 258 - 200, name: '311', limit: 60, later: { 60: 1 } },
			{ x: 258 - 75, name: '313', limit: 70 },
			{ x: 258, name: '315', limit: 70 },
			{ x: 258 + 124, name: '317' },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 - 75 - 75 - 75 - 150 - 150 - 275 - 275, name: '365' },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 - 75 - 75 - 75 - 150 - 150 - 275, name: '367', later: { 80: 3 } },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 - 75 - 75 - 75 - 150 - 150, name: '369', later: { 70: 2 } },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 - 75 - 75 - 75 - 150, name: '371', later: { 60: 1 } },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 - 75 - 75 - 75, name: '373' },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 - 75 - 75, name: '375', limit: 70 },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 - 75, name: '377', limit: 70 },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35, name: '379', limit: 60 },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 + 75, name: '411', limit: 40 },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 + 75 + 75, name: '413', limit: 0 },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 + 75 + 75 + 75, name: '415', limit: 0 },
		],
		signals: [
			{ joint: '311', name: 'ЗН-311', lenses: 'BYG-Rw' },
			{ joint: '311', name: 'В', lenses: 'BYWR', back: true, left: true },
			{ joint: '315', name: 'ЗН-321', lenses: 'WBY-GRw', left: true },
			{ joint: '373', name: 'БР-361', lenses: 'BYG-Rw', left: true },
			{ joint: '373', name: 'ОП', lenses: 'R', left: true, back: true, row: 1 },
			{ joint: '411', name: 'БР-411', lenses: 'WBY-GRw' },
		],
		switches: [
			{ x: 258 + 7, name: '1', left: true, trailing: false },
			{ x: 258 + 124 + 1387.5 - 2.5 - 35 + 75 + 7, name: '1', left: true, trailing: false },
		],
	},
	{
		name: 'Березовая роща',
		trackLength: 1120,
		arsDrawBreakpoint: 6,
		arsAllSteps: true,
		tStay: 30,
		K: 1,
		curves: {
			0: 0,
			140: 80,
			266: 0,
			325: 132,
			428: 0,
			732: -300,
			772: 0,
			837: -87,
			1029: 0,
		},
		slopes: {
			0: 0,
			430: 24,
			578: 30,
			733: 20,
			818: 6,
			967: 9,
			1049: 0,
		},
		modes: {
			0: 'H',
			115: '0',
			350: 'H',
			685: '0',
			1039: 'T',
		},
		joints: [
			{ x: 67 - 75, name: '379' },
			{ x: 67, name: '411', limit: 60, later: { 60: 1 } },
			{ x: 67 + 75, name: '413', limit: 70 },
			{ x: 67 + 75 + 75, name: '415', limit: 70 },
			{ x: 67 + 75 + 75 + 125, name: '417', later: { 80: 3 } },
			{ x: 1117 - 75 - 75 - 75 - 150 - 150, name: '469', later: { 70: 2 } },
			{ x: 1117 - 75 - 75 - 75 - 150, name: '471', later: { 60: 1 } },
			{ x: 1117 - 75 - 75 - 75, name: '473' },
			{ x: 1117 - 75 - 75, name: '475', limit: 70 },
			{ x: 1117 - 75, name: '477', limit: 70 },
			{ x: 1117, name: '479', limit: 60 },
			{ x: 1117 + 75, name: '511', limit: 40 },
			{ x: 1117 + 75 + 75, name: '513', limit: 0 },
			{ x: 1117 + 75 + 75 + 75, name: '515', limit: 0 },
		],
		signals: [
			{ joint: '411', name: 'БР-411', lenses: 'WBY-GRw' },
			{ joint: '473', name: '461', lenses: 'YGR' },
			{ joint: '511', name: '511м', lenses: 'YGR' },
		],
		switches: [
			{ x: 67 + 7, name: '1', left: true, trailing: false },
		],
	},
	{
		name: 'Маршала Покрышкина',
		trackLength: 1156,
		arsAllSteps: true,
		arsDrawBreakpoint: 6,
		tStay: 30,
		K: 1,
		curves: {
			0: 0,
			116: -160,
			370: 0,
			716: -80,
			843: 0,
		},
		slopes: {
			0: 0,
			194: 3,
			484: 4,
			539: 2,
			608: 4,
			708: 17,
			909: 32,
		},
		modes: {
			0: 'H',
			175: '0',
			775: 'H',
			940: '0',
			1102: 'T',
		},
		joints: [
			{ x: -3, name: '479', limit: 60 },
			{ x: -3 + 75, name: '511', limit: 60, later: { 60: 1 } },
			{ x: -3 + 75 + 75, name: '513', limit: 70 },
			{ x: -3 + 75 + 75 + 75, name: '515', limit: 70 },
			{ x: -3 + 75 + 75 + 75 + 150, name: '517', later: { 80: 3 } },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 - 75 - 75 - 75 - 125 - 150, name: '569', later: { 70: 2 } },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 - 75 - 75 - 75 - 125, name: '571' },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 - 75 - 75 - 75, name: '573' },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 - 75 - 75, name: '575', limit: 70 },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 - 75, name: '577', limit: 70 },
			{ x: -3 + 75 + 75 + 75 + 75 + 850, name: '579', limit: 60 },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 + 75, name: '611', limit: 40 },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 + 75 + 75, name: '613', limit: 0 },
			{ x: -3 + 75 + 75 + 75 + 75 + 850 + 75 + 75 + 99, name: '615', limit: 0 },
		],
		signals: [
			{ joint: '511', name: '511м', lenses: 'YGR' },
			{ joint: '573', name: 'CБ-561', lenses: 'BYG-Rw' },
			{ joint: '573', name: 'ОП', lenses: 'R', left: true, back: true },
			{ joint: '611', name: 'СБ-611м', lenses: 'WBY-GRw' },
		],
	},
	{
		name: 'Сибирская',
		trackLength: 1617,
		arsAllSteps: true,
		arsDrawBreakpoint: 8,
		tStay: 30,
		K: 1,
		curves: {
			0: 0,
			78: -85,
			210: 0,
			550: -160,
			803: 0,
			1103: -85,
			1233: 0,
			1271: -144,
			1291: 0,
			1401: 144,
			1421: 0,
		},
		slopes: {
			0: 0,
			68: 3,
			150: -5,
			211: 0,
			550: 4,
			803: 0,
			823: 4,
			979: 0,
			1086: 8,
			1232: 0,
			1307: -4,
			1378: -12,
			1463: 0,
		},
		modes: {
			0: 'H',
			300: '0',
			680: 'H',
			740: '0',
			1200: 'H',
			1250: '0',
			1504: 'T',

		},
		joints: [
			{ x: -9, name: '579', limit: 60 },
			{ x: -9 + 75, name: '611', limit: 60, later: { 60: 1 } },
			{ x: -9 + 75 + 75, name: '613', limit: 70 },
			{ x: 240, name: '615', limit: 70 },
			{ x: 240 + 75, name: '617', limit: 80 },
			{ x: 240 + 75 + 123, name: '619', limit: 80 },
			// { x: 839, name: 'ПРС №5', limit: 0 },
			{ x: 863 - 275, name: '621', limit: 80 },
			{ x: 863, name: '623', limit: 80, later: { 80: 2 } },
			{ x: 1525.8 - 75 - 100 - 150 - 150, name: '669', limit: 80, later: { 70: 2 } },
			{ x: 1525.8 - 75 - 100 - 150, name: '671', limit: 80, later: { 60: 1 } },
			{ x: 1525.8 - 75 - 100, name: '673', limit: 70 },
			{ x: 1525.8 - 75, name: '675', limit: 60 },
			{ x: 1525.8, name: '677', limit: 40 },
			{ x: 1525.8 + 75, name: '679', limit: 0 },
			{ x: 1525.8 + 75 + 75, name: '711', limit: 0 },
		],
		signals: [
			{ joint: '611', name: 'СБ-611м', lenses: 'WBY-GRw' },
			{ joint: '617', name: 'А', lenses: 'WBY-zRw', left: true, back: true },
			{ joint: '621', name: 'СБ-621м', lenses: 'WBY-GRw' },
			{ joint: '623', name: 'Б', lenses: 'WBY-GRw', left: true, back: true },
			{ joint: '675', name: 'ГМ-661', lenses: 'BYz-Rw' },
			{ joint: '677', name: 'Дм', left: true, back: true, lenses: 'BWy-YRw' },
		],
		switches: [
			{ x: 240 + 7, name: '1', left: true },
			{ x: 863 - 7, name: '5', left: false, trailing: true },
			{ x: 1525.8, name: '1', left: true, trailing: true },
		],
	},
	{
		name: 'Пл. Гарина-Михайловского',
		trackLength: 81,
		arsAllSteps: true,
		arsDrawBreakpoint: 8,
		tStay: 30,
		K: 1,
		curves: {
			0: 0,
		},
		slopes: {
			0: 0,
		},
		modes: {
		},
		joints: [
		],
		signals: [
		],
	},
]
const polygons = [
	[[1, 0], [4, 0], [4, 4], [1, 4]],
	[[-1, -1], [2, -1], [2, 2], [-1, 2]]
];

const point = [0, 0];

function isPointInsidePolygons(polygons, point) {
	for (let j = 0; j < polygons.length; j++) {
		let maxx = polygons[j][0][0];
		let maxy = polygons[j][0][1];
		let minx = polygons[j][0][0];
		let miny = polygons[j][0][1];

		for (let i = 1; i < polygons[j].length; i++) {
			const example = polygons[j][i];

			if (example[0] > maxx) maxx = example[0];
			if (example[1] > maxy) maxy = example[1];
			if (example[0] < minx) minx = example[0];
			if (example[1] < miny) miny = example[1];
		}
		if (minx <= point[0] && point[0] <= maxx && miny <= point[1] && point[1] <= maxy) {
			return true;
		}
	}
	return false;
}

console.log(isPointInsidePolygons(polygons, point));

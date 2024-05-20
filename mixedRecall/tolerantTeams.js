const tolerantTeams = (rivalries) => {
	const rivObj = createObject(rivalries);
	const coloring = {};

	for (let rivKey in rivObj) {
		if (!(rivKey in coloring) && !navigate(rivObj, rivKey, coloring, false)) {
			return false;
		}
	}
	return true;
};

const navigate = (rivObj, rivKey, coloring, currentColor) => {
	if (rivKey in coloring) return coloring[rivKey] === currentColor;

	coloring[rivKey] = currentColor;

	for (let key of rivObj[rivKey]) {
		if (!navigate(rivObj, key, coloring, !currentColor)) {
			console.log(key);
			return false;
		}
	}
	return true;
};

const createObject = (rivalries) => {
	const rivObj = {};
	for (let rivalry of rivalries) {
		const [first, second] = rivalry;

		if (!(first in rivObj)) rivObj[first] = [];
		if (!(second in rivObj)) rivObj[second] = [];
		rivObj[first].push(second);
		rivObj[second].push(first);
	}

	return rivObj;
};

module.exports = {
	tolerantTeams,
};

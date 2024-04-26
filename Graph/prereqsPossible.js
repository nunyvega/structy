const prereqsPossible = (numCourses, prereqs) => {
	// todo
	const visited = new Set();
	const visiting = new Set();
	const prereqObject = createObject(prereqs);

	for (let prereq in prereqObject) {
		if (isPossible(prereqObject, prereq, visited, visiting) === false) {
			return false;
		}
	}

	return true;
};

const isPossible = (prereqObject, prereq, visited, visiting) => {
	if (visiting.has(prereq)) return false;
	if (visited.has(prereq)) return true;
	visiting.add(prereq);

	for (neighbour of prereqObject[prereq]) {
		if (isPossible(prereqObject, neighbour, visited, visiting) === false) {
			return false;
		}
	}

	visiting.delete(prereq);
	visited.add(prereq);
	return true;
};

const createObject = (prereqs) => {
	const req = {};
	for (prereq of prereqs) {
		const [a, b] = prereq;
		if (!(a in req)) req[a] = [];
		if (!(b in req)) req[b] = [];
		req[a].push(b);
	}
	return req;
};

module.exports = {
	prereqsPossible,
};

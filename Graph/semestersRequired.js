const semestersRequired = (numCourses, prereqs) => {
	// todo
	if (prereqs.length == 0) return 1;
	const reqObject = createRequirements(prereqs);
	let semesters = 0;

	for (subject in reqObject) {
		const count = explore(subject, reqObject);
		if (count > semesters) semesters = count;
	}

	return semesters;
};

const explore = (subject, reqObject) => {
	if (reqObject[subject].length == 0) return 1;
	let highestCount = 0;
	for (neighbour of reqObject[subject]) {
		let count = explore(neighbour, reqObject);
		if (count > highestCount) highestCount = count;
	}

	return highestCount + 1;
};

const createRequirements = (prereqs) => {
	const reqObject = {};

	for (req of prereqs) {
		const [completeBefore, subject] = req;
		if (!(subject in reqObject)) reqObject[subject] = [];
		if (!(completeBefore in reqObject)) reqObject[completeBefore] = [];
		reqObject[completeBefore].push(subject);
	}
	return reqObject;
};

module.exports = {
	semestersRequired,
};

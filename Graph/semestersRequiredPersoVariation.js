const semestersRequired = (numCourses, prereqs) => {
	if (prereqs.length == 0) return 1;
	const reqObject = createRequirements(prereqs);
	let semesters = 0;
	let count = 8;
	while (Object.keys(reqObject).length > 0) {
		let justRemoved = [];
		for (req in reqObject) {
			if (reqObject[req].length == 0) {
				justRemoved.push(Number(req));
				console.log(justRemoved);
				delete reqObject[req];
			}
		}
		for (req in reqObject) {
			reqObject[req] = reqObject[req].filter(
				(item) => !justRemoved.includes(item)
			);
		}
		semesters++;
	}

	return semesters;
};

const createRequirements = (prereqs) => {
	const reqObject = {};

	for (req of prereqs) {
		const [completeBefore, subject] = req;
		if (!(completeBefore in reqObject)) reqObject[completeBefore] = [];
		if (!(subject in reqObject)) reqObject[subject] = [];
		reqObject[subject].push(completeBefore);
	}
	return reqObject;
};

module.exports = {
	semestersRequired,
};

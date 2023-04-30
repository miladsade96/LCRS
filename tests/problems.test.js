const problems = require("../src/problems/problems");

test("Testing topKFrequent function", () => {
	expect(problems.topKFrequent([1, 1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
	expect(problems.topKFrequent([1, 2, 2, 3, 3, 3, 3, 3], 2)).toEqual([3, 2]);
});

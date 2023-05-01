const problems = require("../src/problems/problems");

test("Testing topKFrequent function", () => {
	expect(problems.topKFrequent([1, 1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2]);
	expect(problems.topKFrequent([1, 2, 2, 3, 3, 3, 3, 3], 2)).toEqual([3, 2]);
});

test("Testing containsDuplicate function", () => {
	expect(problems.containsDuplicate([1, 2, 3, 4])).toEqual(false);
	expect(problems.containsDuplicate([1, 2, 3, 1, 4])).toEqual(true);
});

test("Testing isAnagram function", () => {
	expect(problems.isAnagramV1("anagram", "nagaram")).toEqual(true);
	expect(problems.isAnagramV1("rat", "car")).toEqual(false);
});

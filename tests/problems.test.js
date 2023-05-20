const problems = require("../src/problems/problemsAndSolutions");

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
	expect(problems.isAnagramV2("anagram", "nagaram")).toEqual(true);
	expect(problems.isAnagramV2("rat", "car")).toEqual(false);
});

test("Testing twoSum function", () => {
	expect(problems.twoSum([2, 7, 11, 15], 9)).toEqual(expect.arrayContaining([0, 1]));
	expect(problems.twoSum([3, 2, 4], 6)).toEqual(expect.arrayContaining([1, 2]));
	expect(problems.twoSum([3, 3], 6)).toEqual(expect.arrayContaining([0, 1]));
});

test("Testing groupAnagrams functions", () => {
	const outputArr = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
	expect(problems.groupAnagramsV1(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual(
		expect.arrayContaining([
			outputArr[0],
			expect.arrayContaining(outputArr[1]),
			expect.arrayContaining(outputArr[2]),
		]),
	);
	expect(problems.groupAnagramsV2(["eat", "tea", "tan", "ate", "nat", "bat"])).toEqual(
		expect.arrayContaining([
			outputArr[0],
			expect.arrayContaining(outputArr[1]),
			expect.arrayContaining(outputArr[2]),
		]),
	);
	expect(problems.groupAnagramsV1([""])).toEqual([[""]]);
	expect(problems.groupAnagramsV2([""])).toEqual([[""]]);
	expect(problems.groupAnagramsV1(["a"])).toEqual([["a"]]);
	expect(problems.groupAnagramsV2(["a"])).toEqual([["a"]]);
});

test("Testing productOfArrayExceptSelf function", () => {
	expect(problems.productOfArrayExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
});

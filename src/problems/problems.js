"use strict";

/**
 * 347. Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function topKFrequent(nums, k) {
	const counts = {};
	nums.forEach(num => {
		if (counts[num]) counts[num]++;
		else counts[num] = 1;
	});
	return Object.entries(counts)
		.sort((a, b) => (a[1] > b[1] ? -1 : 1))
		.slice(0, k)
		.map(e => Number(e[0]));
}

/**
 * 217. Contains Duplicate
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @returns {boolean}
 */
function containsDuplicate(nums) {
	const uniqueItems = new Set(nums);
	return uniqueItems.size < nums.length;
}

module.exports = {topKFrequent: topKFrequent, containsDuplicate: containsDuplicate};

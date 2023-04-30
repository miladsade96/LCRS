"use strict";

/**
 * 347. Top K Frequent Elements
 * Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * @param nums
 * @param k
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

module.exports = {topKFrequent: topKFrequent};

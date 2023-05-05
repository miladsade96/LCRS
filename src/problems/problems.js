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

/**
 * 242. Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * Version NO.1
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagramV1(s, t) {
	if (s.length !== t.length) return false;
	const sChars = {};
	const tChars = {};
	for (let i = 0; i < s.length; i++) sChars[s[i]] ? (sChars[s[i]] += 1) : (sChars[s[i]] = 1);
	for (let j = 0; j < t.length; j++) tChars[t[j]] ? (tChars[t[j]] += 1) : (tChars[t[j]] = 1);
	const tSet = new Set(t);
	for (let char of tSet) {
		if (sChars[char] !== tChars[char]) return false;
	}
	return true;
}

/**
 * 242. Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * Version NO.2
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function isAnagramV2(s, t) {
	if (s.length !== t.length) return false;
	return s.split("").sort().join("") === t.split("").sort().join("");
}

/**
 * 1. Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such
 * that they add up to target. You may assume that each input would have exactly one solution,
 * and you may not use the same element twice. You can return the answer in any order.
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]|(number|any)[]}
 */
function twoSum(nums, target) {
	if (nums.length === 2) return [0, 1];
	const mappings = new Map();
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const complement = target - num;
		const complementIndex = mappings.get(complement);
		const isTarget = mappings.has(complement);
		if (isTarget) return [i, complementIndex];
		mappings.set(num, i);
	}
	return [-1, -1];
}

module.exports = {
	topKFrequent: topKFrequent,
	containsDuplicate: containsDuplicate,
	isAnagramV1: isAnagramV1,
	isAnagramV2: isAnagramV2,
	twoSum: twoSum,
};

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

/**
 * 49. Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * @param {string[]} listsOfStrings
 * @returns {string[][]}
 */
function groupAnagramsV1(listsOfStrings) {
	// 229 ms
	const items = listsOfStrings.map((element, index) => {
		return [element.split("").sort().join(""), index];
	});
	items.sort();
	const hashMap = {};
	for (let i = 0; i < items.length; i++) {
		if (!hashMap[items[i][0]]) {
			hashMap[items[i][0]] = [items[i][1]];
		} else {
			hashMap[items[i][0]].push(items[i][1]);
		}
	}

	const results = [];
	Object.values(hashMap).forEach(valuesArr => {
		const group = [];
		for (let value of valuesArr) {
			group.push(listsOfStrings[value]);
		}
		results.push(group);
	});
	return results;
}

/**
 * 49. Group Anagrams
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
 * typically using all the original letters exactly once.
 * @param {string[]} listOfStrings
 * @returns {string[][]}
 */
function groupAnagramsV2(listOfStrings) {
	// 106 ms
	const anagramsMap = {};

	for (let i = 0; i < listOfStrings.length; i++) {
		const str = listOfStrings[i];
		const sortedStr = str.split("").sort().join("");

		if (sortedStr in anagramsMap) {
			anagramsMap[sortedStr].push(str);
		} else {
			anagramsMap[sortedStr] = [str];
		}
	}

	return Object.values(anagramsMap);
}

/**
 * 238. Product of Array Except Self
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * @param {number[]} listOfNumbers
 * @returns {number[]}
 */
function productOfArrayExceptSelf(listOfNumbers) {
	const result = [];
	let prefix = 1;
	let postfix = 1;
	for (let i = 0; i < listOfNumbers.length; i++) {
		result[i] = prefix;
		prefix *= listOfNumbers[i];
	}
	for (let j = listOfNumbers.length - 2; j >= 0; j--) {
		postfix *= listOfNumbers[j + 1];
		result[j] *= postfix;
	}
	return result;
}

/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @returns {number}
 */
function longestConsecutiveSequenceV1(nums) {
	// 207 ms
	const cleaned = new Array(...new Set(nums)).sort((a, b) => a - b);
	const sequences = [[cleaned[0]]];
	let sequenceIndexer = 0;
	let prediction = cleaned[0] + 1;

	for (let index = 1; index < cleaned.length; index++) {
		if (cleaned[index] === prediction) {
			sequences[sequenceIndexer].push(cleaned[index]);
			prediction += 1;
		} else {
			sequences.push([cleaned[index]]);
			prediction = cleaned[index] + 1;
			sequenceIndexer += 1;
		}
	}
	return Math.max(...sequences.map(arr => arr.length));
}

/**
 * 128. Longest Consecutive Sequence
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
 * You must write an algorithm that runs in O(n) time.
 * @param {number[]} nums
 * @returns {number}
 */
function longestConsecutiveSequenceV2(nums) {
	// 79 ms
	let set = new Set(nums);
	let maxLen = 0;
	for (let num of set) {
		if (!set.has(num - 1)) {
			let len = 0;
			while (set.has(num++)) len++;
			maxLen = Math.max(maxLen, len);
		}
	}
	return maxLen;
}

module.exports = {
	topKFrequent,
	containsDuplicate,
	isAnagramV1,
	isAnagramV2,
	twoSum,
	groupAnagramsV1,
	groupAnagramsV2,
	productOfArrayExceptSelf,
	longestConsecutiveSequenceV1,
	longestConsecutiveSequenceV2,
};

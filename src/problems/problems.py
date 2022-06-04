from typing import List
from collections import Counter


def is_isomorphic(s: str, t: str) -> bool:
    """
    Given two strings s and t, determine if they are isomorphic.
    Two strings s and t are isomorphic if the characters in s can be replaced to get t.
    All occurrences of a character must be replaced with another character while preserving
    the order of characters. No two characters may map to the same character, but a character
    may map to itself.
    Level of difficulty: Easy
    :param s: First given string
    :param t: Second given string
    :return: Whether two string is isomorphic or not
    """
    mapping_s_t = {}
    mapping_t_s = {}
    for c1, c2 in zip(s, t):
        if (c1 not in mapping_s_t) and (c2 not in mapping_t_s):
            mapping_s_t[c1] = c2
            mapping_t_s[c2] = c1
        elif mapping_s_t.get(c1) != c2 or mapping_t_s.get(c2) != c1:
            return False
    return True


def number_of_one_bits(n: int) -> int:
    """
    Write a function that takes an unsigned integer and returns the number of '1' bits,
    It has (also known as the Hamming weight).
    https://en.wikipedia.org/wiki/Hamming_weight
    Lever of difficulty: Easy
    :param n: An unsigned integer
    :return: Number of 1 bits
    """
    return bin(n).count("1")


def number_of_good_pairs(nums: List[int]) -> int:
    """
    Given an array of integers nums, return the number of good pairs.
    A pair (i, j) is called good if nums[i] == nums[j] and i < j.
    Level of difficulty: Easy
    :param nums: List of integers
    :return: Number of good pairs
    """
    count = 0
    for i in range(0, len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                count += 1
    return count


def median_of_two_sorted_arrays(nums_1: List[int], nums_2: List[int]) -> float:
    """
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
    The overall run time complexity should be O(log (m+n)).
    Level of difficulty: Hard
    :param nums_1: List of integers
    :param nums_2: List of integers
    :return: The median of two sorted arrays
    """
    merged = sorted(nums_1 + nums_2)
    idx = (len(merged) - 1) // 2
    if len(merged) % 2 != 0:
        median = merged[idx]
        return median
    else:
        median = (merged[idx] + merged[idx + 1]) / 2
        return median


def binary_subarrays_with_sum(nums: List[int], goal: int) -> int:
    """
    Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
    A subarray is a contiguous part of the array.
    Level of difficulty: Medium
    :param nums: List of binary numbers
    :param goal: An integer number
    :return: The number of non-empty subarrays with a sum goal
    """
    result = 0
    left, right, sum_left, sum_right = 0, 0, 0, 0
    for i, a in enumerate(nums):
        sum_left += a
        while left < i and sum_left > goal:
            sum_left -= nums[left]
            left += 1
        sum_right += a
        while right < i and (sum_right > goal or (sum_right == goal and not nums[right])):
            sum_right -= nums[right]
            right += 1
        if sum_left == goal:
            result += right - left + 1
    return result


def two_sum(nums: List[int], target: int) -> List[int]:
    """
    Given an array of integers nums and an integer target, return indices
    of the two numbers such that they add up to target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    You can return the answer in any order.
    Level of difficulty: Easy
    :param nums: List of integer numbers
    :param target: An integer number
    :return: List, Indices of two numbers
    """
    num_to_index = {}
    for i, num in enumerate(nums):
        if target - num in num_to_index:
            tmp = num_to_index[target - num], i
            return list(tmp)
        num_to_index[num] = i


def first_missing_positive(nums: List[int]) -> int:
    """
    Given an unsorted integer array nums, return the smallest missing positive integer.
    You must implement an algorithm that runs in O(n) time and uses constant extra space.
    Level of difficulty: Hard
    :param nums: Unsorted list of integers
    :return: Smallest missing integer
    """
    n = len(nums)
    for i in range(n):
        while 0 < nums[i] < n and nums[nums[i] - 1] != nums[i]:
            nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
    for j, num in enumerate(nums):
        if num != j + 1:
            return j + 1
    return n + 1


def hamming_distance(x: int, y: int) -> int:
    """
    The Hamming distance between two integers is the number of positions at which the corresponding
    bits are different. Given two integers x and y, return the Hamming distance between them.
    Level of difficulty: Easy
    :param x: First given integer
    :param y: Second given integer
    :return: Hamming distance
    """
    diff = x ^ y
    c = Counter(str(bin(diff)))
    return c['1']


def length_of_last_word(s: str) -> int:
    """
    Given a string s consisting of words and spaces, return the length of the last word in the string.
    A word is a maximal substring consisting of non-space characters only.
    Level of difficulty: Easy
    :param s: Given string
    :return: Length of last word
    """
    return len(s.strip().split(" ")[-1])


def sliding_window_median(nums: List[int], k: int) -> List[float]:
    """
    The median is the middle value in an ordered integer list. If the size of the list is even,
    there is no middle value. So the median is the mean of the two middle values.
    You are given an integer array nums and an integer k. There is a sliding window of size k which is
    moving from the very left of the array to the very right. You can only see the k numbers in the window.
    Each time the sliding window moves right by one position.
    Return the median array for each window in the original array.
    Answers within 10-5 of the actual value will be accepted.
    Level of difficulty: Hard
    :param nums: List of integer numbers
    :param k: Size of the sliding windows
    :return: The median array for each window in the original array
    """
    left = 0
    right = k - 1
    epochs = len(nums) - right
    medians = list()
    for i in range(epochs):
        new = sorted(nums[left:right + 1])
        idx = (len(new) - 1) // 2
        if len(new) % 2 != 0:
            medians.append(float(new[idx]))
        else:
            median = (new[idx] + new[idx + 1]) / 2
            medians.append(median)
        left += 1
        right += 1
    return medians


def sorting_the_sentence(s: str) -> str:
    """
    A sentence is a list of words that are separated by a single space with no leading or trailing spaces.
    Each word consists of lowercase and uppercase English letters.
    A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the
    words in the sentence. For example, the sentence "This is a sentence" can be shuffled as
    "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3". Given a shuffled sentence s containing no more
    than 9 words, reconstruct and return the original sentence.
    Level of difficulty: Easy
    :param s:
    :return:
    """
    word_list = s.split(" ")
    directory = {}
    for c in word_list:
        directory[c[-1]] = c[:-1]
    res = ""
    for i in range(len(word_list)):
        res += directory[str(i + 1)]
        res += " "
    return res[:-1]


def is_palindrome_v1(x: int) -> bool:
    """
    Given an integer x, return true if x is palindrome integer.
    An integer is a palindrome when it reads the same backward as forward.
    For example, 121 is a palindrome while 123 is not.
    v1 runtime: 81 ms
    Level of difficulty: Easy
    :param x: An integer number
    :return: bool, Whether given integer is palindrome or not
    """
    if str(x) == str(x)[::-1]:
        return True
    else:
        return False

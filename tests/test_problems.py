import pytest
from context import src     # This used by pytest package
from src.problems.problems import *


@pytest.mark.parametrize("input_1, input_2, expected",
                         [("egg", "add", True), ("foo", "bar", False), ("paper", "title", True)])
def test_is_isomorphic(input_1, input_2, expected):
    assert is_isomorphic(s=input_1, t=input_2) == expected


@pytest.mark.parametrize("func_input, expected",
                         [(5, 2), (10, 2), (28, 3), (354, 4)])
def test_number_of_one_bits(func_input, expected):
    assert number_of_one_bits(func_input) == expected


@pytest.mark.parametrize("func_input, expected",
                         [([1, 2, 3, 1, 1, 3], 4), ([1, 1, 1, 1], 6), ([1, 2, 3], 0)])
def test_number_of_good_pairs(func_input, expected):
    assert number_of_good_pairs(func_input) == expected


@pytest.mark.parametrize("func_input_1, func_input_2, expected",
                         [([1, 3], [2], 2.0),
                          ([1, 3], [2, 4], 2.5),
                          ([256, 0, 9, 70], [597, 263, 85], 85.0),
                          ([90, 17, 200], [150, 150, 900], 150.0)])
def test_median_of_two_sorted_arrays(func_input_1, func_input_2, expected):
    assert median_of_two_sorted_arrays(func_input_1, func_input_2) == expected


@pytest.mark.parametrize("input_1, input_2, expected",
                         [([1, 0, 1, 0, 1], 2, 4), ([0, 0, 0, 0, 0], 0, 15)])
def test_binary_subarrays_with_sum(input_1, input_2, expected):
    assert binary_subarrays_with_sum(input_1, input_2) == expected


@pytest.mark.parametrize("input_1, input_2, expected",
                         [([2, 7, 11, 15], 9, [0, 1]),
                          ([3, 2, 4], 6, [1, 2]),
                          ([3, 3], 6, [0, 1])])
def test_two_sum(input_1, input_2, expected):
    assert two_sum(nums=input_1, target=input_2) == expected


@pytest.mark.parametrize("func_input, expected",
                         [([1, 2, 0], 3), ([3, 4, -1, 1], 2), ([7, 8, 9, 11, 12], 1)])
def test_first_missing_positive(func_input, expected):
    assert first_missing_positive(nums=func_input) == expected


@pytest.mark.parametrize("input_1, input_2, expected",
                         [(1, 4, 2), (1, 3, 1)])
def test_hamming_distance(input_1, input_2, expected):
    assert hamming_distance(x=input_1, y=input_2) == expected


@pytest.mark.parametrize("func_input, expected",
                         [("Hello World", 5), ("   fly me   to   the moon  ", 4),
                          ("luffy is still joyboy", 6)])
def test_length_of_last_word(func_input, expected):
    assert length_of_last_word(s=func_input) == expected

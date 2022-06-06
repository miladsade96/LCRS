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


@pytest.mark.parametrize("input_1, input_2, expected",
                         [([1, 3, -1, -3, 5, 3, 6, 7], 3,
                           [1.00000, -1.00000, -1.00000, 3.00000, 5.00000, 6.00000]),
                          ([1, 2, 3, 4, 2, 3, 1, 4, 2], 3,
                           [2.00000, 3.00000, 3.00000, 3.00000, 2.00000, 3.00000, 2.00000])])
def test_sliding_window_median(input_1, input_2, expected):
    assert sliding_window_median(nums=input_1, k=input_2) == expected


@pytest.mark.parametrize("func_input, expected",
                         [("is2 sentence4 This1 a3", "This is a sentence"),
                          ("Myself2 Me1 I4 and3", "Me Myself and I")])
def test_sorting_the_sentence(func_input, expected):
    assert sorting_the_sentence(s=func_input) == expected


@pytest.mark.parametrize("func_input, expected",
                         [(121, True), (-121, False), (123, False), (1221, True),
                          (11011, True), (9098908, False), (1, True), (85, False)])
def test_is_palindrome_v1(func_input, expected):
    assert is_palindrome_v1(x=func_input) == expected


@pytest.mark.parametrize("func_input, expected",
                         [(121, True), (-121, False), (123, False), (1221, True),
                          (11011, True), (9098908, False), (1, True), (85, False)])
def test_is_palindrome_v2(func_input, expected):
    assert is_palindrome_v2(x=func_input) == expected


@pytest.mark.parametrize("func_input, expected",
                         [([1, 1, 4, 2, 1, 3], 3),
                          ([5, 1, 2, 3, 4], 5), ([1, 2, 3, 4, 5], 0)])
def test_height_checker_v1(func_input, expected):
    assert height_checker_v1(heights=func_input) == expected


@pytest.mark.parametrize("func_input, expected",
                         [([1, 1, 4, 2, 1, 3], 3),
                          ([5, 1, 2, 3, 4], 5), ([1, 2, 3, 4, 5], 0)])
def test_height_checker_v2(func_input, expected):
    assert height_checker_v2(heights=func_input) == expected


@pytest.mark.parametrize("input_1, input_2, expected",
                         [([-1, 0, 3, 5, 9, 12], 9, 4), ([-1, 0, 3, 5, 9, 12], 2, -1)])
def test_binary_search(input_1, input_2, expected):
    assert binary_search(nums=input_1, target=input_2) == expected


@pytest.mark.parametrize("input_1, input_2, expected",
                         [([1, 3, 5, 6], 5, 2), ([1, 3, 5, 6], 2, 1), ([1, 3, 5, 6], 7, 4)])
def test_search_insert_position(input_1, input_2, expected):
    assert search_insert_position(nums=input_1, target=input_2) == expected

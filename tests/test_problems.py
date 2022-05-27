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

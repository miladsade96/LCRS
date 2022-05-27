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

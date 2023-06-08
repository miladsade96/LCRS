![logo](logo.png)

[![CodeFactor](https://www.codefactor.io/repository/github/everlookneversee/lcrs/badge)](https://www.codefactor.io/repository/github/everlookneversee/lcrs)
![GitHub](https://img.shields.io/github/license/EverLookNeverSee/lcrs)
![CodeQl](https://github.com/EverLookNeverSee/lcrs/actions/workflows/codeql.yml/badge.svg)
![Dependency Review](https://github.com/EverLookNeverSee/lcrs/actions/workflows/dependency-review.yml/badge.svg)
![NodeJS](https://github.com/EverLookNeverSee/lcrs/actions/workflows/node.js.yml/badge.svg)
![Python App](https://github.com/EverLookNeverSee/lcrs/actions/workflows/python-app.yml/badge.svg)
![Python Package](https://github.com/EverLookNeverSee/lcrs/actions/workflows/python-package.yml/badge.svg)
![GitHub language count](https://img.shields.io/github/languages/count/EverLookNeverSee/lcrs)
![GitHub top language](https://img.shields.io/github/languages/top/EverLookNeverSee/lcrs)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/EverLookNeverSee/lcrs)
![Lines of code](https://img.shields.io/tokei/lines/github/EverLookNeverSee/lcrs)
![GitHub all releases](https://img.shields.io/github/downloads/EverLookNeverSee/lcrs/total)
![GitHub issues](https://img.shields.io/github/issues-raw/EverLookNeverSee/lcrs)
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/EverLookNeverSee/lcrs)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/EverLookNeverSee/lcrs)
![GitHub contributors](https://img.shields.io/github/contributors/EverLookNeverSee/lcrs)
![GitHub last commit](https://img.shields.io/github/last-commit/EverLookNeverSee/lcrs)

---

## Authors

* Milad Sadeghi DM – [EverLookNeverSee@GitHub](https://github.com/EverLookNeverSee)
* See all contributors list [here](https://github.com/EverLookNeverSee/LCRS/graphs/contributors).

---

## Installing the dependencies and running the tests
<details>
  <summary>
    Python
  </summary>

1. Creating a python virtual environment:

```commandline
python -m  venv virtual_environment_name
```

2. Activating venv:

```commandline
source virtual_environment_name/bin/activate
```

3. Installing project dependencies:

```commandline
python -m pip install -r requirements.txt
```

4. Running tests:

```commandline
pytest -v tests/
```
</details>

<details>
  <summary>Javascript</summary>

1. Installing [nodeJS](https://nodejs.org/en/download) module
2. Installing project dependencies:

```commandline
pnpm install
```

3. Running tests:
```commandline
pnpm run test
```
</details>

---

## Data structures
<details>
  <summary>
    JavaScript
  </summary>

| No. |          Title           |                                                                               Links                                                                               |
|:---:|:------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
|  1  |        Hash Table        |  [Implementation on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/b6df11417100c06ede38dd412b0a955a3f98e5fd/src/dataStructures/dataStructures.js#L1-L57)   |
|  2  |    Singly Linked List    | [Implementation on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/b6df11417100c06ede38dd412b0a955a3f98e5fd/src/dataStructures/dataStructures.js#L59-L159)  |
|  3  |    Doubly Linked List    | [Implementation on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/b6df11417100c06ede38dd412b0a955a3f98e5fd/src/dataStructures/dataStructures.js#L161-L255) |
|  4  | Stack(using linked list) | [Implementation on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/b6df11417100c06ede38dd412b0a955a3f98e5fd/src/dataStructures/dataStructures.js#L257-L307) |
|  5  |    Stack(using array)    | [Implementation on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/b6df11417100c06ede38dd412b0a955a3f98e5fd/src/dataStructures/dataStructures.js#L309-L329) |
|  6  | Queue(using linked list) | [Implementation on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/b6df11417100c06ede38dd412b0a955a3f98e5fd/src/dataStructures/dataStructures.js#L331-L367) |
|  7  | Queue(using two stacks)  | [Implementation on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/b6df11417100c06ede38dd412b0a955a3f98e5fd/src/dataStructures/dataStructures.js#L369-L409) |

</details>

## Solved problems

<details>
  <summary>
    Python
  </summary>

| ID.  |              Title              |                                                                                                                                       Links                                                                                                                                        | Difficulty Level |
|:----:|:-------------------------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------:|
| 205  |       Isomorphic Strings        |         [Full Description on LeetCode](https://leetcode.com/problems/isomorphic-strings/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L6-L26)         |       Easy       |
| 338  |          Counting Bits          |           [Full Description on LeetCode](https://leetcode.com/problems/counting-bits/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L29-L38)           |       Easy       |
| 1512 |      Number of Good Pairs       |       [Full Description on LeetCode](https://leetcode.com/problems/number-of-good-pairs/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L41-L54)        |       Easy       |
|  1   |             Two Sum             |             [Full Description on LeetCode](https://leetcode.com/problems/two-sum/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L101-L117)             |       Easy       |
| 461  |        Hamming Distance         |        [Full Description on LeetCode](https://leetcode.com/problems/hamming-distance/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L138-L149)         |       Easy       |
|  58  |       Length of Last Word       |       [Full Description on LeetCode](https://leetcode.com/problems/length-of-last-word/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L152-L160)       |       Easy       |
| 1859 |      Sorting the Sentence       |      [Full Description on LeetCode](https://leetcode.com/problems/sorting-the-sentence/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L194-L214)       |       Easy       |
|  9   |        Palindrome Number        |        [Full Description on LeetCode](https://leetcode.com/problems/palindrome-number/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L217-L245)        |       Easy       |
| 1051 |         Height Checker          |         [Full Description on LeetCode](https://leetcode.com/problems/height-checker/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L248-L289)          |       Easy       |
| 704  |          Binary Search          |          [Full Description on LeetCode](https://leetcode.com/problems/binary-search/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L292-L305)          |       Easy       |
|  35  |     Search Insert Position      |     [Full Description on LeetCode](https://leetcode.com/problems/search-insert-position/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L308-L329)      |       Easy       |
| 977  |    Squares of a Sorted Array    |    [Full Description on LeetCode](https://leetcode.com/problems/squares-of-a-sorted-array/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L332-L340)    |       Easy       |
| 283  |           Move Zeros            |           [Full Description on LeetCode](https://leetcode.com/problems/move-zeroes/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L343-L358)           |       Easy       |
| 125  |        Valid Palindrome         |        [Full Description on LeetCode](https://leetcode.com/problems/valid-palindrome/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L361-L369)         |       Easy       |
| 121  | Best Time to Buy and Sell Stock | [Full Description on LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L373-L391) |       Easy       |
|  20  |        Valid Parentheses        |        [Full Description on LeetCode](https://leetcode.com/problems/valid-parentheses/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L395-L418)        |       Easy       |
| 206  |       Reverse Linked List       |       [Full Description on LeetCode](https://leetcode.com/problems/reverse-linked-list/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L421-L441)       |       Easy       |
| 226  |       Invert Binary Tree        |       [Full Description on LeetCode](https://leetcode.com/problems/invert-binary-tree/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L445-L467)        |       Easy       |
|  70  |         Climbing Stairs         |         [Full Description on LeetCode](https://leetcode.com/problems/climbing-stairs/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L470-L483)         |       Easy       |
| 190  |          Reverse Bits           |          [Full Description on LeetCode](https://leetcode.com/problems/reverse-bits/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L486-L493)           |       Easy       |
| 242  |          Valid Anagram          |          [Full Description on LeetCode](https://leetcode.com/problems/valid-anagram/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L496-L512)          |       Easy       |
|  21  |     Merge Two Linked Lists      |     [Full Description on LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L515-L547)      |       Easy       |
| 930  |   Binary Sub-arrays with Sum    |     [Full Description on LeetCode](https://leetcode.com/problems/binary-subarrays-with-sum/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L76-L98)     |      Medium      |
|  49  |         Group Anagrams          |         [Full Description on LeetCode](https://leetcode.com/problems/group-anagrams/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L550-L566)          |      Medium      |
| 347  |     Top K Frequent Elements     |     [Full Description on LeetCode](https://leetcode.com/problems/top-k-frequent-elements/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L569-L581)     |      Medium      |
| 238  |  Product of Array Except Self   |  [Full Description on LeetCode](https://leetcode.com/problems/product-of-array-except-self/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L584-L604)   |      Medium      |
|  4   |   Median of Two Sorted Arrays   |    [Full Description on LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L57-L73)    |       Hard       |
|  41  |     First Missing Positive      |     [Full Description on LeetCode](https://leetcode.com/problems/first-missing-positive/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L120-L135)      |       Hard       |
| 480  |      Sliding Window Median      |      [Full Description on LeetCode](https://leetcode.com/problems/sliding-window-median/description/)–[Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/6bcd0c8ae75184c7887acc59cf5d4a9489c14069/src/problemsAndSolutions/problemsAndSolutions.py#L163-L191)      |       Hard       |


</details>

<details>
  <summary>
    Javascript
  </summary>

| ID  |            Title             |                                                                                                                                 Links                                                                                                                                 | Difficulty Level |
|:---:|:----------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|:----------------:|
| 217 |      Contains Duplicate      |                   [Full Description on LeetCode](https://leetcode.com/problems/contains-duplicate/) - [Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/db405df654448525ca16dde8bd9e5461fe5d796e/src/problems/problems.js#L24-L35)                   |       Easy       |  
| 242 |        Valid Anagram         |                     [Full Description on LeetCode](https://leetcode.com/problems/valid-anagram/) - [Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/db405df654448525ca16dde8bd9e5461fe5d796e/src/problems/problems.js#L37-L73)                      |       Easy       |
|  1  |           Two Sum            |                        [Full Description on LeetCode](https://leetcode.com/problems/two-sum/) - [Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/8b3a876f3e6738d8747832d9ec014eb9f726e344/src/problems/problems.js#L84-L96)                         |       Easy       |
| 347 |   Top k frequent elements    |                [Full Description on LeetCode](https://leetcode.com/problems/top-k-frequent-elements/) - [Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/8b3a876f3e6738d8747832d9ec014eb9f726e344/src/problems/problems.js#L12-L22)                 |      Medium      |
| 49  |        Group anagrams        |                    [Full Description on LeetCode](https://leetcode.com/problems/group-anagrams/) - [Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/8b3a876f3e6738d8747832d9ec014eb9f726e344/src/problems/problems.js#L98-L156)                     |      Medium      |
| 238 | Product of array except self |       [Full Description on LeetCode](https://leetcode.com/problems/product-of-array-except-self/description/) - [Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/2a9806a08fb912abec7954f3a287d5c5a8888135/src/problems/problems.js#L158-L180)       |      Medium      |
| 128 | Longest Consecutive Sequence | [Full Description on LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/) - [Solution on GitHub](https://github.com/EverLookNeverSee/LCRS/blob/f13887bd0b331c233324aceb713d2151530ba97e/src/problemsAndSolutions/problemsAndSolutions.js#L182-L228) |      Medium      |
</details>

### *Work in progress*

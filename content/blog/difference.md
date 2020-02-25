---
date: "2020-01-04"
description: ''
title: Python como usar o difference
tags: list,beginner
---

Returns the difference between two iterables.

Create a `set` from `b`, then use list comprehension on `a` to only keep values not contained in the previously created set, `_b`.

```py
def difference(a, b):
  _b = set(b)
  return [item for item in a if item not in _b]
```

```py
difference([1, 2, 3], [1, 2, 4]) # [3]
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

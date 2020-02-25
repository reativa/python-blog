---
date: "2020-01-04"
description: ''
title: Python como usar o max_n
tags: list,math,beginner
---

Returns the `n` maximum elements from the provided list. 
If `n` is greater than or equal to the provided list's length, then return the original list (sorted in descending order).

Use `sorted()` to sort the list, `[:n]` to get the specified number of elements.
Omit the second argument, `n`, to get a one-element list.

```py
def max_n(lst, n=1):
  return sorted(lst, reverse=True)[:n]
```

```py
max_n([1, 2, 3]) # [3]
max_n([1, 2, 3], 2) # [3,2]
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

---
date: "2020-01-04"
description: ''
title: Python como usar o all_unique
tags: list,beginner
---

Returns `True` if all the values in a list are unique, `False` otherwise.

Use `set()` on the given list to remove duplicates, use `len()` to compare its length with the length of the list.

```py
def all_unique(lst):
  return len(lst) == len(set(lst))
```

```py
x = [1, 2, 3, 4, 5, 6]
y = [1, 2, 2, 3, 4, 5]
all_unique(x) # True
all_unique(y) # False
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

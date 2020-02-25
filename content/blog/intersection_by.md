---
date: "2020-01-04"
description: ''
title: Python como usar o intersection_by
tags: list,function,intermediate
---

Returns a list of elements that exist in both lists, after applying the provided function to each list element of both.

Create a `set` by applying `fn` to each element in `b`, then use list comprehension in combination with `fn` on `a` to only keep values contained in both lists.

```py
def intersection_by(a, b, fn):
  _b = set(map(fn, b))
  return [item for item in a if fn(item) in _b]
```

```py
from math import floor
intersection_by([2.1, 1.2], [2.3, 3.4],floor) # [2.1]
```
[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

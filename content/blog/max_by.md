---
date: "2020-01-04"
description: ''
title: Python como usar o max_by
tags: math,list,function,beginner
---

Returns the maximum value of a list, after mapping each element to a value using the provided function.

Use `map()` with `fn` to map each element to a value using the provided function, use `max()` to return the maximum value.

```py
def max_by(lst, fn):
  return max(map(fn, lst))
```

```py
max_by([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], lambda v : v['n']) # 8
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

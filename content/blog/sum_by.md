---
date: "2020-01-04"
description: ''
title: Python como usar o sum_by
tags: math,list,function,beginner
---

Returns the sum of a list, after mapping each element to a value using the provided function.

Use `map()` with `fn` to map each element to a value using the provided function, use `sum()` to return the sum of the values.

```py
def sum_by(lst, fn):
  return sum(map(fn, lst))
```

```py
sum_by([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], lambda v : v['n']) # 20
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

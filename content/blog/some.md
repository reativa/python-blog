---
date: "2020-01-04"
description: ''
title: Python como usar o some
tags: list,function,intermediate
---

Returns `True` if the provided function returns `True` for at least one element in the list, `False` otherwise.

Use `any()` in combination with `map()` and `fn` to check if `fn` returns `True` for any element in the list.

```py
def some(lst, fn=lambda x: x):
  return any(map(fn, lst))
```

```py
some([0, 1, 2, 0], lambda x: x >= 2 ) # True
some([0, 0, 1, 0]) # True
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

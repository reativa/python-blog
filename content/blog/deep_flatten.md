---
date: "2020-01-04"
description: ''
title: Python como usar o deep_flatten
tags: list,recursion,intermediate
---

Deep flattens a list.

Use recursion. 
Use `isinstance()` with `collections.abc.Iterable` to check if an element is iterable.
If it is, apply `deep_flatten()` recursively, otherwise return `[lst]`.

```py
from collections.abc import Iterable

def deep_flatten(lst): 
  return [a for i in lst for a in deep_flatten(i)] if isinstance(lst, Iterable) else [lst]
```

```py
deep_flatten([1, [2], [[3], 4], 5]) # [1,2,3,4,5]
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

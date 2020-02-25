---
date: "2020-01-04"
description: ''
title: Python como usar o cast_list
tags: utility,list,beginner
---

Casts the provided value as a list if it's not one.

Use `isinstance()` to check if the given value is enumerable and return it by using `list()` or encapsulated in a list accordingly.

```py
def cast_list(val):
  return list(val) if isinstance(val, (tuple, list, set, dict)) else [val]
```

```py
cast_list('foo') # ['foo']
cast_list([1]) # [1]
cast_list(('foo', 'bar')) # ['foo', 'bar']
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

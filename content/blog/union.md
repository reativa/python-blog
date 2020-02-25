---
date: "2020-01-04"
description: ''
title: Python como usar o union
tags: list,beginner
---

Returns every element that exists in any of the two lists once.

Create a `set` with all values of `a` and `b` and convert to a `list`.

```py
def union(a, b):
  return list(set(a + b))
```

```py
union([1, 2, 3], [4, 3, 2]) # [1,2,3,4]
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

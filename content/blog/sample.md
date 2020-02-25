---
date: "2020-01-04"
description: ''
title: Python como usar o sample
tags: list,random,beginner
---

Returns a random element from a list.

Use `random.randint()` to generate a random number that corresponds to an index in the list, return the element at that index.

[`random.sample()`](https://docs.python.org/3/library/random.html#random.sample) provides similar functionality to this snippet.

```py
from random import randint

def sample(lst):
  return lst[randint(0, len(lst) - 1)]
```

```py
sample([3, 7, 9, 11]) # 9
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

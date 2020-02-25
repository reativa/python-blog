---
date: "2020-01-04"
description: ''
title: Python como usar o chunk
tags: list,intermediate
---

Chunks a list into smaller lists of a specified size.

Use `list()` and `range()` to create a list of the desired `size`.
Use `map()` on the list and fill it with splices of the given list.
Finally, return the created list.

```py
from math import ceil

def chunk(lst, size):
  return list(
    map(lambda x: lst[x * size:x * size + size],
      list(range(0, ceil(len(lst) / size)))))
```

```py
chunk([1, 2, 3, 4, 5], 2) # [[1,2],[3,4],5]
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

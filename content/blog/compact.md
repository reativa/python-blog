---
date: "2020-01-04"
description: ''
title: Python como usar o compact
tags: list,beginner
---

Removes falsey values from a list.

Use `filter()` to filter out falsey values (`False`, `None`, `0`, and `""`).

```py
def compact(lst):
  return list(filter(bool, lst))
```

```py
compact([0, 1, False, 2, '', 3, 'a', 's', 34]) # [ 1, 2, 3, 'a', 's', 34 ]
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

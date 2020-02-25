---
date: "2020-01-04"
description: ''
title: Python como usar o count_occurences
tags: list,beginner
---

Counts the occurrences of a value in a list.

Increment a counter for every item in the list that has the given value and is of the same type.

```py
def count_occurrences(lst, val):
  return len([x for x in lst if x == val and type(x) == type(val)])
```

```py
count_occurrences([1, 1, 2, 1, 2, 3], 1) # 3
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

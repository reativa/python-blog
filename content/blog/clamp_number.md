---
date: "2020-01-04"
description: ''
title: Python como usar o clamp_number
tags: math,beginner
---

Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.

If `num` falls within the range, return `num`. 
Otherwise, return the nearest number in the range.

```py
def clamp_number(num,a,b):
  return max(min(num, max(a, b)), min(a, b))
```

```py
clamp_number(2, 3, 5) # 3
clamp_number(1, -1, -5) # -1
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

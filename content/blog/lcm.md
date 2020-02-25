---
date: "2020-01-04"
description: ''
title: Python como usar o lcm 
tags: math,list,recursion,advanced 
---

Returns the least common multiple of a list of numbers.

Use `functools.reduce()`, `math.gcd()` and `lcm(x,y) = x * y / gcd(x,y)` over the given list.

```py
from functools import reduce
from math import gcd

def lcm(numbers):
  return reduce((lambda x, y: int(x * y / gcd(x, y))), numbers)
```

```py
lcm([12, 7]) # 84
lcm([1, 3, 4, 5]) # 60
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

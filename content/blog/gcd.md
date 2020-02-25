---
date: "2020-01-04"
description: ''
title: Python como usar o gcd
tags: math,beginner
---

Calculates the greatest common divisor of a list of numbers.

Use `functools.reduce()` and `math.gcd()` over the given list.

```py
from functools import reduce
from math import gcd

def gcd(numbers):
  return reduce(gcd, numbers)
```

```py
gcd([8, 36, 28]) # 4
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

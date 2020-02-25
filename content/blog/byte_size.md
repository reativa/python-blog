---
date: "2020-01-04"
description: ''
title: Python como usar o byte_size
tags: string, beginner
---

Returns the length of a string in bytes.

Use `s.encode('utf-8')` to encode the given string and return its length.

```py
def byte_size(s):
  return len(s.encode('utf-8'))
```

```py
byte_size('😀') # 4
byte_size('Hello World') # 11
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

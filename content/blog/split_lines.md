---
date: "2020-01-04"
description: ''
title: Python como usar o split_lines
tags: string,beginner
---

Splits a multiline string into a list of lines.

Use `s.split()` and `'\n'` to match line breaks and create a list.

[`str.splitlines()`](https://docs.python.org/3/library/stdtypes.html#str.splitlines) provides similar functionality to this snippet.

```py
def split_lines(s):
  return s.split('\n')
```

```py
split_lines('This\nis a\nmultiline\nstring.\n') # ['This', 'is a', 'multiline', 'string.' , '']
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

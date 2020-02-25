---
date: "2020-01-05"
description: ''
title: Python tudo sobre Style
tags: string,intermediate
--- 
=====

Naming
------

### Class

Bad

```python
class fooClass: ...
class foo_class: ...
```

Good

```python
class FooClass: ...
```

### Function

Bad

```python
def CapCamelCase(*a): ...
def mixCamelCase(*a): ...
```

Good

```python
def func_separated_by_underscores(*a): ...
```

### Variable

Bad

```python
FooVar = "CapWords"
fooVar = "mixedCase"
Foo_Var = "CapWords_With_Underscore"
```

Good

```python
# local variable
var = "lowercase"

# internal use
_var = "_single_leading_underscore"

# avoid conflicts with Python keyword
var_ = "single_trailing_underscore_"

# a class attribute (private use in class)
__var = " __double_leading_underscore"

# "magic" objects or attributes, ex: __init__
__name__

# throwaway variable, ex: _, v = (1, 2)
_ = "throwaway"
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

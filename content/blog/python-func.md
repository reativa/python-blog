---
date: "2020-01-05"
description: ''
title: Python tudo sobre Funções
tags: string,intermediate
--- 
========

A function can help programmers to wrap their logic into a task for
avoiding duplicate code. In Python, the definition of a function is so
versatile that we can use many features such as decorator, annotation,
docstrings, default arguments and so on to define a function. In this
cheat sheet, it collects many ways to define a function and demystifies
some enigmatic syntax in functions.

Document Functions
------------------

Documentation provides programmers hints about how a function is
supposed to be used. A docstring gives an expedient way to write a
readable document of functions. PEP
[257](https://www.python.org/dev/peps/pep-0257) defines some conventions
of docstrings. In order to avoid violating conventions, there are
several tools such as
[doctest](https://docs.python.org/3/library/doctest.html), or
[pydocstyle](https://github.com/PyCQA/pydocstyle) can help us check the
format of docstrings.

```python
>>> def example():
...   """This is an example function."""
...   print("Example function")
...
>>> example.__doc__
'This is an example function.'
>>> help(example)
```

Default Arguments
-----------------

Defining a function where the arguments are optional and have a default
value is quite simple in Python. We can just assign values in the
definition and make sure the default arguments appear in the end.

```python
>>> def add(a, b=0):
...     return a + b
...
>>> add(1)
1
>>> add(1, 2)
3
>>> add(1, b=2)
3
```

Option Arguments
----------------

```python
>>> def example(a, b=None, *args, **kwargs):
...     print(a, b)
...     print(args)
...     print(kwargs)
...
>>> example(1, "var", 2, 3, word="hello")
1 var
(2, 3)
{'word': 'hello'}
```

Unpack Arguments
----------------

```python
>>> def foo(a, b, c='BAZ'):
...     print(a, b, c)
...
>>> foo(*("FOO", "BAR"), **{"c": "baz"})
FOO BAR baz
```

Keyword-Only Arguments
----------------------

**New in Python 3.0**

```python
>>> def f(a, b, *, kw):
...     print(a, b, kw)
...
>>> f(1, 2, kw=3)
1 2 3
>>> f(1, 2, 3)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: f() takes 2 positional arguments but 3 were given
```

Annotations
-----------

**New in Python 3.0**

Annotations can be a useful way to give programmers hints about types of
arguments. The specification of this feature is on PEP
[3107](https://www.python.org/dev/peps/pep-3107/). Python 3.5 introduced
`typing` module to extend the concept of type hints. Moreover, from
version 3.6, Python started to offer a general way to define a variable
with an annotation. Further information can be found on PEP
[483](https://www.python.org/dev/peps/pep-0483), PEP
[484](https://www.python.org/dev/peps/pep-0484), and PEP
[526](https://www.python.org/dev/peps/pep-0526).

```python
>>> def fib(n: int) -> int:
...     a, b = 0, 1
...     for _ in range(n):
...         b, a = a + b, b
...     return a
...
>>> fib(10)
55
>>> fib.__annotations__
{'n': <class 'int'>, 'return': <class 'int'>}
```

Callable
--------

In some cases such as passing a callback function, we need to check
whether an object is callable or not. The built-in function, `callable`,
assist us to avoid raising a `TypeError` if the object is not callable.

```python
>>> a = 10
>>> def fun():
...   print("I am callable")
...
>>> callable(a)
False
>>> callable(fun)
True
```

Get Function Name
-----------------

```python
>>> def example_function():
...   pass
...
>>> example_function.__name__
'example_function'
```

Lambda
------

Sometimes, we don't want to use the *def* statement to define a short
callback function. We can use a `lambda` expression as a shortcut to
define an anonymous or an inline function instead. However, only one
single expression can be specified in `lambda`. That is, no other
features such as multi-line statements, conditions, or exception
handling can be contained.

```python
>>> fn = lambda x: x**2
>>> fn(3)
9
>>> (lambda x: x**2)(3)
9
>>> (lambda x: [x*_ for _ in range(5)])(2)
[0, 2, 4, 6, 8]
>>> (lambda x: x if x>3 else 3)(5)
5
```

Generator
---------

```python
>>> def fib(n):
...     a, b = 0, 1
...     for _ in range(n):
...         yield a
...         b, a = a + b, b
...
>>> [f for f in fib(10)]
[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

Decorator
---------

**New in Python 2.4**

-   PEP [318](https://www.python.org/dev/peps/pep-0318/) - Decorators
    for Functions and Methods

```python
>>> from functools import wraps
>>> def decorator(func):
...     @wraps(func)
...     def wrapper(*args, **kwargs):
...         print("Before calling {}.".format(func.__name__))
...         ret = func(*args, **kwargs)
...         print("After calling {}.".format(func.__name__))
...         return ret
...     return wrapper
...
>>> @decorator
... def example():
...     print("Inside example function.")
...
>>> example()
Before calling example.
Inside example function.
After calling example.
```

Equals to

```python
... def example():
...     print("Inside example function.")
...
>>> example = decorator(example)
>>> example()
Before calling example.
Inside example function.
After calling example.
```

Decorator with Arguments
------------------------

```python
>>> from functools import wraps
>>> def decorator_with_argument(val):
...     def decorator(func):
...         @wraps(func)
...         def wrapper(*args, **kwargs):
...             print("Val is {0}".format(val))
...             return func(*args, **kwargs)
...         return wrapper
...     return decorator
...
>>> @decorator_with_argument(10)
... def example():
...     print("This is example function.")
...
>>> example()
Val is 10
This is example function.
```

Equals to

```python
>>> def example():
...     print("This is example function.")
...
>>> example = decorator_with_argument(10)(example)
>>> example()
Val is 10
This is example function.
```

Cache
-----

**New in Python 3.2**

Without Cache

```python
>>> import time
>>> def fib(n):
...     if n < 2:
...         return n
...     return fib(n - 1) + fib(n - 2)
...
>>> s = time.time(); _ = fib(32); e = time.time(); e - s
1.1562161445617676
```

With Cache (dynamic programming)

```python
>>> from functools import lru_cache
>>> @lru_cache(maxsize=None)
... def fib(n):
...     if n < 2:
...         return n
...     return fib(n - 1) + fib(n - 2)
...
>>> s = time.time(); _ = fib(32); e = time.time(); e - s
2.9087066650390625e-05
>>> fib.cache_info()
CacheInfo(hits=30, misses=33, maxsize=None, currsize=33)
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

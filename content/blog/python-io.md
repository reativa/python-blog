---
date: "2020-01-05"
description: ''
title: Python tudo sobre Arquivos e I/O
tags: string,intermediate
--- 
=============

Read a File
-----------

In Python 2, the content of the file which read from file system does
not decode. That is, the content of the file is a byte string, not a
Unicode string.

```python
>>> with open("/etc/passwd") as f:
...    content = f.read()
>>> print(type(content))
<type 'str'>
>>> print(type(content.decode("utf-8")))
<type 'unicode'>
```

In Python 3,
[open](https://docs.python.org/3/library/functions.html#open) provides
`encoding` option. If files do not open in binary mode, the encoding
will be determined by `locale.getpreferredencoding(False)` or user's
input.

```python
>>> with open("/etc/hosts", encoding="utf-8") as f:
...     content = f.read()
...
>>> print(type(content))
<class 'str'>
```

Binary mode

```python
>>> with open("/etc/hosts", "rb") as f:
...     content = f.read()
...
>>> print(type(content))
<class 'bytes'>
```

Readline
--------

```python
>>> with open("/etc/hosts") as f:
...     for line in f:
...         print(line, end='')
...
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
```

Reading File Chunks
-------------------

```python
>>> chunk_size = 16
>>> content = ''
>>> with open('/etc/hosts') as f:
...     for c in iter(lambda: f.read(chunk_size), ''):
...         content += c
...
>>> print(content)
127.0.0.1       localhost
255.255.255.255 broadcasthost
::1             localhost
```

Write a File
------------

```python
>>> content = "Awesome Python!"
>>> with open("foo.txt", "w") as f:
...     f.write(content)
```

Create a Symbolic Link
----------------------

```python
>>> import os
>>> os.symlink("foo", "bar")
>>> os.readlink("bar")
'foo'
```

Copy a File
-----------

```python
>>> from distutils.file_util import copy_file
>>> copy_file("foo", "bar")
('bar', 1)
```

Move a File
-----------

```python
>>> from distutils.file_util import move_file
>>> move_file("./foo", "./bar")
'./bar'
```

List a Directory
----------------

```python
>>> >>> import os
>>> dirs = os.listdir(".")
```

After Python 3.6, we can use `os.scandir` to list a directory. It is
more convenient because `os.scandir` return an iterator of `os.DirEntry`
objects. In this case, we can get file information through access the
attributes of `os.DirEntry`. Further information can be found on the
[document](https://docs.python.org/3/library/os.html#os.scandir).

```python
>>> with os.scandir("foo") as it:
...     for entry in it:
...         st = entry.stat()
...
```

Create Directories
------------------

Similar to `mkdir -p /path/to/dest`

```python
>>> from distutils.dir_util import mkpath
>>> mkpath("foo/bar/baz")
['foo', 'foo/bar', 'foo/bar/baz']
```

Copy a Directory
----------------

```python
>>> from distutils.dir_util import copy_tree
>>> copy_tree("foo", "bar")
['bar/baz']
```

Remove a Directory
------------------

```python
>>> from distutils.dir_util import remove_tree
>>> remove_tree("dir")
```

Path Join
---------

```python
>>> from pathlib import Path
>>> p = Path("/Users")
>>> p = p / "Guido" / "pysheeet"
>>> p
PosixPath('/Users/Guido/pysheeet')
```

Get Absolute Path
-----------------

```python
>>> from pathlib import Path
>>> p = Path("README.rst")
PosixPath('/Users/Guido/pysheeet/README.rst')
```

Get Home Directory
------------------

```python
>>> from pathlib import Path
>>> Path.home()
PosixPath('/Users/Guido')
```

Get Current Directory
---------------------

```python
>>> from pathlib import Path
>>> p = Path("README.rst")
>>> p.cwd()
PosixPath('/Users/Guido/pysheeet')
```

Get Path Properties
-------------------

```python
>>> from pathlib import Path
>>> p = Path("README.rst").absolute()
>>> p.root
'/'
>>> p.anchor
'/'
>>> p.parent
PosixPath('/Users/Guido/pysheeet')
>>> p.parent.parent
PosixPath('/Users/Guido')
>>> p.name
'README.rst'
>>> p.suffix
'.rst'
>>> p.stem
'README'
>>> p.as_uri()
'file:///Users/Guido/pysheeet/README.rst'
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

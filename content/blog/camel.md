---
date: "2020-01-04"
description: ''
title: Python como usar o camel
tags: string,regexp,intermediate
---

Converts a string to camelcase.

Use `re.sub()` to replace any `-` or `_` with a space, using the regexp `r"(_|-)+"`.
Use `title()` to capitalize the first letter of each word convert the rest to lowercase.
Finally, use `replace()` to remove spaces between words.

```py
from re import sub

def camel(s):
  s = sub(r"(_|-)+", " ", s).title().replace(" ", "")
  return s[0].lower() + s[1:]
```

```py
camel('some_database_field_name') # 'someDatabaseFieldName'
camel('Some label that needs to be camelized') # 'someLabelThatNeedsToBeCamelized'
camel('some-javascript-property') # 'someJavascriptProperty'
camel('some-mixed_string with spaces_underscores-and-hyphens') # 'someMixedStringWithSpacesUnderscoresAndHyphens'
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

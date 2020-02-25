---
date: "2020-01-05"
description: ''
title: Python tudo sobre SSH Secure Shell
tags: string,intermediate
--- 
============

Login ssh
---------

```python
# ssh me@localhost "uname"

from paramiko.client import SSHClient
with SSHClient() as ssh:
    ssh.connect("localhost", username="me", password="pwd")
    stdin, stdout, stderr = ssh.exec_command("uname")
    print(stdout.read())
```

```python
# ssh -p 2222 me@localhost "uname"

from paramiko.client import SSHClient
with SSHClient() as ssh:
    ssh.connect("localhost", 2222, username="me", password="pwd")
    stdin, stdout, stderr = ssh.exec_command("uname")
    print(stdout.read())
```

```python
# ignore known hosts
# ssh -o StrictHostKeyChecking=no \
#     -o UserKnownHostsFile=/dev/null \
#     me@localhost "uname"

import paramiko
from paramiko.client import SSHClient
with SSHClient() as ssh:
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect("localhost", username="me", password="pwd")
    stdin, stdout, stderr = ssh.exec_command("uname")
    print(stdout.read())
```

```python
# ssh-keygen -f key -m pem -t rsa
# ssh-copy-id -i key me@localhost
# ssh -i key me@localhost "uname"

with SSHClient() as ssh:
    ssh.connect('localhost', username="me", key_filename="key")
    stdin, stdout, stderr = ssh.exec_command("uname")
    print(stdout.read())
```

```python
# ssh-keygen -m pem -f key -t rsa -P passphrase
# eval $(ssh-agent)
# ssh-add key
# ssh -i key me@localhost
```

[Acesse a Referência original 1:](https://www.pythonsheets.com/)
[Acesse a Referência original 2:](https://www.pythoncheatsheet.org/)

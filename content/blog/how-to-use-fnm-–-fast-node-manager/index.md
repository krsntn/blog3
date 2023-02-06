---
title: How to Use fnm (Fast Node Manager)
date: 2023-02-06T04:29:45.284Z
description: fnm (Fast Node Manager), a Node version manager
---
### Listing all remote versions
```
fnm ls-remote
```

### Listing all installed ones
```
fnm ls
```

### Installing
```
fnm install <version>
```

### Uninstalling
```
fnm uninstall <version>
```

### Installing node of the latest LTS version
```
fnm install --lts
```

### Setting an alias
```
fnm alias <version> <name>
```

### Removing an alias
```
fnm unalias <name>
```

### Shortcut for setting 'default' as an alias
```
fnm default <version>
```

### Using a Node of a particular version
```
fnm use <version>
```

### Displaying the version of currently used Node
```
fnm current
```
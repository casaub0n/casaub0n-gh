# My GitHub Pages
[casaub0n.github.io](https://casaub0n.github.io/)

## TODO
- [ ] CI deploy

## How to develop
- `yarn watch`: start dev server(localhost:10000)

### When the below error message
```console
Error: ENOSPC: System limit for number of file watchers reached, watch 'hoge/casaub0n-gh/casaub0n.github.io'
```

### How to Fix
1. `cat /proc/sys/fs/inotify/max_user_watches`
1. `sudo sysctl fs.inotify.max_user_watches=524288`
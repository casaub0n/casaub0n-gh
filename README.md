# My GitHub Pages
[![Netlify Status](https://api.netlify.com/api/v1/badges/24bacd28-8b9b-4356-8958-5d0385dc6a37/deploy-status)](https://app.netlify.com/sites/casaub0n/deploys)
[casaub0n.netlify.com](https://casaub0n.netlify.com/)

## TODO
- [X] CI deploy

## How to develop
- `yarn start`

## Fix this error
```console
Error: ENOSPC: System limit for number of file watchers reached, watch 'hoge/casaub0n-gh/casaub0n.github.io'
```

### How to Fix
1. `cat /proc/sys/fs/inotify/max_user_watches`
1. `sudo sysctl fs.inotify.max_user_watches=524288`
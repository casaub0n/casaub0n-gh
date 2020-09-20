# My GitHub Pages
[https://casaub0n-gh.vercel.app/](https://casaub0n-gh.vercel.app/)

## How to develop
- `yarn install`
- `yarn dev`

## How to production build
- `yarn build`
- `yarn start`

## How to deploy
```console
# first time
$ yarn vercel login
$ yarn vercel
```

## Fix this error
```console
Error: ENOSPC: System limit for number of file watchers reached, watch 'hoge/casaub0n-gh/casaub0n.github.io'
```

### How to Fix
1. `cat /proc/sys/fs/inotify/max_user_watches`
1. `sudo sysctl fs.inotify.max_user_watches=524288`

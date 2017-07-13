
# Dev How-to

1. ask grace add your ssh pub key into git repository so that you have access
2. git clone
3. cd into repository

```
> npm install
> npm start
```
after compile successfully, then in browser type: localhost:8000

# Prod release

1. ssh into hosting server, now it's digit ocean
2. $sudo su - app, (PWD: flo)
3. cd into the code location /var/www/flography.com/flo-web

```
> git pull
> npm install
> npm run dist
```
then webpack build all src files into /dist dir, where the app is pointed by nginx

# Useful Tips

## Ngnix
1. ngnix config is under /etc/nginx/site-available/flography.com

restart after changes
```
> service nginx restart
```

## node, npm, webpack, etc
1. current node version on server is 7.x, but on dev, 8.x is competible
2. highly recommend install node on ubuntu by [PPA](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
3. when npm run dist report module not found error, try to rm -rf node_modules, then > npm install


# Authors
* **Grace, Loyd** - *Initial work* -

#!/bin/bash

cp index.html index.bak.html
cp asset-manifest.json asset-manifest.bak.json
cp manifest.json manifest.bak.json
source ~/.bashrc
yarn --nomap --cwd ~/work/app.deri.finance build 
cp -R /Users/lihaidong/work/app.deri.finance/build/* ./
git checkout main
git pull origin main
git add .
git commit -m 'release'
read -r -p  "execute git push?[Y/n]" input
case $input in
    [yY][eE][sS]|[yY])
echo "git push origin main"
git push origin main
break
 ;;
     [nN][oO]|[nN])
 echo "No"
 break
        ;;
     *)
 echo "Invalid input..."
 ;;
 esac

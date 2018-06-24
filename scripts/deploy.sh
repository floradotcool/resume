#! /bin/bash

source ~/.nvm/nvm.sh

cd ~/Deployment

rm -rf resume

git clone git@github.com:ncpierson/resume.git

cd resume

yarn

yarn build

cp -R build/* /var/www/resume.nick.exposed

#!/usr/bin/env bash
IFS=$'\n'

cd ..
# rm -rf .git
# git init

rm -rf files/*

cd ./src

for DATE in $(./get-dates.js);
do
    ./write-to-file.js
    git add ..
    git commit -m "commit for ${DATE}" --quiet
    git commit --amend --date="${DATE}" --no-edit --quiet
  
done
git push --force 
# git remote add origin git@github.com:scottglenblanch/judging-green-is-so-dumb-for-real.git
# git push --force --set-upstream origin main

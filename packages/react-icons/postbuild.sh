#! /bin/sh

cp -p package.json ./*.md dist &&
for f in `ls *.md`; do cp -p $f dist; done &&
perl -i -pe 's#dist/index#index#' dist/package.json
perl -i -pe 's#dist/module/index#module/index#' dist/package.json

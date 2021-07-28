#! /bin/sh

cp -p package.json ./*.md dist &&
perl -i -pe 's#dist/index#index#' dist/package.json

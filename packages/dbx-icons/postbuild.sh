#! /bin/sh

cp -p package.json ./*.md icon.scss dist &&
perl -i -pe 's#dist/index#index#' dist/package.json

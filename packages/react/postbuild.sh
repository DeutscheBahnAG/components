#! /bin/bash

cp -p package.json dist &&
for f in `ls *.md`; do cp -p $f dist; done &&
for f in `ls src/*.d.ts`; do cp -p $f dist; done &&
for f in `ls src/*/README.md`; do cp -p $f ${f/src/dist}; done &&
perl -i -pe 's#dist/index#index#' dist/package.json
perl -i -pe 's#dist/module/index#module/index#' dist/package.json

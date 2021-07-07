#! /bin/sh

cp -p package.json ./*.md dist &&
copyfiles -f './**/*.scss' dist &&
perl -i -pe 's#theme/theme.scss#theme.scss#' dist/global.scss &&
perl -i -pe 's#dist/index#index#' dist/package.json

#!/usr/bin/env node

// parameter file names auslesen und für alle async funktion ausführen, wenn eine failed, nicht abbrechen
// funktion: bekommt file path,
// checkt ob .tsx file ist
// holt parent ordner
// sucht readme.md
// sucht start und end marker in readme
// wenn vorhanden:
// führt react-docgen typescript aus
// nimmt json und baut damit eine Table
// ersetzt inhalt von start und end marker in Readme
// speichert Readme
// git add

const processFile = (path) => {
  console.log(path);
};

const filePaths = process.argv.slice(2);

for (const path of filePaths) {
  processFile(path);
}

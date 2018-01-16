# Simple video player avec React.

##Installation
Veiller a installer [Selenium](http://selenium-release.storage.googleapis.com/index.html) et [Chrome Driver](https://sites.google.com/a/chromium.org/chromedriver/downloads) dans le repertoire `bin` pour pouvoir lancer les tests end2end.

## Commandes
* `npm run build` pour lancer le bundling (Webpack). Les fichiers vont de `source/*.jsx` vers `public/js/bundle.js`.
* `npm run test` pour lancer le(s) test(s) Jest.
* `npm run test-e2e` pour lancer le(s) test(s) Nightwatch.

## A faire pour le deploiement
Sur les serveurs de prod, il faudrait servir les fichiers client depuis le repertoire `public`. Le reste sera invisible pour l'exterieur.

Au niveau bundling, la version actuelle est ok pour HTTP/1 (un seul fichier JS), mais il faudrait voir a faire aussi une version HTTP/2 qui delivre les fichiers non-bundlés. Penser aussi a configurer le versioning des fichiers client (en environnement de prod) pour gerer le cache correctement.


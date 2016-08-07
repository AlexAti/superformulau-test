# superformulau-test

A quick test of clojurescript, reagent, reframe, and d3.

It shows a Superformula-U (a generalization of the [superformula](https://en.wikipedia.org/wiki/Superformula) and lets you play with its parameters.

You can check it out [here](https://alexati.github.io/superformulau-test/), or fork the repo and:

```
lein figwheel
open http://localhost:3449
```

## A comment about the github pages deployment

Basically, I found this superb post: https://help.github.com/articles/creating-project-pages-manually/ . It goes into further detail, but basically:

```
lein clean
lein cljsbuild once min
git checkout --orphan gh-pages
git rm -rf .
git add index.html js/ css/
git commit -m "Added the resources/public contents..."
git push github gh-pages
open https://alexati.github.io/superformulau-test/
```

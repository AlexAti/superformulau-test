# superformulau-test

A quick test of clojurescript, reagent, reframe, and d3.

It shows a Superformula-U (a generalization of the [superformula](https://en.wikipedia.org/wiki/Superformula)) and lets you play with its parameters.

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
git checkout --orphan gh-pages # Github searches for an orphan gh-pages branch
git rm -rf .
git add index.html js/ css/
git commit -m "Added the resources/public contents..."
git push github gh-pages # Aaand done!
open https://alexati.github.io/superformulau-test/
```

## TO DOs
- Slider panel
  - Make sliders logarithmic
  - Add a big viewer for the selected one on the panel
  - Sort sliders and separate pos and hue from params
  - Fix sliders so they dont jump
  - add a copy svg / download svg option
- Creature
  - see if line jump is an error and then fix
  - Is there a glitch that makes huge stars?
  - enhance color palette
  - Center sliders around interesting values
- Creature pool
  - Fix the area function, as a radio average does not work
  - Make size wobble a little as if there was movement in z index - make alpha move at the same time
  - Add brownian movement
  - Stop brownian movement on mouseover
  - Add small points that move for aesthetics
- Other
  - Display a brief of the formula
  - Maybe: change project name? add more creature formulas?
  - Update readme
  - Publish and finish

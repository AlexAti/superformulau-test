(ns superformulau-test.views
    (:require [re-frame.core :as re-frame]
              [reagent.core :as reagent]
              [cljsjs.d3]))

(defn slider [name creature [min max] val]
  [:div
   [:label {:for name}
    (str "Value for " name " is (" val "):")]
   [:input {:type "range"
            :name name
            :on-change #(re-frame/dispatch [:set-sfu-key
                                            creature
                                            (keyword name)
                                            (-> % .-target .-value)])
            :min min
            :value val
            :step (/ (- max min) 1000)
            :max max}]])

(defn closing-button []
  [:a.closing-button {:on-click #(re-frame/dispatch [:goto-status :general])}
   "✖"])

(defn slider-panel []
  (let [creatures (re-frame/subscribe [:creature-list])
        selected-creature (re-frame/subscribe [:creature-change])]
    (fn []
      [:div.panel
       [closing-button]
       [:p (str "You have selected creature #" @selected-creature)]
       [:a {:on-click #(re-frame/dispatch [:goto-status :explanation])}
           "More info on the superformula-u..."]
       (into [:form]
             (for [k (keys (first @creatures))]
               [slider
                (subs (str k) 1)
                @selected-creature
                [-10 10]
                (k (nth @creatures @selected-creature))]))])))

(defn explanation-panel []
  [:div.panel
   [closing-button]
   [:h2 "A brief explanation of the Superformula-U"]
   [:p [:a {:href "https://en.wikipedia.org/wiki/Superformula"} "According to Wikipedia,"]
       " around 2000, Johan Gielis published (and patented) the following formula:"]
   [:p "$$r(\\varphi) = \\left (\\left |\\frac{cos(\\frac{m_1\\varphi}{4})}{a}\\right |^{n_2} + \\left |\\frac{sin(\\frac{m_2\\varphi}{4})}{b}\\right |^{n_3}\\right )^{-\\frac{1}{n_1}}$$"]
   [:p "In April 7, 2004, Uwe Stöhr published "
        [:a {:href "http://fkurth.de/uwest/usti/Superformel/SuperformulaU.pdf"} "a generalization of the Superformula"]
        ", which he titled SuperformulaU:"]
   [:p "$$r(\\varphi) = \\left (\\left |\\frac{cos(\\frac{y\\varphi}{4})}{a}\\right |^{n_2} + \\left |\\frac{sin(\\frac{z\\varphi}{4})}{b}\\right |^{n_3}\\right )^{-\\frac{1}{n_1}} $$"]
   [:p "From what I understand, the latter one does not hold a patent, and, being just a mathematical formula, we can all play with it. "
       "(But who knows for sure, these days legality is a weird area.)"]
   [:p "This page implements the latter one thousands of times, so you can get a feeling of the variety of patterns that these family of formulas can generate. "
       "Clicking on any 'creature', you can navigate and fine-tune the parameters that create that specific instance, and save them for your use in any other "
       "applications, such as for example games, art, or UX design."]
   [:p "I hope you like it! Please do tell me if you find it interesting."]])

(defn about-panel []
  [:div.panel
   [closing-button]
   [:h2 "About this site"]
   [:p "Initially this was a quick test of how to use D3 inside a clojurescript re-frame application. "
       "I found the wikipedia page for the superformula and it seemed a fun way to test it. "
       "But over a couple of days, the organic look of the superformula gave way to this idea, and "
       "as it seemed a fun experiment, I evolved it a little bit more."]
   [:p "So now the superformula is alive, and you can use this sort of petri dish to explore interesting "
       "parameters for the applications (games, graphics, etc.) that you may want to build."]
   [:p "You can also explore the source code and fork it as you please. In that case, please ping me "
       "so I can know that you found this experiment interesting! I can also link to your creations if "
       "you like."]])

(defn superformulau-radium [angle [a b y z n1 n2 n3]]
  (Math.pow
    (+ (Math.pow (Math.abs (/ (Math.cos (* y angle (/ 1 4))) a)) n2)
       (Math.pow (Math.abs (/ (Math.sin (* z angle (/ 1 4))) b)) n3))
    (- (/ 1 n1))))

(defn polar-to-cartesian [[angle radium]]
  "(polar-to-cartesian point) returns a [x y] point from an [a r] one."
  [(* radium (Math.cos angle))
   (* radium (Math.sin angle))])

(defn z-pos-correction [z]
  "0-based percentage correction factor for objects far or near.
   A z value in [-2000 2000] gets a [0.5 2.0] correction."
  (let [sizescale [-2000 2000] ; 0-centered z position reference coord-scale as source
        targetscale [0.5 2.0] ; 1-centered target %-scale.
        factor (* 0.5 (apply + ; To fix: This average is a hack, doesn't really work with [0.5 2.0] as it is not centered on 1 as [0.8 1.2]
                        (map #(apply / %)
                             (partition 2
                               (interleave
                                 sizescale
                                 (map dec targetscale))))))]
    (+ 1 (/ z factor))))

(defn sfu-figure
  "Returns a superformulaU based figure. Parameters for the function are:
   - [Mandatory] size: The radium of the base circle.
   - [Optional] position: An [x y] vector. (0,0) if not provided.
   - [Optional] resolution: The number of defining points. 64 if not provided.
   - [Optional] params: A vector of 7 params that define the figure. Random if not provided."
  ([size]
   (sfu-figure size [0 0 0]))
  ([size position]
   (sfu-figure size position 64))
  ([size position resolution]
   (sfu-figure size position resolution (take 7 (repeatedly rand))))
  ([size [x y z] resolution params]
   (let [pi2 (* 2 Math.PI)
         steps (range 0 pi2 (/ pi2 resolution))
         radiums (map #(superformulau-radium % params) steps)
         mean-radium (/ (apply + radiums) (count radiums))
         scaled-radiums (map #(* %
                                 (z-pos-correction z)
                                 (/ size mean-radium))
                             radiums)
         polarcoords (partition 2 (interleave steps scaled-radiums))]
    ;      coords (map polar-to-cartesian polarcoords)]
    ;  (map (fn [[i j]] [(+ x i)
    ;                    (+ y j)])
    ;       coords)
    ;; NOTE: Trnsalation doesnt work for polarcoords in radialLine
    ;; (see https://github.com/d3/d3-shape#lines)
     polarcoords)))

(defn sfu-paint [values [x y z] index]
  (let [hue (:hue values)
        valuevec (map values [:a :b :y :z :n1 :n2 :n3]) ; to ensure proper param order
        d3values (clj->js [(sfu-figure 15 [x y z] 128 valuevec)])
        base-selection (.. js/d3
                           (selectAll "svg.sfu")
                           (selectAll "g")
                           (filter (fn [d i] (= i index)))
                           (select "g")
                           (data d3values))
        opacity (min 1 (* 0.25 (z-pos-correction z)))
        corrected-stroke-width (int (* 4 (z-pos-correction z)))
        blur-level (int (- 10 (* 5 (z-pos-correction z))))]

    ; Enter method
    (.. base-selection
        enter
        (append "svg:g")
        (on "click" #(re-frame/dispatch [:select-creature index]))
        (attr "transform" (str "translate(" x "," y ")"))
        (append "svg:path")
        (attr "d" (.radialLine js/d3))
        (style "stroke" (str "hsla(" hue ", 100%, 50%, 0.5)"))
        (style "stroke-width" corrected-stroke-width)
        (style "fill" (str "hsla(" (mod (+ hue 40) 360) ", 100%, 50%, " opacity ")"))
        (attr "filter" (str "url(#blurFilter" blur-level ")")))

    ; Update method
    (.. base-selection
        (select "path")
        (attr "d" (.radialLine js/d3))
        (style "stroke" (str "hsla(" hue ", 100%, 50%, 0.5)"))
        (style "stroke-width" corrected-stroke-width)
        (style "fill" (str "hsla(" (mod (+ hue 40) 360) ", 100%, 50%, " opacity ")"))
        (attr "filter" (str "url(#blurFilter" blur-level ")")))

    ; Exit method
    (.. base-selection
        exit
        (remove))))

(defn sfu-comp [values position index]
  (reagent/create-class
    {:display-name "SuperformulaU component"
     :reagent-render (fn [] [:g])
     :component-did-mount #(sfu-paint values position index)
     :component-did-update #(let [[_ vals] (reagent/argv %)] (sfu-paint vals position index))}))

(defn svg-defs-section []
  (into
    [:defs]
    (for [i (range 1 11)]
      ^{:key (str "filter" i)}
      [:filter {:id (str "blurFilter" i)}
       [:feGaussianBlur {:in "SourceGraphic" :stdDeviation (/ i 5)}]])))

(defn main-panel []
  (let [list (re-frame/subscribe [:creature-list])
        status (re-frame/subscribe [:status])]
    (fn []
      [:div
        [:div.header
         [:div.column
          [:h1 "Superformula-U Test"]
          [:p "You can click on a random creature, if you like to."]]
         [:div.column
          [:p
           [:a {:on-click #(re-frame/dispatch [:toggle-status :explanation])}
            "About the SuperformulaU"]]
          [:p
           [:a {:on-click #(re-frame/dispatch [:toggle-status :about])}
            "About this site"]]
          [:p
           [:a {:href "https://github.com/AlexAti/superformulau-test"}
            "Check the Github repo"]]]]
        (case @status
           :highlighted [slider-panel]
           :explanation (do (re-frame/dispatch [:rerender-mathjax])
                            [explanation-panel])
           :about       [about-panel]
           nil)
        [:svg.sfu
         [svg-defs-section]
         (for [[i c] (partition 2 (interleave (range) @list))]
           ^{:key i} [sfu-comp c (:pos c) i])]])))

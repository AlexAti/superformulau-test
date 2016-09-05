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

(defn slider-panel []
  (let [creatures (re-frame/subscribe [:creature-list])
        selected-creature (re-frame/subscribe [:creature-change])]
    (fn []
      [:div.slider-panel
       [:p (str "You have selected creature #" @selected-creature)]
       (into [:form]
             (for [k (keys (first @creatures))]
               [slider
                (subs (str k) 1)
                @selected-creature
                [-10 10]
                (k (nth @creatures @selected-creature))]))])))

(defn superformulau-radium [angle [a b y z n1 n2 n3]]
  (Math.pow
    (+ (Math.pow (Math.abs (/ (Math.cos (* y angle (/ 1 4))) a)) n2)
       (Math.pow (Math.abs (/ (Math.sin (* z angle (/ 1 4))) b)) n3))
    (- (/ 1 n1))))

(defn polar-to-cartesian [[angle radium]]
  "(polar-to-cartesian point) returns a [x y] point from an [a r] one."
  [(* radium (Math.cos angle))
   (* radium (Math.sin angle))])

(defn sfu-figure
  "Returns a superformulaU based figure. Parameters for the function are:
   - [Mandatory] size: The radium of the base circle.
   - [Optional] position: An [x y] vector. (0,0) if not provided.
   - [Optional] resolution: The number of defining points. 64 if not provided.
   - [Optional] params: A vector of 7 params that define the figure. Random if not provided."
  ([size]
   (sfu-figure size [0 0]))
  ([size position]
   (sfu-figure size position 64))
  ([size position resolution]
   (sfu-figure size position resolution (take 7 (repeatedly rand))))
  ([size [x y] resolution params]
   (let [pi2 (* 2 Math.PI)
         steps (range 0 pi2 (/ pi2 resolution))
         radiums (map #(superformulau-radium % params) steps)
         mean-radium (/ (apply + radiums) (count radiums))
         scaled-radiums (map #(* % (/ size mean-radium)) radiums)
         polarcoords (partition 2 (interleave steps scaled-radiums))]
    ;      coords (map polar-to-cartesian polarcoords)]
    ;  (map (fn [[i j]] [(+ x i)
    ;                    (+ y j)])
    ;       coords)
    ;; NOTE: Trnsalation doesnt work for polarcoords in radialLine
    ;; (see https://github.com/d3/d3-shape#lines)
     polarcoords)))

(defn sfu-paint [values [x y] index]
  (let [hue (:hue values)
        valuevec (map values [:a :b :y :z :n1 :n2 :n3]) ; to ensure proper param order
        d3values (clj->js [(sfu-figure 30 [x y] 128 valuevec)])]
    ; Enter method
    (.. js/d3
        (selectAll "svg.sfu")
        (filter (fn [d i] (= i index)))
        (selectAll "g")
        (data d3values)
        enter
        (append "svg:g")
        (attr "transform" (str "translate(" x "," y ")"))
        (append "svg:path")
        (attr "d" (.radialLine js/d3))
        (style "stroke" (str "hsla(" hue ", 100%, 50%, 0.5)"))
        (style "fill" (str "hsla(" (mod (+ hue 40) 360) ", 100%, 50%, 1.0)")))

    ; Update method
    (.. js/d3
        (selectAll "svg.sfu")
        (filter (fn [d i] (= i index)))
        (selectAll "g")
        (data d3values)
        (select "path")
        (attr "d" (.radialLine js/d3))
        (style "stroke" (str "hsla(" hue ", 100%, 50%, 0.5)"))
        (style "fill" (str "hsla(" (mod (+ hue 40) 360) ", 100%, 50%, 1.0)")))

    ; Exit method
    (.. js/d3
        (selectAll "svg.sfu")
        (filter (fn [d i] (= i index)))
        (selectAll "g")
        (data d3values)
        exit
        (remove))))

(defn sfu-comp [values position index]
  (reagent/create-class
    {:display-name "SuperformulaU component"
     :reagent-render (fn [] [:svg.sfu])
     :component-did-mount #(sfu-paint values position index)
     :component-did-update #(let [[_ vals] (reagent/argv %)] (sfu-paint vals position index))}))

(defn main-panel []
  (let [list (re-frame/subscribe [:creature-list])]
    (fn []
      [:div
        [:h3 "Superformula-U Test"]
        (for [[i c] (partition 2 (interleave (range) @list))]
          ^{:key i} [sfu-comp c (:pos c) i])
        [slider-panel]])))

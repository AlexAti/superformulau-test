(ns superformulau-test.views
    (:require [re-frame.core :as re-frame]
              [reagent.core :as reagent]
              [cljsjs.d3]))

(defn slider [name [min max] val]
  [:div
   [:label {:for name}
    (str "Value for " name " is (" val "):")]
   [:input {:type "range"
            :name name
            :on-change #(re-frame/dispatch [:set-sfu-key
                                            (symbol (str ":" name))
                                            (-> % .-target .-value)])
            :min min
            :value val
            :max max}]])

(defn slider-panel []
  (let [sfu-values (re-frame/subscribe [:sfu-values])]
    (fn []
      [:div.slider-panel
       (into [:form]
             (for [k (keys @sfu-values)]
               [slider
                (subs (str k) 1)
                [-100 100]
                (k @sfu-values)]))])))

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
         radiums (map #(* size (superformulau-radium % params)) steps)
         polarcoords (partition 2 (interleave steps radiums))]
    ;      coords (map polar-to-cartesian polarcoords)]
    ;  (map (fn [[i j]] [(+ x i)
    ;                    (+ y j)])
    ;       coords)
    ;; NOTE: Trnsalation doesnt work for polarcoords in radialLine
    ;; (see https://github.com/d3/d3-shape#lines)
     polarcoords)))

(defn sfu-paint [values position]
  (let [valuevec (map values [:a :b :y :z :n1 :n2 :n3]) ; to ensure proper param order
        d3values (clj->js [(sfu-figure 30 position 128 valuevec)])]
    ; Enter method
    (.. js/d3
        (select "svg.sfu")
        (selectAll "path")
        (data d3values)
        enter
        (append "svg:path")
        (attr "d" (.radialLine js/d3)))

    ; Update method
    (.. js/d3
        (select "svg.sfu")
        (selectAll "path")
        (data d3values)
        (attr "d" (.radialLine js/d3)))

    ; Exit method
    (.. js/d3
        (select "svg.sfu")
        (selectAll "path")
        (data d3values)
        exit
        (remove))))

(defn sfu-comp [values position]
  (reagent/create-class
    {:display-name "SuperformulaU component"
     :reagent-render (fn [] [:svg.sfu])
     :component-did-mount #(sfu-paint values position)
     :component-did-update #(let [[_ values] (reagent/argv %)] (sfu-paint values position))}))

(defn main-panel []
  (let [sfu-values (re-frame/subscribe [:sfu-values])]
    (fn []
      [:div
        [:h3 "Superformula-U Test"]
        [slider-panel]
        [sfu-comp @sfu-values [100 100]]])))

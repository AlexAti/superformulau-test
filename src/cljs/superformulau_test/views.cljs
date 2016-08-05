(ns superformulau-test.views
    (:require [re-frame.core :as re-frame]))

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

(defn main-panel []
  (let [name (re-frame/subscribe [:name])]
    (fn []
      [:div "Hello from " @name]
      [slider-panel])))

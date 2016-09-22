(ns superformulau-test.db)

(def ranges
  {:a  [1 1]
   :b  [1 1]
   :y  [0 10]
   :z  [-10 0]
   :n1 [1 1]
   :n2 [1 1]
   :n3 [-10 10]
   :posx [0 (.-clientWidth js/document.documentElement)]
   :posy [0 (.-clientHeight js/document.documentElement)]
   :posz [-2000 2000]
   :hue [0 360]})

(defn rand-range [range]
  (let [interval (- (second range)
                    (first range))]
    (+ (rand interval)
       (first range))))

(defn rand-creature []
  (apply array-map
    (apply concat
      (into [(vector :pos
                     (vec (map #(rand-range (% ranges))
                               [:posx :posy :posz])))
             [:hue (int (rand-range (:hue ranges)))]]

        (map #(vector % (rand-range (% ranges)))
             [:a :b :y :z :n1 :n2 :n3])))))

(def default-db
  {:selected 0
   :status :general ; or :highlighted or :about or :explanation
   :creatures (vec
                (sort-by :pos
                         (for [i (range 200)]
                           (rand-creature))))})
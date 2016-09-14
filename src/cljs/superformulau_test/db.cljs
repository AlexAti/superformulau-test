(ns superformulau-test.db)

(def default-db
  {:selected 0
   :highlighted false
   :creatures (vec
               (for [i (range 1000)]
                {:a  (- (rand 10) 5)
                 :b  (- (rand 10) 5)
                 :y  (- (rand 10) 5)
                 :z  (- (rand 10) 5)
                 :n1 (- (rand 10) 5)
                 :n2 (- (rand 10) 5)
                 :n3 (- (rand 10) 5)
                 :pos [100 100]
                 :hue (rand-int 360)}))})

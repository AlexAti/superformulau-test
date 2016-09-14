(ns superformulau-test.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :creature-list
 (fn [db]
   (reaction (:creatures @db))))

(re-frame/register-sub
  :creature-change
  (fn [db]
    (reaction (:selected @db))))

(re-frame/register-sub
  :show-panel
  (fn [db]
    (reaction (:highlighted @db))))

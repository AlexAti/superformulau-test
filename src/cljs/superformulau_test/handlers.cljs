(ns superformulau-test.handlers
    (:require [re-frame.core :as re-frame]
              [superformulau-test.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-sfu-key
 (fn [app [_ n k v]]
   (assoc-in app [:creatures n k] v)))

(re-frame/register-handler
  :select-creature
  (fn [app [_ n]]
    (assoc-in app [:selected] n)))
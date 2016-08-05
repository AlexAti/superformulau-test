(ns superformulau-test.handlers
    (:require [re-frame.core :as re-frame]
              [superformulau-test.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/register-handler
 :set-sfu-key
 (fn [app [_ k v]]
   (assoc-in app [:sfu-values k] v)))

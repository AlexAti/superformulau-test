(ns superformulau-test.handlers
    (:require [re-frame.core :as re-frame]
              [superformulau-test.db :as db]))

(re-frame/register-handler
 :initialize-db
 (fn  [_ _]
   db/default-db))

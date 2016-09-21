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
    (-> app
        (assoc :status :highlighted)
        (assoc :selected n))))

(re-frame/register-handler
  :goto-status
  (fn [app [_ status]]
    (assoc app :status status)))

(re-frame/register-handler
  :toggle-status
  (fn [app [_ status]]
    (if (= status (:status app))
        (assoc app :status :general)
        (assoc app :status status))))

(ns figwheel.connect (:require [superformulau-test.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/superformulau-test.core.mount-root (apply js/superformulau-test.core.mount-root x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'superformulau-test.core/mount-root' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})


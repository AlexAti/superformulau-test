// Compiled by ClojureScript 1.8.51 {}
goog.provide('superformulau_test.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('superformulau_test.views');
goog.require('superformulau_test.config');
goog.require('devtools.core');
goog.require('superformulau_test.subs');
goog.require('re_frame.core');
goog.require('superformulau_test.handlers');
superformulau_test.core.dev_setup = (function superformulau_test$core$dev_setup(){
if(cljs.core.truth_(superformulau_test.config.debug_QMARK_)){
cljs.core.println.call(null,"dev mode");

return devtools.core.install_BANG_.call(null);
} else {
return null;
}
});
superformulau_test.core.mount_root = (function superformulau_test$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.app], null),document.getElementById("app"));
});
superformulau_test.core.init = (function superformulau_test$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

superformulau_test.core.dev_setup.call(null);

return superformulau_test.core.mount_root.call(null);
});
goog.exportSymbol('superformulau_test.core.init', superformulau_test.core.init);

//# sourceMappingURL=core.js.map?rel=1474548516984
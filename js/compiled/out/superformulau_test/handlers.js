// Compiled by ClojureScript 1.8.51 {}
goog.provide('superformulau_test.handlers');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('superformulau_test.db');
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return superformulau_test.db.default_db;
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-sfu-key","set-sfu-key",-1779623507),(function (app,p__37334){
var vec__37335 = p__37334;
var _ = cljs.core.nth.call(null,vec__37335,(0),null);
var n = cljs.core.nth.call(null,vec__37335,(1),null);
var k = cljs.core.nth.call(null,vec__37335,(2),null);
var v = cljs.core.nth.call(null,vec__37335,(3),null);
return cljs.core.assoc_in.call(null,app,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creatures","creatures",761416150),n,k], null),v);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"select-creature","select-creature",-1553400475),(function (app,p__37336){
var vec__37337 = p__37336;
var _ = cljs.core.nth.call(null,vec__37337,(0),null);
var n = cljs.core.nth.call(null,vec__37337,(1),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)),new cljs.core.Keyword(null,"selected","selected",574897764),n);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"goto-status","goto-status",-1096666285),(function (app,p__37338){
var vec__37339 = p__37338;
var _ = cljs.core.nth.call(null,vec__37339,(0),null);
var status = cljs.core.nth.call(null,vec__37339,(1),null);
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"status","status",-1997798413),status);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"toggle-status","toggle-status",-530449221),(function (app,p__37340){
var vec__37341 = p__37340;
var _ = cljs.core.nth.call(null,vec__37341,(0),null);
var status = cljs.core.nth.call(null,vec__37341,(1),null);
if(cljs.core._EQ_.call(null,status,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(app))){
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"general","general",380803686));
} else {
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"status","status",-1997798413),status);
}
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"rerender-mathjax","rerender-mathjax",153350600),(function (app,p__37342){
var vec__37343 = p__37342;
var _ = cljs.core.nth.call(null,vec__37343,(0),null);
MathJax.Hub.Typeset();

return app;
}));

//# sourceMappingURL=handlers.js.map?rel=1474548516961
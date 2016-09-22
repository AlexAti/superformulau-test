// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('superformulau_test.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__43543__delegate = function (x){
if(cljs.core.truth_(superformulau_test.core.mount_root)){
return cljs.core.apply.call(null,superformulau_test.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'superformulau-test.core/mount-root' is missing");
}
};
var G__43543 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__43544__i = 0, G__43544__a = new Array(arguments.length -  0);
while (G__43544__i < G__43544__a.length) {G__43544__a[G__43544__i] = arguments[G__43544__i + 0]; ++G__43544__i;}
  x = new cljs.core.IndexedSeq(G__43544__a,0);
} 
return G__43543__delegate.call(this,x);};
G__43543.cljs$lang$maxFixedArity = 0;
G__43543.cljs$lang$applyTo = (function (arglist__43545){
var x = cljs.core.seq(arglist__43545);
return G__43543__delegate(x);
});
G__43543.cljs$core$IFn$_invoke$arity$variadic = G__43543__delegate;
return G__43543;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1474548528175
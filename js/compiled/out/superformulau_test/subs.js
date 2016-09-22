// Compiled by ClojureScript 1.8.51 {}
goog.provide('superformulau_test.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"creature-list","creature-list",536678278),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"creatures","creatures",761416150).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"creature-change","creature-change",447133651),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),(function (db){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));

//# sourceMappingURL=subs.js.map?rel=1474548515542
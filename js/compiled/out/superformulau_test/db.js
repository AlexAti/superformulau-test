// Compiled by ClojureScript 1.8.51 {}
goog.provide('superformulau_test.db');
goog.require('cljs.core');
superformulau_test.db.ranges = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"n3","n3",-1957751996),new cljs.core.Keyword(null,"posz","posz",-1752379672),new cljs.core.Keyword(null,"n2","n2",1481890316),new cljs.core.Keyword(null,"posy","posy",-998153268),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"n1","n1",-1687681187),new cljs.core.Keyword(null,"posx","posx",-2000946275),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(360)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2000),(2000)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),document.documentElement.clientHeight], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-10),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),document.documentElement.clientWidth], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)]);
superformulau_test.db.rand_range = (function superformulau_test$db$rand_range(range){
var interval = (cljs.core.second.call(null,range) - cljs.core.first.call(null,range));
return (cljs.core.rand.call(null,interval) + cljs.core.first.call(null,range));
});
superformulau_test.db.rand_creature = (function superformulau_test$db$rand_creature(){
return cljs.core.apply.call(null,cljs.core.array_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__36387_SHARP_){
return superformulau_test.db.rand_range.call(null,p1__36387_SHARP_.call(null,superformulau_test.db.ranges));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"posx","posx",-2000946275),new cljs.core.Keyword(null,"posy","posy",-998153268),new cljs.core.Keyword(null,"posz","posz",-1752379672)], null)))],null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hue","hue",-508078848),(superformulau_test.db.rand_range.call(null,new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(superformulau_test.db.ranges)) | (0))], null)], null),cljs.core.map.call(null,(function (p1__36388_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__36388_SHARP_,superformulau_test.db.rand_range.call(null,p1__36388_SHARP_.call(null,superformulau_test.db.ranges))],null));
}),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"n1","n1",-1687681187),new cljs.core.Keyword(null,"n2","n2",1481890316),new cljs.core.Keyword(null,"n3","n3",-1957751996)], null)))));
});
superformulau_test.db.default_db = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),(0),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"general","general",380803686),new cljs.core.Keyword(null,"creatures","creatures",761416150),cljs.core.vec.call(null,cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),(function (){var iter__22487__auto__ = (function superformulau_test$db$iter__36389(s__36390){
return (new cljs.core.LazySeq(null,(function (){
var s__36390__$1 = s__36390;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36390__$1);
if(temp__4657__auto__){
var s__36390__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36390__$2)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,s__36390__$2);
var size__22486__auto__ = cljs.core.count.call(null,c__22485__auto__);
var b__36392 = cljs.core.chunk_buffer.call(null,size__22486__auto__);
if((function (){var i__36391 = (0);
while(true){
if((i__36391 < size__22486__auto__)){
var i = cljs.core._nth.call(null,c__22485__auto__,i__36391);
cljs.core.chunk_append.call(null,b__36392,superformulau_test.db.rand_creature.call(null));

var G__36393 = (i__36391 + (1));
i__36391 = G__36393;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36392),superformulau_test$db$iter__36389.call(null,cljs.core.chunk_rest.call(null,s__36390__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36392),null);
}
} else {
var i = cljs.core.first.call(null,s__36390__$2);
return cljs.core.cons.call(null,superformulau_test.db.rand_creature.call(null),superformulau_test$db$iter__36389.call(null,cljs.core.rest.call(null,s__36390__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22487__auto__.call(null,cljs.core.range.call(null,(200)));
})()))], null);

//# sourceMappingURL=db.js.map?rel=1474548512948
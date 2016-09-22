// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41219_41233 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41220_41234 = null;
var count__41221_41235 = (0);
var i__41222_41236 = (0);
while(true){
if((i__41222_41236 < count__41221_41235)){
var f_41237 = cljs.core._nth.call(null,chunk__41220_41234,i__41222_41236);
cljs.core.println.call(null,"  ",f_41237);

var G__41238 = seq__41219_41233;
var G__41239 = chunk__41220_41234;
var G__41240 = count__41221_41235;
var G__41241 = (i__41222_41236 + (1));
seq__41219_41233 = G__41238;
chunk__41220_41234 = G__41239;
count__41221_41235 = G__41240;
i__41222_41236 = G__41241;
continue;
} else {
var temp__4657__auto___41242 = cljs.core.seq.call(null,seq__41219_41233);
if(temp__4657__auto___41242){
var seq__41219_41243__$1 = temp__4657__auto___41242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41219_41243__$1)){
var c__22518__auto___41244 = cljs.core.chunk_first.call(null,seq__41219_41243__$1);
var G__41245 = cljs.core.chunk_rest.call(null,seq__41219_41243__$1);
var G__41246 = c__22518__auto___41244;
var G__41247 = cljs.core.count.call(null,c__22518__auto___41244);
var G__41248 = (0);
seq__41219_41233 = G__41245;
chunk__41220_41234 = G__41246;
count__41221_41235 = G__41247;
i__41222_41236 = G__41248;
continue;
} else {
var f_41249 = cljs.core.first.call(null,seq__41219_41243__$1);
cljs.core.println.call(null,"  ",f_41249);

var G__41250 = cljs.core.next.call(null,seq__41219_41243__$1);
var G__41251 = null;
var G__41252 = (0);
var G__41253 = (0);
seq__41219_41233 = G__41250;
chunk__41220_41234 = G__41251;
count__41221_41235 = G__41252;
i__41222_41236 = G__41253;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41254 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__21707__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41254);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41254)))?cljs.core.second.call(null,arglists_41254):arglists_41254));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41223 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41224 = null;
var count__41225 = (0);
var i__41226 = (0);
while(true){
if((i__41226 < count__41225)){
var vec__41227 = cljs.core._nth.call(null,chunk__41224,i__41226);
var name = cljs.core.nth.call(null,vec__41227,(0),null);
var map__41228 = cljs.core.nth.call(null,vec__41227,(1),null);
var map__41228__$1 = ((((!((map__41228 == null)))?((((map__41228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41228):map__41228);
var doc = cljs.core.get.call(null,map__41228__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41228__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41255 = seq__41223;
var G__41256 = chunk__41224;
var G__41257 = count__41225;
var G__41258 = (i__41226 + (1));
seq__41223 = G__41255;
chunk__41224 = G__41256;
count__41225 = G__41257;
i__41226 = G__41258;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41223);
if(temp__4657__auto__){
var seq__41223__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41223__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__41223__$1);
var G__41259 = cljs.core.chunk_rest.call(null,seq__41223__$1);
var G__41260 = c__22518__auto__;
var G__41261 = cljs.core.count.call(null,c__22518__auto__);
var G__41262 = (0);
seq__41223 = G__41259;
chunk__41224 = G__41260;
count__41225 = G__41261;
i__41226 = G__41262;
continue;
} else {
var vec__41230 = cljs.core.first.call(null,seq__41223__$1);
var name = cljs.core.nth.call(null,vec__41230,(0),null);
var map__41231 = cljs.core.nth.call(null,vec__41230,(1),null);
var map__41231__$1 = ((((!((map__41231 == null)))?((((map__41231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41231):map__41231);
var doc = cljs.core.get.call(null,map__41231__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41231__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__41263 = cljs.core.next.call(null,seq__41223__$1);
var G__41264 = null;
var G__41265 = (0);
var G__41266 = (0);
seq__41223 = G__41263;
chunk__41224 = G__41264;
count__41225 = G__41265;
i__41226 = G__41266;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1474548521636
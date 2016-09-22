// Compiled by ClojureScript 1.8.51 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__36824_SHARP_){
return console.log(p1__36824_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__36825_SHARP_){
return console.warn(p1__36825_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__36826_SHARP_){
return console.error(p1__36826_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__36827_SHARP_){
if(cljs.core.truth_(console.groupCollapsed)){
return console.groupCollapsed(p1__36827_SHARP_);
} else {
return console.log(p1__36827_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd)){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str("(empty? (difference (set (keys new-loggers)) (set (keys default-loggers))))")].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__22784__auto__ = [];
var len__22777__auto___36829 = arguments.length;
var i__22778__auto___36830 = (0);
while(true){
if((i__22778__auto___36830 < len__22777__auto___36829)){
args__22784__auto__.push((arguments[i__22778__auto___36830]));

var G__36831 = (i__22778__auto___36830 + (1));
i__22778__auto___36830 = G__36831;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq36828){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36828));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__22784__auto__ = [];
var len__22777__auto___36833 = arguments.length;
var i__22778__auto___36834 = (0);
while(true){
if((i__22778__auto___36834 < len__22777__auto___36833)){
args__22784__auto__.push((arguments[i__22778__auto___36834]));

var G__36835 = (i__22778__auto___36834 + (1));
i__22778__auto___36834 = G__36835;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq36832){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36832));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__22784__auto__ = [];
var len__22777__auto___36837 = arguments.length;
var i__22778__auto___36838 = (0);
while(true){
if((i__22778__auto___36838 < len__22777__auto___36837)){
args__22784__auto__.push((arguments[i__22778__auto___36838]));

var G__36839 = (i__22778__auto___36838 + (1));
i__22778__auto___36838 = G__36839;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq36836){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36836));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__22784__auto__ = [];
var len__22777__auto___36841 = arguments.length;
var i__22778__auto___36842 = (0);
while(true){
if((i__22778__auto___36842 < len__22777__auto___36841)){
args__22784__auto__.push((arguments[i__22778__auto___36842]));

var G__36843 = (i__22778__auto___36842 + (1));
i__22778__auto___36842 = G__36843;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq36840){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36840));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__22784__auto__ = [];
var len__22777__auto___36845 = arguments.length;
var i__22778__auto___36846 = (0);
while(true){
if((i__22778__auto___36846 < len__22777__auto___36845)){
args__22784__auto__.push((arguments[i__22778__auto___36846]));

var G__36847 = (i__22778__auto___36846 + (1));
i__22778__auto___36846 = G__36847;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((0) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((0)),(0),null)):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__22785__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq36844){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36844));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map?rel=1474548514856
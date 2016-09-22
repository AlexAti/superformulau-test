// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__21707__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__21707__auto__){
return or__21707__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__21707__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40195_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40195_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40200 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40201 = null;
var count__40202 = (0);
var i__40203 = (0);
while(true){
if((i__40203 < count__40202)){
var n = cljs.core._nth.call(null,chunk__40201,i__40203);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40204 = seq__40200;
var G__40205 = chunk__40201;
var G__40206 = count__40202;
var G__40207 = (i__40203 + (1));
seq__40200 = G__40204;
chunk__40201 = G__40205;
count__40202 = G__40206;
i__40203 = G__40207;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40200);
if(temp__4657__auto__){
var seq__40200__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40200__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__40200__$1);
var G__40208 = cljs.core.chunk_rest.call(null,seq__40200__$1);
var G__40209 = c__22518__auto__;
var G__40210 = cljs.core.count.call(null,c__22518__auto__);
var G__40211 = (0);
seq__40200 = G__40208;
chunk__40201 = G__40209;
count__40202 = G__40210;
i__40203 = G__40211;
continue;
} else {
var n = cljs.core.first.call(null,seq__40200__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__40212 = cljs.core.next.call(null,seq__40200__$1);
var G__40213 = null;
var G__40214 = (0);
var G__40215 = (0);
seq__40200 = G__40212;
chunk__40201 = G__40213;
count__40202 = G__40214;
i__40203 = G__40215;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40254_40261 = cljs.core.seq.call(null,deps);
var chunk__40255_40262 = null;
var count__40256_40263 = (0);
var i__40257_40264 = (0);
while(true){
if((i__40257_40264 < count__40256_40263)){
var dep_40265 = cljs.core._nth.call(null,chunk__40255_40262,i__40257_40264);
topo_sort_helper_STAR_.call(null,dep_40265,(depth + (1)),state);

var G__40266 = seq__40254_40261;
var G__40267 = chunk__40255_40262;
var G__40268 = count__40256_40263;
var G__40269 = (i__40257_40264 + (1));
seq__40254_40261 = G__40266;
chunk__40255_40262 = G__40267;
count__40256_40263 = G__40268;
i__40257_40264 = G__40269;
continue;
} else {
var temp__4657__auto___40270 = cljs.core.seq.call(null,seq__40254_40261);
if(temp__4657__auto___40270){
var seq__40254_40271__$1 = temp__4657__auto___40270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40254_40271__$1)){
var c__22518__auto___40272 = cljs.core.chunk_first.call(null,seq__40254_40271__$1);
var G__40273 = cljs.core.chunk_rest.call(null,seq__40254_40271__$1);
var G__40274 = c__22518__auto___40272;
var G__40275 = cljs.core.count.call(null,c__22518__auto___40272);
var G__40276 = (0);
seq__40254_40261 = G__40273;
chunk__40255_40262 = G__40274;
count__40256_40263 = G__40275;
i__40257_40264 = G__40276;
continue;
} else {
var dep_40277 = cljs.core.first.call(null,seq__40254_40271__$1);
topo_sort_helper_STAR_.call(null,dep_40277,(depth + (1)),state);

var G__40278 = cljs.core.next.call(null,seq__40254_40271__$1);
var G__40279 = null;
var G__40280 = (0);
var G__40281 = (0);
seq__40254_40261 = G__40278;
chunk__40255_40262 = G__40279;
count__40256_40263 = G__40280;
i__40257_40264 = G__40281;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40258){
var vec__40260 = p__40258;
var x = cljs.core.nth.call(null,vec__40260,(0),null);
var xs = cljs.core.nthnext.call(null,vec__40260,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40260,x,xs,get_deps__$1){
return (function (p1__40216_SHARP_){
return clojure.set.difference.call(null,p1__40216_SHARP_,x);
});})(vec__40260,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40294 = cljs.core.seq.call(null,provides);
var chunk__40295 = null;
var count__40296 = (0);
var i__40297 = (0);
while(true){
if((i__40297 < count__40296)){
var prov = cljs.core._nth.call(null,chunk__40295,i__40297);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40298_40306 = cljs.core.seq.call(null,requires);
var chunk__40299_40307 = null;
var count__40300_40308 = (0);
var i__40301_40309 = (0);
while(true){
if((i__40301_40309 < count__40300_40308)){
var req_40310 = cljs.core._nth.call(null,chunk__40299_40307,i__40301_40309);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40310,prov);

var G__40311 = seq__40298_40306;
var G__40312 = chunk__40299_40307;
var G__40313 = count__40300_40308;
var G__40314 = (i__40301_40309 + (1));
seq__40298_40306 = G__40311;
chunk__40299_40307 = G__40312;
count__40300_40308 = G__40313;
i__40301_40309 = G__40314;
continue;
} else {
var temp__4657__auto___40315 = cljs.core.seq.call(null,seq__40298_40306);
if(temp__4657__auto___40315){
var seq__40298_40316__$1 = temp__4657__auto___40315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40298_40316__$1)){
var c__22518__auto___40317 = cljs.core.chunk_first.call(null,seq__40298_40316__$1);
var G__40318 = cljs.core.chunk_rest.call(null,seq__40298_40316__$1);
var G__40319 = c__22518__auto___40317;
var G__40320 = cljs.core.count.call(null,c__22518__auto___40317);
var G__40321 = (0);
seq__40298_40306 = G__40318;
chunk__40299_40307 = G__40319;
count__40300_40308 = G__40320;
i__40301_40309 = G__40321;
continue;
} else {
var req_40322 = cljs.core.first.call(null,seq__40298_40316__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40322,prov);

var G__40323 = cljs.core.next.call(null,seq__40298_40316__$1);
var G__40324 = null;
var G__40325 = (0);
var G__40326 = (0);
seq__40298_40306 = G__40323;
chunk__40299_40307 = G__40324;
count__40300_40308 = G__40325;
i__40301_40309 = G__40326;
continue;
}
} else {
}
}
break;
}

var G__40327 = seq__40294;
var G__40328 = chunk__40295;
var G__40329 = count__40296;
var G__40330 = (i__40297 + (1));
seq__40294 = G__40327;
chunk__40295 = G__40328;
count__40296 = G__40329;
i__40297 = G__40330;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40294);
if(temp__4657__auto__){
var seq__40294__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40294__$1)){
var c__22518__auto__ = cljs.core.chunk_first.call(null,seq__40294__$1);
var G__40331 = cljs.core.chunk_rest.call(null,seq__40294__$1);
var G__40332 = c__22518__auto__;
var G__40333 = cljs.core.count.call(null,c__22518__auto__);
var G__40334 = (0);
seq__40294 = G__40331;
chunk__40295 = G__40332;
count__40296 = G__40333;
i__40297 = G__40334;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40294__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40302_40335 = cljs.core.seq.call(null,requires);
var chunk__40303_40336 = null;
var count__40304_40337 = (0);
var i__40305_40338 = (0);
while(true){
if((i__40305_40338 < count__40304_40337)){
var req_40339 = cljs.core._nth.call(null,chunk__40303_40336,i__40305_40338);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40339,prov);

var G__40340 = seq__40302_40335;
var G__40341 = chunk__40303_40336;
var G__40342 = count__40304_40337;
var G__40343 = (i__40305_40338 + (1));
seq__40302_40335 = G__40340;
chunk__40303_40336 = G__40341;
count__40304_40337 = G__40342;
i__40305_40338 = G__40343;
continue;
} else {
var temp__4657__auto___40344__$1 = cljs.core.seq.call(null,seq__40302_40335);
if(temp__4657__auto___40344__$1){
var seq__40302_40345__$1 = temp__4657__auto___40344__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40302_40345__$1)){
var c__22518__auto___40346 = cljs.core.chunk_first.call(null,seq__40302_40345__$1);
var G__40347 = cljs.core.chunk_rest.call(null,seq__40302_40345__$1);
var G__40348 = c__22518__auto___40346;
var G__40349 = cljs.core.count.call(null,c__22518__auto___40346);
var G__40350 = (0);
seq__40302_40335 = G__40347;
chunk__40303_40336 = G__40348;
count__40304_40337 = G__40349;
i__40305_40338 = G__40350;
continue;
} else {
var req_40351 = cljs.core.first.call(null,seq__40302_40345__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40351,prov);

var G__40352 = cljs.core.next.call(null,seq__40302_40345__$1);
var G__40353 = null;
var G__40354 = (0);
var G__40355 = (0);
seq__40302_40335 = G__40352;
chunk__40303_40336 = G__40353;
count__40304_40337 = G__40354;
i__40305_40338 = G__40355;
continue;
}
} else {
}
}
break;
}

var G__40356 = cljs.core.next.call(null,seq__40294__$1);
var G__40357 = null;
var G__40358 = (0);
var G__40359 = (0);
seq__40294 = G__40356;
chunk__40295 = G__40357;
count__40296 = G__40358;
i__40297 = G__40359;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40364_40368 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40365_40369 = null;
var count__40366_40370 = (0);
var i__40367_40371 = (0);
while(true){
if((i__40367_40371 < count__40366_40370)){
var ns_40372 = cljs.core._nth.call(null,chunk__40365_40369,i__40367_40371);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40372);

var G__40373 = seq__40364_40368;
var G__40374 = chunk__40365_40369;
var G__40375 = count__40366_40370;
var G__40376 = (i__40367_40371 + (1));
seq__40364_40368 = G__40373;
chunk__40365_40369 = G__40374;
count__40366_40370 = G__40375;
i__40367_40371 = G__40376;
continue;
} else {
var temp__4657__auto___40377 = cljs.core.seq.call(null,seq__40364_40368);
if(temp__4657__auto___40377){
var seq__40364_40378__$1 = temp__4657__auto___40377;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40364_40378__$1)){
var c__22518__auto___40379 = cljs.core.chunk_first.call(null,seq__40364_40378__$1);
var G__40380 = cljs.core.chunk_rest.call(null,seq__40364_40378__$1);
var G__40381 = c__22518__auto___40379;
var G__40382 = cljs.core.count.call(null,c__22518__auto___40379);
var G__40383 = (0);
seq__40364_40368 = G__40380;
chunk__40365_40369 = G__40381;
count__40366_40370 = G__40382;
i__40367_40371 = G__40383;
continue;
} else {
var ns_40384 = cljs.core.first.call(null,seq__40364_40378__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40384);

var G__40385 = cljs.core.next.call(null,seq__40364_40378__$1);
var G__40386 = null;
var G__40387 = (0);
var G__40388 = (0);
seq__40364_40368 = G__40385;
chunk__40365_40369 = G__40386;
count__40366_40370 = G__40387;
i__40367_40371 = G__40388;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__21707__auto__ = goog.require__;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40389__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40389 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40390__i = 0, G__40390__a = new Array(arguments.length -  0);
while (G__40390__i < G__40390__a.length) {G__40390__a[G__40390__i] = arguments[G__40390__i + 0]; ++G__40390__i;}
  args = new cljs.core.IndexedSeq(G__40390__a,0);
} 
return G__40389__delegate.call(this,args);};
G__40389.cljs$lang$maxFixedArity = 0;
G__40389.cljs$lang$applyTo = (function (arglist__40391){
var args = cljs.core.seq(arglist__40391);
return G__40389__delegate(args);
});
G__40389.cljs$core$IFn$_invoke$arity$variadic = G__40389__delegate;
return G__40389;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40393 = cljs.core._EQ_;
var expr__40394 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40393.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40394))){
var path_parts = ((function (pred__40393,expr__40394){
return (function (p1__40392_SHARP_){
return clojure.string.split.call(null,p1__40392_SHARP_,/[\/\\]/);
});})(pred__40393,expr__40394))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__40393,expr__40394){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40396){if((e40396 instanceof Error)){
var e = e40396;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40396;

}
}})());
});
;})(path_parts,sep,root,pred__40393,expr__40394))
} else {
if(cljs.core.truth_(pred__40393.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40394))){
return ((function (pred__40393,expr__40394){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__40393,expr__40394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__40393,expr__40394))
);

return deferred.addErrback(((function (deferred,pred__40393,expr__40394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__40393,expr__40394))
);
});
;})(pred__40393,expr__40394))
} else {
return ((function (pred__40393,expr__40394){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40393,expr__40394))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40397,callback){
var map__40400 = p__40397;
var map__40400__$1 = ((((!((map__40400 == null)))?((((map__40400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40400):map__40400);
var file_msg = map__40400__$1;
var request_url = cljs.core.get.call(null,map__40400__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__40400,map__40400__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40400,map__40400__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto__){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto__){
return (function (state_40424){
var state_val_40425 = (state_40424[(1)]);
if((state_val_40425 === (7))){
var inst_40420 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
var statearr_40426_40446 = state_40424__$1;
(statearr_40426_40446[(2)] = inst_40420);

(statearr_40426_40446[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (1))){
var state_40424__$1 = state_40424;
var statearr_40427_40447 = state_40424__$1;
(statearr_40427_40447[(2)] = null);

(statearr_40427_40447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (4))){
var inst_40404 = (state_40424[(7)]);
var inst_40404__$1 = (state_40424[(2)]);
var state_40424__$1 = (function (){var statearr_40428 = state_40424;
(statearr_40428[(7)] = inst_40404__$1);

return statearr_40428;
})();
if(cljs.core.truth_(inst_40404__$1)){
var statearr_40429_40448 = state_40424__$1;
(statearr_40429_40448[(1)] = (5));

} else {
var statearr_40430_40449 = state_40424__$1;
(statearr_40430_40449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (6))){
var state_40424__$1 = state_40424;
var statearr_40431_40450 = state_40424__$1;
(statearr_40431_40450[(2)] = null);

(statearr_40431_40450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (3))){
var inst_40422 = (state_40424[(2)]);
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40424__$1,inst_40422);
} else {
if((state_val_40425 === (2))){
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40424__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40425 === (11))){
var inst_40416 = (state_40424[(2)]);
var state_40424__$1 = (function (){var statearr_40432 = state_40424;
(statearr_40432[(8)] = inst_40416);

return statearr_40432;
})();
var statearr_40433_40451 = state_40424__$1;
(statearr_40433_40451[(2)] = null);

(statearr_40433_40451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (9))){
var inst_40410 = (state_40424[(9)]);
var inst_40408 = (state_40424[(10)]);
var inst_40412 = inst_40410.call(null,inst_40408);
var state_40424__$1 = state_40424;
var statearr_40434_40452 = state_40424__$1;
(statearr_40434_40452[(2)] = inst_40412);

(statearr_40434_40452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (5))){
var inst_40404 = (state_40424[(7)]);
var inst_40406 = figwheel.client.file_reloading.blocking_load.call(null,inst_40404);
var state_40424__$1 = state_40424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40424__$1,(8),inst_40406);
} else {
if((state_val_40425 === (10))){
var inst_40408 = (state_40424[(10)]);
var inst_40414 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40408);
var state_40424__$1 = state_40424;
var statearr_40435_40453 = state_40424__$1;
(statearr_40435_40453[(2)] = inst_40414);

(statearr_40435_40453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40425 === (8))){
var inst_40404 = (state_40424[(7)]);
var inst_40410 = (state_40424[(9)]);
var inst_40408 = (state_40424[(2)]);
var inst_40409 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40410__$1 = cljs.core.get.call(null,inst_40409,inst_40404);
var state_40424__$1 = (function (){var statearr_40436 = state_40424;
(statearr_40436[(9)] = inst_40410__$1);

(statearr_40436[(10)] = inst_40408);

return statearr_40436;
})();
if(cljs.core.truth_(inst_40410__$1)){
var statearr_40437_40454 = state_40424__$1;
(statearr_40437_40454[(1)] = (9));

} else {
var statearr_40438_40455 = state_40424__$1;
(statearr_40438_40455[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__25115__auto__))
;
return ((function (switch__25003__auto__,c__25115__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25004__auto__ = null;
var figwheel$client$file_reloading$state_machine__25004__auto____0 = (function (){
var statearr_40442 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40442[(0)] = figwheel$client$file_reloading$state_machine__25004__auto__);

(statearr_40442[(1)] = (1));

return statearr_40442;
});
var figwheel$client$file_reloading$state_machine__25004__auto____1 = (function (state_40424){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_40424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e40443){if((e40443 instanceof Object)){
var ex__25007__auto__ = e40443;
var statearr_40444_40456 = state_40424;
(statearr_40444_40456[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40457 = state_40424;
state_40424 = G__40457;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25004__auto__ = function(state_40424){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25004__auto____1.call(this,state_40424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25004__auto____0;
figwheel$client$file_reloading$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25004__auto____1;
return figwheel$client$file_reloading$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto__))
})();
var state__25117__auto__ = (function (){var statearr_40445 = f__25116__auto__.call(null);
(statearr_40445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto__);

return statearr_40445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto__))
);

return c__25115__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__40458,callback){
var map__40461 = p__40458;
var map__40461__$1 = ((((!((map__40461 == null)))?((((map__40461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40461):map__40461);
var file_msg = map__40461__$1;
var namespace = cljs.core.get.call(null,map__40461__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__40461,map__40461__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__40461,map__40461__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__40463){
var map__40466 = p__40463;
var map__40466__$1 = ((((!((map__40466 == null)))?((((map__40466.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40466.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40466):map__40466);
var file_msg = map__40466__$1;
var namespace = cljs.core.get.call(null,map__40466__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__21695__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__21695__auto__){
var or__21707__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
var or__21707__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__21707__auto____$1)){
return or__21707__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__21695__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__40468,callback){
var map__40471 = p__40468;
var map__40471__$1 = ((((!((map__40471 == null)))?((((map__40471.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40471.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40471):map__40471);
var file_msg = map__40471__$1;
var request_url = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__40471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25115__auto___40559 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___40559,out){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___40559,out){
return (function (state_40541){
var state_val_40542 = (state_40541[(1)]);
if((state_val_40542 === (1))){
var inst_40519 = cljs.core.nth.call(null,files,(0),null);
var inst_40520 = cljs.core.nthnext.call(null,files,(1));
var inst_40521 = files;
var state_40541__$1 = (function (){var statearr_40543 = state_40541;
(statearr_40543[(7)] = inst_40521);

(statearr_40543[(8)] = inst_40519);

(statearr_40543[(9)] = inst_40520);

return statearr_40543;
})();
var statearr_40544_40560 = state_40541__$1;
(statearr_40544_40560[(2)] = null);

(statearr_40544_40560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (2))){
var inst_40524 = (state_40541[(10)]);
var inst_40521 = (state_40541[(7)]);
var inst_40524__$1 = cljs.core.nth.call(null,inst_40521,(0),null);
var inst_40525 = cljs.core.nthnext.call(null,inst_40521,(1));
var inst_40526 = (inst_40524__$1 == null);
var inst_40527 = cljs.core.not.call(null,inst_40526);
var state_40541__$1 = (function (){var statearr_40545 = state_40541;
(statearr_40545[(10)] = inst_40524__$1);

(statearr_40545[(11)] = inst_40525);

return statearr_40545;
})();
if(inst_40527){
var statearr_40546_40561 = state_40541__$1;
(statearr_40546_40561[(1)] = (4));

} else {
var statearr_40547_40562 = state_40541__$1;
(statearr_40547_40562[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (3))){
var inst_40539 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40541__$1,inst_40539);
} else {
if((state_val_40542 === (4))){
var inst_40524 = (state_40541[(10)]);
var inst_40529 = figwheel.client.file_reloading.reload_js_file.call(null,inst_40524);
var state_40541__$1 = state_40541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40541__$1,(7),inst_40529);
} else {
if((state_val_40542 === (5))){
var inst_40535 = cljs.core.async.close_BANG_.call(null,out);
var state_40541__$1 = state_40541;
var statearr_40548_40563 = state_40541__$1;
(statearr_40548_40563[(2)] = inst_40535);

(statearr_40548_40563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (6))){
var inst_40537 = (state_40541[(2)]);
var state_40541__$1 = state_40541;
var statearr_40549_40564 = state_40541__$1;
(statearr_40549_40564[(2)] = inst_40537);

(statearr_40549_40564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40542 === (7))){
var inst_40525 = (state_40541[(11)]);
var inst_40531 = (state_40541[(2)]);
var inst_40532 = cljs.core.async.put_BANG_.call(null,out,inst_40531);
var inst_40521 = inst_40525;
var state_40541__$1 = (function (){var statearr_40550 = state_40541;
(statearr_40550[(12)] = inst_40532);

(statearr_40550[(7)] = inst_40521);

return statearr_40550;
})();
var statearr_40551_40565 = state_40541__$1;
(statearr_40551_40565[(2)] = null);

(statearr_40551_40565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__25115__auto___40559,out))
;
return ((function (switch__25003__auto__,c__25115__auto___40559,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto____0 = (function (){
var statearr_40555 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40555[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto__);

(statearr_40555[(1)] = (1));

return statearr_40555;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto____1 = (function (state_40541){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_40541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e40556){if((e40556 instanceof Object)){
var ex__25007__auto__ = e40556;
var statearr_40557_40566 = state_40541;
(statearr_40557_40566[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40567 = state_40541;
state_40541 = G__40567;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto__ = function(state_40541){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto____1.call(this,state_40541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___40559,out))
})();
var state__25117__auto__ = (function (){var statearr_40558 = f__25116__auto__.call(null);
(statearr_40558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___40559);

return statearr_40558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___40559,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__40568,opts){
var map__40572 = p__40568;
var map__40572__$1 = ((((!((map__40572 == null)))?((((map__40572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40572):map__40572);
var eval_body__$1 = cljs.core.get.call(null,map__40572__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__40572__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__21695__auto__ = eval_body__$1;
if(cljs.core.truth_(and__21695__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__21695__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e40574){var e = e40574;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__40575_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40575_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__40580){
var vec__40581 = p__40580;
var k = cljs.core.nth.call(null,vec__40581,(0),null);
var v = cljs.core.nth.call(null,vec__40581,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__40582){
var vec__40583 = p__40582;
var k = cljs.core.nth.call(null,vec__40583,(0),null);
var v = cljs.core.nth.call(null,vec__40583,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__40587,p__40588){
var map__40835 = p__40587;
var map__40835__$1 = ((((!((map__40835 == null)))?((((map__40835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40835):map__40835);
var opts = map__40835__$1;
var before_jsload = cljs.core.get.call(null,map__40835__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40835__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40835__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40836 = p__40588;
var map__40836__$1 = ((((!((map__40836 == null)))?((((map__40836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40836):map__40836);
var msg = map__40836__$1;
var files = cljs.core.get.call(null,map__40836__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40836__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40836__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40989){
var state_val_40990 = (state_40989[(1)]);
if((state_val_40990 === (7))){
var inst_40852 = (state_40989[(7)]);
var inst_40851 = (state_40989[(8)]);
var inst_40853 = (state_40989[(9)]);
var inst_40850 = (state_40989[(10)]);
var inst_40858 = cljs.core._nth.call(null,inst_40851,inst_40853);
var inst_40859 = figwheel.client.file_reloading.eval_body.call(null,inst_40858,opts);
var inst_40860 = (inst_40853 + (1));
var tmp40991 = inst_40852;
var tmp40992 = inst_40851;
var tmp40993 = inst_40850;
var inst_40850__$1 = tmp40993;
var inst_40851__$1 = tmp40992;
var inst_40852__$1 = tmp40991;
var inst_40853__$1 = inst_40860;
var state_40989__$1 = (function (){var statearr_40994 = state_40989;
(statearr_40994[(7)] = inst_40852__$1);

(statearr_40994[(8)] = inst_40851__$1);

(statearr_40994[(9)] = inst_40853__$1);

(statearr_40994[(11)] = inst_40859);

(statearr_40994[(10)] = inst_40850__$1);

return statearr_40994;
})();
var statearr_40995_41081 = state_40989__$1;
(statearr_40995_41081[(2)] = null);

(statearr_40995_41081[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (20))){
var inst_40893 = (state_40989[(12)]);
var inst_40901 = figwheel.client.file_reloading.sort_files.call(null,inst_40893);
var state_40989__$1 = state_40989;
var statearr_40996_41082 = state_40989__$1;
(statearr_40996_41082[(2)] = inst_40901);

(statearr_40996_41082[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (27))){
var state_40989__$1 = state_40989;
var statearr_40997_41083 = state_40989__$1;
(statearr_40997_41083[(2)] = null);

(statearr_40997_41083[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (1))){
var inst_40842 = (state_40989[(13)]);
var inst_40839 = before_jsload.call(null,files);
var inst_40840 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40841 = (function (){return ((function (inst_40842,inst_40839,inst_40840,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40584_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40584_SHARP_);
});
;})(inst_40842,inst_40839,inst_40840,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40842__$1 = cljs.core.filter.call(null,inst_40841,files);
var inst_40843 = cljs.core.not_empty.call(null,inst_40842__$1);
var state_40989__$1 = (function (){var statearr_40998 = state_40989;
(statearr_40998[(14)] = inst_40840);

(statearr_40998[(13)] = inst_40842__$1);

(statearr_40998[(15)] = inst_40839);

return statearr_40998;
})();
if(cljs.core.truth_(inst_40843)){
var statearr_40999_41084 = state_40989__$1;
(statearr_40999_41084[(1)] = (2));

} else {
var statearr_41000_41085 = state_40989__$1;
(statearr_41000_41085[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (24))){
var state_40989__$1 = state_40989;
var statearr_41001_41086 = state_40989__$1;
(statearr_41001_41086[(2)] = null);

(statearr_41001_41086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (39))){
var inst_40943 = (state_40989[(16)]);
var state_40989__$1 = state_40989;
var statearr_41002_41087 = state_40989__$1;
(statearr_41002_41087[(2)] = inst_40943);

(statearr_41002_41087[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (46))){
var inst_40984 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41003_41088 = state_40989__$1;
(statearr_41003_41088[(2)] = inst_40984);

(statearr_41003_41088[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (4))){
var inst_40887 = (state_40989[(2)]);
var inst_40888 = cljs.core.List.EMPTY;
var inst_40889 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40888);
var inst_40890 = (function (){return ((function (inst_40887,inst_40888,inst_40889,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40585_SHARP_){
var and__21695__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__40585_SHARP_);
if(cljs.core.truth_(and__21695__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__40585_SHARP_));
} else {
return and__21695__auto__;
}
});
;})(inst_40887,inst_40888,inst_40889,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40891 = cljs.core.filter.call(null,inst_40890,files);
var inst_40892 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40893 = cljs.core.concat.call(null,inst_40891,inst_40892);
var state_40989__$1 = (function (){var statearr_41004 = state_40989;
(statearr_41004[(17)] = inst_40887);

(statearr_41004[(18)] = inst_40889);

(statearr_41004[(12)] = inst_40893);

return statearr_41004;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41005_41089 = state_40989__$1;
(statearr_41005_41089[(1)] = (16));

} else {
var statearr_41006_41090 = state_40989__$1;
(statearr_41006_41090[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (15))){
var inst_40877 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41007_41091 = state_40989__$1;
(statearr_41007_41091[(2)] = inst_40877);

(statearr_41007_41091[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (21))){
var inst_40903 = (state_40989[(19)]);
var inst_40903__$1 = (state_40989[(2)]);
var inst_40904 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40903__$1);
var state_40989__$1 = (function (){var statearr_41008 = state_40989;
(statearr_41008[(19)] = inst_40903__$1);

return statearr_41008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40989__$1,(22),inst_40904);
} else {
if((state_val_40990 === (31))){
var inst_40987 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40989__$1,inst_40987);
} else {
if((state_val_40990 === (32))){
var inst_40943 = (state_40989[(16)]);
var inst_40948 = inst_40943.cljs$lang$protocol_mask$partition0$;
var inst_40949 = (inst_40948 & (64));
var inst_40950 = inst_40943.cljs$core$ISeq$;
var inst_40951 = (inst_40949) || (inst_40950);
var state_40989__$1 = state_40989;
if(cljs.core.truth_(inst_40951)){
var statearr_41009_41092 = state_40989__$1;
(statearr_41009_41092[(1)] = (35));

} else {
var statearr_41010_41093 = state_40989__$1;
(statearr_41010_41093[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (40))){
var inst_40964 = (state_40989[(20)]);
var inst_40963 = (state_40989[(2)]);
var inst_40964__$1 = cljs.core.get.call(null,inst_40963,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40965 = cljs.core.get.call(null,inst_40963,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40966 = cljs.core.not_empty.call(null,inst_40964__$1);
var state_40989__$1 = (function (){var statearr_41011 = state_40989;
(statearr_41011[(21)] = inst_40965);

(statearr_41011[(20)] = inst_40964__$1);

return statearr_41011;
})();
if(cljs.core.truth_(inst_40966)){
var statearr_41012_41094 = state_40989__$1;
(statearr_41012_41094[(1)] = (41));

} else {
var statearr_41013_41095 = state_40989__$1;
(statearr_41013_41095[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (33))){
var state_40989__$1 = state_40989;
var statearr_41014_41096 = state_40989__$1;
(statearr_41014_41096[(2)] = false);

(statearr_41014_41096[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (13))){
var inst_40863 = (state_40989[(22)]);
var inst_40867 = cljs.core.chunk_first.call(null,inst_40863);
var inst_40868 = cljs.core.chunk_rest.call(null,inst_40863);
var inst_40869 = cljs.core.count.call(null,inst_40867);
var inst_40850 = inst_40868;
var inst_40851 = inst_40867;
var inst_40852 = inst_40869;
var inst_40853 = (0);
var state_40989__$1 = (function (){var statearr_41015 = state_40989;
(statearr_41015[(7)] = inst_40852);

(statearr_41015[(8)] = inst_40851);

(statearr_41015[(9)] = inst_40853);

(statearr_41015[(10)] = inst_40850);

return statearr_41015;
})();
var statearr_41016_41097 = state_40989__$1;
(statearr_41016_41097[(2)] = null);

(statearr_41016_41097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (22))){
var inst_40903 = (state_40989[(19)]);
var inst_40907 = (state_40989[(23)]);
var inst_40906 = (state_40989[(24)]);
var inst_40911 = (state_40989[(25)]);
var inst_40906__$1 = (state_40989[(2)]);
var inst_40907__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40906__$1);
var inst_40908 = (function (){var all_files = inst_40903;
var res_SINGLEQUOTE_ = inst_40906__$1;
var res = inst_40907__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40903,inst_40907,inst_40906,inst_40911,inst_40906__$1,inst_40907__$1,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__40586_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__40586_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40903,inst_40907,inst_40906,inst_40911,inst_40906__$1,inst_40907__$1,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40909 = cljs.core.filter.call(null,inst_40908,inst_40906__$1);
var inst_40910 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40911__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40910);
var inst_40912 = cljs.core.not_empty.call(null,inst_40911__$1);
var state_40989__$1 = (function (){var statearr_41017 = state_40989;
(statearr_41017[(23)] = inst_40907__$1);

(statearr_41017[(24)] = inst_40906__$1);

(statearr_41017[(26)] = inst_40909);

(statearr_41017[(25)] = inst_40911__$1);

return statearr_41017;
})();
if(cljs.core.truth_(inst_40912)){
var statearr_41018_41098 = state_40989__$1;
(statearr_41018_41098[(1)] = (23));

} else {
var statearr_41019_41099 = state_40989__$1;
(statearr_41019_41099[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (36))){
var state_40989__$1 = state_40989;
var statearr_41020_41100 = state_40989__$1;
(statearr_41020_41100[(2)] = false);

(statearr_41020_41100[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (41))){
var inst_40964 = (state_40989[(20)]);
var inst_40968 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40969 = cljs.core.map.call(null,inst_40968,inst_40964);
var inst_40970 = cljs.core.pr_str.call(null,inst_40969);
var inst_40971 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40970)].join('');
var inst_40972 = figwheel.client.utils.log.call(null,inst_40971);
var state_40989__$1 = state_40989;
var statearr_41021_41101 = state_40989__$1;
(statearr_41021_41101[(2)] = inst_40972);

(statearr_41021_41101[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (43))){
var inst_40965 = (state_40989[(21)]);
var inst_40975 = (state_40989[(2)]);
var inst_40976 = cljs.core.not_empty.call(null,inst_40965);
var state_40989__$1 = (function (){var statearr_41022 = state_40989;
(statearr_41022[(27)] = inst_40975);

return statearr_41022;
})();
if(cljs.core.truth_(inst_40976)){
var statearr_41023_41102 = state_40989__$1;
(statearr_41023_41102[(1)] = (44));

} else {
var statearr_41024_41103 = state_40989__$1;
(statearr_41024_41103[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (29))){
var inst_40903 = (state_40989[(19)]);
var inst_40907 = (state_40989[(23)]);
var inst_40906 = (state_40989[(24)]);
var inst_40943 = (state_40989[(16)]);
var inst_40909 = (state_40989[(26)]);
var inst_40911 = (state_40989[(25)]);
var inst_40939 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40942 = (function (){var all_files = inst_40903;
var res_SINGLEQUOTE_ = inst_40906;
var res = inst_40907;
var files_not_loaded = inst_40909;
var dependencies_that_loaded = inst_40911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40943,inst_40909,inst_40911,inst_40939,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40941){
var map__41025 = p__40941;
var map__41025__$1 = ((((!((map__41025 == null)))?((((map__41025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41025):map__41025);
var namespace = cljs.core.get.call(null,map__41025__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40943,inst_40909,inst_40911,inst_40939,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40943__$1 = cljs.core.group_by.call(null,inst_40942,inst_40909);
var inst_40945 = (inst_40943__$1 == null);
var inst_40946 = cljs.core.not.call(null,inst_40945);
var state_40989__$1 = (function (){var statearr_41027 = state_40989;
(statearr_41027[(16)] = inst_40943__$1);

(statearr_41027[(28)] = inst_40939);

return statearr_41027;
})();
if(inst_40946){
var statearr_41028_41104 = state_40989__$1;
(statearr_41028_41104[(1)] = (32));

} else {
var statearr_41029_41105 = state_40989__$1;
(statearr_41029_41105[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (44))){
var inst_40965 = (state_40989[(21)]);
var inst_40978 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40965);
var inst_40979 = cljs.core.pr_str.call(null,inst_40978);
var inst_40980 = [cljs.core.str("not required: "),cljs.core.str(inst_40979)].join('');
var inst_40981 = figwheel.client.utils.log.call(null,inst_40980);
var state_40989__$1 = state_40989;
var statearr_41030_41106 = state_40989__$1;
(statearr_41030_41106[(2)] = inst_40981);

(statearr_41030_41106[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (6))){
var inst_40884 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41031_41107 = state_40989__$1;
(statearr_41031_41107[(2)] = inst_40884);

(statearr_41031_41107[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (28))){
var inst_40909 = (state_40989[(26)]);
var inst_40936 = (state_40989[(2)]);
var inst_40937 = cljs.core.not_empty.call(null,inst_40909);
var state_40989__$1 = (function (){var statearr_41032 = state_40989;
(statearr_41032[(29)] = inst_40936);

return statearr_41032;
})();
if(cljs.core.truth_(inst_40937)){
var statearr_41033_41108 = state_40989__$1;
(statearr_41033_41108[(1)] = (29));

} else {
var statearr_41034_41109 = state_40989__$1;
(statearr_41034_41109[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (25))){
var inst_40907 = (state_40989[(23)]);
var inst_40923 = (state_40989[(2)]);
var inst_40924 = cljs.core.not_empty.call(null,inst_40907);
var state_40989__$1 = (function (){var statearr_41035 = state_40989;
(statearr_41035[(30)] = inst_40923);

return statearr_41035;
})();
if(cljs.core.truth_(inst_40924)){
var statearr_41036_41110 = state_40989__$1;
(statearr_41036_41110[(1)] = (26));

} else {
var statearr_41037_41111 = state_40989__$1;
(statearr_41037_41111[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (34))){
var inst_40958 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
if(cljs.core.truth_(inst_40958)){
var statearr_41038_41112 = state_40989__$1;
(statearr_41038_41112[(1)] = (38));

} else {
var statearr_41039_41113 = state_40989__$1;
(statearr_41039_41113[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (17))){
var state_40989__$1 = state_40989;
var statearr_41040_41114 = state_40989__$1;
(statearr_41040_41114[(2)] = recompile_dependents);

(statearr_41040_41114[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (3))){
var state_40989__$1 = state_40989;
var statearr_41041_41115 = state_40989__$1;
(statearr_41041_41115[(2)] = null);

(statearr_41041_41115[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (12))){
var inst_40880 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41042_41116 = state_40989__$1;
(statearr_41042_41116[(2)] = inst_40880);

(statearr_41042_41116[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (2))){
var inst_40842 = (state_40989[(13)]);
var inst_40849 = cljs.core.seq.call(null,inst_40842);
var inst_40850 = inst_40849;
var inst_40851 = null;
var inst_40852 = (0);
var inst_40853 = (0);
var state_40989__$1 = (function (){var statearr_41043 = state_40989;
(statearr_41043[(7)] = inst_40852);

(statearr_41043[(8)] = inst_40851);

(statearr_41043[(9)] = inst_40853);

(statearr_41043[(10)] = inst_40850);

return statearr_41043;
})();
var statearr_41044_41117 = state_40989__$1;
(statearr_41044_41117[(2)] = null);

(statearr_41044_41117[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (23))){
var inst_40903 = (state_40989[(19)]);
var inst_40907 = (state_40989[(23)]);
var inst_40906 = (state_40989[(24)]);
var inst_40909 = (state_40989[(26)]);
var inst_40911 = (state_40989[(25)]);
var inst_40914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40916 = (function (){var all_files = inst_40903;
var res_SINGLEQUOTE_ = inst_40906;
var res = inst_40907;
var files_not_loaded = inst_40909;
var dependencies_that_loaded = inst_40911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40909,inst_40911,inst_40914,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40915){
var map__41045 = p__40915;
var map__41045__$1 = ((((!((map__41045 == null)))?((((map__41045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41045):map__41045);
var request_url = cljs.core.get.call(null,map__41045__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40909,inst_40911,inst_40914,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40917 = cljs.core.reverse.call(null,inst_40911);
var inst_40918 = cljs.core.map.call(null,inst_40916,inst_40917);
var inst_40919 = cljs.core.pr_str.call(null,inst_40918);
var inst_40920 = figwheel.client.utils.log.call(null,inst_40919);
var state_40989__$1 = (function (){var statearr_41047 = state_40989;
(statearr_41047[(31)] = inst_40914);

return statearr_41047;
})();
var statearr_41048_41118 = state_40989__$1;
(statearr_41048_41118[(2)] = inst_40920);

(statearr_41048_41118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (35))){
var state_40989__$1 = state_40989;
var statearr_41049_41119 = state_40989__$1;
(statearr_41049_41119[(2)] = true);

(statearr_41049_41119[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (19))){
var inst_40893 = (state_40989[(12)]);
var inst_40899 = figwheel.client.file_reloading.expand_files.call(null,inst_40893);
var state_40989__$1 = state_40989;
var statearr_41050_41120 = state_40989__$1;
(statearr_41050_41120[(2)] = inst_40899);

(statearr_41050_41120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (11))){
var state_40989__$1 = state_40989;
var statearr_41051_41121 = state_40989__$1;
(statearr_41051_41121[(2)] = null);

(statearr_41051_41121[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (9))){
var inst_40882 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41052_41122 = state_40989__$1;
(statearr_41052_41122[(2)] = inst_40882);

(statearr_41052_41122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (5))){
var inst_40852 = (state_40989[(7)]);
var inst_40853 = (state_40989[(9)]);
var inst_40855 = (inst_40853 < inst_40852);
var inst_40856 = inst_40855;
var state_40989__$1 = state_40989;
if(cljs.core.truth_(inst_40856)){
var statearr_41053_41123 = state_40989__$1;
(statearr_41053_41123[(1)] = (7));

} else {
var statearr_41054_41124 = state_40989__$1;
(statearr_41054_41124[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (14))){
var inst_40863 = (state_40989[(22)]);
var inst_40872 = cljs.core.first.call(null,inst_40863);
var inst_40873 = figwheel.client.file_reloading.eval_body.call(null,inst_40872,opts);
var inst_40874 = cljs.core.next.call(null,inst_40863);
var inst_40850 = inst_40874;
var inst_40851 = null;
var inst_40852 = (0);
var inst_40853 = (0);
var state_40989__$1 = (function (){var statearr_41055 = state_40989;
(statearr_41055[(7)] = inst_40852);

(statearr_41055[(8)] = inst_40851);

(statearr_41055[(9)] = inst_40853);

(statearr_41055[(10)] = inst_40850);

(statearr_41055[(32)] = inst_40873);

return statearr_41055;
})();
var statearr_41056_41125 = state_40989__$1;
(statearr_41056_41125[(2)] = null);

(statearr_41056_41125[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (45))){
var state_40989__$1 = state_40989;
var statearr_41057_41126 = state_40989__$1;
(statearr_41057_41126[(2)] = null);

(statearr_41057_41126[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (26))){
var inst_40903 = (state_40989[(19)]);
var inst_40907 = (state_40989[(23)]);
var inst_40906 = (state_40989[(24)]);
var inst_40909 = (state_40989[(26)]);
var inst_40911 = (state_40989[(25)]);
var inst_40926 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40928 = (function (){var all_files = inst_40903;
var res_SINGLEQUOTE_ = inst_40906;
var res = inst_40907;
var files_not_loaded = inst_40909;
var dependencies_that_loaded = inst_40911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40909,inst_40911,inst_40926,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40927){
var map__41058 = p__40927;
var map__41058__$1 = ((((!((map__41058 == null)))?((((map__41058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41058):map__41058);
var namespace = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41058__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40909,inst_40911,inst_40926,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40929 = cljs.core.map.call(null,inst_40928,inst_40907);
var inst_40930 = cljs.core.pr_str.call(null,inst_40929);
var inst_40931 = figwheel.client.utils.log.call(null,inst_40930);
var inst_40932 = (function (){var all_files = inst_40903;
var res_SINGLEQUOTE_ = inst_40906;
var res = inst_40907;
var files_not_loaded = inst_40909;
var dependencies_that_loaded = inst_40911;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40909,inst_40911,inst_40926,inst_40928,inst_40929,inst_40930,inst_40931,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40903,inst_40907,inst_40906,inst_40909,inst_40911,inst_40926,inst_40928,inst_40929,inst_40930,inst_40931,state_val_40990,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40933 = setTimeout(inst_40932,(10));
var state_40989__$1 = (function (){var statearr_41060 = state_40989;
(statearr_41060[(33)] = inst_40926);

(statearr_41060[(34)] = inst_40931);

return statearr_41060;
})();
var statearr_41061_41127 = state_40989__$1;
(statearr_41061_41127[(2)] = inst_40933);

(statearr_41061_41127[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (16))){
var state_40989__$1 = state_40989;
var statearr_41062_41128 = state_40989__$1;
(statearr_41062_41128[(2)] = reload_dependents);

(statearr_41062_41128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (38))){
var inst_40943 = (state_40989[(16)]);
var inst_40960 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40943);
var state_40989__$1 = state_40989;
var statearr_41063_41129 = state_40989__$1;
(statearr_41063_41129[(2)] = inst_40960);

(statearr_41063_41129[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (30))){
var state_40989__$1 = state_40989;
var statearr_41064_41130 = state_40989__$1;
(statearr_41064_41130[(2)] = null);

(statearr_41064_41130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (10))){
var inst_40863 = (state_40989[(22)]);
var inst_40865 = cljs.core.chunked_seq_QMARK_.call(null,inst_40863);
var state_40989__$1 = state_40989;
if(inst_40865){
var statearr_41065_41131 = state_40989__$1;
(statearr_41065_41131[(1)] = (13));

} else {
var statearr_41066_41132 = state_40989__$1;
(statearr_41066_41132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (18))){
var inst_40897 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
if(cljs.core.truth_(inst_40897)){
var statearr_41067_41133 = state_40989__$1;
(statearr_41067_41133[(1)] = (19));

} else {
var statearr_41068_41134 = state_40989__$1;
(statearr_41068_41134[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (42))){
var state_40989__$1 = state_40989;
var statearr_41069_41135 = state_40989__$1;
(statearr_41069_41135[(2)] = null);

(statearr_41069_41135[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (37))){
var inst_40955 = (state_40989[(2)]);
var state_40989__$1 = state_40989;
var statearr_41070_41136 = state_40989__$1;
(statearr_41070_41136[(2)] = inst_40955);

(statearr_41070_41136[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40990 === (8))){
var inst_40863 = (state_40989[(22)]);
var inst_40850 = (state_40989[(10)]);
var inst_40863__$1 = cljs.core.seq.call(null,inst_40850);
var state_40989__$1 = (function (){var statearr_41071 = state_40989;
(statearr_41071[(22)] = inst_40863__$1);

return statearr_41071;
})();
if(inst_40863__$1){
var statearr_41072_41137 = state_40989__$1;
(statearr_41072_41137[(1)] = (10));

} else {
var statearr_41073_41138 = state_40989__$1;
(statearr_41073_41138[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25003__auto__,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto____0 = (function (){
var statearr_41077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41077[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto__);

(statearr_41077[(1)] = (1));

return statearr_41077;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto____1 = (function (state_40989){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_40989);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e41078){if((e41078 instanceof Object)){
var ex__25007__auto__ = e41078;
var statearr_41079_41139 = state_40989;
(statearr_41079_41139[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40989);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41140 = state_40989;
state_40989 = G__41140;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto__ = function(state_40989){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto____1.call(this,state_40989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__25117__auto__ = (function (){var statearr_41080 = f__25116__auto__.call(null);
(statearr_41080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto__);

return statearr_41080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto__,map__40835,map__40835__$1,opts,before_jsload,on_jsload,reload_dependents,map__40836,map__40836__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__25115__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41143,link){
var map__41146 = p__41143;
var map__41146__$1 = ((((!((map__41146 == null)))?((((map__41146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41146):map__41146);
var file = cljs.core.get.call(null,map__41146__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41146,map__41146__$1,file){
return (function (p1__41141_SHARP_,p2__41142_SHARP_){
if(cljs.core._EQ_.call(null,p1__41141_SHARP_,p2__41142_SHARP_)){
return p1__41141_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41146,map__41146__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41152){
var map__41153 = p__41152;
var map__41153__$1 = ((((!((map__41153 == null)))?((((map__41153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41153):map__41153);
var match_length = cljs.core.get.call(null,map__41153__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41153__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41148_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41148_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args41155 = [];
var len__22777__auto___41158 = arguments.length;
var i__22778__auto___41159 = (0);
while(true){
if((i__22778__auto___41159 < len__22777__auto___41158)){
args41155.push((arguments[i__22778__auto___41159]));

var G__41160 = (i__22778__auto___41159 + (1));
i__22778__auto___41159 = G__41160;
continue;
} else {
}
break;
}

var G__41157 = args41155.length;
switch (G__41157) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41155.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41162_SHARP_,p2__41163_SHARP_){
return cljs.core.assoc.call(null,p1__41162_SHARP_,cljs.core.get.call(null,p2__41163_SHARP_,key),p2__41163_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__41164){
var map__41167 = p__41164;
var map__41167__$1 = ((((!((map__41167 == null)))?((((map__41167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41167):map__41167);
var f_data = map__41167__$1;
var file = cljs.core.get.call(null,map__41167__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41169,files_msg){
var map__41176 = p__41169;
var map__41176__$1 = ((((!((map__41176 == null)))?((((map__41176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41176):map__41176);
var opts = map__41176__$1;
var on_cssload = cljs.core.get.call(null,map__41176__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__41178_41182 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__41179_41183 = null;
var count__41180_41184 = (0);
var i__41181_41185 = (0);
while(true){
if((i__41181_41185 < count__41180_41184)){
var f_41186 = cljs.core._nth.call(null,chunk__41179_41183,i__41181_41185);
figwheel.client.file_reloading.reload_css_file.call(null,f_41186);

var G__41187 = seq__41178_41182;
var G__41188 = chunk__41179_41183;
var G__41189 = count__41180_41184;
var G__41190 = (i__41181_41185 + (1));
seq__41178_41182 = G__41187;
chunk__41179_41183 = G__41188;
count__41180_41184 = G__41189;
i__41181_41185 = G__41190;
continue;
} else {
var temp__4657__auto___41191 = cljs.core.seq.call(null,seq__41178_41182);
if(temp__4657__auto___41191){
var seq__41178_41192__$1 = temp__4657__auto___41191;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41178_41192__$1)){
var c__22518__auto___41193 = cljs.core.chunk_first.call(null,seq__41178_41192__$1);
var G__41194 = cljs.core.chunk_rest.call(null,seq__41178_41192__$1);
var G__41195 = c__22518__auto___41193;
var G__41196 = cljs.core.count.call(null,c__22518__auto___41193);
var G__41197 = (0);
seq__41178_41182 = G__41194;
chunk__41179_41183 = G__41195;
count__41180_41184 = G__41196;
i__41181_41185 = G__41197;
continue;
} else {
var f_41198 = cljs.core.first.call(null,seq__41178_41192__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_41198);

var G__41199 = cljs.core.next.call(null,seq__41178_41192__$1);
var G__41200 = null;
var G__41201 = (0);
var G__41202 = (0);
seq__41178_41182 = G__41199;
chunk__41179_41183 = G__41200;
count__41180_41184 = G__41201;
i__41181_41185 = G__41202;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__41176,map__41176__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__41176,map__41176__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1474548521513
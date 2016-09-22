// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.userAgent.product');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return !((goog.global.document == null));
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,"$1");
});
figwheel.client.utils.create_custom_event = (function figwheel$client$utils$create_custom_event(event_name,data){
if(cljs.core.not.call(null,goog.userAgent.product.IE)){
return (new CustomEvent(event_name,(function (){var obj40171 = {"detail":data};
return obj40171;
})()));
} else {
var event = document.createEvent("CustomEvent");
event.initCustomEvent(event_name,false,false,data);

return event;
}
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__21695__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__21695__auto__)){
var and__21695__auto____$1 = (window["CustomEvent"]);
if(cljs.core.truth_(and__21695__auto____$1)){
return typeof document !== 'undefined';
} else {
return and__21695__auto____$1;
}
} else {
return and__21695__auto__;
}
})())){
return document.body.dispatchEvent(figwheel.client.utils.create_custom_event.call(null,event_name,data));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args40176 = [];
var len__22777__auto___40182 = arguments.length;
var i__22778__auto___40183 = (0);
while(true){
if((i__22778__auto___40183 < len__22777__auto___40182)){
args40176.push((arguments[i__22778__auto___40183]));

var G__40184 = (i__22778__auto___40183 + (1));
i__22778__auto___40183 = G__40184;
continue;
} else {
}
break;
}

var G__40178 = args40176.length;
switch (G__40178) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40176.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__40179 = cljs.core._EQ_;
var expr__40180 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__40179.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__40180))){
return ((function (pred__40179,expr__40180){
return (function (p1__40172_SHARP_){
return console.warn(p1__40172_SHARP_);
});
;})(pred__40179,expr__40180))
} else {
if(cljs.core.truth_(pred__40179.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__40180))){
return ((function (pred__40179,expr__40180){
return (function (p1__40173_SHARP_){
return console.debug(p1__40173_SHARP_);
});
;})(pred__40179,expr__40180))
} else {
if(cljs.core.truth_(pred__40179.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__40180))){
return ((function (pred__40179,expr__40180){
return (function (p1__40174_SHARP_){
return console.error(p1__40174_SHARP_);
});
;})(pred__40179,expr__40180))
} else {
return ((function (pred__40179,expr__40180){
return (function (p1__40175_SHARP_){
return console.log(p1__40175_SHARP_);
});
;})(pred__40179,expr__40180))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__40186){
var map__40189 = p__40186;
var map__40189__$1 = ((((!((map__40189 == null)))?((((map__40189.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40189.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40189):map__40189);
var opts = map__40189__$1;
var eval_fn = cljs.core.get.call(null,map__40189__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map?rel=1474548520658
// Compiled by ClojureScript 1.8.51 {}
goog.provide('superformulau_test.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('cljsjs.d3');
goog.require('superformulau_test.db');
superformulau_test.views.slider = (function superformulau_test$views$slider(name,creature,p__36973,val){
var vec__36975 = p__36973;
var min = cljs.core.nth.call(null,vec__36975,(0),null);
var max = cljs.core.nth.call(null,vec__36975,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__36975,min,max){
return (function (p1__36972_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-sfu-key","set-sfu-key",-1779623507),creature,cljs.core.keyword.call(null,name),p1__36972_SHARP_.target.value], null));
});})(vec__36975,min,max))
,new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"step","step",1288888124),((max - min) / (1000)),new cljs.core.Keyword(null,"max","max",61366548),max], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),name], null),[cljs.core.str(name),cljs.core.str(" = "),cljs.core.str(val)].join('')], null)], null);
});
superformulau_test.views.closing_button = (function superformulau_test$views$closing_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.closing-button","a.closing-button",-908438948),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goto-status","goto-status",-1096666285),new cljs.core.Keyword(null,"general","general",380803686)], null));
})], null),"\u2716"], null);
});
superformulau_test.views.slider_panel = (function superformulau_test$views$slider_panel(){
var creatures = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-list","creature-list",536678278)], null));
var selected_creature = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-change","creature-change",447133651)], null));
return ((function (creatures,selected_creature){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.closing_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),[cljs.core.str("You have selected creature #"),cljs.core.str(cljs.core.deref.call(null,selected_creature))].join('')], null),(function (){var creature = cljs.core.nth.call(null,cljs.core.deref.call(null,creatures),cljs.core.deref.call(null,selected_creature));
var template = cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (creature,creatures,selected_creature){
return (function (p1__36976_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__36976_SHARP_,p1__36976_SHARP_.call(null,superformulau_test.db.ranges)],null));
});})(creature,creatures,selected_creature))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"n1","n1",-1687681187),new cljs.core.Keyword(null,"n2","n2",1481890316),new cljs.core.Keyword(null,"n3","n3",-1957751996)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columnated","div.columnated",1082513085),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471)], null),(function (){var iter__22487__auto__ = ((function (creature,template,creatures,selected_creature){
return (function superformulau_test$views$slider_panel_$_iter__36981(s__36982){
return (new cljs.core.LazySeq(null,((function (creature,template,creatures,selected_creature){
return (function (){
var s__36982__$1 = s__36982;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36982__$1);
if(temp__4657__auto__){
var s__36982__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36982__$2)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,s__36982__$2);
var size__22486__auto__ = cljs.core.count.call(null,c__22485__auto__);
var b__36984 = cljs.core.chunk_buffer.call(null,size__22486__auto__);
if((function (){var i__36983 = (0);
while(true){
if((i__36983 < size__22486__auto__)){
var k = cljs.core._nth.call(null,c__22485__auto__,i__36983);
cljs.core.chunk_append.call(null,b__36984,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.slider,cljs.core.subs.call(null,[cljs.core.str(k)].join(''),(1)),cljs.core.deref.call(null,selected_creature),k.call(null,cljs.core.apply.call(null,cljs.core.array_map,template)),k.call(null,creature)], null));

var G__36985 = (i__36983 + (1));
i__36983 = G__36985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36984),superformulau_test$views$slider_panel_$_iter__36981.call(null,cljs.core.chunk_rest.call(null,s__36982__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36984),null);
}
} else {
var k = cljs.core.first.call(null,s__36982__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.slider,cljs.core.subs.call(null,[cljs.core.str(k)].join(''),(1)),cljs.core.deref.call(null,selected_creature),k.call(null,cljs.core.apply.call(null,cljs.core.array_map,template)),k.call(null,creature)], null),superformulau_test$views$slider_panel_$_iter__36981.call(null,cljs.core.rest.call(null,s__36982__$2)));
}
} else {
return null;
}
break;
}
});})(creature,template,creatures,selected_creature))
,null,null));
});})(creature,template,creatures,selected_creature))
;
return iter__22487__auto__.call(null,cljs.core.take_nth.call(null,(2),template));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (creature,template,creatures,selected_creature){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"goto-status","goto-status",-1096666285),new cljs.core.Keyword(null,"explanation","explanation",-1426612608)], null));
});})(creature,template,creatures,selected_creature))
], null),"More info on the superformula-u..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.highlighted","svg.highlighted",1968108031),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.highlighted_comp,creature,cljs.core.deref.call(null,selected_creature)], null)], null)], null)], null);
})()], null);
});
;})(creatures,selected_creature))
});
superformulau_test.views.explanation_panel = (function superformulau_test$views$explanation_panel(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.closing_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"A brief explanation of the Superformula-U"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://en.wikipedia.org/wiki/Superformula"], null),"According to Wikipedia,"], null)," around 2000, Johan Gielis published (and patented) the following formula:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"$$r(\\varphi) = \\left (\\left |\\frac{cos(\\frac{m\\varphi}{4})}{a}\\right |^{n_2} + \\left |\\frac{sin(\\frac{m\\varphi}{4})}{b}\\right |^{n_3}\\right )^{-\\frac{1}{n_1}}$$"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"In April 7, 2004, Uwe St\u00F6hr published ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://fkurth.de/uwest/usti/Superformel/SuperformulaU.pdf"], null),"a generalization of the Superformula"], null),", which he titled SuperformulaU:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"$$r(\\varphi) = \\left (\\left |\\frac{cos(\\frac{y\\varphi}{4})}{a}\\right |^{n_2} + \\left |\\frac{sin(\\frac{z\\varphi}{4})}{b}\\right |^{n_3}\\right )^{-\\frac{1}{n_1}} $$"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"From what I understand, the latter one does not hold a patent, and, being just a mathematical formula, we can all play with it. ","(But who knows for sure, these days legality is a weird area.)"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This page implements the latter one thousands of times, so you can get a feeling of the variety of patterns that these family of formulas can generate. ","Clicking on any 'creature', you can navigate and fine-tune the parameters that create that specific instance, and save them for your use in any other ","applications, such as for example games, art, or UX design."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"I hope you like it! Please do tell me if you find it interesting."], null)], null);
});
superformulau_test.views.about_panel = (function superformulau_test$views$about_panel(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.closing_button], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About this site"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Initially this was a quick test of how to use D3 inside a clojurescript re-frame application. ","I found the wikipedia page for the superformula and it seemed a fun way to test it. ","But over a couple of days, the organic look of the superformula gave way to this idea, and ","as it seemed a fun experiment, I evolved it a little bit more."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"So now the superformula is alive, and you can use this sort of petri dish to explore interesting ","parameters for the applications (games, graphics, etc.) that you may want to build."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can also explore the source code and fork it as you please. In that case, please ping me ","so I can know that you found this experiment interesting! I can also link to your creations if ","you like."], null)], null);
});
superformulau_test.views.superformulau_radium = (function superformulau_test$views$superformulau_radium(angle,p__36986){
var vec__36988 = p__36986;
var a = cljs.core.nth.call(null,vec__36988,(0),null);
var b = cljs.core.nth.call(null,vec__36988,(1),null);
var y = cljs.core.nth.call(null,vec__36988,(2),null);
var z = cljs.core.nth.call(null,vec__36988,(3),null);
var n1 = cljs.core.nth.call(null,vec__36988,(4),null);
var n2 = cljs.core.nth.call(null,vec__36988,(5),null);
var n3 = cljs.core.nth.call(null,vec__36988,(6),null);
return Math.pow((Math.pow(Math.abs((Math.cos(((y * angle) * ((1) / (4)))) / a)),n2) + Math.pow(Math.abs((Math.sin(((z * angle) * ((1) / (4)))) / b)),n3)),(- ((1) / n1)));
});
superformulau_test.views.polar_to_cartesian = (function superformulau_test$views$polar_to_cartesian(p__36989){
var vec__36991 = p__36989;
var angle = cljs.core.nth.call(null,vec__36991,(0),null);
var radium = cljs.core.nth.call(null,vec__36991,(1),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(radium * Math.cos(angle)),(radium * Math.sin(angle))], null);
});
superformulau_test.views.z_pos_correction = (function superformulau_test$views$z_pos_correction(z){

var sizescale = new cljs.core.Keyword(null,"posz","posz",-1752379672).cljs$core$IFn$_invoke$arity$1(superformulau_test.db.ranges);
var targetscale = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,2.0], null);
var factor = (0.5 * cljs.core.apply.call(null,cljs.core._PLUS_,cljs.core.map.call(null,((function (sizescale,targetscale){
return (function (p1__36992_SHARP_){
return cljs.core.apply.call(null,cljs.core._SLASH_,p1__36992_SHARP_);
});})(sizescale,targetscale))
,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,sizescale,cljs.core.map.call(null,cljs.core.dec,targetscale))))));
return ((1) + (z / factor));
});
/**
 * Returns a superformulaU based figure. Parameters for the function are:
 * - [Mandatory] size: The radium of the base circle.
 * - [Optional] position: An [x y] vector. (0,0) if not provided.
 * - [Optional] resolution: The number of defining points. 64 if not provided.
 * - [Optional] params: A vector of 7 params that define the figure. Random if not provided.
 */
superformulau_test.views.sfu_figure = (function superformulau_test$views$sfu_figure(var_args){
var args36995 = [];
var len__22777__auto___37000 = arguments.length;
var i__22778__auto___37001 = (0);
while(true){
if((i__22778__auto___37001 < len__22777__auto___37000)){
args36995.push((arguments[i__22778__auto___37001]));

var G__37002 = (i__22778__auto___37001 + (1));
i__22778__auto___37001 = G__37002;
continue;
} else {
}
break;
}

var G__36997 = args36995.length;
switch (G__36997) {
case 1:
return superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36995.length)].join('')));

}
});

superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$1 = (function (size){
return superformulau_test.views.sfu_figure.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null));
});

superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$2 = (function (size,position){
return superformulau_test.views.sfu_figure.call(null,size,position,(64));
});

superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$3 = (function (size,position,resolution){
return superformulau_test.views.sfu_figure.call(null,size,position,resolution,cljs.core.take.call(null,(7),cljs.core.repeatedly.call(null,cljs.core.rand)));
});

superformulau_test.views.sfu_figure.cljs$core$IFn$_invoke$arity$4 = (function (size,p__36998,resolution,params){
var vec__36999 = p__36998;
var x = cljs.core.nth.call(null,vec__36999,(0),null);
var y = cljs.core.nth.call(null,vec__36999,(1),null);
var z = cljs.core.nth.call(null,vec__36999,(2),null);
var pi2 = ((2) * Math.PI);
var steps = cljs.core.range.call(null,(0),pi2,(pi2 / resolution));
var radiums = cljs.core.map.call(null,((function (pi2,steps,vec__36999,x,y,z){
return (function (p1__36993_SHARP_){
return superformulau_test.views.superformulau_radium.call(null,p1__36993_SHARP_,params);
});})(pi2,steps,vec__36999,x,y,z))
,steps);
var mean_radium = (cljs.core.apply.call(null,cljs.core._PLUS_,radiums) / cljs.core.count.call(null,radiums));
var scaled_radiums = cljs.core.map.call(null,((function (pi2,steps,radiums,mean_radium,vec__36999,x,y,z){
return (function (p1__36994_SHARP_){
return ((p1__36994_SHARP_ * superformulau_test.views.z_pos_correction.call(null,z)) * (size / mean_radium));
});})(pi2,steps,radiums,mean_radium,vec__36999,x,y,z))
,radiums);
var polarcoords = cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,steps,scaled_radiums));
return polarcoords;
});

superformulau_test.views.sfu_figure.cljs$lang$maxFixedArity = 4;
superformulau_test.views.sfu_paint = (function superformulau_test$views$sfu_paint(size,values,p__37004,index,is_highlighted_QMARK_){
var vec__37006 = p__37004;
var x = cljs.core.nth.call(null,vec__37006,(0),null);
var y = cljs.core.nth.call(null,vec__37006,(1),null);
var z = cljs.core.nth.call(null,vec__37006,(2),null);
var hue = new cljs.core.Keyword(null,"hue","hue",-508078848).cljs$core$IFn$_invoke$arity$1(values);
var valuevec = cljs.core.map.call(null,values,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"z","z",-789527183),new cljs.core.Keyword(null,"n1","n1",-1687681187),new cljs.core.Keyword(null,"n2","n2",1481890316),new cljs.core.Keyword(null,"n3","n3",-1957751996)], null));
var d3values = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.sfu_figure.call(null,size,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),(128),valuevec)], null));
var base_selection = (cljs.core.truth_(is_highlighted_QMARK_)?d3.selectAll("svg.highlighted").selectAll("g").select("g").data(d3values):d3.selectAll("svg.sfu").selectAll("g").filter(((function (hue,valuevec,d3values,vec__37006,x,y,z){
return (function (d,i){
return cljs.core._EQ_.call(null,i,index);
});})(hue,valuevec,d3values,vec__37006,x,y,z))
).select("g").data(d3values));
var opacity = (function (){var x__22045__auto__ = (1);
var y__22046__auto__ = (0.25 * superformulau_test.views.z_pos_correction.call(null,z));
return ((x__22045__auto__ < y__22046__auto__) ? x__22045__auto__ : y__22046__auto__);
})();
var corrected_stroke_width = (((4) * superformulau_test.views.z_pos_correction.call(null,z)) | (0));
var blur_level = (((10) - ((5) * superformulau_test.views.z_pos_correction.call(null,z))) | (0));
base_selection.enter().append("svg:g").on("click",((function (hue,valuevec,d3values,base_selection,opacity,corrected_stroke_width,blur_level,vec__37006,x,y,z){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-creature","select-creature",-1553400475),index], null));
});})(hue,valuevec,d3values,base_selection,opacity,corrected_stroke_width,blur_level,vec__37006,x,y,z))
).attr("transform",[cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('')).append("svg:path").attr("d",d3.radialLine()).style("stroke",[cljs.core.str("hsla("),cljs.core.str(hue),cljs.core.str(", 100%, 50%, 0.5)")].join('')).style("stroke-width",corrected_stroke_width).style("fill",[cljs.core.str("hsla("),cljs.core.str(cljs.core.mod.call(null,(hue + (40)),(360))),cljs.core.str(", 100%, 50%, "),cljs.core.str(opacity),cljs.core.str(")")].join('')).attr("filter",[cljs.core.str("url(#blurFilter"),cljs.core.str(blur_level),cljs.core.str(")")].join(''));

base_selection.select("path").attr("d",d3.radialLine()).style("stroke",[cljs.core.str("hsla("),cljs.core.str(hue),cljs.core.str(", 100%, 50%, 0.5)")].join('')).style("stroke-width",corrected_stroke_width).style("fill",[cljs.core.str("hsla("),cljs.core.str(cljs.core.mod.call(null,(hue + (40)),(360))),cljs.core.str(", 100%, 50%, "),cljs.core.str(opacity),cljs.core.str(")")].join('')).attr("filter",[cljs.core.str("url(#blurFilter"),cljs.core.str(blur_level),cljs.core.str(")")].join(''));

return base_selection.exit().remove();
});
superformulau_test.views.sfu_comp = (function superformulau_test$views$sfu_comp(values,position,index){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"SuperformulaU creature pool",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return superformulau_test.views.sfu_paint.call(null,(15),values,position,index,false);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (p1__37007_SHARP_){
var vec__37009 = reagent.core.argv.call(null,p1__37007_SHARP_);
var _ = cljs.core.nth.call(null,vec__37009,(0),null);
var vals = cljs.core.nth.call(null,vec__37009,(1),null);
return superformulau_test.views.sfu_paint.call(null,(15),vals,position,index,false);
})], null));
});
superformulau_test.views.highlighted_comp = (function superformulau_test$views$highlighted_comp(values,index){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"SuperformulaU highlighted creature",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return superformulau_test.views.sfu_paint.call(null,(200),values,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),index,true);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (p1__37010_SHARP_){
var vec__37012 = reagent.core.argv.call(null,p1__37010_SHARP_);
var _ = cljs.core.nth.call(null,vec__37012,(0),null);
var vals = cljs.core.nth.call(null,vec__37012,(1),null);
return superformulau_test.views.sfu_paint.call(null,(50),vals,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),(100),(0)], null),index,true);
})], null));
});
superformulau_test.views.svg_defs_section = (function superformulau_test$views$svg_defs_section(){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717)], null),(function (){var iter__22487__auto__ = (function superformulau_test$views$svg_defs_section_$_iter__37017(s__37018){
return (new cljs.core.LazySeq(null,(function (){
var s__37018__$1 = s__37018;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37018__$1);
if(temp__4657__auto__){
var s__37018__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37018__$2)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,s__37018__$2);
var size__22486__auto__ = cljs.core.count.call(null,c__22485__auto__);
var b__37020 = cljs.core.chunk_buffer.call(null,size__22486__auto__);
if((function (){var i__37019 = (0);
while(true){
if((i__37019 < size__22486__auto__)){
var i = cljs.core._nth.call(null,c__22485__auto__,i__37019);
cljs.core.chunk_append.call(null,b__37020,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("blurFilter"),cljs.core.str(i)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),"SourceGraphic",new cljs.core.Keyword(null,"stdDeviation","stdDeviation",1418775521),(i / (5))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("filter"),cljs.core.str(i)].join('')], null)));

var G__37021 = (i__37019 + (1));
i__37019 = G__37021;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37020),superformulau_test$views$svg_defs_section_$_iter__37017.call(null,cljs.core.chunk_rest.call(null,s__37018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37020),null);
}
} else {
var i = cljs.core.first.call(null,s__37018__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str("blurFilter"),cljs.core.str(i)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"in","in",-1531184865),"SourceGraphic",new cljs.core.Keyword(null,"stdDeviation","stdDeviation",1418775521),(i / (5))], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("filter"),cljs.core.str(i)].join('')], null)),superformulau_test$views$svg_defs_section_$_iter__37017.call(null,cljs.core.rest.call(null,s__37018__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__22487__auto__.call(null,cljs.core.range.call(null,(1),(11)));
})());
});
superformulau_test.views.app = (function superformulau_test$views$app(){
var list = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"creature-list","creature-list",536678278)], null));
var status = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null));
return ((function (list,status){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.header","div.header",1964513620),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Superformula-U Test"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"You can click on a random creature, if you like to."], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (list,status){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-status","toggle-status",-530449221),new cljs.core.Keyword(null,"explanation","explanation",-1426612608)], null));
});})(list,status))
], null),"About the SuperformulaU"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (list,status){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-status","toggle-status",-530449221),new cljs.core.Keyword(null,"about","about",1423892543)], null));
});})(list,status))
], null),"About this site"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/AlexAti/superformulau-test"], null),"Check the Github repo"], null)], null)], null)], null),(function (){var G__37031 = (((cljs.core.deref.call(null,status) instanceof cljs.core.Keyword))?cljs.core.deref.call(null,status).fqn:null);
switch (G__37031) {
case "highlighted":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.slider_panel], null);

break;
case "explanation":
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rerender-mathjax","rerender-mathjax",153350600)], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.explanation_panel], null);

break;
case "about":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.about_panel], null);

break;
default:
return null;

}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg.sfu","svg.sfu",-1565992837),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.svg_defs_section], null),(function (){var iter__22487__auto__ = ((function (list,status){
return (function superformulau_test$views$app_$_iter__37032(s__37033){
return (new cljs.core.LazySeq(null,((function (list,status){
return (function (){
var s__37033__$1 = s__37033;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__37033__$1);
if(temp__4657__auto__){
var s__37033__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37033__$2)){
var c__22485__auto__ = cljs.core.chunk_first.call(null,s__37033__$2);
var size__22486__auto__ = cljs.core.count.call(null,c__22485__auto__);
var b__37035 = cljs.core.chunk_buffer.call(null,size__22486__auto__);
if((function (){var i__37034 = (0);
while(true){
if((i__37034 < size__22486__auto__)){
var vec__37038 = cljs.core._nth.call(null,c__22485__auto__,i__37034);
var i = cljs.core.nth.call(null,vec__37038,(0),null);
var c = cljs.core.nth.call(null,vec__37038,(1),null);
cljs.core.chunk_append.call(null,b__37035,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.sfu_comp,c,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(c),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__37041 = (i__37034 + (1));
i__37034 = G__37041;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37035),superformulau_test$views$app_$_iter__37032.call(null,cljs.core.chunk_rest.call(null,s__37033__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37035),null);
}
} else {
var vec__37039 = cljs.core.first.call(null,s__37033__$2);
var i = cljs.core.nth.call(null,vec__37039,(0),null);
var c = cljs.core.nth.call(null,vec__37039,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [superformulau_test.views.sfu_comp,c,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(c),i], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),superformulau_test$views$app_$_iter__37032.call(null,cljs.core.rest.call(null,s__37033__$2)));
}
} else {
return null;
}
break;
}
});})(list,status))
,null,null));
});})(list,status))
;
return iter__22487__auto__.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,cljs.core.range.call(null),cljs.core.deref.call(null,list))));
})()], null)], null);
});
;})(list,status))
});

//# sourceMappingURL=views.js.map?rel=1474548515792
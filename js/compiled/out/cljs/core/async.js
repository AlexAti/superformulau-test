// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37439 = [];
var len__22777__auto___37445 = arguments.length;
var i__22778__auto___37446 = (0);
while(true){
if((i__22778__auto___37446 < len__22777__auto___37445)){
args37439.push((arguments[i__22778__auto___37446]));

var G__37447 = (i__22778__auto___37446 + (1));
i__22778__auto___37446 = G__37447;
continue;
} else {
}
break;
}

var G__37441 = args37439.length;
switch (G__37441) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37439.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37442 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37442 = (function (f,blockable,meta37443){
this.f = f;
this.blockable = blockable;
this.meta37443 = meta37443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37444,meta37443__$1){
var self__ = this;
var _37444__$1 = this;
return (new cljs.core.async.t_cljs$core$async37442(self__.f,self__.blockable,meta37443__$1));
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37444){
var self__ = this;
var _37444__$1 = this;
return self__.meta37443;
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37442.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37443","meta37443",-807569637,null)], null);
});

cljs.core.async.t_cljs$core$async37442.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37442";

cljs.core.async.t_cljs$core$async37442.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async37442");
});

cljs.core.async.__GT_t_cljs$core$async37442 = (function cljs$core$async$__GT_t_cljs$core$async37442(f__$1,blockable__$1,meta37443){
return (new cljs.core.async.t_cljs$core$async37442(f__$1,blockable__$1,meta37443));
});

}

return (new cljs.core.async.t_cljs$core$async37442(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37451 = [];
var len__22777__auto___37454 = arguments.length;
var i__22778__auto___37455 = (0);
while(true){
if((i__22778__auto___37455 < len__22777__auto___37454)){
args37451.push((arguments[i__22778__auto___37455]));

var G__37456 = (i__22778__auto___37455 + (1));
i__22778__auto___37455 = G__37456;
continue;
} else {
}
break;
}

var G__37453 = args37451.length;
switch (G__37453) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37451.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37458 = [];
var len__22777__auto___37461 = arguments.length;
var i__22778__auto___37462 = (0);
while(true){
if((i__22778__auto___37462 < len__22777__auto___37461)){
args37458.push((arguments[i__22778__auto___37462]));

var G__37463 = (i__22778__auto___37462 + (1));
i__22778__auto___37462 = G__37463;
continue;
} else {
}
break;
}

var G__37460 = args37458.length;
switch (G__37460) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37458.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37465 = [];
var len__22777__auto___37468 = arguments.length;
var i__22778__auto___37469 = (0);
while(true){
if((i__22778__auto___37469 < len__22777__auto___37468)){
args37465.push((arguments[i__22778__auto___37469]));

var G__37470 = (i__22778__auto___37469 + (1));
i__22778__auto___37469 = G__37470;
continue;
} else {
}
break;
}

var G__37467 = args37465.length;
switch (G__37467) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37465.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37472 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37472);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37472,ret){
return (function (){
return fn1.call(null,val_37472);
});})(val_37472,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37473 = [];
var len__22777__auto___37476 = arguments.length;
var i__22778__auto___37477 = (0);
while(true){
if((i__22778__auto___37477 < len__22777__auto___37476)){
args37473.push((arguments[i__22778__auto___37477]));

var G__37478 = (i__22778__auto___37477 + (1));
i__22778__auto___37477 = G__37478;
continue;
} else {
}
break;
}

var G__37475 = args37473.length;
switch (G__37475) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37473.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__22622__auto___37480 = n;
var x_37481 = (0);
while(true){
if((x_37481 < n__22622__auto___37480)){
(a[x_37481] = (0));

var G__37482 = (x_37481 + (1));
x_37481 = G__37482;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__37483 = (i + (1));
i = G__37483;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37487 = (function (alt_flag,flag,meta37488){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37488 = meta37488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37489,meta37488__$1){
var self__ = this;
var _37489__$1 = this;
return (new cljs.core.async.t_cljs$core$async37487(self__.alt_flag,self__.flag,meta37488__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37489){
var self__ = this;
var _37489__$1 = this;
return self__.meta37488;
});})(flag))
;

cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37487.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37487.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37488","meta37488",1814045029,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37487";

cljs.core.async.t_cljs$core$async37487.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async37487");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37487 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37487(alt_flag__$1,flag__$1,meta37488){
return (new cljs.core.async.t_cljs$core$async37487(alt_flag__$1,flag__$1,meta37488));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37487(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37493 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37493 = (function (alt_handler,flag,cb,meta37494){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37494 = meta37494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37495,meta37494__$1){
var self__ = this;
var _37495__$1 = this;
return (new cljs.core.async.t_cljs$core$async37493(self__.alt_handler,self__.flag,self__.cb,meta37494__$1));
});

cljs.core.async.t_cljs$core$async37493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37495){
var self__ = this;
var _37495__$1 = this;
return self__.meta37494;
});

cljs.core.async.t_cljs$core$async37493.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37493.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37494","meta37494",1575789540,null)], null);
});

cljs.core.async.t_cljs$core$async37493.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37493";

cljs.core.async.t_cljs$core$async37493.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async37493");
});

cljs.core.async.__GT_t_cljs$core$async37493 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37493(alt_handler__$1,flag__$1,cb__$1,meta37494){
return (new cljs.core.async.t_cljs$core$async37493(alt_handler__$1,flag__$1,cb__$1,meta37494));
});

}

return (new cljs.core.async.t_cljs$core$async37493(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37496_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37496_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37497_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37497_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__21707__auto__ = wport;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37498 = (i + (1));
i = G__37498;
continue;
}
} else {
return null;
}
break;
}
})();
var or__21707__auto__ = ret;
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__21695__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__21695__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__21695__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___37504 = arguments.length;
var i__22778__auto___37505 = (0);
while(true){
if((i__22778__auto___37505 < len__22777__auto___37504)){
args__22784__auto__.push((arguments[i__22778__auto___37505]));

var G__37506 = (i__22778__auto___37505 + (1));
i__22778__auto___37505 = G__37506;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((1) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__22785__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37501){
var map__37502 = p__37501;
var map__37502__$1 = ((((!((map__37502 == null)))?((((map__37502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37502):map__37502);
var opts = map__37502__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37499){
var G__37500 = cljs.core.first.call(null,seq37499);
var seq37499__$1 = cljs.core.next.call(null,seq37499);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37500,seq37499__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37507 = [];
var len__22777__auto___37557 = arguments.length;
var i__22778__auto___37558 = (0);
while(true){
if((i__22778__auto___37558 < len__22777__auto___37557)){
args37507.push((arguments[i__22778__auto___37558]));

var G__37559 = (i__22778__auto___37558 + (1));
i__22778__auto___37558 = G__37559;
continue;
} else {
}
break;
}

var G__37509 = args37507.length;
switch (G__37509) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37507.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25115__auto___37561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___37561){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___37561){
return (function (state_37533){
var state_val_37534 = (state_37533[(1)]);
if((state_val_37534 === (7))){
var inst_37529 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37535_37562 = state_37533__$1;
(statearr_37535_37562[(2)] = inst_37529);

(statearr_37535_37562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (1))){
var state_37533__$1 = state_37533;
var statearr_37536_37563 = state_37533__$1;
(statearr_37536_37563[(2)] = null);

(statearr_37536_37563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (4))){
var inst_37512 = (state_37533[(7)]);
var inst_37512__$1 = (state_37533[(2)]);
var inst_37513 = (inst_37512__$1 == null);
var state_37533__$1 = (function (){var statearr_37537 = state_37533;
(statearr_37537[(7)] = inst_37512__$1);

return statearr_37537;
})();
if(cljs.core.truth_(inst_37513)){
var statearr_37538_37564 = state_37533__$1;
(statearr_37538_37564[(1)] = (5));

} else {
var statearr_37539_37565 = state_37533__$1;
(statearr_37539_37565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (13))){
var state_37533__$1 = state_37533;
var statearr_37540_37566 = state_37533__$1;
(statearr_37540_37566[(2)] = null);

(statearr_37540_37566[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (6))){
var inst_37512 = (state_37533[(7)]);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37533__$1,(11),to,inst_37512);
} else {
if((state_val_37534 === (3))){
var inst_37531 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37533__$1,inst_37531);
} else {
if((state_val_37534 === (12))){
var state_37533__$1 = state_37533;
var statearr_37541_37567 = state_37533__$1;
(statearr_37541_37567[(2)] = null);

(statearr_37541_37567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (2))){
var state_37533__$1 = state_37533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37533__$1,(4),from);
} else {
if((state_val_37534 === (11))){
var inst_37522 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
if(cljs.core.truth_(inst_37522)){
var statearr_37542_37568 = state_37533__$1;
(statearr_37542_37568[(1)] = (12));

} else {
var statearr_37543_37569 = state_37533__$1;
(statearr_37543_37569[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (9))){
var state_37533__$1 = state_37533;
var statearr_37544_37570 = state_37533__$1;
(statearr_37544_37570[(2)] = null);

(statearr_37544_37570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (5))){
var state_37533__$1 = state_37533;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37545_37571 = state_37533__$1;
(statearr_37545_37571[(1)] = (8));

} else {
var statearr_37546_37572 = state_37533__$1;
(statearr_37546_37572[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (14))){
var inst_37527 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37547_37573 = state_37533__$1;
(statearr_37547_37573[(2)] = inst_37527);

(statearr_37547_37573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (10))){
var inst_37519 = (state_37533[(2)]);
var state_37533__$1 = state_37533;
var statearr_37548_37574 = state_37533__$1;
(statearr_37548_37574[(2)] = inst_37519);

(statearr_37548_37574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37534 === (8))){
var inst_37516 = cljs.core.async.close_BANG_.call(null,to);
var state_37533__$1 = state_37533;
var statearr_37549_37575 = state_37533__$1;
(statearr_37549_37575[(2)] = inst_37516);

(statearr_37549_37575[(1)] = (10));


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
});})(c__25115__auto___37561))
;
return ((function (switch__25003__auto__,c__25115__auto___37561){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_37553 = [null,null,null,null,null,null,null,null];
(statearr_37553[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_37553[(1)] = (1));

return statearr_37553;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_37533){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_37533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e37554){if((e37554 instanceof Object)){
var ex__25007__auto__ = e37554;
var statearr_37555_37576 = state_37533;
(statearr_37555_37576[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37554;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37577 = state_37533;
state_37533 = G__37577;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_37533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_37533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___37561))
})();
var state__25117__auto__ = (function (){var statearr_37556 = f__25116__auto__.call(null);
(statearr_37556[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___37561);

return statearr_37556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___37561))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37761){
var vec__37762 = p__37761;
var v = cljs.core.nth.call(null,vec__37762,(0),null);
var p = cljs.core.nth.call(null,vec__37762,(1),null);
var job = vec__37762;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25115__auto___37944 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___37944,res,vec__37762,v,p,job,jobs,results){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___37944,res,vec__37762,v,p,job,jobs,results){
return (function (state_37767){
var state_val_37768 = (state_37767[(1)]);
if((state_val_37768 === (1))){
var state_37767__$1 = state_37767;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37767__$1,(2),res,v);
} else {
if((state_val_37768 === (2))){
var inst_37764 = (state_37767[(2)]);
var inst_37765 = cljs.core.async.close_BANG_.call(null,res);
var state_37767__$1 = (function (){var statearr_37769 = state_37767;
(statearr_37769[(7)] = inst_37764);

return statearr_37769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37767__$1,inst_37765);
} else {
return null;
}
}
});})(c__25115__auto___37944,res,vec__37762,v,p,job,jobs,results))
;
return ((function (switch__25003__auto__,c__25115__auto___37944,res,vec__37762,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0 = (function (){
var statearr_37773 = [null,null,null,null,null,null,null,null];
(statearr_37773[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__);

(statearr_37773[(1)] = (1));

return statearr_37773;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1 = (function (state_37767){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_37767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e37774){if((e37774 instanceof Object)){
var ex__25007__auto__ = e37774;
var statearr_37775_37945 = state_37767;
(statearr_37775_37945[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37946 = state_37767;
state_37767 = G__37946;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = function(state_37767){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1.call(this,state_37767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___37944,res,vec__37762,v,p,job,jobs,results))
})();
var state__25117__auto__ = (function (){var statearr_37776 = f__25116__auto__.call(null);
(statearr_37776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___37944);

return statearr_37776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___37944,res,vec__37762,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37777){
var vec__37778 = p__37777;
var v = cljs.core.nth.call(null,vec__37778,(0),null);
var p = cljs.core.nth.call(null,vec__37778,(1),null);
var job = vec__37778;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__22622__auto___37947 = n;
var __37948 = (0);
while(true){
if((__37948 < n__22622__auto___37947)){
var G__37779_37949 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37779_37949) {
case "compute":
var c__25115__auto___37951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37948,c__25115__auto___37951,G__37779_37949,n__22622__auto___37947,jobs,results,process,async){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (__37948,c__25115__auto___37951,G__37779_37949,n__22622__auto___37947,jobs,results,process,async){
return (function (state_37792){
var state_val_37793 = (state_37792[(1)]);
if((state_val_37793 === (1))){
var state_37792__$1 = state_37792;
var statearr_37794_37952 = state_37792__$1;
(statearr_37794_37952[(2)] = null);

(statearr_37794_37952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (2))){
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37792__$1,(4),jobs);
} else {
if((state_val_37793 === (3))){
var inst_37790 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37792__$1,inst_37790);
} else {
if((state_val_37793 === (4))){
var inst_37782 = (state_37792[(2)]);
var inst_37783 = process.call(null,inst_37782);
var state_37792__$1 = state_37792;
if(cljs.core.truth_(inst_37783)){
var statearr_37795_37953 = state_37792__$1;
(statearr_37795_37953[(1)] = (5));

} else {
var statearr_37796_37954 = state_37792__$1;
(statearr_37796_37954[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (5))){
var state_37792__$1 = state_37792;
var statearr_37797_37955 = state_37792__$1;
(statearr_37797_37955[(2)] = null);

(statearr_37797_37955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (6))){
var state_37792__$1 = state_37792;
var statearr_37798_37956 = state_37792__$1;
(statearr_37798_37956[(2)] = null);

(statearr_37798_37956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (7))){
var inst_37788 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37799_37957 = state_37792__$1;
(statearr_37799_37957[(2)] = inst_37788);

(statearr_37799_37957[(1)] = (3));


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
});})(__37948,c__25115__auto___37951,G__37779_37949,n__22622__auto___37947,jobs,results,process,async))
;
return ((function (__37948,switch__25003__auto__,c__25115__auto___37951,G__37779_37949,n__22622__auto___37947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0 = (function (){
var statearr_37803 = [null,null,null,null,null,null,null];
(statearr_37803[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__);

(statearr_37803[(1)] = (1));

return statearr_37803;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1 = (function (state_37792){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_37792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e37804){if((e37804 instanceof Object)){
var ex__25007__auto__ = e37804;
var statearr_37805_37958 = state_37792;
(statearr_37805_37958[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37959 = state_37792;
state_37792 = G__37959;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = function(state_37792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1.call(this,state_37792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__;
})()
;})(__37948,switch__25003__auto__,c__25115__auto___37951,G__37779_37949,n__22622__auto___37947,jobs,results,process,async))
})();
var state__25117__auto__ = (function (){var statearr_37806 = f__25116__auto__.call(null);
(statearr_37806[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___37951);

return statearr_37806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(__37948,c__25115__auto___37951,G__37779_37949,n__22622__auto___37947,jobs,results,process,async))
);


break;
case "async":
var c__25115__auto___37960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37948,c__25115__auto___37960,G__37779_37949,n__22622__auto___37947,jobs,results,process,async){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (__37948,c__25115__auto___37960,G__37779_37949,n__22622__auto___37947,jobs,results,process,async){
return (function (state_37819){
var state_val_37820 = (state_37819[(1)]);
if((state_val_37820 === (1))){
var state_37819__$1 = state_37819;
var statearr_37821_37961 = state_37819__$1;
(statearr_37821_37961[(2)] = null);

(statearr_37821_37961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37820 === (2))){
var state_37819__$1 = state_37819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37819__$1,(4),jobs);
} else {
if((state_val_37820 === (3))){
var inst_37817 = (state_37819[(2)]);
var state_37819__$1 = state_37819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37819__$1,inst_37817);
} else {
if((state_val_37820 === (4))){
var inst_37809 = (state_37819[(2)]);
var inst_37810 = async.call(null,inst_37809);
var state_37819__$1 = state_37819;
if(cljs.core.truth_(inst_37810)){
var statearr_37822_37962 = state_37819__$1;
(statearr_37822_37962[(1)] = (5));

} else {
var statearr_37823_37963 = state_37819__$1;
(statearr_37823_37963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37820 === (5))){
var state_37819__$1 = state_37819;
var statearr_37824_37964 = state_37819__$1;
(statearr_37824_37964[(2)] = null);

(statearr_37824_37964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37820 === (6))){
var state_37819__$1 = state_37819;
var statearr_37825_37965 = state_37819__$1;
(statearr_37825_37965[(2)] = null);

(statearr_37825_37965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37820 === (7))){
var inst_37815 = (state_37819[(2)]);
var state_37819__$1 = state_37819;
var statearr_37826_37966 = state_37819__$1;
(statearr_37826_37966[(2)] = inst_37815);

(statearr_37826_37966[(1)] = (3));


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
});})(__37948,c__25115__auto___37960,G__37779_37949,n__22622__auto___37947,jobs,results,process,async))
;
return ((function (__37948,switch__25003__auto__,c__25115__auto___37960,G__37779_37949,n__22622__auto___37947,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0 = (function (){
var statearr_37830 = [null,null,null,null,null,null,null];
(statearr_37830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__);

(statearr_37830[(1)] = (1));

return statearr_37830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1 = (function (state_37819){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_37819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e37831){if((e37831 instanceof Object)){
var ex__25007__auto__ = e37831;
var statearr_37832_37967 = state_37819;
(statearr_37832_37967[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37968 = state_37819;
state_37819 = G__37968;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = function(state_37819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1.call(this,state_37819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__;
})()
;})(__37948,switch__25003__auto__,c__25115__auto___37960,G__37779_37949,n__22622__auto___37947,jobs,results,process,async))
})();
var state__25117__auto__ = (function (){var statearr_37833 = f__25116__auto__.call(null);
(statearr_37833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___37960);

return statearr_37833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(__37948,c__25115__auto___37960,G__37779_37949,n__22622__auto___37947,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37969 = (__37948 + (1));
__37948 = G__37969;
continue;
} else {
}
break;
}

var c__25115__auto___37970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___37970,jobs,results,process,async){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___37970,jobs,results,process,async){
return (function (state_37855){
var state_val_37856 = (state_37855[(1)]);
if((state_val_37856 === (1))){
var state_37855__$1 = state_37855;
var statearr_37857_37971 = state_37855__$1;
(statearr_37857_37971[(2)] = null);

(statearr_37857_37971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (2))){
var state_37855__$1 = state_37855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37855__$1,(4),from);
} else {
if((state_val_37856 === (3))){
var inst_37853 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37855__$1,inst_37853);
} else {
if((state_val_37856 === (4))){
var inst_37836 = (state_37855[(7)]);
var inst_37836__$1 = (state_37855[(2)]);
var inst_37837 = (inst_37836__$1 == null);
var state_37855__$1 = (function (){var statearr_37858 = state_37855;
(statearr_37858[(7)] = inst_37836__$1);

return statearr_37858;
})();
if(cljs.core.truth_(inst_37837)){
var statearr_37859_37972 = state_37855__$1;
(statearr_37859_37972[(1)] = (5));

} else {
var statearr_37860_37973 = state_37855__$1;
(statearr_37860_37973[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (5))){
var inst_37839 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37855__$1 = state_37855;
var statearr_37861_37974 = state_37855__$1;
(statearr_37861_37974[(2)] = inst_37839);

(statearr_37861_37974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (6))){
var inst_37841 = (state_37855[(8)]);
var inst_37836 = (state_37855[(7)]);
var inst_37841__$1 = cljs.core.async.chan.call(null,(1));
var inst_37842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37843 = [inst_37836,inst_37841__$1];
var inst_37844 = (new cljs.core.PersistentVector(null,2,(5),inst_37842,inst_37843,null));
var state_37855__$1 = (function (){var statearr_37862 = state_37855;
(statearr_37862[(8)] = inst_37841__$1);

return statearr_37862;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37855__$1,(8),jobs,inst_37844);
} else {
if((state_val_37856 === (7))){
var inst_37851 = (state_37855[(2)]);
var state_37855__$1 = state_37855;
var statearr_37863_37975 = state_37855__$1;
(statearr_37863_37975[(2)] = inst_37851);

(statearr_37863_37975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37856 === (8))){
var inst_37841 = (state_37855[(8)]);
var inst_37846 = (state_37855[(2)]);
var state_37855__$1 = (function (){var statearr_37864 = state_37855;
(statearr_37864[(9)] = inst_37846);

return statearr_37864;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37855__$1,(9),results,inst_37841);
} else {
if((state_val_37856 === (9))){
var inst_37848 = (state_37855[(2)]);
var state_37855__$1 = (function (){var statearr_37865 = state_37855;
(statearr_37865[(10)] = inst_37848);

return statearr_37865;
})();
var statearr_37866_37976 = state_37855__$1;
(statearr_37866_37976[(2)] = null);

(statearr_37866_37976[(1)] = (2));


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
});})(c__25115__auto___37970,jobs,results,process,async))
;
return ((function (switch__25003__auto__,c__25115__auto___37970,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0 = (function (){
var statearr_37870 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37870[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__);

(statearr_37870[(1)] = (1));

return statearr_37870;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1 = (function (state_37855){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_37855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e37871){if((e37871 instanceof Object)){
var ex__25007__auto__ = e37871;
var statearr_37872_37977 = state_37855;
(statearr_37872_37977[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37978 = state_37855;
state_37855 = G__37978;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = function(state_37855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1.call(this,state_37855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___37970,jobs,results,process,async))
})();
var state__25117__auto__ = (function (){var statearr_37873 = f__25116__auto__.call(null);
(statearr_37873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___37970);

return statearr_37873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___37970,jobs,results,process,async))
);


var c__25115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto__,jobs,results,process,async){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto__,jobs,results,process,async){
return (function (state_37911){
var state_val_37912 = (state_37911[(1)]);
if((state_val_37912 === (7))){
var inst_37907 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37913_37979 = state_37911__$1;
(statearr_37913_37979[(2)] = inst_37907);

(statearr_37913_37979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (20))){
var state_37911__$1 = state_37911;
var statearr_37914_37980 = state_37911__$1;
(statearr_37914_37980[(2)] = null);

(statearr_37914_37980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (1))){
var state_37911__$1 = state_37911;
var statearr_37915_37981 = state_37911__$1;
(statearr_37915_37981[(2)] = null);

(statearr_37915_37981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (4))){
var inst_37876 = (state_37911[(7)]);
var inst_37876__$1 = (state_37911[(2)]);
var inst_37877 = (inst_37876__$1 == null);
var state_37911__$1 = (function (){var statearr_37916 = state_37911;
(statearr_37916[(7)] = inst_37876__$1);

return statearr_37916;
})();
if(cljs.core.truth_(inst_37877)){
var statearr_37917_37982 = state_37911__$1;
(statearr_37917_37982[(1)] = (5));

} else {
var statearr_37918_37983 = state_37911__$1;
(statearr_37918_37983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (15))){
var inst_37889 = (state_37911[(8)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37911__$1,(18),to,inst_37889);
} else {
if((state_val_37912 === (21))){
var inst_37902 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37919_37984 = state_37911__$1;
(statearr_37919_37984[(2)] = inst_37902);

(statearr_37919_37984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (13))){
var inst_37904 = (state_37911[(2)]);
var state_37911__$1 = (function (){var statearr_37920 = state_37911;
(statearr_37920[(9)] = inst_37904);

return statearr_37920;
})();
var statearr_37921_37985 = state_37911__$1;
(statearr_37921_37985[(2)] = null);

(statearr_37921_37985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (6))){
var inst_37876 = (state_37911[(7)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37911__$1,(11),inst_37876);
} else {
if((state_val_37912 === (17))){
var inst_37897 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
if(cljs.core.truth_(inst_37897)){
var statearr_37922_37986 = state_37911__$1;
(statearr_37922_37986[(1)] = (19));

} else {
var statearr_37923_37987 = state_37911__$1;
(statearr_37923_37987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (3))){
var inst_37909 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37911__$1,inst_37909);
} else {
if((state_val_37912 === (12))){
var inst_37886 = (state_37911[(10)]);
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37911__$1,(14),inst_37886);
} else {
if((state_val_37912 === (2))){
var state_37911__$1 = state_37911;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37911__$1,(4),results);
} else {
if((state_val_37912 === (19))){
var state_37911__$1 = state_37911;
var statearr_37924_37988 = state_37911__$1;
(statearr_37924_37988[(2)] = null);

(statearr_37924_37988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (11))){
var inst_37886 = (state_37911[(2)]);
var state_37911__$1 = (function (){var statearr_37925 = state_37911;
(statearr_37925[(10)] = inst_37886);

return statearr_37925;
})();
var statearr_37926_37989 = state_37911__$1;
(statearr_37926_37989[(2)] = null);

(statearr_37926_37989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (9))){
var state_37911__$1 = state_37911;
var statearr_37927_37990 = state_37911__$1;
(statearr_37927_37990[(2)] = null);

(statearr_37927_37990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (5))){
var state_37911__$1 = state_37911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37928_37991 = state_37911__$1;
(statearr_37928_37991[(1)] = (8));

} else {
var statearr_37929_37992 = state_37911__$1;
(statearr_37929_37992[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (14))){
var inst_37889 = (state_37911[(8)]);
var inst_37891 = (state_37911[(11)]);
var inst_37889__$1 = (state_37911[(2)]);
var inst_37890 = (inst_37889__$1 == null);
var inst_37891__$1 = cljs.core.not.call(null,inst_37890);
var state_37911__$1 = (function (){var statearr_37930 = state_37911;
(statearr_37930[(8)] = inst_37889__$1);

(statearr_37930[(11)] = inst_37891__$1);

return statearr_37930;
})();
if(inst_37891__$1){
var statearr_37931_37993 = state_37911__$1;
(statearr_37931_37993[(1)] = (15));

} else {
var statearr_37932_37994 = state_37911__$1;
(statearr_37932_37994[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (16))){
var inst_37891 = (state_37911[(11)]);
var state_37911__$1 = state_37911;
var statearr_37933_37995 = state_37911__$1;
(statearr_37933_37995[(2)] = inst_37891);

(statearr_37933_37995[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (10))){
var inst_37883 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37934_37996 = state_37911__$1;
(statearr_37934_37996[(2)] = inst_37883);

(statearr_37934_37996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (18))){
var inst_37894 = (state_37911[(2)]);
var state_37911__$1 = state_37911;
var statearr_37935_37997 = state_37911__$1;
(statearr_37935_37997[(2)] = inst_37894);

(statearr_37935_37997[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37912 === (8))){
var inst_37880 = cljs.core.async.close_BANG_.call(null,to);
var state_37911__$1 = state_37911;
var statearr_37936_37998 = state_37911__$1;
(statearr_37936_37998[(2)] = inst_37880);

(statearr_37936_37998[(1)] = (10));


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
});})(c__25115__auto__,jobs,results,process,async))
;
return ((function (switch__25003__auto__,c__25115__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0 = (function (){
var statearr_37940 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37940[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__);

(statearr_37940[(1)] = (1));

return statearr_37940;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1 = (function (state_37911){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_37911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e37941){if((e37941 instanceof Object)){
var ex__25007__auto__ = e37941;
var statearr_37942_37999 = state_37911;
(statearr_37942_37999[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38000 = state_37911;
state_37911 = G__38000;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__ = function(state_37911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1.call(this,state_37911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25004__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto__,jobs,results,process,async))
})();
var state__25117__auto__ = (function (){var statearr_37943 = f__25116__auto__.call(null);
(statearr_37943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto__);

return statearr_37943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto__,jobs,results,process,async))
);

return c__25115__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args38001 = [];
var len__22777__auto___38004 = arguments.length;
var i__22778__auto___38005 = (0);
while(true){
if((i__22778__auto___38005 < len__22777__auto___38004)){
args38001.push((arguments[i__22778__auto___38005]));

var G__38006 = (i__22778__auto___38005 + (1));
i__22778__auto___38005 = G__38006;
continue;
} else {
}
break;
}

var G__38003 = args38001.length;
switch (G__38003) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38001.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args38008 = [];
var len__22777__auto___38011 = arguments.length;
var i__22778__auto___38012 = (0);
while(true){
if((i__22778__auto___38012 < len__22777__auto___38011)){
args38008.push((arguments[i__22778__auto___38012]));

var G__38013 = (i__22778__auto___38012 + (1));
i__22778__auto___38012 = G__38013;
continue;
} else {
}
break;
}

var G__38010 = args38008.length;
switch (G__38010) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38008.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args38015 = [];
var len__22777__auto___38068 = arguments.length;
var i__22778__auto___38069 = (0);
while(true){
if((i__22778__auto___38069 < len__22777__auto___38068)){
args38015.push((arguments[i__22778__auto___38069]));

var G__38070 = (i__22778__auto___38069 + (1));
i__22778__auto___38069 = G__38070;
continue;
} else {
}
break;
}

var G__38017 = args38015.length;
switch (G__38017) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38015.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25115__auto___38072 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___38072,tc,fc){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___38072,tc,fc){
return (function (state_38043){
var state_val_38044 = (state_38043[(1)]);
if((state_val_38044 === (7))){
var inst_38039 = (state_38043[(2)]);
var state_38043__$1 = state_38043;
var statearr_38045_38073 = state_38043__$1;
(statearr_38045_38073[(2)] = inst_38039);

(statearr_38045_38073[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (1))){
var state_38043__$1 = state_38043;
var statearr_38046_38074 = state_38043__$1;
(statearr_38046_38074[(2)] = null);

(statearr_38046_38074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (4))){
var inst_38020 = (state_38043[(7)]);
var inst_38020__$1 = (state_38043[(2)]);
var inst_38021 = (inst_38020__$1 == null);
var state_38043__$1 = (function (){var statearr_38047 = state_38043;
(statearr_38047[(7)] = inst_38020__$1);

return statearr_38047;
})();
if(cljs.core.truth_(inst_38021)){
var statearr_38048_38075 = state_38043__$1;
(statearr_38048_38075[(1)] = (5));

} else {
var statearr_38049_38076 = state_38043__$1;
(statearr_38049_38076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (13))){
var state_38043__$1 = state_38043;
var statearr_38050_38077 = state_38043__$1;
(statearr_38050_38077[(2)] = null);

(statearr_38050_38077[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (6))){
var inst_38020 = (state_38043[(7)]);
var inst_38026 = p.call(null,inst_38020);
var state_38043__$1 = state_38043;
if(cljs.core.truth_(inst_38026)){
var statearr_38051_38078 = state_38043__$1;
(statearr_38051_38078[(1)] = (9));

} else {
var statearr_38052_38079 = state_38043__$1;
(statearr_38052_38079[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (3))){
var inst_38041 = (state_38043[(2)]);
var state_38043__$1 = state_38043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38043__$1,inst_38041);
} else {
if((state_val_38044 === (12))){
var state_38043__$1 = state_38043;
var statearr_38053_38080 = state_38043__$1;
(statearr_38053_38080[(2)] = null);

(statearr_38053_38080[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (2))){
var state_38043__$1 = state_38043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38043__$1,(4),ch);
} else {
if((state_val_38044 === (11))){
var inst_38020 = (state_38043[(7)]);
var inst_38030 = (state_38043[(2)]);
var state_38043__$1 = state_38043;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38043__$1,(8),inst_38030,inst_38020);
} else {
if((state_val_38044 === (9))){
var state_38043__$1 = state_38043;
var statearr_38054_38081 = state_38043__$1;
(statearr_38054_38081[(2)] = tc);

(statearr_38054_38081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (5))){
var inst_38023 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38024 = cljs.core.async.close_BANG_.call(null,fc);
var state_38043__$1 = (function (){var statearr_38055 = state_38043;
(statearr_38055[(8)] = inst_38023);

return statearr_38055;
})();
var statearr_38056_38082 = state_38043__$1;
(statearr_38056_38082[(2)] = inst_38024);

(statearr_38056_38082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (14))){
var inst_38037 = (state_38043[(2)]);
var state_38043__$1 = state_38043;
var statearr_38057_38083 = state_38043__$1;
(statearr_38057_38083[(2)] = inst_38037);

(statearr_38057_38083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (10))){
var state_38043__$1 = state_38043;
var statearr_38058_38084 = state_38043__$1;
(statearr_38058_38084[(2)] = fc);

(statearr_38058_38084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38044 === (8))){
var inst_38032 = (state_38043[(2)]);
var state_38043__$1 = state_38043;
if(cljs.core.truth_(inst_38032)){
var statearr_38059_38085 = state_38043__$1;
(statearr_38059_38085[(1)] = (12));

} else {
var statearr_38060_38086 = state_38043__$1;
(statearr_38060_38086[(1)] = (13));

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
});})(c__25115__auto___38072,tc,fc))
;
return ((function (switch__25003__auto__,c__25115__auto___38072,tc,fc){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_38064 = [null,null,null,null,null,null,null,null,null];
(statearr_38064[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_38064[(1)] = (1));

return statearr_38064;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_38043){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_38043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e38065){if((e38065 instanceof Object)){
var ex__25007__auto__ = e38065;
var statearr_38066_38087 = state_38043;
(statearr_38066_38087[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38088 = state_38043;
state_38043 = G__38088;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_38043){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_38043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___38072,tc,fc))
})();
var state__25117__auto__ = (function (){var statearr_38067 = f__25116__auto__.call(null);
(statearr_38067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___38072);

return statearr_38067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___38072,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto__){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto__){
return (function (state_38152){
var state_val_38153 = (state_38152[(1)]);
if((state_val_38153 === (7))){
var inst_38148 = (state_38152[(2)]);
var state_38152__$1 = state_38152;
var statearr_38154_38175 = state_38152__$1;
(statearr_38154_38175[(2)] = inst_38148);

(statearr_38154_38175[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38153 === (1))){
var inst_38132 = init;
var state_38152__$1 = (function (){var statearr_38155 = state_38152;
(statearr_38155[(7)] = inst_38132);

return statearr_38155;
})();
var statearr_38156_38176 = state_38152__$1;
(statearr_38156_38176[(2)] = null);

(statearr_38156_38176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38153 === (4))){
var inst_38135 = (state_38152[(8)]);
var inst_38135__$1 = (state_38152[(2)]);
var inst_38136 = (inst_38135__$1 == null);
var state_38152__$1 = (function (){var statearr_38157 = state_38152;
(statearr_38157[(8)] = inst_38135__$1);

return statearr_38157;
})();
if(cljs.core.truth_(inst_38136)){
var statearr_38158_38177 = state_38152__$1;
(statearr_38158_38177[(1)] = (5));

} else {
var statearr_38159_38178 = state_38152__$1;
(statearr_38159_38178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38153 === (6))){
var inst_38139 = (state_38152[(9)]);
var inst_38135 = (state_38152[(8)]);
var inst_38132 = (state_38152[(7)]);
var inst_38139__$1 = f.call(null,inst_38132,inst_38135);
var inst_38140 = cljs.core.reduced_QMARK_.call(null,inst_38139__$1);
var state_38152__$1 = (function (){var statearr_38160 = state_38152;
(statearr_38160[(9)] = inst_38139__$1);

return statearr_38160;
})();
if(inst_38140){
var statearr_38161_38179 = state_38152__$1;
(statearr_38161_38179[(1)] = (8));

} else {
var statearr_38162_38180 = state_38152__$1;
(statearr_38162_38180[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38153 === (3))){
var inst_38150 = (state_38152[(2)]);
var state_38152__$1 = state_38152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38152__$1,inst_38150);
} else {
if((state_val_38153 === (2))){
var state_38152__$1 = state_38152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38152__$1,(4),ch);
} else {
if((state_val_38153 === (9))){
var inst_38139 = (state_38152[(9)]);
var inst_38132 = inst_38139;
var state_38152__$1 = (function (){var statearr_38163 = state_38152;
(statearr_38163[(7)] = inst_38132);

return statearr_38163;
})();
var statearr_38164_38181 = state_38152__$1;
(statearr_38164_38181[(2)] = null);

(statearr_38164_38181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38153 === (5))){
var inst_38132 = (state_38152[(7)]);
var state_38152__$1 = state_38152;
var statearr_38165_38182 = state_38152__$1;
(statearr_38165_38182[(2)] = inst_38132);

(statearr_38165_38182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38153 === (10))){
var inst_38146 = (state_38152[(2)]);
var state_38152__$1 = state_38152;
var statearr_38166_38183 = state_38152__$1;
(statearr_38166_38183[(2)] = inst_38146);

(statearr_38166_38183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38153 === (8))){
var inst_38139 = (state_38152[(9)]);
var inst_38142 = cljs.core.deref.call(null,inst_38139);
var state_38152__$1 = state_38152;
var statearr_38167_38184 = state_38152__$1;
(statearr_38167_38184[(2)] = inst_38142);

(statearr_38167_38184[(1)] = (10));


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
});})(c__25115__auto__))
;
return ((function (switch__25003__auto__,c__25115__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25004__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25004__auto____0 = (function (){
var statearr_38171 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38171[(0)] = cljs$core$async$reduce_$_state_machine__25004__auto__);

(statearr_38171[(1)] = (1));

return statearr_38171;
});
var cljs$core$async$reduce_$_state_machine__25004__auto____1 = (function (state_38152){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_38152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e38172){if((e38172 instanceof Object)){
var ex__25007__auto__ = e38172;
var statearr_38173_38185 = state_38152;
(statearr_38173_38185[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38186 = state_38152;
state_38152 = G__38186;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25004__auto__ = function(state_38152){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25004__auto____1.call(this,state_38152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25004__auto____0;
cljs$core$async$reduce_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25004__auto____1;
return cljs$core$async$reduce_$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto__))
})();
var state__25117__auto__ = (function (){var statearr_38174 = f__25116__auto__.call(null);
(statearr_38174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto__);

return statearr_38174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto__))
);

return c__25115__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38187 = [];
var len__22777__auto___38239 = arguments.length;
var i__22778__auto___38240 = (0);
while(true){
if((i__22778__auto___38240 < len__22777__auto___38239)){
args38187.push((arguments[i__22778__auto___38240]));

var G__38241 = (i__22778__auto___38240 + (1));
i__22778__auto___38240 = G__38241;
continue;
} else {
}
break;
}

var G__38189 = args38187.length;
switch (G__38189) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38187.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto__){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto__){
return (function (state_38214){
var state_val_38215 = (state_38214[(1)]);
if((state_val_38215 === (7))){
var inst_38196 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
var statearr_38216_38243 = state_38214__$1;
(statearr_38216_38243[(2)] = inst_38196);

(statearr_38216_38243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (1))){
var inst_38190 = cljs.core.seq.call(null,coll);
var inst_38191 = inst_38190;
var state_38214__$1 = (function (){var statearr_38217 = state_38214;
(statearr_38217[(7)] = inst_38191);

return statearr_38217;
})();
var statearr_38218_38244 = state_38214__$1;
(statearr_38218_38244[(2)] = null);

(statearr_38218_38244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (4))){
var inst_38191 = (state_38214[(7)]);
var inst_38194 = cljs.core.first.call(null,inst_38191);
var state_38214__$1 = state_38214;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38214__$1,(7),ch,inst_38194);
} else {
if((state_val_38215 === (13))){
var inst_38208 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
var statearr_38219_38245 = state_38214__$1;
(statearr_38219_38245[(2)] = inst_38208);

(statearr_38219_38245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (6))){
var inst_38199 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
if(cljs.core.truth_(inst_38199)){
var statearr_38220_38246 = state_38214__$1;
(statearr_38220_38246[(1)] = (8));

} else {
var statearr_38221_38247 = state_38214__$1;
(statearr_38221_38247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (3))){
var inst_38212 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38214__$1,inst_38212);
} else {
if((state_val_38215 === (12))){
var state_38214__$1 = state_38214;
var statearr_38222_38248 = state_38214__$1;
(statearr_38222_38248[(2)] = null);

(statearr_38222_38248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (2))){
var inst_38191 = (state_38214[(7)]);
var state_38214__$1 = state_38214;
if(cljs.core.truth_(inst_38191)){
var statearr_38223_38249 = state_38214__$1;
(statearr_38223_38249[(1)] = (4));

} else {
var statearr_38224_38250 = state_38214__$1;
(statearr_38224_38250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (11))){
var inst_38205 = cljs.core.async.close_BANG_.call(null,ch);
var state_38214__$1 = state_38214;
var statearr_38225_38251 = state_38214__$1;
(statearr_38225_38251[(2)] = inst_38205);

(statearr_38225_38251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (9))){
var state_38214__$1 = state_38214;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38226_38252 = state_38214__$1;
(statearr_38226_38252[(1)] = (11));

} else {
var statearr_38227_38253 = state_38214__$1;
(statearr_38227_38253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (5))){
var inst_38191 = (state_38214[(7)]);
var state_38214__$1 = state_38214;
var statearr_38228_38254 = state_38214__$1;
(statearr_38228_38254[(2)] = inst_38191);

(statearr_38228_38254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (10))){
var inst_38210 = (state_38214[(2)]);
var state_38214__$1 = state_38214;
var statearr_38229_38255 = state_38214__$1;
(statearr_38229_38255[(2)] = inst_38210);

(statearr_38229_38255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38215 === (8))){
var inst_38191 = (state_38214[(7)]);
var inst_38201 = cljs.core.next.call(null,inst_38191);
var inst_38191__$1 = inst_38201;
var state_38214__$1 = (function (){var statearr_38230 = state_38214;
(statearr_38230[(7)] = inst_38191__$1);

return statearr_38230;
})();
var statearr_38231_38256 = state_38214__$1;
(statearr_38231_38256[(2)] = null);

(statearr_38231_38256[(1)] = (2));


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
});})(c__25115__auto__))
;
return ((function (switch__25003__auto__,c__25115__auto__){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_38235 = [null,null,null,null,null,null,null,null];
(statearr_38235[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_38235[(1)] = (1));

return statearr_38235;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_38214){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_38214);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e38236){if((e38236 instanceof Object)){
var ex__25007__auto__ = e38236;
var statearr_38237_38257 = state_38214;
(statearr_38237_38257[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38214);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38258 = state_38214;
state_38214 = G__38258;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_38214){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_38214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto__))
})();
var state__25117__auto__ = (function (){var statearr_38238 = f__25116__auto__.call(null);
(statearr_38238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto__);

return statearr_38238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto__))
);

return c__25115__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__22370__auto__ = (((_ == null))?null:_);
var m__22371__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,_);
} else {
var m__22371__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__22371__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m);
} else {
var m__22371__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38480 = (function (mult,ch,cs,meta38481){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38481 = meta38481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38482,meta38481__$1){
var self__ = this;
var _38482__$1 = this;
return (new cljs.core.async.t_cljs$core$async38480(self__.mult,self__.ch,self__.cs,meta38481__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38482){
var self__ = this;
var _38482__$1 = this;
return self__.meta38481;
});})(cs))
;

cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38480.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38480.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38481","meta38481",-664010010,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38480";

cljs.core.async.t_cljs$core$async38480.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async38480");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38480 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38480(mult__$1,ch__$1,cs__$1,meta38481){
return (new cljs.core.async.t_cljs$core$async38480(mult__$1,ch__$1,cs__$1,meta38481));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38480(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__25115__auto___38701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___38701,cs,m,dchan,dctr,done){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___38701,cs,m,dchan,dctr,done){
return (function (state_38613){
var state_val_38614 = (state_38613[(1)]);
if((state_val_38614 === (7))){
var inst_38609 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38615_38702 = state_38613__$1;
(statearr_38615_38702[(2)] = inst_38609);

(statearr_38615_38702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (20))){
var inst_38514 = (state_38613[(7)]);
var inst_38524 = cljs.core.first.call(null,inst_38514);
var inst_38525 = cljs.core.nth.call(null,inst_38524,(0),null);
var inst_38526 = cljs.core.nth.call(null,inst_38524,(1),null);
var state_38613__$1 = (function (){var statearr_38616 = state_38613;
(statearr_38616[(8)] = inst_38525);

return statearr_38616;
})();
if(cljs.core.truth_(inst_38526)){
var statearr_38617_38703 = state_38613__$1;
(statearr_38617_38703[(1)] = (22));

} else {
var statearr_38618_38704 = state_38613__$1;
(statearr_38618_38704[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (27))){
var inst_38561 = (state_38613[(9)]);
var inst_38556 = (state_38613[(10)]);
var inst_38485 = (state_38613[(11)]);
var inst_38554 = (state_38613[(12)]);
var inst_38561__$1 = cljs.core._nth.call(null,inst_38554,inst_38556);
var inst_38562 = cljs.core.async.put_BANG_.call(null,inst_38561__$1,inst_38485,done);
var state_38613__$1 = (function (){var statearr_38619 = state_38613;
(statearr_38619[(9)] = inst_38561__$1);

return statearr_38619;
})();
if(cljs.core.truth_(inst_38562)){
var statearr_38620_38705 = state_38613__$1;
(statearr_38620_38705[(1)] = (30));

} else {
var statearr_38621_38706 = state_38613__$1;
(statearr_38621_38706[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (1))){
var state_38613__$1 = state_38613;
var statearr_38622_38707 = state_38613__$1;
(statearr_38622_38707[(2)] = null);

(statearr_38622_38707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (24))){
var inst_38514 = (state_38613[(7)]);
var inst_38531 = (state_38613[(2)]);
var inst_38532 = cljs.core.next.call(null,inst_38514);
var inst_38494 = inst_38532;
var inst_38495 = null;
var inst_38496 = (0);
var inst_38497 = (0);
var state_38613__$1 = (function (){var statearr_38623 = state_38613;
(statearr_38623[(13)] = inst_38494);

(statearr_38623[(14)] = inst_38531);

(statearr_38623[(15)] = inst_38497);

(statearr_38623[(16)] = inst_38495);

(statearr_38623[(17)] = inst_38496);

return statearr_38623;
})();
var statearr_38624_38708 = state_38613__$1;
(statearr_38624_38708[(2)] = null);

(statearr_38624_38708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (39))){
var state_38613__$1 = state_38613;
var statearr_38628_38709 = state_38613__$1;
(statearr_38628_38709[(2)] = null);

(statearr_38628_38709[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (4))){
var inst_38485 = (state_38613[(11)]);
var inst_38485__$1 = (state_38613[(2)]);
var inst_38486 = (inst_38485__$1 == null);
var state_38613__$1 = (function (){var statearr_38629 = state_38613;
(statearr_38629[(11)] = inst_38485__$1);

return statearr_38629;
})();
if(cljs.core.truth_(inst_38486)){
var statearr_38630_38710 = state_38613__$1;
(statearr_38630_38710[(1)] = (5));

} else {
var statearr_38631_38711 = state_38613__$1;
(statearr_38631_38711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (15))){
var inst_38494 = (state_38613[(13)]);
var inst_38497 = (state_38613[(15)]);
var inst_38495 = (state_38613[(16)]);
var inst_38496 = (state_38613[(17)]);
var inst_38510 = (state_38613[(2)]);
var inst_38511 = (inst_38497 + (1));
var tmp38625 = inst_38494;
var tmp38626 = inst_38495;
var tmp38627 = inst_38496;
var inst_38494__$1 = tmp38625;
var inst_38495__$1 = tmp38626;
var inst_38496__$1 = tmp38627;
var inst_38497__$1 = inst_38511;
var state_38613__$1 = (function (){var statearr_38632 = state_38613;
(statearr_38632[(13)] = inst_38494__$1);

(statearr_38632[(18)] = inst_38510);

(statearr_38632[(15)] = inst_38497__$1);

(statearr_38632[(16)] = inst_38495__$1);

(statearr_38632[(17)] = inst_38496__$1);

return statearr_38632;
})();
var statearr_38633_38712 = state_38613__$1;
(statearr_38633_38712[(2)] = null);

(statearr_38633_38712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (21))){
var inst_38535 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38637_38713 = state_38613__$1;
(statearr_38637_38713[(2)] = inst_38535);

(statearr_38637_38713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (31))){
var inst_38561 = (state_38613[(9)]);
var inst_38565 = done.call(null,null);
var inst_38566 = cljs.core.async.untap_STAR_.call(null,m,inst_38561);
var state_38613__$1 = (function (){var statearr_38638 = state_38613;
(statearr_38638[(19)] = inst_38565);

return statearr_38638;
})();
var statearr_38639_38714 = state_38613__$1;
(statearr_38639_38714[(2)] = inst_38566);

(statearr_38639_38714[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (32))){
var inst_38553 = (state_38613[(20)]);
var inst_38556 = (state_38613[(10)]);
var inst_38555 = (state_38613[(21)]);
var inst_38554 = (state_38613[(12)]);
var inst_38568 = (state_38613[(2)]);
var inst_38569 = (inst_38556 + (1));
var tmp38634 = inst_38553;
var tmp38635 = inst_38555;
var tmp38636 = inst_38554;
var inst_38553__$1 = tmp38634;
var inst_38554__$1 = tmp38636;
var inst_38555__$1 = tmp38635;
var inst_38556__$1 = inst_38569;
var state_38613__$1 = (function (){var statearr_38640 = state_38613;
(statearr_38640[(20)] = inst_38553__$1);

(statearr_38640[(22)] = inst_38568);

(statearr_38640[(10)] = inst_38556__$1);

(statearr_38640[(21)] = inst_38555__$1);

(statearr_38640[(12)] = inst_38554__$1);

return statearr_38640;
})();
var statearr_38641_38715 = state_38613__$1;
(statearr_38641_38715[(2)] = null);

(statearr_38641_38715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (40))){
var inst_38581 = (state_38613[(23)]);
var inst_38585 = done.call(null,null);
var inst_38586 = cljs.core.async.untap_STAR_.call(null,m,inst_38581);
var state_38613__$1 = (function (){var statearr_38642 = state_38613;
(statearr_38642[(24)] = inst_38585);

return statearr_38642;
})();
var statearr_38643_38716 = state_38613__$1;
(statearr_38643_38716[(2)] = inst_38586);

(statearr_38643_38716[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (33))){
var inst_38572 = (state_38613[(25)]);
var inst_38574 = cljs.core.chunked_seq_QMARK_.call(null,inst_38572);
var state_38613__$1 = state_38613;
if(inst_38574){
var statearr_38644_38717 = state_38613__$1;
(statearr_38644_38717[(1)] = (36));

} else {
var statearr_38645_38718 = state_38613__$1;
(statearr_38645_38718[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (13))){
var inst_38504 = (state_38613[(26)]);
var inst_38507 = cljs.core.async.close_BANG_.call(null,inst_38504);
var state_38613__$1 = state_38613;
var statearr_38646_38719 = state_38613__$1;
(statearr_38646_38719[(2)] = inst_38507);

(statearr_38646_38719[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (22))){
var inst_38525 = (state_38613[(8)]);
var inst_38528 = cljs.core.async.close_BANG_.call(null,inst_38525);
var state_38613__$1 = state_38613;
var statearr_38647_38720 = state_38613__$1;
(statearr_38647_38720[(2)] = inst_38528);

(statearr_38647_38720[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (36))){
var inst_38572 = (state_38613[(25)]);
var inst_38576 = cljs.core.chunk_first.call(null,inst_38572);
var inst_38577 = cljs.core.chunk_rest.call(null,inst_38572);
var inst_38578 = cljs.core.count.call(null,inst_38576);
var inst_38553 = inst_38577;
var inst_38554 = inst_38576;
var inst_38555 = inst_38578;
var inst_38556 = (0);
var state_38613__$1 = (function (){var statearr_38648 = state_38613;
(statearr_38648[(20)] = inst_38553);

(statearr_38648[(10)] = inst_38556);

(statearr_38648[(21)] = inst_38555);

(statearr_38648[(12)] = inst_38554);

return statearr_38648;
})();
var statearr_38649_38721 = state_38613__$1;
(statearr_38649_38721[(2)] = null);

(statearr_38649_38721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (41))){
var inst_38572 = (state_38613[(25)]);
var inst_38588 = (state_38613[(2)]);
var inst_38589 = cljs.core.next.call(null,inst_38572);
var inst_38553 = inst_38589;
var inst_38554 = null;
var inst_38555 = (0);
var inst_38556 = (0);
var state_38613__$1 = (function (){var statearr_38650 = state_38613;
(statearr_38650[(27)] = inst_38588);

(statearr_38650[(20)] = inst_38553);

(statearr_38650[(10)] = inst_38556);

(statearr_38650[(21)] = inst_38555);

(statearr_38650[(12)] = inst_38554);

return statearr_38650;
})();
var statearr_38651_38722 = state_38613__$1;
(statearr_38651_38722[(2)] = null);

(statearr_38651_38722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (43))){
var state_38613__$1 = state_38613;
var statearr_38652_38723 = state_38613__$1;
(statearr_38652_38723[(2)] = null);

(statearr_38652_38723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (29))){
var inst_38597 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38653_38724 = state_38613__$1;
(statearr_38653_38724[(2)] = inst_38597);

(statearr_38653_38724[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (44))){
var inst_38606 = (state_38613[(2)]);
var state_38613__$1 = (function (){var statearr_38654 = state_38613;
(statearr_38654[(28)] = inst_38606);

return statearr_38654;
})();
var statearr_38655_38725 = state_38613__$1;
(statearr_38655_38725[(2)] = null);

(statearr_38655_38725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (6))){
var inst_38545 = (state_38613[(29)]);
var inst_38544 = cljs.core.deref.call(null,cs);
var inst_38545__$1 = cljs.core.keys.call(null,inst_38544);
var inst_38546 = cljs.core.count.call(null,inst_38545__$1);
var inst_38547 = cljs.core.reset_BANG_.call(null,dctr,inst_38546);
var inst_38552 = cljs.core.seq.call(null,inst_38545__$1);
var inst_38553 = inst_38552;
var inst_38554 = null;
var inst_38555 = (0);
var inst_38556 = (0);
var state_38613__$1 = (function (){var statearr_38656 = state_38613;
(statearr_38656[(20)] = inst_38553);

(statearr_38656[(29)] = inst_38545__$1);

(statearr_38656[(30)] = inst_38547);

(statearr_38656[(10)] = inst_38556);

(statearr_38656[(21)] = inst_38555);

(statearr_38656[(12)] = inst_38554);

return statearr_38656;
})();
var statearr_38657_38726 = state_38613__$1;
(statearr_38657_38726[(2)] = null);

(statearr_38657_38726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (28))){
var inst_38553 = (state_38613[(20)]);
var inst_38572 = (state_38613[(25)]);
var inst_38572__$1 = cljs.core.seq.call(null,inst_38553);
var state_38613__$1 = (function (){var statearr_38658 = state_38613;
(statearr_38658[(25)] = inst_38572__$1);

return statearr_38658;
})();
if(inst_38572__$1){
var statearr_38659_38727 = state_38613__$1;
(statearr_38659_38727[(1)] = (33));

} else {
var statearr_38660_38728 = state_38613__$1;
(statearr_38660_38728[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (25))){
var inst_38556 = (state_38613[(10)]);
var inst_38555 = (state_38613[(21)]);
var inst_38558 = (inst_38556 < inst_38555);
var inst_38559 = inst_38558;
var state_38613__$1 = state_38613;
if(cljs.core.truth_(inst_38559)){
var statearr_38661_38729 = state_38613__$1;
(statearr_38661_38729[(1)] = (27));

} else {
var statearr_38662_38730 = state_38613__$1;
(statearr_38662_38730[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (34))){
var state_38613__$1 = state_38613;
var statearr_38663_38731 = state_38613__$1;
(statearr_38663_38731[(2)] = null);

(statearr_38663_38731[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (17))){
var state_38613__$1 = state_38613;
var statearr_38664_38732 = state_38613__$1;
(statearr_38664_38732[(2)] = null);

(statearr_38664_38732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (3))){
var inst_38611 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38613__$1,inst_38611);
} else {
if((state_val_38614 === (12))){
var inst_38540 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38665_38733 = state_38613__$1;
(statearr_38665_38733[(2)] = inst_38540);

(statearr_38665_38733[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (2))){
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38613__$1,(4),ch);
} else {
if((state_val_38614 === (23))){
var state_38613__$1 = state_38613;
var statearr_38666_38734 = state_38613__$1;
(statearr_38666_38734[(2)] = null);

(statearr_38666_38734[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (35))){
var inst_38595 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38667_38735 = state_38613__$1;
(statearr_38667_38735[(2)] = inst_38595);

(statearr_38667_38735[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (19))){
var inst_38514 = (state_38613[(7)]);
var inst_38518 = cljs.core.chunk_first.call(null,inst_38514);
var inst_38519 = cljs.core.chunk_rest.call(null,inst_38514);
var inst_38520 = cljs.core.count.call(null,inst_38518);
var inst_38494 = inst_38519;
var inst_38495 = inst_38518;
var inst_38496 = inst_38520;
var inst_38497 = (0);
var state_38613__$1 = (function (){var statearr_38668 = state_38613;
(statearr_38668[(13)] = inst_38494);

(statearr_38668[(15)] = inst_38497);

(statearr_38668[(16)] = inst_38495);

(statearr_38668[(17)] = inst_38496);

return statearr_38668;
})();
var statearr_38669_38736 = state_38613__$1;
(statearr_38669_38736[(2)] = null);

(statearr_38669_38736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (11))){
var inst_38494 = (state_38613[(13)]);
var inst_38514 = (state_38613[(7)]);
var inst_38514__$1 = cljs.core.seq.call(null,inst_38494);
var state_38613__$1 = (function (){var statearr_38670 = state_38613;
(statearr_38670[(7)] = inst_38514__$1);

return statearr_38670;
})();
if(inst_38514__$1){
var statearr_38671_38737 = state_38613__$1;
(statearr_38671_38737[(1)] = (16));

} else {
var statearr_38672_38738 = state_38613__$1;
(statearr_38672_38738[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (9))){
var inst_38542 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38673_38739 = state_38613__$1;
(statearr_38673_38739[(2)] = inst_38542);

(statearr_38673_38739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (5))){
var inst_38492 = cljs.core.deref.call(null,cs);
var inst_38493 = cljs.core.seq.call(null,inst_38492);
var inst_38494 = inst_38493;
var inst_38495 = null;
var inst_38496 = (0);
var inst_38497 = (0);
var state_38613__$1 = (function (){var statearr_38674 = state_38613;
(statearr_38674[(13)] = inst_38494);

(statearr_38674[(15)] = inst_38497);

(statearr_38674[(16)] = inst_38495);

(statearr_38674[(17)] = inst_38496);

return statearr_38674;
})();
var statearr_38675_38740 = state_38613__$1;
(statearr_38675_38740[(2)] = null);

(statearr_38675_38740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (14))){
var state_38613__$1 = state_38613;
var statearr_38676_38741 = state_38613__$1;
(statearr_38676_38741[(2)] = null);

(statearr_38676_38741[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (45))){
var inst_38603 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38677_38742 = state_38613__$1;
(statearr_38677_38742[(2)] = inst_38603);

(statearr_38677_38742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (26))){
var inst_38545 = (state_38613[(29)]);
var inst_38599 = (state_38613[(2)]);
var inst_38600 = cljs.core.seq.call(null,inst_38545);
var state_38613__$1 = (function (){var statearr_38678 = state_38613;
(statearr_38678[(31)] = inst_38599);

return statearr_38678;
})();
if(inst_38600){
var statearr_38679_38743 = state_38613__$1;
(statearr_38679_38743[(1)] = (42));

} else {
var statearr_38680_38744 = state_38613__$1;
(statearr_38680_38744[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (16))){
var inst_38514 = (state_38613[(7)]);
var inst_38516 = cljs.core.chunked_seq_QMARK_.call(null,inst_38514);
var state_38613__$1 = state_38613;
if(inst_38516){
var statearr_38681_38745 = state_38613__$1;
(statearr_38681_38745[(1)] = (19));

} else {
var statearr_38682_38746 = state_38613__$1;
(statearr_38682_38746[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (38))){
var inst_38592 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38683_38747 = state_38613__$1;
(statearr_38683_38747[(2)] = inst_38592);

(statearr_38683_38747[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (30))){
var state_38613__$1 = state_38613;
var statearr_38684_38748 = state_38613__$1;
(statearr_38684_38748[(2)] = null);

(statearr_38684_38748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (10))){
var inst_38497 = (state_38613[(15)]);
var inst_38495 = (state_38613[(16)]);
var inst_38503 = cljs.core._nth.call(null,inst_38495,inst_38497);
var inst_38504 = cljs.core.nth.call(null,inst_38503,(0),null);
var inst_38505 = cljs.core.nth.call(null,inst_38503,(1),null);
var state_38613__$1 = (function (){var statearr_38685 = state_38613;
(statearr_38685[(26)] = inst_38504);

return statearr_38685;
})();
if(cljs.core.truth_(inst_38505)){
var statearr_38686_38749 = state_38613__$1;
(statearr_38686_38749[(1)] = (13));

} else {
var statearr_38687_38750 = state_38613__$1;
(statearr_38687_38750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (18))){
var inst_38538 = (state_38613[(2)]);
var state_38613__$1 = state_38613;
var statearr_38688_38751 = state_38613__$1;
(statearr_38688_38751[(2)] = inst_38538);

(statearr_38688_38751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (42))){
var state_38613__$1 = state_38613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38613__$1,(45),dchan);
} else {
if((state_val_38614 === (37))){
var inst_38581 = (state_38613[(23)]);
var inst_38572 = (state_38613[(25)]);
var inst_38485 = (state_38613[(11)]);
var inst_38581__$1 = cljs.core.first.call(null,inst_38572);
var inst_38582 = cljs.core.async.put_BANG_.call(null,inst_38581__$1,inst_38485,done);
var state_38613__$1 = (function (){var statearr_38689 = state_38613;
(statearr_38689[(23)] = inst_38581__$1);

return statearr_38689;
})();
if(cljs.core.truth_(inst_38582)){
var statearr_38690_38752 = state_38613__$1;
(statearr_38690_38752[(1)] = (39));

} else {
var statearr_38691_38753 = state_38613__$1;
(statearr_38691_38753[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38614 === (8))){
var inst_38497 = (state_38613[(15)]);
var inst_38496 = (state_38613[(17)]);
var inst_38499 = (inst_38497 < inst_38496);
var inst_38500 = inst_38499;
var state_38613__$1 = state_38613;
if(cljs.core.truth_(inst_38500)){
var statearr_38692_38754 = state_38613__$1;
(statearr_38692_38754[(1)] = (10));

} else {
var statearr_38693_38755 = state_38613__$1;
(statearr_38693_38755[(1)] = (11));

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
});})(c__25115__auto___38701,cs,m,dchan,dctr,done))
;
return ((function (switch__25003__auto__,c__25115__auto___38701,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25004__auto__ = null;
var cljs$core$async$mult_$_state_machine__25004__auto____0 = (function (){
var statearr_38697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38697[(0)] = cljs$core$async$mult_$_state_machine__25004__auto__);

(statearr_38697[(1)] = (1));

return statearr_38697;
});
var cljs$core$async$mult_$_state_machine__25004__auto____1 = (function (state_38613){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_38613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e38698){if((e38698 instanceof Object)){
var ex__25007__auto__ = e38698;
var statearr_38699_38756 = state_38613;
(statearr_38699_38756[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38757 = state_38613;
state_38613 = G__38757;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25004__auto__ = function(state_38613){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25004__auto____1.call(this,state_38613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25004__auto____0;
cljs$core$async$mult_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25004__auto____1;
return cljs$core$async$mult_$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___38701,cs,m,dchan,dctr,done))
})();
var state__25117__auto__ = (function (){var statearr_38700 = f__25116__auto__.call(null);
(statearr_38700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___38701);

return statearr_38700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___38701,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args38758 = [];
var len__22777__auto___38761 = arguments.length;
var i__22778__auto___38762 = (0);
while(true){
if((i__22778__auto___38762 < len__22777__auto___38761)){
args38758.push((arguments[i__22778__auto___38762]));

var G__38763 = (i__22778__auto___38762 + (1));
i__22778__auto___38762 = G__38763;
continue;
} else {
}
break;
}

var G__38760 = args38758.length;
switch (G__38760) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38758.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m);
} else {
var m__22371__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,state_map);
} else {
var m__22371__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__22370__auto__ = (((m == null))?null:m);
var m__22371__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,m,mode);
} else {
var m__22371__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__22784__auto__ = [];
var len__22777__auto___38775 = arguments.length;
var i__22778__auto___38776 = (0);
while(true){
if((i__22778__auto___38776 < len__22777__auto___38775)){
args__22784__auto__.push((arguments[i__22778__auto___38776]));

var G__38777 = (i__22778__auto___38776 + (1));
i__22778__auto___38776 = G__38777;
continue;
} else {
}
break;
}

var argseq__22785__auto__ = ((((3) < args__22784__auto__.length))?(new cljs.core.IndexedSeq(args__22784__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__22785__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38769){
var map__38770 = p__38769;
var map__38770__$1 = ((((!((map__38770 == null)))?((((map__38770.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38770.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38770):map__38770);
var opts = map__38770__$1;
var statearr_38772_38778 = state;
(statearr_38772_38778[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38770,map__38770__$1,opts){
return (function (val){
var statearr_38773_38779 = state;
(statearr_38773_38779[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38770,map__38770__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38774_38780 = state;
(statearr_38774_38780[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38765){
var G__38766 = cljs.core.first.call(null,seq38765);
var seq38765__$1 = cljs.core.next.call(null,seq38765);
var G__38767 = cljs.core.first.call(null,seq38765__$1);
var seq38765__$2 = cljs.core.next.call(null,seq38765__$1);
var G__38768 = cljs.core.first.call(null,seq38765__$2);
var seq38765__$3 = cljs.core.next.call(null,seq38765__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38766,G__38767,G__38768,seq38765__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38944 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38945){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38945 = meta38945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38946,meta38945__$1){
var self__ = this;
var _38946__$1 = this;
return (new cljs.core.async.t_cljs$core$async38944(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38945__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38946){
var self__ = this;
var _38946__$1 = this;
return self__.meta38945;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta38945","meta38945",908624120,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async38944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38944";

cljs.core.async.t_cljs$core$async38944.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async38944");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async38944 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async38944(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38945){
return (new cljs.core.async.t_cljs$core$async38944(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38945));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async38944(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25115__auto___39107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___39107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___39107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39044){
var state_val_39045 = (state_39044[(1)]);
if((state_val_39045 === (7))){
var inst_38962 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
var statearr_39046_39108 = state_39044__$1;
(statearr_39046_39108[(2)] = inst_38962);

(statearr_39046_39108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (20))){
var inst_38974 = (state_39044[(7)]);
var state_39044__$1 = state_39044;
var statearr_39047_39109 = state_39044__$1;
(statearr_39047_39109[(2)] = inst_38974);

(statearr_39047_39109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (27))){
var state_39044__$1 = state_39044;
var statearr_39048_39110 = state_39044__$1;
(statearr_39048_39110[(2)] = null);

(statearr_39048_39110[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (1))){
var inst_38950 = (state_39044[(8)]);
var inst_38950__$1 = calc_state.call(null);
var inst_38952 = (inst_38950__$1 == null);
var inst_38953 = cljs.core.not.call(null,inst_38952);
var state_39044__$1 = (function (){var statearr_39049 = state_39044;
(statearr_39049[(8)] = inst_38950__$1);

return statearr_39049;
})();
if(inst_38953){
var statearr_39050_39111 = state_39044__$1;
(statearr_39050_39111[(1)] = (2));

} else {
var statearr_39051_39112 = state_39044__$1;
(statearr_39051_39112[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (24))){
var inst_39004 = (state_39044[(9)]);
var inst_39018 = (state_39044[(10)]);
var inst_38997 = (state_39044[(11)]);
var inst_39018__$1 = inst_38997.call(null,inst_39004);
var state_39044__$1 = (function (){var statearr_39052 = state_39044;
(statearr_39052[(10)] = inst_39018__$1);

return statearr_39052;
})();
if(cljs.core.truth_(inst_39018__$1)){
var statearr_39053_39113 = state_39044__$1;
(statearr_39053_39113[(1)] = (29));

} else {
var statearr_39054_39114 = state_39044__$1;
(statearr_39054_39114[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (4))){
var inst_38965 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
if(cljs.core.truth_(inst_38965)){
var statearr_39055_39115 = state_39044__$1;
(statearr_39055_39115[(1)] = (8));

} else {
var statearr_39056_39116 = state_39044__$1;
(statearr_39056_39116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (15))){
var inst_38991 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
if(cljs.core.truth_(inst_38991)){
var statearr_39057_39117 = state_39044__$1;
(statearr_39057_39117[(1)] = (19));

} else {
var statearr_39058_39118 = state_39044__$1;
(statearr_39058_39118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (21))){
var inst_38996 = (state_39044[(12)]);
var inst_38996__$1 = (state_39044[(2)]);
var inst_38997 = cljs.core.get.call(null,inst_38996__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38998 = cljs.core.get.call(null,inst_38996__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38999 = cljs.core.get.call(null,inst_38996__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39044__$1 = (function (){var statearr_39059 = state_39044;
(statearr_39059[(12)] = inst_38996__$1);

(statearr_39059[(13)] = inst_38998);

(statearr_39059[(11)] = inst_38997);

return statearr_39059;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39044__$1,(22),inst_38999);
} else {
if((state_val_39045 === (31))){
var inst_39026 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
if(cljs.core.truth_(inst_39026)){
var statearr_39060_39119 = state_39044__$1;
(statearr_39060_39119[(1)] = (32));

} else {
var statearr_39061_39120 = state_39044__$1;
(statearr_39061_39120[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (32))){
var inst_39003 = (state_39044[(14)]);
var state_39044__$1 = state_39044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39044__$1,(35),out,inst_39003);
} else {
if((state_val_39045 === (33))){
var inst_38996 = (state_39044[(12)]);
var inst_38974 = inst_38996;
var state_39044__$1 = (function (){var statearr_39062 = state_39044;
(statearr_39062[(7)] = inst_38974);

return statearr_39062;
})();
var statearr_39063_39121 = state_39044__$1;
(statearr_39063_39121[(2)] = null);

(statearr_39063_39121[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (13))){
var inst_38974 = (state_39044[(7)]);
var inst_38981 = inst_38974.cljs$lang$protocol_mask$partition0$;
var inst_38982 = (inst_38981 & (64));
var inst_38983 = inst_38974.cljs$core$ISeq$;
var inst_38984 = (inst_38982) || (inst_38983);
var state_39044__$1 = state_39044;
if(cljs.core.truth_(inst_38984)){
var statearr_39064_39122 = state_39044__$1;
(statearr_39064_39122[(1)] = (16));

} else {
var statearr_39065_39123 = state_39044__$1;
(statearr_39065_39123[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (22))){
var inst_39004 = (state_39044[(9)]);
var inst_39003 = (state_39044[(14)]);
var inst_39002 = (state_39044[(2)]);
var inst_39003__$1 = cljs.core.nth.call(null,inst_39002,(0),null);
var inst_39004__$1 = cljs.core.nth.call(null,inst_39002,(1),null);
var inst_39005 = (inst_39003__$1 == null);
var inst_39006 = cljs.core._EQ_.call(null,inst_39004__$1,change);
var inst_39007 = (inst_39005) || (inst_39006);
var state_39044__$1 = (function (){var statearr_39066 = state_39044;
(statearr_39066[(9)] = inst_39004__$1);

(statearr_39066[(14)] = inst_39003__$1);

return statearr_39066;
})();
if(cljs.core.truth_(inst_39007)){
var statearr_39067_39124 = state_39044__$1;
(statearr_39067_39124[(1)] = (23));

} else {
var statearr_39068_39125 = state_39044__$1;
(statearr_39068_39125[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (36))){
var inst_38996 = (state_39044[(12)]);
var inst_38974 = inst_38996;
var state_39044__$1 = (function (){var statearr_39069 = state_39044;
(statearr_39069[(7)] = inst_38974);

return statearr_39069;
})();
var statearr_39070_39126 = state_39044__$1;
(statearr_39070_39126[(2)] = null);

(statearr_39070_39126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (29))){
var inst_39018 = (state_39044[(10)]);
var state_39044__$1 = state_39044;
var statearr_39071_39127 = state_39044__$1;
(statearr_39071_39127[(2)] = inst_39018);

(statearr_39071_39127[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (6))){
var state_39044__$1 = state_39044;
var statearr_39072_39128 = state_39044__$1;
(statearr_39072_39128[(2)] = false);

(statearr_39072_39128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (28))){
var inst_39014 = (state_39044[(2)]);
var inst_39015 = calc_state.call(null);
var inst_38974 = inst_39015;
var state_39044__$1 = (function (){var statearr_39073 = state_39044;
(statearr_39073[(7)] = inst_38974);

(statearr_39073[(15)] = inst_39014);

return statearr_39073;
})();
var statearr_39074_39129 = state_39044__$1;
(statearr_39074_39129[(2)] = null);

(statearr_39074_39129[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (25))){
var inst_39040 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
var statearr_39075_39130 = state_39044__$1;
(statearr_39075_39130[(2)] = inst_39040);

(statearr_39075_39130[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (34))){
var inst_39038 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
var statearr_39076_39131 = state_39044__$1;
(statearr_39076_39131[(2)] = inst_39038);

(statearr_39076_39131[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (17))){
var state_39044__$1 = state_39044;
var statearr_39077_39132 = state_39044__$1;
(statearr_39077_39132[(2)] = false);

(statearr_39077_39132[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (3))){
var state_39044__$1 = state_39044;
var statearr_39078_39133 = state_39044__$1;
(statearr_39078_39133[(2)] = false);

(statearr_39078_39133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (12))){
var inst_39042 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39044__$1,inst_39042);
} else {
if((state_val_39045 === (2))){
var inst_38950 = (state_39044[(8)]);
var inst_38955 = inst_38950.cljs$lang$protocol_mask$partition0$;
var inst_38956 = (inst_38955 & (64));
var inst_38957 = inst_38950.cljs$core$ISeq$;
var inst_38958 = (inst_38956) || (inst_38957);
var state_39044__$1 = state_39044;
if(cljs.core.truth_(inst_38958)){
var statearr_39079_39134 = state_39044__$1;
(statearr_39079_39134[(1)] = (5));

} else {
var statearr_39080_39135 = state_39044__$1;
(statearr_39080_39135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (23))){
var inst_39003 = (state_39044[(14)]);
var inst_39009 = (inst_39003 == null);
var state_39044__$1 = state_39044;
if(cljs.core.truth_(inst_39009)){
var statearr_39081_39136 = state_39044__$1;
(statearr_39081_39136[(1)] = (26));

} else {
var statearr_39082_39137 = state_39044__$1;
(statearr_39082_39137[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (35))){
var inst_39029 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
if(cljs.core.truth_(inst_39029)){
var statearr_39083_39138 = state_39044__$1;
(statearr_39083_39138[(1)] = (36));

} else {
var statearr_39084_39139 = state_39044__$1;
(statearr_39084_39139[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (19))){
var inst_38974 = (state_39044[(7)]);
var inst_38993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38974);
var state_39044__$1 = state_39044;
var statearr_39085_39140 = state_39044__$1;
(statearr_39085_39140[(2)] = inst_38993);

(statearr_39085_39140[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (11))){
var inst_38974 = (state_39044[(7)]);
var inst_38978 = (inst_38974 == null);
var inst_38979 = cljs.core.not.call(null,inst_38978);
var state_39044__$1 = state_39044;
if(inst_38979){
var statearr_39086_39141 = state_39044__$1;
(statearr_39086_39141[(1)] = (13));

} else {
var statearr_39087_39142 = state_39044__$1;
(statearr_39087_39142[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (9))){
var inst_38950 = (state_39044[(8)]);
var state_39044__$1 = state_39044;
var statearr_39088_39143 = state_39044__$1;
(statearr_39088_39143[(2)] = inst_38950);

(statearr_39088_39143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (5))){
var state_39044__$1 = state_39044;
var statearr_39089_39144 = state_39044__$1;
(statearr_39089_39144[(2)] = true);

(statearr_39089_39144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (14))){
var state_39044__$1 = state_39044;
var statearr_39090_39145 = state_39044__$1;
(statearr_39090_39145[(2)] = false);

(statearr_39090_39145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (26))){
var inst_39004 = (state_39044[(9)]);
var inst_39011 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39004);
var state_39044__$1 = state_39044;
var statearr_39091_39146 = state_39044__$1;
(statearr_39091_39146[(2)] = inst_39011);

(statearr_39091_39146[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (16))){
var state_39044__$1 = state_39044;
var statearr_39092_39147 = state_39044__$1;
(statearr_39092_39147[(2)] = true);

(statearr_39092_39147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (38))){
var inst_39034 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
var statearr_39093_39148 = state_39044__$1;
(statearr_39093_39148[(2)] = inst_39034);

(statearr_39093_39148[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (30))){
var inst_39004 = (state_39044[(9)]);
var inst_38998 = (state_39044[(13)]);
var inst_38997 = (state_39044[(11)]);
var inst_39021 = cljs.core.empty_QMARK_.call(null,inst_38997);
var inst_39022 = inst_38998.call(null,inst_39004);
var inst_39023 = cljs.core.not.call(null,inst_39022);
var inst_39024 = (inst_39021) && (inst_39023);
var state_39044__$1 = state_39044;
var statearr_39094_39149 = state_39044__$1;
(statearr_39094_39149[(2)] = inst_39024);

(statearr_39094_39149[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (10))){
var inst_38950 = (state_39044[(8)]);
var inst_38970 = (state_39044[(2)]);
var inst_38971 = cljs.core.get.call(null,inst_38970,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38972 = cljs.core.get.call(null,inst_38970,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38973 = cljs.core.get.call(null,inst_38970,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38974 = inst_38950;
var state_39044__$1 = (function (){var statearr_39095 = state_39044;
(statearr_39095[(16)] = inst_38973);

(statearr_39095[(17)] = inst_38972);

(statearr_39095[(7)] = inst_38974);

(statearr_39095[(18)] = inst_38971);

return statearr_39095;
})();
var statearr_39096_39150 = state_39044__$1;
(statearr_39096_39150[(2)] = null);

(statearr_39096_39150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (18))){
var inst_38988 = (state_39044[(2)]);
var state_39044__$1 = state_39044;
var statearr_39097_39151 = state_39044__$1;
(statearr_39097_39151[(2)] = inst_38988);

(statearr_39097_39151[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (37))){
var state_39044__$1 = state_39044;
var statearr_39098_39152 = state_39044__$1;
(statearr_39098_39152[(2)] = null);

(statearr_39098_39152[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39045 === (8))){
var inst_38950 = (state_39044[(8)]);
var inst_38967 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38950);
var state_39044__$1 = state_39044;
var statearr_39099_39153 = state_39044__$1;
(statearr_39099_39153[(2)] = inst_38967);

(statearr_39099_39153[(1)] = (10));


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
});})(c__25115__auto___39107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25003__auto__,c__25115__auto___39107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25004__auto__ = null;
var cljs$core$async$mix_$_state_machine__25004__auto____0 = (function (){
var statearr_39103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39103[(0)] = cljs$core$async$mix_$_state_machine__25004__auto__);

(statearr_39103[(1)] = (1));

return statearr_39103;
});
var cljs$core$async$mix_$_state_machine__25004__auto____1 = (function (state_39044){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39104){if((e39104 instanceof Object)){
var ex__25007__auto__ = e39104;
var statearr_39105_39154 = state_39044;
(statearr_39105_39154[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39155 = state_39044;
state_39044 = G__39155;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25004__auto__ = function(state_39044){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25004__auto____1.call(this,state_39044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25004__auto____0;
cljs$core$async$mix_$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25004__auto____1;
return cljs$core$async$mix_$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___39107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__25117__auto__ = (function (){var statearr_39106 = f__25116__auto__.call(null);
(statearr_39106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___39107);

return statearr_39106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___39107,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__22371__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p,v,ch);
} else {
var m__22371__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39156 = [];
var len__22777__auto___39159 = arguments.length;
var i__22778__auto___39160 = (0);
while(true){
if((i__22778__auto___39160 < len__22777__auto___39159)){
args39156.push((arguments[i__22778__auto___39160]));

var G__39161 = (i__22778__auto___39160 + (1));
i__22778__auto___39160 = G__39161;
continue;
} else {
}
break;
}

var G__39158 = args39156.length;
switch (G__39158) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39156.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p);
} else {
var m__22371__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__22370__auto__ = (((p == null))?null:p);
var m__22371__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__22370__auto__)]);
if(!((m__22371__auto__ == null))){
return m__22371__auto__.call(null,p,v);
} else {
var m__22371__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__22371__auto____$1 == null))){
return m__22371__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args39164 = [];
var len__22777__auto___39289 = arguments.length;
var i__22778__auto___39290 = (0);
while(true){
if((i__22778__auto___39290 < len__22777__auto___39289)){
args39164.push((arguments[i__22778__auto___39290]));

var G__39291 = (i__22778__auto___39290 + (1));
i__22778__auto___39290 = G__39291;
continue;
} else {
}
break;
}

var G__39166 = args39164.length;
switch (G__39166) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39164.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__21707__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__21707__auto__)){
return or__21707__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__21707__auto__,mults){
return (function (p1__39163_SHARP_){
if(cljs.core.truth_(p1__39163_SHARP_.call(null,topic))){
return p1__39163_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39163_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__21707__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39167 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39168){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39168 = meta39168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39169,meta39168__$1){
var self__ = this;
var _39169__$1 = this;
return (new cljs.core.async.t_cljs$core$async39167(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39168__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39169){
var self__ = this;
var _39169__$1 = this;
return self__.meta39168;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39168","meta39168",-1892225093,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39167";

cljs.core.async.t_cljs$core$async39167.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async39167");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39167 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39167(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39168){
return (new cljs.core.async.t_cljs$core$async39167(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39168));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39167(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25115__auto___39293 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___39293,mults,ensure_mult,p){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___39293,mults,ensure_mult,p){
return (function (state_39241){
var state_val_39242 = (state_39241[(1)]);
if((state_val_39242 === (7))){
var inst_39237 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39243_39294 = state_39241__$1;
(statearr_39243_39294[(2)] = inst_39237);

(statearr_39243_39294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (20))){
var state_39241__$1 = state_39241;
var statearr_39244_39295 = state_39241__$1;
(statearr_39244_39295[(2)] = null);

(statearr_39244_39295[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (1))){
var state_39241__$1 = state_39241;
var statearr_39245_39296 = state_39241__$1;
(statearr_39245_39296[(2)] = null);

(statearr_39245_39296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (24))){
var inst_39220 = (state_39241[(7)]);
var inst_39229 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39220);
var state_39241__$1 = state_39241;
var statearr_39246_39297 = state_39241__$1;
(statearr_39246_39297[(2)] = inst_39229);

(statearr_39246_39297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (4))){
var inst_39172 = (state_39241[(8)]);
var inst_39172__$1 = (state_39241[(2)]);
var inst_39173 = (inst_39172__$1 == null);
var state_39241__$1 = (function (){var statearr_39247 = state_39241;
(statearr_39247[(8)] = inst_39172__$1);

return statearr_39247;
})();
if(cljs.core.truth_(inst_39173)){
var statearr_39248_39298 = state_39241__$1;
(statearr_39248_39298[(1)] = (5));

} else {
var statearr_39249_39299 = state_39241__$1;
(statearr_39249_39299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (15))){
var inst_39214 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39250_39300 = state_39241__$1;
(statearr_39250_39300[(2)] = inst_39214);

(statearr_39250_39300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (21))){
var inst_39234 = (state_39241[(2)]);
var state_39241__$1 = (function (){var statearr_39251 = state_39241;
(statearr_39251[(9)] = inst_39234);

return statearr_39251;
})();
var statearr_39252_39301 = state_39241__$1;
(statearr_39252_39301[(2)] = null);

(statearr_39252_39301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (13))){
var inst_39196 = (state_39241[(10)]);
var inst_39198 = cljs.core.chunked_seq_QMARK_.call(null,inst_39196);
var state_39241__$1 = state_39241;
if(inst_39198){
var statearr_39253_39302 = state_39241__$1;
(statearr_39253_39302[(1)] = (16));

} else {
var statearr_39254_39303 = state_39241__$1;
(statearr_39254_39303[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (22))){
var inst_39226 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
if(cljs.core.truth_(inst_39226)){
var statearr_39255_39304 = state_39241__$1;
(statearr_39255_39304[(1)] = (23));

} else {
var statearr_39256_39305 = state_39241__$1;
(statearr_39256_39305[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (6))){
var inst_39220 = (state_39241[(7)]);
var inst_39222 = (state_39241[(11)]);
var inst_39172 = (state_39241[(8)]);
var inst_39220__$1 = topic_fn.call(null,inst_39172);
var inst_39221 = cljs.core.deref.call(null,mults);
var inst_39222__$1 = cljs.core.get.call(null,inst_39221,inst_39220__$1);
var state_39241__$1 = (function (){var statearr_39257 = state_39241;
(statearr_39257[(7)] = inst_39220__$1);

(statearr_39257[(11)] = inst_39222__$1);

return statearr_39257;
})();
if(cljs.core.truth_(inst_39222__$1)){
var statearr_39258_39306 = state_39241__$1;
(statearr_39258_39306[(1)] = (19));

} else {
var statearr_39259_39307 = state_39241__$1;
(statearr_39259_39307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (25))){
var inst_39231 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39260_39308 = state_39241__$1;
(statearr_39260_39308[(2)] = inst_39231);

(statearr_39260_39308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (17))){
var inst_39196 = (state_39241[(10)]);
var inst_39205 = cljs.core.first.call(null,inst_39196);
var inst_39206 = cljs.core.async.muxch_STAR_.call(null,inst_39205);
var inst_39207 = cljs.core.async.close_BANG_.call(null,inst_39206);
var inst_39208 = cljs.core.next.call(null,inst_39196);
var inst_39182 = inst_39208;
var inst_39183 = null;
var inst_39184 = (0);
var inst_39185 = (0);
var state_39241__$1 = (function (){var statearr_39261 = state_39241;
(statearr_39261[(12)] = inst_39183);

(statearr_39261[(13)] = inst_39185);

(statearr_39261[(14)] = inst_39182);

(statearr_39261[(15)] = inst_39207);

(statearr_39261[(16)] = inst_39184);

return statearr_39261;
})();
var statearr_39262_39309 = state_39241__$1;
(statearr_39262_39309[(2)] = null);

(statearr_39262_39309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (3))){
var inst_39239 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39241__$1,inst_39239);
} else {
if((state_val_39242 === (12))){
var inst_39216 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39263_39310 = state_39241__$1;
(statearr_39263_39310[(2)] = inst_39216);

(statearr_39263_39310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (2))){
var state_39241__$1 = state_39241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39241__$1,(4),ch);
} else {
if((state_val_39242 === (23))){
var state_39241__$1 = state_39241;
var statearr_39264_39311 = state_39241__$1;
(statearr_39264_39311[(2)] = null);

(statearr_39264_39311[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (19))){
var inst_39222 = (state_39241[(11)]);
var inst_39172 = (state_39241[(8)]);
var inst_39224 = cljs.core.async.muxch_STAR_.call(null,inst_39222);
var state_39241__$1 = state_39241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39241__$1,(22),inst_39224,inst_39172);
} else {
if((state_val_39242 === (11))){
var inst_39196 = (state_39241[(10)]);
var inst_39182 = (state_39241[(14)]);
var inst_39196__$1 = cljs.core.seq.call(null,inst_39182);
var state_39241__$1 = (function (){var statearr_39265 = state_39241;
(statearr_39265[(10)] = inst_39196__$1);

return statearr_39265;
})();
if(inst_39196__$1){
var statearr_39266_39312 = state_39241__$1;
(statearr_39266_39312[(1)] = (13));

} else {
var statearr_39267_39313 = state_39241__$1;
(statearr_39267_39313[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (9))){
var inst_39218 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39268_39314 = state_39241__$1;
(statearr_39268_39314[(2)] = inst_39218);

(statearr_39268_39314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (5))){
var inst_39179 = cljs.core.deref.call(null,mults);
var inst_39180 = cljs.core.vals.call(null,inst_39179);
var inst_39181 = cljs.core.seq.call(null,inst_39180);
var inst_39182 = inst_39181;
var inst_39183 = null;
var inst_39184 = (0);
var inst_39185 = (0);
var state_39241__$1 = (function (){var statearr_39269 = state_39241;
(statearr_39269[(12)] = inst_39183);

(statearr_39269[(13)] = inst_39185);

(statearr_39269[(14)] = inst_39182);

(statearr_39269[(16)] = inst_39184);

return statearr_39269;
})();
var statearr_39270_39315 = state_39241__$1;
(statearr_39270_39315[(2)] = null);

(statearr_39270_39315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (14))){
var state_39241__$1 = state_39241;
var statearr_39274_39316 = state_39241__$1;
(statearr_39274_39316[(2)] = null);

(statearr_39274_39316[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (16))){
var inst_39196 = (state_39241[(10)]);
var inst_39200 = cljs.core.chunk_first.call(null,inst_39196);
var inst_39201 = cljs.core.chunk_rest.call(null,inst_39196);
var inst_39202 = cljs.core.count.call(null,inst_39200);
var inst_39182 = inst_39201;
var inst_39183 = inst_39200;
var inst_39184 = inst_39202;
var inst_39185 = (0);
var state_39241__$1 = (function (){var statearr_39275 = state_39241;
(statearr_39275[(12)] = inst_39183);

(statearr_39275[(13)] = inst_39185);

(statearr_39275[(14)] = inst_39182);

(statearr_39275[(16)] = inst_39184);

return statearr_39275;
})();
var statearr_39276_39317 = state_39241__$1;
(statearr_39276_39317[(2)] = null);

(statearr_39276_39317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (10))){
var inst_39183 = (state_39241[(12)]);
var inst_39185 = (state_39241[(13)]);
var inst_39182 = (state_39241[(14)]);
var inst_39184 = (state_39241[(16)]);
var inst_39190 = cljs.core._nth.call(null,inst_39183,inst_39185);
var inst_39191 = cljs.core.async.muxch_STAR_.call(null,inst_39190);
var inst_39192 = cljs.core.async.close_BANG_.call(null,inst_39191);
var inst_39193 = (inst_39185 + (1));
var tmp39271 = inst_39183;
var tmp39272 = inst_39182;
var tmp39273 = inst_39184;
var inst_39182__$1 = tmp39272;
var inst_39183__$1 = tmp39271;
var inst_39184__$1 = tmp39273;
var inst_39185__$1 = inst_39193;
var state_39241__$1 = (function (){var statearr_39277 = state_39241;
(statearr_39277[(17)] = inst_39192);

(statearr_39277[(12)] = inst_39183__$1);

(statearr_39277[(13)] = inst_39185__$1);

(statearr_39277[(14)] = inst_39182__$1);

(statearr_39277[(16)] = inst_39184__$1);

return statearr_39277;
})();
var statearr_39278_39318 = state_39241__$1;
(statearr_39278_39318[(2)] = null);

(statearr_39278_39318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (18))){
var inst_39211 = (state_39241[(2)]);
var state_39241__$1 = state_39241;
var statearr_39279_39319 = state_39241__$1;
(statearr_39279_39319[(2)] = inst_39211);

(statearr_39279_39319[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39242 === (8))){
var inst_39185 = (state_39241[(13)]);
var inst_39184 = (state_39241[(16)]);
var inst_39187 = (inst_39185 < inst_39184);
var inst_39188 = inst_39187;
var state_39241__$1 = state_39241;
if(cljs.core.truth_(inst_39188)){
var statearr_39280_39320 = state_39241__$1;
(statearr_39280_39320[(1)] = (10));

} else {
var statearr_39281_39321 = state_39241__$1;
(statearr_39281_39321[(1)] = (11));

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
});})(c__25115__auto___39293,mults,ensure_mult,p))
;
return ((function (switch__25003__auto__,c__25115__auto___39293,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_39285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39285[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_39285[(1)] = (1));

return statearr_39285;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_39241){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39286){if((e39286 instanceof Object)){
var ex__25007__auto__ = e39286;
var statearr_39287_39322 = state_39241;
(statearr_39287_39322[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39323 = state_39241;
state_39241 = G__39323;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_39241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_39241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___39293,mults,ensure_mult,p))
})();
var state__25117__auto__ = (function (){var statearr_39288 = f__25116__auto__.call(null);
(statearr_39288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___39293);

return statearr_39288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___39293,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args39324 = [];
var len__22777__auto___39327 = arguments.length;
var i__22778__auto___39328 = (0);
while(true){
if((i__22778__auto___39328 < len__22777__auto___39327)){
args39324.push((arguments[i__22778__auto___39328]));

var G__39329 = (i__22778__auto___39328 + (1));
i__22778__auto___39328 = G__39329;
continue;
} else {
}
break;
}

var G__39326 = args39324.length;
switch (G__39326) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39324.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args39331 = [];
var len__22777__auto___39334 = arguments.length;
var i__22778__auto___39335 = (0);
while(true){
if((i__22778__auto___39335 < len__22777__auto___39334)){
args39331.push((arguments[i__22778__auto___39335]));

var G__39336 = (i__22778__auto___39335 + (1));
i__22778__auto___39335 = G__39336;
continue;
} else {
}
break;
}

var G__39333 = args39331.length;
switch (G__39333) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39331.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args39338 = [];
var len__22777__auto___39409 = arguments.length;
var i__22778__auto___39410 = (0);
while(true){
if((i__22778__auto___39410 < len__22777__auto___39409)){
args39338.push((arguments[i__22778__auto___39410]));

var G__39411 = (i__22778__auto___39410 + (1));
i__22778__auto___39410 = G__39411;
continue;
} else {
}
break;
}

var G__39340 = args39338.length;
switch (G__39340) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39338.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__25115__auto___39413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___39413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___39413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39379){
var state_val_39380 = (state_39379[(1)]);
if((state_val_39380 === (7))){
var state_39379__$1 = state_39379;
var statearr_39381_39414 = state_39379__$1;
(statearr_39381_39414[(2)] = null);

(statearr_39381_39414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (1))){
var state_39379__$1 = state_39379;
var statearr_39382_39415 = state_39379__$1;
(statearr_39382_39415[(2)] = null);

(statearr_39382_39415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (4))){
var inst_39343 = (state_39379[(7)]);
var inst_39345 = (inst_39343 < cnt);
var state_39379__$1 = state_39379;
if(cljs.core.truth_(inst_39345)){
var statearr_39383_39416 = state_39379__$1;
(statearr_39383_39416[(1)] = (6));

} else {
var statearr_39384_39417 = state_39379__$1;
(statearr_39384_39417[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (15))){
var inst_39375 = (state_39379[(2)]);
var state_39379__$1 = state_39379;
var statearr_39385_39418 = state_39379__$1;
(statearr_39385_39418[(2)] = inst_39375);

(statearr_39385_39418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (13))){
var inst_39368 = cljs.core.async.close_BANG_.call(null,out);
var state_39379__$1 = state_39379;
var statearr_39386_39419 = state_39379__$1;
(statearr_39386_39419[(2)] = inst_39368);

(statearr_39386_39419[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (6))){
var state_39379__$1 = state_39379;
var statearr_39387_39420 = state_39379__$1;
(statearr_39387_39420[(2)] = null);

(statearr_39387_39420[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (3))){
var inst_39377 = (state_39379[(2)]);
var state_39379__$1 = state_39379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39379__$1,inst_39377);
} else {
if((state_val_39380 === (12))){
var inst_39365 = (state_39379[(8)]);
var inst_39365__$1 = (state_39379[(2)]);
var inst_39366 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39365__$1);
var state_39379__$1 = (function (){var statearr_39388 = state_39379;
(statearr_39388[(8)] = inst_39365__$1);

return statearr_39388;
})();
if(cljs.core.truth_(inst_39366)){
var statearr_39389_39421 = state_39379__$1;
(statearr_39389_39421[(1)] = (13));

} else {
var statearr_39390_39422 = state_39379__$1;
(statearr_39390_39422[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (2))){
var inst_39342 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39343 = (0);
var state_39379__$1 = (function (){var statearr_39391 = state_39379;
(statearr_39391[(9)] = inst_39342);

(statearr_39391[(7)] = inst_39343);

return statearr_39391;
})();
var statearr_39392_39423 = state_39379__$1;
(statearr_39392_39423[(2)] = null);

(statearr_39392_39423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (11))){
var inst_39343 = (state_39379[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39379,(10),Object,null,(9));
var inst_39352 = chs__$1.call(null,inst_39343);
var inst_39353 = done.call(null,inst_39343);
var inst_39354 = cljs.core.async.take_BANG_.call(null,inst_39352,inst_39353);
var state_39379__$1 = state_39379;
var statearr_39393_39424 = state_39379__$1;
(statearr_39393_39424[(2)] = inst_39354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39379__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (9))){
var inst_39343 = (state_39379[(7)]);
var inst_39356 = (state_39379[(2)]);
var inst_39357 = (inst_39343 + (1));
var inst_39343__$1 = inst_39357;
var state_39379__$1 = (function (){var statearr_39394 = state_39379;
(statearr_39394[(10)] = inst_39356);

(statearr_39394[(7)] = inst_39343__$1);

return statearr_39394;
})();
var statearr_39395_39425 = state_39379__$1;
(statearr_39395_39425[(2)] = null);

(statearr_39395_39425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (5))){
var inst_39363 = (state_39379[(2)]);
var state_39379__$1 = (function (){var statearr_39396 = state_39379;
(statearr_39396[(11)] = inst_39363);

return statearr_39396;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39379__$1,(12),dchan);
} else {
if((state_val_39380 === (14))){
var inst_39365 = (state_39379[(8)]);
var inst_39370 = cljs.core.apply.call(null,f,inst_39365);
var state_39379__$1 = state_39379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39379__$1,(16),out,inst_39370);
} else {
if((state_val_39380 === (16))){
var inst_39372 = (state_39379[(2)]);
var state_39379__$1 = (function (){var statearr_39397 = state_39379;
(statearr_39397[(12)] = inst_39372);

return statearr_39397;
})();
var statearr_39398_39426 = state_39379__$1;
(statearr_39398_39426[(2)] = null);

(statearr_39398_39426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (10))){
var inst_39347 = (state_39379[(2)]);
var inst_39348 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39379__$1 = (function (){var statearr_39399 = state_39379;
(statearr_39399[(13)] = inst_39347);

return statearr_39399;
})();
var statearr_39400_39427 = state_39379__$1;
(statearr_39400_39427[(2)] = inst_39348);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39379__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39380 === (8))){
var inst_39361 = (state_39379[(2)]);
var state_39379__$1 = state_39379;
var statearr_39401_39428 = state_39379__$1;
(statearr_39401_39428[(2)] = inst_39361);

(statearr_39401_39428[(1)] = (5));


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
});})(c__25115__auto___39413,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25003__auto__,c__25115__auto___39413,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_39405 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39405[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_39405[(1)] = (1));

return statearr_39405;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_39379){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39406){if((e39406 instanceof Object)){
var ex__25007__auto__ = e39406;
var statearr_39407_39429 = state_39379;
(statearr_39407_39429[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39430 = state_39379;
state_39379 = G__39430;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_39379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_39379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___39413,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__25117__auto__ = (function (){var statearr_39408 = f__25116__auto__.call(null);
(statearr_39408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___39413);

return statearr_39408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___39413,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args39432 = [];
var len__22777__auto___39488 = arguments.length;
var i__22778__auto___39489 = (0);
while(true){
if((i__22778__auto___39489 < len__22777__auto___39488)){
args39432.push((arguments[i__22778__auto___39489]));

var G__39490 = (i__22778__auto___39489 + (1));
i__22778__auto___39489 = G__39490;
continue;
} else {
}
break;
}

var G__39434 = args39432.length;
switch (G__39434) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39432.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25115__auto___39492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___39492,out){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___39492,out){
return (function (state_39464){
var state_val_39465 = (state_39464[(1)]);
if((state_val_39465 === (7))){
var inst_39443 = (state_39464[(7)]);
var inst_39444 = (state_39464[(8)]);
var inst_39443__$1 = (state_39464[(2)]);
var inst_39444__$1 = cljs.core.nth.call(null,inst_39443__$1,(0),null);
var inst_39445 = cljs.core.nth.call(null,inst_39443__$1,(1),null);
var inst_39446 = (inst_39444__$1 == null);
var state_39464__$1 = (function (){var statearr_39466 = state_39464;
(statearr_39466[(7)] = inst_39443__$1);

(statearr_39466[(8)] = inst_39444__$1);

(statearr_39466[(9)] = inst_39445);

return statearr_39466;
})();
if(cljs.core.truth_(inst_39446)){
var statearr_39467_39493 = state_39464__$1;
(statearr_39467_39493[(1)] = (8));

} else {
var statearr_39468_39494 = state_39464__$1;
(statearr_39468_39494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (1))){
var inst_39435 = cljs.core.vec.call(null,chs);
var inst_39436 = inst_39435;
var state_39464__$1 = (function (){var statearr_39469 = state_39464;
(statearr_39469[(10)] = inst_39436);

return statearr_39469;
})();
var statearr_39470_39495 = state_39464__$1;
(statearr_39470_39495[(2)] = null);

(statearr_39470_39495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (4))){
var inst_39436 = (state_39464[(10)]);
var state_39464__$1 = state_39464;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39464__$1,(7),inst_39436);
} else {
if((state_val_39465 === (6))){
var inst_39460 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39471_39496 = state_39464__$1;
(statearr_39471_39496[(2)] = inst_39460);

(statearr_39471_39496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (3))){
var inst_39462 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39464__$1,inst_39462);
} else {
if((state_val_39465 === (2))){
var inst_39436 = (state_39464[(10)]);
var inst_39438 = cljs.core.count.call(null,inst_39436);
var inst_39439 = (inst_39438 > (0));
var state_39464__$1 = state_39464;
if(cljs.core.truth_(inst_39439)){
var statearr_39473_39497 = state_39464__$1;
(statearr_39473_39497[(1)] = (4));

} else {
var statearr_39474_39498 = state_39464__$1;
(statearr_39474_39498[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (11))){
var inst_39436 = (state_39464[(10)]);
var inst_39453 = (state_39464[(2)]);
var tmp39472 = inst_39436;
var inst_39436__$1 = tmp39472;
var state_39464__$1 = (function (){var statearr_39475 = state_39464;
(statearr_39475[(11)] = inst_39453);

(statearr_39475[(10)] = inst_39436__$1);

return statearr_39475;
})();
var statearr_39476_39499 = state_39464__$1;
(statearr_39476_39499[(2)] = null);

(statearr_39476_39499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (9))){
var inst_39444 = (state_39464[(8)]);
var state_39464__$1 = state_39464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39464__$1,(11),out,inst_39444);
} else {
if((state_val_39465 === (5))){
var inst_39458 = cljs.core.async.close_BANG_.call(null,out);
var state_39464__$1 = state_39464;
var statearr_39477_39500 = state_39464__$1;
(statearr_39477_39500[(2)] = inst_39458);

(statearr_39477_39500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (10))){
var inst_39456 = (state_39464[(2)]);
var state_39464__$1 = state_39464;
var statearr_39478_39501 = state_39464__$1;
(statearr_39478_39501[(2)] = inst_39456);

(statearr_39478_39501[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39465 === (8))){
var inst_39443 = (state_39464[(7)]);
var inst_39444 = (state_39464[(8)]);
var inst_39445 = (state_39464[(9)]);
var inst_39436 = (state_39464[(10)]);
var inst_39448 = (function (){var cs = inst_39436;
var vec__39441 = inst_39443;
var v = inst_39444;
var c = inst_39445;
return ((function (cs,vec__39441,v,c,inst_39443,inst_39444,inst_39445,inst_39436,state_val_39465,c__25115__auto___39492,out){
return (function (p1__39431_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39431_SHARP_);
});
;})(cs,vec__39441,v,c,inst_39443,inst_39444,inst_39445,inst_39436,state_val_39465,c__25115__auto___39492,out))
})();
var inst_39449 = cljs.core.filterv.call(null,inst_39448,inst_39436);
var inst_39436__$1 = inst_39449;
var state_39464__$1 = (function (){var statearr_39479 = state_39464;
(statearr_39479[(10)] = inst_39436__$1);

return statearr_39479;
})();
var statearr_39480_39502 = state_39464__$1;
(statearr_39480_39502[(2)] = null);

(statearr_39480_39502[(1)] = (2));


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
});})(c__25115__auto___39492,out))
;
return ((function (switch__25003__auto__,c__25115__auto___39492,out){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_39484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39484[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_39484[(1)] = (1));

return statearr_39484;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_39464){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39485){if((e39485 instanceof Object)){
var ex__25007__auto__ = e39485;
var statearr_39486_39503 = state_39464;
(statearr_39486_39503[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39504 = state_39464;
state_39464 = G__39504;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_39464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_39464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___39492,out))
})();
var state__25117__auto__ = (function (){var statearr_39487 = f__25116__auto__.call(null);
(statearr_39487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___39492);

return statearr_39487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___39492,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args39505 = [];
var len__22777__auto___39554 = arguments.length;
var i__22778__auto___39555 = (0);
while(true){
if((i__22778__auto___39555 < len__22777__auto___39554)){
args39505.push((arguments[i__22778__auto___39555]));

var G__39556 = (i__22778__auto___39555 + (1));
i__22778__auto___39555 = G__39556;
continue;
} else {
}
break;
}

var G__39507 = args39505.length;
switch (G__39507) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39505.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25115__auto___39558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___39558,out){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___39558,out){
return (function (state_39531){
var state_val_39532 = (state_39531[(1)]);
if((state_val_39532 === (7))){
var inst_39513 = (state_39531[(7)]);
var inst_39513__$1 = (state_39531[(2)]);
var inst_39514 = (inst_39513__$1 == null);
var inst_39515 = cljs.core.not.call(null,inst_39514);
var state_39531__$1 = (function (){var statearr_39533 = state_39531;
(statearr_39533[(7)] = inst_39513__$1);

return statearr_39533;
})();
if(inst_39515){
var statearr_39534_39559 = state_39531__$1;
(statearr_39534_39559[(1)] = (8));

} else {
var statearr_39535_39560 = state_39531__$1;
(statearr_39535_39560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (1))){
var inst_39508 = (0);
var state_39531__$1 = (function (){var statearr_39536 = state_39531;
(statearr_39536[(8)] = inst_39508);

return statearr_39536;
})();
var statearr_39537_39561 = state_39531__$1;
(statearr_39537_39561[(2)] = null);

(statearr_39537_39561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (4))){
var state_39531__$1 = state_39531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39531__$1,(7),ch);
} else {
if((state_val_39532 === (6))){
var inst_39526 = (state_39531[(2)]);
var state_39531__$1 = state_39531;
var statearr_39538_39562 = state_39531__$1;
(statearr_39538_39562[(2)] = inst_39526);

(statearr_39538_39562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (3))){
var inst_39528 = (state_39531[(2)]);
var inst_39529 = cljs.core.async.close_BANG_.call(null,out);
var state_39531__$1 = (function (){var statearr_39539 = state_39531;
(statearr_39539[(9)] = inst_39528);

return statearr_39539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39531__$1,inst_39529);
} else {
if((state_val_39532 === (2))){
var inst_39508 = (state_39531[(8)]);
var inst_39510 = (inst_39508 < n);
var state_39531__$1 = state_39531;
if(cljs.core.truth_(inst_39510)){
var statearr_39540_39563 = state_39531__$1;
(statearr_39540_39563[(1)] = (4));

} else {
var statearr_39541_39564 = state_39531__$1;
(statearr_39541_39564[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (11))){
var inst_39508 = (state_39531[(8)]);
var inst_39518 = (state_39531[(2)]);
var inst_39519 = (inst_39508 + (1));
var inst_39508__$1 = inst_39519;
var state_39531__$1 = (function (){var statearr_39542 = state_39531;
(statearr_39542[(8)] = inst_39508__$1);

(statearr_39542[(10)] = inst_39518);

return statearr_39542;
})();
var statearr_39543_39565 = state_39531__$1;
(statearr_39543_39565[(2)] = null);

(statearr_39543_39565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (9))){
var state_39531__$1 = state_39531;
var statearr_39544_39566 = state_39531__$1;
(statearr_39544_39566[(2)] = null);

(statearr_39544_39566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (5))){
var state_39531__$1 = state_39531;
var statearr_39545_39567 = state_39531__$1;
(statearr_39545_39567[(2)] = null);

(statearr_39545_39567[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (10))){
var inst_39523 = (state_39531[(2)]);
var state_39531__$1 = state_39531;
var statearr_39546_39568 = state_39531__$1;
(statearr_39546_39568[(2)] = inst_39523);

(statearr_39546_39568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39532 === (8))){
var inst_39513 = (state_39531[(7)]);
var state_39531__$1 = state_39531;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39531__$1,(11),out,inst_39513);
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
});})(c__25115__auto___39558,out))
;
return ((function (switch__25003__auto__,c__25115__auto___39558,out){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_39550 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39550[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_39550[(1)] = (1));

return statearr_39550;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_39531){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39551){if((e39551 instanceof Object)){
var ex__25007__auto__ = e39551;
var statearr_39552_39569 = state_39531;
(statearr_39552_39569[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39570 = state_39531;
state_39531 = G__39570;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_39531){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_39531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___39558,out))
})();
var state__25117__auto__ = (function (){var statearr_39553 = f__25116__auto__.call(null);
(statearr_39553[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___39558);

return statearr_39553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___39558,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39578 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39578 = (function (map_LT_,f,ch,meta39579){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39579 = meta39579;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39580,meta39579__$1){
var self__ = this;
var _39580__$1 = this;
return (new cljs.core.async.t_cljs$core$async39578(self__.map_LT_,self__.f,self__.ch,meta39579__$1));
});

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39580){
var self__ = this;
var _39580__$1 = this;
return self__.meta39579;
});

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async39581 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39581 = (function (map_LT_,f,ch,meta39579,_,fn1,meta39582){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39579 = meta39579;
this._ = _;
this.fn1 = fn1;
this.meta39582 = meta39582;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39583,meta39582__$1){
var self__ = this;
var _39583__$1 = this;
return (new cljs.core.async.t_cljs$core$async39581(self__.map_LT_,self__.f,self__.ch,self__.meta39579,self__._,self__.fn1,meta39582__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async39581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39583){
var self__ = this;
var _39583__$1 = this;
return self__.meta39582;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39581.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39581.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async39581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39571_SHARP_){
return f1.call(null,(((p1__39571_SHARP_ == null))?null:self__.f.call(null,p1__39571_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async39581.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39579","meta39579",1574837031,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async39578","cljs.core.async/t_cljs$core$async39578",-1922726265,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta39582","meta39582",-1047516793,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async39581.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39581.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39581";

cljs.core.async.t_cljs$core$async39581.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async39581");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async39581 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39581(map_LT___$1,f__$1,ch__$1,meta39579__$1,___$2,fn1__$1,meta39582){
return (new cljs.core.async.t_cljs$core$async39581(map_LT___$1,f__$1,ch__$1,meta39579__$1,___$2,fn1__$1,meta39582));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async39581(self__.map_LT_,self__.f,self__.ch,self__.meta39579,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__21695__auto__ = ret;
if(cljs.core.truth_(and__21695__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__21695__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async39578.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39579","meta39579",1574837031,null)], null);
});

cljs.core.async.t_cljs$core$async39578.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39578.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39578";

cljs.core.async.t_cljs$core$async39578.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async39578");
});

cljs.core.async.__GT_t_cljs$core$async39578 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async39578(map_LT___$1,f__$1,ch__$1,meta39579){
return (new cljs.core.async.t_cljs$core$async39578(map_LT___$1,f__$1,ch__$1,meta39579));
});

}

return (new cljs.core.async.t_cljs$core$async39578(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async39587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39587 = (function (map_GT_,f,ch,meta39588){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta39588 = meta39588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39589,meta39588__$1){
var self__ = this;
var _39589__$1 = this;
return (new cljs.core.async.t_cljs$core$async39587(self__.map_GT_,self__.f,self__.ch,meta39588__$1));
});

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39589){
var self__ = this;
var _39589__$1 = this;
return self__.meta39588;
});

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39587.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async39587.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39588","meta39588",-1171106684,null)], null);
});

cljs.core.async.t_cljs$core$async39587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39587";

cljs.core.async.t_cljs$core$async39587.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async39587");
});

cljs.core.async.__GT_t_cljs$core$async39587 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async39587(map_GT___$1,f__$1,ch__$1,meta39588){
return (new cljs.core.async.t_cljs$core$async39587(map_GT___$1,f__$1,ch__$1,meta39588));
});

}

return (new cljs.core.async.t_cljs$core$async39587(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async39593 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39593 = (function (filter_GT_,p,ch,meta39594){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta39594 = meta39594;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39595,meta39594__$1){
var self__ = this;
var _39595__$1 = this;
return (new cljs.core.async.t_cljs$core$async39593(self__.filter_GT_,self__.p,self__.ch,meta39594__$1));
});

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39595){
var self__ = this;
var _39595__$1 = this;
return self__.meta39594;
});

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async39593.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async39593.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta39594","meta39594",1619395966,null)], null);
});

cljs.core.async.t_cljs$core$async39593.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39593.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39593";

cljs.core.async.t_cljs$core$async39593.cljs$lang$ctorPrWriter = (function (this__22313__auto__,writer__22314__auto__,opt__22315__auto__){
return cljs.core._write.call(null,writer__22314__auto__,"cljs.core.async/t_cljs$core$async39593");
});

cljs.core.async.__GT_t_cljs$core$async39593 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async39593(filter_GT___$1,p__$1,ch__$1,meta39594){
return (new cljs.core.async.t_cljs$core$async39593(filter_GT___$1,p__$1,ch__$1,meta39594));
});

}

return (new cljs.core.async.t_cljs$core$async39593(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args39596 = [];
var len__22777__auto___39640 = arguments.length;
var i__22778__auto___39641 = (0);
while(true){
if((i__22778__auto___39641 < len__22777__auto___39640)){
args39596.push((arguments[i__22778__auto___39641]));

var G__39642 = (i__22778__auto___39641 + (1));
i__22778__auto___39641 = G__39642;
continue;
} else {
}
break;
}

var G__39598 = args39596.length;
switch (G__39598) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39596.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25115__auto___39644 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___39644,out){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___39644,out){
return (function (state_39619){
var state_val_39620 = (state_39619[(1)]);
if((state_val_39620 === (7))){
var inst_39615 = (state_39619[(2)]);
var state_39619__$1 = state_39619;
var statearr_39621_39645 = state_39619__$1;
(statearr_39621_39645[(2)] = inst_39615);

(statearr_39621_39645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (1))){
var state_39619__$1 = state_39619;
var statearr_39622_39646 = state_39619__$1;
(statearr_39622_39646[(2)] = null);

(statearr_39622_39646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (4))){
var inst_39601 = (state_39619[(7)]);
var inst_39601__$1 = (state_39619[(2)]);
var inst_39602 = (inst_39601__$1 == null);
var state_39619__$1 = (function (){var statearr_39623 = state_39619;
(statearr_39623[(7)] = inst_39601__$1);

return statearr_39623;
})();
if(cljs.core.truth_(inst_39602)){
var statearr_39624_39647 = state_39619__$1;
(statearr_39624_39647[(1)] = (5));

} else {
var statearr_39625_39648 = state_39619__$1;
(statearr_39625_39648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (6))){
var inst_39601 = (state_39619[(7)]);
var inst_39606 = p.call(null,inst_39601);
var state_39619__$1 = state_39619;
if(cljs.core.truth_(inst_39606)){
var statearr_39626_39649 = state_39619__$1;
(statearr_39626_39649[(1)] = (8));

} else {
var statearr_39627_39650 = state_39619__$1;
(statearr_39627_39650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (3))){
var inst_39617 = (state_39619[(2)]);
var state_39619__$1 = state_39619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39619__$1,inst_39617);
} else {
if((state_val_39620 === (2))){
var state_39619__$1 = state_39619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39619__$1,(4),ch);
} else {
if((state_val_39620 === (11))){
var inst_39609 = (state_39619[(2)]);
var state_39619__$1 = state_39619;
var statearr_39628_39651 = state_39619__$1;
(statearr_39628_39651[(2)] = inst_39609);

(statearr_39628_39651[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (9))){
var state_39619__$1 = state_39619;
var statearr_39629_39652 = state_39619__$1;
(statearr_39629_39652[(2)] = null);

(statearr_39629_39652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (5))){
var inst_39604 = cljs.core.async.close_BANG_.call(null,out);
var state_39619__$1 = state_39619;
var statearr_39630_39653 = state_39619__$1;
(statearr_39630_39653[(2)] = inst_39604);

(statearr_39630_39653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (10))){
var inst_39612 = (state_39619[(2)]);
var state_39619__$1 = (function (){var statearr_39631 = state_39619;
(statearr_39631[(8)] = inst_39612);

return statearr_39631;
})();
var statearr_39632_39654 = state_39619__$1;
(statearr_39632_39654[(2)] = null);

(statearr_39632_39654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39620 === (8))){
var inst_39601 = (state_39619[(7)]);
var state_39619__$1 = state_39619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39619__$1,(11),out,inst_39601);
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
});})(c__25115__auto___39644,out))
;
return ((function (switch__25003__auto__,c__25115__auto___39644,out){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_39636 = [null,null,null,null,null,null,null,null,null];
(statearr_39636[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_39636[(1)] = (1));

return statearr_39636;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_39619){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39637){if((e39637 instanceof Object)){
var ex__25007__auto__ = e39637;
var statearr_39638_39655 = state_39619;
(statearr_39638_39655[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39656 = state_39619;
state_39619 = G__39656;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_39619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_39619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___39644,out))
})();
var state__25117__auto__ = (function (){var statearr_39639 = f__25116__auto__.call(null);
(statearr_39639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___39644);

return statearr_39639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___39644,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args39657 = [];
var len__22777__auto___39660 = arguments.length;
var i__22778__auto___39661 = (0);
while(true){
if((i__22778__auto___39661 < len__22777__auto___39660)){
args39657.push((arguments[i__22778__auto___39661]));

var G__39662 = (i__22778__auto___39661 + (1));
i__22778__auto___39661 = G__39662;
continue;
} else {
}
break;
}

var G__39659 = args39657.length;
switch (G__39659) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39657.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25115__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto__){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto__){
return (function (state_39829){
var state_val_39830 = (state_39829[(1)]);
if((state_val_39830 === (7))){
var inst_39825 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39831_39872 = state_39829__$1;
(statearr_39831_39872[(2)] = inst_39825);

(statearr_39831_39872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (20))){
var inst_39795 = (state_39829[(7)]);
var inst_39806 = (state_39829[(2)]);
var inst_39807 = cljs.core.next.call(null,inst_39795);
var inst_39781 = inst_39807;
var inst_39782 = null;
var inst_39783 = (0);
var inst_39784 = (0);
var state_39829__$1 = (function (){var statearr_39832 = state_39829;
(statearr_39832[(8)] = inst_39781);

(statearr_39832[(9)] = inst_39806);

(statearr_39832[(10)] = inst_39784);

(statearr_39832[(11)] = inst_39783);

(statearr_39832[(12)] = inst_39782);

return statearr_39832;
})();
var statearr_39833_39873 = state_39829__$1;
(statearr_39833_39873[(2)] = null);

(statearr_39833_39873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (1))){
var state_39829__$1 = state_39829;
var statearr_39834_39874 = state_39829__$1;
(statearr_39834_39874[(2)] = null);

(statearr_39834_39874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (4))){
var inst_39770 = (state_39829[(13)]);
var inst_39770__$1 = (state_39829[(2)]);
var inst_39771 = (inst_39770__$1 == null);
var state_39829__$1 = (function (){var statearr_39835 = state_39829;
(statearr_39835[(13)] = inst_39770__$1);

return statearr_39835;
})();
if(cljs.core.truth_(inst_39771)){
var statearr_39836_39875 = state_39829__$1;
(statearr_39836_39875[(1)] = (5));

} else {
var statearr_39837_39876 = state_39829__$1;
(statearr_39837_39876[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (15))){
var state_39829__$1 = state_39829;
var statearr_39841_39877 = state_39829__$1;
(statearr_39841_39877[(2)] = null);

(statearr_39841_39877[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (21))){
var state_39829__$1 = state_39829;
var statearr_39842_39878 = state_39829__$1;
(statearr_39842_39878[(2)] = null);

(statearr_39842_39878[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (13))){
var inst_39781 = (state_39829[(8)]);
var inst_39784 = (state_39829[(10)]);
var inst_39783 = (state_39829[(11)]);
var inst_39782 = (state_39829[(12)]);
var inst_39791 = (state_39829[(2)]);
var inst_39792 = (inst_39784 + (1));
var tmp39838 = inst_39781;
var tmp39839 = inst_39783;
var tmp39840 = inst_39782;
var inst_39781__$1 = tmp39838;
var inst_39782__$1 = tmp39840;
var inst_39783__$1 = tmp39839;
var inst_39784__$1 = inst_39792;
var state_39829__$1 = (function (){var statearr_39843 = state_39829;
(statearr_39843[(8)] = inst_39781__$1);

(statearr_39843[(14)] = inst_39791);

(statearr_39843[(10)] = inst_39784__$1);

(statearr_39843[(11)] = inst_39783__$1);

(statearr_39843[(12)] = inst_39782__$1);

return statearr_39843;
})();
var statearr_39844_39879 = state_39829__$1;
(statearr_39844_39879[(2)] = null);

(statearr_39844_39879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (22))){
var state_39829__$1 = state_39829;
var statearr_39845_39880 = state_39829__$1;
(statearr_39845_39880[(2)] = null);

(statearr_39845_39880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (6))){
var inst_39770 = (state_39829[(13)]);
var inst_39779 = f.call(null,inst_39770);
var inst_39780 = cljs.core.seq.call(null,inst_39779);
var inst_39781 = inst_39780;
var inst_39782 = null;
var inst_39783 = (0);
var inst_39784 = (0);
var state_39829__$1 = (function (){var statearr_39846 = state_39829;
(statearr_39846[(8)] = inst_39781);

(statearr_39846[(10)] = inst_39784);

(statearr_39846[(11)] = inst_39783);

(statearr_39846[(12)] = inst_39782);

return statearr_39846;
})();
var statearr_39847_39881 = state_39829__$1;
(statearr_39847_39881[(2)] = null);

(statearr_39847_39881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (17))){
var inst_39795 = (state_39829[(7)]);
var inst_39799 = cljs.core.chunk_first.call(null,inst_39795);
var inst_39800 = cljs.core.chunk_rest.call(null,inst_39795);
var inst_39801 = cljs.core.count.call(null,inst_39799);
var inst_39781 = inst_39800;
var inst_39782 = inst_39799;
var inst_39783 = inst_39801;
var inst_39784 = (0);
var state_39829__$1 = (function (){var statearr_39848 = state_39829;
(statearr_39848[(8)] = inst_39781);

(statearr_39848[(10)] = inst_39784);

(statearr_39848[(11)] = inst_39783);

(statearr_39848[(12)] = inst_39782);

return statearr_39848;
})();
var statearr_39849_39882 = state_39829__$1;
(statearr_39849_39882[(2)] = null);

(statearr_39849_39882[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (3))){
var inst_39827 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39829__$1,inst_39827);
} else {
if((state_val_39830 === (12))){
var inst_39815 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39850_39883 = state_39829__$1;
(statearr_39850_39883[(2)] = inst_39815);

(statearr_39850_39883[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (2))){
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39829__$1,(4),in$);
} else {
if((state_val_39830 === (23))){
var inst_39823 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39851_39884 = state_39829__$1;
(statearr_39851_39884[(2)] = inst_39823);

(statearr_39851_39884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (19))){
var inst_39810 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39852_39885 = state_39829__$1;
(statearr_39852_39885[(2)] = inst_39810);

(statearr_39852_39885[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (11))){
var inst_39781 = (state_39829[(8)]);
var inst_39795 = (state_39829[(7)]);
var inst_39795__$1 = cljs.core.seq.call(null,inst_39781);
var state_39829__$1 = (function (){var statearr_39853 = state_39829;
(statearr_39853[(7)] = inst_39795__$1);

return statearr_39853;
})();
if(inst_39795__$1){
var statearr_39854_39886 = state_39829__$1;
(statearr_39854_39886[(1)] = (14));

} else {
var statearr_39855_39887 = state_39829__$1;
(statearr_39855_39887[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (9))){
var inst_39817 = (state_39829[(2)]);
var inst_39818 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39829__$1 = (function (){var statearr_39856 = state_39829;
(statearr_39856[(15)] = inst_39817);

return statearr_39856;
})();
if(cljs.core.truth_(inst_39818)){
var statearr_39857_39888 = state_39829__$1;
(statearr_39857_39888[(1)] = (21));

} else {
var statearr_39858_39889 = state_39829__$1;
(statearr_39858_39889[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (5))){
var inst_39773 = cljs.core.async.close_BANG_.call(null,out);
var state_39829__$1 = state_39829;
var statearr_39859_39890 = state_39829__$1;
(statearr_39859_39890[(2)] = inst_39773);

(statearr_39859_39890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (14))){
var inst_39795 = (state_39829[(7)]);
var inst_39797 = cljs.core.chunked_seq_QMARK_.call(null,inst_39795);
var state_39829__$1 = state_39829;
if(inst_39797){
var statearr_39860_39891 = state_39829__$1;
(statearr_39860_39891[(1)] = (17));

} else {
var statearr_39861_39892 = state_39829__$1;
(statearr_39861_39892[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (16))){
var inst_39813 = (state_39829[(2)]);
var state_39829__$1 = state_39829;
var statearr_39862_39893 = state_39829__$1;
(statearr_39862_39893[(2)] = inst_39813);

(statearr_39862_39893[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39830 === (10))){
var inst_39784 = (state_39829[(10)]);
var inst_39782 = (state_39829[(12)]);
var inst_39789 = cljs.core._nth.call(null,inst_39782,inst_39784);
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39829__$1,(13),out,inst_39789);
} else {
if((state_val_39830 === (18))){
var inst_39795 = (state_39829[(7)]);
var inst_39804 = cljs.core.first.call(null,inst_39795);
var state_39829__$1 = state_39829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39829__$1,(20),out,inst_39804);
} else {
if((state_val_39830 === (8))){
var inst_39784 = (state_39829[(10)]);
var inst_39783 = (state_39829[(11)]);
var inst_39786 = (inst_39784 < inst_39783);
var inst_39787 = inst_39786;
var state_39829__$1 = state_39829;
if(cljs.core.truth_(inst_39787)){
var statearr_39863_39894 = state_39829__$1;
(statearr_39863_39894[(1)] = (10));

} else {
var statearr_39864_39895 = state_39829__$1;
(statearr_39864_39895[(1)] = (11));

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
});})(c__25115__auto__))
;
return ((function (switch__25003__auto__,c__25115__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25004__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25004__auto____0 = (function (){
var statearr_39868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39868[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25004__auto__);

(statearr_39868[(1)] = (1));

return statearr_39868;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25004__auto____1 = (function (state_39829){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39869){if((e39869 instanceof Object)){
var ex__25007__auto__ = e39869;
var statearr_39870_39896 = state_39829;
(statearr_39870_39896[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39897 = state_39829;
state_39829 = G__39897;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25004__auto__ = function(state_39829){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25004__auto____1.call(this,state_39829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25004__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25004__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto__))
})();
var state__25117__auto__ = (function (){var statearr_39871 = f__25116__auto__.call(null);
(statearr_39871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto__);

return statearr_39871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto__))
);

return c__25115__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args39898 = [];
var len__22777__auto___39901 = arguments.length;
var i__22778__auto___39902 = (0);
while(true){
if((i__22778__auto___39902 < len__22777__auto___39901)){
args39898.push((arguments[i__22778__auto___39902]));

var G__39903 = (i__22778__auto___39902 + (1));
i__22778__auto___39902 = G__39903;
continue;
} else {
}
break;
}

var G__39900 = args39898.length;
switch (G__39900) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39898.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args39905 = [];
var len__22777__auto___39908 = arguments.length;
var i__22778__auto___39909 = (0);
while(true){
if((i__22778__auto___39909 < len__22777__auto___39908)){
args39905.push((arguments[i__22778__auto___39909]));

var G__39910 = (i__22778__auto___39909 + (1));
i__22778__auto___39909 = G__39910;
continue;
} else {
}
break;
}

var G__39907 = args39905.length;
switch (G__39907) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39905.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args39912 = [];
var len__22777__auto___39963 = arguments.length;
var i__22778__auto___39964 = (0);
while(true){
if((i__22778__auto___39964 < len__22777__auto___39963)){
args39912.push((arguments[i__22778__auto___39964]));

var G__39965 = (i__22778__auto___39964 + (1));
i__22778__auto___39964 = G__39965;
continue;
} else {
}
break;
}

var G__39914 = args39912.length;
switch (G__39914) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39912.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25115__auto___39967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___39967,out){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___39967,out){
return (function (state_39938){
var state_val_39939 = (state_39938[(1)]);
if((state_val_39939 === (7))){
var inst_39933 = (state_39938[(2)]);
var state_39938__$1 = state_39938;
var statearr_39940_39968 = state_39938__$1;
(statearr_39940_39968[(2)] = inst_39933);

(statearr_39940_39968[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39939 === (1))){
var inst_39915 = null;
var state_39938__$1 = (function (){var statearr_39941 = state_39938;
(statearr_39941[(7)] = inst_39915);

return statearr_39941;
})();
var statearr_39942_39969 = state_39938__$1;
(statearr_39942_39969[(2)] = null);

(statearr_39942_39969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39939 === (4))){
var inst_39918 = (state_39938[(8)]);
var inst_39918__$1 = (state_39938[(2)]);
var inst_39919 = (inst_39918__$1 == null);
var inst_39920 = cljs.core.not.call(null,inst_39919);
var state_39938__$1 = (function (){var statearr_39943 = state_39938;
(statearr_39943[(8)] = inst_39918__$1);

return statearr_39943;
})();
if(inst_39920){
var statearr_39944_39970 = state_39938__$1;
(statearr_39944_39970[(1)] = (5));

} else {
var statearr_39945_39971 = state_39938__$1;
(statearr_39945_39971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39939 === (6))){
var state_39938__$1 = state_39938;
var statearr_39946_39972 = state_39938__$1;
(statearr_39946_39972[(2)] = null);

(statearr_39946_39972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39939 === (3))){
var inst_39935 = (state_39938[(2)]);
var inst_39936 = cljs.core.async.close_BANG_.call(null,out);
var state_39938__$1 = (function (){var statearr_39947 = state_39938;
(statearr_39947[(9)] = inst_39935);

return statearr_39947;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39938__$1,inst_39936);
} else {
if((state_val_39939 === (2))){
var state_39938__$1 = state_39938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39938__$1,(4),ch);
} else {
if((state_val_39939 === (11))){
var inst_39918 = (state_39938[(8)]);
var inst_39927 = (state_39938[(2)]);
var inst_39915 = inst_39918;
var state_39938__$1 = (function (){var statearr_39948 = state_39938;
(statearr_39948[(7)] = inst_39915);

(statearr_39948[(10)] = inst_39927);

return statearr_39948;
})();
var statearr_39949_39973 = state_39938__$1;
(statearr_39949_39973[(2)] = null);

(statearr_39949_39973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39939 === (9))){
var inst_39918 = (state_39938[(8)]);
var state_39938__$1 = state_39938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39938__$1,(11),out,inst_39918);
} else {
if((state_val_39939 === (5))){
var inst_39915 = (state_39938[(7)]);
var inst_39918 = (state_39938[(8)]);
var inst_39922 = cljs.core._EQ_.call(null,inst_39918,inst_39915);
var state_39938__$1 = state_39938;
if(inst_39922){
var statearr_39951_39974 = state_39938__$1;
(statearr_39951_39974[(1)] = (8));

} else {
var statearr_39952_39975 = state_39938__$1;
(statearr_39952_39975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39939 === (10))){
var inst_39930 = (state_39938[(2)]);
var state_39938__$1 = state_39938;
var statearr_39953_39976 = state_39938__$1;
(statearr_39953_39976[(2)] = inst_39930);

(statearr_39953_39976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39939 === (8))){
var inst_39915 = (state_39938[(7)]);
var tmp39950 = inst_39915;
var inst_39915__$1 = tmp39950;
var state_39938__$1 = (function (){var statearr_39954 = state_39938;
(statearr_39954[(7)] = inst_39915__$1);

return statearr_39954;
})();
var statearr_39955_39977 = state_39938__$1;
(statearr_39955_39977[(2)] = null);

(statearr_39955_39977[(1)] = (2));


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
});})(c__25115__auto___39967,out))
;
return ((function (switch__25003__auto__,c__25115__auto___39967,out){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_39959 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39959[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_39959[(1)] = (1));

return statearr_39959;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_39938){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_39938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e39960){if((e39960 instanceof Object)){
var ex__25007__auto__ = e39960;
var statearr_39961_39978 = state_39938;
(statearr_39961_39978[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39979 = state_39938;
state_39938 = G__39979;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_39938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_39938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___39967,out))
})();
var state__25117__auto__ = (function (){var statearr_39962 = f__25116__auto__.call(null);
(statearr_39962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___39967);

return statearr_39962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___39967,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args39980 = [];
var len__22777__auto___40050 = arguments.length;
var i__22778__auto___40051 = (0);
while(true){
if((i__22778__auto___40051 < len__22777__auto___40050)){
args39980.push((arguments[i__22778__auto___40051]));

var G__40052 = (i__22778__auto___40051 + (1));
i__22778__auto___40051 = G__40052;
continue;
} else {
}
break;
}

var G__39982 = args39980.length;
switch (G__39982) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39980.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25115__auto___40054 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___40054,out){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___40054,out){
return (function (state_40020){
var state_val_40021 = (state_40020[(1)]);
if((state_val_40021 === (7))){
var inst_40016 = (state_40020[(2)]);
var state_40020__$1 = state_40020;
var statearr_40022_40055 = state_40020__$1;
(statearr_40022_40055[(2)] = inst_40016);

(statearr_40022_40055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (1))){
var inst_39983 = (new Array(n));
var inst_39984 = inst_39983;
var inst_39985 = (0);
var state_40020__$1 = (function (){var statearr_40023 = state_40020;
(statearr_40023[(7)] = inst_39985);

(statearr_40023[(8)] = inst_39984);

return statearr_40023;
})();
var statearr_40024_40056 = state_40020__$1;
(statearr_40024_40056[(2)] = null);

(statearr_40024_40056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (4))){
var inst_39988 = (state_40020[(9)]);
var inst_39988__$1 = (state_40020[(2)]);
var inst_39989 = (inst_39988__$1 == null);
var inst_39990 = cljs.core.not.call(null,inst_39989);
var state_40020__$1 = (function (){var statearr_40025 = state_40020;
(statearr_40025[(9)] = inst_39988__$1);

return statearr_40025;
})();
if(inst_39990){
var statearr_40026_40057 = state_40020__$1;
(statearr_40026_40057[(1)] = (5));

} else {
var statearr_40027_40058 = state_40020__$1;
(statearr_40027_40058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (15))){
var inst_40010 = (state_40020[(2)]);
var state_40020__$1 = state_40020;
var statearr_40028_40059 = state_40020__$1;
(statearr_40028_40059[(2)] = inst_40010);

(statearr_40028_40059[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (13))){
var state_40020__$1 = state_40020;
var statearr_40029_40060 = state_40020__$1;
(statearr_40029_40060[(2)] = null);

(statearr_40029_40060[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (6))){
var inst_39985 = (state_40020[(7)]);
var inst_40006 = (inst_39985 > (0));
var state_40020__$1 = state_40020;
if(cljs.core.truth_(inst_40006)){
var statearr_40030_40061 = state_40020__$1;
(statearr_40030_40061[(1)] = (12));

} else {
var statearr_40031_40062 = state_40020__$1;
(statearr_40031_40062[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (3))){
var inst_40018 = (state_40020[(2)]);
var state_40020__$1 = state_40020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40020__$1,inst_40018);
} else {
if((state_val_40021 === (12))){
var inst_39984 = (state_40020[(8)]);
var inst_40008 = cljs.core.vec.call(null,inst_39984);
var state_40020__$1 = state_40020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40020__$1,(15),out,inst_40008);
} else {
if((state_val_40021 === (2))){
var state_40020__$1 = state_40020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40020__$1,(4),ch);
} else {
if((state_val_40021 === (11))){
var inst_40000 = (state_40020[(2)]);
var inst_40001 = (new Array(n));
var inst_39984 = inst_40001;
var inst_39985 = (0);
var state_40020__$1 = (function (){var statearr_40032 = state_40020;
(statearr_40032[(7)] = inst_39985);

(statearr_40032[(10)] = inst_40000);

(statearr_40032[(8)] = inst_39984);

return statearr_40032;
})();
var statearr_40033_40063 = state_40020__$1;
(statearr_40033_40063[(2)] = null);

(statearr_40033_40063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (9))){
var inst_39984 = (state_40020[(8)]);
var inst_39998 = cljs.core.vec.call(null,inst_39984);
var state_40020__$1 = state_40020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40020__$1,(11),out,inst_39998);
} else {
if((state_val_40021 === (5))){
var inst_39988 = (state_40020[(9)]);
var inst_39985 = (state_40020[(7)]);
var inst_39993 = (state_40020[(11)]);
var inst_39984 = (state_40020[(8)]);
var inst_39992 = (inst_39984[inst_39985] = inst_39988);
var inst_39993__$1 = (inst_39985 + (1));
var inst_39994 = (inst_39993__$1 < n);
var state_40020__$1 = (function (){var statearr_40034 = state_40020;
(statearr_40034[(12)] = inst_39992);

(statearr_40034[(11)] = inst_39993__$1);

return statearr_40034;
})();
if(cljs.core.truth_(inst_39994)){
var statearr_40035_40064 = state_40020__$1;
(statearr_40035_40064[(1)] = (8));

} else {
var statearr_40036_40065 = state_40020__$1;
(statearr_40036_40065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (14))){
var inst_40013 = (state_40020[(2)]);
var inst_40014 = cljs.core.async.close_BANG_.call(null,out);
var state_40020__$1 = (function (){var statearr_40038 = state_40020;
(statearr_40038[(13)] = inst_40013);

return statearr_40038;
})();
var statearr_40039_40066 = state_40020__$1;
(statearr_40039_40066[(2)] = inst_40014);

(statearr_40039_40066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (10))){
var inst_40004 = (state_40020[(2)]);
var state_40020__$1 = state_40020;
var statearr_40040_40067 = state_40020__$1;
(statearr_40040_40067[(2)] = inst_40004);

(statearr_40040_40067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40021 === (8))){
var inst_39993 = (state_40020[(11)]);
var inst_39984 = (state_40020[(8)]);
var tmp40037 = inst_39984;
var inst_39984__$1 = tmp40037;
var inst_39985 = inst_39993;
var state_40020__$1 = (function (){var statearr_40041 = state_40020;
(statearr_40041[(7)] = inst_39985);

(statearr_40041[(8)] = inst_39984__$1);

return statearr_40041;
})();
var statearr_40042_40068 = state_40020__$1;
(statearr_40042_40068[(2)] = null);

(statearr_40042_40068[(1)] = (2));


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
});})(c__25115__auto___40054,out))
;
return ((function (switch__25003__auto__,c__25115__auto___40054,out){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_40046 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40046[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_40046[(1)] = (1));

return statearr_40046;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_40020){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_40020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e40047){if((e40047 instanceof Object)){
var ex__25007__auto__ = e40047;
var statearr_40048_40069 = state_40020;
(statearr_40048_40069[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40047;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40070 = state_40020;
state_40020 = G__40070;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_40020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_40020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___40054,out))
})();
var state__25117__auto__ = (function (){var statearr_40049 = f__25116__auto__.call(null);
(statearr_40049[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___40054);

return statearr_40049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___40054,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args40071 = [];
var len__22777__auto___40145 = arguments.length;
var i__22778__auto___40146 = (0);
while(true){
if((i__22778__auto___40146 < len__22777__auto___40145)){
args40071.push((arguments[i__22778__auto___40146]));

var G__40147 = (i__22778__auto___40146 + (1));
i__22778__auto___40146 = G__40147;
continue;
} else {
}
break;
}

var G__40073 = args40071.length;
switch (G__40073) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40071.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25115__auto___40149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__25115__auto___40149,out){
return (function (){
var f__25116__auto__ = (function (){var switch__25003__auto__ = ((function (c__25115__auto___40149,out){
return (function (state_40115){
var state_val_40116 = (state_40115[(1)]);
if((state_val_40116 === (7))){
var inst_40111 = (state_40115[(2)]);
var state_40115__$1 = state_40115;
var statearr_40117_40150 = state_40115__$1;
(statearr_40117_40150[(2)] = inst_40111);

(statearr_40117_40150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (1))){
var inst_40074 = [];
var inst_40075 = inst_40074;
var inst_40076 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40115__$1 = (function (){var statearr_40118 = state_40115;
(statearr_40118[(7)] = inst_40076);

(statearr_40118[(8)] = inst_40075);

return statearr_40118;
})();
var statearr_40119_40151 = state_40115__$1;
(statearr_40119_40151[(2)] = null);

(statearr_40119_40151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (4))){
var inst_40079 = (state_40115[(9)]);
var inst_40079__$1 = (state_40115[(2)]);
var inst_40080 = (inst_40079__$1 == null);
var inst_40081 = cljs.core.not.call(null,inst_40080);
var state_40115__$1 = (function (){var statearr_40120 = state_40115;
(statearr_40120[(9)] = inst_40079__$1);

return statearr_40120;
})();
if(inst_40081){
var statearr_40121_40152 = state_40115__$1;
(statearr_40121_40152[(1)] = (5));

} else {
var statearr_40122_40153 = state_40115__$1;
(statearr_40122_40153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (15))){
var inst_40105 = (state_40115[(2)]);
var state_40115__$1 = state_40115;
var statearr_40123_40154 = state_40115__$1;
(statearr_40123_40154[(2)] = inst_40105);

(statearr_40123_40154[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (13))){
var state_40115__$1 = state_40115;
var statearr_40124_40155 = state_40115__$1;
(statearr_40124_40155[(2)] = null);

(statearr_40124_40155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (6))){
var inst_40075 = (state_40115[(8)]);
var inst_40100 = inst_40075.length;
var inst_40101 = (inst_40100 > (0));
var state_40115__$1 = state_40115;
if(cljs.core.truth_(inst_40101)){
var statearr_40125_40156 = state_40115__$1;
(statearr_40125_40156[(1)] = (12));

} else {
var statearr_40126_40157 = state_40115__$1;
(statearr_40126_40157[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (3))){
var inst_40113 = (state_40115[(2)]);
var state_40115__$1 = state_40115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40115__$1,inst_40113);
} else {
if((state_val_40116 === (12))){
var inst_40075 = (state_40115[(8)]);
var inst_40103 = cljs.core.vec.call(null,inst_40075);
var state_40115__$1 = state_40115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40115__$1,(15),out,inst_40103);
} else {
if((state_val_40116 === (2))){
var state_40115__$1 = state_40115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40115__$1,(4),ch);
} else {
if((state_val_40116 === (11))){
var inst_40083 = (state_40115[(10)]);
var inst_40079 = (state_40115[(9)]);
var inst_40093 = (state_40115[(2)]);
var inst_40094 = [];
var inst_40095 = inst_40094.push(inst_40079);
var inst_40075 = inst_40094;
var inst_40076 = inst_40083;
var state_40115__$1 = (function (){var statearr_40127 = state_40115;
(statearr_40127[(7)] = inst_40076);

(statearr_40127[(8)] = inst_40075);

(statearr_40127[(11)] = inst_40093);

(statearr_40127[(12)] = inst_40095);

return statearr_40127;
})();
var statearr_40128_40158 = state_40115__$1;
(statearr_40128_40158[(2)] = null);

(statearr_40128_40158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (9))){
var inst_40075 = (state_40115[(8)]);
var inst_40091 = cljs.core.vec.call(null,inst_40075);
var state_40115__$1 = state_40115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40115__$1,(11),out,inst_40091);
} else {
if((state_val_40116 === (5))){
var inst_40076 = (state_40115[(7)]);
var inst_40083 = (state_40115[(10)]);
var inst_40079 = (state_40115[(9)]);
var inst_40083__$1 = f.call(null,inst_40079);
var inst_40084 = cljs.core._EQ_.call(null,inst_40083__$1,inst_40076);
var inst_40085 = cljs.core.keyword_identical_QMARK_.call(null,inst_40076,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40086 = (inst_40084) || (inst_40085);
var state_40115__$1 = (function (){var statearr_40129 = state_40115;
(statearr_40129[(10)] = inst_40083__$1);

return statearr_40129;
})();
if(cljs.core.truth_(inst_40086)){
var statearr_40130_40159 = state_40115__$1;
(statearr_40130_40159[(1)] = (8));

} else {
var statearr_40131_40160 = state_40115__$1;
(statearr_40131_40160[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (14))){
var inst_40108 = (state_40115[(2)]);
var inst_40109 = cljs.core.async.close_BANG_.call(null,out);
var state_40115__$1 = (function (){var statearr_40133 = state_40115;
(statearr_40133[(13)] = inst_40108);

return statearr_40133;
})();
var statearr_40134_40161 = state_40115__$1;
(statearr_40134_40161[(2)] = inst_40109);

(statearr_40134_40161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (10))){
var inst_40098 = (state_40115[(2)]);
var state_40115__$1 = state_40115;
var statearr_40135_40162 = state_40115__$1;
(statearr_40135_40162[(2)] = inst_40098);

(statearr_40135_40162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40116 === (8))){
var inst_40075 = (state_40115[(8)]);
var inst_40083 = (state_40115[(10)]);
var inst_40079 = (state_40115[(9)]);
var inst_40088 = inst_40075.push(inst_40079);
var tmp40132 = inst_40075;
var inst_40075__$1 = tmp40132;
var inst_40076 = inst_40083;
var state_40115__$1 = (function (){var statearr_40136 = state_40115;
(statearr_40136[(7)] = inst_40076);

(statearr_40136[(8)] = inst_40075__$1);

(statearr_40136[(14)] = inst_40088);

return statearr_40136;
})();
var statearr_40137_40163 = state_40115__$1;
(statearr_40137_40163[(2)] = null);

(statearr_40137_40163[(1)] = (2));


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
});})(c__25115__auto___40149,out))
;
return ((function (switch__25003__auto__,c__25115__auto___40149,out){
return (function() {
var cljs$core$async$state_machine__25004__auto__ = null;
var cljs$core$async$state_machine__25004__auto____0 = (function (){
var statearr_40141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40141[(0)] = cljs$core$async$state_machine__25004__auto__);

(statearr_40141[(1)] = (1));

return statearr_40141;
});
var cljs$core$async$state_machine__25004__auto____1 = (function (state_40115){
while(true){
var ret_value__25005__auto__ = (function (){try{while(true){
var result__25006__auto__ = switch__25003__auto__.call(null,state_40115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25006__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25006__auto__;
}
break;
}
}catch (e40142){if((e40142 instanceof Object)){
var ex__25007__auto__ = e40142;
var statearr_40143_40164 = state_40115;
(statearr_40143_40164[(5)] = ex__25007__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40165 = state_40115;
state_40115 = G__40165;
continue;
} else {
return ret_value__25005__auto__;
}
break;
}
});
cljs$core$async$state_machine__25004__auto__ = function(state_40115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25004__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25004__auto____1.call(this,state_40115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25004__auto____0;
cljs$core$async$state_machine__25004__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25004__auto____1;
return cljs$core$async$state_machine__25004__auto__;
})()
;})(switch__25003__auto__,c__25115__auto___40149,out))
})();
var state__25117__auto__ = (function (){var statearr_40144 = f__25116__auto__.call(null);
(statearr_40144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__25115__auto___40149);

return statearr_40144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25117__auto__);
});})(c__25115__auto___40149,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1474548520194
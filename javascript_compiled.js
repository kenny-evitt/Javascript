if(!lt.util.load.provided_QMARK_('lt.plugins.js.node')) {
goog.provide('lt.plugins.js.node');
goog.require('cljs.core');
goog.require('lt.util.js');
goog.require('lt.objs.plugins');
goog.require('lt.objs.files');
goog.require('lt.util.js');
goog.require('lt.objs.platform');
goog.require('lt.objs.popup');
goog.require('lt.objs.dialogs');
goog.require('lt.objs.popup');
goog.require('cljs.reader');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('clojure.string');
goog.require('lt.objs.platform');
goog.require('lt.objs.files');
goog.require('lt.objs.clients.tcp');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.objs.clients');
goog.require('lt.objs.clients.tcp');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('cljs.reader');
goog.require('lt.object');
goog.require('lt.objs.dialogs');
goog.require('lt.util.load');
goog.require('lt.objs.console');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');
goog.require('lt.objs.console');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
lt.plugins.js.node.shell = lt.util.load.node_module.call(null,"shelljs");
lt.plugins.js.node.harbor = lt.util.load.node_module.call(null,"harbor").call(null,49152,65000);
lt.plugins.js.node.ltnode_path = lt.objs.files.join.call(null,lt.objs.plugins._STAR_plugin_dir_STAR_,"node/ltnodeclient.js");
lt.plugins.js.node.node_options = null;
lt.plugins.js.node.open_port = (function open_port(id,cb){return lt.plugins.js.node.harbor.claim([cljs.core.str(id)].join(''),(function (p1__7747_SHARP_,p2__7746_SHARP_){return cb.call(null,p2__7746_SHARP_);
}));
});
lt.plugins.js.node.__BEH__on_out = (function __BEH__on_out(this$,data){var out = data.toString();return lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),clojure.string.trim.call(null,out)], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[stdout]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),(function (){var or__5885__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));if(cljs.core.truth_(or__5885__auto__))
{return or__5885__auto__;
} else
{return "node";
}
})()], null)),null);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","on-out","lt.plugins.js.node/on-out",989590807),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__on_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));
lt.plugins.js.node.__BEH__on_error = (function __BEH__on_error(this$,data){var out = data.toString();if(cljs.core.truth_(cljs.core.re_seq.call(null,/debugger listening on port/,out)))
{return null;
} else
{return lt.objs.console.verbatim.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),clojure.string.trim.call(null,out)], null)),": "),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.line","em.line",3623844076),"[stderr]"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"em.file","em.file",3623665268),(function (){var or__5885__auto__ = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))));if(cljs.core.truth_(or__5885__auto__))
{return or__5885__auto__;
} else
{return "node";
}
})()], null)),"error");
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","on-error","lt.plugins.js.node/on-error",3465320141),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__on_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));
lt.plugins.js.node.__BEH__on_exit = (function __BEH__on_exit(this$,data){if(cljs.core.truth_(new cljs.core.Keyword(null,"disconnecting","disconnecting",1140530488).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))))
{} else
{lt.objs.notifos.done_working.call(null);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"The node process exited.",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956),"The node process you were connected to suddenly quit. Check the console for more information.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",1014015509),new cljs.core.Keyword(null,"buffer","buffer",3930752946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"close"], null)], null)], null));
}
if(cljs.core.truth_(new cljs.core.Keyword(null,"restarting","restarting",3533700837).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))))
{} else
{lt.plugins.js.node.harbor.release([cljs.core.str(lt.objs.clients.__GT_id.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)))))].join(''));
lt.objs.clients.rem_BANG_.call(null,new cljs.core.Keyword(null,"client","client",3951159101).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$))));
}
lt.objs.proc.kill_all.call(null,new cljs.core.Keyword(null,"procs","procs",1120844623).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)));
return lt.object.destroy_BANG_.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","on-exit","lt.plugins.js.node/on-exit",1218537315),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__on_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));
lt.plugins.js.node.__BEH__node_start_options = (function __BEH__node_start_options(this$,options){return lt.plugins.js.node.node_options = options;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","node-start-options","lt.plugins.js.node/node-start-options",1310778815),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__node_start_options,new cljs.core.Keyword(null,"desc","desc",1016984067),"Node.js: Set `node` start options",new cljs.core.Keyword(null,"params","params",4313443576),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"options",new cljs.core.Keyword(null,"example","example",3985900764),"\"--harmony\""], null)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),null], null), null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"exclusive","exclusive",2700522000),true);
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","connecting-notifier","lt.plugins.js.node/connecting-notifier",1797953620),new cljs.core.Keyword(null,"triggers","triggers",2516997421),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.js.node","on-exit","lt.plugins.js.node/on-exit",1218537315),new cljs.core.Keyword("lt.plugins.js.node","on-error","lt.plugins.js.node/on-error",3465320141),new cljs.core.Keyword("lt.plugins.js.node","on-out","lt.plugins.js.node/on-out",989590807)], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,info){lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),info], null));
return null;
}));
/**
* Split options string into a vector of separate items
*/
lt.plugins.js.node.split_options = (function split_options(options){return clojure.string.split.call(null,options,/ +/);
});
lt.plugins.js.node.run_node = (function run_node(p__7748){var map__7750 = p__7748;var map__7750__$1 = ((cljs.core.seq_QMARK_.call(null,map__7750))?cljs.core.apply.call(null,cljs.core.hash_map,map__7750):map__7750);var info = map__7750__$1;var client = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"client","client",3951159101));var name = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"name","name",1017277949));var path = cljs.core.get.call(null,map__7750__$1,new cljs.core.Keyword(null,"path","path",1017337751));return lt.plugins.js.node.open_port.call(null,lt.objs.clients.__GT_id.call(null,client),((function (map__7750,map__7750__$1,info,client,name,path){
return (function (port){var obj = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.js.node","connecting-notifier","lt.plugins.js.node/connecting-notifier",1797953620),info);lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"port","port",1017351155),port,new cljs.core.Keyword(null,"proc","proc",1017353928),obj], null));
lt.objs.notifos.working.call(null,"Connecting..");
return lt.objs.proc.exec.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"command","command",1964298941),"node",new cljs.core.Keyword(null,"args","args",1016906831),cljs.core.conj.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("--debug="),cljs.core.str(port)].join('')], null),lt.plugins.js.node.split_options.call(null,lt.plugins.js.node.node_options)),lt.plugins.js.node.ltnode_path,path,lt.objs.clients.tcp.port,lt.objs.clients.__GT_id.call(null,client)),new cljs.core.Keyword(null,"cwd","cwd",1014003170),lt.objs.files.parent.call(null,path),new cljs.core.Keyword(null,"env","env",1014004831),new cljs.core.PersistentArrayMap(null, 1, ["NODE_PATH",lt.objs.files.join.call(null,lt.objs.files.parent.call(null,path),"node_modules")], null),new cljs.core.Keyword(null,"obj","obj",1014014057),obj], null));
});})(map__7750,map__7750__$1,info,client,name,path))
);
});
lt.plugins.js.node.check_node = (function check_node(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"node","node",1017291124),lt.plugins.js.node.shell.which("node"));
});
lt.plugins.js.node.check_client = (function check_client(obj){return cljs.core.assoc.call(null,obj,new cljs.core.Keyword(null,"node-client","node-client",4373167464),lt.objs.files.exists_QMARK_.call(null,lt.plugins.js.node.ltnode_path));
});
lt.plugins.js.node.notify = (function notify(obj){var map__7752 = obj;var map__7752__$1 = ((cljs.core.seq_QMARK_.call(null,map__7752))?cljs.core.apply.call(null,cljs.core.hash_map,map__7752):map__7752);var client = cljs.core.get.call(null,map__7752__$1,new cljs.core.Keyword(null,"client","client",3951159101));var path = cljs.core.get.call(null,map__7752__$1,new cljs.core.Keyword(null,"path","path",1017337751));var node = cljs.core.get.call(null,map__7752__$1,new cljs.core.Keyword(null,"node","node",1017291124));if((cljs.core.not.call(null,node)) || (cljs.core.empty_QMARK_.call(null,node)))
{lt.objs.clients.rem_BANG_.call(null,client);
lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"We couldn't find NodeJS.",new cljs.core.Keyword(null,"body","body",1016933652),"In order to start a NodeJS client, you have to have node installed and on your system's PATH.",new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1116631654),"Download NodeJS",new cljs.core.Keyword(null,"action","action",3885920680),((function (map__7752,map__7752__$1,client,path,node){
return (function (){return lt.objs.platform.open.call(null,"http://nodejs.org/");
});})(map__7752,map__7752__$1,client,path,node))
], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{lt.plugins.js.node.run_node.call(null,obj);
} else
{}
}
return obj;
});
lt.plugins.js.node.check_all = (function check_all(obj){return lt.plugins.js.node.notify.call(null,lt.plugins.js.node.check_client.call(null,lt.plugins.js.node.check_node.call(null,obj)));
});
lt.plugins.js.node.try_connect = (function try_connect(p__7753){var map__7755 = p__7753;var map__7755__$1 = ((cljs.core.seq_QMARK_.call(null,map__7755))?cljs.core.apply.call(null,cljs.core.hash_map,map__7755):map__7755);var info = cljs.core.get.call(null,map__7755__$1,new cljs.core.Keyword(null,"info","info",1017141280));var path = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info);var client = lt.objs.clients.client_BANG_.call(null,new cljs.core.Keyword(null,"nodejs.client","nodejs.client",3623919552));lt.object.merge_BANG_.call(null,client,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null));
lt.plugins.js.node.check_all.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",1017337751),path,new cljs.core.Keyword(null,"client","client",3951159101),client], null));
return client;
});
lt.plugins.js.node.net = require("net");
lt.plugins.js.node.cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
lt.plugins.js.node.id = cljs.core.atom.call(null,0);
lt.plugins.js.node.next_id = (function next_id(){return cljs.core.swap_BANG_.call(null,lt.plugins.js.node.id,cljs.core.inc);
});
lt.plugins.js.node.parse_message = (function parse_message(m){var string = m.toString();return cljs.core.doall.call(null,(function (){var iter__6602__auto__ = ((function (string){
return (function iter__7764(s__7765){return (new cljs.core.LazySeq(null,((function (string){
return (function (){var s__7765__$1 = s__7765;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7765__$1);if(temp__4092__auto__)
{var s__7765__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7765__$2))
{var c__6600__auto__ = cljs.core.chunk_first.call(null,s__7765__$2);var size__6601__auto__ = cljs.core.count.call(null,c__6600__auto__);var b__7767 = cljs.core.chunk_buffer.call(null,size__6601__auto__);if((function (){var i__7766 = 0;while(true){
if((i__7766 < size__6601__auto__))
{var m__$1 = cljs.core._nth.call(null,c__6600__auto__,i__7766);var start = m__$1.indexOf("{");cljs.core.chunk_append.call(null,b__7767,(((start > -1))?(function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(cljs.core.subs.call(null,m__$1,(start - 1))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}catch (e7770){if((e7770 instanceof Error))
{var e = e7770;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7770;
} else
{return null;
}
}
}})():null));
{
var G__7785 = (i__7766 + 1);
i__7766 = G__7785;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7767),iter__7764.call(null,cljs.core.chunk_rest.call(null,s__7765__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7767),null);
}
} else
{var m__$1 = cljs.core.first.call(null,s__7765__$2);var start = m__$1.indexOf("{");return cljs.core.cons.call(null,(((start > -1))?(function (){try{return cljs.core.js__GT_clj.call(null,JSON.parse(cljs.core.subs.call(null,m__$1,(start - 1))),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);
}catch (e7771){if((e7771 instanceof Error))
{var e = e7771;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7771;
} else
{return null;
}
}
}})():null),iter__7764.call(null,cljs.core.rest.call(null,s__7765__$2)));
}
} else
{return null;
}
break;
}
});})(string))
,null,null));
});})(string))
;return iter__6602__auto__.call(null,clojure.string.split.call(null,m,"Content-Length"));
})());
});
lt.plugins.js.node.do_callback = (function do_callback(msg){var temp__4092__auto__ = cljs.core.deref.call(null,lt.plugins.js.node.cbs).call(null,new cljs.core.Keyword(null,"request_seq","request_seq",2164322849).cljs$core$IFn$_invoke$arity$1(msg));if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;cb.call(null,msg);
return true;
} else
{return null;
}
});
lt.plugins.js.node.connect_to = (function connect_to(host,port,client){var socket = lt.plugins.js.node.net.connect(port,host);socket.on("connect",((function (socket){
return (function (){if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{return lt.object.raise.call(null,client,new cljs.core.Keyword("lt.plugins.js.node","connect","lt.plugins.js.node/connect",3056026749));
} else
{return null;
}
});})(socket))
);
socket.on("error",((function (socket){
return (function (){if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{return lt.object.raise.call(null,client,new cljs.core.Keyword("lt.plugins.js.node","connect-fail","lt.plugins.js.node/connect-fail",4408036694));
} else
{return null;
}
});})(socket))
);
socket.on("data",((function (socket){
return (function (p1__7772_SHARP_){if(cljs.core.truth_(cljs.core.deref.call(null,client)))
{var seq__7779 = cljs.core.seq.call(null,lt.plugins.js.node.parse_message.call(null,p1__7772_SHARP_));var chunk__7781 = null;var count__7782 = 0;var i__7783 = 0;while(true){
if((i__7783 < count__7782))
{var m = cljs.core._nth.call(null,chunk__7781,i__7783);if(cljs.core.truth_(m))
{if(cljs.core.truth_(lt.plugins.js.node.do_callback.call(null,m)))
{} else
{lt.object.raise.call(null,client,cljs.core.keyword.call(null,[cljs.core.str("debugger-"),cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(m))].join('')),m);
}
{
var G__7786 = seq__7779;
var G__7787 = chunk__7781;
var G__7788 = count__7782;
var G__7789 = (i__7783 + 1);
seq__7779 = G__7786;
chunk__7781 = G__7787;
count__7782 = G__7788;
i__7783 = G__7789;
continue;
}
} else
{{
var G__7790 = seq__7779;
var G__7791 = chunk__7781;
var G__7792 = count__7782;
var G__7793 = (i__7783 + 1);
seq__7779 = G__7790;
chunk__7781 = G__7791;
count__7782 = G__7792;
i__7783 = G__7793;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7779);if(temp__4092__auto__)
{var seq__7779__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7779__$1))
{var c__6633__auto__ = cljs.core.chunk_first.call(null,seq__7779__$1);{
var G__7794 = cljs.core.chunk_rest.call(null,seq__7779__$1);
var G__7795 = c__6633__auto__;
var G__7796 = cljs.core.count.call(null,c__6633__auto__);
var G__7797 = 0;
seq__7779 = G__7794;
chunk__7781 = G__7795;
count__7782 = G__7796;
i__7783 = G__7797;
continue;
}
} else
{var m = cljs.core.first.call(null,seq__7779__$1);if(cljs.core.truth_(m))
{if(cljs.core.truth_(lt.plugins.js.node.do_callback.call(null,m)))
{} else
{lt.object.raise.call(null,client,cljs.core.keyword.call(null,[cljs.core.str("debugger-"),cljs.core.str(new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(m))].join('')),m);
}
{
var G__7798 = cljs.core.next.call(null,seq__7779__$1);
var G__7799 = null;
var G__7800 = 0;
var G__7801 = 0;
seq__7779 = G__7798;
chunk__7781 = G__7799;
count__7782 = G__7800;
i__7783 = G__7801;
continue;
}
} else
{{
var G__7802 = cljs.core.next.call(null,seq__7779__$1);
var G__7803 = null;
var G__7804 = 0;
var G__7805 = 0;
seq__7779 = G__7802;
chunk__7781 = G__7803;
count__7782 = G__7804;
i__7783 = G__7805;
continue;
}
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});})(socket))
);
return socket;
});
lt.plugins.js.node.send = (function send(client,msg,cb){var id = lt.plugins.js.node.next_id.call(null);var c = JSON.stringify(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"seq","seq",1014018001),id,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"request","request",2109597185)], null),msg)));if(cljs.core.truth_(cb))
{cljs.core.swap_BANG_.call(null,lt.plugins.js.node.cbs,cljs.core.assoc,id,cb);
} else
{}
return new cljs.core.Keyword(null,"debugger-socket","debugger-socket",1322570257).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client)).write([cljs.core.str("Content-Length: "),cljs.core.str(cljs.core.count.call(null,c)),cljs.core.str("\r\n\r\n"),cljs.core.str(c)].join(''));
});
lt.plugins.js.node.global_eval = (function global_eval(client,code){return lt.plugins.js.node.send.call(null,client,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"evaluate","evaluate",1175691275),new cljs.core.Keyword(null,"arguments","arguments",3273354440),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expression","expression",3513419274),code,new cljs.core.Keyword(null,"global","global",4065851157),true], null)], null),null);
});
lt.plugins.js.node.grab_require = (function grab_require(client){return lt.plugins.js.node.global_eval.call(null,client,"global.require = global.process.mainModule.require; global.lttools = global.process.mainModule.exports;");
});
lt.plugins.js.node.load_tools = (function load_tools(client){return lt.plugins.js.node.global_eval.call(null,client,[cljs.core.str("global.lttools.connect('"),cljs.core.str(new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,client))),cljs.core.str("',"),cljs.core.str(lt.objs.clients.tcp.port),cljs.core.str(","),cljs.core.str(lt.objs.clients.__GT_id.call(null,client)),cljs.core.str(");")].join(''));
});
lt.plugins.js.node.init = (function init(this$){return lt.plugins.js.node.grab_require.call(null,this$);
});
lt.plugins.js.node.wrap_source = (function wrap_source(src){[cljs.core.str("(function (exports, require, module, __filename, __dirname) { "),cljs.core.str(src),cljs.core.str(" })")].join('');
return src;
});
lt.plugins.js.node.handle_message = (function handle_message(client,msg){return lt.plugins.js.node.global_eval.call(null,client,[cljs.core.str("global.lttools.handle("),cljs.core.str(JSON.stringify([new cljs.core.Keyword(null,"cb","cb",1013907409).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg),cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"data","data",1016980252).cljs$core$IFn$_invoke$arity$1(msg))])),cljs.core.str(")")].join(''));
});
lt.plugins.js.node.__BEH__send_BANG_ = (function __BEH__send_BANG_(this$,msg){if(cljs.core._EQ_.call(null,"client.close",new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg)))
{lt.object.merge_BANG_.call(null,new cljs.core.Keyword(null,"proc","proc",1017353928).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disconnecting","disconnecting",1140530488),true], null));
} else
{}
lt.plugins.js.node.handle_message.call(null,this$,msg);
if(cljs.core._EQ_.call(null,"editor.eval.js",new cljs.core.Keyword(null,"command","command",1964298941).cljs$core$IFn$_invoke$arity$1(msg)))
{return null;
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","send!","lt.plugins.js.node/send!",1609952206),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__send_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"send!","send!",1123226891),null], null), null));
lt.plugins.js.node.__BEH__refresh_scripts_BANG_ = (function __BEH__refresh_scripts_BANG_(this$,cb){return lt.plugins.js.node.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"scripts","scripts",2940419194)], null),(function (m){lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"debugger-scripts","debugger-scripts",1662870222),m);
if(cljs.core.truth_(cb))
{return cb.call(null);
} else
{return null;
}
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","refresh-scripts!","lt.plugins.js.node/refresh-scripts!",3121584356),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__refresh_scripts_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refresh-scripts!","refresh-scripts!",2031141437),null], null), null));
lt.plugins.js.node.__BEH__changelive_BANG_ = (function __BEH__changelive_BANG_(this$,info){var temp__4090__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info));if(cljs.core.truth_(temp__4090__auto__))
{var id = temp__4090__auto__;var code = lt.objs.editor.__GT_val.call(null,lt.object.by_id.call(null,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563).cljs$core$IFn$_invoke$arity$1(info)));return lt.plugins.js.node.send.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"changelive","changelive",3177668622),new cljs.core.Keyword(null,"arguments","arguments",3273354440),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"script_id","script_id",1263852673),id,new cljs.core.Keyword(null,"new_source","new_source",1755945740),lt.plugins.js.node.wrap_source.call(null,code)], null)], null));
} else
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"refresh-scripts!","refresh-scripts!",2031141437),((function (temp__4090__auto__){
return (function (){if(cljs.core.truth_(cljs.core.get.call(null,new cljs.core.Keyword(null,"scripts","scripts",2940419194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(info))))
{return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"changelive!","changelive!",3666090615),info);
} else
{return null;
}
});})(temp__4090__auto__))
);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","changelive!","lt.plugins.js.node/changelive!",1485237914),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__changelive_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"changelive!","changelive!",3666090615),null], null), null));
lt.plugins.js.node.__BEH__debugger_changelive = (function __BEH__debugger_changelive(this$,msg){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","debugger-changelive","lt.plugins.js.node/debugger-changelive",3585638367),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__debugger_changelive,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debugger-changelive","debugger-changelive",1421453626),null], null), null));
lt.plugins.js.node.__BEH__debugger_scripts = (function __BEH__debugger_scripts(this$,msg){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scripts","scripts",2940419194),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"id","id",1013907597)),new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(msg)))], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","debugger-scripts","lt.plugins.js.node/debugger-scripts",3223139859),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__debugger_scripts,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debugger-scripts","debugger-scripts",1662870222),null], null), null));
lt.plugins.js.node.__BEH__debugger_evaluate = (function __BEH__debugger_evaluate(this$,msg){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","debugger-evaluate","lt.plugins.js.node/debugger-evaluate",763500250),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__debugger_evaluate,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debugger-evaluate","debugger-evaluate",4521346103),null], null), null));
lt.plugins.js.node.__BEH__init_debugger_BANG_ = (function __BEH__init_debugger_BANG_(this$){return lt.plugins.js.node.init.call(null,this$);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","init-debugger!","lt.plugins.js.node/init-debugger!",1095797180),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__init_debugger_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-debugger!","init-debugger!",3780228885),null], null), null));
lt.plugins.js.node.__BEH__connect_success = (function __BEH__connect_success(this$){lt.objs.notifos.done_working.call(null);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"init-debugger!","init-debugger!",3780228885));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","connect-success","lt.plugins.js.node/connect-success",1275452759),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__connect_success,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.js.node","connect","lt.plugins.js.node/connect",3056026749),null], null), null));
lt.plugins.js.node.__BEH__connect_retry = (function __BEH__connect_retry(this$){return lt.util.js.wait.call(null,20,(function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"started","started",3411686387));
}));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","connect-retry","lt.plugins.js.node/connect-retry",4087259034),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__connect_retry,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.js.node","connect-fail","lt.plugins.js.node/connect-fail",4408036694),null], null), null));
lt.plugins.js.node.__BEH__start_debugger_BANG_ = (function __BEH__start_debugger_BANG_(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debugger-socket","debugger-socket",1322570257),lt.plugins.js.node.connect_to.call(null,"localhost",new cljs.core.Keyword(null,"port","port",1017351155).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,this$)),this$)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","start-debugger!","lt.plugins.js.node/start-debugger!",2533452586),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__start_debugger_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect","connect",1965255772),null], null), null));
lt.plugins.js.node.__BEH__connect_BANG_ = (function __BEH__connect_BANG_(this$,path){return lt.plugins.js.node.try_connect.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"info","info",1017141280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",1017337751),path], null)], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","connect!","lt.plugins.js.node/connect!",2554948400),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__connect_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"connect!","connect!",4735997929),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","nodejs-lang","lt.plugins.js.node/nodejs-lang",4082908615),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nodejs.lang","nodejs.lang",3077210787),null], null), null));
lt.plugins.js.node.nodejs_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.js.node","nodejs-lang","lt.plugins.js.node/nodejs-lang",4082908615));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"NodeJS",new cljs.core.Keyword(null,"desc","desc",1016984067),"Start a nodejs process by picking a .js file to run",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.dialogs.file.call(null,lt.plugins.js.node.nodejs_lang,new cljs.core.Keyword(null,"connect!","connect!",4735997929));
})], null));
lt.plugins.js.node.__BEH__kill_on_closed = (function __BEH__kill_on_closed(app){return null;
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js.node","kill-on-closed","lt.plugins.js.node/kill-on-closed",3677388804),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.node.__BEH__kill_on_closed,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"closed","closed",3951351006),null], null), null));
}
if(!lt.util.load.provided_QMARK_('lt.plugins.js')) {
goog.provide('lt.plugins.js');
goog.require('cljs.core');
goog.require('lt.util.dom');
goog.require('lt.util.cljs');
goog.require('lt.objs.plugins');
goog.require('lt.objs.sidebar.command');
goog.require('lt.util.dom');
goog.require('lt.objs.popup');
goog.require('lt.objs.popup');
goog.require('lt.objs.notifos');
goog.require('lt.objs.browser');
goog.require('lt.objs.notifos');
goog.require('clojure.string');
goog.require('lt.objs.clients.ws');
goog.require('lt.util.cljs');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.plugins');
goog.require('lt.plugins.watches');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.browser');
goog.require('lt.plugins.watches');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.clients.ws');
goog.require('lt.objs.eval');
goog.require('lt.objs.clients');
goog.require('lt.objs.sidebar.clients');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');
lt.plugins.js.util_inspect = require("util").inspect;
lt.plugins.js.acorn = require(lt.objs.plugins.local_module.call(null,"javascript","acorn")).parse;
lt.plugins.js.head = lt.util.dom.$.call(null,new cljs.core.Keyword(null,"head","head",1017102674));
lt.plugins.js.inspect = (function inspect(thing,depth){return lt.plugins.js.util_inspect.call(null,thing,false,(function (){var or__5885__auto__ = depth;if(cljs.core.truth_(or__5885__auto__))
{return or__5885__auto__;
} else
{return 5;
}
})());
});
lt.plugins.js.script = (function script(src){var e__7282__auto__ = crate.core.html.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",4401185853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),src,new cljs.core.Keyword(null,"type","type",1017479852),"text/javascript"], null)], null));var seq__7372_7424 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,cljs.core.PersistentVector.EMPTY));var chunk__7373_7425 = null;var count__7374_7426 = 0;var i__7375_7427 = 0;while(true){
if((i__7375_7427 < count__7374_7426))
{var vec__7376_7428 = cljs.core._nth.call(null,chunk__7373_7425,i__7375_7427);var ev__7283__auto___7429 = cljs.core.nth.call(null,vec__7376_7428,0,null);var func__7284__auto___7430 = cljs.core.nth.call(null,vec__7376_7428,1,null);lt.util.dom.on.call(null,e__7282__auto__,ev__7283__auto___7429,func__7284__auto___7430);
{
var G__7431 = seq__7372_7424;
var G__7432 = chunk__7373_7425;
var G__7433 = count__7374_7426;
var G__7434 = (i__7375_7427 + 1);
seq__7372_7424 = G__7431;
chunk__7373_7425 = G__7432;
count__7374_7426 = G__7433;
i__7375_7427 = G__7434;
continue;
}
} else
{var temp__4092__auto___7435 = cljs.core.seq.call(null,seq__7372_7424);if(temp__4092__auto___7435)
{var seq__7372_7436__$1 = temp__4092__auto___7435;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7372_7436__$1))
{var c__6633__auto___7437 = cljs.core.chunk_first.call(null,seq__7372_7436__$1);{
var G__7438 = cljs.core.chunk_rest.call(null,seq__7372_7436__$1);
var G__7439 = c__6633__auto___7437;
var G__7440 = cljs.core.count.call(null,c__6633__auto___7437);
var G__7441 = 0;
seq__7372_7424 = G__7438;
chunk__7373_7425 = G__7439;
count__7374_7426 = G__7440;
i__7375_7427 = G__7441;
continue;
}
} else
{var vec__7377_7442 = cljs.core.first.call(null,seq__7372_7436__$1);var ev__7283__auto___7443 = cljs.core.nth.call(null,vec__7377_7442,0,null);var func__7284__auto___7444 = cljs.core.nth.call(null,vec__7377_7442,1,null);lt.util.dom.on.call(null,e__7282__auto__,ev__7283__auto___7443,func__7284__auto___7444);
{
var G__7445 = cljs.core.next.call(null,seq__7372_7436__$1);
var G__7446 = null;
var G__7447 = 0;
var G__7448 = 0;
seq__7372_7424 = G__7445;
chunk__7373_7425 = G__7446;
count__7374_7426 = G__7447;
i__7375_7427 = G__7448;
continue;
}
}
} else
{}
}
break;
}
return e__7282__auto__;
});
lt.plugins.js.load_script = (function load_script(s){return lt.util.dom.append.call(null,lt.plugins.js.head,lt.plugins.js.script.call(null,s));
});
lt.plugins.js.parse = (function parse(code){return lt.plugins.js.acorn.call(null,code,{"ecmaVersion": 6, "locations": true});
});
lt.plugins.js.__GT_body = (function __GT_body(tree){if((1 > cljs.core.count.call(null,tree.body)))
{return tree.body;
} else
{var node = (tree.body[0]);if(cljs.core.truth_((function (){var and__5873__auto__ = cljs.core._EQ_.call(null,node.type,"ExpressionStatement");if(and__5873__auto__)
{var and__5873__auto____$1 = node.expression.callee;if(cljs.core.truth_(and__5873__auto____$1))
{return node.expression.callee.body;
} else
{return and__5873__auto____$1;
}
} else
{return and__5873__auto__;
}
})()))
{return node.expression.callee.body.body;
} else
{return tree.body;
}
}
});
lt.plugins.js.__GT_forms = (function __GT_forms(body){return cljs.core.doall.call(null,cljs.core.map.call(null,(function (f){return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"loc","loc",1014011570),f.loc,new cljs.core.Keyword(null,"type","type",1017479852),f.type], null);
}),body));
});
lt.plugins.js.by_pos = (function by_pos(locs,pos){var line = new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos);return cljs.core.first.call(null,cljs.core.filter.call(null,((function (line){
return (function (p1__7378_SHARP_){return ((new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(p1__7378_SHARP_).start.line <= line)) && ((new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(p1__7378_SHARP_).end.line >= line));
});})(line))
,locs));
});
lt.plugins.js.expression_QMARK_ = (function expression_QMARK_(p__7379){var map__7381 = p__7379;var map__7381__$1 = ((cljs.core.seq_QMARK_.call(null,map__7381))?cljs.core.apply.call(null,cljs.core.hash_map,map__7381):map__7381);var type = cljs.core.get.call(null,map__7381__$1,new cljs.core.Keyword(null,"type","type",1017479852));return cljs.core._EQ_.call(null,type,"ExpressionStatement");
});
lt.plugins.js.pos__GT_form = (function pos__GT_form(text,pos){var pos__$1 = cljs.core.update_in.call(null,pos,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086)], null),cljs.core.inc);var map__7383 = lt.plugins.js.by_pos.call(null,lt.plugins.js.__GT_forms.call(null,lt.plugins.js.__GT_body.call(null,lt.plugins.js.parse.call(null,text))),pos__$1);var map__7383__$1 = ((cljs.core.seq_QMARK_.call(null,map__7383))?cljs.core.apply.call(null,cljs.core.hash_map,map__7383):map__7383);var type = cljs.core.get.call(null,map__7383__$1,new cljs.core.Keyword(null,"type","type",1017479852));var loc = cljs.core.get.call(null,map__7383__$1,new cljs.core.Keyword(null,"loc","loc",1014011570));var start = (cljs.core.truth_(loc)?loc.start:null);var end = (cljs.core.truth_(loc)?loc.end:null);if(cljs.core.truth_(start))
{return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(start.line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),start.column], null),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",1017226086),(end.line - 1),new cljs.core.Keyword(null,"ch","ch",1013907415),end.column], null)], null);
} else
{return null;
}
});
lt.plugins.js.code__GT_forms = (function code__GT_forms(text){var forms = lt.plugins.js.__GT_forms.call(null,lt.plugins.js.__GT_body.call(null,lt.plugins.js.parse.call(null,text)));var lines = cljs.core.vec.call(null,clojure.string.split_lines.call(null,text));var iter__6602__auto__ = ((function (forms,lines){
return (function iter__7388(s__7389){return (new cljs.core.LazySeq(null,((function (forms,lines){
return (function (){var s__7389__$1 = s__7389;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__7389__$1);if(temp__4092__auto__)
{var s__7389__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__7389__$2))
{var c__6600__auto__ = cljs.core.chunk_first.call(null,s__7389__$2);var size__6601__auto__ = cljs.core.count.call(null,c__6600__auto__);var b__7391 = cljs.core.chunk_buffer.call(null,size__6601__auto__);if((function (){var i__7390 = 0;while(true){
if((i__7390 < size__6601__auto__))
{var f = cljs.core._nth.call(null,c__6600__auto__,i__7390);var loc = new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(f);var start = (loc.start.line - 1);var end = loc.end.line;cljs.core.chunk_append.call(null,b__7391,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(start - 1)], null),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(end - 1)], null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"lines","lines",1116881521),clojure.string.join.call(null,"\n",cljs.core.subvec.call(null,lines,start,end))], null));
{
var G__7449 = (i__7390 + 1);
i__7390 = G__7449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7391),iter__7388.call(null,cljs.core.chunk_rest.call(null,s__7389__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7391),null);
}
} else
{var f = cljs.core.first.call(null,s__7389__$2);var loc = new cljs.core.Keyword(null,"loc","loc",1014011570).cljs$core$IFn$_invoke$arity$1(f);var start = (loc.start.line - 1);var end = loc.end.line;return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(start - 1)], null),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(end - 1)], null),new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"lines","lines",1116881521),clojure.string.join.call(null,"\n",cljs.core.subvec.call(null,lines,start,end))], null),iter__7388.call(null,cljs.core.rest.call(null,s__7389__$2)));
}
} else
{return null;
}
break;
}
});})(forms,lines))
,null,null));
});})(forms,lines))
;return iter__6602__auto__.call(null,forms);
});
lt.plugins.js.src__GT_watch = (function src__GT_watch(meta,src){var vec__7393 = ((cljs.core._EQ_.call(null,cljs.core.last.call(null,src),";"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,src,0,(cljs.core.count.call(null,src) - 1)),";"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [src,""], null));var src__$1 = cljs.core.nth.call(null,vec__7393,0,null);var semi = cljs.core.nth.call(null,vec__7393,1,null);var opts = cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"ev","ev",1013907491),new cljs.core.Keyword(null,"editor.eval.js.watch","editor.eval.js.watch",1775886765)));var opts_str = JSON.stringify(opts);return [cljs.core.str("lttools.watch("),cljs.core.str(src__$1),cljs.core.str(", "),cljs.core.str(opts_str),cljs.core.str(")"),cljs.core.str(semi)].join('');
});
lt.plugins.js.fill_placeholders = (function fill_placeholders(src,exp,meta){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,exp,"__SELECTION*__",[cljs.core.str("'"),cljs.core.str(src),cljs.core.str("'")].join('')),"__SELECTION__",src),"__ID__",new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(meta));
});
lt.plugins.js.custom_src__GT_watch = (function custom_src__GT_watch(src,exp,meta){var hassemi = cljs.core._EQ_.call(null,cljs.core.last.call(null,src),";");var subsrc = ((hassemi)?cljs.core.butlast.call(null,src):src);var end = ((hassemi)?";":"");var sym = cljs.core.name.call(null,cljs.core.gensym.call(null,"jswatch_temp"));return [cljs.core.str("(function() {"),cljs.core.str("var "),cljs.core.str(sym),cljs.core.str(" = ("),cljs.core.str(subsrc),cljs.core.str(");"),cljs.core.str(lt.plugins.js.src__GT_watch.call(null,meta,lt.plugins.js.fill_placeholders.call(null,sym,exp,meta))),cljs.core.str(";"),cljs.core.str("return "),cljs.core.str(sym),cljs.core.str(";"),cljs.core.str("}())"),cljs.core.str(end)].join('');
});
lt.plugins.js.filter_shebang = (function filter_shebang(src){return clojure.string.replace.call(null,src,(new RegExp("^#!.*\n")),"\n");
});
lt.plugins.js.__BEH__watch_src = (function __BEH__watch_src(editor,cur,meta,src){return lt.plugins.js.src__GT_watch.call(null,meta,src);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","watch-src","lt.plugins.js/watch-src",3474750140),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__watch_src,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.src+","watch.src+",868749304),null], null), null));
lt.plugins.js.__BEH__watch_custom_src = (function __BEH__watch_custom_src(editor,cur,meta,p__7394,src){var map__7396 = p__7394;var map__7396__$1 = ((cljs.core.seq_QMARK_.call(null,map__7396))?cljs.core.apply.call(null,cljs.core.hash_map,map__7396):map__7396);var exp = cljs.core.get.call(null,map__7396__$1,new cljs.core.Keyword(null,"exp","exp",1014005135));var type = (lt.plugins.js.parse.call(null,exp).body[0]).type;if(cljs.core._EQ_.call(null,"ExpressionStatement",type))
{return lt.plugins.js.custom_src__GT_watch.call(null,src,exp,meta);
} else
{lt.objs.notifos.set_msg_BANG_.call(null,"Custom expression is not a syntactic statement",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
return lt.plugins.js.src__GT_watch.call(null,meta,src);
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","watch-custom-src","lt.plugins.js/watch-custom-src",1412109404),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__watch_custom_src,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch.custom.src+","watch.custom.src+",509336567),null], null), null));
lt.plugins.js.__BEH__on_eval = (function __BEH__on_eval(editor){var code = lt.plugins.js.filter_shebang.call(null,lt.plugins.watches.watched_range.call(null,editor,null,null,lt.plugins.js.src__GT_watch));var forms = (function (){try{return lt.plugins.js.code__GT_forms.call(null,code);
}catch (e7402){var e = e7402;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),0], null),new cljs.core.Keyword(null,"notify","notify",4269181627),true,new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(e.loc.line - 1)], null)], null)], null);
}})();if(cljs.core.map_QMARK_.call(null,forms))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),forms);
} else
{var seq__7403 = cljs.core.seq.call(null,forms);var chunk__7404 = null;var count__7405 = 0;var i__7406 = 0;while(true){
if((i__7406 < count__7405))
{var f = cljs.core._nth.call(null,chunk__7404,i__7406);lt.object.raise.call(null,lt.plugins.js.js_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,f,new cljs.core.Keyword(null,"lines","lines",1116881521)),new cljs.core.Keyword(null,"notify","notify",4269181627),true),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(f))], null));
{
var G__7450 = seq__7403;
var G__7451 = chunk__7404;
var G__7452 = count__7405;
var G__7453 = (i__7406 + 1);
seq__7403 = G__7450;
chunk__7404 = G__7451;
count__7405 = G__7452;
i__7406 = G__7453;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__7403);if(temp__4092__auto__)
{var seq__7403__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7403__$1))
{var c__6633__auto__ = cljs.core.chunk_first.call(null,seq__7403__$1);{
var G__7454 = cljs.core.chunk_rest.call(null,seq__7403__$1);
var G__7455 = c__6633__auto__;
var G__7456 = cljs.core.count.call(null,c__6633__auto__);
var G__7457 = 0;
seq__7403 = G__7454;
chunk__7404 = G__7455;
count__7405 = G__7456;
i__7406 = G__7457;
continue;
}
} else
{var f = cljs.core.first.call(null,seq__7403__$1);lt.object.raise.call(null,lt.plugins.js.js_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),cljs.core.assoc.call(null,cljs.core.deref.call(null,editor).call(null,new cljs.core.Keyword(null,"info","info",1017141280)),new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,f,new cljs.core.Keyword(null,"lines","lines",1116881521)),new cljs.core.Keyword(null,"notify","notify",4269181627),true),new cljs.core.Keyword(null,"code","code",1016963423),new cljs.core.Keyword(null,"lines","lines",1116881521).cljs$core$IFn$_invoke$arity$1(f))], null));
{
var G__7458 = cljs.core.next.call(null,seq__7403__$1);
var G__7459 = null;
var G__7460 = 0;
var G__7461 = 0;
seq__7403 = G__7458;
chunk__7404 = G__7459;
count__7405 = G__7460;
i__7406 = G__7461;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","on-eval","lt.plugins.js/on-eval",4565097176),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__on_eval,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval","eval",1017029646),null], null), null));
lt.plugins.js.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){try{var code = lt.plugins.js.filter_shebang.call(null,lt.objs.editor.__GT_val.call(null,editor));var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor),new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start"))], null),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null),new cljs.core.Keyword(null,"type","type",1017479852),"ExpressionStatement"], null)):(function (){var map__7411 = lt.plugins.js.pos__GT_form.call(null,code,pos);var map__7411__$1 = ((cljs.core.seq_QMARK_.call(null,map__7411))?cljs.core.apply.call(null,cljs.core.hash_map,map__7411):map__7411);var meta = map__7411__$1;var end = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword(null,"end","end",1014004813));var start = cljs.core.get.call(null,map__7411__$1,new cljs.core.Keyword(null,"start","start",1123661780));var form = (cljs.core.truth_(meta)?lt.plugins.watches.watched_range.call(null,editor,start,end,lt.plugins.js.src__GT_watch):null);if(cljs.core.truth_(form))
{return cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),form,new cljs.core.Keyword(null,"meta","meta",1017252215),meta);
} else
{return null;
}
})());var info__$2 = cljs.core.update_in.call(null,info__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1016963423)], null),((function (code,pos,info,info__$1){
return (function (p1__7407_SHARP_){return lt.objs.eval.pad.call(null,p1__7407_SHARP_,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(info__$1))));
});})(code,pos,info,info__$1))
);if(cljs.core.truth_(info__$2))
{return lt.object.raise.call(null,lt.plugins.js.js_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$2], null));
} else
{return null;
}
}catch (e7410){if((e7410 instanceof global.Error))
{var e = e7410;return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex","ex",1013907493),e,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notify","notify",4269181627),true,new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(e.loc.line - 1)], null)], null)], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e7410;
} else
{return null;
}
}
}});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","on-eval.one","lt.plugins.js/on-eval.one",4325196128),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));
lt.plugins.js.__BEH__js_result = (function __BEH__js_result(editor,res){lt.objs.notifos.done_working.call(null);
var loc = new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res));var loc__$1 = cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res))));if(lt.plugins.js.expression_QMARK_.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)))
{var str_result = (cljs.core.truth_(new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498).cljs$core$IFn$_invoke$arity$1(res))?(cljs.core.truth_(new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res))?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res):"undefined"):lt.plugins.js.inspect.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),null));return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),str_result,loc__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," = "], null));
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),"\u2713",loc__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"prefix","prefix",4328760836)," "], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","js-result","lt.plugins.js/js-result",2328504445),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__js_result,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.result","editor.eval.js.result",3021062051),null], null), null));
lt.plugins.js.__BEH__js_watch = (function __BEH__js_watch(editor,res){var temp__4092__auto__ = cljs.core.get.call(null,new cljs.core.Keyword(null,"watches","watches",2139868463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)));if(cljs.core.truth_(temp__4092__auto__))
{var watch = temp__4092__auto__;var str_result = (cljs.core.truth_(new cljs.core.Keyword(null,"no-inspect","no-inspect",887813498).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(res)))?new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res):lt.plugins.js.inspect.call(null,new cljs.core.Keyword(null,"result","result",4374444943).cljs$core$IFn$_invoke$arity$1(res),0));return lt.object.raise.call(null,new cljs.core.Keyword(null,"inline-result","inline-result",656479555).cljs$core$IFn$_invoke$arity$1(watch),new cljs.core.Keyword(null,"update!","update!",779473898),str_result);
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","js-watch","lt.plugins.js/js-watch",2217119319),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__js_watch,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.watch","editor.eval.js.watch",1775886765),null], null), null));
lt.plugins.js.__BEH__js_exception = (function __BEH__js_exception(editor,ex){lt.objs.notifos.done_working.call(null);
var stack = (cljs.core.truth_(new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex).stack)?new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex).stack:new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex));var loc = new cljs.core.Keyword(null,"end","end",1014004813).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex));var loc__$1 = (cljs.core.truth_(loc)?cljs.core.assoc.call(null,loc,new cljs.core.Keyword(null,"start-line","start-line",3689311729),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",1123661780).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex)))):null);if(cljs.core.truth_(loc__$1))
{if(cljs.core.truth_(new cljs.core.Keyword(null,"notify","notify",4269181627).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(ex))))
{lt.objs.notifos.set_msg_BANG_.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{}
return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),stack,loc__$1);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"ex","ex",1013907493).cljs$core$IFn$_invoke$arity$1(ex)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","js-exception","lt.plugins.js/js-exception",1116340183),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__js_exception,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.exception","editor.eval.js.exception",723801901),null], null), null));
lt.plugins.js.__BEH__js_success = (function __BEH__js_success(editor){lt.objs.notifos.done_working.call(null);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Eval success: "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor))))].join(''));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","js-success","lt.plugins.js/js-success",4258765603),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__js_success,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.js.file.success","editor.eval.js.file.success",4272529943),null], null), null));
lt.plugins.js.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__7413 = event;var map__7413__$1 = ((cljs.core.seq_QMARK_.call(null,map__7413))?cljs.core.apply.call(null,cljs.core.hash_map,map__7413):map__7413);var origin = cljs.core.get.call(null,map__7413__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__7413__$1,new cljs.core.Keyword(null,"info","info",1017141280));lt.objs.notifos.working.call(null,"");
return lt.objs.clients.send.call(null,lt.objs.eval.get_client_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),new cljs.core.Keyword(null,"origin","origin",4300251800),origin,new cljs.core.Keyword(null,"info","info",1017141280),info], null)),new cljs.core.Keyword(null,"editor.eval.js","editor.eval.js",1847417804),cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"ed-id","ed-id",1110205563),lt.object.__GT_id.call(null,origin)),new cljs.core.Keyword(null,"only","only",1017320222),origin);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","eval!","lt.plugins.js/eval!",1817130649),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.js.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.js","js-lang","lt.plugins.js/js-lang",4560719792),new cljs.core.Keyword(null,"tags","tags",1017456523),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.plugins.js","eval!","lt.plugins.js/eval!",1817130649)], null),new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));
lt.plugins.js.js_lang = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.js","js-lang","lt.plugins.js/js-lang",4560719792));
lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"connect-to-browser","connect-to-browser",4493902347),new cljs.core.Keyword(null,"desc","desc",1016984067),"Connect: Browser (Script-tag)",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){return lt.objs.popup.popup_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"header","header",4087600639),"Connect to a browser",new cljs.core.Keyword(null,"body","body",1016933652),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",1013904354),"To connect just include the following script tag in the head of your web page:",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1016963423),"<script type='text/javascript' id='lt_ws' src='http://localhost:",lt.objs.clients.ws.port,"/socket.io/lighttable/ws.js'></script>"], null)], null),new cljs.core.Keyword(null,"buttons","buttons",1255256819),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),"ok"], null)], null)], null));
})], null));
lt.objs.sidebar.clients.add_connector.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),"Browser (External)",new cljs.core.Keyword(null,"desc","desc",1016984067),"Connect to an external browser via script tag to eval JavaScript, CSS, and HTML live.",new cljs.core.Keyword(null,"connect","connect",1965255772),(function (){return lt.objs.sidebar.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"connect-to-browser","connect-to-browser",4493902347));
})], null));
lt.objs.browser.add_util.call(null,new cljs.core.Keyword(null,"watch","watch",1126807617),(function (exp,meta){var temp__4092__auto___7462 = lt.object.by_id.call(null,meta.obj);if(cljs.core.truth_(temp__4092__auto___7462))
{var obj_7463 = temp__4092__auto___7462;lt.object.raise.call(null,obj_7463,cljs.core.keyword.call(null,meta.ev),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"result","result",4374444943),exp,new cljs.core.Keyword(null,"meta","meta",1017252215),lt.util.cljs.js__GT_clj.call(null,meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true)], null));
} else
{}
return exp;
}));
lt.objs.browser.add_util.call(null,new cljs.core.Keyword(null,"raise","raise",1122179934),(function (id,ev,data){var temp__4092__auto__ = lt.object.by_id.call(null,id);if(cljs.core.truth_(temp__4092__auto__))
{var obj = temp__4092__auto__;return lt.object.raise.call(null,obj,ev,data);
} else
{return null;
}
}));
}

//# sourceMappingURL=javascript_compiled.js.map
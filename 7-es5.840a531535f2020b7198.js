function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{YXEz:function(n,t,e){"use strict";e.r(t);var o=e("ofXK"),i=e("sbAP"),r=e("tyNb"),c=e("fXoL");function s(n,t){if(1&n&&(c.Ib(0,"div"),c.Xb(1,"\n  "),c.Ib(2,"a",1),c.Xb(3),c.Hb(),c.Xb(4,"\n"),c.Hb()),2&n){var e=t.$implicit;c.wb(2),c.Sb("routerLink",e.route),c.wb(1),c.Yb(e.route)}}var a,b,l,u=((a=function(){function n(t,e,o){_classCallCheck(this,n),this.router=t,this.route=e,this.scully=o,this.newsPosts=[]}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.scully.available$.subscribe((function(t){console.log("available links",t),n.newsPosts=t.filter((function(n){return"news"===n.contentType}))}))}}]),n}()).\u0275fac=function(n){return new(n||a)(c.Fb(r.d),c.Fb(r.a),c.Fb(i.c))},a.\u0275cmp=c.zb({type:a,selectors:[["app-news-page"]],decls:5,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(n,t){1&n&&(c.Ib(0,"h1"),c.Xb(1,"News Page"),c.Hb(),c.Xb(2,"\n"),c.Wb(3,s,5,2,"div",0),c.Xb(4,"\n")),2&n&&(c.wb(3),c.Sb("ngForOf",t.newsPosts))},directives:[o.h,r.e],styles:["[_ngcontent-%COMP%]::slotted(h1){color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}"]}),a),f=[{path:"",component:u},{path:":slug",component:(b=function(){function n(t,e){_classCallCheck(this,n),this.router=t,this.route=e}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}(),b.\u0275fac=function(n){return new(n||b)(c.Fb(r.d),c.Fb(r.a))},b.\u0275cmp=c.zb({type:b,selectors:[["app-news-post"]],decls:13,vars:0,template:function(n,t){1&n&&(c.Ib(0,"h3"),c.Xb(1,"ScullyIo News Post content"),c.Hb(),c.Xb(2,"\n"),c.Gb(3,"hr"),c.Xb(4,"\n\n"),c.Xb(5,"\n"),c.Gb(6,"scully-content"),c.Xb(7,"\n"),c.Gb(8,"hr"),c.Xb(9,"\n"),c.Ib(10,"h4"),c.Xb(11,"End of content"),c.Hb(),c.Xb(12,"\n"))},directives:[i.a],styles:["[_ngcontent-%COMP%]::slotted(h1){color:#330625;background-color:#f8d3ec;padding:5px;border-radius:5px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}"]}),b)},{path:"**",component:u}],p=((l=function n(){_classCallCheck(this,n)}).\u0275mod=c.Db({type:l}),l.\u0275inj=c.Cb({factory:function(n){return new(n||l)},imports:[[r.f.forChild(f)],r.f]}),l);e.d(t,"NewsModule",(function(){return h}));var d,h=((d=function n(){_classCallCheck(this,n)}).\u0275mod=c.Db({type:d}),d.\u0275inj=c.Cb({factory:function(n){return new(n||d)},imports:[[o.b,p,i.b]]}),d)}}]);
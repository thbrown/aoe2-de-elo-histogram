(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RNiq:function(t,e,o){"use strict";o.r(e),o.d(e,"__N_SSG",(function(){return y})),o.d(e,"default",(function(){return m}));o("o0o1");function n(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?function(t){return i(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":i(t)})(t)}function f(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?r(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var c=o("q1tI"),p=o.n(c).a.createElement;function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var m=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(m,t);var e,o,i,a,c=(e=m,function(){var t,o=l(e);if(u()){var n=l(this).constructor;t=Reflect.construct(o,arguments,n)}else t=o.apply(this,arguments);return f(this,t)});function m(){var t,e,o,n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m);for(var i=arguments.length,a=new Array(i),f=0;f<i;f++)a[f]=arguments[f];return t=c.call.apply(c,[this].concat(a)),e=r(t),n={},(o="state")in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,t}return o=m,(i=[{key:"componentDidMount",value:function(){for(var t=this.props.histogram,e=this.props.timestamp?this.props.timestamp:0,o=this.props.xmin,n=this.props.xmax,r="Roboto, Arial, sans-serif",i=[],a=0;a<t.length;a++)i[a]=t[a][1];var f={title:{text:"Age of Empires II: Definitive Edition Ratings<br>1v1 Random Map",font:{family:r,size:24},xref:"paper",x:.05},xaxis:{title:{text:"Rating",font:{family:r,size:18,color:"#7f7f7f"}},range:[o,n]},yaxis:{title:{text:"Number of Players",font:{family:r,size:18,color:"#7f7f7f"}}}},l=[{x:i,type:"histogram"}];Plotly.newPlot("random_map_histogram",l,f);var s=[];for(a=0;a<t.length;a++)s[a]=t[a][2];f={title:{text:"Age of Empires II: Definitive Edition Ratings<br>Team Random Map",font:{family:r,size:24},xref:"paper",x:.05},xaxis:{title:{text:"Rating",font:{family:r,size:18,color:"#7f7f7f"}},range:[o,n]},yaxis:{title:{text:"Number of Players",font:{family:r,size:18,color:"#7f7f7f"}}}},l=[{x:s,type:"histogram"}],Plotly.newPlot("team_random_map_histogram",l,f),l=[{x:i,y:s,mode:"markers",type:"scatter",textposition:"top center",textfont:{family:r},marker:{size:2}}],f={legend:{y:.5,yref:"paper",font:{family:r,size:20,color:"grey"}},title:{text:"Age of Empires II: Definitive Edition Ratings<br> 1v1 Random Map vs Team Random Map Ratings",font:{family:r,size:24},xref:"paper",x:.05},xaxis:{title:{text:"1v1 Random Map Rating",font:{family:r,size:18,color:"#7f7f7f"}},range:[o,n]},yaxis:{title:{text:"Team Random Map Rating",font:{family:r,size:18,color:"#7f7f7f"}}}},Plotly.newPlot("combo_scatterplot",l,f),document.getElementById("last_updated").textContent="Updated at ".concat(new Date(e))}},{key:"render",value:function(){return p("html",null,p("head",null,p("script",{type:"text/javascript",src:"https://cdn.plot.ly/plotly-latest.min.js"})),p("body",null,p("div",{id:"random_map_histogram",style:{width:"900px",height:"500px"}}),p("div",{id:"team_random_map_histogram",style:{width:"900px",height:"500px"}}),p("div",{id:"combo_scatterplot",style:{width:"900px",height:"500px"}}),p("div",{id:"last_updated"}),p("div",{id:"github_footer"},"Source code on"," ",p("a",{href:"https://github.com/thbrown/aoe2-de-elo-histogram"},"github"),p("br",null),"Data taken from"," ",p("a",{href:"https://aoe2.net/#api"},"https://aoe2.net/#api"))))}}])&&n(o.prototype,i),a&&n(o,a),m}(c.Component),y=!0},vlRD:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o("RNiq")}])}},[["vlRD",0,2,1]]]);
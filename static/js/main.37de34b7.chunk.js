(this.webpackJsonpmovie_top20=this.webpackJsonpmovie_top20||[]).push([[0],{25:function(e,t,a){e.exports=a(53)},30:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),s=a.n(o),i=(a(30),a(11)),c=a.n(i),l=a(22),m=a(7),u=a(8),p=a(10),h=a(9),d=a(23),v=a.n(d),g=a(54),f=a(55),E=a(56),y=a(57),b=a(58),w=a(59),j=function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,{style:{height:800}},r.a.createElement(f.a,{top:!0,width:"100%",src:this.props.poster,alt:this.props.title}),r.a.createElement(E.a,null,r.a.createElement(y.a,{style:{fontSize:17,fontWeight:"bold"}},this.props.title),r.a.createElement(b.a,{style:{fontSize:15}},"Genre : ",this.props.genres[0]," "),r.a.createElement(b.a,{style:{fontSize:15}},"Rating : ",this.props.rating,"/10"),r.a.createElement("br",null),r.a.createElement(w.a,{style:{fontSize:14}},this.props.summary.slice(0,180),"..."))))}}]),a}(n.Component),k=a(60),O=a(61),S=(a(51),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){return r.a.createElement("section",{className:"Container"},r.a.createElement(k.a,{sm:"5"},r.a.createElement(O.a,{sm:"4"}),r.a.createElement(O.a,{sm:"7",style:{fontSize:25,fontWeight:"bolder"}},'The Most Popular Movies at the website named "YTS"')),r.a.createElement(k.a,null,this.state.isLoading?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader-text"}," Loading... ")):this.state.movies.map((function(e){return r.a.createElement(O.a,{sm:"3"},r.a.createElement(j,{key:e.id,title:e.title,summary:e.summary,rating:e.rating,poster:e.medium_cover_image,genres:e.genres}))}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.37de34b7.chunk.js.map
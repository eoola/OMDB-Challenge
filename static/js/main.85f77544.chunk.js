(this.webpackJsonpmoviesearchapp=this.webpackJsonpmoviesearchapp||[]).push([[0],{51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),i=a(15),r=a.n(i),o=(a(51),a(12)),c=a(9),l=a(6),h=a(14),u=a(13),d=(a.p,a(52),a(53),a(2)),p=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(d.jsx)("header",{children:this.props.title})}}]),a}(n.a.Component),j=(a(4),a(96)),b=a(88),g=a(87),f=a(89),m=a(91),O=a(92),v=a(90),x=a(95),y=(a(55),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={expanded:!1},s.handleExpandClick=s.handleExpandClick.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"handleExpandClick",value:function(){this.setState({expanded:!this.state.expanded})}},{key:"render",value:function(){return Object(d.jsxs)(j.a,{className:"Movie",children:[Object(d.jsx)(g.a,{title:this.props.movie.title,subheader:this.props.movie.year}),Object(d.jsx)(b.a,{className:"Media",image:this.props.movie.img,title:this.props.movie.title}),Object(d.jsx)(f.a,{children:Object(d.jsxs)("h5",{children:["IMDB Rating: ",this.props.movie.imdbRating]})}),Object(d.jsx)(v.a,{disableSpacing:!0,children:Object(d.jsx)(m.a,{onClick:this.handleExpandClick,"aria-expanded":this.state.expanded,className:"IconButton","aria-label":"show more",children:Object(d.jsx)(O.a,{className:this.state.expanded?"ExpandOpen":"Expand"})})}),Object(d.jsx)(x.a,{in:this.state.expanded,timeout:"auto",unmountOnExit:!0,children:Object(d.jsxs)(f.a,{className:"CollapseContent",children:[Object(d.jsxs)("h5",{children:["Released: ",this.props.movie.releaseDate]}),Object(d.jsxs)("h5",{children:["Runtime: ",this.props.movie.runtime,"utes"]}),Object(d.jsxs)("h5",{children:["Director: ",this.props.movie.director]}),Object(d.jsx)("h5",{children:this.props.movie.plot}),Object(d.jsx)("h5",{})]})})]})}}]),a}(n.a.Component)),F=(a(60),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={currentPage:1},s}return Object(c.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:"MovieList",children:[this.props.movies.map((function(e){return Object(d.jsx)(y,{movie:e},e.id)}))," "]})})}}]),a}(n.a.Component)),S=(a(61),a(93)),Y=a(97),k=new Date,R=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),s=t.call(this,e),console.log(s.props.yearRange),s.state={term:"",fromYear:1900,toYear:1900,filter:!1,disableFromFilter:!0,disableToFilter:!0},s.handleSearch=s.handleSearch.bind(Object(l.a)(s)),s.handleTermChange=s.handleTermChange.bind(Object(l.a)(s)),s.generateFromYears=s.generateFromYears.bind(Object(l.a)(s)),s.handleFromYear=s.handleFromYear.bind(Object(l.a)(s)),s.handleToYear=s.handleToYear.bind(Object(l.a)(s)),s.handleFilterClick=s.handleFilterClick.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleSearch",value:function(e){this.props.searchOMDB(this.state.term,1),this.setState({filter:!1}),this.props.setFilter(!1)}},{key:"handleFromYear",value:function(e){this.setState({fromYear:e.target.value}),this.setState({filter:!0}),this.setState({disableFromFilter:!1}),!this.state.disableToFilter&&this.state.toYear>e.target.value&&this.props.setFilter(!0,e.target.value,this.state.toYear)}},{key:"handleToYear",value:function(e){this.setState({toYear:e.target.value}),this.setState({filter:!0}),this.setState({disableToFilter:!1}),!this.state.disableFromFilter&&e.target.value>this.state.fromYear&&this.state.filter&&this.props.setFilter(!0,this.state.fromYear,e.target.value)}},{key:"generateFromYears",value:function(){for(var e=[],t=1888;t<=k.getFullYear();t++)e.push(t);return e}},{key:"generateToYears",value:function(e){for(var t=[],a=1888;a<=k.getFullYear();a++)t.push(a);return t}},{key:"handleFilterClick",value:function(){console.log(this.state.fromYear+" "+this.state.toYear);var e=!this.state.filter;this.props.setYearRange(this.state.fromYear,this.state.toYear),this.setState({filter:e}),this.props.setFilter(e,this.state.fromYear,this.state.toYear)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Search",children:[Object(d.jsxs)("form",{action:"javascript:void(0);",onSubmit:this.handleSearch,children:[Object(d.jsx)("input",{placeholder:"Enter name of movie...",onChange:this.handleTermChange}),Object(d.jsx)("button",{children:"Search"})]}),Object(d.jsx)("select",{defaultValue:k.getFullYear(),onChange:this.handleFromYear,children:this.generateFromYears().map((function(e){return Object(d.jsx)("option",{children:e})}))}),Object(d.jsx)("select",{defaultValue:k.getFullYear(),onChange:this.handleToYear,children:this.generateToYears().map((function(e){return Object(d.jsx)("option",{children:e})}))}),Object(d.jsx)(S.a,{control:Object(d.jsx)(Y.a,{disabled:this.state.disableFromFilter||this.state.disableToFilter||this.state.toYear<this.state.fromYear,checked:this.state.filter&&!this.state.disableFromFilter&&!this.state.disableToFilter,onChange:this.handleFilterClick,name:"filter",color:"secondary"}),label:"Filter"})]})}}]),a}(n.a.Component),C=(a(62),function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("footer",{children:[this.props.title," ",this.props.children]})}}]),a}(n.a.Component)),M=a(94),D=a(25),T=a.n(D),w=a(32),L={search:function(e,t){var a=this;return Object(w.a)(T.a.mark((function s(){var n,i;return T.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return"spider man",n="http://www.omdbapi.com/?apikey=e4906035&s=".concat(e,"&type=movie&page=").concat(t),s.next=4,fetch(n);case 4:return i=s.sent,s.next=7,i.json();case 7:if(!(i=s.sent).Search){s.next=14;break}return s.next=11,Promise.all(i.Search.map(function(){var e=Object(w.a)(T.a.mark((function e(t){var s;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.getExtraInfo(t.imdbID);case 2:return s=e.sent,e.abrupt("return",Object.assign({id:t.imdbID,title:t.Title,year:t.Year,img:"N/A"===t.Poster?"https://www.escapeauthority.com/wp-content/uploads/2116/11/No-image-found.jpg":t.Poster},s));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:return s.t0=s.sent,s.t1=i.totalResults,s.abrupt("return",{movies:s.t0,totalResults:s.t1});case 14:case"end":return s.stop()}}),s)})))()},getExtraInfo:function(e){var t="https://www.omdbapi.com/?apikey=e4906035&i=".concat(e,"&type=movie&plot='short'");return fetch(t).then((function(e){return e.json()})).then((function(e){var t=e;if(t.Genre)return console.log(t.imdbRating),console.log(t.releaseDate),{imdbRating:t.imdbRating,releaseDate:t.Released,runtime:t.Runtime,genre:t.Genre,director:"N/A"===t.Director?"No Directors found":t.Director,plot:"N/A"===t.Plot?"Plot not found":t.Plot}}))}},P=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={noResultsFound:!1,loading:!1,movies:[],page:1,pageOffset:1,searchTerm:"",totalResults:0,resultsPerPage:10,yearRange:[],filter:!1,filteredMovies:[]},s.searchOMDB=s.searchOMDB.bind(Object(l.a)(s)),s.handlePageChange=s.handlePageChange.bind(Object(l.a)(s)),s.setFilter=s.setFilter.bind(Object(l.a)(s)),s.setYearRange=s.setYearRange.bind(Object(l.a)(s)),s.generateMoreMovies=s.generateMoreMovies.bind(Object(l.a)(s)),s.pageLoading=s.pageLoading.bind(Object(l.a)(s)),s.pageDoneLoading=s.pageDoneLoading.bind(Object(l.a)(s)),s}return Object(c.a)(a,[{key:"searchOMDB",value:function(e){var t=this;this.pageLoading(),L.search(e,1).then((function(a){t.setState({page:1}),t.setState({movies:a.movies}),t.setState({searchTerm:e}),t.setState({totalResults:a.totalResults}),t.setState({pageOffset:1}),t.pageDoneLoading()})).catch((function(a){t.setState({noResultsFound:!0}),t.setState({page:1}),t.setState({movies:[]}),t.setState({searchTerm:e}),t.setState({totalResults:0}),t.setState({pageOffset:1}),t.pageDoneLoading()}))}},{key:"pageLoading",value:function(){this.setState({loading:!0})}},{key:"pageDoneLoading",value:function(){this.setState({loading:!1})}},{key:"handlePageChange",value:function(e,t){var a=this;this.pageLoading(),this.setState({page:t}),L.search(this.state.searchTerm,t).then((function(e){a.setState({movies:e.movies}),a.pageDoneLoading()})),document.documentElement.scrollTop=0}},{key:"setFilter",value:function(e,t,a){if(this.setState({filter:e}),e){var s=this.state.movies;this.setState({filteredMovies:s.filter((function(e){return e.year>=t&&e.year<=a}))})}}},{key:"setYearRange",value:function(e,t){this.setState({yearRange:[e,t]}),console.log("year range set")}},{key:"generateMoreMovies",value:function(){var e=this;this.pageLoading();var t=this.state.filteredMovies;L.search(this.state.searchTerm,this.state.page+this.state.pageOffset).then((function(a){console.log(a);var s=a.movies;Array.prototype.push.apply(t,s.filter((function(t){return t.year>=e.state.yearRange[0]&&t.year<=e.state.yearRange[1]}))),e.setState({filteredMovies:t}),e.pageDoneLoading()})).catch((function(t){e.pageDoneLoading(),document.getElementById("Button").disabled=!0}));var a=this.state.pageOffset;this.setState({pageOffset:a+1})}},{key:"render",value:function(){return this.state.filter?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{title:"Movie Search App"}),Object(d.jsx)(R,{setYearRange:this.setYearRange,setFilter:this.setFilter,searchOMDB:this.searchOMDB}),Object(d.jsx)(F,{movies:this.state.filteredMovies}),this.state.loading?Object(d.jsx)("h1",{children:"Loading Results..."}):Object(d.jsx)("h1",{}),Object(d.jsx)("button",{id:"Button",onClick:this.generateMoreMovies,children:"Show More"}),Object(d.jsx)(C,{title:"Made By Demi",children:Object(d.jsx)("a",{href:"https://github.com/eoola",children:"Github"})})]}):Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(p,{title:"Movie Search App"}),Object(d.jsx)(R,{setYearRange:this.setYearRange,setFilter:this.setFilter,yearRange:this.state.yearRange,searchOMDB:this.searchOMDB}),this.state.loading?Object(d.jsx)("h1",{children:"Loading Results..."}):Object(d.jsx)("h1",{}),this.state.noResultsFound?Object(d.jsx)("h1",{children:"No results found"}):Object(d.jsx)("h1",{}),Object(d.jsx)(F,{movies:this.state.movies}),Object(d.jsx)(M.a,{page:this.state.page,className:"Pagination",count:Math.ceil(this.state.totalResults/this.state.resultsPerPage),onChange:this.handlePageChange}),Object(d.jsx)(C,{title:"Made By Demi",children:Object(d.jsx)("a",{href:"https://github.com/eoola",children:"Github"})})]})}}]),a}(n.a.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,98)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),i(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(P,{})}),document.getElementById("root")),B()}},[[64,1,2]]]);
//# sourceMappingURL=main.85f77544.chunk.js.map
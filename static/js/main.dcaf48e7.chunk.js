(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,t,a){e.exports=a.p+"static/media/outlook.a1293d2c.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/apple.7f36828d.svg"},function(e,t,a){e.exports=a.p+"static/media/google.686f8efa.svg"},function(e,t,a){e.exports=a.p+"static/media/yahoo.d7fcfd93.svg"},,,,,,function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=(a(21),a(6)),s=a(1),i=(a(22),a(23),a(7)),m=a.n(i),d=a(8),u=a.n(d),p=a(3),h=a.n(p),E=a(9),f=a.n(E),g=function(e){var t=e.event,a=Object(n.useRef)(null),c=Object(n.useState)(!1),r=Object(s.a)(c,2),o=r[0],i=r[1],d=Object(n.useState)(0),p=Object(s.a)(d,2),E=p[0],g=p[1],v=function(e){return e.toISOString().replace(/-|:|\.\d+/g,"")},N=function(e){var t=["BEGIN:VCALENDAR","VERSION:2.0","BEGIN:VEVENT","DTSTART:"+v(e.start),"DTEND:"+v(e.end),"SUMMARY:"+e.title,"DESCRIPTION:"+e.description,"LOCATION:"+e.location,"END:VEVENT","END:VCALENDAR"].join("\n");return encodeURI("data:text/calendar;charset=utf8,"+t)};return l.a.createElement("article",{"data-share-event":"share-event"},l.a.createElement("button",{onClick:function(){i(!o),g(o?0:215)},"data-share-event":"btn-toggle"},"Share Event"),l.a.createElement("ul",{"data-share-event":"options",ref:a,"aria-expanded":o,style:{height:E}},l.a.createElement("a",{href:function(e){return"https://www.google.com/calendar/event?action=TEMPLATE&text=".concat(encodeURI(e.title),"&dates=").concat(v(e.start),"/").concat(v(e.end),"&details=").concat(encodeURI(e.description),"&location=").concat(encodeURI(e.location))}(t),rel:"noopener noreferrer",target:"_blank"},l.a.createElement("li",null,l.a.createElement("img",{src:u.a,alt:"Google logo",className:"calendar-logo"}),"Google")),l.a.createElement("a",{href:N(t)},l.a.createElement("li",null,l.a.createElement("img",{src:h.a,alt:"Outlook logo",className:"calendar-logo"}),"Outlook")),l.a.createElement("a",{href:function(e){return"https://outlook.live.com/owa/?path=%2fcalendar%2faction%2fcompose#startdt=".concat(v(e.start),"&enddt=").concat(v(e.end),"&subject=").concat(encodeURI(e.title),"&location=").concat(encodeURI(e.location),"&body=").concat(encodeURI(e.description))}(t),rel:"noopener noreferrer",target:"_blank"},l.a.createElement("li",null,l.a.createElement("img",{src:h.a,alt:"Outlook logo",className:"calendar-logo"}),"Outlook Online")),l.a.createElement("a",{href:N(t)},l.a.createElement("li",null,l.a.createElement("img",{src:m.a,alt:"Apple logo",className:"calendar-logo"}),"iCalendar")),l.a.createElement("a",{href:function(e){var t=function(e){var t=Math.floor(e/6e4%60),a=Math.floor(e/36e5%24);return(a=a<10?"0"+a:a)+""+(t=t<10?"0"+t:t)}(e.end-e.start);return"https://calendar.yahoo.com/?v=60&view=d&type=20&title=".concat(encodeURI(e.title),"&st=").concat(v(e.start),"&dur=").concat(t,"&desc=").concat(encodeURI(e.description),"&in_loc=").concat(encodeURI(e.location))}(t),rel:"noopener noreferrer",target:"_blank"},l.a.createElement("li",null,l.a.createElement("img",{src:f.a,alt:"Yahoo logo",className:"calendar-logo"}),"Yahoo"))))},v=a(2),N=a(10),b=a(11),w=a(13),O=a(12),C=a(14),k=(a(24),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("input",{type:"text",id:e.inputField,placeholder:e.placeholder,onChange:function(t){e.onChange(t)},value:"".concat(e.value),style:{width:0===e.value.length?e.placeholder.length+"ch":e.value.length+"ch",maxWidth:210},autoComplete:"off"}))}),R=function(e){function t(){var e,a;Object(N.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(w.a)(this,(e=Object(O.a)(t)).call.apply(e,[this].concat(l)))).state={title:"",description:"",start:"",end:"",location:""},a.handleChange=function(e){var t=e.target.id;a.setState(Object(v.a)({},t,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t={title:a.state.title.trim(),description:a.state.description.trim(),start:new Date(a.state.start.trim()),end:new Date(a.state.end.trim()),location:a.state.location.trim()};a.props.onSubmit(t)},a}return Object(C.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("section",{className:"EventForm"},l.a.createElement("form",null,l.a.createElement("span",null,l.a.createElement("span",{className:"red-span"},"var")," ",l.a.createElement("span",{className:"blue-span"},"event")," ",l.a.createElement("span",{className:"red-span"},"=")," ","{"),l.a.createElement("div",{className:"label-input"},l.a.createElement("label",{htmlFor:"title"},l.a.createElement("span",{className:"key"},"title:")," "),'"',l.a.createElement(k,{inputField:"title",placeholder:"Test event",onChange:function(t){return e.handleChange(t)},value:"".concat(this.state.title)}),'"',l.a.createElement("span",{className:"white"},",")),l.a.createElement("div",{className:"label-input"},l.a.createElement("label",{htmlFor:"description"},l.a.createElement("span",{className:"key"},"description:"))," ",'"',l.a.createElement(k,{inputField:"description",placeholder:"This is a random test event",onChange:function(t){return e.handleChange(t)},value:this.state.description}),'"',l.a.createElement("span",{className:"white"},",")),l.a.createElement("div",{className:"label-input"},l.a.createElement("label",{htmlFor:"start"},l.a.createElement("span",{className:"key"},"start:")," ",l.a.createElement("span",{className:"red-span"},"new")," ",l.a.createElement("span",{className:"date-span"},"Date"),"('"),l.a.createElement(k,{inputField:"start",placeholder:"March 9, 2020 15:00",onChange:function(t){return e.handleChange(t)},value:this.state.start}),"')",l.a.createElement("span",{className:"white"},",")),l.a.createElement("div",{className:"label-input"},l.a.createElement("label",{htmlFor:"end"},l.a.createElement("span",{className:"key"},"end:")," ",l.a.createElement("span",{className:"red-span"},"new")," ",l.a.createElement("span",{className:"date-span"},"Date"),"('"),l.a.createElement(k,{inputField:"end",placeholder:"March 9, 2020 17:00",onChange:function(t){return e.handleChange(t)},value:this.state.end}),"')",l.a.createElement("span",{className:"white"},",")),l.a.createElement("div",{className:"label-input"},l.a.createElement("label",{htmlFor:"location"},l.a.createElement("span",{className:"key"},"location:")," "),'"',l.a.createElement(k,{inputField:"location",placeholder:"Random street 947",onChange:function(t){return e.handleChange(t)},value:this.state.location}),'"'),"}",l.a.createElement("button",{className:"btn-form",onClick:function(t){return e.handleSubmit(t)}},"Generate!"),this.props.message?l.a.createElement("p",{className:"Generated!"===this.props.message?"message generated":"message"},this.props.message):null))}}]),t}(l.a.Component);var S=function(){var e=Object(n.useState)({title:"Test event",description:"This is a random test event",start:new Date("March 9, 2020 15:00"),end:new Date("March 9, 2020 17:00"),location:"Random street 947"}),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(null),i=Object(s.a)(r,2),m=i[0],d=i[1];return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},"Share Event"),l.a.createElement(g,{event:a}),l.a.createElement(R,{onSubmit:function(e){0!==e.title.trim().length&&0!==e.description.trim().length&&0!==e.location.trim().length?Date.parse(e.start)?Date.parse(e.end)?(c(Object(o.a)({},e)),d("Generated!")):d('"End" must have the specified format.'):d('"Start" must have the specified format.'):d("No fields should be empty.")},message:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.querySelector("[data-share-event]")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[15,1,2]]]);
//# sourceMappingURL=main.dcaf48e7.chunk.js.map
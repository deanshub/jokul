(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"3ii+":function(e,t,n){"use strict";if(n("C2rm")){var r=n("EWJ8"),a=n("Rjya"),l=n("YSb4"),i=n("NTkt"),o=n("t/PU"),c=n("blVu"),s=n("qskZ"),u=n("UFbn"),f=n("40Jg"),m=n("xoC9"),p=n("01qa"),d=n("FotN"),v=n("scjx"),h=n("tylZ"),b=n("nxaD"),g=n("CoNu"),k=n("VrNb"),y=n("SsdY"),j=n("koL8"),E=n("kmUA"),w=n("ngvV"),x=n("P7f4"),C=n("YtPQ"),_=n("RJB0").f,N=n("Icjw"),O=n("LES0"),L=n("R7Vx"),S=n("TCyI"),A=n("s5Vs"),T=n("YkbM"),F=n("gZHo"),I=n("Qdq8"),D=n("iacD"),R=n("o8xA"),V=n("T/4k"),B=n("FPDg"),P=n("Wylp"),U=n("6fUK"),W=P.f,q=U.f,M=a.RangeError,Y=a.TypeError,J=a.Uint8Array,H=Array.prototype,Z=c.ArrayBuffer,G=c.DataView,K=S(0),X=S(2),z=S(3),Q=S(4),$=S(5),ee=S(6),te=A(!0),ne=A(!1),re=F.values,ae=F.keys,le=F.entries,ie=H.lastIndexOf,oe=H.reduce,ce=H.reduceRight,se=H.join,ue=H.sort,fe=H.slice,me=H.toString,pe=H.toLocaleString,de=L("iterator"),ve=L("toStringTag"),he=O("typed_constructor"),be=O("def_constructor"),ge=o.CONSTR,ke=o.TYPED,ye=o.VIEW,je=S(1,(function(e,t){return _e(T(e,e[be]),t)})),Ee=l((function(){return 1===new J(new Uint16Array([1]).buffer)[0]})),we=!!J&&!!J.prototype.set&&l((function(){new J(1).set({})})),xe=function(e,t){var n=d(e);if(n<0||n%t)throw M("Wrong offset!");return n},Ce=function(e){if(j(e)&&ke in e)return e;throw Y(e+" is not a typed array!")},_e=function(e,t){if(!(j(e)&&he in e))throw Y("It is not a typed array constructor!");return new e(t)},Ne=function(e,t){return Oe(T(e,e[be]),t)},Oe=function(e,t){for(var n=0,r=t.length,a=_e(e,r);r>n;)a[n]=t[n++];return a},Le=function(e,t,n){W(e,t,{get:function(){return this._d[n]}})},Se=function(e){var t,n,r,a,l,i,o=E(e),c=arguments.length,u=c>1?arguments[1]:void 0,f=void 0!==u,m=N(o);if(null!=m&&!w(m)){for(i=m.call(o),r=[],t=0;!(l=i.next()).done;t++)r.push(l.value);o=r}for(f&&c>2&&(u=s(u,arguments[2],2)),t=0,n=v(o.length),a=_e(this,n);n>t;t++)a[t]=f?u(o[t],t):o[t];return a},Ae=function(){for(var e=0,t=arguments.length,n=_e(this,t);t>e;)n[e]=arguments[e++];return n},Te=!!J&&l((function(){pe.call(new J(1))})),Fe=function(){return pe.apply(Te?fe.call(Ce(this)):Ce(this),arguments)},Ie={copyWithin:function(e,t){return B.call(Ce(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return Q(Ce(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return V.apply(Ce(this),arguments)},filter:function(e){return Ne(this,X(Ce(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return $(Ce(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(Ce(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){K(Ce(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ne(Ce(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return te(Ce(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return se.apply(Ce(this),arguments)},lastIndexOf:function(e){return ie.apply(Ce(this),arguments)},map:function(e){return je(Ce(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return oe.apply(Ce(this),arguments)},reduceRight:function(e){return ce.apply(Ce(this),arguments)},reverse:function(){for(var e,t=Ce(this).length,n=Math.floor(t/2),r=0;r<n;)e=this[r],this[r++]=this[--t],this[t]=e;return this},some:function(e){return z(Ce(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return ue.call(Ce(this),e)},subarray:function(e,t){var n=Ce(this),r=n.length,a=b(e,r);return new(T(n,n[be]))(n.buffer,n.byteOffset+a*n.BYTES_PER_ELEMENT,v((void 0===t?r:b(t,r))-a))}},De=function(e,t){return Ne(this,fe.call(Ce(this),e,t))},Re=function(e){Ce(this);var t=xe(arguments[1],1),n=this.length,r=E(e),a=v(r.length),l=0;if(a+t>n)throw M("Wrong length!");for(;l<a;)this[t+l]=r[l++]},Ve={entries:function(){return le.call(Ce(this))},keys:function(){return ae.call(Ce(this))},values:function(){return re.call(Ce(this))}},Be=function(e,t){return j(e)&&e[ke]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},Pe=function(e,t){return Be(e,t=g(t,!0))?f(2,e[t]):q(e,t)},Ue=function(e,t,n){return!(Be(e,t=g(t,!0))&&j(n)&&k(n,"value"))||k(n,"get")||k(n,"set")||n.configurable||k(n,"writable")&&!n.writable||k(n,"enumerable")&&!n.enumerable?W(e,t,n):(e[t]=n.value,e)};ge||(U.f=Pe,P.f=Ue),i(i.S+i.F*!ge,"Object",{getOwnPropertyDescriptor:Pe,defineProperty:Ue}),l((function(){me.call({})}))&&(me=pe=function(){return se.call(this)});var We=p({},Ie);p(We,Ve),m(We,de,Ve.values),p(We,{slice:De,set:Re,constructor:function(){},toString:me,toLocaleString:Fe}),Le(We,"buffer","b"),Le(We,"byteOffset","o"),Le(We,"byteLength","l"),Le(We,"length","e"),W(We,ve,{get:function(){return this[ke]}}),e.exports=function(e,t,n,c){var s=e+((c=!!c)?"Clamped":"")+"Array",f="get"+e,p="set"+e,d=a[s],b=d||{},g=d&&C(d),k=!d||!o.ABV,E={},w=d&&d.prototype,N=function(e,n){W(e,n,{get:function(){return function(e,n){var r=e._d;return r.v[f](n*t+r.o,Ee)}(this,n)},set:function(e){return function(e,n,r){var a=e._d;c&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),a.v[p](n*t+a.o,r,Ee)}(this,n,e)},enumerable:!0})};k?(d=n((function(e,n,r,a){u(e,d,s,"_d");var l,i,o,c,f=0,p=0;if(j(n)){if(!(n instanceof Z||"ArrayBuffer"==(c=y(n))||"SharedArrayBuffer"==c))return ke in n?Oe(d,n):Se.call(d,n);l=n,p=xe(r,t);var b=n.byteLength;if(void 0===a){if(b%t)throw M("Wrong length!");if((i=b-p)<0)throw M("Wrong length!")}else if((i=v(a)*t)+p>b)throw M("Wrong length!");o=i/t}else o=h(n),l=new Z(i=o*t);for(m(e,"_d",{b:l,o:p,l:i,e:o,v:new G(l)});f<o;)N(e,f++)})),w=d.prototype=x(We),m(w,"constructor",d)):l((function(){d(1)}))&&l((function(){new d(-1)}))&&D((function(e){new d,new d(null),new d(1.5),new d(e)}),!0)||(d=n((function(e,n,r,a){var l;return u(e,d,s),j(n)?n instanceof Z||"ArrayBuffer"==(l=y(n))||"SharedArrayBuffer"==l?void 0!==a?new b(n,xe(r,t),a):void 0!==r?new b(n,xe(r,t)):new b(n):ke in n?Oe(d,n):Se.call(d,n):new b(h(n))})),K(g!==Function.prototype?_(b).concat(_(g)):_(b),(function(e){e in d||m(d,e,b[e])})),d.prototype=w,r||(w.constructor=d));var O=w[de],L=!!O&&("values"==O.name||null==O.name),S=Ve.values;m(d,he,!0),m(w,ke,s),m(w,ye,!0),m(w,be,d),(c?new d(1)[ve]==s:ve in w)||W(w,ve,{get:function(){return s}}),E[s]=d,i(i.G+i.W+i.F*(d!=b),E),i(i.S,s,{BYTES_PER_ELEMENT:t}),i(i.S+i.F*l((function(){b.of.call(d,1)})),s,{from:Se,of:Ae}),"BYTES_PER_ELEMENT"in w||m(w,"BYTES_PER_ELEMENT",t),i(i.P,s,Ie),R(s),i(i.P+i.F*we,s,{set:Re}),i(i.P+i.F*!L,s,Ve),r||w.toString==me||(w.toString=me),i(i.P+i.F*l((function(){new d(1).slice()})),s,{slice:De}),i(i.P+i.F*(l((function(){return[1,2].toLocaleString()!=new d([1,2]).toLocaleString()}))||!l((function(){w.toLocaleString.call([1,2])}))),s,{toLocaleString:Fe}),I[s]=L?O:S,r||L||m(w,de,S)}}else e.exports=function(){}},FPDg:function(e,t,n){"use strict";var r=n("kmUA"),a=n("nxaD"),l=n("scjx");e.exports=[].copyWithin||function(e,t){var n=r(this),i=l(n.length),o=a(e,i),c=a(t,i),s=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===s?i:a(s,i))-c,i-o),f=1;for(c<o&&o<c+u&&(f=-1,c+=u-1,o+=u-1);u-- >0;)c in n?n[o]=n[c]:delete n[o],o+=f,c+=f;return n}},J9Ew:function(e,t,n){"use strict";n.r(t);n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var r=n("mXGw"),a=n.n(r),l=n("/FXl"),i=n("qE5B"),o=n("+P0C");var c=function(e){var t=e.maxLength,n=e.width,r=e.invalid,l=e.ariaDescribedby,i=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["maxLength","width","invalid","ariaDescribedby"]),o=function(e,t){return e?{width:e}:t&&t<15?{width:t+3+"ch"}:void 0}(n,t);return a.a.createElement("input",Object.assign({"data-testid":"jkl-text-field__input",className:"jkl-text-field__input",maxLength:t,style:o,"aria-describedby":l,"aria-invalid":r},i))};var s=function(e){var t=e.helpLabel,n=e.errorLabel,r=e.label,l=e.className,i=e.variant,s=e.forceCompact,u=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["helpLabel","errorLabel","label","className","variant","forceCompact"]),f="jkl-text-field".concat(s?" jkl-text-field--compact":"",l?" "+l:"");return a.a.createElement("label",{"data-testid":"jkl-text-field",className:f},a.a.createElement(o.e,{variant:i,forceCompact:s},r),a.a.createElement(c,Object.assign({invalid:!!n},u)),a.a.createElement(o.i,{helpLabel:t,errorLabel:n,forceCompact:s}))};var u=function(e){var t=e.id,n=e.variant,r=e.label,l=e.className,i=e.helpLabel,c=e.errorLabel,s=e.rows,u=void 0===s?7:s,f=e.placeholder,m=void 0===f?" ":f,p=e.forceCompact,d=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["id","variant","label","className","helpLabel","errorLabel","rows","placeholder","forceCompact"]),v="jkl-text-field jkl-text-area".concat(p?" jkl-text-field--compact":"",l?" "+l:"");return a.a.createElement("label",{"data-testid":"jkl-text-field",className:v},a.a.createElement(o.e,{variant:n,forceCompact:p},r),a.a.createElement("textarea",Object.assign({"aria-invalid":!!c,className:"jkl-text-field__input jkl-text-field__input--"+u+"-rows",id:t,placeholder:m},d)),a.a.createElement(o.i,{helpLabel:i,errorLabel:c,forceCompact:p}))},f=function(){return a.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},a.a.createElement("path",{d:"M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5  4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5  8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z"}))},m=function(){return a.a.createElement("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",fillRule:"evenodd",clipRule:"evenodd"},a.a.createElement("path",{d:"M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"}))};var p=function(e){var t=e.action,n=e.className;return a.a.createElement("span",{"data-testid":"jkl-action-icon",className:n},function(e){switch(e){case"clear":return a.a.createElement(m,null);case"search":return a.a.createElement(f,null);default:return null}}(t))};var d=function(e){var t=e.action,n=e.forceCompact,r=e.className,l=e.helpLabel,i=e.errorLabel,s=e.variant,u=e.label,f=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["action","forceCompact","className","helpLabel","errorLabel","variant","label"]),m="jkl-text-field jkl-text-field--action".concat(n?" jkl-text-field--compact":"",r?" "+r:"");return a.a.createElement("label",{"data-testid":"jkl-text-field",className:m},a.a.createElement(o.e,{variant:s,forceCompact:n},u),a.a.createElement("div",{className:"jkl-text-field__input-wrapper"},a.a.createElement(c,Object.assign({invalid:!!i},f)),a.a.createElement("button",{type:"button",className:"jkl-text-field__action-button",onClick:t.onClick,"aria-label":t.label,title:t.label},a.a.createElement(p,{className:"jkl-text-field__action-icon",action:t.icon}))),a.a.createElement(o.i,{helpLabel:l,errorLabel:i,forceCompact:n}))};var v=function(e){var t=e.label,n=e.className,r=e.variant,l=e.forceCompact,i=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["label","className","variant","forceCompact"]),s="jkl-text-field jkl-text-field--inline".concat(l?" jkl-text-field--compact":"",n?" "+n:"");return a.a.createElement("label",{"data-testid":"jkl-text-field",className:s},a.a.createElement(o.e,{srOnly:!0,variant:r,forceCompact:l},t),a.a.createElement(c,i))},h=n("nBO4"),b=(n("Qvie"),n("ExnH"),n("Eb4t"),n("IYjZ"),n("yvkl"),n("GmB8")),g=n.n(b),k=n("bGYK"),y=n.n(k),j=n("F5Dj"),E=n("Abof");function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,l=c}finally{try{r||null==o.return||o.return()}finally{if(a)throw l}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e,t){var n=t.event,r=t.list,a=t.currentFocus;n.preventDefault(),function(e,t,n){var r=n.parentElement;switch(e){case"prev":var a=r&&r.previousElementSibling;if(a){var l=a.querySelector('[role="option"]');l&&l.focus()}break;case"next":var i=r&&r.nextElementSibling;if(i){var o=i.querySelector('[role="option"]');o&&o.focus()}break;case"first":var c=t.querySelector('[role="option"]');c&&c.focus();break;case"last":var s=t.querySelectorAll('[role="option"]');s.length&&s[s.length-1].focus()}}(e,r,a)}function C(e){var t=e.list,n=e.event,r=e.search,a=e.searchResetTimer,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:x,i=n.key,o=n.target,c=o,s={event:n,list:t,currentFocus:c};switch(i){case"ArrowUp":l("prev",s);break;case"ArrowDown":l("next",s);break;case"Home":l("first",s);break;case"End":l("last",s);break;case"Tab":n.preventDefault();break;case"Enter":break;default:if(void 0!==r){var u=_({list:t,key:i,search:r,searchResetTimer:a});u&&u.focus()}}}function _(e){var t=e.list,n=e.key,r=e.search,a=e.searchResetTimer,l=t.querySelectorAll('[role="option"]');if(!l.length)return null;if(r){r.keys=r.keys.concat(n),function(e,t){t&&(clearTimeout(t),t=void 0);t=setTimeout((function(){e?e.keys="":e={keys:""},t=void 0}),500,e,t)}(r,a);for(var i=0;i<l.length;i++){var o=l[i].innerText;if(o&&0===o.toLowerCase().indexOf(r.keys))return l[i]}}return null}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toLowerCase().replace(/[\W_]+/g,"")}function O(e){var t=e.items,n=e.value,l=e.label,i=e.onChange,c=e.className,s=e.helpLabel,u=e.errorLabel,f=e.inline,m=void 0!==f&&f,p=e.defaultPrompt,d=void 0===p?"Velg":p,v=e.variant,h=e.forceCompact,b=(e.initialInputValue,w(Object(r.useState)(n),2)),k=b[0],x=b[1],_=void 0!==k&&""!==k;function O(e){var n=t.map(j.a).filter((function(t){return t.value===e}))[0];return n&&n.label}var L=w(Object(r.useState)(O(n)),2),S=L[0],A=L[1],T=w(Object(r.useState)(!1),2),F=T[0],I=T[1],D=w(Object(r.useState)("dropdown".concat(y()(16))),1)[0],R=function(){var e,t,n=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],a=Object(r.useRef)(null);return n&&(e={keys:""}),Object(r.useEffect)((function(){var n=a.current;return n&&n.addEventListener("keydown",(function(r){return C({list:n,event:r,search:e,searchResetTimer:t})})),function(){n&&n.removeEventListener("keydown",(function(r){return C({list:n,event:r,search:e,searchResetTimer:t})}))}}),[]),a}(),V="jkl-select".concat(m?" jkl-select--inline":"",h?" jkl-select--compact":"",F?" jkl-select--open":"",_?"":" jkl-select--no-value",u?" jkl-select--invalid":"",c?" ".concat(c):"");Object(r.useEffect)((function(){x(n),A(O(n))}),[n]);var B=w(Object(E.a)(F),1)[0];return a.a.createElement("div",{"data-testid":"jkl-select",className:V},a.a.createElement(o.e,{variant:v,forceCompact:h},l),a.a.createElement("div",{className:"jkl-select__outer-wrapper"},a.a.createElement("button",{type:"button",className:"jkl-select__value","data-testid":"jkl-select__value","aria-haspopup":"listbox"},_?S:d),a.a.createElement(g.a,{id:D,ref:B,role:"listbox",className:"jkl-select__toggler",popup:l,hidden:!F,onToggle:function(){var e=R.current;e&&!F&&function(e,t,n){var r;(r=void 0!==n?e.querySelector("#".concat(t,"__").concat(N(n))):e.querySelector('[role="option"]'))&&r.focus()}(e,D,k),I(!F)},onToggleSelect:function(e){e.target.hidden=!0,e.target.button.focus(),e.target.value=e.detail;var t=e.detail.value;A(e.detail.textContent),x(t),i&&i(t)},"aria-activedescendant":_&&"".concat(D,"__").concat(N(k))},a.a.createElement("ul",{className:"jkl-select__option-wrapper","data-testid":"jkl-select__option-wrapper",tabIndex:-1,ref:R},t.map(j.a).map((function(e){return a.a.createElement("li",{key:e.value},a.a.createElement("button",{type:"button",id:"".concat(D,"__").concat(N(e.value)),className:"jkl-select__option","data-testid":"jkl-select__option","aria-selected":e.value===k,role:"option",value:e.value},e.label))})))),a.a.createElement("span",{className:"jkl-select__chevron"})),a.a.createElement(o.i,{helpLabel:s,errorLabel:u,forceCompact:h}))}n("HrjT"),n("q49/"),n("6yTs");var L=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],l=Object(r.useState)(!1),i=l[0],o=l[1],c=Object(r.useState)(!1),f=c[0],m=c[1],p=Object(r.useState)(!1),b=p[0],g=p[1],k=Object(r.useState)("medium"),y=k[0],j=k[1];function E(e){n(e.target.value)}return a.a.createElement("section",{className:"example-page "+(i?"example-page--dark-mode":"example-page--light-mode")},a.a.createElement("fieldset",{className:"example-page__controls"},a.a.createElement(h.a,{className:"toggle-switch",inverted:i,onChange:function(){return o(!i)}},"Dark Mode"),a.a.createElement(h.a,{className:"toggle-switch",inverted:i,onChange:function(){return m(!f)}},"Vis feilmelding"),a.a.createElement(h.a,{className:"toggle-switch",inverted:i,onChange:function(){return g(!b)}},"Kompakt variant"),a.a.createElement(O,{forceCompact:!0,variant:"small",label:"Etikettvariant",items:["large","medium","small"],onChange:function(e){j("large"===e||"medium"===e||"small"===e?e:void 0)},value:y})),a.a.createElement("div",{className:"side-by-side jkl-spacing--bottom-2"},a.a.createElement(d,{forceCompact:b,action:{icon:"clear",label:"Utfør nullstilling",onClick:function(){return n("")}},label:"Nullstill felt",value:t,onChange:function(e){return n(e.target.value)}}),a.a.createElement(d,{forceCompact:b,action:{icon:"search",label:"Skriv til konsoll",onClick:console.log},label:"Skriv til konsoll",value:t,onChange:function(e){return n(e.target.value)}})),a.a.createElement("div",{className:"side-by-side jkl-spacing--bottom-2"},a.a.createElement("p",{className:"jkl-small"},"Jeg tjener"," ",a.a.createElement(v,{type:"number",maxLength:5,label:"kronebeløp",forceCompact:b})," kroner i måneden."),a.a.createElement("p",{className:"jkl-p"},"Jeg tjener"," ",a.a.createElement(v,{invalid:!0,type:"number",maxLength:5,label:"kronebeløp",forceCompact:b})," ","kroner i måneden.")),a.a.createElement("div",{className:"side-by-side jkl-spacing--bottom-2"},a.a.createElement(s,{label:"Fornavn",value:t,onChange:E,placeholder:"f.eks. Ola",variant:"small",helpLabel:"La oss se...",forceCompact:b,maxLength:10}),a.a.createElement(s,{forceCompact:b,label:"Fornavn",value:"Per",onChange:E,readOnly:!0,variant:"small"})),a.a.createElement("div",{className:"side-by-side jkl-spacing--bottom-2"},a.a.createElement(s,{forceCompact:b,label:"Telefon",type:"tel",value:t,onChange:E,placeholder:"999 99 999"}),a.a.createElement(s,{forceCompact:b,label:"Telefon",type:"tel",value:t,onChange:E,placeholder:"999 99 999"})),a.a.createElement("div",{className:"side-by-side jkl-spacing--bottom-5"},a.a.createElement(s,{forceCompact:b,label:"Passord",type:"password",value:t,onChange:E,helpLabel:"Passord er en vanlig form for autentisering",variant:y}),a.a.createElement(s,{forceCompact:b,label:"Passord",type:"password",value:t,onChange:E,helpLabel:"Passord er en vanlig form for autentisering",variant:y})),a.a.createElement("div",{className:"side-by-side jkl-spacing--bottom-4"},a.a.createElement(u,{rows:3,label:"Svar med en kommentar",value:t,onChange:E,forceCompact:b,placeholder:"Begrens deg til tre linjer"}),a.a.createElement(u,{rows:3,label:"Svar med en kommentar",value:t,onChange:E,forceCompact:b,placeholder:"Begrens deg til tre linjer"})),a.a.createElement("div",{className:"side-by-side jkl-spacing--bottom-2"},a.a.createElement(u,{label:"Din livshistorie",value:t,onChange:E,variant:y,forceCompact:b}),a.a.createElement(u,{label:"Din livshistorie",value:t,onChange:E,variant:y,forceCompact:b})))};n.d(t,"_frontmatter",(function(){return S})),n.d(t,"default",(function(){return F}));var S={},A={_frontmatter:S},T=i.a;function F(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(l.b)(T,Object.assign({},A,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)(L,{mdxType:"Example"}),Object(l.b)("p",null,"Vi bruker tekstfelt når vi vil at brukerne skal legge inn informasjon. Ledeteksten skal fortelle hva brukeren skal oppgi i feltet. Tekstfelt godtar data med fast format eller fritekst. Fast format bruker du for eksempel når du vil at brukeren skal angi fødselsnummer eller et postnummer, mens fritekst passer til felt der brukerne skal fortelle noe med egne ord."),Object(l.b)("p",null,"Velg størrelse på tekstefelt etter typen data brukerne skal legge inn."),Object(l.b)("h2",null,"Typer tekstfelt"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Vanlige tekstfelt:"),"\nFor innhold som ikke overskrider lengden på feltet."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Lange tekstfelt:"),"\nNår innholdet blir lengre enn en setning. Høyden på feltet kan justeres."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Inline tekstfelt:"),"\nTil spesialtilfeller, hvis vi for eksempel trenger å plassere et tekstfelt i en setning."),Object(l.b)("h2",null,"Tekst og validering"),Object(l.b)("p",null,"Velg størrelse på ledetekst etter prinsippene for skjemadesign. Skriv en kort og tydelig ledetekst, som forteller brukerne hva de skal oppgi i feltet. Hvis det trengs, kan vi sette inn en hjelpetekst under feltet, som forklarer mer."),Object(l.b)("p",null,"Hvis tekstfeltet ikke validerer, vises en feilmelding som forteller hva som er galt. Vær oppmerskom på at feilmeldingen erstatter en eventuell hjelpetekst, slik at den feilmeldingen du lager også må fortelle hva hjelpeteksten var."),Object(l.b)("p",null,"Eksempel:\nHjelpetekst for et tekstfelt med fast format: ",Object(l.b)("em",{parentName:"p"},"Fyll ut fødselsnummer, 11 siffer.")," Feilemeldingstekst: ",Object(l.b)("em",{parentName:"p"},"Du må fylle ut fødselsnummer, 11 siffer"),"."))}F.isMDXComponent=!0},"T/4k":function(e,t,n){"use strict";var r=n("kmUA"),a=n("nxaD"),l=n("scjx");e.exports=function(e){for(var t=r(this),n=l(t.length),i=arguments.length,o=a(i>1?arguments[1]:void 0,n),c=i>2?arguments[2]:void 0,s=void 0===c?n:a(c,n);s>o;)t[o++]=e;return t}},ZJc7:function(e,t,n){n("3ii+")("Uint8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},bGYK:function(e,t,n){n("ZJc7");var r=self.crypto||self.msCrypto;e.exports=function(e){e=e||21;for(var t="",n=r.getRandomValues(new Uint8Array(e));e--;)t+="QLUint8ARdomValuesObj0h6345-79BCrypgJzHKTNYDSMkXPZ_FfG1WcqvwxEI2"[63&n[e]];return t}},blVu:function(e,t,n){"use strict";var r=n("Rjya"),a=n("C2rm"),l=n("EWJ8"),i=n("t/PU"),o=n("xoC9"),c=n("01qa"),s=n("YSb4"),u=n("UFbn"),f=n("FotN"),m=n("scjx"),p=n("tylZ"),d=n("RJB0").f,v=n("Wylp").f,h=n("T/4k"),b=n("goCf"),g=r.ArrayBuffer,k=r.DataView,y=r.Math,j=r.RangeError,E=r.Infinity,w=g,x=y.abs,C=y.pow,_=y.floor,N=y.log,O=y.LN2,L=a?"_b":"buffer",S=a?"_l":"byteLength",A=a?"_o":"byteOffset";function T(e,t,n){var r,a,l,i=new Array(n),o=8*n-t-1,c=(1<<o)-1,s=c>>1,u=23===t?C(2,-24)-C(2,-77):0,f=0,m=e<0||0===e&&1/e<0?1:0;for((e=x(e))!=e||e===E?(a=e!=e?1:0,r=c):(r=_(N(e)/O),e*(l=C(2,-r))<1&&(r--,l*=2),(e+=r+s>=1?u/l:u*C(2,1-s))*l>=2&&(r++,l/=2),r+s>=c?(a=0,r=c):r+s>=1?(a=(e*l-1)*C(2,t),r+=s):(a=e*C(2,s-1)*C(2,t),r=0));t>=8;i[f++]=255&a,a/=256,t-=8);for(r=r<<t|a,o+=t;o>0;i[f++]=255&r,r/=256,o-=8);return i[--f]|=128*m,i}function F(e,t,n){var r,a=8*n-t-1,l=(1<<a)-1,i=l>>1,o=a-7,c=n-1,s=e[c--],u=127&s;for(s>>=7;o>0;u=256*u+e[c],c--,o-=8);for(r=u&(1<<-o)-1,u>>=-o,o+=t;o>0;r=256*r+e[c],c--,o-=8);if(0===u)u=1-i;else{if(u===l)return r?NaN:s?-E:E;r+=C(2,t),u-=i}return(s?-1:1)*r*C(2,u-t)}function I(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function D(e){return[255&e]}function R(e){return[255&e,e>>8&255]}function V(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function B(e){return T(e,52,8)}function P(e){return T(e,23,4)}function U(e,t,n){v(e.prototype,t,{get:function(){return this[n]}})}function W(e,t,n,r){var a=p(+n);if(a+t>e[S])throw j("Wrong index!");var l=e[L]._b,i=a+e[A],o=l.slice(i,i+t);return r?o:o.reverse()}function q(e,t,n,r,a,l){var i=p(+n);if(i+t>e[S])throw j("Wrong index!");for(var o=e[L]._b,c=i+e[A],s=r(+a),u=0;u<t;u++)o[c+u]=s[l?u:t-u-1]}if(i.ABV){if(!s((function(){g(1)}))||!s((function(){new g(-1)}))||s((function(){return new g,new g(1.5),new g(NaN),"ArrayBuffer"!=g.name}))){for(var M,Y=(g=function(e){return u(this,g),new w(p(e))}).prototype=w.prototype,J=d(w),H=0;J.length>H;)(M=J[H++])in g||o(g,M,w[M]);l||(Y.constructor=g)}var Z=new k(new g(2)),G=k.prototype.setInt8;Z.setInt8(0,2147483648),Z.setInt8(1,2147483649),!Z.getInt8(0)&&Z.getInt8(1)||c(k.prototype,{setInt8:function(e,t){G.call(this,e,t<<24>>24)},setUint8:function(e,t){G.call(this,e,t<<24>>24)}},!0)}else g=function(e){u(this,g,"ArrayBuffer");var t=p(e);this._b=h.call(new Array(t),0),this[S]=t},k=function(e,t,n){u(this,k,"DataView"),u(e,g,"DataView");var r=e[S],a=f(t);if(a<0||a>r)throw j("Wrong offset!");if(a+(n=void 0===n?r-a:m(n))>r)throw j("Wrong length!");this[L]=e,this[A]=a,this[S]=n},a&&(U(g,"byteLength","_l"),U(k,"buffer","_b"),U(k,"byteLength","_l"),U(k,"byteOffset","_o")),c(k.prototype,{getInt8:function(e){return W(this,1,e)[0]<<24>>24},getUint8:function(e){return W(this,1,e)[0]},getInt16:function(e){var t=W(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=W(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return I(W(this,4,e,arguments[1]))},getUint32:function(e){return I(W(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return F(W(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return F(W(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){q(this,1,e,D,t)},setUint8:function(e,t){q(this,1,e,D,t)},setInt16:function(e,t){q(this,2,e,R,t,arguments[2])},setUint16:function(e,t){q(this,2,e,R,t,arguments[2])},setInt32:function(e,t){q(this,4,e,V,t,arguments[2])},setUint32:function(e,t){q(this,4,e,V,t,arguments[2])},setFloat32:function(e,t){q(this,4,e,P,t,arguments[2])},setFloat64:function(e,t){q(this,8,e,B,t,arguments[2])}});b(g,"ArrayBuffer"),b(k,"DataView"),o(k.prototype,i.VIEW,!0),t.ArrayBuffer=g,t.DataView=k},"t/PU":function(e,t,n){for(var r,a=n("Rjya"),l=n("xoC9"),i=n("LES0"),o=i("typed_array"),c=i("view"),s=!(!a.ArrayBuffer||!a.DataView),u=s,f=0,m="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(r=a[m[f++]])?(l(r.prototype,o,!0),l(r.prototype,c,!0)):u=!1;e.exports={ABV:s,CONSTR:u,TYPED:o,VIEW:c}},tylZ:function(e,t,n){var r=n("FotN"),a=n("scjx");e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=a(t);if(t!==n)throw RangeError("Wrong length!");return n}}}]);
//# sourceMappingURL=component---packages-text-input-react-documentation-text-input-mdx-055208641b0c7c10e138.js.map
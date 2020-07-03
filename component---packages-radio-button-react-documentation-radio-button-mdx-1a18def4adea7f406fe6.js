(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{bxeP:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return m})),t.d(n,"default",(function(){return j}));t("abGl"),t("gZHo"),t("Fdmb"),t("Ir+3"),t("1c7q");var r=t("mXGw"),a=t.n(r),l=t("/FXl"),o=t("7XvJ"),i=(t("jr56"),t("8Jek")),s=t.n(i),d=function(e){var n=e.value,t=e.label,r=e.onChange,l=e.name,o=void 0===l?"":l,i=e.inline,d=void 0!==i&&i,p=e.checked,u=e.invalid,v=void 0!==u&&u,b=e.forceCompact,m=e.inverted;return a.a.createElement("label",{"data-testid":"jkl-radio-button__label-tag",className:s()("jkl-radio-button",{"jkl-radio-button--compact":b,"jkl-radio-button--inline":d,"jkl-radio-button--error":v,"jkl-radio-button--inverted":m})},a.a.createElement("input",{className:"jkl-radio-button__input",type:"radio",name:o,value:n,onChange:r,checked:p,"aria-invalid":v}),a.a.createElement("span",{className:"jkl-radio-button__dot"}),a.a.createElement("span",{className:"jkl-radio-button__label"},t))},p=t("XySe"),u=t("F5Dj"),v=function(e){var n=e.name,t=e.legend,r=e.choices,l=e.selectedValue,o=e.onChange,i=e.inline,s=void 0!==i&&i,v=e.helpLabel,b=e.errorLabel,m=e.variant,c=e.forceCompact,k=e.className,g=e.inverted;return a.a.createElement(p.a,{legend:t,helpLabel:v,errorLabel:b,variant:m,forceCompact:c,className:k},r.map(u.e).map((function(e){var t=e.label,r=e.value;return a.a.createElement(d,{key:r,name:n,value:r,label:t,inline:s,checked:r===l,onChange:o,invalid:!!b,forceCompact:c,inverted:g})})))},b=function(e){var n=e.boolValues,t=e.choiceValues,r=a.a.useState("Yes"),l=r[0],o=r[1],i=n&&n["Med feil"]?"Her er det noe feil":void 0,s=t&&t.Variant?t.Variant:"medium";return a.a.createElement(v,{legend:"Do you like radio buttons?",name:"likesradiobuttons",choices:["Yes","No","I don't know"],inline:n&&n.Inline,forceCompact:n&&n.Kompakt,selectedValue:l,onChange:function(e){return o(e.target.value)},helpLabel:"Who doesn't like radio buttons?",errorLabel:i,variant:s,inverted:n&&n.Invertert})};var m={},c=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",n)}},k=c("Ingress"),g=c("ComponentExample"),f={_frontmatter:m},h=o.a;function j(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(l.b)(h,Object.assign({},f,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)(k,{mdxType:"Ingress"},"Vi bruker radioknapper når vi vil at brukeren skal velge ett av flere alternativ. Bruk helst radioknapper for inntil fire alternativ. Hvis du trenger å gi brukeren flere muligheter enn det, er det ofte bedre med en nedtrekksliste."),Object(l.b)(g,{component:b,knobs:{boolProps:["Kompakt","Inline","Med feil","Invertert"],choiceProps:[{name:"Variant",values:["small","medium","large"],defaultValue:1}]},mdxType:"ComponentExample"}),Object(l.b)("p",null,"Over radioknappene setter vi inn en tydelig overskrift, som forteller hva det er brukeren skal velge mellom. I tillegg skal hver radioknapp ha en kort og tydelig ledetekst til høyre for knappen, som beskriver alternativet."),Object(l.b)("h2",null,"Bruk"),Object(l.b)("p",null,"En gruppe radioknapper kan enten settes opp under eller ved siden av hverandre. Det er mest brukervennlig å sette dem opp vertikalt."),Object(l.b)("p",null,"En av radioknappene bør alltid være valgt på forhånd. Det kan være det alternativet som de fleste vil velge, eller det som har minst følger for brukeren. I noen tilfeller kan det være viktig at brukeren selv velger, uten å bli påvirket av et forhåndsvalg. Da kan vi sette opp radioknapper uten forhåndsvalg. ",Object(l.b)("strong",{parentName:"p"},"Vis eksempler på det")),Object(l.b)("h2",null,"Tekst og validering"),Object(l.b)("p",null,"Bruk prinsippene for skjemadesign når du velger størrelse på overskriften til en gruppe radioknapper. Skriv en kort og tydelig overskrift, som forteller hva brukeren skal velge. Hvis det er behov for det, kan vi legge inn en hjelpetekst under gruppen, for å forklare mer."),Object(l.b)("p",null,"Hvis radioknappene ikke validerer, viser systemet en feilmelding som forklarer hva som er galt. Feilmeldingen erstatter en eventuell hjelpetekst, så den må eventuelt gjenta det viktigste fra hjelpeteksten."),Object(l.b)("p",null,"Eksempel fra helsevurdering:\n",Object(l.b)("strong",{parentName:"p"},"Hjelpetekst"),": ",Object(l.b)("em",{parentName:"p"},"Velg om du har hatt diagnosen de siste 5, 10 eller 15 årene"),". ",Object(l.b)("strong",{parentName:"p"},"Feilmelding"),": ",Object(l.b)("em",{parentName:"p"},"Du har ikke valgt hvor lenge du har hatt diagnosen"),"."))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---packages-radio-button-react-documentation-radio-button-mdx-1a18def4adea7f406fe6.js.map
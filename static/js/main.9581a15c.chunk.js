(this.webpackJsonproerdalrun=this.webpackJsonproerdalrun||[]).push([[0],{10:function(e,t,a){e.exports={maindiv:"registration_maindiv__2NfT3",breadcrumbs:"registration_breadcrumbs__ZaaNH",bclink:"registration_bclink__3sZ5E",registrationform:"registration_registrationform__26miN",registrationinput:"registration_registrationinput__NAsXU",commentfield:"registration_commentfield__27qyA",tilmeld:"registration_tilmeld__3ICjT"}},13:function(e,t,a){e.exports={maindiv:"frontpage_maindiv__34UAy",item1:"frontpage_item1__3XZS2",item2:"frontpage_item2__K-NSj",item3:"frontpage_item3__33hgF",item4:"frontpage_item4__3NbKa",item5:"frontpage_item5__3biaE",gridcontainer:"frontpage_gridcontainer__2waDI",mereinfo:"frontpage_mereinfo__Lt4Fq",tilmeld:"frontpage_tilmeld__1fB19",iwonder:"frontpage_iwonder__1sMiR"}},14:function(e,t,a){e.exports={maindiv:"participants_maindiv__355rd",breadcrumbs:"participants_breadcrumbs__3LWCn",bclink:"participants_bclink__3KauG",participantsgrid:"participants_participantsgrid__37RhI",participantsinnerdiv:"participants_participantsinnerdiv__3lho2",participantsinfo:"participants_participantsinfo__2FSy1",searchgrid:"participants_searchgrid__3JGb_"}},16:function(e,t,a){e.exports={footer:"footer_footer__22CxG",footerLinks:"footer_footerLinks__3cNUk",information:"footer_information__GI02w",contactus:"footer_contactus__1VQNI",phonenumberandmail:"footer_phonenumberandmail__3zXjC"}},17:function(e,t,a){e.exports={maindiv:"distances_maindiv__3lCQA",breadcrumbs:"distances_breadcrumbs__3h9IY",bclink:"distances_bclink__26OY3",distancesgrid:"distances_distancesgrid__13ae5",backgroundblue:"distances_backgroundblue__1NDb3",cursorpointer:"distances_cursorpointer__1cW5b"}},21:function(e,t,a){e.exports={maindiv:"about_maindiv__tvaz2",breadcrumbs:"about_breadcrumbs__3rNj9",bclink:"about_bclink__2DICA"}},28:function(e,t,a){e.exports={heroheaderdiv:"heroheader_heroheaderdiv__28UEI"}},31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(27),i=a.n(c),s=(a(36),a(3)),l=a.n(s),o=a(8),m=a(2),u=a(4),p=a(6),d=a(28),b=a.n(d);function E(){return r.a.createElement("div",{className:b.a.heroheaderdiv},r.a.createElement("h1",null,"Hero Header"))}var f=a(13),v=a.n(f);function _(e){console.log("link til postman docs: https://documenter.getpostman.com/view/6540576/TVCb2pij#intro");var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],i=a[1];function s(){return(s=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.mediehuset.net/rordal/pages/1",t.next=3,e.doFetch("https://api.mediehuset.net/rordal/pages/1");case 3:a=t.sent,i(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:v.a.maindiv},r.a.createElement(E,null),r.a.createElement("section",{className:v.a.gridcontainer},r.a.createElement("div",{className:v.a.item1},r.a.createElement("h2",null,c.item&&c.item.title),r.a.createElement("div",{className:v.a.iwonder,dangerouslySetInnerHTML:c.item&&{__html:c.item.content}}),r.a.createElement("button",{className:v.a.mereinfo},"MERE INFO")),r.a.createElement("div",{className:v.a.item2},r.a.createElement("h3",null,"Ruter"),r.a.createElement("p",null,c.item&&c.item.teaser)),r.a.createElement("div",{className:v.a.item3},r.a.createElement("h3",null,"One Mile"),r.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium omnis doloribus inventore possimus tempore, ut hic earum, saepe labore, numquam quisquam dicta. Distinctio dicta porro nostrum eius culpa. Nobis."),r.a.createElement(u.b,{to:"/registration",className:v.a.tilmeld},"TILMELD ONE MILE")),r.a.createElement("div",{className:v.a.item4},r.a.createElement("h3",null,"5 km"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus eius, dolorum sapiente similique incidunt eum non error, vel ducimus porro aut magni minima cumque doloremque distinctio perferendis numquam tempora?"),r.a.createElement(u.b,{to:"/registration",className:v.a.tilmeld},"TILMELD 5 KM")),r.a.createElement("div",{className:v.a.item5},r.a.createElement("h3",null,"10 km"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, commodi. Nam recusandae doloremque repudiandae velit corporis cum, harum possimus veritatis accusantium voluptate unde a quisquam quibusdam explicabo dolorem animi."),r.a.createElement(u.b,{to:"/registration",className:v.a.tilmeld},"TILMELD 10 KM"))))}var g=a(5),h=a.n(g),N=a(9),O=a(20);function k(e){var t=Object(n.useState)("indtast brugernavn"),a=Object(m.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)("indtast password"),p=Object(m.a)(s,2),d=p[0],b=p[1],E=Object(n.useState)([]),f=Object(m.a)(E,2),v=f[0],_=f[1];function g(){return(g=Object(o.a)(l.a.mark((function e(t){var a,n,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("username",c),a.append("password",d),n={method:"POST",body:a},e.prev=5,"https://api.mediehuset.net/token",e.next=9,fetch("https://api.mediehuset.net/token",n);case 9:return r=e.sent,e.next=12,r.json();case 12:i=e.sent,_(i),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[5,16]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){v&&v.user_id&&(e.setLoginData(v),sessionStorage.setItem("token",JSON.stringify(v)))}),[v]),r.a.createElement("nav",{className:h.a.navbar},r.a.createElement("ul",{className:h.a.positionR},r.a.createElement("div",{className:h.a.menuxdiv},r.a.createElement(O.b,{className:h.a.menux})),r.a.createElement("div",{className:h.a.dropdown},r.a.createElement("div",{className:h.a.iconandtext},r.a.createElement(O.a,{className:h.a.menuicon}),r.a.createElement("p",{className:h.a.menutext},"MENU")),r.a.createElement("div",{className:h.a.dropdowncontent},r.a.createElement(u.b,{className:h.a.navbarLinks,to:"/frontpage"},"FORSIDE"),r.a.createElement(u.b,{className:h.a.navbarLinks,to:"/distances"},"DISTANCER"),r.a.createElement(u.b,{className:h.a.navbarLinks,to:"/registration"},"TILMELDING"),r.a.createElement(u.b,{className:h.a.navbarLinks,to:"/participants"},"DELTAGERLISTE"),r.a.createElement(u.b,{className:h.a.navbarLinks,to:"/about"},"OM R\xd8RDAL RUN"),r.a.createElement("div",{className:h.a.logindropdown},r.a.createElement("span",{className:h.a.navbarLinks},"LOGIN ",r.a.createElement(N.b,null)),r.a.createElement("div",{className:h.a.logindropdowncontent},r.a.createElement("form",{className:h.a.navbarform},!e.loginData.user_id&&r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:h.a.navbarlabel},"Brugernavn"),r.a.createElement("input",{value:c,onClick:function(){i("")},onChange:function(e){i(e.target.value)}}),r.a.createElement("label",{className:h.a.navbarlabel},"Password"),r.a.createElement("input",{type:"password",value:d,onClick:function(){b("")},onChange:function(e){b(e.target.value)}}),r.a.createElement("button",{className:h.a.logoutbtn,onClick:function(e){!function(e){g.apply(this,arguments)}(e)}},"Log ind")),e.loginData.user_id&&r.a.createElement("button",{className:h.a.logoutbtn,onClick:function(t){!function(t){t.preventDefault(),sessionStorage.removeItem("token"),e.setLoginData([])}(t)}},"Log ud"))))))),r.a.createElement("div",{className:h.a.smicons},r.a.createElement(N.d,null),r.a.createElement(N.c,null)))}var j=a(21),L=a.n(j);function x(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],i=a[1];function s(){return(s=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.mediehuset.net/rordal/pages/4",t.next=3,e.doFetch("https://api.mediehuset.net/rordal/pages/4");case 3:a=t.sent,i(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:L.a.maindiv},r.a.createElement(E,null),r.a.createElement("section",null,r.a.createElement("span",{className:L.a.breadcrumbs},r.a.createElement(u.b,{to:"/frontpage",className:L.a.bclink},"FORSIDE")," ",r.a.createElement(N.a,null)," OM R\xd8RDAL RUN"),r.a.createElement("h2",null,c.item&&c.item.title),r.a.createElement("div",{dangerouslySetInnerHTML:c.item&&{__html:c.item.content}})))}var S=a(16),w=a.n(S);function D(){return r.a.createElement("section",{className:w.a.footer},r.a.createElement("div",null,r.a.createElement("p",{className:w.a.information},"INFORMATION")),r.a.createElement("div",null,r.a.createElement(u.b,{className:w.a.footerLinks,to:"/about"},"OM R\xd8RDAL RUN"),r.a.createElement(u.b,{className:w.a.footerLinks,to:"/frontpage"},"RUTER"),r.a.createElement(u.b,{className:w.a.footerLinks,to:"/registration"},"TILMELDING"),r.a.createElement(u.b,{className:w.a.footerLinks,to:"/distances"},"DISTANCER")),r.a.createElement("div",null,r.a.createElement("p",{className:w.a.contactus},"KONTAKT OS")),r.a.createElement("div",null,r.a.createElement("p",{className:w.a.phonenumberandmail},"+45 35 67 90 87"),r.a.createElement("p",{className:w.a.phonenumberandmail},"ROERDALRUN@MAIL.COM")))}var y=a(17),I=a.n(y),R=a(30);function T(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],i=a[1];function s(){return(s=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.mediehuset.net/rordal/pages/2",t.next=3,e.doFetch("https://api.mediehuset.net/rordal/pages/2");case 3:a=t.sent,i(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]);var p=Object(n.useState)([]),d=Object(m.a)(p,2),b=d[0],f=d[1],v=Object(n.useState)(0),_=Object(m.a)(v,2),g=_[0],h=_[1];function O(){return(O=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.mediehuset.net/rordal/run",t.next=3,e.doFetch("https://api.mediehuset.net/rordal/run");case 3:a=t.sent,f(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){O.apply(this,arguments)}()}),[]),r.a.createElement("div",{className:I.a.maindiv},r.a.createElement(E,null),r.a.createElement("section",null,r.a.createElement("span",{className:I.a.breadcrumbs},r.a.createElement(u.b,{to:"/frontpage",className:I.a.bclink},"FORSIDE")," ",r.a.createElement(N.a,null)," DISTANCER"),r.a.createElement("h2",null,c.item&&c.item.title),r.a.createElement("div",{dangerouslySetInnerHTML:c.item&&{__html:c.item.content}}),r.a.createElement("div",{className:I.a.distancesgrid},r.a.createElement("div",{className:I.a.backgroundblue},r.a.createElement("h3",null,"Distancebeskrivelser"),r.a.createElement("p",null,"Klik p\xe5 de enkelte distancer for at f\xe5 en beskrivelse af, hvad den enkelte distance har at tilbyde."),b.items&&b.items.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("p",{className:I.a.cursorpointer,id:t,onClick:function(e){h(e.target.id)}},r.a.createElement(R.a,null),e.title))}))),r.a.createElement("div",{className:I.a.backgroundblue},r.a.createElement("h3",null,b.items&&b.items[g].title),r.a.createElement("p",null,b.items&&b.items[g].description)))))}var C=a(10),F=a.n(C);function M(e){var t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],i=a[1];function s(){return(s=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.mediehuset.net/rordal/pages/3",t.next=3,e.doFetch("https://api.mediehuset.net/rordal/pages/3");case 3:a=t.sent,i(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]);var p=Object(n.useState)(""),d=Object(m.a)(p,2),b=d[0],f=d[1],v=Object(n.useState)(""),_=Object(m.a)(v,2),g=_[0],h=_[1],O=Object(n.useState)(1),k=Object(m.a)(O,2),j=k[0],L=k[1],x=Object(n.useState)(""),S=Object(m.a)(x,2),w=S[0],D=S[1],y=Object(n.useState)(""),I=Object(m.a)(y,2),R=I[0],T=I[1],C=Object(n.useState)(""),M=Object(m.a)(C,2),A=M[0],G=M[1],K=Object(n.useState)(1),q=Object(m.a)(K,2),U=q[0],P=q[1],H=Object(n.useState)(""),B=Object(m.a)(H,2),J=B[0],z=B[1],V=Object(n.useState)(1),Q=Object(m.a)(V,2),W=Q[0],X=Q[1],Z=Object(n.useState)(1),Y=Object(m.a)(Z,2),$=Y[0],ee=Y[1],te=Object(n.useState)(""),ae=Object(m.a)(te,2),ne=ae[0],re=ae[1],ce=Object(n.useState)(!1),ie=Object(m.a)(ce,2),se=ie[0],le=ie[1];function oe(e){return new Date(e).getTime()/1e3}function me(){return(me=Object(o.a)(l.a.mark((function t(a){var n,r,c,i,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=oe(j),(r=new FormData).append("firstname",b),r.append("lastname",g),r.append("birthdate",n),r.append("gender",w),r.append("email",R),r.append("address",A),r.append("zipcode",U),r.append("city",J),r.append("phone",W),r.append("run_id",$),r.append("comment",ne),c={method:"POST",body:r,headers:{Authorization:"Bearer ".concat(e.loginData.access_token)}},t.prev=15,"https://api.mediehuset.net/rordal/registrations",t.next=19,fetch("https://api.mediehuset.net/rordal/registrations",c);case 19:return i=t.sent,t.next=22,i.json();case 22:s=t.sent,console.log("send registration",s),le(!0),t.next=30;break;case 27:t.prev=27,t.t0=t.catch(15),console.log(t.t0);case 30:case"end":return t.stop()}}),t,null,[[15,27]])})))).apply(this,arguments)}return r.a.createElement("div",{className:F.a.maindiv},r.a.createElement(E,null),r.a.createElement("section",null,r.a.createElement("span",{className:F.a.breadcrumbs},r.a.createElement(u.b,{to:"/frontpage",className:F.a.bclink},"FORSIDE")," ",r.a.createElement(N.a,null)," TILMELDING ",1==se&&r.a.createElement(N.a,null)," ",1==se&&"TAK FOR DIN TILMELDING"," "),0==se&&r.a.createElement("div",null,r.a.createElement("h2",null,c.item&&c.item.title),r.a.createElement("div",{dangerouslySetInnerHTML:c.item&&{__html:c.item.content}}),r.a.createElement("form",{className:F.a.registrationform},r.a.createElement("div",null,r.a.createElement("label",null,"Navn"),r.a.createElement("input",{className:F.a.registrationinput,onChange:function(e){f(e.target.value)}}),r.a.createElement("label",null,"Efternavn"),r.a.createElement("input",{className:F.a.registrationinput,onChange:function(e){h(e.target.value)}}),r.a.createElement("label",null,"F\xf8dselsdato"),r.a.createElement("input",{className:F.a.registrationinput,type:"date",onChange:function(e){L(e.target.value)}}),r.a.createElement("label",null,"K\xf8n"),r.a.createElement("select",{onChange:function(e){D(e.target.value)}},r.a.createElement("option",{value:"m"},"V\xe6lg k\xf8n"),r.a.createElement("option",{value:"m"},"Mand"),r.a.createElement("option",{value:"f"},"Kvinde")),r.a.createElement("label",null,"E-mail"),r.a.createElement("input",{className:F.a.registrationinput,onChange:function(e){T(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("label",null,"Adresse"),r.a.createElement("input",{className:F.a.registrationinput,onChange:function(e){G(e.target.value)}}),r.a.createElement("label",null,"Postnummer"),r.a.createElement("input",{type:"number",className:F.a.registrationinput,onChange:function(e){P(e.target.value)}}),r.a.createElement("label",null,"By"),r.a.createElement("input",{className:F.a.registrationinput,onChange:function(e){z(e.target.value)}}),r.a.createElement("label",null,"Telefon"),r.a.createElement("input",{type:"number",className:F.a.registrationinput,onChange:function(e){X(e.target.value)}}),r.a.createElement("label",null,"V\xe6lg Program"),r.a.createElement("select",{onChange:function(e){ee(e.target.value)}},r.a.createElement("option",{value:"V\xe6lg program"},"V\xe6lg program"),r.a.createElement("option",{value:"1"},"10km"),r.a.createElement("option",{value:"2"},"5km"),r.a.createElement("option",{value:"3"},"One mile"))),r.a.createElement("div",null,r.a.createElement("label",null,"Kommentar"),r.a.createElement("textarea",{className:F.a.commentfield,onChange:function(e){re(e.target.value)}}),r.a.createElement("button",{onClick:function(e){!function(e){me.apply(this,arguments)}(e)},className:F.a.tilmeld},"TILMELD")))),1==se&&r.a.createElement("div",null,r.a.createElement("h2",null,"Du er nu tilmeldt R\xf8rdal Run"),r.a.createElement("p",null,"Mange tak for din tilmelding. Du vil modtage en e-mail fra os med dit l\xf8benummer, samt informationer vedr. R\xf8rdal Run."),r.a.createElement("p",null,"Tak og vi ses!"))))}var A=a(14),G=a.n(A);function K(e){var t=Object(n.useState)(!0),a=Object(m.a)(t,2),c=a[0],i=a[1],s=Object(n.useState)(""),p=Object(m.a)(s,2),d=p[0],b=p[1],f=Object(n.useState)([]),v=Object(m.a)(f,2),_=v[0],g=v[1];function h(){return(h=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.mediehuset.net/rordal/pages/5",t.next=3,e.doFetch("https://api.mediehuset.net/rordal/pages/5");case 3:a=t.sent,g(a);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){h.apply(this,arguments)}()}),[]);var O=Object(n.useState)(""),k=Object(m.a)(O,2),j=k[0],L=k[1];function x(){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(l.a.mark((function t(){var a,n,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={Authorization:"Bearer ".concat(e.loginData.access_token)},t.prev=1,"https://api.mediehuset.net/rordal/registrations",t.next=5,fetch("https://api.mediehuset.net/rordal/registrations",a);case 5:return n=t.sent,t.next=8,n.json();case 8:r=t.sent,L(r),i(!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}function w(){return(w=Object(o.a)(l.a.mark((function t(){var a,n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={Authorization:"Bearer ".concat(e.loginData.access_token)},t.prev=1,n="https://api.mediehuset.net/rordal/search/".concat(d),t.next=5,fetch(n,a);case 5:return r=t.sent,t.next=8,r.json();case 8:c=t.sent,L(c),i(!1),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[1,13]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){console.log("Participants -> participants",j)}),[j]),Object(n.useEffect)((function(){x()}),[]),r.a.createElement("div",{className:G.a.maindiv},r.a.createElement(E,null),r.a.createElement("section",null,r.a.createElement("span",{className:G.a.breadcrumbs},r.a.createElement(u.b,{to:"/frontpage",className:G.a.bclink},"FORSIDE")," ",r.a.createElement(N.a,null)," DELTAGERLISTE"),r.a.createElement("h2",null,_.item&&_.item.title),r.a.createElement("div",{dangerouslySetInnerHTML:_.item&&{__html:_.item.content}}),r.a.createElement("div",{className:G.a.searchgrid},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"S\xf8g blandt deltagere",onChange:function(e){return b(e.target.value)},autoFocus:!0}),r.a.createElement("button",{onClick:function(){""==!d?function(){w.apply(this,arguments)}():x()}},"S\xd8G")),c?r.a.createElement("h2",null,"Henter deltagere"):r.a.createElement("div",{className:G.a.participantsgrid},j.items&&j.items.map((function(e,t){return r.a.createElement("div",{key:t,className:G.a.participantsinnerdiv},r.a.createElement("p",{className:G.a.participantsinfo},"Navn: ",e.firstname," ",e.lastname),r.a.createElement("p",{className:G.a.participantsinfo},"Fra: ",e.city),r.a.createElement("p",{className:G.a.participantsinfo},"E-mail: ",e.email),r.a.createElement("p",{className:G.a.participantsinfo},1==e.run_id&&"Jeg skal l\xf8be 10km"),r.a.createElement("p",{className:G.a.participantsinfo},2==e.run_id&&"Jeg skal l\xf8be 5km"),r.a.createElement("p",{className:G.a.participantsinfo},3==e.run_id&&"Jeg skal l\xf8be one mile"))})))))}var q=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1];function i(e){return s.apply(this,arguments)}function s(){return(s=Object(o.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){sessionStorage.getItem("token")&&c(JSON.parse(sessionStorage.getItem("token")))}),[]),Object(n.useEffect)((function(){console.log(a)}),[a]),r.a.createElement(u.a,null,r.a.createElement(k,{loginData:a,setLoginData:c}),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/participants"},r.a.createElement(K,{loginData:a,setLoginData:c,doFetch:i})),r.a.createElement(p.a,{path:"/registration"},r.a.createElement(M,{loginData:a,setLoginData:c,doFetch:i})),r.a.createElement(p.a,{path:"/distances"},r.a.createElement(T,{doFetch:i})),r.a.createElement(p.a,{path:"/About"},r.a.createElement(x,{doFetch:i})),r.a.createElement(p.a,{path:"/"},r.a.createElement(_,{doFetch:i}))),r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports={navbar:"navbar_navbar__1XGhG",navbarLinks:"navbar_navbarLinks__15KnE",smicons:"navbar_smicons__1u2b_",menuicon:"navbar_menuicon__1plus",menutext:"navbar_menutext__2LGP_",iconandtext:"navbar_iconandtext__2aLDF",positionR:"navbar_positionR__3N9UT",menuxdiv:"navbar_menuxdiv__3KKxh",menux:"navbar_menux__pxeGl",dropdown:"navbar_dropdown__13QO1",dropdowncontent:"navbar_dropdowncontent__2FRgv",navbarform:"navbar_navbarform__28Pnf",navbarlabel:"navbar_navbarlabel__EIFP4",logoutbtn:"navbar_logoutbtn__Dv5dh",logindropdowncontent:"navbar_logindropdowncontent__3-y8y",logindropdown:"navbar_logindropdown__1pGPU"}}},[[31,1,2]]]);
//# sourceMappingURL=main.9581a15c.chunk.js.map
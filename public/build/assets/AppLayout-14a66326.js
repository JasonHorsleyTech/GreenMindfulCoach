import{o as s,e as o,a as e,Q as N,d as $,q as P,n as h,f as c,t as _,i as w,s as D,x as F,k as S,r as p,y as C,u as m,l as T,z as L,b as u,w as n,A as E,c as y,j,Z as O,g,F as x,h as B,O as z}from"./app-20222a63.js";import{_ as V}from"./_plugin-vue_export-helper-c27b6911.js";const I={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q=e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),H=e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1),Q=[q,H];function U(d,a){return s(),o("svg",R,Q)}const Z=V(I,[["render",U]]),G={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},J={class:"flex items-center justify-between flex-wrap"},K={class:"w-0 flex-1 flex items-center min-w-0"},W={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},X=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),Y=[X],ee={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},te=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1),se=[te],re={class:"ms-3 font-medium text-sm text-white truncate"},oe={class:"shrink-0 sm:ms-3"},ae=e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1),ne=[ae],ie={__name:"Banner",setup(d){const a=N(),r=$(!0),l=$("success"),t=$("");return P(async()=>{var v,i;l.value=((v=a.props.jetstream.flash)==null?void 0:v.bannerStyle)||"success",t.value=((i=a.props.jetstream.flash)==null?void 0:i.banner)||"",r.value=!0}),(v,i)=>(s(),o("div",null,[r.value&&t.value?(s(),o("div",{key:0,class:h({"bg-indigo-500":l.value=="success","bg-red-700":l.value=="danger"})},[e("div",G,[e("div",J,[e("div",K,[e("span",{class:h(["flex p-2 rounded-lg",{"bg-indigo-600":l.value=="success","bg-red-600":l.value=="danger"}])},[l.value=="success"?(s(),o("svg",W,Y)):c("",!0),l.value=="danger"?(s(),o("svg",ee,se)):c("",!0)],2),e("p",re,_(t.value),1)]),e("div",oe,[e("button",{type:"button",class:h(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":l.value=="success","hover:bg-red-600 focus:bg-red-600":l.value=="danger"}]),"aria-label":"Dismiss",onClick:i[0]||(i[0]=w(f=>r.value=!1,["prevent"]))},ne,2)])])])],2)):c("",!0)]))}},le={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(d){const a=d;let r=$(!1);const l=i=>{r.value&&i.key==="Escape"&&(r.value=!1)};D(()=>document.addEventListener("keydown",l)),F(()=>document.removeEventListener("keydown",l));const t=S(()=>({48:"w-48"})[a.width.toString()]),v=S(()=>a.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":a.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(i,f)=>(s(),o("div",le,[e("div",{onClick:f[0]||(f[0]=M=>C(r)?r.value=!m(r):r=!m(r))},[p(i.$slots,"trigger")]),T(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=M=>C(r)?r.value=!1:r=!1)},null,512),[[L,m(r)]]),u(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:n(()=>[T(e("div",{class:h(["absolute z-50 mt-2 rounded-md shadow-lg",[t.value,v.value]]),style:{display:"none"},onClick:f[2]||(f[2]=M=>C(r)?r.value=!1:r=!1)},[e("div",{class:h(["rounded-md ring-1 ring-black ring-opacity-5",d.contentClasses])},[p(i.$slots,"content")],2)],2),[[L,m(r)]])]),_:3})]))}},de={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},ue=["href"],k={__name:"DropdownLink",props:{href:String,as:String},setup(d){return(a,r)=>(s(),o("div",null,[d.as=="button"?(s(),o("button",de,[p(a.$slots,"default")])):d.as=="a"?(s(),o("a",{key:1,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[p(a.$slots,"default")],8,ue)):(s(),y(m(j),{key:2,href:d.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:n(()=>[p(a.$slots,"default")]),_:3},8,["href"]))]))}},ce={__name:"NavLink",props:{href:String,active:Boolean},setup(d){const a=d,r=S(()=>a.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(l,t)=>(s(),y(m(j),{href:d.href,class:h(r.value)},{default:n(()=>[p(l.$slots,"default")]),_:3},8,["href","class"]))}},b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(d){const a=d,r=S(()=>a.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(l,t)=>(s(),o("div",null,[d.as=="button"?(s(),o("button",{key:0,class:h([r.value,"w-full text-start"])},[p(l.$slots,"default")],2)):(s(),y(m(j),{key:1,href:d.href,class:h(r.value)},{default:n(()=>[p(l.$slots,"default")]),_:3},8,["href","class"]))]))}},ge={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},he={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},pe={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},fe={class:"flex justify-between h-16"},me={class:"flex"},ve={class:"shrink-0 flex items-center"},ye={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},be={class:"hidden sm:flex sm:items-center sm:ms-6"},_e={class:"ms-3 relative"},ke={class:"inline-flex rounded-md"},xe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},we=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1),$e={class:"w-60"},Se=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),je=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),Ce=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),Me=["onSubmit"],Te={class:"flex items-center"},Le={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},Be=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),ze=[Be],Ae={class:"ms-3 relative"},Ne={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},Pe=["src","alt"],De={key:1,class:"inline-flex rounded-md"},Fe={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},Ee=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1),Oe=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1),Ve=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),Ie=["onSubmit"],Re={class:"-me-2 flex items-center sm:hidden"},qe={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},He={class:"pt-2 pb-3 space-y-1"},Qe={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},Ue={class:"flex items-center px-4"},Ze={key:0,class:"shrink-0 me-3"},Ge=["src","alt"],Je={class:"font-medium text-base text-gray-800 dark:text-gray-200"},Ke={class:"font-medium text-sm text-gray-500"},We={class:"mt-3 space-y-1"},Xe=["onSubmit"],Ye=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),et=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1),tt=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1),st=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1),rt=["onSubmit"],ot={class:"flex items-center"},at={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},nt=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1),it=[nt],lt={key:0,class:"bg-white dark:bg-gray-800 shadow"},dt={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},gt={__name:"AppLayout",props:{title:String},setup(d){const a=$(!1),r=t=>{z.put(route("current-team.update"),{team_id:t.id},{preserveState:!1})},l=()=>{z.post(route("logout"))};return(t,v)=>(s(),o("div",null,[u(m(O),{title:d.title},null,8,["title"]),u(ie),e("div",ge,[e("nav",he,[e("div",pe,[e("div",fe,[e("div",me,[e("div",ve,[u(m(j),{href:t.route("dashboard")},{default:n(()=>[u(Z,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ye,[u(ce,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[g(" Dashboard ")]),_:1},8,["href","active"])])]),e("div",be,[e("div",_e,[t.$page.props.jetstream.hasTeamFeatures?(s(),y(A,{key:0,align:"right",width:"60"},{trigger:n(()=>[e("span",ke,[e("button",xe,[g(_(t.$page.props.auth.user.current_team.name)+" ",1),we])])]),content:n(()=>[e("div",$e,[Se,u(k,{href:t.route("teams.show",t.$page.props.auth.user.current_team)},{default:n(()=>[g(" Team Settings ")]),_:1},8,["href"]),t.$page.props.jetstream.canCreateTeams?(s(),y(k,{key:0,href:t.route("teams.create")},{default:n(()=>[g(" Create New Team ")]),_:1},8,["href"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),o(x,{key:1},[je,Ce,(s(!0),o(x,null,B(t.$page.props.auth.user.all_teams,i=>(s(),o("form",{key:i.id,onSubmit:w(f=>r(i),["prevent"])},[u(k,{as:"button"},{default:n(()=>[e("div",Te,[i.id==t.$page.props.auth.user.current_team_id?(s(),o("svg",Le,ze)):c("",!0),e("div",null,_(i.name),1)])]),_:2},1024)],40,Me))),128))],64)):c("",!0)])]),_:1})):c("",!0)]),e("div",Ae,[u(A,{align:"right",width:"48"},{trigger:n(()=>[t.$page.props.jetstream.managesProfilePhotos?(s(),o("button",Ne,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Pe)])):(s(),o("span",De,[e("button",Fe,[g(_(t.$page.props.auth.user.name)+" ",1),Ee])]))]),content:n(()=>[Oe,u(k,{href:t.route("profile.show")},{default:n(()=>[g(" Profile ")]),_:1},8,["href"]),t.$page.props.jetstream.hasApiFeatures?(s(),y(k,{key:0,href:t.route("api-tokens.index")},{default:n(()=>[g(" API Tokens ")]),_:1},8,["href"])):c("",!0),Ve,e("form",{onSubmit:w(l,["prevent"])},[u(k,{as:"button"},{default:n(()=>[g(" Log Out ")]),_:1})],40,Ie)]),_:1})])]),e("div",Re,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:v[0]||(v[0]=i=>a.value=!a.value)},[(s(),o("svg",qe,[e("path",{class:h({hidden:a.value,"inline-flex":!a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:h({hidden:!a.value,"inline-flex":a.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:h([{block:a.value,hidden:!a.value},"sm:hidden"])},[e("div",He,[u(b,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:n(()=>[g(" Dashboard ")]),_:1},8,["href","active"])]),e("div",Qe,[e("div",Ue,[t.$page.props.jetstream.managesProfilePhotos?(s(),o("div",Ze,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:t.$page.props.auth.user.profile_photo_url,alt:t.$page.props.auth.user.name},null,8,Ge)])):c("",!0),e("div",null,[e("div",Je,_(t.$page.props.auth.user.name),1),e("div",Ke,_(t.$page.props.auth.user.email),1)])]),e("div",We,[u(b,{href:t.route("profile.show"),active:t.route().current("profile.show")},{default:n(()=>[g(" Profile ")]),_:1},8,["href","active"]),t.$page.props.jetstream.hasApiFeatures?(s(),y(b,{key:0,href:t.route("api-tokens.index"),active:t.route().current("api-tokens.index")},{default:n(()=>[g(" API Tokens ")]),_:1},8,["href","active"])):c("",!0),e("form",{method:"POST",onSubmit:w(l,["prevent"])},[u(b,{as:"button"},{default:n(()=>[g(" Log Out ")]),_:1})],40,Xe),t.$page.props.jetstream.hasTeamFeatures?(s(),o(x,{key:1},[Ye,et,u(b,{href:t.route("teams.show",t.$page.props.auth.user.current_team),active:t.route().current("teams.show")},{default:n(()=>[g(" Team Settings ")]),_:1},8,["href","active"]),t.$page.props.jetstream.canCreateTeams?(s(),y(b,{key:0,href:t.route("teams.create"),active:t.route().current("teams.create")},{default:n(()=>[g(" Create New Team ")]),_:1},8,["href","active"])):c("",!0),t.$page.props.auth.user.all_teams.length>1?(s(),o(x,{key:1},[tt,st,(s(!0),o(x,null,B(t.$page.props.auth.user.all_teams,i=>(s(),o("form",{key:i.id,onSubmit:w(f=>r(i),["prevent"])},[u(b,{as:"button"},{default:n(()=>[e("div",ot,[i.id==t.$page.props.auth.user.current_team_id?(s(),o("svg",at,it)):c("",!0),e("div",null,_(i.name),1)])]),_:2},1024)],40,rt))),128))],64)):c("",!0)],64)):c("",!0)])])],2)]),t.$slots.header?(s(),o("header",lt,[e("div",dt,[p(t.$slots,"header")])])):c("",!0),e("main",null,[p(t.$slots,"default")])])]))}};export{gt as _};

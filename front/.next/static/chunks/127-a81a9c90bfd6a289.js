(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[127],{1138:function(e,s,t){"use strict";t.d(s,{f:function(){return d}});var l=t(5893),a=t(7484),n=t.n(a),r=t(1017),i=t(9469),c=t(8779);let o=e=>{let s=e.startOf("month"),t=[],l=8-s.day();t.push([...(0,c.w)(0,s.day()).map(()=>null),...(0,c.w)(1,l)]);for(let s=l;s<=e.daysInMonth();s+=7)t.push((0,c.w)(s,s+7).map(s=>s<=e.daysInMonth()?s:null));return t},d=e=>{let{now:s,setNow:t}=e,a=(0,r.w)(e=>e.isActiveDay),c=s.format("MMMM YYYY"),d=n()(),x=o(s);return(0,l.jsxs)("article",{className:"flex flex-col rounded-xl border-2 border-gray-300 p-3 text-gray-400",children:[(0,l.jsxs)("header",{className:"flex items-center justify-between gap-3",children:[(0,l.jsxs)("button",{className:"text-gray-400",onClick:()=>t(e=>e.add(-1,"month")),children:[(0,l.jsx)(i.zr,{}),(0,l.jsx)("span",{className:"sr-only",children:"Go to previous month"})]}),(0,l.jsx)("h3",{className:"text-lg font-bold uppercase text-gray-500",children:c}),(0,l.jsxs)("button",{className:"text-gray-400",onClick:()=>t(e=>e.add(1,"month")),children:[(0,l.jsx)(i.dj,{}),(0,l.jsx)("span",{className:"sr-only",children:"Go to next month"})]})]}),(0,l.jsx)("div",{className:"flex justify-between px-3 py-2",children:"SMTWTFS".split("").map((e,s)=>(0,l.jsx)("div",{className:"flex h-9 w-9 items-center justify-center",children:e},s))}),(0,l.jsx)("div",{className:"flex flex-col gap-3 px-3 py-2",children:x.map((e,t)=>(0,l.jsx)("div",{className:"flex justify-between",children:e.map((e,t)=>{let n=null!==e&&a(s.date(e)),r=e===d.date()&&s.month()===d.month()&&s.year()===d.year();return(0,l.jsx)("div",{className:["flex h-9 w-9 items-center justify-center rounded-full",n?"bg-orange-400 text-white":r?"bg-gray-300 text-gray-600":""].join(" "),children:e},t)})},t))})]})}},1895:function(e,s,t){"use strict";t.d(s,{W:function(){return a}});var l=t(5893);let a=e=>{let{language:s,width:t=84}=e;return(0,l.jsx)("svg",{viewBox:s.viewBox,style:{height:19.3171/24*t,width:t},children:(0,l.jsx)("image",{height:3168,href:"/_next/static/media/flags.1f5c86a8.svg",width:82})})}},1176:function(e,s,t){"use strict";t.d(s,{D:function(){return j}});var l=t(5893),a=t(7484),n=t.n(a),r=t(1664),i=t.n(r),c=t(7294),o=t(1017),d=t(1138),x=t(1895),h=t(9469);let f=e=>(0,l.jsx)("svg",{width:"25",height:"30",viewBox:"0 0 25 30",fill:"none",...e,children:(0,l.jsx)("g",{opacity:"0.2",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.9697 2.91035C13.2187 1.96348 11.7813 1.96348 11.0303 2.91035L7.26148 7.66176L4.83362 6.36218C4.61346 6.24433 4.1221 6.09629 3.88966 6.05712C2.72329 5.86056 2.04098 6.78497 2.04447 8.03807L2.06814 16.5554C2.02313 16.9355 2 17.322 2 17.7137C2 23.2979 6.70101 27.8248 12.5 27.8248C18.299 27.8248 23 23.2979 23 17.7137C23 15.3518 22.1591 13.1791 20.7498 11.4581L13.9697 2.91035ZM11.7198 13.1888C12.0889 12.6861 12.8399 12.6861 13.209 13.1888L15.7324 16.6249C16.5171 17.4048 17 18.4679 17 19.6396C17 22.0329 14.9853 23.973 12.5 23.973C10.0147 23.973 8 22.0329 8 19.6396C8 18.6017 8.37893 17.649 9.01085 16.9029C9.0252 16.8668 9.04457 16.8315 9.06935 16.7978L11.7198 13.1888Z",fill:"black"})})}),u=e=>(0,l.jsx)("svg",{width:"24",height:"30",viewBox:"0 0 24 30",fill:"none",...e,children:(0,l.jsx)("g",{opacity:"0.2",children:(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.63705 7.31556C2.62104 7.92872 2 9.02888 2 10.2156V19.8818C2 21.0685 2.62104 22.1687 3.63705 22.7819L10.1117 26.6893C11.1881 27.3389 12.5356 27.3389 13.612 26.6894L20.087 22.7818C21.1031 22.1687 21.7241 21.0685 21.7241 19.8818V10.2156C21.7241 9.0289 21.1031 7.92872 20.087 7.31557L13.612 3.40806C12.5356 2.7585 11.1881 2.75851 10.1117 3.40809L3.63705 7.31556ZM11.8902 6.37281C11.8902 5.52831 10.9645 5.01055 10.2449 5.45256L4.91163 8.72852C4.24944 9.13527 4.22068 10.0873 4.85711 10.5332L7.24315 12.2053C7.59354 12.4508 8.05585 12.4663 8.42194 12.2449L11.3692 10.462C11.6926 10.2664 11.8902 9.91591 11.8902 9.53794V6.37281Z",fill:"black"})})}),m=e=>(0,l.jsx)("svg",{width:"36",height:"29",viewBox:"0 0 36 29",...e,children:(0,l.jsx)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,l.jsxs)("g",{stroke:"#AFAFAF",children:[(0,l.jsx)("path",{d:"M7.743 3c-1.67 0-2.315.125-2.98.48A3.071 3.071 0 0 0 3.48 4.763c-.355.665-.48 1.31-.48 2.98v13.514c0 1.67.125 2.315.48 2.98.297.555.728.986 1.283 1.283.665.355 1.31.48 2.98.48h20.514c1.67 0 2.315-.125 2.98-.48a3.071 3.071 0 0 0 1.283-1.283c.355-.665.48-1.31.48-2.98V7.743c0-1.67-.125-2.315-.48-2.98a3.071 3.071 0 0 0-1.283-1.283c-.665-.355-1.31-.48-2.98-.48H7.743z",strokeWidth:"2"}),(0,l.jsx)("g",{strokeLinecap:"round",strokeWidth:"3",children:(0,l.jsx)("path",{d:"M18 10v9M13.5 14.5h9"})})]})})}),j=e=>{let{backgroundColor:s="bg-[#58cc02]",borderColor:t="border-[#46a302]"}=e,[a,r]=(0,c.useState)("HIDDEN"),[j,g]=(0,c.useState)(n()()),p=(0,o.w)(e=>e.streak),N=(0,o.w)(e=>e.lingots),b=(0,o.w)(e=>e.language);return(0,l.jsx)("header",{className:"fixed z-20 h-[58px] w-full",children:(0,l.jsxs)("div",{className:"relative flex h-full w-full items-center justify-between border-b-2 px-[10px] transition duration-500 sm:hidden ".concat(t," ").concat(s),children:[(0,l.jsxs)("button",{onClick:()=>r(e=>"LANGUAGES"===e?"HIDDEN":"LANGUAGES"),children:[(0,l.jsx)(x.W,{language:b,width:45}),(0,l.jsx)("span",{className:"sr-only",children:"See languages"})]}),(0,l.jsxs)("button",{className:"flex items-center gap-2 font-bold text-white",onClick:()=>r(e=>"STREAK"===e?"HIDDEN":"STREAK"),"aria-label":"Toggle streak menu",children:[p>0?(0,l.jsx)(h.Zr,{}):(0,l.jsx)(f,{})," ",(0,l.jsx)("span",{className:p>0?"text-white":"text-black opacity-20",children:p})]}),(0,l.jsxs)("button",{className:"flex items-center gap-2 font-bold",onClick:()=>r(e=>"GEMS"===e?"HIDDEN":"GEMS"),"aria-label":"Toggle lingot menu",children:[N>0?(0,l.jsx)(h.LW,{}):(0,l.jsx)(u,{})," ",(0,l.jsx)("span",{className:N>0?"text-white":"text-black opacity-20",children:N})]}),(0,l.jsx)(h.wi,{onClick:()=>r(e=>"MORE"===e?"HIDDEN":"MORE"),role:"button",tabIndex:0,"aria-label":"Toggle more menu"}),(0,l.jsxs)("div",{className:["absolute left-0 right-0 top-full bg-white transition duration-300","HIDDEN"===a?"opacity-0":"opacity-100"].join(" "),"aria-hidden":"HIDDEN"===a,children:[(()=>{switch(a){case"LANGUAGES":return(0,l.jsxs)("div",{className:"flex gap-5 p-5",children:[(0,l.jsxs)("div",{className:"flex flex-col items-center justify-between gap-2",children:[(0,l.jsx)("div",{className:"rounded-2xl border-4 border-blue-400",children:(0,l.jsx)(x.W,{language:b,width:80})}),(0,l.jsx)("span",{className:"font-bold",children:b.name})]}),(0,l.jsxs)(i(),{className:"flex flex-col items-center justify-between gap-2",href:"/register",children:[(0,l.jsx)("div",{className:"rounded-2xl border-4 border-white",children:(0,l.jsx)(m,{className:"h-16 w-20"})}),(0,l.jsx)("span",{className:"font-bold text-gray-400",children:"Courses"})]})]});case"STREAK":return(0,l.jsxs)("div",{className:"flex grow flex-col items-center gap-3 p-5",children:[(0,l.jsx)("h2",{className:"text-xl font-bold",children:"Streak"}),(0,l.jsx)("p",{className:"text-sm text-gray-400",children:"Practice each day so your streak won't reset!"}),(0,l.jsx)("div",{className:"self-stretch",children:(0,l.jsx)(d.f,{now:j,setNow:g})})]});case"GEMS":return(0,l.jsxs)("div",{className:"flex grow items-center gap-3 p-5",children:[(0,l.jsx)(h.i8,{className:"h-24 w-24"}),(0,l.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,l.jsx)("h2",{className:"text-xl font-bold text-black",children:"Lingots"}),(0,l.jsxs)("p",{className:"text-sm font-normal text-gray-400",children:["You have ",N," ",1===N?"lingot":"lingots","."]}),(0,l.jsx)(i(),{className:"font-bold uppercase text-blue-400 transition hover:brightness-110",href:"/shop",children:"Go to shop"})]})]});case"MORE":return(0,l.jsxs)("div",{className:"flex grow flex-col",children:[(0,l.jsxs)(i(),{className:"flex items-center gap-2 p-2 font-bold text-gray-700",href:"https://podcast.duolingo.com",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)(h.Df,{className:"h-10 w-10"}),"Podcast"]}),(0,l.jsxs)(i(),{className:"flex items-center gap-2 border-t-2 border-gray-300 p-2 font-bold text-gray-700",href:"https://schools.duolingo.com",target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)(h.tL,{className:"h-10 w-10"}),"Schools"]})]});case"HIDDEN":return null}})(),(0,l.jsx)("div",{className:["absolute left-0 top-full h-screen w-screen bg-black opacity-30","HIDDEN"===a?"pointer-events-none":""].join(" "),onClick:()=>r("HIDDEN"),"aria-label":"Hide menu",role:"button"})]})]})})}},1163:function(e,s,t){e.exports=t(3079)}}]);
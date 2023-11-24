import{T as g,k as y,o as n,e as d,b as e,u as t,w as o,F as h,Z as p,f as _,a as s,n as x,g as r,j as u,i as k}from"./app-20222a63.js";import{A as v}from"./AuthenticationCard-0ec1421e.js";import{_ as b}from"./AuthenticationCardLogo-1a6330fc.js";import{_ as w}from"./PrimaryButton-d2e0a71e.js";import"./_plugin-vue_export-helper-c27b6911.js";const V=s("div",{class:"mb-4 text-sm text-gray-600 dark:text-gray-400"}," Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600 dark:text-green-400"},B=["onSubmit"],C={class:"mt-4 flex items-center justify-between"},T={__name:"VerifyEmail",props:{status:String},setup(f){const c=f,i=g({}),l=()=>{i.post(route("verification.send"))},m=y(()=>c.status==="verification-link-sent");return(a,N)=>(n(),d(h,null,[e(t(p),{title:"Email Verification"}),e(v,null,{logo:o(()=>[e(b)]),default:o(()=>[V,m.value?(n(),d("div",E," A new verification link has been sent to the email address you provided in your profile settings. ")):_("",!0),s("form",{onSubmit:k(l,["prevent"])},[s("div",C,[e(w,{class:x({"opacity-25":t(i).processing}),disabled:t(i).processing},{default:o(()=>[r(" Resend Verification Email ")]),_:1},8,["class","disabled"]),s("div",null,[e(t(u),{href:a.route("profile.show"),class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"},{default:o(()=>[r(" Edit Profile")]),_:1},8,["href"]),e(t(u),{href:a.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800 ms-2"},{default:o(()=>[r(" Log Out ")]),_:1},8,["href"])])])],40,B)]),_:1})],64))}};export{T as default};

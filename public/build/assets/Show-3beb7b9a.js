import{_ as c}from"./AppLayout-14a66326.js";import p from"./DeleteUserForm-2e631cf6.js";import l from"./LogoutOtherBrowserSessionsForm-2e0d1309.js";import{S as s}from"./SectionBorder-63d512ad.js";import f from"./TwoFactorAuthenticationForm-811e25b0.js";import u from"./UpdatePasswordForm-0f0fa4a9.js";import d from"./UpdateProfileInformationForm-38219b4d.js";import{o,c as _,w as n,a as i,e as r,b as t,f as a,F as h}from"./app-20222a63.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./DialogModal-97b4f00b.js";import"./SectionTitle-9d10da4c.js";import"./DangerButton-1964903a.js";import"./TextInput-bd2021ac.js";import"./SecondaryButton-d47ad54b.js";import"./ActionMessage-77ea9a58.js";import"./PrimaryButton-d2e0a71e.js";import"./InputLabel-aa315958.js";import"./FormSection-ded34392.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},y={key:2},z={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,x)=>(o(),_(c,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",y,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(p,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{z as default};

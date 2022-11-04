"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[205],{47236:function(e,s,c){var t=c(74165),n=c(15861),a=c(15671),i=c(43144),r=c(70211),l=c(24500),d=c(69334),o=c(5202),u=c(783),b=function(){function e(){(0,a.Z)(this,e)}return(0,i.Z)(e,null,[{key:"RegisterUser",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(s){var c,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.postRequest("/Auth/RegisterUser",s);case 2:if(c=e.sent,!(n=c.data)){e.next=7;break}return r.Z.successMessage(null===n||void 0===n?void 0:n.message),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()},{key:"LoginUser",value:function(){var e=(0,n.Z)((0,t.Z)().mark((function e(s){var c,n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.postRequest("/Auth/LoginUser",s);case 2:c=e.sent,(n=c.data)&&(o.Z.dispatch((0,l.bo)(null===n||void 0===n?void 0:n.AccessToken)),o.Z.dispatch((0,d.Ky)(null===n||void 0===n?void 0:n.UserDetails)),r.Z.successMessage("User Login Successfull"));case 5:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}()}]),e}();s.Z=b},14824:function(e,s,c){var t=c(72791),n=c(47022),a=c(89743),i=c(2677),r=c(19089),l=c(11087),d=c(33168),o=c(74427),u=c(80184);s.Z=function(e){var s=e.bottomLinks,c=e.children,b=(0,d.$)().t;return(0,t.useEffect)((function(){return document.body&&document.body.classList.add("authentication-bg"),function(){document.body&&document.body.classList.remove("authentication-bg")}}),[]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"account-pages pt-2 pt-sm-5 pb-4 pb-sm-5",children:(0,u.jsx)(n.Z,{children:(0,u.jsx)(a.Z,{className:"justify-content-center",children:(0,u.jsxs)(i.Z,{md:8,lg:6,xl:5,children:[(0,u.jsxs)(r.Z,{children:[(0,u.jsx)(r.Z.Header,{className:"pt-4 pb-4 text-center bg-primary",children:(0,u.jsx)(l.rU,{to:"/",children:(0,u.jsx)("span",{children:(0,u.jsx)("img",{src:o,alt:"",height:"18"})})})}),(0,u.jsx)(r.Z.Body,{className:"p-4",children:c})]}),s]})})})}),(0,u.jsx)("footer",{className:"footer footer-alt",children:b("2010 - 2022 \xa9 Glossy - Glossyit.com")})]})}},93205:function(e,s,c){c.r(s);var t=c(89743),n=c(2677),a=c(43360),i=c(11087),r=c(62797),l=c(33168),d=c(61543),o=c(14824),u=c(47236),b=c(80184),h=function(){var e=(0,l.$)().t;return(0,b.jsx)(t.Z,{className:"mt-3",children:(0,b.jsx)(n.Z,{className:"text-center",children:(0,b.jsxs)("p",{className:"text-muted",children:[e("Don't have an account?")," ",(0,b.jsx)(i.rU,{to:"/account/register",className:"text-muted ms-1",children:(0,b.jsx)("b",{children:e("Sign Up")})})]})})})};s.default=function(){var e=(0,l.$)().t,s=r.Ry().shape({Email:r.Z_().required(e("Please enter Email")),Password:r.Z_().required(e("Please enter Password"))});return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(o.Z,{bottomLinks:(0,b.jsx)(h,{}),children:[(0,b.jsxs)("div",{className:"text-center w-75 m-auto",children:[(0,b.jsx)("h4",{className:"text-dark-50 text-center mt-0 fw-bold",children:e("Sign In")}),(0,b.jsx)("p",{className:"text-muted mb-4",children:e("Enter your email address and password to access admin panel.")})]}),(0,b.jsxs)(d.J,{onSubmit:function(e){u.Z.LoginUser(e)},validationSchema:s,defaultValues:{Email:"",Password:""},children:[(0,b.jsx)(d.y,{label:e("Email"),type:"email",name:"Email",placeholder:e("Enter your Email"),containerClass:"mb-3"}),(0,b.jsx)(d.y,{label:e("Password"),type:"password",name:"Password",placeholder:e("Enter your Password"),containerClass:"mb-3",children:(0,b.jsx)(i.rU,{to:"/account/forget-password",className:"text-muted float-end",children:(0,b.jsx)("small",{children:e("Forgot your password?")})})}),(0,b.jsx)("div",{className:"mb-3 mb-0 text-center",children:(0,b.jsx)(a.Z,{variant:"primary",type:"submit",disabled:!1,children:e("Log In")})})]})]})})}},74427:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWEAAAAkCAYAAABYHYu8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFvWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNy4yLWMwMDAgNzkuMWI2NWE3OSwgMjAyMi8wNi8xMy0xNzo0NjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDUzUgV2luZG93cyIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMTAtMjVUMDk6NDY6MDQrMDY6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTEwLTI1VDEwOjA5OjI4KzA2OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTEwLTI1VDEwOjA5OjI4KzA2OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjA3OGU5ZjRlLWU2ZGYtZGY0YS05MzllLWU0Y2IzNDUzYTQ3YiIgeG1wTU06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"}}]);
//# sourceMappingURL=205.8c77339c.chunk.js.map
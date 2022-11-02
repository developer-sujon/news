"use strict";(self.webpackChunkfresh_app=self.webpackChunkfresh_app||[]).push([[488],{98864:function(e,a,t){var n=t(74165),r=t(15861),s=t(15671),u=t(43144),c=t(70211),i=t(49922),l=t(5202),o=t(783),f=function(){function e(){(0,s.Z)(this,e)}return(0,u.Z)(e,null,[{key:"TagCreate",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a){var t,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.postRequest("/Tag/TagCreate",a);case 2:if(t=e.sent,r=t.data,console.log(r),!r){e.next=9;break}return l.Z.dispatch((0,i.gO)()),c.Z.successMessage("Tag Create Successful"),e.abrupt("return",!0);case 9:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"TagList",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a,t,r){var s,u,c,f,d,g;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Tag/TagList/".concat(a,"/").concat(t,"/").concat(r));case 2:s=e.sent,(u=s.data)&&(l.Z.dispatch((0,i.gO)()),g=null===u||void 0===u||null===(c=u[0])||void 0===c||null===(f=c.Total[0])||void 0===f?void 0:f.count,l.Z.dispatch((0,i.l0)(null===u||void 0===u||null===(d=u[0])||void 0===d?void 0:d.Data)),l.Z.dispatch((0,i.aq)(g||0)));case 5:case"end":return e.stop()}}),e)})));return function(a,t,n){return e.apply(this,arguments)}}()},{key:"TagDropDown",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var a,t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Tag/TagDropDown");case 2:a=e.sent,(t=a.data)&&l.Z.dispatch((0,i.uA)(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"TagDetails",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a,t){var r,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.getRequest("/Tag/TagDetails/".concat(a));case 2:if(r=e.sent,!(s=r.data)){e.next=7;break}return l.Z.dispatch((0,i.cA)(null===s||void 0===s?void 0:s[0])),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"TagUpdate",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a,t){var r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.updateRequest("/Tag/TagUpdate/".concat(a),t);case 2:if(r=e.sent,!r.data){e.next=8;break}return l.Z.dispatch((0,i.gO)()),c.Z.successMessage("Tag Update Successful"),e.abrupt("return",!0);case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},{key:"TagDelete",value:function(){var e=(0,r.Z)((0,n.Z)().mark((function e(a){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.deleteRequest("/Tag/TagDelete/".concat(a));case 2:if(t=e.sent,!t.data){e.next=7;break}return c.Z.successMessage("Tag Delete Successful"),e.abrupt("return",!0);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}]),e}();a.Z=f},70550:function(e,a,t){t(72791);var n=t(89743),r=t(2677),s=t(2461),u=t(80184);a.Z=function(e){return(0,u.jsx)(n.Z,{children:(0,u.jsx)(r.Z,{children:(0,u.jsxs)("div",{className:"page-title-box",children:[(0,u.jsx)("div",{className:"page-title-right",children:(0,u.jsxs)(s.Z,{listProps:{className:"m-0"},children:[(0,u.jsx)(s.Z.Item,{href:"/dashboard",children:"Dashboard"}),e.breadCrumbItems.map((function(e,a){return e.active?(0,u.jsx)(s.Z.Item,{active:!0,children:e.label},a):(0,u.jsx)(s.Z.Item,{href:e.path,children:e.label},a)}))]})}),(0,u.jsx)("h4",{className:"page-title",children:e.title})]})})})}},27488:function(e,a,t){t.r(a);var n=t(29439),r=t(59434),s=t(72791),u=t(89743),c=t(2677),i=t(19089),l=t(43360),o=t(62797),f=t(33168),d=t(57689),g=t(70550),p=t(61543),v=t(98864),Z=t(80184);a.default=function(){var e=(0,s.useState)(0),a=(0,n.Z)(e,2),t=a[0],h=a[1],m=(0,f.$)().t,T=(0,r.v9)((function(e){return e.Tag})).TagDetails,x=(0,d.s0)();(0,s.useEffect)((function(){var e=new URLSearchParams(window.location.search).get("id");null!==e&&(v.Z.TagDetails(e),h(e))}),[]);var b=o.Ry().shape({TagName:o.Z_().required("Please Enter Tag Name"),TagSlug:o.Z_().required("Please Enter Tag Slug")});return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(g.Z,{breadCrumbItems:[{label:"Tag",path:"/tag/tag-list"},{label:t?"Update Tag":"Create Tag",path:"/tag/tag-list",active:!0}],title:t?"Update Tag":"Create Tag"}),(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(i.Z,{children:(0,Z.jsx)(i.Z.Body,{children:(0,Z.jsx)(u.Z,{children:(0,Z.jsx)(c.Z,{children:(0,Z.jsxs)(p.J,{onSubmit:function(e){t?v.Z.TagUpdate(t,{TagName:e.TagName,TagSlug:e.TagSlug,TagDetails:e.TagDetails,TagStatus:e.TagStatus}).then((function(e){e&&x("/tag/tag-list")})):v.Z.TagCreate({TagName:e.TagName,TagSlug:e.TagSlug,TagDetails:e.TagDetails,TagStatus:e.TagStatus}).then((function(e){console.log(e),e&&x("/tag/tag-list")}))},validationSchema:b,defaultValues:T,children:[(0,Z.jsx)(u.Z,{children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(p.y,{name:"TagName",label:m("Tag Name"),placeholder:m("Enter Tag Name"),containerClass:"mb-3"}),(0,Z.jsx)(p.y,{name:"TagSlug",label:m("Tag Slug"),placeholder:m("Enter Tag Slug"),containerClass:"mb-3"}),(0,Z.jsx)(p.y,{name:"TagDetails",label:m("Tag Details"),placeholder:m("Enter Tag Details"),containerClass:"mb-3",type:"simple-rich-edior"}),(0,Z.jsx)(p.y,{name:"TagStatus",label:m("Tag Status"),placeholder:m("Enter Tag Status"),containerClass:"mb-3",type:"checkbox"})]})}),(0,Z.jsx)(u.Z,{className:"mt-2",children:(0,Z.jsx)(c.Z,{children:(0,Z.jsx)(l.Z,{type:"submit",variant:"success",children:t?"Update Tag":"Add Tag"})})})]})})})})})})})]})}},28633:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(72791);function r(){return(0,n.useState)(null)}},47904:function(e,a,t){var n=t(72791);a.Z=function(e){var a=(0,n.useRef)(e);return(0,n.useEffect)((function(){a.current=e}),[e]),a}},39007:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(72791),r=t(47904);function s(e){var a=(0,r.Z)(e);return(0,n.useCallback)((function(){return a.current&&a.current.apply(a,arguments)}),[a])}},79392:function(e,a,t){t.d(a,{Z:function(){return s}});var n=t(72791),r=t(39007);function s(e,a,t,s){void 0===s&&(s=!1);var u=(0,r.Z)(t);(0,n.useEffect)((function(){var t="function"===typeof e?e():e;return t.addEventListener(a,u,s),function(){return t.removeEventListener(a,u,s)}}),[e])}},49815:function(e,a,t){var n=t(72791),r="undefined"!==typeof t.g&&t.g.navigator&&"ReactNative"===t.g.navigator.product,s="undefined"!==typeof document;a.Z=s||r?n.useLayoutEffect:n.useEffect},55746:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(72791);function r(){var e=(0,n.useRef)(!0),a=(0,n.useRef)((function(){return e.current}));return(0,n.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),a.current}},52803:function(e,a,t){t.d(a,{Z:function(){return r}});var n=t(72791);function r(e){var a=(0,n.useRef)(null);return(0,n.useEffect)((function(){a.current=e})),a.current}},16445:function(e,a,t){t.d(a,{Z:function(){return o}});var n=t(29439),r=t(72791),s=(t(28633),t(47904),t(39007));t(79392);t(55746),t(52803);t(49815),new WeakMap;var u=t(15341),c=t(80184),i=["onKeyDown"];var l=r.forwardRef((function(e,a){var t,r=e.onKeyDown,l=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i),o=(0,u.FT)(Object.assign({tagName:"a"},l)),f=(0,n.Z)(o,1)[0],d=(0,s.Z)((function(e){f.onKeyDown(e),null==r||r(e)}));return(t=l.href)&&"#"!==t.trim()&&"button"!==l.role?(0,c.jsx)("a",Object.assign({ref:a},l,{onKeyDown:r})):(0,c.jsx)("a",Object.assign({ref:a},l,f,{onKeyDown:d}))}));l.displayName="Anchor";var o=l},2461:function(e,a,t){t.d(a,{Z:function(){return Z}});var n=t(1413),r=t(45987),s=t(81694),u=t.n(s),c=t(72791),i=t(10162),l=t(16445),o=t(80184),f=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],d=c.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,c=e.children,d=e.className,g=e.as,p=void 0===g?"li":g,v=e.linkAs,Z=void 0===v?l.Z:v,h=e.linkProps,m=e.href,T=e.title,x=e.target,b=(0,r.Z)(e,f),j=(0,i.vE)(t,"breadcrumb-item");return(0,o.jsx)(p,(0,n.Z)((0,n.Z)({ref:a},b),{},{className:u()(j,d,{active:s}),"aria-current":s?"page":void 0,children:s?c:(0,o.jsx)(Z,(0,n.Z)((0,n.Z)({},h),{},{href:m,title:T,target:x,children:c}))}))}));d.displayName="BreadcrumbItem",d.defaultProps={active:!1,linkProps:{}};var g=d,p=["bsPrefix","className","listProps","children","label","as"],v=c.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.listProps,l=e.children,f=e.label,d=e.as,g=void 0===d?"nav":d,v=(0,r.Z)(e,p),Z=(0,i.vE)(t,"breadcrumb");return(0,o.jsx)(g,(0,n.Z)((0,n.Z)({"aria-label":f,className:s,ref:a},v),{},{children:(0,o.jsx)("ol",(0,n.Z)((0,n.Z)({},c),{},{className:u()(Z,null==c?void 0:c.className),children:l}))}))}));v.displayName="Breadcrumb",v.defaultProps={label:"breadcrumb",listProps:{}};var Z=Object.assign(v,{Item:g})}}]);
//# sourceMappingURL=488.858edbb0.chunk.js.map
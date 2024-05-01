import{r as a}from"./react-e483b31d.js";import{i as f,g as U,r as O,j as y,p as L,m as T,A as M,s as w,a as k}from"./@remix-run-dd360fb4.js";/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function R(){return R=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},R.apply(this,arguments)}const I=a.createContext(null),z=a.createContext(null),E=a.createContext(null),b=a.createContext(null),v=a.createContext({outlet:null,matches:[],isDataRoute:!1}),j=a.createContext(null);function le(t,e){let{relative:r}=e===void 0?{}:e;x()||f(!1);let{basename:n,navigator:l}=a.useContext(E),{hash:o,pathname:s,search:u}=W(t,{relative:r}),i=s;return n!=="/"&&(i=s==="/"?n:y([n,s])),l.createHref({pathname:i,search:u,hash:o})}function x(){return a.useContext(b)!=null}function N(){return x()||f(!1),a.useContext(b).location}function J(t){a.useContext(E).static||a.useLayoutEffect(t)}function _(){let{isDataRoute:t}=a.useContext(v);return t?re():A()}function A(){x()||f(!1);let t=a.useContext(I),{basename:e,navigator:r}=a.useContext(E),{matches:n}=a.useContext(v),{pathname:l}=N(),o=JSON.stringify(U(n).map(i=>i.pathnameBase)),s=a.useRef(!1);return J(()=>{s.current=!0}),a.useCallback(function(i,c){if(c===void 0&&(c={}),!s.current)return;if(typeof i=="number"){r.go(i);return}let d=O(i,JSON.parse(o),l,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:y([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,l,t])}const D=a.createContext(null);function ie(){return a.useContext(D)}function V(t){let e=a.useContext(v).outlet;return e&&a.createElement(D.Provider,{value:t},e)}function se(){let{matches:t}=a.useContext(v),e=t[t.length-1];return e?e.params:{}}function W(t,e){let{relative:r}=e===void 0?{}:e,{matches:n}=a.useContext(v),{pathname:l}=N(),o=JSON.stringify(U(n).map(s=>s.pathnameBase));return a.useMemo(()=>O(t,JSON.parse(o),l,r==="path"),[t,o,l,r])}function q(t,e){return G(t,e)}function G(t,e,r){x()||f(!1);let{navigator:n}=a.useContext(E),{matches:l}=a.useContext(v),o=l[l.length-1],s=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let i=N(),c;if(e){var d;let p=typeof e=="string"?L(e):e;u==="/"||(d=p.pathname)!=null&&d.startsWith(u)||f(!1),c=p}else c=i;let m=c.pathname||"/",C=u==="/"?m:m.slice(u.length)||"/",g=T(t,{pathname:C}),h=Z(g&&g.map(p=>Object.assign({},p,{params:Object.assign({},s,p.params),pathname:y([u,n.encodeLocation?n.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?u:y([u,n.encodeLocation?n.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),l,r);return e&&h?a.createElement(b.Provider,{value:{location:R({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:M.Pop}},h):h}function K(){let t=te(),e=k(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return a.createElement(a.Fragment,null,a.createElement("h2",null,"Unexpected Application Error!"),a.createElement("h3",{style:{fontStyle:"italic"}},e),r?a.createElement("pre",{style:l},r):null,o)}const Q=a.createElement(K,null);class X extends a.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,r){return r.location!==e.location||r.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||r.error,location:r.location,revalidation:e.revalidation||r.revalidation}}componentDidCatch(e,r){console.error("React Router caught the following error during render",e,r)}render(){return this.state.error?a.createElement(v.Provider,{value:this.props.routeContext},a.createElement(j.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Y(t){let{routeContext:e,match:r,children:n}=t,l=a.useContext(I);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),a.createElement(v.Provider,{value:e},n)}function Z(t,e,r){var n;if(e===void 0&&(e=[]),r===void 0&&(r=null),t==null){var l;if((l=r)!=null&&l.errors)t=r.matches;else return null}let o=t,s=(n=r)==null?void 0:n.errors;if(s!=null){let u=o.findIndex(i=>i.route.id&&(s==null?void 0:s[i.route.id]));u>=0||f(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight((u,i,c)=>{let d=i.route.id?s==null?void 0:s[i.route.id]:null,m=null;r&&(m=i.route.errorElement||Q);let C=e.concat(o.slice(0,c+1)),g=()=>{let h;return d?h=m:i.route.Component?h=a.createElement(i.route.Component,null):i.route.element?h=i.route.element:h=u,a.createElement(Y,{match:i,routeContext:{outlet:u,matches:C,isDataRoute:r!=null},children:h})};return r&&(i.route.ErrorBoundary||i.route.errorElement||c===0)?a.createElement(X,{location:r.location,revalidation:r.revalidation,component:m,error:d,children:g(),routeContext:{outlet:null,matches:C,isDataRoute:!0}}):g()},null)}var F=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(F||{}),P=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(P||{});function $(t){let e=a.useContext(I);return e||f(!1),e}function H(t){let e=a.useContext(z);return e||f(!1),e}function ee(t){let e=a.useContext(v);return e||f(!1),e}function S(t){let e=ee(),r=e.matches[e.matches.length-1];return r.route.id||f(!1),r.route.id}function te(){var t;let e=a.useContext(j),r=H(P.UseRouteError),n=S(P.UseRouteError);return e||((t=r.errors)==null?void 0:t[n])}function re(){let{router:t}=$(F.UseNavigateStable),e=S(P.UseNavigateStable),r=a.useRef(!1);return J(()=>{r.current=!0}),a.useCallback(function(l,o){o===void 0&&(o={}),r.current&&(typeof l=="number"?t.navigate(l):t.navigate(l,R({fromRouteId:e},o)))},[t,e])}function ue(t){let{to:e,replace:r,state:n,relative:l}=t;x()||f(!1);let{matches:o}=a.useContext(v),{pathname:s}=N(),u=_(),i=O(e,U(o).map(d=>d.pathnameBase),s,l==="path"),c=JSON.stringify(i);return a.useEffect(()=>u(JSON.parse(c),{replace:r,state:n,relative:l}),[u,c,l,r,n]),null}function ce(t){return V(t.context)}function ne(t){f(!1)}function de(t){let{basename:e="/",children:r=null,location:n,navigationType:l=M.Pop,navigator:o,static:s=!1}=t;x()&&f(!1);let u=e.replace(/^\/*/,"/"),i=a.useMemo(()=>({basename:u,navigator:o,static:s}),[u,o,s]);typeof n=="string"&&(n=L(n));let{pathname:c="/",search:d="",hash:m="",state:C=null,key:g="default"}=n,h=a.useMemo(()=>{let p=w(c,u);return p==null?null:{location:{pathname:p,search:d,hash:m,state:C,key:g},navigationType:l}},[u,c,d,m,C,g,l]);return h==null?null:a.createElement(E.Provider,{value:i},a.createElement(b.Provider,{children:r,value:h}))}function fe(t){let{children:e,location:r}=t;return q(B(e),r)}new Promise(()=>{});function B(t,e){e===void 0&&(e=[]);let r=[];return a.Children.forEach(t,(n,l)=>{if(!a.isValidElement(n))return;let o=[...e,l];if(n.type===a.Fragment){r.push.apply(r,B(n.props.children,o));return}n.type!==ne&&f(!1),!n.props.index||!n.props.children||f(!1);let s={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=B(n.props.children,o)),r.push(s)}),r}export{E as N,ce as O,de as R,_ as a,N as b,W as c,ue as d,se as e,ne as f,ie as g,fe as h,le as u};

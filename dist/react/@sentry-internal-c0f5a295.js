import{G as le,g as I,l as T,a as ge,b as R,h as Y,c as x,d as te,e as ne,f as re,i as ie,j as A,k as X,B as O,S as me,s as Te,m as he,t as Ee,n as j,o as Se,T as be}from"./@sentry-71948bea.js";const p=le;function ve(){p&&p.document?p.document.addEventListener("visibilitychange",()=>{const e=I();if(p.document.hidden&&e){const t="cancelled";(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log(`[Tracing] Transaction: ${t} -> since tab moved to the background, op: ${e.op}`),e.status||e.setStatus(t),e.setTag("visibilitychange","document.hidden"),e.finish()}}):(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.warn("[Tracing] Could not set up background tab detection due to lack of global document")}const M=(e,t,n)=>{let r,i;return o=>{t.value>=0&&(o||n)&&(i=t.value-(r||0),(i||r===void 0)&&(r=t.value,t.delta=i,e(t)))}},Re=()=>`v3-${Date.now()}-${Math.floor(Math.random()*(9e12-1))+1e12}`,ye=()=>{const e=p.performance.timing,t=p.performance.navigation.type,n={entryType:"navigation",startTime:0,type:t==2?"back_forward":t===1?"reload":"navigate"};for(const r in e)r!=="navigationStart"&&r!=="toJSON"&&(n[r]=Math.max(e[r]-e.navigationStart,0));return n},ae=()=>p.__WEB_VITALS_POLYFILL__?p.performance&&(performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]||ye()):p.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0],se=()=>{const e=ae();return e&&e.activationStart||0},$=(e,t)=>{const n=ae();let r="navigate";return n&&(p.document.prerendering||se()>0?r="prerender":r=n.type.replace(/_/g,"-")),{name:e,value:typeof t>"u"?-1:t,rating:"good",delta:0,entries:[],id:Re(),navigationType:r}},L=(e,t,n)=>{try{if(PerformanceObserver.supportedEntryTypes.includes(e)){const r=new PerformanceObserver(i=>{t(i.getEntries())});return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch{}},U=(e,t)=>{const n=r=>{(r.type==="pagehide"||p.document.visibilityState==="hidden")&&(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},Be=e=>{const t=$("CLS",0);let n,r=0,i=[];const o=s=>{s.forEach(u=>{if(!u.hadRecentInput){const l=i[0],c=i[i.length-1];r&&i.length!==0&&u.startTime-c.startTime<1e3&&u.startTime-l.startTime<5e3?(r+=u.value,i.push(u)):(r=u.value,i=[u]),r>t.value&&(t.value=r,t.entries=i,n&&n())}})},a=L("layout-shift",o);if(a){n=M(e,t);const s=()=>{o(a.takeRecords()),n(!0)};return U(s),s}};let G=-1;const Ce=()=>p.document.visibilityState==="hidden"&&!p.document.prerendering?0:1/0,Ne=()=>{U(({timeStamp:e})=>{G=e},!0)},W=()=>(G<0&&(G=Ce(),Ne()),{get firstHiddenTime(){return G}}),De=e=>{const t=W(),n=$("FID");let r;const i=s=>{s.startTime<t.firstHiddenTime&&(n.value=s.processingStart-s.startTime,n.entries.push(s),r(!0))},o=s=>{s.forEach(i)},a=L("first-input",o);r=M(e,n),a&&U(()=>{o(a.takeRecords()),a.disconnect()},!0)},J={},ke=e=>{const t=W(),n=$("LCP");let r;const i=a=>{const s=a[a.length-1];if(s){const u=Math.max(s.startTime-se(),0);u<t.firstHiddenTime&&(n.value=u,n.entries=[s],r())}},o=L("largest-contentful-paint",i);if(o){r=M(e,n);const a=()=>{J[n.id]||(i(o.takeRecords()),o.disconnect(),J[n.id]=!0,r(!0))};return["keydown","click"].forEach(s=>{addEventListener(s,a,{once:!0,capture:!0})}),U(a,!0),a}},N={},H={};let oe,ce,ue;function Ge(e){return V("cls",e,Le,oe)}function He(e){return V("lcp",e,we,ue)}function Ie(e){return V("fid",e,Ue,ce)}function z(e,t){return de(e,t),H[e]||(Pe(e),H[e]=!0),fe(e,t)}function w(e,t){const n=N[e];if(!(!n||!n.length))for(const r of n)try{r(t)}catch(i){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.error(`Error while triggering instrumentation handler.
Type: ${e}
Name: ${ge(r)}
Error:`,i)}}function Le(){Be(e=>{w("cls",{metric:e}),oe=e})}function Ue(){De(e=>{w("fid",{metric:e}),ce=e})}function we(){ke(e=>{w("lcp",{metric:e}),ue=e})}function V(e,t,n,r){return de(e,t),H[e]||(n(),H[e]=!0),r&&t({metric:r}),fe(e,t)}function Pe(e){const t={};e==="event"&&(t.durationThreshold=0),L(e,n=>{w(e,{entries:n})},t)}function de(e,t){N[e]=N[e]||[],N[e].push(t)}function fe(e,t){return()=>{const n=N[e];if(!n)return;const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}function P(e){return typeof e=="number"&&isFinite(e)}function y(e,{startTimestamp:t,...n}){return t&&e.startTimestamp>t&&(e.startTimestamp=t),e.startChild({startTimestamp:t,...n})}function E(e){return e/1e3}function pe(){return p&&p.addEventListener&&p.performance}let K=0,m={},v,D;function Ye(){const e=pe();if(e&&R){e.mark&&p.performance.mark("sentry-tracing-init");const t=Fe(),n=Oe(),r=qe();return()=>{t(),n(),r()}}return()=>{}}function xe(){z("longtask",({entries:e})=>{for(const t of e){const n=I();if(!n)return;const r=E(R+t.startTime),i=E(t.duration);n.startChild({description:"Main UI thread blocked",op:"ui.long-task",origin:"auto.ui.browser.metrics",startTimestamp:r,endTimestamp:r+i})}})}function Ae(){z("event",({entries:e})=>{for(const t of e){const n=I();if(!n)return;if(t.name==="click"){const r=E(R+t.startTime),i=E(t.duration);n.startChild({description:Y(t.target),op:`ui.interaction.${t.name}`,origin:"auto.ui.browser.metrics",startTimestamp:r,endTimestamp:r+i})}}})}function Oe(){return Ge(({metric:e})=>{const t=e.entries.pop();t&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding CLS"),m.cls={value:e.value,unit:""},D=t)})}function qe(){return He(({metric:e})=>{const t=e.entries.pop();t&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding LCP"),m.lcp={value:e.value,unit:"millisecond"},v=t)})}function Fe(){return Ie(({metric:e})=>{const t=e.entries.pop();if(!t)return;const n=E(R),r=E(t.startTime);(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding FID"),m.fid={value:e.value,unit:"millisecond"},m["mark.fid"]={value:n+r,unit:"second"}})}function Me(e){const t=pe();if(!t||!p.performance.getEntries||!R)return;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Tracing] Adding & adjusting spans using Performance API");const n=E(R),r=t.getEntries();let i,o;if(r.slice(K).forEach(a=>{const s=E(a.startTime),u=E(a.duration);if(!(e.op==="navigation"&&n+s<e.startTimestamp))switch(a.entryType){case"navigation":{We(e,a,n),i=n+E(a.responseStart),o=n+E(a.requestStart);break}case"mark":case"paint":case"measure":{$e(e,a,s,u,n);const l=W(),c=a.startTime<l.firstHiddenTime;a.name==="first-paint"&&c&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding FP"),m.fp={value:a.startTime,unit:"millisecond"}),a.name==="first-contentful-paint"&&c&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding FCP"),m.fcp={value:a.startTime,unit:"millisecond"});break}case"resource":{const l=a.name.replace(p.location.origin,"");Ve(e,a,l,s,u,n);break}}}),K=Math.max(r.length-1,0),Xe(e),e.op==="pageload"){typeof i=="number"&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding TTFB"),m.ttfb={value:(i-e.startTimestamp)*1e3,unit:"millisecond"},typeof o=="number"&&o<=i&&(m["ttfb.requestTime"]={value:(i-o)*1e3,unit:"millisecond"})),["fcp","fp","lcp"].forEach(s=>{if(!m[s]||n>=e.startTimestamp)return;const u=m[s].value,l=n+E(u),c=Math.abs((l-e.startTimestamp)*1e3),d=c-u;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log(`[Measurements] Normalized ${s} from ${u} to ${c} (${d})`),m[s].value=c});const a=m["mark.fid"];a&&m.fid&&(y(e,{description:"first input delay",endTimestamp:a.value+E(m.fid.value),op:"ui.action",origin:"auto.ui.browser.metrics",startTimestamp:a.value}),delete m["mark.fid"]),"fcp"in m||delete m.cls,Object.keys(m).forEach(s=>{e.setMeasurement(s,m[s].value,m[s].unit)}),je(e)}v=void 0,D=void 0,m={}}function $e(e,t,n,r,i){const o=i+n,a=o+r;return y(e,{description:t.name,endTimestamp:a,op:t.entryType,origin:"auto.resource.browser.metrics",startTimestamp:o}),o}function We(e,t,n){["unloadEvent","redirect","domContentLoadedEvent","loadEvent","connect"].forEach(r=>{k(e,t,r,n)}),k(e,t,"secureConnection",n,"TLS/SSL","connectEnd"),k(e,t,"fetch",n,"cache","domainLookupStart"),k(e,t,"domainLookup",n,"DNS"),ze(e,t,n)}function k(e,t,n,r,i,o){const a=o?t[o]:t[`${n}End`],s=t[`${n}Start`];!s||!a||y(e,{op:"browser",origin:"auto.browser.browser.metrics",description:i||n,startTimestamp:r+E(s),endTimestamp:r+E(a)})}function ze(e,t,n){y(e,{op:"browser",origin:"auto.browser.browser.metrics",description:"request",startTimestamp:n+E(t.requestStart),endTimestamp:n+E(t.responseEnd)}),y(e,{op:"browser",origin:"auto.browser.browser.metrics",description:"response",startTimestamp:n+E(t.responseStart),endTimestamp:n+E(t.responseEnd)})}function Ve(e,t,n,r,i,o){if(t.initiatorType==="xmlhttprequest"||t.initiatorType==="fetch")return;const a={};"transferSize"in t&&(a["http.response_transfer_size"]=t.transferSize),"encodedBodySize"in t&&(a["http.response_content_length"]=t.encodedBodySize),"decodedBodySize"in t&&(a["http.decoded_response_content_length"]=t.decodedBodySize),"renderBlockingStatus"in t&&(a["resource.render_blocking_status"]=t.renderBlockingStatus);const s=o+r,u=s+i;y(e,{description:n,endTimestamp:u,op:t.initiatorType?`resource.${t.initiatorType}`:"resource.other",origin:"auto.resource.browser.metrics",startTimestamp:s,data:a})}function Xe(e){const t=p.navigator;if(!t)return;const n=t.connection;n&&(n.effectiveType&&e.setTag("effectiveConnectionType",n.effectiveType),n.type&&e.setTag("connectionType",n.type),P(n.rtt)&&(m["connection.rtt"]={value:n.rtt,unit:"millisecond"})),P(t.deviceMemory)&&e.setTag("deviceMemory",`${t.deviceMemory} GB`),P(t.hardwareConcurrency)&&e.setTag("hardwareConcurrency",String(t.hardwareConcurrency))}function je(e){v&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding LCP Data"),v.element&&e.setTag("lcp.element",Y(v.element)),v.id&&e.setTag("lcp.id",v.id),v.url&&e.setTag("lcp.url",v.url.trim().slice(0,200)),e.setTag("lcp.size",v.size)),D&&D.sources&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log("[Measurements] Adding CLS Data"),D.sources.forEach((t,n)=>e.setTag(`cls.source.${n+1}`,Y(t.node))))}const q=["localhost",/^\/(?!\/)/],F={traceFetch:!0,traceXHR:!0,enableHTTPTimings:!0,tracingOrigins:q,tracePropagationTargets:q};function Je(e){const{traceFetch:t,traceXHR:n,tracePropagationTargets:r,tracingOrigins:i,shouldCreateSpanForRequest:o,enableHTTPTimings:a}={traceFetch:F.traceFetch,traceXHR:F.traceXHR,...e},s=typeof o=="function"?o:c=>!0,u=c=>et(c,r||i),l={};t&&x("fetch",c=>{const d=tt(c,s,u,l);a&&d&&Q(d)}),n&&x("xhr",c=>{const d=rt(c,s,u,l);a&&d&&Q(d)})}function Ke(e){return e.entryType==="resource"&&"initiatorType"in e&&typeof e.nextHopProtocol=="string"&&(e.initiatorType==="fetch"||e.initiatorType==="xmlhttprequest")}function Q(e){const t=e.data.url;if(!t)return;const n=z("resource",({entries:r})=>{r.forEach(i=>{Ke(i)&&i.name.endsWith(t)&&(Ze(i).forEach(a=>e.setData(...a)),setTimeout(n))})})}function Qe(e){let t="unknown",n="unknown",r="";for(const i of e){if(i==="/"){[t,n]=e.split("/");break}if(!isNaN(Number(i))){t=r==="h"?"http":r,n=e.split(r)[1];break}r+=i}return r===e&&(t=r),{name:t,version:n}}function b(e=0){return((R||performance.timeOrigin)+e)/1e3}function Ze(e){const{name:t,version:n}=Qe(e.nextHopProtocol),r=[];return r.push(["network.protocol.version",n],["network.protocol.name",t]),R?[...r,["http.request.redirect_start",b(e.redirectStart)],["http.request.fetch_start",b(e.fetchStart)],["http.request.domain_lookup_start",b(e.domainLookupStart)],["http.request.domain_lookup_end",b(e.domainLookupEnd)],["http.request.connect_start",b(e.connectStart)],["http.request.secure_connection_start",b(e.secureConnectionStart)],["http.request.connection_end",b(e.connectEnd)],["http.request.request_start",b(e.requestStart)],["http.request.response_start",b(e.responseStart)],["http.request.response_end",b(e.responseEnd)]]:r}function et(e,t){return Te(e,t||q)}function tt(e,t,n,r){if(!te()||!e.fetchData)return;const i=t(e.fetchData.url);if(e.endTimestamp&&i){const _=e.fetchData.__span;if(!_)return;const f=r[_];if(f){if(e.response){f.setHttpStatus(e.response.status);const h=e.response&&e.response.headers&&e.response.headers.get("content-length"),g=parseInt(h);g>0&&f.setData("http.response_content_length",g)}else e.error&&f.setStatus("internal_error");f.finish(),delete r[_]}return}const o=ne(),a=o.getScope(),s=o.getClient(),u=a.getSpan(),{method:l,url:c}=e.fetchData,d=i&&u?u.startChild({data:{url:c,type:"fetch","http.method":l},description:`${l} ${c}`,op:"http.client",origin:"auto.http.browser"}):void 0;if(d&&(e.fetchData.__span=d.spanId,r[d.spanId]=d),n(e.fetchData.url)&&s){const _=e.args[0];e.args[1]=e.args[1]||{};const f=e.args[1];f.headers=nt(_,s,a,f,d)}return d}function nt(e,t,n,r,i){const o=i||n.getSpan(),a=o&&o.transaction,{traceId:s,sampled:u,dsc:l}=n.getPropagationContext(),c=o?o.toTraceparent():re(s,void 0,u),d=a?a.getDynamicSamplingContext():l||ie(s,t,n),_=A(d),f=typeof Request<"u"&&X(e,Request)?e.headers:r.headers;if(f)if(typeof Headers<"u"&&X(f,Headers)){const h=new Headers(f);return h.append("sentry-trace",c),_&&h.append(O,_),h}else if(Array.isArray(f)){const h=[...f,["sentry-trace",c]];return _&&h.push([O,_]),h}else{const h="baggage"in f?f.baggage:void 0,g=[];return Array.isArray(h)?g.push(...h):h&&g.push(h),_&&g.push(_),{...f,"sentry-trace":c,baggage:g.length>0?g.join(","):void 0}}else return{"sentry-trace":c,baggage:_}}function rt(e,t,n,r){const i=e.xhr,o=i&&i[me];if(!te()||i&&i.__sentry_own_request__||!i||!o)return;const a=t(o.url);if(e.endTimestamp&&a){const d=i.__sentry_xhr_span_id__;if(!d)return;const _=r[d];_&&(_.setHttpStatus(o.status_code),_.finish(),delete r[d]);return}const s=ne(),u=s.getScope(),l=u.getSpan(),c=a&&l?l.startChild({data:{...o.data,type:"xhr","http.method":o.method,url:o.url},description:`${o.method} ${o.url}`,op:"http.client",origin:"auto.http.browser"}):void 0;if(c&&(i.__sentry_xhr_span_id__=c.spanId,r[i.__sentry_xhr_span_id__]=c),i.setRequestHeader&&n(o.url))if(c){const d=c&&c.transaction,_=d&&d.getDynamicSamplingContext(),f=A(_);Z(i,c.toTraceparent(),f)}else{const d=s.getClient(),{traceId:_,sampled:f,dsc:h}=u.getPropagationContext(),g=re(_,void 0,f),B=h||(d?ie(_,d,u):void 0),S=A(B);Z(i,g,S)}return c}function Z(e,t,n){try{e.setRequestHeader("sentry-trace",t),n&&e.setRequestHeader(O,n)}catch{}}function it(e,t=!0,n=!0){if(!p||!p.location){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.warn("Could not initialize routing instrumentation due to invalid location");return}let r=p.location.href,i;t&&(i=e({name:p.location.pathname,startTimestamp:R?R/1e3:void 0,op:"pageload",origin:"auto.pageload.browser",metadata:{source:"url"}})),n&&x("history",({to:o,from:a})=>{if(a===void 0&&r&&r.indexOf(o)!==-1){r=void 0;return}a!==o&&(r=void 0,i&&((typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log(`[Tracing] Finishing current transaction with op: ${i.op}`),i.finish()),i=e({name:p.location.pathname,op:"navigation",origin:"auto.navigation.browser",metadata:{source:"url"}}))})}const at="BrowserTracing",st={...be,markBackgroundTransactions:!0,routingInstrumentation:it,startTransactionOnLocationChange:!0,startTransactionOnPageLoad:!0,enableLongTask:!0,_experiments:{},...F};class ct{constructor(t){this.name=at,this._hasSetTracePropagationTargets=!1,he(),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&(this._hasSetTracePropagationTargets=!!(t&&(t.tracePropagationTargets||t.tracingOrigins))),this.options={...st,...t},this.options._experiments.enableLongTask!==void 0&&(this.options.enableLongTask=this.options._experiments.enableLongTask),t&&!t.tracePropagationTargets&&t.tracingOrigins&&(this.options.tracePropagationTargets=t.tracingOrigins),this._collectWebVitals=Ye(),this.options.enableLongTask&&xe(),this.options._experiments.enableInteractions&&Ae()}setupOnce(t,n){this._getCurrentHub=n;const i=n().getClient(),o=i&&i.getOptions(),{routingInstrumentation:a,startTransactionOnLocationChange:s,startTransactionOnPageLoad:u,markBackgroundTransactions:l,traceFetch:c,traceXHR:d,shouldCreateSpanForRequest:_,enableHTTPTimings:f,_experiments:h}=this.options,g=o&&o.tracePropagationTargets,B=g||this.options.tracePropagationTargets;(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&this._hasSetTracePropagationTargets&&g&&T.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."),a(S=>{const C=this._createRouteTransaction(S);return this.options._experiments.onStartRouteTransaction&&this.options._experiments.onStartRouteTransaction(C,S,n),C},u,s),l&&ve(),h.enableInteractions&&this._registerInteractionListener(),Je({traceFetch:c,traceXHR:d,tracePropagationTargets:B,shouldCreateSpanForRequest:_,enableHTTPTimings:f})}_createRouteTransaction(t){if(!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.warn(`[Tracing] Did not create ${t.op} transaction because _getCurrentHub is invalid.`);return}const n=this._getCurrentHub(),{beforeNavigate:r,idleTimeout:i,finalTimeout:o,heartbeatInterval:a}=this.options,s=t.op==="pageload",u=s?ee("sentry-trace"):"",l=s?ee("baggage"):"",{traceparentData:c,dynamicSamplingContext:d,propagationContext:_}=Ee(u,l),f={...t,...c,metadata:{...t.metadata,dynamicSamplingContext:c&&!d?{}:d},trimEnd:!0},h=typeof r=="function"?r(f):f,g=h===void 0?{...f,sampled:!1}:h;g.metadata=g.name!==f.name?{...g.metadata,source:"custom"}:g.metadata,this._latestRouteName=g.name,this._latestRouteSource=g.metadata&&g.metadata.source,g.sampled===!1&&(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log(`[Tracing] Will not send ${g.op} transaction because of beforeNavigate.`),(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.log(`[Tracing] Starting ${g.op} transaction on scope`);const{location:B}=p,S=j(n,g,i,o,!0,{location:B},a),C=n.getScope();return s&&c?C.setPropagationContext(_):C.setPropagationContext({traceId:S.traceId,spanId:S.spanId,parentSpanId:S.parentSpanId,sampled:S.sampled}),S.registerBeforeFinishCallback(_e=>{this._collectWebVitals(),Me(_e)}),S}_registerInteractionListener(){let t;const n=()=>{const{idleTimeout:r,finalTimeout:i,heartbeatInterval:o}=this.options,a="ui.action.click",s=I();if(s&&s.op&&["navigation","pageload"].includes(s.op)){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.warn(`[Tracing] Did not create ${a} transaction because a pageload or navigation transaction is in progress.`);return}if(t&&(t.setFinishReason("interactionInterrupted"),t.finish(),t=void 0),!this._getCurrentHub){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.warn(`[Tracing] Did not create ${a} transaction because _getCurrentHub is invalid.`);return}if(!this._latestRouteName){(typeof __SENTRY_DEBUG__>"u"||__SENTRY_DEBUG__)&&T.warn(`[Tracing] Did not create ${a} transaction because _latestRouteName is missing.`);return}const u=this._getCurrentHub(),{location:l}=p,c={name:this._latestRouteName,op:a,trimEnd:!0,metadata:{source:this._latestRouteSource||"url"}};t=j(u,c,r,i,!0,{location:l},o)};["click"].forEach(r=>{addEventListener(r,n,{once:!1,capture:!0})})}}function ee(e){const t=Se(`meta[name=${e}]`);return t?t.getAttribute("content"):void 0}export{ct as B};

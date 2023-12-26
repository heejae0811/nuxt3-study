import{E as H,r as C,G as R,H as K,I as L,J as O,g as j,K as E,v as D,L as N,m as T,M as W,N as I,O as J}from"./entry.049cdbdf.js";function $(...n){var w;const a=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(a);let[r,e,t={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=E(),o=()=>null,d=()=>s.isHydrating?s.payload.data[r]:s.static.data[r];t.server=t.server??!0,t.default=t.default??o,t.getCachedData=t.getCachedData??d,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0,t.deep=t.deep??H.deep;const c=()=>![null,void 0].includes(t.getCachedData(r));if(!s._asyncData[r]||!t.immediate){(w=s.payload._errors)[r]??(w[r]=null);const f=t.deep?C:R;s._asyncData[r]={data:f(t.getCachedData(r)??t.default()),pending:C(!c()),error:K(s.payload._errors,r),status:C("idle")}}const i={...s._asyncData[r]};i.refresh=i.execute=(f={})=>{if(s._asyncDataPromises[r]){if(f.dedupe===!1)return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((f._initial||s.isHydrating&&f._initial!==!1)&&c())return Promise.resolve(t.getCachedData(r));i.pending.value=!0,i.status.value="pending";const g=new Promise((l,y)=>{try{l(e(s))}catch(v){y(v)}}).then(l=>{if(g.cancelled)return s._asyncDataPromises[r];let y=l;t.transform&&(y=t.transform(l)),t.pick&&(y=q(y,t.pick)),i.data.value=y,i.error.value=null,i.status.value="success"}).catch(l=>{if(g.cancelled)return s._asyncDataPromises[r];i.error.value=l,i.data.value=D(t.default()),i.status.value="error"}).finally(()=>{g.cancelled||(i.pending.value=!1,s.payload.data[r]=i.data.value,i.error.value&&(s.payload._errors[r]=N(i.error.value)),delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=g,s._asyncDataPromises[r]};const h=()=>i.refresh({_initial:!0}),p=t.server!==!1&&s.payload.serverRendered;{const f=T();if(f&&!f._nuxtOnBeforeMountCbs){f._nuxtOnBeforeMountCbs=[];const l=f._nuxtOnBeforeMountCbs;f&&(L(()=>{l.forEach(y=>{y()}),l.splice(0,l.length)}),O(()=>l.splice(0,l.length)))}p&&s.isHydrating&&(i.error.value||c())?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):f&&(s.payload.serverRendered&&s.isHydrating||t.lazy)&&t.immediate?f._nuxtOnBeforeMountCbs.push(h):t.immediate&&h(),t.watch&&j(t.watch,()=>i.refresh());const g=s.hook("app:data:refresh",async l=>{(!l||l.includes(r))&&await i.refresh()});f&&O(g)}const u=Promise.resolve(s._asyncDataPromises[r]).then(()=>i);return Object.assign(u,i),u}function q(n,a){const r={};for(const e of a)r[e]=n[e];return r}const P=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function G(n,a){a?a={...P,...a}:a=P;const r=M(a);return r.dispatch(n),r.toString()}const V=Object.freeze(["prototype","__proto__","constructor"]);function M(n){let a="",r=new Map;const e=t=>{a+=t};return{toString(){return a},getContext(){return r},dispatch(t){return n.replacer&&(t=n.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const s=Object.prototype.toString.call(t);let o="";const d=s.length;d<10?o="unknown:["+s+"]":o=s.slice(8,d-1),o=o.toLowerCase();let c=null;if((c=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+c+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](t):n.ignoreUnknown||this.unkown(t,o);else{let i=Object.keys(t);n.unorderedObjects&&(i=i.sort());let h=[];n.respectType!==!1&&!F(t)&&(h=V),n.excludeKeys&&(i=i.filter(u=>!n.excludeKeys(u)),h=h.filter(u=>!n.excludeKeys(u))),e("object:"+(i.length+h.length)+":");const p=u=>{this.dispatch(u),e(":"),n.excludeValues||this.dispatch(t[u]),e(",")};for(const u of i)p(u);for(const u of h)p(u)}},array(t,s){if(s=s===void 0?n.unorderedArrays!==!1:s,e("array:"+t.length+":"),!s||t.length<=1){for(const c of t)this.dispatch(c);return}const o=new Map,d=t.map(c=>{const i=M(n);i.dispatch(c);for(const[h,p]of i.getContext())o.set(h,p);return i.toString()});return r=o,d.sort(),this.array(d,!1)},date(t){return e("date:"+t.toJSON())},symbol(t){return e("symbol:"+t.toString())},unkown(t,s){if(e(s),!!t&&(e(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return e("error:"+t.toString())},boolean(t){return e("bool:"+t)},string(t){e("string:"+t.length+":"),e(t)},function(t){e("fn:"),F(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this.object(t)},number(t){return e("number:"+t)},xml(t){return e("xml:"+t.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(t){return e("regex:"+t.toString())},uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return e("url:"+t.toString())},map(t){e("map:");const s=[...t];return this.array(s,n.unorderedSets!==!1)},set(t){e("set:");const s=[...t];return this.array(s,n.unorderedSets!==!1)},file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(t){return e("bigint:"+t.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const U="[native code] }",Q=U.length;function F(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-Q)===U}class _{constructor(a,r){a=this.words=a||[],this.sigBytes=r===void 0?a.length*4:r}toString(a){return(a||X).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const e=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=e<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const X={stringify(n){const a=[];for(let r=0;r<n.sigBytes;r++){const e=n.words[r>>>2]>>>24-r%4*8&255;a.push((e>>>4).toString(16),(e&15).toString(16))}return a.join("")}},Y={stringify(n){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,s=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,d=t<<16|s<<8|o;for(let c=0;c<4&&e*8+c*6<n.sigBytes*8;c++)r.push(a.charAt(d>>>6*(3-c)&63))}return r.join("")}},Z={parse(n){const a=n.length,r=[];for(let e=0;e<a;e++)r[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new _(r,a)}},tt={parse(n){return Z.parse(unescape(encodeURIComponent(n)))}};class et{constructor(){this._data=new _,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new _,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=tt.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,e=this._data.sigBytes/(this.blockSize*4);a?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,s=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);r=this._data.words.splice(0,t),this._data.sigBytes-=s}return new _(r,s)}}class rt extends et{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const A=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],st=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],B=[];class nt extends rt{constructor(){super(...arguments),this._hash=new _([...A])}reset(){super.reset(),this._hash=new _([...A])}_doProcessBlock(a,r){const e=this._hash.words;let t=e[0],s=e[1],o=e[2],d=e[3],c=e[4],i=e[5],h=e[6],p=e[7];for(let u=0;u<64;u++){if(u<16)B[u]=a[r+u]|0;else{const b=B[u-15],m=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,x=B[u-2],k=(x<<15|x>>>17)^(x<<13|x>>>19)^x>>>10;B[u]=m+B[u-7]+k+B[u-16]}const w=c&i^~c&h,f=t&s^t&o^s&o,g=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),l=(c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25),y=p+l+w+st[u]+B[u],v=g+f;p=h,h=i,i=c,c=d+y|0,d=o,o=s,s=t,t=y+v|0}e[0]=e[0]+t|0,e[1]=e[1]+s|0,e[2]=e[2]+o|0,e[3]=e[3]+d|0,e[4]=e[4]+c|0,e[5]=e[5]+i|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(e+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function at(n){return new nt().finalize(n).toString(Y)}function it(n,a={}){const r=typeof n=="string"?n:G(n,a);return at(r).slice(0,10)}function ct(n,a,r){var k;const[e={},t]=typeof a=="string"?[{},a]:[a,r],s=W(()=>{let S=n;return typeof S=="function"&&(S=S()),D(S)}),o=e.key||it([t,((k=D(e.method))==null?void 0:k.toUpperCase())||"GET",D(e.baseURL),typeof s.value=="string"?s.value:"",D(e.params||e.query),D(e.headers)]);if(!o||typeof o!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+o);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const d=o===t?"$f"+o:o;if(!e.baseURL&&typeof s.value=="string"&&s.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:c,lazy:i,default:h,transform:p,pick:u,watch:w,immediate:f,getCachedData:g,deep:l,...y}=e,v=I({...J,...y,cache:typeof e.cache=="boolean"?void 0:e.cache}),b={server:c,lazy:i,default:h,transform:p,pick:u,immediate:f,getCachedData:g,deep:l,watch:w===!1?[]:[v,s,...w||[]]};let m;return $(d,()=>{var z;return(z=m==null?void 0:m.abort)==null||z.call(m),m=typeof AbortController<"u"?new AbortController:{},(e.$fetch||globalThis.$fetch)(s.value,{signal:m.signal,...v})},b)}export{ct as u};

/* esm.sh - esbuild bundle(@smithy/util-hex-encoding@2.1.1) denonext production */
var i={},r={};for(let e=0;e<256;e++){let t=e.toString(16).toLowerCase();t.length===1&&(t=`0${t}`),i[e]=t,r[t]=e}function l(e){if(e.length%2!==0)throw new Error("Hex encoded strings must have an even number length");let t=new Uint8Array(e.length/2);for(let n=0;n<e.length;n+=2){let o=e.slice(n,n+2).toLowerCase();if(o in r)t[n/2]=r[o];else throw new Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`)}return t}function s(e){let t="";for(let n=0;n<e.byteLength;n++)t+=i[e[n]];return t}export{l as fromHex,s as toHex};
//# sourceMappingURL=util-hex-encoding.mjs.map
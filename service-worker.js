if(!self.define){let e,i={};const c=(c,d)=>(c=new URL(c+".js",d).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let a={};const n=e=>c(e,s),l={module:{uri:s},exports:a,require:n};i[s]=Promise.all(d.map((e=>l[e]||n(e)))).then((e=>(r(...e),a)))}}define(["./workbox-181670da"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/03/16/hello-world/index.html",revision:"1404c73ac229515abe6094272eed1c10"},{url:"2022/04/13/html/index.html",revision:"492667c1b19c2c7786bc4a6015c9beae"},{url:"2022/04/13/public/service-worker/index.html",revision:"5a4d830488862c0d7b72f503cb784dca"},{url:"2022/04/13/public/workbox-279727cf/index.html",revision:"04d5b85eb4eb5db6c3592c2c23297904"},{url:"about/index.html",revision:"a6ddbfcb434b4d09ad8a2f333fdefaa6"},{url:"archives/2022/03/index.html",revision:"5ab95785c7d859311cf8b5cd2b6509be"},{url:"archives/2022/04/index.html",revision:"56d512aeb4895b6cb7a7dddac38fc360"},{url:"archives/2022/index.html",revision:"389f553a056314aab543b4f5929d0f87"},{url:"archives/index.html",revision:"72b669e6dce3ca353e8e9efbae7ffa0e"},{url:"categories/index.html",revision:"549cf58eaceeaf1424a526a3ceebdd09"},{url:"css/index.css",revision:"c605f40eae4162673541c86751a84e25"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/640 (14).jpg",revision:"85d8b6b2e5dc75a53b22343f72f99fd3"},{url:"img/favicon.png",revision:"e005ba7797364d79c79f0c7042b15f25"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/headportrait.jpg",revision:"0eee29031c8ad71cfcc22185ca7128ee"},{url:"img/icp.png",revision:"228e58cb1585de9884d77635d06eafaa"},{url:"img/shota_1.jpg",revision:"d01aa00aabc72e12aa2f0cc37cac0dd1"},{url:"img/top.jpg",revision:"77ff3b306035548b2af138c542a7455c"},{url:"img/wechat.png",revision:"6dbe80942e739b62d197d3b82d7e2d00"},{url:"index.html",revision:"ded2113a7b5c308edb007e12c206ee5a"},{url:"js/main.js",revision:"c2d6628801fd2dc0ea1739901cf5d99b"},{url:"js/search/algolia.js",revision:"d36a279469bce7854189f9481d3d0860"},{url:"js/search/local-search.js",revision:"4f79884e04a163f9348c3961cf84d50e"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"a05f5d82f84a386a584ed78547ed9e98"},{url:"myself/index.html",revision:"4ec9e85cfccd38c549d13b0733608bfb"},{url:"tags/index.html",revision:"6100ca2c8e0f6187c3296cc4408be29c"},{url:"tags/学习笔记/index.html",revision:"c6f8d4b47954dff3f99d11ec0b304164"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map

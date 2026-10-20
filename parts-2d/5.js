// ===== DRESS-UP SYSTEM =====
const PAL={sa:["#ff8fc4","#fff0f6","#ff5fa2","#ffc2e0","#e8487f"],rt:["#6b52d9","#f2e9ff","#3d2a8f","#a995ff","#ffd34d"],
 pp:["#ffb3c7","#fff4b8","#8ee3ff","#ff8a5c","#b5f2a6"],cc:["#9fe8ff","#ffd1f0","#c7b3ff","#ffffff","#ff9ad5"],mb:["#d9733a","#f5d3a8","#8a3b1f","#e8a23c","#5e2a18"]};
const HAIRC=["#ff9ccc","#5b7bd9","#a2322f","#ffb02e","#e9e4ff","#3a2a2a","#f5d76e","#7fd6c2"],HAIRS=["twin","long","bob","pony"];
if(!S.hair)S.hair={style:"twin",color:null};if(!S.favs)S.favs=[];
function cols(c){const p=PAL[c.brand],i=SLOTS.indexOf(c.slot);return{m:p[i],a:p[(i+2)%5],t:p[(i+4)%5]}}
function bow(x,y,s,f){return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0 L-14 -9 L-14 9Z M0 0 L14 -9 L14 9Z" fill="${f}" stroke="#fff" stroke-width="1.5"/><circle r="4" fill="${f}" stroke="#fff"/></g>`}
const star=(x,y,r,f)=>`<path transform="translate(${x} ${y})" d="M0 ${-r} L${r*.3} ${-r*.3} L${r} 0 L${r*.3} ${r*.3} L0 ${r} L${-r*.3} ${r*.3} L${-r} 0 L${-r*.3} ${-r*.3}Z" fill="${f}"/>`;
function topSVG(b,k){const{m,a,t}=k;let s="";
 const body=`<path d="M74 130 Q100 138 126 130 L123 212 L77 212Z" fill="${m}" stroke="#0002"/>`;
 const longSl=`<path d="M72 136 L56 226" stroke="${m}" stroke-width="15" stroke-linecap="round"/><path d="M128 136 L144 226" stroke="${m}" stroke-width="15" stroke-linecap="round"/>`;
 if(b=="sa")s=body+`<circle cx="71" cy="140" r="13" fill="${a}"/><circle cx="129" cy="140" r="13" fill="${a}"/>`+[80,88,96,104,112,120].map(x=>`<circle cx="${x}" cy="134" r="4.5" fill="#fff"/>`).join("")+bow(100,150,1,t)+`<path d="M77 205 L123 205" stroke="#fff" stroke-width="5" stroke-dasharray="4 3"/>`;
 if(b=="rt")s=longSl+`<path d="M64 130 Q100 120 136 130 L146 190 Q100 175 54 190Z" fill="${t}" opacity=".85"/>`+body+`<rect x="90" y="122" width="20" height="12" fill="${a}"/>`+[150,168,186].map(y=>`<circle cx="100" cy="${y}" r="4" fill="#ffd34d" stroke="#b8860b"/>`).join("")+`<path d="M77 212 L123 212" stroke="#ffd34d" stroke-width="4"/>`;
 if(b=="pp")s=`<rect x="62" y="132" width="20" height="22" rx="6" fill="${m}" transform="rotate(20 72 140)"/><rect x="118" y="132" width="20" height="22" rx="6" fill="${m}" transform="rotate(-20 128 140)"/>`+body+["#ff6f91","#ffb02e","#ffe14f","#7ee08a","#6fc3ff","#b57bff"].map((c,i)=>`<rect x="78" y="${158+i*6}" width="44" height="6" fill="${c}"/>`).join("")+[[84,142,"#ff6f91"],[110,140,"#6fc3ff"],[96,148,"#7ee08a"],[116,200,"#ffe14f"],[86,200,"#b57bff"]].map(([x,y,c])=>`<rect x="${x}" y="${y}" width="7" height="3" rx="1.5" fill="${c}" transform="rotate(${x*7%90} ${x} ${y})"/>`).join("");
 if(b=="cc")s=longSl+body+`<rect x="94" y="134" width="12" height="78" fill="${a}"/>`+[148,166,184,202].map(y=>`<circle cx="100" cy="${y}" r="3.5" fill="${t}" stroke="#fff"/>`).join("")+`<text x="80" y="180" font-size="18" fill="${t}">♪</text><text x="108" y="160" font-size="14" fill="${t}">♫</text>`;
 if(b=="mb")s=longSl+body+[196,201,206].map(y=>`<path d="M77 ${y} L123 ${y}" stroke="${a}" stroke-width="2"/>`).join("")+`<path d="M85 130 L100 150 L115 130" fill="none" stroke="${a}" stroke-width="5"/><text x="92" y="182" font-size="18">🍁</text>`;
 return s;}
function skirtSVG(b,k,long){const{m,a,t}=k,L=long?40:0;let s="";
 if(b=="sa")s=`<path d="M78 204 L122 204 L142 ${250+L/2} L58 ${250+L/2}Z" fill="${m}"/><path d="M62 ${244+L/2} L138 ${244+L/2} L150 ${276+L} L50 ${276+L}Z" fill="${a}"/>`+Array.from({length:11},(_,i)=>`<circle cx="${52+i*9.6}" cy="${276+L}" r="5" fill="#fff"/>`).join("")+bow(100,212,.8,t);
 if(b=="rt")s=`<path d="M78 204 L122 204 L150 ${300+L} L50 ${300+L}Z" fill="${m}"/>`+[70,85,100,115,130].map(x=>`<path d="M100 206 L${x} ${300+L}" stroke="${t}" stroke-width="1.5" opacity=".7"/>`).join("")+`<rect x="49" y="${294+L}" width="102" height="7" fill="#ffd34d"/>`+star(100,240,6,"#ffd34d");
 if(b=="pp")s=[[204,228,m,86,114],[226,252,a,70,130],[250,276+L,k.t,58,142]].map(([y1,y2,c,x1,x2])=>`<path d="M${x1} ${y1} L${x2} ${y1} Q${x2+8} ${y2} ${x2+10} ${y2} L${x1-10} ${y2} Q${x1-8} ${y2} ${x1} ${y1}Z" fill="${c}" stroke="#fff" stroke-width="2"/>`).join("")+`<circle cx="100" cy="206" r="7" fill="#e8233f"/><path d="M100 199 Q104 190 110 188" stroke="#3a7d2a" stroke-width="2" fill="none"/>`;
 if(b=="cc"){const z=(y,w,c)=>{let p=`M${100-w} ${y}`;for(let i=0;i<=10;i++)p+=` L${100-w+i*w/5} ${y+(i%2?14:0)}`;return `<path d="M82 204 L118 204 L${100+w} ${y} ${p.slice(1).split(" ").reverse().join(" ")}" fill="${c}"/>`};
  s=`<path d="M82 204 L118 204 L${150} ${262+L} L50 ${262+L}Z" fill="${a}" opacity=".8"/><path d="M82 204 L118 204 L140 ${248+L} L60 ${248+L}Z" fill="${m}"/>`+Array.from({length:9},(_,i)=>`<path d="M${50+i*12.5} ${262+L} l6 10 l6 -10" fill="${a}"/>`).join("")+`<text x="70" y="${240+L/2}" font-size="13" fill="#fff">♪</text><text x="118" y="${236+L/2}" font-size="13" fill="#fff">♪</text>`;}
 if(b=="mb")s=`<path d="M80 204 L120 204 L138 ${272+L} L62 ${272+L}Z" fill="${m}"/>`+[222,240,258].map(y=>`<path d="M60 ${y+L/3} L140 ${y+L/3}" stroke="${a}" stroke-width="3" opacity=".7"/>`).join("")+[84,100,116].map(x=>`<path d="M${x} 206 L${x+(x-100)*.4} ${272+L}" stroke="${t}" stroke-width="2" opacity=".6"/>`).join("")+bow(118,210,.7,a);
 return s;}
function shoesSVG(b,k){const{m,a,t}=k;return [88,112].map(x=>{
 if(b=="sa")return`<path d="M${x-9} 356 L${x+9} 356 L${x+11} 370 L${x-11} 370Z" fill="${m}"/>`+bow(x,355,.45,a);
 if(b=="rt")return`<rect x="${x-10}" y="318" width="20" height="52" rx="4" fill="${m}"/><rect x="${x-11}" y="316" width="22" height="6" fill="#ffd34d"/><circle cx="${x}" cy="345" r="3" fill="#ffd34d"/>`;
 if(b=="pp")return`<path d="M${x-10} 352 L${x+6} 352 L${x+14} 364 L${x+14} 370 L${x-10} 370Z" fill="${m}"/><rect x="${x-11}" y="367" width="26" height="5" fill="#fff"/><circle cx="${x-3}" cy="359" r="2" fill="${a}"/><circle cx="${x+5}" cy="362" r="2" fill="${t}"/>`;
 if(b=="cc")return`<ellipse cx="${x}" cy="364" rx="13" ry="8" fill="${m}"/><circle cx="${x}" cy="356" r="4" fill="#ffd34d" stroke="#b8860b"/>`;
 return`<rect x="${x-10}" y="338" width="20" height="32" rx="3" fill="${m}"/><path d="M${x-5} 344 L${x+5} 350 M${x+5} 344 L${x-5} 350 M${x-5} 352 L${x+5} 358" stroke="${a}" stroke-width="2"/><rect x="${x-11}" y="367" width="23" height="4" fill="${t}"/>`}).join("");}
function accSVG(b,k){const{m,a,t}=k;
 if(b=="sa")return`<path d="M60 70 Q100 20 140 70" fill="none" stroke="${a}" stroke-width="7"/>`+bow(100,36,1.6,m)+[70,130].map(x=>`<circle cx="${x}" cy="66" r="5" fill="${a}"/>`).join("");
 if(b=="rt")return`<path d="M76 46 L82 26 L90 40 L100 18 L110 40 L118 26 L124 46Z" fill="#ffd34d" stroke="#b8860b" stroke-width="1.5"/><circle cx="100" cy="32" r="5" fill="${m}"/><circle cx="84" cy="38" r="3" fill="${t}"/><circle cx="116" cy="38" r="3" fill="${t}"/>`;
 if(b=="pp")return`<path d="M128 52 Q140 36 150 40" stroke="#3a7d2a" stroke-width="2.5" fill="none"/><circle cx="130" cy="58" r="8" fill="#e8233f"/><circle cx="146" cy="52" r="8" fill="#e8233f"/><rect x="118" y="62" width="22" height="7" rx="3" fill="${m}" transform="rotate(-20 128 65)"/>`;
 if(b=="cc")return`<path d="M64 66 Q100 22 136 66" fill="none" stroke="${m}" stroke-width="8"/><text x="72" y="44" font-size="18" fill="${t}">♪</text><text x="114" y="40" font-size="18" fill="${t}">♫</text>`+star(100,30,8,"#fff");
 return`<ellipse cx="96" cy="44" rx="40" ry="14" fill="${m}" transform="rotate(-10 96 44)"/><circle cx="96" cy="32" r="4" fill="${a}"/><text x="118" y="52" font-size="18">🍁</text>`+bow(68,52,.6,t);}
function hairBack(st,c){if(st=="long")return`<path d="M62 70 Q58 150 60 210 L140 210 Q142 150 138 70Z" fill="${c}"/>`;
 if(st=="twin")return`<ellipse cx="50" cy="130" rx="15" ry="58" fill="${c}"/><ellipse cx="150" cy="130" rx="15" ry="58" fill="${c}"/><circle cx="60" cy="72" r="6" fill="#ff4fa3"/><circle cx="140" cy="72" r="6" fill="#ff4fa3"/>`;
 if(st=="bob")return`<path d="M60 70 Q58 112 70 116 L130 116 Q142 112 140 70Z" fill="${c}"/>`;
 return`<path d="M130 50 Q168 70 156 170 Q148 120 128 70Z" fill="${c}"/>`;}
// parts: which slots to include (null=all)
function dressSVG(coord,hair,w=270,parts=null){const d=IDOLS[S.idol],hc=hair.color||d.h,skin="#ffe6d6",has=s=>coord[s]&&(!parts||parts.includes(s));
 const g=s=>{const c=card(coord[s]);return c?{b:c.brand,k:cols(c)}:null};let o="";
 o+=hairBack(hair.style,hc);
 o+=`<g stroke="${skin}" stroke-linecap="round"><path d="M72 136 L56 226" stroke-width="11"/><path d="M128 136 L144 226" stroke-width="11"/><path d="M90 255 L88 362" stroke-width="15"/><path d="M110 255 L112 362" stroke-width="15"/></g><rect x="93" y="108" width="14" height="22" fill="${skin}"/>`;
 o+=`<path d="M78 130 L122 130 L120 262 L80 262Z" fill="#fff" stroke="#e5d0e5"/>`;
 if(has("Shoes")){const x=g("Shoes");if(x)o+=shoesSVG(x.b,x.k)}else o+=[88,112].map(x=>`<ellipse cx="${x}" cy="366" rx="11" ry="6" fill="#fff" stroke="#ddd"/>`).join("");
 if(has("One-piece")){const x=g("One-piece");if(x)o+=skirtSVG(x.b,x.k,true)+topSVG(x.b,x.k)}
 else{if(has("Bottoms")){const x=g("Bottoms");if(x)o+=skirtSVG(x.b,x.k,false)}if(has("Tops")){const x=g("Tops");if(x)o+=topSVG(x.b,x.k)}}
 o+=`<circle cx="56" cy="228" r="7" fill="${skin}"/><circle cx="144" cy="228" r="7" fill="${skin}"/>`;
 o+=`<circle cx="100" cy="78" r="34" fill="${skin}"/><ellipse cx="87" cy="82" rx="5" ry="7" fill="#5a2a6e"/><ellipse cx="113" cy="82" rx="5" ry="7" fill="#5a2a6e"/><circle cx="89" cy="79" r="2" fill="#fff"/><circle cx="115" cy="79" r="2" fill="#fff"/><ellipse cx="80" cy="94" rx="6" ry="3" fill="#ffb3c7"/><ellipse cx="120" cy="94" rx="6" ry="3" fill="#ffb3c7"/><path d="M93 98 Q100 104 107 98" stroke="#e8487f" stroke-width="2.5" fill="none"/>`;
 o+=`<path d="M64 80 Q62 40 100 40 Q138 40 136 80 Q128 60 112 58 Q104 66 92 60 Q76 62 64 80Z" fill="${hc}"/>`;
 if(has("Accessory")){const x=g("Accessory");if(x)o+=accSVG(x.b,x.k)}
 return `<svg viewBox="30 10 140 370" width="${w}" height="${w*370/140}" xmlns="http://www.w3.org/2000/svg">${o}</svg>`;}
const CROP={Tops:"48 112 104 110",Bottoms:"40 196 120 120",Shoes:"70 310 60 66","Accessory":"50 10 110 70","One-piece":"40 116 120 230"};
art=function(c){const k=cols(c),b=c.brand;let s;
 if(c.slot=="Tops")s=topSVG(b,k);else if(c.slot=="Bottoms")s=skirtSVG(b,k,false);else if(c.slot=="Shoes")s=shoesSVG(b,k);else if(c.slot=="Accessory")s=accSVG(b,k);else s=skirtSVG(b,k,true)+topSVG(b,k);
 return `<svg viewBox="${CROP[c.slot]}" width="96" height="${c.slot=="One-piece"?100:90}" preserveAspectRatio="xMidYMid meet">${s}</svg>`;};
renderCoord=function(){for(const s in S.coord)if(!S.own[S.coord[s]])delete S.coord[s];const own=CARDS.filter(c=>S.own[c.id]);
 $("preview").innerHTML=dressSVG(S.coord,S.hair,160);
 $("slotTabs").innerHTML=SLOTS.map(s=>`<button class="${s==slotTab?'on':''}" onclick="slotTab='${s}';renderCoord()">${s}${S.coord[s]?' ✔':''}</button>`).join("");
 const list=own.filter(c=>c.slot==slotTab);$("coordCards").innerHTML=list.length?list.map(c=>cardHTML(c,{sel:S.coord[slotTab]==c.id}).replace('class="card','class="card thumb')).join(""):"<p>No cards for this slot yet — clear story chapters to earn more!</p>";
 document.querySelectorAll("#coordCards .card").forEach(e=>e.onclick=()=>{const id=e.dataset.id;if(S.coord[slotTab]==id)delete S.coord[slotTab];else{S.coord[slotTab]=id;
  if(slotTab=="One-piece"){delete S.coord.Tops;delete S.coord.Bottoms}if(slotTab=="Tops"||slotTab=="Bottoms")delete S.coord["One-piece"];}tone(990,.05);save();renderCoord();});
 $("hairOpts").innerHTML=HAIRC.map(c=>`<span class="sw ${(S.hair.color||IDOLS[S.idol].h)==c?'on':''}" style="background:${c}" onclick="S.hair.color='${c}';save();renderCoord()"></span>`).join("")+" "+HAIRS.map(h=>`<button class="mini ${S.hair.style==h?'':'off'}" style="${S.hair.style==h?'':'opacity:.5'}" onclick="S.hair.style='${h}';save();renderCoord()">${h}</button>`).join("");
 $("favs").innerHTML=S.favs.map((f,i)=>`<button class="mini" onclick="loadFav(${i})">⭐ ${f.name.replace(/[<>&"]/g,"")}</button><button class="mini" style="background:#bbb;box-shadow:none" onclick="S.favs.splice(${i},1);save();renderCoord()">✕</button>`).join("")||"<small>No favorites yet</small>";
 const sc=coordScore(),idol=IDOLS[S.idol];
 $("coordInfo").innerHTML=`<b>${idol.e} ${idol.n}</b> (${idol.t})<br>${coordCards().map(c=>c.name).join(" / ")||"Pick cards to dress up!"}<br>AP <b>${sc.base}</b> + Bonus <b>${sc.bonus}</b> = <b style="font-size:20px;color:#ff4fa3">${sc.total}</b><br>${sc.notes.join("<br>")||"<i>Tip: one brand head-to-toe = Full Set bonus!</i>"}`;
 const ch=STORY[STORYCH];$("stageGoal").style.display=ch?"block":"none";
 if(ch){song=ch.song;$("stageGoal").innerHTML=`<b>${ch.t}</b> — Target score <b>${ch.target}</b>${ch.unit?` · 🤝 Unit with ${IDOLS[cast(ch.unit)].n} (×1.2 score)`:""}${ch.rival?` · ⚔️ Beat ${IDOLS[cast(ch.rival)].n} (~${ch.rivalPow})`:""}`;}
 $("songs").innerHTML=SONGS.map((s,i)=>`<button ${ch&&i!=ch.song?"disabled":""} style="${i==song?'':'opacity:.55'}" onclick="song=${i};renderCoord()">${s.name} (${'★'.repeat(s.diff)})</button>`).join("");};
function saveFav(){const n=($("favName").value||"Coord "+(S.favs.length+1)).slice(0,20);if(S.favs.length>=5){alert("Max 5 favorites — delete one first.");return}
 S.favs.push({name:n,coord:Object.assign({},S.coord),hair:Object.assign({},S.hair)});$("favName").value="";save();renderCoord();}
function loadFav(i){const f=S.favs[i];S.coord=Object.assign({},f.coord);S.hair=Object.assign({},f.hair);save();renderCoord();}
// ===== SCAN-IN & AIKATSU CHANGE =====
let SCANQ=[],SCANNED=0,DRESS_IMG=null;
function beginScan(){const sc=coordScore();if(!sc.full){alert("Complete your coordinate first (Tops+Bottoms or One-piece, plus Shoes and Accessory)!");return}
 const svg=dressSVG(S.coord,S.hair,240);DRESS_IMG=new Image();DRESS_IMG.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(svg);
 SCANQ=coordCards();SCANNED=0;go("scanin");
 $("scanCards").innerHTML=SCANQ.map((c,i)=>`<div style="text-align:center"><div style="font-weight:bold">[${i+1}]</div>${cardHTML(c).replace('data-id','data-i="'+i+'" data-id')}</div>`).join("");
 $("scanSlots").innerHTML=SCANQ.map(c=>`<div class="slot">${c.slot}</div>`).join("");
 document.querySelectorAll("#scanCards .card").forEach(e=>e.onclick=()=>scanCard(+e.dataset.i));}
function scanCard(i){const el=document.querySelector(`#scanCards [data-i="${i}"]`);if(!el||el.classList.contains("scanned"))return;
 const r=el.getBoundingClientRect();el.classList.add("scanned");tone(1760,.08,"square",.08);setTimeout(()=>tone(2349,.12,"square",.08),90);
 for(let k=0;k<5;k++){const s=document.createElement("div");s.className="sparkle";s.textContent=["✦","✧","💖","⭐"][k%4];s.style.left=(r.left+Math.random()*r.width)+"px";s.style.top=(r.top+Math.random()*r.height)+"px";document.body.appendChild(s);setTimeout(()=>s.remove(),800)}
 const c=SCANQ[i],sl=$("scanSlots").children[i];sl.classList.add("full");sl.innerHTML=`<div>${art(c)}</div>`;
 if(++SCANNED>=SCANQ.length)setTimeout(aikatsuChange,700);}
addEventListener("keydown",e=>{if($("s-scanin").classList.contains("on")){const n=+e.key;if(n>=1&&n<=SCANQ.length)scanCard(n-1);}});
let CHG=[];
function aikatsuChange(){go("change");CHG.forEach(clearTimeout);CHG=[];const order=S.coord["One-piece"]?["One-piece","Shoes","Accessory"]:["Tops","Bottoms","Shoes","Accessory"];
 const ci=$("changeIdol"),lb=$("changeLabel"),bn=$("changeBanner");bn.classList.remove("on");ci.classList.remove("pose");ci.innerHTML=dressSVG(S.coord,S.hair,210,[]);lb.textContent="✦ Aikatsu Change! ✦";
 [0,4,7,12].forEach((n,i)=>tone(N(72+n),.25,"triangle",.1,ac().currentTime+i*.08));
 order.forEach((s,i)=>CHG.push(setTimeout(()=>{ci.innerHTML=dressSVG(S.coord,S.hair,210,order.slice(0,i+1));ci.classList.remove("glow");void ci.offsetWidth;ci.classList.add("glow");
  const c=card(S.coord[s]);lb.textContent=`✦ ${c.name} ✦`;tone(N(79+i*3),.3,"triangle",.12);flash();},900+i*800)));
 CHG.push(setTimeout(()=>{ci.classList.add("pose");lb.textContent="";const sc=coordScore();
  bn.innerHTML=`<b>Coord complete!</b>${sc.notes.join("<br>")||"Ready to shine!"}<br>Coordinate Appeal <b style="display:inline;font-size:28px">${sc.total}</b>`;bn.classList.add("on");
  [0,4,7,12,16].forEach((n,i)=>tone(N(84+n),.4,"triangle",.1,ac().currentTime+i*.1));},900+order.length*800+200));
 CHG.push(setTimeout(()=>{if($("s-change").classList.contains("on"))startStage();},900+order.length*800+2800));}
// stage + results show dressed idol
drawIdol=(function(orig){return function(d,x,y,b,s=1){if(d===IDOLS[S.idol]&&b&&DRESS_IMG&&DRESS_IMG.complete&&DRESS_IMG.naturalWidth){
 const t=performance.now()/1000;cx.save();cx.translate(x,y+70);cx.rotate(Math.sin(t*5)*.06);cx.drawImage(DRESS_IMG,-62,-235+Math.abs(Math.sin(t*5))*-6,124,240*370/280);cx.restore();}else orig(d,x,y,b,s)}})(drawIdol);
finish=(function(orig){return function(){orig();$("resBox").insertAdjacentHTML("afterbegin",`<div style="float:left">${dressSVG(S.coord,S.hair,140)}</div>`);}})(finish);
renderTitle();

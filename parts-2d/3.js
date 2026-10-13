function art(c){const b=BRANDS.find(x=>x.id==c.brand),col=TYPES[c.type];
 const shape={Tops:'<path d="M30 25 L45 18 Q50 26 55 18 L70 25 L78 45 L66 48 L64 80 L36 80 L34 48 L22 45Z"/>',
 Bottoms:'<path d="M32 22 L68 22 L82 80 Q50 88 18 80Z"/>',Shoes:'<path d="M20 55 L30 30 L42 30 L44 55 L72 58 Q82 62 78 70 L20 70Z"/>',
 Accessory:'<path d="M50 22 L58 40 L78 42 L62 54 L68 74 L50 63 L32 74 L38 54 L22 42 L42 40Z"/>',
 "One-piece":'<path d="M38 12 L62 12 L64 36 L86 86 Q50 94 14 86 L36 36Z"/>'}[c.slot];
 const m={frills:'<g fill="#fff8"><circle cx="20" cy="88" r="6"/><circle cx="35" cy="90" r="6"/><circle cx="50" cy="90" r="6"/><circle cx="65" cy="90" r="6"/><circle cx="80" cy="88" r="6"/></g>',
 crown:'<path d="M38 8 L44 14 L50 4 L56 14 L62 8 L60 18 L40 18Z" fill="#ffd700"/>',rainbow:'<path d="M5 95 A45 45 0 0 1 95 95" stroke="#fff8" stroke-width="5" fill="none"/>',
 notes:'<text x="78" y="20" font-size="16" fill="#fff">♪</text><text x="8" y="30" font-size="14" fill="#fff">♫</text>',leaf:'<text x="74" y="22" font-size="14">🍁</text>'}[b.motif];
 return `<svg viewBox="0 0 100 100" width="96" height="96">${m}<g fill="${b.c2}" stroke="#fff" stroke-width="3">${shape}</g><circle cx="50" cy="50" r="5" fill="${col}"/></svg>`;}
function cardHTML(c,opts={}){const b=BRANDS.find(x=>x.id==c.brand);const n=S.own[c.id]||0;
 return `<div class="card ${c.rarity} ${opts.locked?'locked':''} ${opts.sel?'sel':''}" data-id="${c.id}" style="background:linear-gradient(160deg,#fff,${b.c1})">
 <div class="art" style="background:linear-gradient(${b.c1},#fff)">${opts.locked?'<span style="font-size:40px">?</span>':art(c)}</div><span class="rar" style="color:${TYPES[c.type]}">${c.rarity}</span>
 <div class="nm">${opts.locked?'???':c.name}</div><div>${b.icon} ${b.name}</div><div style="color:${TYPES[c.type]};font-weight:bold">${c.type} · ${c.slot}</div>
 <span class="ap">${c.ap} AP</span>${n>1&&!opts.locked?`<span style="position:absolute;bottom:6px;left:8px">×${n}</span>`:''}</div>`;}
function avatar(d,w=90){if(!d)return`<svg viewBox="0 0 100 110" width="${w}"><circle cx="50" cy="50" r="30" fill="#ddd"/><text x="38" y="62" font-size="34">✂️</text></svg>`;
 return `<svg viewBox="0 0 100 110" width="${w}"><circle cx="50" cy="45" r="34" fill="${d.h}"/><circle cx="50" cy="50" r="24" fill="#ffe6d6"/><circle cx="42" cy="50" r="4" fill="#5a2a6e"/><circle cx="58" cy="50" r="4" fill="#5a2a6e"/><path d="M44 60 Q50 65 56 60" stroke="#ff4f7a" stroke-width="2" fill="none"/><path d="M26 30 Q50 10 74 30 L74 40 Q50 26 26 40Z" fill="${d.h}"/><path d="M30 80 L70 80 L80 108 L20 108Z" fill="${TYPES[d.t]}"/><text x="70" y="25" font-size="16">${d.e}</text></svg>`;}
function go(s){document.querySelectorAll(".screen").forEach(e=>e.classList.remove("on"));$("s-"+s).classList.add("on");if(s!="stage")stopStage();
 const f={title:renderTitle,scan:renderScan,album:renderAlbum,coord:renderCoord,story:renderStory}[s];if(f)f();}
function renderTitle(){STORYCH=-1;$("idols").innerHTML=IDOLS.map((d,i)=>`<div class="idol ${S.idol==i?'sel':''}" onclick="S.idol=${i};save();renderTitle()">
 ${avatar(d)}<div><b>${d.n}</b></div><div style="color:${TYPES[d.t]}">${d.t} type</div><div style="font-size:11px">"${d.q}"</div></div>`).join("");}
function pick(force){let c;if(force)c=card(force);else{let tot=0;for(const k in RAR)tot+=RAR[k].w;let r=Math.random()*tot,rr="N";for(const k in RAR){if((r-=RAR[k].w)<0){rr=k;break}}
 const pool=CARDS.filter(x=>x.rarity==rr);c=pool[Math.floor(Math.random()*pool.length)];}S.own[c.id]=(S.own[c.id]||0)+1;save();return c;}
function renderScan(){$("dust").textContent=S.dust;$("scan1").disabled=S.dust<10;$("scan5").disabled=S.dust<45;}
function scan(n){const cost=n==1?10:45;if(S.dust<cost)return;S.dust-=cost;tone(880,.1);const got=[];for(let i=0;i<n;i++)got.push(pick());save();
 $("pulls").innerHTML="";got.forEach((c,i)=>setTimeout(()=>{$("pulls").insertAdjacentHTML("beforeend",cardHTML(c));tone(c.rarity=="CP"?1320:c.rarity=="PR"?1100:660,.15);if(c.rarity!="N"&&c.rarity!="R")flash();},i*350));renderScan();}
function renderAlbum(){const own=CARDS.filter(c=>S.own[c.id]).length;$("albumCount").textContent=`(${own}/${CARDS.length})`;
 $("album").innerHTML=BRANDS.map(b=>`<div class="panel"><h3 style="color:${b.c2};margin:4px">${b.icon} ${b.name} <small>(${b.type}) — full set bonus +50%</small></h3><div class="row">${CARDS.filter(c=>c.brand==b.id).map(c=>cardHTML(c,{locked:!S.own[c.id]})).join("")}</div></div>`).join("");}
function coordCards(){const C=S.coord;const ids=C["One-piece"]?[C["One-piece"],C.Shoes,C.Accessory]:[C.Tops,C.Bottoms,C.Shoes,C.Accessory];return ids.filter(Boolean).map(card).filter(Boolean);}
function coordScore(){const cs=coordCards(),idol=IDOLS[S.idol];let base=cs.reduce((a,c)=>a+c.ap,0),notes=[];
 const full=cs.length>=(S.coord["One-piece"]?3:4),br=full&&cs.every(c=>c.brand==cs[0].brand);let bonus=0;
 if(br){bonus+=Math.round(base*.5);notes.push(`🌟 Full Brand Set (${BRANDS.find(b=>b.id==cs[0].brand).name}) +50%`)}
 const tm=cs.filter(c=>c.type==idol.t).length;if(tm){bonus+=tm*100;notes.push(`💖 ${tm} card(s) match ${idol.n}'s ${idol.t} type +${tm*100}`)}
 if(full&&cs.every(c=>c.type==cs[0].type)){bonus+=300;notes.push("✨ Type Unity +300")}
 return{base,bonus,total:base+bonus,notes,full};}
function renderCoord(){for(const s in S.coord)if(!S.own[S.coord[s]])delete S.coord[s];const own=CARDS.filter(c=>S.own[c.id]);
 $("slotTabs").innerHTML=SLOTS.map(s=>`<button class="${s==slotTab?'on':''}" onclick="slotTab='${s}';renderCoord()">${s}${S.coord[s]?' ✔':''}</button>`).join("");
 const list=own.filter(c=>c.slot==slotTab);$("coordCards").innerHTML=list.length?list.map(c=>cardHTML(c,{sel:S.coord[slotTab]==c.id})).join(""):"<p>No cards for this slot yet — try Card Scan!</p>";
 document.querySelectorAll("#coordCards .card").forEach(e=>e.onclick=()=>{const id=e.dataset.id;if(S.coord[slotTab]==id)delete S.coord[slotTab];else{S.coord[slotTab]=id;
  if(slotTab=="One-piece"){delete S.coord.Tops;delete S.coord.Bottoms}if(slotTab=="Tops"||slotTab=="Bottoms")delete S.coord["One-piece"];}tone(990,.05);save();renderCoord();});
 const sc=coordScore(),idol=IDOLS[S.idol];
 $("coordInfo").innerHTML=`<b>${idol.e} ${idol.n}</b> (${idol.t}) — Coordinate: ${coordCards().map(c=>c.name).join(" / ")||"none"}<br>Base AP <b>${sc.base}</b> + Bonus <b>${sc.bonus}</b> = <b style="font-size:20px;color:#ff4fa3">${sc.total}</b><br>${sc.notes.join("<br>")||"<i>Tip: match all cards from one brand for a Full Set bonus!</i>"}`;
 const ch=STORY[STORYCH];$("stageGoal").style.display=ch?"block":"none";
 if(ch){song=ch.song;$("stageGoal").innerHTML=`<b>${ch.t}</b> — Target score <b>${ch.target}</b>${ch.unit?` · 🤝 Unit with ${IDOLS[cast(ch.unit)].n} (×1.2 score)`:""}${ch.rival?` · ⚔️ Beat ${IDOLS[cast(ch.rival)].n} (~${ch.rivalPow})`:""}`;}
 $("songs").innerHTML=SONGS.map((s,i)=>`<button ${ch&&i!=ch.song?"disabled":""} style="${i==song?'':'opacity:.55'}" onclick="song=${i};renderCoord()">${s.name} (${'★'.repeat(s.diff)})</button>`).join("");}
function free(){STORYCH=-1;go("coord")}
// STORY
function renderStory(){$("chapters").innerHTML=STORY.map((c,i)=>{const lk=i>S.story,done=i<S.story;
 const who=c.rival?IDOLS[cast(c.rival)]:c.unit?IDOLS[cast(c.unit)]:null;
 return `<div class="chap ${lk?'lock':''}">${who?avatar(who,50):avatar(IDOLS[S.idol],50)}<div style="flex:1"><b>${c.t}</b> ${done?"✅":""}<br><small>Target ${c.target}${c.unit?" · Unit stage":""}${c.rival?" · Rival battle":""} · Reward: ${card(c.reward).name}</small></div>
 <button ${lk?"disabled":""} onclick="playChapter(${i})">${lk?"🔒":"Play"}</button></div>`}).join("");}
let DL=[],DI=0;
function playChapter(i){STORYCH=i;DL=STORY[i].lines();DI=0;$("dlgTitle").textContent=STORY[i].t;go("dialog");showLine();}
function showLine(){const [r,txt]=DL[DI];let d,name;if(r=="me"){d=IDOLS[S.idol];name=d.n}else if(ROLE[r]!=null){d=IDOLS[cast(r)];name=d.n}else{d=null;name=r}
 $("dlg").innerHTML=`${avatar(d,110)}<div><div class="who" style="color:${d?TYPES[d.t]:'#888'}">${name}</div><div class="txt">${txt}</div></div>`;tone(700+DI*40,.05);}
function nextLine(){if(++DI>=DL.length){go("coord");return}showLine();}
addEventListener("keydown",e=>{if(e.key=="Enter"&&$("s-dialog").classList.contains("on"))nextLine();});

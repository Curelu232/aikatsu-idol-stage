// AUDIO
let AC;function ac(){if(!AC)AC=new (window.AudioContext||window.webkitAudioContext)();if(AC.state=="suspended")AC.resume();return AC}
function tone(f,d,type="sine",vol=.15,t0){try{const a=ac(),o=a.createOscillator(),g=a.createGain();const t=t0??a.currentTime;o.type=type;o.frequency.value=f;g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+d);o.connect(g).connect(a.destination);o.start(t);o.stop(t+d+.02)}catch(e){}}
function noise(t,d,vol){try{const a=ac(),b=a.createBuffer(1,Math.ceil(a.sampleRate*d),a.sampleRate),x=b.getChannelData(0);for(let i=0;i<x.length;i++)x[i]=(Math.random()*2-1)*(1-i/x.length);const s=a.createBufferSource(),g=a.createGain();g.gain.value=vol;s.buffer=b;s.connect(g).connect(a.destination);s.start(t)}catch(e){}}
const N=n=>440*Math.pow(2,(n-69)/12);
const SONGS=[{name:"Sugar Ribbon Dreams",bpm:112,diff:1,wave:"triangle",mel:[72,74,76,79,76,74,72,67,69,72,74,76,74,72,74,-1],bass:[48,48,53,53,55,55,48,48]},
 {name:"Crown of Starlight",bpm:128,diff:2,wave:"square",mel:[69,72,76,72,74,77,81,77,76,74,72,71,69,71,72,-1],bass:[45,45,41,41,43,43,40,40]},
 {name:"Parfait Paradise Pop!",bpm:144,diff:3,wave:"sawtooth",mel:[76,79,84,79,81,79,76,72,74,76,79,76,74,72,71,72],bass:[48,52,53,55,48,52,55,53]}];
// STAGE
const cv=$("stage"),cx=cv.getContext("2d"),KEYS=["w","a","s","d"],HITY=470,SPEED=380,LX=250,LW=100;
let G=null,raf=0;
function startStage(){const sc=coordScore();if(!sc.full){alert("Complete your coordinate first (Tops+Bottoms or One-piece, plus Shoes and Accessory)!");return}
 const ch=STORY[STORYCH];go("stage");const s=SONGS[song],a=ac(),beat=60/s.bpm,t0=a.currentTime+2.5,steps=128;const notes=[];
 const dens=[.55,.7,.85][s.diff-1];
 for(let i=0;i<steps;i++){const t=t0+i*beat/2,m=s.mel[i%16],sec=(i/32|0)%2;
  if(m>0)tone(N(m+(sec?12:0)*(i>=96?1:0)),beat*.45,s.wave,.05,t);if(i%4==0)tone(N(s.bass[(i/4|0)%8]),beat*1.8,"sine",.18,t);
  if(i%4==0)tone(60,.15,"sine",.5,t);if(i%4==2)noise(t,.1,.25);if(i%2==1)noise(t,.03,.06);
  if(i>=4&&i<steps-2&&m>0&&(i%2==0||s.diff>1)&&Math.random()<dens)notes.push({t,lane:(m+(i>>3))%4,hit:0});
  if(s.diff==3&&i%8==0&&i>8&&m>0)notes.push({t,lane:(m+(i>>3)+2)%4,hit:0});}
 G={s,ch,t0,end:t0+steps*beat/2+1.5,notes,score:0,combo:0,max:0,j:{P:0,G:0,M:0},gauge:0,sp:0,spT:-9,fx:[],press:[0,0,0,0],sc,stars:[],nsp:0,
  unit:ch&&ch.unit?IDOLS[cast(ch.unit)]:null,rival:ch&&ch.rival?IDOLS[cast(ch.rival)]:null,rivalFinal:ch&&ch.rival?Math.round(ch.rivalPow*(.93+Math.random()*.12)):0};
 for(let i=0;i<60;i++)G.stars.push([Math.random()*900,Math.random()*560,Math.random()*2+.5]);
 cancelAnimationFrame(raf);loop();}
function stopStage(){cancelAnimationFrame(raf);G=null}
function judge(l){if(!G)return;G.press[l]=performance.now();const now=ac().currentTime;let best=null,bd=1;
 for(const n of G.notes)if(!n.hit&&n.lane==l){const d=Math.abs(n.t-now);if(d<bd){bd=d;best=n}}
 if(!best||bd>.15)return;best.hit=1;add(bd<.06?"P":bd<.12?"G":"M",l);}
function add(r,l){G.j[r]++;if(r=="M"){G.combo=0}else{G.combo++;G.max=Math.max(G.max,G.combo);G.score+=(r=="P"?100:60)*(1+Math.min(G.combo,50)/50)*(G.sp>0?2:1);
 G.gauge=Math.min(100,G.gauge+(r=="P"?4:2)*(G.unit?1.3:1));tone(r=="P"?1568:1175,.06,"sine",.08)}
 G.fx.push({txt:{P:"PERFECT!",G:"GOOD",M:"MISS"}[r],col:{P:"#ffe14f",G:"#7fe0ff",M:"#aaa"}[r],x:LX+l*LW+LW/2,y:HITY-40,life:1});}
function special(){if(!G||G.gauge<100||G.sp>0)return;G.gauge=0;G.sp=1;G.nsp++;G.spT=ac().currentTime;G.score+=2000+G.sc.total;flash();
 [0,.1,.2,.3,.45].forEach((d,i)=>tone(N(84+[0,4,7,12,16][i]),.4,"triangle",.12,ac().currentTime+d));}
function flash(){const f=$("flash");f.style.opacity=1;setTimeout(()=>f.style.opacity=0,350)}
addEventListener("keydown",e=>{if(!G||e.repeat)return;const l=KEYS.indexOf(e.key.toLowerCase());if(l>=0){e.preventDefault();judge(l)}if(e.code=="Space"){e.preventDefault();special()}});
cv.addEventListener("pointerdown",e=>{const r=cv.getBoundingClientRect(),x=(e.clientX-r.left)*900/r.width,y=(e.clientY-r.top)*560/r.height;
 if(x>760&&y<340){special();return}const l=Math.floor((x-LX)/LW);if(l>=0&&l<4)judge(l);});
function drawIdol(d,x,y,b,s=1){cx.save();cx.translate(x,y);cx.scale(s,s);cx.fillStyle=d.h;cx.beginPath();cx.arc(0,-60,38,0,7);cx.fill();cx.fillStyle="#ffe6d6";cx.beginPath();cx.arc(0,-55,26,0,7);cx.fill();
 cx.fillStyle=b?b.c2:TYPES[d.t];cx.beginPath();cx.moveTo(-20,-25);cx.lineTo(20,-25);cx.lineTo(45,70);cx.lineTo(-45,70);cx.fill();
 cx.fillStyle="#5a2a6e";cx.fillRect(-10,-58,5,6);cx.fillRect(5,-58,5,6);cx.font="28px sans-serif";cx.textAlign="center";cx.fillText(b?b.icon:d.e,0,30);cx.restore();}
function curScore(){return G.score*(G.unit?1.2:1)}
function loop(){if(!G)return;raf=requestAnimationFrame(loop);const now=ac().currentTime,idol=IDOLS[S.idol];
 for(const n of G.notes)if(!n.hit&&now-n.t>.15){n.hit=1;add("M",n.lane)}
 if(G.sp>0&&now-G.spT>6)G.sp=0;
 const sp=G.sp>0,el=now-G.spT;const g=cx.createLinearGradient(0,0,0,560);g.addColorStop(0,sp?`hsl(${now*120%360},80%,35%)`:"#3a0f5a");g.addColorStop(1,"#ff6fae");cx.fillStyle=g;cx.fillRect(0,0,900,560);
 cx.fillStyle="#fff";G.stars.forEach(s=>{cx.globalAlpha=.4+.6*Math.abs(Math.sin(now*2+s[0]));cx.beginPath();cx.arc(s[0],s[1],s[2],0,7);cx.fill()});cx.globalAlpha=1;
 for(let i=0;i<3;i++){cx.fillStyle=`hsla(${(i*120+now*40)%360},100%,80%,.12)`;cx.beginPath();const sx=150+i*300+Math.sin(now+i)*80;cx.moveTo(sx,0);cx.lineTo(sx-90,560);cx.lineTo(sx+90,560);cx.fill()}
 const b=BRANDS.find(x=>x.id==coordCards()[0].brand);
 drawIdol(idol,130,330+Math.sin(now*6)*4,b);cx.fillStyle="#fff";cx.font="bold 14px sans-serif";cx.textAlign="center";cx.fillText(idol.n,130,430);
 if(G.unit){drawIdol(G.unit,60,400+Math.sin(now*6+1)*4,null,.7);cx.fillStyle="#fff";cx.fillText("Unit ×1.2",60,480);}
 for(let l=0;l<4;l++){const x=LX+l*LW,pr=performance.now()-G.press[l]<120;cx.fillStyle=pr?"#fff5":"#0003";cx.fillRect(x+3,0,LW-6,560);
  cx.fillStyle="#fff";cx.font="bold 22px sans-serif";cx.textAlign="center";cx.fillText(KEYS[l].toUpperCase(),x+LW/2,535);}
 cx.strokeStyle="#fff";cx.lineWidth=4;cx.shadowColor="#ff4fa3";cx.shadowBlur=15;cx.beginPath();cx.moveTo(LX,HITY);cx.lineTo(LX+4*LW,HITY);cx.stroke();cx.shadowBlur=0;
 const cols=["#ff6fae","#ffb02e","#4fa8ff","#b04fff"];
 for(const n of G.notes){if(n.hit)continue;const y=HITY-(n.t-now)*SPEED;if(y<-30||y>600)continue;const x=LX+n.lane*LW+LW/2;
  cx.fillStyle=cols[n.lane];cx.strokeStyle="#fff";cx.lineWidth=3;cx.beginPath();for(let k=0;k<10;k++){const r=k%2?10:22,a=k*Math.PI/5-Math.PI/2+now*2;cx.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}cx.closePath();cx.fill();cx.stroke();}
 G.fx=G.fx.filter(f=>(f.life-=.02)>0);G.fx.forEach(f=>{cx.globalAlpha=f.life;cx.fillStyle=f.col;cx.font="bold 24px sans-serif";cx.fillText(f.txt,f.x,f.y-(1-f.life)*40)});cx.globalAlpha=1;
 cx.textAlign="left";cx.fillStyle="#fff";cx.font="bold 22px sans-serif";cx.fillText("Score "+Math.round(curScore()),20,34);cx.font="bold 15px sans-serif";cx.fillText("♪ "+G.s.name,20,58);
 if(G.ch)cx.fillText("Target "+G.ch.target,20,80);
 if(G.rival){const p=Math.max(0,Math.min(1,(now-G.t0)/(G.end-G.t0-1.5)));const rs=Math.round(G.rivalFinal*p*(.97+.03*Math.sin(now*3)));
  cx.fillStyle="#0006";cx.fillRect(14,92,220,70);drawIdol(G.rival,40,150,null,.35);cx.fillStyle="#9fe8ff";cx.fillText("VS "+G.rival.n,62,114);
  cx.fillStyle=curScore()>=rs?"#7fff9f":"#ff9f9f";cx.font="bold 20px sans-serif";cx.fillText(rs+(curScore()>=rs?"  ▲ you lead":"  ▼"),62,142);}
 if(G.combo>2){cx.textAlign="center";cx.fillStyle="#fff";cx.font="bold 30px sans-serif";cx.fillText(G.combo+" COMBO",LX+2*LW,200)}
 cx.textAlign="center";cx.fillStyle="#fff";cx.font="bold 14px sans-serif";cx.fillText("APPEAL",820,40);cx.fillStyle="#0005";cx.fillRect(800,50,40,240);
 const gg=cx.createLinearGradient(0,290,0,50);gg.addColorStop(0,"#ff4fa3");gg.addColorStop(1,"#ffe14f");cx.fillStyle=gg;cx.fillRect(800,290-2.4*G.gauge,40,2.4*G.gauge);
 if(G.gauge>=100&&!sp){cx.fillStyle=`rgba(255,255,255,${.5+.5*Math.sin(now*10)})`;cx.fillText("SPACE!",820,310);cx.fillText("Special",820,326);}
 if(sp&&el<6){cx.save();cx.translate(450,250);for(let k=0;k<24;k++){cx.rotate(Math.PI/12);cx.fillStyle=`hsla(${k*15+now*200},100%,70%,${Math.max(0,.5-el/12)})`;cx.fillRect(0,-4,600*Math.min(1,el*2),8)}cx.restore();
  if(el<2.5){cx.textAlign="center";cx.font=`bold ${40+el*16}px sans-serif`;cx.fillStyle="#fff";cx.strokeStyle="#ff4fa3";cx.lineWidth=6;cx.strokeText("✦ SPECIAL APPEAL ✦",450,260);cx.fillText("✦ SPECIAL APPEAL ✦",450,260);
   cx.font="bold 22px sans-serif";cx.fillText(b.name+" Shine!",450,300)}}
 if(now<G.t0){cx.textAlign="center";cx.font="bold 50px sans-serif";cx.fillStyle="#fff";cx.fillText(Math.ceil(G.t0-now),450,280)}
 if(now>G.end)finish();}
function finish(){const g=G;stopStage();const tot=g.notes.length||1,acc=(g.j.P+g.j.G*.6)/tot;const final=Math.round((g.score+g.sc.total*(1+acc))*(g.unit?1.2:1));
 const rank=acc>.9?"S":acc>.75?"A":acc>.5?"B":"C";const earn={S:40,A:25,B:15,C:8}[rank];S.dust+=earn;S.best=Math.max(S.best,final);
 let story="",rewards=[pick()];if(rank=="S")rewards.push(pick());const ch=g.ch;
 if(ch){const win=final>=ch.target&&(!g.rival||final>g.rivalFinal);const ci=STORY.indexOf(ch);
  story=`<br><b>${ch.t}</b>: target ${ch.target}${g.rival?` · ${g.rival.n} scored ${g.rivalFinal}`:""}<br>`+(win?`<span style="color:#2bb673;font-size:22px">🎉 Chapter Clear!</span>`:`<span style="color:#e04f6f;font-size:20px">So close... try again!</span>`);
  if(win){if(S.story<=ci){S.story=ci+1;rewards.unshift(pick(ch.reward))}story+=ci==STORY.length-1?"<br>🌟 You are the Grand Concert star! Story complete! 🌟":"";
   const q=g.rival?(ROLE.iceQueen==IDOLS.indexOf(g.rival)||g.rival==IDOLS[cast("iceQueen")]?"\"...Hmph. Fine. You shine. Next time, I won't lose.\"":"\"Wow, you got me! Crêpes are on me ♪\""):"";if(q)story+=`<br><i>${g.rival.n}: ${q}</i>`;}}
 save();go("result");
 $("resBox").innerHTML=`<div class="big">${rank}</div><b>${IDOLS[S.idol].n}</b>${g.unit?" & "+g.unit.n:""} — ${g.s.name}<br>Perfect ${g.j.P} · Good ${g.j.G} · Miss ${g.j.M} · Max Combo ${g.max} · Accuracy ${Math.round(acc*100)}% · Special Appeals ${g.nsp}<br>
 Rhythm ${Math.round(g.score)} + Coordinate ${g.sc.total}×${(1+acc).toFixed(2)}${g.unit?" ×1.2 unit":""} = <b style="font-size:26px;color:#ff4fa3">${final}</b><br>Best ${S.best}${story}<br><b>🎁 Reward cards:</b>`;
 $("reward").innerHTML=rewards.map(c=>cardHTML(c)).join("");
 $("resBtns").innerHTML=ch?`<button onclick="go('coord')">Retry</button><button onclick="go('story')">Story Menu</button>`:`<button onclick="go('coord')">Play Again</button><button onclick="go('title')">Title</button>`;flash();tone(1046,.3,"triangle",.15);}

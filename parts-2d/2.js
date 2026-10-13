"use strict";
const TYPES={Cute:"#ff6fae",Cool:"#4fa8ff",Sexy:"#b04fff",Pop:"#ffb02e"};
const BRANDS=[
 {id:"sa",name:"Sugar Angelique",type:"Cute",c1:"#ffc4df",c2:"#ff7ab8",icon:"🎀",motif:"frills"},
 {id:"rt",name:"Royal Tiara Reverie",type:"Cool",c1:"#d9d0ff",c2:"#6b52d9",icon:"👑",motif:"crown"},
 {id:"pp",name:"Prism Parfait",type:"Pop",c1:"#fff1a8",c2:"#ff8a5c",icon:"🍨",motif:"rainbow"},
 {id:"cc",name:"Candy Chime",type:"Cute",c1:"#c9f5ff",c2:"#ff9ad5",icon:"🍬",motif:"notes"},
 {id:"mb",name:"Maple Bow Cottage",type:"Sexy",c1:"#ffd9b0",c2:"#c8562a",icon:"🍁",motif:"leaf"}];
const SLOTS=["Tops","Bottoms","Shoes","Accessory","One-piece"];
const RAR={N:{w:55,ap:[300,450]},R:{w:30,ap:[500,650]},PR:{w:12,ap:[750,900]},CP:{w:3,ap:[1000,1200]}};
const NAMES={sa:["Sugar Frill Blouse","Lace Cake Skirt","Angel Ribbon Pumps","Halo Bonnet","Strawberry Lolita Dress"],
 rt:["Regal Velvet Jacket","Royal Pleat Skirt","Crown Jewel Boots","Starlight Tiara","Majesty Ball Gown"],
 pp:["Rainbow Scoop Top","Sundae Tier Skirt","Sprinkle Sneakers","Cherry Spoon Clip","Prism Parfait Dress"],
 cc:["Melody Drop Cardigan","Lollipop Tutu","Chime Bell Shoes","Candy Note Headband","Pastel Harmony Dress"],
 mb:["Maple Knit Sweater","Ribbon Plaid Skirt","Acorn Ankle Boots","Autumn Bow Beret","Harvest Ribbon Coat-Dress"]};
const BR_RAR={sa:["R","R","N","PR","CP"],rt:["PR","R","N","R","CP"],pp:["N","R","N","R","PR"],cc:["R","N","N","PR","PR"],mb:["R","N","R","N","CP"]};
const CARDS=[];BRANDS.forEach(b=>SLOTS.forEach((s,i)=>{const r=BR_RAR[b.id][i],[a,z]=RAR[r].ap;
 CARDS.push({id:b.id+i,brand:b.id,slot:s,name:NAMES[b.id][i],rarity:r,type:(i==2&&b.id=="pp")?"Cool":b.type,ap:Math.round((a+(z-a)*((i*37+b.name.length*13)%10)/10)/10)*10});}));
const IDOLS=[{n:"Hoshimi Lulu",t:"Cute",h:"#ff9ccc",e:"🌸",q:"Let's sparkle together!"},{n:"Aoba Rinne",t:"Cool",h:"#5b7bd9",e:"💎",q:"Elegance is my stage."},
 {n:"Kurenai Sera",t:"Sexy",h:"#a2322f",e:"🌹",q:"Fall for my autumn charm."},{n:"Hinata Pochi",t:"Pop",h:"#ffb02e",e:"🌻",q:"Yay~ full power fun!"},{n:"Shirayuki Mai",t:"Cute",h:"#e9e4ff",e:"❄️",q:"A sweet melody for you."}];
// Cast roles by index; if player picks a cast member, Lulu stands in for them.
const ROLE={friendA:3,friendB:4,friendlyRival:2,iceQueen:1};
function cast(role){const i=ROLE[role];return i==S.idol?0:i}
const CN=r=>IDOLS[cast(r)].n.split(" ")[1];
const STORY=[
 {t:"Ch.1 Audition Day",song:0,target:9000,reward:"sa0",lines:()=>[["friendA","Hey hey! You're auditioning for Starlight Stage Academy too? I'm "+CN("friendA")+"! Let's both pass!"],
  ["me","My heart is pounding... but I've got my dress cards ready!"],["friendA","Then go out there and sparkle! I'll cheer the loudest~!"]]},
 {t:"Ch.2 Academy Debut (Unit Stage)",song:0,target:14000,unit:"friendA",reward:"cc0",lines:()=>[["friendB","Um... h-hello. I'm "+CN("friendB")+". The teacher said we three share a dorm..."],
  ["friendA","Debut stage! Let's do it as a unit! Your appeal plus mine = double sparkle!"],["friendB","I'll... I'll harmonize with you. I promise I won't freeze up."],["me","Together, then!"]]},
 {t:"Ch.3 Friendly Rival Battle",song:1,target:16000,rival:"friendlyRival",rivalPow:17000,reward:"mb2",lines:()=>[["friendlyRival","So you're the new kid everyone's whispering about? I'm "+CN("friendlyRival")+"."],
  ["friendlyRival","No hard feelings, but I'm not going easy. A rival who holds back isn't a real rival, right? ♪"],["me","Then I'll give it everything too!"],["friendlyRival","That's the spirit. Win or lose, we grab crêpes after!"]]},
 {t:"Ch.4 Brand Muse Offer",song:1,target:20000,reward:"sa4",lines:()=>[["Designer","Your stage caught my eye. I design for a little brand — I'd like you to be its muse."],
  ["friendB","A muse...! That means a premium dress made just for you!"],["Designer","Show me a coordinate full of your own heart. Then the dress is yours."],["me","I'll show you my best coordinate!"]]},
 {t:"Ch.5 The Ice Queen",song:2,target:22000,rival:"iceQueen",rivalPow:26000,reward:"rt4",lines:()=>[["iceQueen","Hmph. So you're the muse everyone fusses over. I am "+IDOLS[cast("iceQueen")].n+", top of this academy."],
  ["iceQueen","Sparkle is cheap. Perfection is not. Show me you're worth my time."],["friendlyRival","Don't let her chill you out. She's tough, but she's fair."],["me","I'm not here to be perfect. I'm here to shine my way!"],["iceQueen","...We'll see."]]},
 {t:"Ch.6 Grand Concert (Unit Finale)",song:2,target:30000,unit:"friendB",rival:"iceQueen",rivalPow:30000,reward:"pp4",lines:()=>[["iceQueen","...Your last stage wasn't bad. I'll admit that much. Tonight I won't lose again."],
  ["friendB","I'll sing with you tonight. I'm not scared anymore — because you're here."],["friendA","And I'll be front row with a giant glowstick!!"],["friendlyRival","Go knock the frost off her crown! ♪"],["me","Everyone... let's make this the brightest stage ever!"]]}];
let S=JSON.parse(localStorage.getItem("isc_save")||"null")||{};
S=Object.assign({own:{},dust:50,idol:0,coord:{},best:0,story:0},S);
["sa0","sa1","sa2","sa3"].forEach(id=>S.own[id]=S.own[id]||1);
const save=()=>localStorage.setItem("isc_save",JSON.stringify(S));save();
const $=id=>document.getElementById(id);const card=id=>CARDS.find(c=>c.id==id);
let STORYCH=-1,slotTab="Tops",song=0;

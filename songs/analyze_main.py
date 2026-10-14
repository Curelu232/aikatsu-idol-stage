#!/usr/bin/env python3
"""Beat-track + chart a main song and merge into its sidecar json. Needs ffmpeg + librosa.
Usage: python3 analyze_main.py "Moonlight Revel Party.mp3" [bpm_hint]   then: python3 pack_songs.py"""
import sys,os,json,subprocess,numpy as np,librosa
f=sys.argv[1];hint=float(sys.argv[2]) if len(sys.argv)>2 else 120;sr=22050;hop=256
y=np.frombuffer(subprocess.run(["ffmpeg","-v","error","-i",f,"-ac","1","-ar",str(sr),"-f","f32le","-"],capture_output=True,check=True).stdout,dtype=np.float32)
oe=librosa.onset.onset_strength(y=y,sr=sr,hop_length=hop)
_,bf=librosa.beat.beat_track(onset_envelope=oe,sr=sr,hop_length=hop,start_bpm=hint,tightness=400);bt=librosa.frames_to_time(bf,sr=sr,hop_length=hop)
of=librosa.onset.onset_detect(onset_envelope=oe,sr=sr,hop_length=hop);ot=librosa.frames_to_time(of,sr=sr,hop_length=hop);st=oe[of]/np.percentile(oe[of],95)
chroma=librosa.feature.chroma_cqt(y=y,sr=sr,hop_length=hop);rms=librosa.feature.rms(y=y,hop_length=hop)[0]
g=np.r_[bt,(bt[:-1]+bt[1:])/2];isb=np.r_[np.ones(len(bt)),np.zeros(len(bt)-1)];o=np.argsort(g);g=g[o];isb=isb[o]
tf=lambda t:librosa.time_to_frames(t,sr=sr,hop_length=hop);bars=bt[::4];be=[rms[tf(bars[i]):tf(bars[i+1])].mean() for i in range(len(bars)-1)];thr=np.percentile(be,65)
ons={};err=[]
for t,s,fr in zip(ot,st,of):
  k=np.abs(g-t).argmin();d=abs(g[k]-t)
  if d>.06:continue
  err.append(d)
  if k in ons and ons[k][1]>=s:continue
  bi=max(0,np.searchsorted(bars,g[k])-1);ch=int(bi<len(be) and be[bi]>=thr and 2<=bi<len(be)-2)
  ons[k]=[round(float(g[k]),3),round(float(min(s,2)),2),int(isb[k]),ch,int(chroma[:,fr].argmax())]
secs=[]
for i in range(len(be)):
  nm="intro" if i<2 else "outro" if i>=len(be)-2 else "chorus" if be[i]>=thr else "verse"
  if secs and secs[-1]["name"]==nm:secs[-1]["end"]=round(float(bars[i+1]),3)
  else:secs.append(dict(name=nm,start=round(float(bars[i]),3),end=round(float(bars[i+1]),3)))
side=os.path.splitext(f)[0]+".json";m=json.load(open(side)) if os.path.exists(side) else {"title":os.path.splitext(os.path.basename(f))[0]}
ib=np.diff(bt);m.update(bpm=round(60/float(np.median(ib)),2),offset=round(float(bt[0]),3),beats=[round(float(b),3) for b in bt],ons=sorted(ons.values()),secs=secs)
json.dump(m,open(side,"w"))
on=ot[st>np.percentile(st,40)];sh=bt+np.median(ib)/4;sh=np.r_[sh,sh+np.median(ib)/2]
al=lambda gr:float((np.abs(on[:,None]-gr[None,:]).min(1)<.04).mean())
print(f"{m['title']}: bpm {m['bpm']} first beat {m['offset']}s, ibi sd {ib.std()*1000:.1f}ms; onsets within 40ms of tracked 8th grid {al(g):.1%} (shifted-grid baseline {al(sh):.1%}); {len(ons)} chart onsets")

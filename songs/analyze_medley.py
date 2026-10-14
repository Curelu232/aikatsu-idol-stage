# Medley section finder: splits a song into N contiguous sections (default 9: 8 solo parts + finale)
# using beat-synchronous MFCC+chroma features and agglomerative segmentation; boundaries snapped to bars.
import sys,json,os,subprocess,numpy as np,librosa
f=sys.argv[1];N=int(sys.argv[2]) if len(sys.argv)>2 else 9;sr=22050
y=np.frombuffer(subprocess.run(["ffmpeg","-v","error","-i",f,"-ac","1","-ar",str(sr),"-f","f32le","-"],capture_output=True,check=True).stdout,dtype=np.float32)
side=os.path.splitext(f)[0]+".json";meta=json.load(open(side))
beats=np.array(meta.get("beats") or librosa.frames_to_time(librosa.beat.beat_track(y=y,sr=sr)[1],sr=sr))
fr=librosa.time_to_frames(beats,sr=sr)
F=np.vstack([librosa.util.normalize(librosa.feature.mfcc(y=y,sr=sr,n_mfcc=13),axis=1),librosa.feature.chroma_cqt(y=y,sr=sr)])
Fs=librosa.util.sync(F,fr)
# novelty between consecutive 4-beat windows; boundaries = strongest novelty near the evenly spaced guess
K=4;nov=np.zeros(Fs.shape[1])
for i in range(K,Fs.shape[1]-K):nov[i]=np.linalg.norm(Fs[:,i:i+K].mean(1)-Fs[:,i-K:i].mean(1))
dur=len(y)/sr;bar=4*float(np.median(np.diff(beats)));t=[0.0]
for j in range(1,N):
  g=j*dur/N;idx=[i for i in range(len(nov)) if abs(beats[min(i,len(beats)-1)]-g)<=4.5 and beats[min(i,len(beats)-1)]>t[-1]+bar*2]
  i=max(idx,key=lambda i:nov[i]) if idx else int(np.argmin(abs(beats-g)));t.append(round(float(beats[min(i,len(beats)-1)]),3))
meta["medley"]=t;meta["medleyOrder"]=[0,5,1,2,3,6,7,8,-1]
json.dump(meta,open(side,"w"));print("medley sections:",", ".join(f"{x:.1f}s" for x in t),"dur",len(y)/sr)

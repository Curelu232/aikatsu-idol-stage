(()=>{var Ni=Object.create;var An=Object.defineProperty;var Ui=Object.getOwnPropertyDescriptor;var Oi=Object.getOwnPropertyNames;var Ci=Object.getPrototypeOf,Di=Object.prototype.hasOwnProperty;var Bi=(u,e)=>()=>(e||u((e={exports:{}}).exports,e),e.exports);var Fi=(u,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Oi(e))!Di.call(u,i)&&i!==t&&An(u,i,{get:()=>e[i],enumerable:!(n=Ui(e,i))||n.enumerable});return u};var ye=(u,e,t)=>(t=u!=null?Ni(Ci(u)):{},Fi(e||!u||!u.__esModule?An(t,"default",{value:u,enumerable:!0}):t,u));var ae=Bi((ds,Sn)=>{Sn.exports=window.THREE});var p=ye(ae());var U=ye(ae());function pt(u,e){if(e===U.TrianglesDrawMode)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),u;if(e===U.TriangleFanDrawMode||e===U.TriangleStripDrawMode){let t=u.getIndex();if(t===null){let s=[],a=u.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)s.push(o);u.setIndex(s),t=u.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),u}let n=t.count-2,i=[];if(e===U.TriangleFanDrawMode)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=u.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),u}var we=class extends p.Loader{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Et(t)}),this.register(function(t){return new St(t)}),this.register(function(t){return new bt(t)}),this.register(function(t){return new Rt(t)}),this.register(function(t){return new Mt(t)}),this.register(function(t){return new yt(t)}),this.register(function(t){return new wt(t)}),this.register(function(t){return new Tt(t)}),this.register(function(t){return new At(t)}),this.register(function(t){return new xt(t)}),this.register(function(t){return new _t(t)}),this.register(function(t){return new Lt(t)}),this.register(function(t){return new It(t)})}load(e,t,n,i){let r=this,s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=p.LoaderUtils.extractUrlBase(e),this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},o=new p.FileLoader(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{r.parse(l,s,function(c){t(c),r.manager.itemEnd(e)},a)}catch(c){a(c)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,s={},a={},o=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(o.decode(new Uint8Array(e,0,4))===Nn){try{s[A.KHR_BINARY_GLTF]=new Pt(e)}catch(d){i&&i(d);return}r=JSON.parse(s[A.KHR_BINARY_GLTF].content)}else r=JSON.parse(o.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Bt(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){let d=this.pluginCallbacks[c](l);a[d.name]=d,s[d.name]=!0}if(r.extensionsUsed)for(let c=0;c<r.extensionsUsed.length;++c){let d=r.extensionsUsed[c],f=r.extensionsRequired||[];switch(d){case A.KHR_MATERIALS_UNLIT:s[d]=new vt;break;case A.KHR_DRACO_MESH_COMPRESSION:s[d]=new Ht(r,this.dracoLoader);break;case A.KHR_TEXTURE_TRANSFORM:s[d]=new Nt;break;case A.KHR_MESH_QUANTIZATION:s[d]=new Ut;break;default:f.indexOf(d)>=0&&a[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(s),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Vi(){let u={};return{get:function(e){return u[e]},add:function(e,t){u[e]=t},remove:function(e){delete u[e]},removeAll:function(){u={}}}}var A={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},_t=class{constructor(e){this.parser=e,this.name=A.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,o=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,c=new p.Color(16777215);o.color!==void 0&&c.fromArray(o.color);let d=o.range!==void 0?o.range:0;switch(o.type){case"directional":l=new p.DirectionalLight(c),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new p.PointLight(c),l.distance=d;break;case"spot":l=new p.SpotLight(c),l.distance=d,o.spot=o.spot||{},o.spot.innerConeAngle=o.spot.innerConeAngle!==void 0?o.spot.innerConeAngle:0,o.spot.outerConeAngle=o.spot.outerConeAngle!==void 0?o.spot.outerConeAngle:Math.PI/4,l.angle=o.spot.outerConeAngle,l.penumbra=1-o.spot.innerConeAngle/o.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+o.type)}return l.position.set(0,0,0),l.decay=2,j(l,o),o.intensity!==void 0&&(l.intensity=o.intensity),l.name=t.createUniqueName(o.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(o){return n._getNodeRef(t.cache,a,o)})}},vt=class{constructor(){this.name=A.KHR_MATERIALS_UNLIT}getMaterialType(){return p.MeshBasicMaterial}extendParams(e,t,n){let i=[];e.color=new p.Color(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let s=r.baseColorFactor;e.color.fromArray(s),e.opacity=s[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,p.sRGBEncoding))}return Promise.all(i)}},Tt=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Et=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:p.MeshPhysicalMaterial}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){let a=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new p.Vector2(a,a)}return Promise.all(r)}},xt=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:p.MeshPhysicalMaterial}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(r)}},Rt=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:p.MeshPhysicalMaterial}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new p.Color(0,0,0),t.sheenRoughness=0,t.sheen=1;let s=i.extensions[this.name];return s.sheenColorFactor!==void 0&&t.sheenColor.fromArray(s.sheenColorFactor),s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,p.sRGBEncoding)),s.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(r)}},Mt=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:p.MeshPhysicalMaterial}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(r)}},yt=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:p.MeshPhysicalMaterial}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;let a=s.attenuationColor||[1,1,1];return t.attenuationColor=new p.Color(a[0],a[1],a[2]),Promise.all(r)}},wt=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:p.MeshPhysicalMaterial}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},At=class{constructor(e){this.parser=e,this.name=A.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:p.MeshPhysicalMaterial}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));let a=s.specularColorFactor||[1,1,1];return t.specularColor=new p.Color(a[0],a[1],a[2]),s.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,p.sRGBEncoding)),Promise.all(r)}},St=class{constructor(e){this.parser=e,this.name=A.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,s)}},bt=class{constructor(e){this.parser=e,this.name=A.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let s=r.extensions[t],a=i.images[s.source],o=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(o=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,s.source,o);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Lt=class{constructor(e){this.name=A.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let o=i.byteOffset||0,l=i.byteLength||0,c=i.count,d=i.byteStride,f=new Uint8Array(a,o,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(c,d,f,i.mode,i.filter).then(function(m){return m.buffer}):s.ready.then(function(){let m=new ArrayBuffer(c*d);return s.decodeGltfBuffer(new Uint8Array(m),c,d,f,i.mode,i.filter),m})})}else return null}},It=class{constructor(e){this.name=A.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==C.TRIANGLES&&l.mode!==C.TRIANGLE_STRIP&&l.mode!==C.TRIANGLE_FAN&&l.mode!==void 0)return null;let s=n.extensions[this.name].attributes,a=[],o={};for(let l in s)a.push(this.parser.getDependency("accessor",s[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let c=l.pop(),d=c.isGroup?c.children:[c],f=l[0].count,m=[];for(let T of d){let g=new p.Matrix4,v=new p.Vector3,_=new p.Quaternion,R=new p.Vector3(1,1,1),x=new p.InstancedMesh(T.geometry,T.material,f);for(let E=0;E<f;E++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,E),o.ROTATION&&_.fromBufferAttribute(o.ROTATION,E),o.SCALE&&R.fromBufferAttribute(o.SCALE,E),x.setMatrixAt(E,g.compose(v,_,R));for(let E in o)E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&T.geometry.setAttribute(E,o[E]);p.Object3D.prototype.copy.call(x,T),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),m.push(x)}return c.isGroup?(c.clear(),c.add(...m),c):m[0]}))}},Nn="glTF",le=12,bn={JSON:1313821514,BIN:5130562},Pt=class{constructor(e){this.name=A.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,le),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Nn)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-le,r=new DataView(e,le),s=0;for(;s<i;){let a=r.getUint32(s,!0);s+=4;let o=r.getUint32(s,!0);if(s+=4,o===bn.JSON){let l=new Uint8Array(e,le+s,a);this.content=n.decode(l)}else if(o===bn.BIN){let l=le+s;this.body=e.slice(l,l+a)}s+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Ht=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=A.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,a={},o={},l={};for(let c in s){let d=Ct[c]||c.toLowerCase();a[d]=s[c]}for(let c in e.attributes){let d=Ct[c]||c.toLowerCase();if(s[c]!==void 0){let f=n.accessors[e.attributes[c]],m=Z[f.componentType];l[d]=m.name,o[d]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(c){return new Promise(function(d){i.decodeDracoFile(c,function(f){for(let m in f.attributes){let T=f.attributes[m],g=o[m];g!==void 0&&(T.normalized=g)}d(f)},a,l)})})}},Nt=class{constructor(){this.name=A.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ut=class{constructor(){this.name=A.KHR_MESH_QUANTIZATION}},Ae=class extends p.Interpolant{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[r+s];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=a*2,l=a*3,c=i-t,d=(n-t)/c,f=d*d,m=f*d,T=e*l,g=T-l,v=-2*m+3*f,_=m-f,R=1-v,x=_-f+d;for(let E=0;E!==a;E++){let y=s[g+E+a],w=s[g+E+o]*c,M=s[T+E+a],L=s[T+E]*c;r[E]=R*y+x*w+v*M+_*L}return r}},ki=new p.Quaternion,Ot=class extends Ae{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return ki.fromArray(r).normalize().toArray(r),r}},C={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Z={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ln={9728:p.NearestFilter,9729:p.LinearFilter,9984:p.NearestMipmapNearestFilter,9985:p.LinearMipmapNearestFilter,9986:p.NearestMipmapLinearFilter,9987:p.LinearMipmapLinearFilter},In={33071:p.ClampToEdgeWrapping,33648:p.MirroredRepeatWrapping,10497:p.RepeatWrapping},mt={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ct={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},W={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Wi={CUBICSPLINE:void 0,LINEAR:p.InterpolateLinear,STEP:p.InterpolateDiscrete},gt={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ji(u){return u.DefaultMaterial===void 0&&(u.DefaultMaterial=new p.MeshStandardMaterial({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:p.FrontSide})),u.DefaultMaterial}function ue(u,e,t){for(let n in t.extensions)u[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function j(u,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(u.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function zi(u,e,t){let n=!1,i=!1,r=!1;for(let l=0,c=e.length;l<c;l++){let d=e[l];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(u);let s=[],a=[],o=[];for(let l=0,c=e.length;l<c;l++){let d=e[l];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):u.attributes.position;s.push(f)}if(i){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):u.attributes.normal;a.push(f)}if(r){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):u.attributes.color;o.push(f)}}return Promise.all([Promise.all(s),Promise.all(a),Promise.all(o)]).then(function(l){let c=l[0],d=l[1],f=l[2];return n&&(u.morphAttributes.position=c),i&&(u.morphAttributes.normal=d),r&&(u.morphAttributes.color=f),u.morphTargetsRelative=!0,u})}function Gi(u,e){if(u.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)u.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(u.morphTargetInfluences.length===t.length){u.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)u.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Xi(u){let e=u.extensions&&u.extensions[A.KHR_DRACO_MESH_COMPRESSION],t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Pn(e.attributes):t=u.indices+":"+Pn(u.attributes)+":"+u.mode,t}function Pn(u){let e="",t=Object.keys(u).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+u[t[n]]+";";return e}function Dt(u){switch(u){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function qi(u){return u.search(/\.jpe?g($|\?)/i)>0||u.search(/^data\:image\/jpeg/)===0?"image/jpeg":u.search(/\.webp($|\?)/i)>0||u.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var Yi=new p.Matrix4,Bt=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Vi,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new p.TextureLoader(this.options.manager):this.textureLoader=new p.ImageBitmapLoader(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new p.FileLoader(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){let a={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};ue(r,a,i),j(a,i),Promise.all(n._invokeAll(function(o){return o.afterRoot&&o.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let s=t[i].joints;for(let a=0,o=s.length;a<o;a++)e[s[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(s,a)=>{let o=this.associations.get(s);o!=null&&this.associations.set(a,o);for(let[l,c]of s.children.entries())r(c,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[A.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,s){n.load(p.LoaderUtils.resolveURL(t.uri,i.path),r,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let s=mt[i.type],a=Z[i.componentType],o=i.normalized===!0,l=new a(i.count*s);return Promise.resolve(new p.BufferAttribute(l,s,o))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(s){let a=s[0],o=mt[i.type],l=Z[i.componentType],c=l.BYTES_PER_ELEMENT,d=c*o,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,T=i.normalized===!0,g,v;if(m&&m!==d){let _=Math.floor(f/m),R="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count,x=t.cache.get(R);x||(g=new l(a,_*m,i.count*m/c),x=new p.InterleavedBuffer(g,m/c),t.cache.add(R,x)),v=new p.InterleavedBufferAttribute(x,o,f%m/c,T)}else a===null?g=new l(i.count*o):g=new l(a,f,i.count*o),v=new p.BufferAttribute(g,o,T);if(i.sparse!==void 0){let _=mt.SCALAR,R=Z[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,E=i.sparse.values.byteOffset||0,y=new R(s[1],x,i.sparse.count*_),w=new l(s[2],E,i.sparse.count*o);a!==null&&(v=new p.BufferAttribute(v.array.slice(),v.itemSize,v.normalized));for(let M=0,L=y.length;M<L;M++){let b=y[M];if(v.setX(b,w[M*o]),o>=2&&v.setY(b,w[M*o+1]),o>=3&&v.setZ(b,w[M*o+2]),o>=4&&v.setW(b,w[M*o+3]),o>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return v})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,s=t.images[r],a=this.textureLoader;if(s.uri){let o=n.manager.getHandler(s.uri);o!==null&&(a=o)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,s=r.textures[e],a=r.images[t],o=(a.uri||a.bufferView)+":"+s.sampler;if(this.textureCache[o])return this.textureCache[o];let l=this.loadImageSource(t,n).then(function(c){c.flipY=!1,c.name=s.name||a.name||"";let f=(r.samplers||{})[s.sampler]||{};return c.magFilter=Ln[f.magFilter]||p.LinearFilter,c.minFilter=Ln[f.minFilter]||p.LinearMipmapLinearFilter,c.wrapS=In[f.wrapS]||p.RepeatWrapping,c.wrapT=In[f.wrapT]||p.RepeatWrapping,i.associations.set(c,{textures:e}),c}).catch(function(){return null});return this.textureCache[o]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let s=i.images[e],a=self.URL||self.webkitURL,o=s.uri||"",l=!1;if(s.bufferView!==void 0)o=n.getDependency("bufferView",s.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:s.mimeType});return o=a.createObjectURL(f),o});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let c=Promise.resolve(o).then(function(d){return new Promise(function(f,m){let T=f;t.isImageBitmapLoader===!0&&(T=function(g){let v=new p.Texture(g);v.needsUpdate=!0,f(v)}),t.load(p.LoaderUtils.resolveURL(d,r.path),T,void 0,m)})}).then(function(d){return l===!0&&a.revokeObjectURL(o),d.userData.mimeType=s.mimeType||qi(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",o),d});return this.sourceCache[e]=c,c}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),r.extensions[A.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[A.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let o=r.associations.get(s);s=r.extensions[A.KHR_TEXTURE_TRANSFORM].extendTexture(s,a),r.associations.set(s,o)}}return i!==void 0&&(s.encoding=i),e[t]=s,s})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,o=this.cache.get(a);o||(o=new p.PointsMaterial,p.Material.prototype.copy.call(o,n),o.color.copy(n.color),o.map=n.map,o.sizeAttenuation=!1,this.cache.add(a,o)),n=o}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,o=this.cache.get(a);o||(o=new p.LineBasicMaterial,p.Material.prototype.copy.call(o,n),o.color.copy(n.color),this.cache.add(a,o)),n=o}if(i||r||s){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),s&&(a+="flat-shading:");let o=this.cache.get(a);o||(o=n.clone(),r&&(o.vertexColors=!0),s&&(o.flatShading=!0),i&&(o.normalScale&&(o.normalScale.y*=-1),o.clearcoatNormalScale&&(o.clearcoatNormalScale.y*=-1)),this.cache.add(a,o),this.associations.set(o,this.associations.get(n))),n=o}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return p.MeshStandardMaterial}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],s,a={},o=r.extensions||{},l=[];if(o[A.KHR_MATERIALS_UNLIT]){let d=i[A.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),l.push(d.extendParams(a,r,t))}else{let d=r.pbrMetallicRoughness||{};if(a.color=new p.Color(1,1,1),a.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;a.color.fromArray(f),a.opacity=f[3]}d.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",d.baseColorTexture,p.sRGBEncoding)),a.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,a.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",d.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=p.DoubleSide);let c=r.alphaMode||gt.OPAQUE;if(c===gt.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,c===gt.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&s!==p.MeshBasicMaterial&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new p.Vector2(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;a.normalScale.set(d,d)}return r.occlusionTexture!==void 0&&s!==p.MeshBasicMaterial&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&s!==p.MeshBasicMaterial&&(a.emissive=new p.Color().fromArray(r.emissiveFactor)),r.emissiveTexture!==void 0&&s!==p.MeshBasicMaterial&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,p.sRGBEncoding)),Promise.all(l).then(function(){let d=new s(a);return r.name&&(d.name=r.name),j(d,r),t.associations.set(d,{materials:e}),r.extensions&&ue(i,d,r),d})}createUniqueName(e){let t=p.PropertyBinding.sanitizeNodeName(e||""),n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[A.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(o){return Hn(o,a,t)})}let s=[];for(let a=0,o=e.length;a<o;a++){let l=e[a],c=Xi(l),d=i[c];if(d)s.push(d.promise);else{let f;l.extensions&&l.extensions[A.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Hn(new p.BufferGeometry,l,t),i[c]={primitive:l,promise:f},s.push(f)}}return Promise.all(s)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],s=r.primitives,a=[];for(let o=0,l=s.length;o<l;o++){let c=s[o].material===void 0?ji(this.cache):this.getDependency("material",s[o].material);a.push(c)}return a.push(t.loadGeometries(s)),Promise.all(a).then(function(o){let l=o.slice(0,o.length-1),c=o[o.length-1],d=[];for(let m=0,T=c.length;m<T;m++){let g=c[m],v=s[m],_,R=l[m];if(v.mode===C.TRIANGLES||v.mode===C.TRIANGLE_STRIP||v.mode===C.TRIANGLE_FAN||v.mode===void 0)_=r.isSkinnedMesh===!0?new p.SkinnedMesh(g,R):new p.Mesh(g,R),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),v.mode===C.TRIANGLE_STRIP?_.geometry=pt(_.geometry,p.TriangleStripDrawMode):v.mode===C.TRIANGLE_FAN&&(_.geometry=pt(_.geometry,p.TriangleFanDrawMode));else if(v.mode===C.LINES)_=new p.LineSegments(g,R);else if(v.mode===C.LINE_STRIP)_=new p.Line(g,R);else if(v.mode===C.LINE_LOOP)_=new p.LineLoop(g,R);else if(v.mode===C.POINTS)_=new p.Points(g,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+v.mode);Object.keys(_.geometry.morphAttributes).length>0&&Gi(_,r),_.name=t.createUniqueName(r.name||"mesh_"+e),j(_,r),v.extensions&&ue(i,_,v),t.assignFinalMaterial(_),d.push(_)}for(let m=0,T=d.length;m<T;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return d[0];let f=new p.Group;t.associations.set(f,{meshes:e});for(let m=0,T=d.length;m<T;m++)f.add(d[m]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new p.PerspectiveCamera(p.MathUtils.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new p.OrthographicCamera(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),j(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),s=i,a=[],o=[];for(let l=0,c=s.length;l<c;l++){let d=s[l];if(d){a.push(d);let f=new p.Matrix4;r!==null&&f.fromArray(r.array,l*16),o.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new p.Skeleton(a,o)})}loadAnimation(e){let n=this.json.animations[e],i=[],r=[],s=[],a=[],o=[];for(let l=0,c=n.channels.length;l<c;l++){let d=n.channels[l],f=n.samplers[d.sampler],m=d.target,T=m.node,g=n.parameters!==void 0?n.parameters[f.input]:f.input,v=n.parameters!==void 0?n.parameters[f.output]:f.output;i.push(this.getDependency("node",T)),r.push(this.getDependency("accessor",g)),s.push(this.getDependency("accessor",v)),a.push(f),o.push(m)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(s),Promise.all(a),Promise.all(o)]).then(function(l){let c=l[0],d=l[1],f=l[2],m=l[3],T=l[4],g=[];for(let _=0,R=c.length;_<R;_++){let x=c[_],E=d[_],y=f[_],w=m[_],M=T[_];if(x===void 0)continue;x.updateMatrix();let L;switch(W[M.path]){case W.weights:L=p.NumberKeyframeTrack;break;case W.rotation:L=p.QuaternionKeyframeTrack;break;case W.position:case W.scale:default:L=p.VectorKeyframeTrack;break}let b=x.name?x.name:x.uuid,I=w.interpolation!==void 0?Wi[w.interpolation]:p.InterpolateLinear,P=[];W[M.path]===W.weights?x.traverse(function(H){H.morphTargetInfluences&&P.push(H.name?H.name:H.uuid)}):P.push(b);let N=y.array;if(y.normalized){let H=Dt(N.constructor),k=new Float32Array(N.length);for(let O=0,K=N.length;O<K;O++)k[O]=N[O]*H;N=k}for(let H=0,k=P.length;H<k;H++){let O=new L(P[H]+"."+W[M.path],E.array,N,I);w.interpolation==="CUBICSPLINE"&&(O.createInterpolant=function(se){let oe=this instanceof p.QuaternionKeyframeTrack?Ot:Ae;return new oe(this.times,this.values,this.getValueSize()/3,se)},O.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(O)}}let v=n.name?n.name:"animation_"+e;return new p.AnimationClip(v,void 0,g)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let s=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&s.traverse(function(a){if(a.isMesh)for(let o=0,l=i.weights.length;o<l;o++)a.morphTargetInfluences[o]=i.weights[o]}),s})}loadNode(e){let t=this.json,n=this.extensions,i=this,r=t.nodes[e],s=r.name?i.createUniqueName(r.name):"";return function(){let a=[],o=i._invokeOne(function(f){return f.createNodeMesh&&f.createNodeMesh(e)});o&&a.push(o),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(f){return i._getNodeRef(i.cameraCache,r.camera,f)})),i._invokeAll(function(f){return f.createNodeAttachment&&f.createNodeAttachment(e)}).forEach(function(f){a.push(f)});let l=[],c=r.children||[];for(let f=0,m=c.length;f<m;f++)l.push(i.getDependency("node",c[f]));let d=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([Promise.all(a),Promise.all(l),d])}().then(function(a){let o=a[0],l=a[1],c=a[2],d;if(r.isBone===!0?d=new p.Bone:o.length>1?d=new p.Group:o.length===1?d=o[0]:d=new p.Object3D,d!==o[0])for(let f=0,m=o.length;f<m;f++)d.add(o[f]);if(r.name&&(d.userData.name=r.name,d.name=s),j(d,r),r.extensions&&ue(n,d,r),r.matrix!==void 0){let f=new p.Matrix4;f.fromArray(r.matrix),d.applyMatrix4(f)}else r.translation!==void 0&&d.position.fromArray(r.translation),r.rotation!==void 0&&d.quaternion.fromArray(r.rotation),r.scale!==void 0&&d.scale.fromArray(r.scale);i.associations.has(d)||i.associations.set(d,{}),i.associations.get(d).nodes=e,c!==null&&d.traverse(function(f){f.isSkinnedMesh&&f.bind(c,Yi)});for(let f=0,m=l.length;f<m;f++)d.add(l[f]);return d})}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new p.Group;n.name&&(r.name=i.createUniqueName(n.name)),j(r,n),n.extensions&&ue(t,r,n);let s=n.nodes||[],a=[];for(let o=0,l=s.length;o<l;o++)a.push(i.getDependency("node",s[o]));return Promise.all(a).then(function(o){for(let c=0,d=o.length;c<d;c++)r.add(o[c]);let l=c=>{let d=new Map;for(let[f,m]of i.associations)(f instanceof p.Material||f instanceof p.Texture)&&d.set(f,m);return c.traverse(f=>{let m=i.associations.get(f);m!=null&&d.set(f,m)}),d};return i.associations=l(r),r})}};function $i(u,e,t){let n=e.attributes,i=new p.Box3;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],o=a.min,l=a.max;if(o!==void 0&&l!==void 0){if(i.set(new p.Vector3(o[0],o[1],o[2]),new p.Vector3(l[0],l[1],l[2])),a.normalized){let c=Dt(Z[a.componentType]);i.min.multiplyScalar(c),i.max.multiplyScalar(c)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new p.Vector3,o=new p.Vector3;for(let l=0,c=r.length;l<c;l++){let d=r[l];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],m=f.min,T=f.max;if(m!==void 0&&T!==void 0){if(o.setX(Math.max(Math.abs(m[0]),Math.abs(T[0]))),o.setY(Math.max(Math.abs(m[1]),Math.abs(T[1]))),o.setZ(Math.max(Math.abs(m[2]),Math.abs(T[2]))),f.normalized){let g=Dt(Z[f.componentType]);o.multiplyScalar(g)}a.max(o)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}u.boundingBox=i;let s=new p.Sphere;i.getCenter(s.center),s.radius=i.min.distanceTo(i.max)/2,u.boundingSphere=s}function Hn(u,e,t){let n=e.attributes,i=[];function r(s,a){return t.getDependency("accessor",s).then(function(o){u.setAttribute(a,o)})}for(let s in n){let a=Ct[s]||s.toLowerCase();a in u.attributes||i.push(r(n[s],a))}if(e.indices!==void 0&&!u.index){let s=t.getDependency("accessor",e.indices).then(function(a){u.setIndex(a)});i.push(s)}return j(u,e),$i(u,e,t),Promise.all(i).then(function(){return e.targets!==void 0?zi(u,e.targets,t):u})}var h=ye(ae()),Ie=ye(ae());var He=class extends h.Object3D{constructor(e){super(),this.weight=0,this.isBinary=!1,this.overrideBlink="none",this.overrideLookAt="none",this.overrideMouth="none",this._binds=[],this.name=`VRMExpression_${e}`,this.expressionName=e,this.type="VRMExpression",this.visible=!1}get overrideBlinkAmount(){return this.overrideBlink==="block"?0<this.weight?1:0:this.overrideBlink==="blend"?this.weight:0}get overrideLookAtAmount(){return this.overrideLookAt==="block"?0<this.weight?1:0:this.overrideLookAt==="blend"?this.weight:0}get overrideMouthAmount(){return this.overrideMouth==="block"?0<this.weight?1:0:this.overrideMouth==="blend"?this.weight:0}addBind(e){this._binds.push(e)}applyWeight(e){var t;let n=this.isBinary?this.weight<=.5?0:1:this.weight;n*=(t=e?.multiplier)!==null&&t!==void 0?t:1,this._binds.forEach(i=>i.applyWeight(n))}clearAppliedWeight(){this._binds.forEach(e=>e.clearAppliedWeight())}};function S(u,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(d){s(d)}}function o(c){try{l(n.throw(c))}catch(d){s(d)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((n=n.apply(u,e||[])).next())})}function Zn(u,e,t){var n,i;let r=u.parser.json,s=(n=r.nodes)===null||n===void 0?void 0:n[e];if(s==null)return console.warn(`extractPrimitivesInternal: Attempt to use nodes[${e}] of glTF but the node doesn't exist`),null;let a=s.mesh;if(a==null)return null;let o=(i=r.meshes)===null||i===void 0?void 0:i[a];if(o==null)return console.warn(`extractPrimitivesInternal: Attempt to use meshes[${a}] of glTF but the mesh doesn't exist`),null;let l=o.primitives.length,c=[];return t.traverse(d=>{c.length<l&&d.isMesh&&c.push(d)}),c}function Un(u,e){return S(this,void 0,void 0,function*(){let t=yield u.parser.getDependency("node",e);return Zn(u,e,t)})}function On(u){return S(this,void 0,void 0,function*(){let e=yield u.parser.getDependencies("node"),t=new Map;return e.forEach((n,i)=>{let r=Zn(u,i,n);r!=null&&t.set(i,r)}),t})}function Cn(u,e){var t,n;let i=parseInt(h.REVISION,10),r=null;if(i>=133)r=(n=(t=u.associations.get(e))===null||t===void 0?void 0:t.materials)!==null&&n!==void 0?n:null;else{let a=u.associations.get(e);a?.type==="materials"&&(r=a.index)}return r}var Xt={Aa:"aa",Ih:"ih",Ou:"ou",Ee:"ee",Oh:"oh",Blink:"blink",Happy:"happy",Angry:"angry",Sad:"sad",Relaxed:"relaxed",LookUp:"lookUp",Surprised:"surprised",LookDown:"lookDown",LookLeft:"lookLeft",LookRight:"lookRight",BlinkLeft:"blinkLeft",BlinkRight:"blinkRight",Neutral:"neutral"};function Jn(u){return Math.max(Math.min(u,1),0)}var Ne=class u{constructor(){this.blinkExpressionNames=["blink","blinkLeft","blinkRight"],this.lookAtExpressionNames=["lookLeft","lookRight","lookUp","lookDown"],this.mouthExpressionNames=["aa","ee","ih","oh","ou"],this._expressions=[],this._expressionMap={}}get expressions(){return this._expressions.concat()}get expressionMap(){return Object.assign({},this._expressionMap)}get presetExpressionMap(){let e={},t=new Set(Object.values(Xt));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)&&(e[n]=i)}),e}get customExpressionMap(){let e={},t=new Set(Object.values(Xt));return Object.entries(this._expressionMap).forEach(([n,i])=>{t.has(n)||(e[n]=i)}),e}copy(e){return this._expressions.concat().forEach(n=>{this.unregisterExpression(n)}),e._expressions.forEach(n=>{this.registerExpression(n)}),this.blinkExpressionNames=e.blinkExpressionNames.concat(),this.lookAtExpressionNames=e.lookAtExpressionNames.concat(),this.mouthExpressionNames=e.mouthExpressionNames.concat(),this}clone(){return new u().copy(this)}getExpression(e){var t;return(t=this._expressionMap[e])!==null&&t!==void 0?t:null}registerExpression(e){this._expressions.push(e),this._expressionMap[e.expressionName]=e}unregisterExpression(e){let t=this._expressions.indexOf(e);t===-1&&console.warn("VRMExpressionManager: The specified expressions is not registered"),this._expressions.splice(t,1),delete this._expressionMap[e.expressionName]}getValue(e){var t;let n=this.getExpression(e);return(t=n?.weight)!==null&&t!==void 0?t:null}setValue(e,t){let n=this.getExpression(e);n&&(n.weight=Jn(t))}getExpressionTrackName(e){let t=this.getExpression(e);return t?`${t.name}.weight`:null}update(){let e=this._calculateWeightMultipliers();this._expressions.forEach(t=>{t.clearAppliedWeight()}),this._expressions.forEach(t=>{let n=1,i=t.expressionName;this.blinkExpressionNames.indexOf(i)!==-1&&(n*=e.blink),this.lookAtExpressionNames.indexOf(i)!==-1&&(n*=e.lookAt),this.mouthExpressionNames.indexOf(i)!==-1&&(n*=e.mouth),t.applyWeight({multiplier:n})})}_calculateWeightMultipliers(){let e=1,t=1,n=1;return this._expressions.forEach(i=>{e-=i.overrideBlinkAmount,t-=i.overrideLookAtAmount,n-=i.overrideMouthAmount}),e=Math.max(0,e),t=Math.max(0,t),n=Math.max(0,n),{blink:e,lookAt:t,mouth:n}}},ce={Color:"color",EmissionColor:"emissionColor",ShadeColor:"shadeColor",MatcapColor:"matcapColor",RimColor:"rimColor",OutlineColor:"outlineColor"},Qi={_Color:ce.Color,_EmissionColor:ce.EmissionColor,_ShadeColor:ce.ShadeColor,_RimColor:ce.RimColor,_OutlineColor:ce.OutlineColor},Ki=new h.Color,ge=class u{constructor({material:e,type:t,targetValue:n}){var i,r,s;this.material=e,this.type=t,this.targetValue=n;let a=(i=Object.entries(u._propertyNameMapMap).find(([l])=>e[l]===!0))===null||i===void 0?void 0:i[1],o=(r=a?.[t])!==null&&r!==void 0?r:null;if(o==null)console.warn(`Tried to add a material color bind to the material ${(s=e.name)!==null&&s!==void 0?s:"(no name)"}, the type ${t} but the material or the type is not supported.`),this._state=null;else{let c=e[o].clone(),d=new h.Color(n.r-c.r,n.g-c.g,n.b-c.b);this._state={propertyName:o,initialValue:c,deltaValue:d}}}applyWeight(e){if(this._state==null)return;let{propertyName:t,deltaValue:n}=this._state,i=this.material[t];i!==void 0&&(i.add(Ki.copy(n).multiplyScalar(e)),typeof this.material.shouldApplyUniforms=="boolean"&&(this.material.shouldApplyUniforms=!0))}clearAppliedWeight(){if(this._state==null)return;let{propertyName:e,initialValue:t}=this._state,n=this.material[e];n!==void 0&&(n.copy(t),typeof this.material.shouldApplyUniforms=="boolean"&&(this.material.shouldApplyUniforms=!0))}};ge._propertyNameMapMap={isMeshStandardMaterial:{color:"color",emissionColor:"emissive"},isMeshBasicMaterial:{color:"color"},isMToonMaterial:{color:"color",emissionColor:"emissive",outlineColor:"outlineColorFactor",matcapColor:"matcapFactor",rimColor:"parametricRimColorFactor",shadeColor:"shadeColorFactor"}};var Ue=class{constructor({primitives:e,index:t,weight:n}){this.primitives=e,this.index=t,this.weight=n}applyWeight(e){this.primitives.forEach(t=>{var n;((n=t.morphTargetInfluences)===null||n===void 0?void 0:n[this.index])!=null&&(t.morphTargetInfluences[this.index]+=this.weight*e)})}clearAppliedWeight(){this.primitives.forEach(e=>{var t;((t=e.morphTargetInfluences)===null||t===void 0?void 0:t[this.index])!=null&&(e.morphTargetInfluences[this.index]=0)})}},Dn=new h.Vector2,_e=class u{constructor({material:e,scale:t,offset:n}){var i,r;this.material=e,this.scale=t,this.offset=n;let s=(i=Object.entries(u._propertyNamesMap).find(([a])=>e[a]===!0))===null||i===void 0?void 0:i[1];s==null?(console.warn(`Tried to add a texture transform bind to the material ${(r=e.name)!==null&&r!==void 0?r:"(no name)"} but the material is not supported.`),this._properties=[]):(this._properties=[],s.forEach(a=>{var o;let l=(o=e[a])===null||o===void 0?void 0:o.clone();if(!l)return null;e[a]=l;let c=l.offset.clone(),d=l.repeat.clone(),f=n.clone().sub(c),m=t.clone().sub(d);this._properties.push({name:a,initialOffset:c,deltaOffset:f,initialScale:d,deltaScale:m})}))}applyWeight(e){this._properties.forEach(t=>{let n=this.material[t.name];n!==void 0&&(n.offset.add(Dn.copy(t.deltaOffset).multiplyScalar(e)),n.repeat.add(Dn.copy(t.deltaScale).multiplyScalar(e)),n.needsUpdate=!0)})}clearAppliedWeight(){this._properties.forEach(e=>{let t=this.material[e.name];t!==void 0&&(t.offset.copy(e.initialOffset),t.repeat.copy(e.initialScale),t.needsUpdate=!0)})}};_e._propertyNamesMap={isMeshStandardMaterial:["map","emissiveMap","bumpMap","normalMap","displacementMap","roughnessMap","metalnessMap","alphaMap"],isMeshBasicMaterial:["map","specularMap","alphaMap"],isMToonMaterial:["map","normalMap","emissiveMap","shadeMultiplyTexture","rimMultiplyTexture","outlineWidthMultiplyTexture","uvAnimationMaskTexture"]};var Zi=new Set(["1.0","1.0-beta"]),Oe=class u{constructor(e){this.parser=e}get name(){return"VRMExpressionLoaderPlugin"}afterRoot(e){return S(this,void 0,void 0,function*(){e.userData.vrmExpressionManager=yield this._import(e)})}_import(e){return S(this,void 0,void 0,function*(){let t=yield this._v1Import(e);if(t)return t;let n=yield this._v0Import(e);return n||null})}_v1Import(e){var t,n;return S(this,void 0,void 0,function*(){let i=this.parser.json;if(!(((t=i.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let s=(n=i.extensions)===null||n===void 0?void 0:n.VRMC_vrm;if(!s)return null;let a=s.specVersion;if(!Zi.has(a))return console.warn(`VRMExpressionLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let o=s.expressions;if(!o)return null;let l=new Set(Object.values(Xt)),c=new Map;o.preset!=null&&Object.entries(o.preset).forEach(([f,m])=>{if(m!=null){if(!l.has(f)){console.warn(`VRMExpressionLoaderPlugin: Unknown preset name "${f}" detected. Ignoring the expression`);return}c.set(f,m)}}),o.custom!=null&&Object.entries(o.custom).forEach(([f,m])=>{if(l.has(f)){console.warn(`VRMExpressionLoaderPlugin: Custom expression cannot have preset name "${f}". Ignoring the expression`);return}c.set(f,m)});let d=new Ne;return yield Promise.all(Array.from(c.entries()).map(([f,m])=>S(this,void 0,void 0,function*(){var T,g,v,_,R,x,E;let y=new He(f);if(e.scene.add(y),y.isBinary=(T=m.isBinary)!==null&&T!==void 0?T:!1,y.overrideBlink=(g=m.overrideBlink)!==null&&g!==void 0?g:"none",y.overrideLookAt=(v=m.overrideLookAt)!==null&&v!==void 0?v:"none",y.overrideMouth=(_=m.overrideMouth)!==null&&_!==void 0?_:"none",(R=m.morphTargetBinds)===null||R===void 0||R.forEach(w=>S(this,void 0,void 0,function*(){var M;if(w.node===void 0||w.index===void 0)return;let L=yield Un(e,w.node),b=w.index;if(!L.every(I=>Array.isArray(I.morphTargetInfluences)&&b<I.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${m.name} attempts to index morph #${b} but not found.`);return}y.addBind(new Ue({primitives:L,index:b,weight:(M=w.weight)!==null&&M!==void 0?M:1}))})),m.materialColorBinds||m.textureTransformBinds){let w=[];e.scene.traverse(M=>{let L=M.material;L&&w.push(L)}),(x=m.materialColorBinds)===null||x===void 0||x.forEach(M=>S(this,void 0,void 0,function*(){w.filter(b=>{let I=Cn(this.parser,b);return M.material===I}).forEach(b=>{y.addBind(new ge({material:b,type:M.type,targetValue:new h.Color().fromArray(M.targetValue)}))})})),(E=m.textureTransformBinds)===null||E===void 0||E.forEach(M=>S(this,void 0,void 0,function*(){w.filter(b=>{let I=Cn(this.parser,b);return M.material===I}).forEach(b=>{var I,P;y.addBind(new _e({material:b,offset:new h.Vector2().fromArray((I=M.offset)!==null&&I!==void 0?I:[0,0]),scale:new h.Vector2().fromArray((P=M.scale)!==null&&P!==void 0?P:[1,1])}))})}))}d.registerExpression(y)}))),d})}_v0Import(e){var t;return S(this,void 0,void 0,function*(){let n=this.parser.json,i=(t=n.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;let r=i.blendShapeMaster;if(!r)return null;let s=new Ne,a=r.blendShapeGroups;if(!a)return s;let o=new Set;return yield Promise.all(a.map(l=>S(this,void 0,void 0,function*(){var c;let d=l.presetName,f=d!=null&&u.v0v1PresetNameMap[d]||null,m=f??l.name;if(m==null){console.warn("VRMExpressionLoaderPlugin: One of custom expressions has no name. Ignoring the expression");return}if(o.has(m)){console.warn(`VRMExpressionLoaderPlugin: An expression preset ${d} has duplicated entries. Ignoring the expression`);return}o.add(m);let T=new He(m);e.scene.add(T),T.isBinary=(c=l.isBinary)!==null&&c!==void 0?c:!1,l.binds&&l.binds.forEach(v=>S(this,void 0,void 0,function*(){var _;if(v.mesh===void 0||v.index===void 0)return;let R=[];(_=n.nodes)===null||_===void 0||_.forEach((E,y)=>{E.mesh===v.mesh&&R.push(y)});let x=v.index;yield Promise.all(R.map(E=>S(this,void 0,void 0,function*(){var y;let w=yield Un(e,E);if(!w.every(M=>Array.isArray(M.morphTargetInfluences)&&x<M.morphTargetInfluences.length)){console.warn(`VRMExpressionLoaderPlugin: ${l.name} attempts to index ${x}th morph but not found.`);return}T.addBind(new Ue({primitives:w,index:x,weight:.01*((y=v.weight)!==null&&y!==void 0?y:100)}))})))}));let g=l.materialValues;g&&g.length!==0&&g.forEach(v=>{if(v.materialName===void 0||v.propertyName===void 0||v.targetValue===void 0)return;let _=[];e.scene.traverse(x=>{if(x.material){let E=x.material;Array.isArray(E)?_.push(...E.filter(y=>(y.name===v.materialName||y.name===v.materialName+" (Outline)")&&_.indexOf(y)===-1)):E.name===v.materialName&&_.indexOf(E)===-1&&_.push(E)}});let R=v.propertyName;_.forEach(x=>{if(R==="_MainTex_ST"){let y=new h.Vector2(v.targetValue[0],v.targetValue[1]),w=new h.Vector2(v.targetValue[2],v.targetValue[3]);T.addBind(new _e({material:x,scale:y,offset:w}));return}let E=Qi[R];if(E){T.addBind(new ge({material:x,type:E,targetValue:new h.Color(...v.targetValue.slice(0,3))}));return}console.warn(R+" is not supported")})}),s.registerExpression(T)}))),s})}};Oe.v0v1PresetNameMap={a:"aa",e:"ee",i:"ih",o:"oh",u:"ou",blink:"blink",joy:"happy",angry:"angry",sorrow:"sad",fun:"relaxed",lookup:"lookUp",lookdown:"lookDown",lookleft:"lookLeft",lookright:"lookRight",blink_l:"blinkLeft",blink_r:"blinkRight",neutral:"neutral"};var re=class u{constructor(e,t){this._firstPersonOnlyLayer=u.DEFAULT_FIRSTPERSON_ONLY_LAYER,this._thirdPersonOnlyLayer=u.DEFAULT_THIRDPERSON_ONLY_LAYER,this._initializedLayers=!1,this.humanoid=e,this.meshAnnotations=t}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMFirstPerson: humanoid must be same in order to copy");return this.meshAnnotations=e.meshAnnotations.map(t=>({meshes:t.meshes.concat(),type:t.type})),this}clone(){return new u(this.humanoid,this.meshAnnotations).copy(this)}get firstPersonOnlyLayer(){return this._firstPersonOnlyLayer}get thirdPersonOnlyLayer(){return this._thirdPersonOnlyLayer}setup({firstPersonOnlyLayer:e=u.DEFAULT_FIRSTPERSON_ONLY_LAYER,thirdPersonOnlyLayer:t=u.DEFAULT_THIRDPERSON_ONLY_LAYER}={}){this._initializedLayers||(this._firstPersonOnlyLayer=e,this._thirdPersonOnlyLayer=t,this.meshAnnotations.forEach(n=>{n.meshes.forEach(i=>{n.type==="firstPersonOnly"?(i.layers.set(this._firstPersonOnlyLayer),i.traverse(r=>r.layers.set(this._firstPersonOnlyLayer))):n.type==="thirdPersonOnly"?(i.layers.set(this._thirdPersonOnlyLayer),i.traverse(r=>r.layers.set(this._thirdPersonOnlyLayer))):n.type==="auto"&&this._createHeadlessModel(i)})}),this._initializedLayers=!0)}_excludeTriangles(e,t,n,i){let r=0;if(t!=null&&t.length>0)for(let s=0;s<e.length;s+=3){let a=e[s],o=e[s+1],l=e[s+2],c=t[a],d=n[a];if(c[0]>0&&i.includes(d[0])||c[1]>0&&i.includes(d[1])||c[2]>0&&i.includes(d[2])||c[3]>0&&i.includes(d[3]))continue;let f=t[o],m=n[o];if(f[0]>0&&i.includes(m[0])||f[1]>0&&i.includes(m[1])||f[2]>0&&i.includes(m[2])||f[3]>0&&i.includes(m[3]))continue;let T=t[l],g=n[l];T[0]>0&&i.includes(g[0])||T[1]>0&&i.includes(g[1])||T[2]>0&&i.includes(g[2])||T[3]>0&&i.includes(g[3])||(e[r++]=a,e[r++]=o,e[r++]=l)}return r}_createErasedMesh(e,t){let n=new h.SkinnedMesh(e.geometry.clone(),e.material);n.name=`${e.name}(erase)`,n.frustumCulled=e.frustumCulled,n.layers.set(this._firstPersonOnlyLayer);let i=n.geometry,r=i.getAttribute("skinIndex"),s=r instanceof h.GLBufferAttribute?[]:r.array,a=[];for(let g=0;g<s.length;g+=4)a.push([s[g],s[g+1],s[g+2],s[g+3]]);let o=i.getAttribute("skinWeight"),l=o instanceof h.GLBufferAttribute?[]:o.array,c=[];for(let g=0;g<l.length;g+=4)c.push([l[g],l[g+1],l[g+2],l[g+3]]);let d=i.getIndex();if(!d)throw new Error("The geometry doesn't have an index buffer");let f=Array.from(d.array),m=this._excludeTriangles(f,c,a,t),T=[];for(let g=0;g<m;g++)T[g]=f[g];return i.setIndex(T),e.onBeforeRender&&(n.onBeforeRender=e.onBeforeRender),n.bind(new h.Skeleton(e.skeleton.bones,e.skeleton.boneInverses),new h.Matrix4),n}_createHeadlessModelForSkinnedMesh(e,t){let n=[];if(t.skeleton.bones.forEach((r,s)=>{this._isEraseTarget(r)&&n.push(s)}),!n.length){t.layers.enable(this._thirdPersonOnlyLayer),t.layers.enable(this._firstPersonOnlyLayer);return}t.layers.set(this._thirdPersonOnlyLayer);let i=this._createErasedMesh(t,n);e.add(i)}_createHeadlessModel(e){if(e.type==="Group")if(e.layers.set(this._thirdPersonOnlyLayer),this._isEraseTarget(e))e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer));else{let t=new h.Group;t.name=`_headless_${e.name}`,t.layers.set(this._firstPersonOnlyLayer),e.parent.add(t),e.children.filter(n=>n.type==="SkinnedMesh").forEach(n=>{let i=n;this._createHeadlessModelForSkinnedMesh(t,i)})}else if(e.type==="SkinnedMesh"){let t=e;this._createHeadlessModelForSkinnedMesh(e.parent,t)}else this._isEraseTarget(e)&&(e.layers.set(this._thirdPersonOnlyLayer),e.traverse(t=>t.layers.set(this._thirdPersonOnlyLayer)))}_isEraseTarget(e){return e===this.humanoid.getRawBoneNode("head")?!0:e.parent?this._isEraseTarget(e.parent):!1}};re.DEFAULT_FIRSTPERSON_ONLY_LAYER=9;re.DEFAULT_THIRDPERSON_ONLY_LAYER=10;var Ji=new Set(["1.0","1.0-beta"]),qt=class{constructor(e){this.parser=e}get name(){return"VRMFirstPersonLoaderPlugin"}afterRoot(e){return S(this,void 0,void 0,function*(){let t=e.userData.vrmHumanoid;if(t!==null){if(t===void 0)throw new Error("VRMFirstPersonLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");e.userData.vrmFirstPerson=yield this._import(e,t)}})}_import(e,t){return S(this,void 0,void 0,function*(){if(t==null)return null;let n=yield this._v1Import(e,t);if(n)return n;let i=yield this._v0Import(e,t);return i||null})}_v1Import(e,t){var n,i;return S(this,void 0,void 0,function*(){let r=this.parser.json;if(!(((n=r.extensionsUsed)===null||n===void 0?void 0:n.indexOf("VRMC_vrm"))!==-1))return null;let a=(i=r.extensions)===null||i===void 0?void 0:i.VRMC_vrm;if(!a)return null;let o=a.specVersion;if(!Ji.has(o))return console.warn(`VRMFirstPersonLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let l=a.firstPerson;if(!l)return null;let c=[],d=yield On(e);return Array.from(d.entries()).forEach(([f,m])=>{var T;let g=l.meshAnnotations?l.meshAnnotations.find(v=>v.node===f):void 0;c.push({meshes:m,type:(T=g?.type)!==null&&T!==void 0?T:"both"})}),new re(t,c)})}_v0Import(e,t){var n;return S(this,void 0,void 0,function*(){let i=this.parser.json,r=(n=i.extensions)===null||n===void 0?void 0:n.VRM;if(!r)return null;let s=r.firstPerson;if(!s)return null;let a=[],o=yield On(e);return Array.from(o.entries()).forEach(([l,c])=>{let d=i.nodes[l],f=s.meshAnnotations?s.meshAnnotations.find(m=>m.mesh===d.mesh):void 0;a.push({meshes:c,type:this._convertV0FlagToV1Type(f?.firstPersonFlag)})}),new re(t,a)})}_convertV0FlagToV1Type(e){return e==="FirstPersonOnly"?"firstPersonOnly":e==="ThirdPersonOnly"?"thirdPersonOnly":e==="Auto"?"auto":"both"}};var Bn=new h.Vector3,Fn=new h.Vector3,er=new h.Quaternion,Ce=class extends h.Group{constructor(e){super(),this.vrmHumanoid=e,this._boneAxesMap=new Map,Object.values(e.humanBones).forEach(t=>{let n=new h.AxesHelper(1);n.matrixAutoUpdate=!1,n.material.depthTest=!1,n.material.depthWrite=!1,this.add(n),this._boneAxesMap.set(t,n)})}dispose(){Array.from(this._boneAxesMap.values()).forEach(e=>{e.geometry.dispose(),e.material.dispose()})}updateMatrixWorld(e){Array.from(this._boneAxesMap.entries()).forEach(([t,n])=>{t.node.updateWorldMatrix(!0,!1),t.node.matrixWorld.decompose(Bn,er,Fn);let i=Bn.set(.1,.1,.1).divide(Fn);n.matrix.copy(t.node.matrixWorld).scale(i)}),super.updateMatrixWorld(e)}},Ft=["hips","spine","chest","upperChest","neck","head","leftEye","rightEye","jaw","leftUpperLeg","leftLowerLeg","leftFoot","leftToes","rightUpperLeg","rightLowerLeg","rightFoot","rightToes","leftShoulder","leftUpperArm","leftLowerArm","leftHand","rightShoulder","rightUpperArm","rightLowerArm","rightHand","leftThumbMetacarpal","leftThumbProximal","leftThumbDistal","leftIndexProximal","leftIndexIntermediate","leftIndexDistal","leftMiddleProximal","leftMiddleIntermediate","leftMiddleDistal","leftRingProximal","leftRingIntermediate","leftRingDistal","leftLittleProximal","leftLittleIntermediate","leftLittleDistal","rightThumbMetacarpal","rightThumbProximal","rightThumbDistal","rightIndexProximal","rightIndexIntermediate","rightIndexDistal","rightMiddleProximal","rightMiddleIntermediate","rightMiddleDistal","rightRingProximal","rightRingIntermediate","rightRingDistal","rightLittleProximal","rightLittleIntermediate","rightLittleDistal"];var tr={hips:null,spine:"hips",chest:"spine",upperChest:"chest",neck:"upperChest",head:"neck",leftEye:"head",rightEye:"head",jaw:"head",leftUpperLeg:"hips",leftLowerLeg:"leftUpperLeg",leftFoot:"leftLowerLeg",leftToes:"leftFoot",rightUpperLeg:"hips",rightLowerLeg:"rightUpperLeg",rightFoot:"rightLowerLeg",rightToes:"rightFoot",leftShoulder:"upperChest",leftUpperArm:"leftShoulder",leftLowerArm:"leftUpperArm",leftHand:"leftLowerArm",rightShoulder:"upperChest",rightUpperArm:"rightShoulder",rightLowerArm:"rightUpperArm",rightHand:"rightLowerArm",leftThumbMetacarpal:"leftHand",leftThumbProximal:"leftThumbMetacarpal",leftThumbDistal:"leftThumbProximal",leftIndexProximal:"leftHand",leftIndexIntermediate:"leftIndexProximal",leftIndexDistal:"leftIndexIntermediate",leftMiddleProximal:"leftHand",leftMiddleIntermediate:"leftMiddleProximal",leftMiddleDistal:"leftMiddleIntermediate",leftRingProximal:"leftHand",leftRingIntermediate:"leftRingProximal",leftRingDistal:"leftRingIntermediate",leftLittleProximal:"leftHand",leftLittleIntermediate:"leftLittleProximal",leftLittleDistal:"leftLittleIntermediate",rightThumbMetacarpal:"rightHand",rightThumbProximal:"rightThumbMetacarpal",rightThumbDistal:"rightThumbProximal",rightIndexProximal:"rightHand",rightIndexIntermediate:"rightIndexProximal",rightIndexDistal:"rightIndexIntermediate",rightMiddleProximal:"rightHand",rightMiddleIntermediate:"rightMiddleProximal",rightMiddleDistal:"rightMiddleIntermediate",rightRingProximal:"rightHand",rightRingIntermediate:"rightRingProximal",rightRingDistal:"rightRingIntermediate",rightLittleProximal:"rightHand",rightLittleIntermediate:"rightLittleProximal",rightLittleDistal:"rightLittleIntermediate"};function ei(u){return u.invert?u.invert():u.inverse(),u}var q=new h.Vector3,Y=new h.Quaternion,ve=class{constructor(e){this.humanBones=e,this.restPose=this.getAbsolutePose()}getAbsolutePose(){let e={};return Object.keys(this.humanBones).forEach(t=>{let n=t,i=this.getBoneNode(n);i&&(q.copy(i.position),Y.copy(i.quaternion),e[n]={position:q.toArray(),rotation:Y.toArray()})}),e}getPose(){let e={};return Object.keys(this.humanBones).forEach(t=>{let n=t,i=this.getBoneNode(n);if(!i)return;q.set(0,0,0),Y.identity();let r=this.restPose[n];r?.position&&q.fromArray(r.position).negate(),r?.rotation&&ei(Y.fromArray(r.rotation)),q.add(i.position),Y.premultiply(i.quaternion),e[n]={position:q.toArray(),rotation:Y.toArray()}}),e}setPose(e){Object.entries(e).forEach(([t,n])=>{let i=t,r=this.getBoneNode(i);if(!r)return;let s=this.restPose[i];s&&(n?.position&&(r.position.fromArray(n.position),s.position&&r.position.add(q.fromArray(s.position))),n?.rotation&&(r.quaternion.fromArray(n.rotation),s.rotation&&r.quaternion.multiply(Y.fromArray(s.rotation))))})}resetPose(){Object.entries(this.restPose).forEach(([e,t])=>{let n=this.getBoneNode(e);n&&(t?.position&&n.position.fromArray(t.position),t?.rotation&&n.quaternion.fromArray(t.rotation))})}getBone(e){var t;return(t=this.humanBones[e])!==null&&t!==void 0?t:void 0}getBoneNode(e){var t,n;return(n=(t=this.humanBones[e])===null||t===void 0?void 0:t.node)!==null&&n!==void 0?n:null}},nr=new h.Vector3,ir=new h.Quaternion,rr=new h.Vector3,De=class u extends ve{constructor(e){let{rigBones:t,root:n,parentWorldRotations:i,boneRotations:r}=u._setupTransforms(e);super(t),this.original=e,this.root=n,this._parentWorldRotations=i,this._boneRotations=r}static _setupTransforms(e){let t=new h.Object3D;t.name="VRMHumanoidRig";let n={},i={},r={};Ft.forEach(o=>{let l=e.getBoneNode(o);if(l){let c=new h.Vector3,d=new h.Quaternion;l.updateWorldMatrix(!0,!1),l.matrixWorld.decompose(c,d,nr),n[o]=c,i[o]=d,r[o]=l.quaternion.clone()}});let s={},a={};return Ft.forEach(o=>{var l;let c=e.getBoneNode(o);if(c){let d=n[o],f=o,m,T;for(;m==null&&(f=tr[f],f!=null);)m=n[f],T=i[f];let g=new h.Object3D;g.name="Normalized_"+c.name,(f?(l=a[f])===null||l===void 0?void 0:l.node:t).add(g),g.position.copy(d),m&&g.position.sub(m),a[o]={node:g},s[o]=T??new h.Quaternion}}),{rigBones:a,root:t,parentWorldRotations:s,boneRotations:r}}update(){Ft.forEach(e=>{let t=this.original.getBoneNode(e);if(t!=null){let n=this.getBoneNode(e),i=this._parentWorldRotations[e],r=ir.copy(i).invert(),s=this._boneRotations[e];if(t.quaternion.copy(n.quaternion).multiply(i).premultiply(r).multiply(s),e==="hips"){let a=n.getWorldPosition(rr);t.parent.updateWorldMatrix(!0,!1);let o=t.parent.matrixWorld,l=a.applyMatrix4(o.invert());t.position.copy(l)}}})}},Be=class u{constructor(e,t){var n;this.autoUpdateHumanBones=(n=t?.autoUpdateHumanBones)!==null&&n!==void 0?n:!0,this._rawHumanBones=new ve(e),this._normalizedHumanBones=new De(this._rawHumanBones)}get restPose(){return console.warn("VRMHumanoid: restPose is deprecated. Use either rawRestPose or normalizedRestPose instead."),this.rawRestPose}get rawRestPose(){return this._rawHumanBones.restPose}get normalizedRestPose(){return this._normalizedHumanBones.restPose}get humanBones(){return this._rawHumanBones.humanBones}get rawHumanBones(){return this._rawHumanBones.humanBones}get normalizedHumanBones(){return this._normalizedHumanBones.humanBones}get normalizedHumanBonesRoot(){return this._normalizedHumanBones.root}copy(e){return this.autoUpdateHumanBones=e.autoUpdateHumanBones,this._rawHumanBones=new ve(e.humanBones),this._normalizedHumanBones=new De(this._rawHumanBones),this}clone(){return new u(this.humanBones,{autoUpdateHumanBones:this.autoUpdateHumanBones}).copy(this)}getAbsolutePose(){return console.warn("VRMHumanoid: getAbsolutePose() is deprecated. Use either getRawAbsolutePose() or getNormalizedAbsolutePose() instead."),this.getRawAbsolutePose()}getRawAbsolutePose(){return this._rawHumanBones.getAbsolutePose()}getNormalizedAbsolutePose(){return this._normalizedHumanBones.getAbsolutePose()}getPose(){return console.warn("VRMHumanoid: getPose() is deprecated. Use either getRawPose() or getNormalizedPose() instead."),this.getRawPose()}getRawPose(){return this._rawHumanBones.getPose()}getNormalizedPose(){return this._normalizedHumanBones.getPose()}setPose(e){return console.warn("VRMHumanoid: setPose() is deprecated. Use either setRawPose() or setNormalizedPose() instead."),this.setRawPose(e)}setRawPose(e){return this._rawHumanBones.setPose(e)}setNormalizedPose(e){return this._normalizedHumanBones.setPose(e)}resetPose(){return console.warn("VRMHumanoid: resetPose() is deprecated. Use either resetRawPose() or resetNormalizedPose() instead."),this.resetRawPose()}resetRawPose(){return this._rawHumanBones.resetPose()}resetNormalizedPose(){return this._normalizedHumanBones.resetPose()}getBone(e){return console.warn("VRMHumanoid: getBone() is deprecated. Use either getRawBone() or getNormalizedBone() instead."),this.getRawBone(e)}getRawBone(e){return this._rawHumanBones.getBone(e)}getNormalizedBone(e){return this._normalizedHumanBones.getBone(e)}getBoneNode(e){return console.warn("VRMHumanoid: getBoneNode() is deprecated. Use either getRawBoneNode() or getNormalizedBoneNode() instead."),this.getRawBoneNode(e)}getRawBoneNode(e){return this._rawHumanBones.getBoneNode(e)}getNormalizedBoneNode(e){return this._normalizedHumanBones.getBoneNode(e)}update(){this.autoUpdateHumanBones&&this._normalizedHumanBones.update()}},sr={Hips:"hips",Spine:"spine",Head:"head",LeftUpperLeg:"leftUpperLeg",LeftLowerLeg:"leftLowerLeg",LeftFoot:"leftFoot",RightUpperLeg:"rightUpperLeg",RightLowerLeg:"rightLowerLeg",RightFoot:"rightFoot",LeftUpperArm:"leftUpperArm",LeftLowerArm:"leftLowerArm",LeftHand:"leftHand",RightUpperArm:"rightUpperArm",RightLowerArm:"rightLowerArm",RightHand:"rightHand"},or=new Set(["1.0","1.0-beta"]),Vn={leftThumbProximal:"leftThumbMetacarpal",leftThumbIntermediate:"leftThumbProximal",rightThumbProximal:"rightThumbMetacarpal",rightThumbIntermediate:"rightThumbProximal"},Yt=class{constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot,this.autoUpdateHumanBones=t?.autoUpdateHumanBones}get name(){return"VRMHumanoidLoaderPlugin"}afterRoot(e){return S(this,void 0,void 0,function*(){e.userData.vrmHumanoid=yield this._import(e)})}_import(e){return S(this,void 0,void 0,function*(){let t=yield this._v1Import(e);if(t)return t;let n=yield this._v0Import(e);return n||null})}_v1Import(e){var t,n;return S(this,void 0,void 0,function*(){let i=this.parser.json;if(!(((t=i.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let s=(n=i.extensions)===null||n===void 0?void 0:n.VRMC_vrm;if(!s)return null;let a=s.specVersion;if(!or.has(a))return console.warn(`VRMHumanoidLoaderPlugin: Unknown VRMC_vrm specVersion "${a}"`),null;let o=s.humanoid;if(!o)return null;let l=o.humanBones.leftThumbIntermediate!=null||o.humanBones.rightThumbIntermediate!=null,c={};o.humanBones!=null&&(yield Promise.all(Object.entries(o.humanBones).map(([f,m])=>S(this,void 0,void 0,function*(){let T=f,g=m.node;if(l){let _=Vn[T];_!=null&&(T=_)}let v=yield this.parser.getDependency("node",g);if(v==null){console.warn(`A glTF node bound to the humanoid bone ${T} (index = ${g}) does not exist`);return}c[T]={node:v}}))));let d=new Be(this._ensureRequiredBonesExist(c),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(d.normalizedHumanBonesRoot),this.helperRoot){let f=new Ce(d);this.helperRoot.add(f),f.renderOrder=this.helperRoot.renderOrder}return d})}_v0Import(e){var t;return S(this,void 0,void 0,function*(){let i=(t=this.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;let r=i.humanoid;if(!r)return null;let s={};r.humanBones!=null&&(yield Promise.all(r.humanBones.map(o=>S(this,void 0,void 0,function*(){let l=o.bone,c=o.node;if(l==null||c==null)return;let d=yield this.parser.getDependency("node",c);if(d==null){console.warn(`A glTF node bound to the humanoid bone ${l} (index = ${c}) does not exist`);return}let f=Vn[l],m=f??l;if(s[m]!=null){console.warn(`Multiple bone entries for ${m} detected (index = ${c}), ignoring duplicated entries.`);return}s[m]={node:d}}))));let a=new Be(this._ensureRequiredBonesExist(s),{autoUpdateHumanBones:this.autoUpdateHumanBones});if(e.scene.add(a.normalizedHumanBonesRoot),this.helperRoot){let o=new Ce(a);this.helperRoot.add(o),o.renderOrder=this.helperRoot.renderOrder}return a})}_ensureRequiredBonesExist(e){let t=Object.values(sr).filter(n=>e[n]==null);if(t.length>0)throw new Error(`VRMHumanoidLoaderPlugin: These humanoid bones are required but not exist: ${t.join(", ")}`);return e}},Fe=class extends h.BufferGeometry{constructor(){super(),this._currentTheta=0,this._currentRadius=0,this.theta=0,this.radius=0,this._currentTheta=0,this._currentRadius=0,this._attrPos=new h.BufferAttribute(new Float32Array(65*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new h.BufferAttribute(new Uint16Array(3*63),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentTheta!==this.theta&&(this._currentTheta=this.theta,e=!0),this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),e&&this._buildPosition()}_buildPosition(){this._attrPos.setXYZ(0,0,0,0);for(let e=0;e<64;e++){let t=e/63*this._currentTheta;this._attrPos.setXYZ(e+1,this._currentRadius*Math.sin(t),0,this._currentRadius*Math.cos(t))}this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<63;e++)this._attrIndex.setXYZ(e*3,0,e+1,e+2);this._attrIndex.needsUpdate=!0}},$t=class extends h.BufferGeometry{constructor(){super(),this.radius=0,this._currentRadius=0,this.tail=new h.Vector3,this._currentTail=new h.Vector3,this._attrPos=new h.BufferAttribute(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new h.BufferAttribute(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1;this._currentRadius!==this.radius&&(this._currentRadius=this.radius,e=!0),this._currentTail.equals(this.tail)||(this._currentTail.copy(this.tail),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){let t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},Se=new h.Quaternion,kn=new h.Quaternion,de=new h.Vector3,Wn=new h.Vector3,jn=Math.sqrt(2)/2,ar=new h.Quaternion(0,0,-jn,jn),lr=new h.Vector3(0,1,0),Qt=class extends h.Group{constructor(e){super(),this.matrixAutoUpdate=!1,this.vrmLookAt=e;{let t=new Fe;t.radius=.5;let n=new h.MeshBasicMaterial({color:65280,transparent:!0,opacity:.5,side:h.DoubleSide,depthTest:!1,depthWrite:!1});this._meshPitch=new h.Mesh(t,n),this.add(this._meshPitch)}{let t=new Fe;t.radius=.5;let n=new h.MeshBasicMaterial({color:16711680,transparent:!0,opacity:.5,side:h.DoubleSide,depthTest:!1,depthWrite:!1});this._meshYaw=new h.Mesh(t,n),this.add(this._meshYaw)}{let t=new $t;t.radius=.1;let n=new h.LineBasicMaterial({color:16777215,depthTest:!1,depthWrite:!1});this._lineTarget=new h.LineSegments(t,n),this._lineTarget.frustumCulled=!1,this.add(this._lineTarget)}}dispose(){this._meshYaw.geometry.dispose(),this._meshYaw.material.dispose(),this._meshPitch.geometry.dispose(),this._meshPitch.material.dispose(),this._lineTarget.geometry.dispose(),this._lineTarget.material.dispose()}updateMatrixWorld(e){let t=h.MathUtils.DEG2RAD*this.vrmLookAt.yaw;this._meshYaw.geometry.theta=t,this._meshYaw.geometry.update();let n=h.MathUtils.DEG2RAD*this.vrmLookAt.pitch;this._meshPitch.geometry.theta=n,this._meshPitch.geometry.update(),this.vrmLookAt.getLookAtWorldPosition(de),this.vrmLookAt.getLookAtWorldQuaternion(Se),Se.multiply(this.vrmLookAt.getFaceFrontQuaternion(kn)),this._meshYaw.position.copy(de),this._meshYaw.quaternion.copy(Se),this._meshPitch.position.copy(de),this._meshPitch.quaternion.copy(Se),this._meshPitch.quaternion.multiply(kn.setFromAxisAngle(lr,t)),this._meshPitch.quaternion.multiply(ar);let{target:i,autoUpdate:r}=this.vrmLookAt;i!=null&&r&&(i.getWorldPosition(Wn).sub(de),this._lineTarget.geometry.tail.copy(Wn),this._lineTarget.geometry.update(),this._lineTarget.position.copy(de)),super.updateMatrixWorld(e)}},ur=new h.Vector3,cr=new h.Vector3;function Kt(u,e){return u.matrixWorld.decompose(ur,e,cr),e}function Pe(u){return[Math.atan2(-u.z,u.x),Math.atan2(u.y,Math.sqrt(u.x*u.x+u.z*u.z))]}function zn(u){let e=Math.round(u/2/Math.PI);return u-2*Math.PI*e}var Gn=new h.Vector3(0,0,1),dr=new h.Vector3,hr=new h.Vector3,fr=new h.Vector3,pr=new h.Quaternion,Vt=new h.Quaternion,Xn=new h.Quaternion,mr=new h.Quaternion,kt=new h.Euler,Ve=class u{constructor(e,t){this.offsetFromHeadBone=new h.Vector3,this.autoUpdate=!0,this.faceFront=new h.Vector3(0,0,1),this.humanoid=e,this.applier=t,this._yaw=0,this._pitch=0,this._needsUpdate=!0,this._restHeadWorldQuaternion=this.getLookAtWorldQuaternion(new h.Quaternion)}get yaw(){return this._yaw}set yaw(e){this._yaw=e,this._needsUpdate=!0}get pitch(){return this._pitch}set pitch(e){this._pitch=e,this._needsUpdate=!0}get euler(){return console.warn("VRMLookAt: euler is deprecated. use getEuler() instead."),this.getEuler(new h.Euler)}getEuler(e){return e.set(h.MathUtils.DEG2RAD*this._pitch,h.MathUtils.DEG2RAD*this._yaw,0,"YXZ")}copy(e){if(this.humanoid!==e.humanoid)throw new Error("VRMLookAt: humanoid must be same in order to copy");return this.offsetFromHeadBone.copy(e.offsetFromHeadBone),this.applier=e.applier,this.autoUpdate=e.autoUpdate,this.target=e.target,this.faceFront.copy(e.faceFront),this}clone(){return new u(this.humanoid,this.applier).copy(this)}reset(){this._yaw=0,this._pitch=0,this._needsUpdate=!0}getLookAtWorldPosition(e){let t=this.humanoid.getRawBoneNode("head");return e.copy(this.offsetFromHeadBone).applyMatrix4(t.matrixWorld)}getLookAtWorldQuaternion(e){let t=this.humanoid.getRawBoneNode("head");return Kt(t,e)}getFaceFrontQuaternion(e){if(this.faceFront.distanceToSquared(Gn)<.01)return e.copy(this._restHeadWorldQuaternion).invert();let[t,n]=Pe(this.faceFront);return kt.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(kt).premultiply(mr.copy(this._restHeadWorldQuaternion).invert())}getLookAtWorldDirection(e){return this.getLookAtWorldQuaternion(Vt),this.getFaceFrontQuaternion(Xn),e.copy(Gn).applyQuaternion(Vt).applyQuaternion(Xn).applyEuler(this.getEuler(kt))}lookAt(e){let t=pr.copy(this._restHeadWorldQuaternion).multiply(ei(this.getLookAtWorldQuaternion(Vt))),n=this.getLookAtWorldPosition(hr),i=fr.copy(e).sub(n).applyQuaternion(t).normalize(),[r,s]=Pe(this.faceFront),[a,o]=Pe(i),l=zn(a-r),c=zn(s-o);this._yaw=h.MathUtils.RAD2DEG*l,this._pitch=h.MathUtils.RAD2DEG*c,this._needsUpdate=!0}update(e){this.target!=null&&this.autoUpdate&&this.lookAt(this.target.getWorldPosition(dr)),this._needsUpdate&&(this._needsUpdate=!1,this.applier.applyYawPitch(this._yaw,this._pitch))}};Ve.EULER_ORDER="YXZ";var gr=new h.Vector3(0,0,1),B=new h.Quaternion,J=new h.Quaternion,D=new h.Euler(0,0,0,"YXZ"),ie=class{constructor(e,t,n,i,r){this.humanoid=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r,this.faceFront=new h.Vector3(0,0,1),this._restQuatLeftEye=new h.Quaternion,this._restQuatRightEye=new h.Quaternion,this._restLeftEyeParentWorldQuat=new h.Quaternion,this._restRightEyeParentWorldQuat=new h.Quaternion;let s=this.humanoid.getRawBoneNode("leftEye"),a=this.humanoid.getRawBoneNode("rightEye");s&&(this._restQuatLeftEye.copy(s.quaternion),Kt(s.parent,this._restLeftEyeParentWorldQuat)),a&&(this._restQuatRightEye.copy(a.quaternion),Kt(a.parent,this._restRightEyeParentWorldQuat))}applyYawPitch(e,t){let n=this.humanoid.getRawBoneNode("leftEye"),i=this.humanoid.getRawBoneNode("rightEye"),r=this.humanoid.getNormalizedBoneNode("leftEye"),s=this.humanoid.getNormalizedBoneNode("rightEye");n&&(t<0?D.x=-h.MathUtils.DEG2RAD*this.rangeMapVerticalDown.map(-t):D.x=h.MathUtils.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?D.y=-h.MathUtils.DEG2RAD*this.rangeMapHorizontalInner.map(-e):D.y=h.MathUtils.DEG2RAD*this.rangeMapHorizontalOuter.map(e),B.setFromEuler(D),this._getWorldFaceFrontQuat(J),r.quaternion.copy(J).multiply(B).multiply(J.invert()),B.copy(this._restLeftEyeParentWorldQuat),n.quaternion.copy(r.quaternion).multiply(B).premultiply(B.invert()).multiply(this._restQuatLeftEye)),i&&(t<0?D.x=-h.MathUtils.DEG2RAD*this.rangeMapVerticalDown.map(-t):D.x=h.MathUtils.DEG2RAD*this.rangeMapVerticalUp.map(t),e<0?D.y=-h.MathUtils.DEG2RAD*this.rangeMapHorizontalOuter.map(-e):D.y=h.MathUtils.DEG2RAD*this.rangeMapHorizontalInner.map(e),B.setFromEuler(D),this._getWorldFaceFrontQuat(J),s.quaternion.copy(J).multiply(B).multiply(J.invert()),B.copy(this._restRightEyeParentWorldQuat),i.quaternion.copy(s.quaternion).multiply(B).premultiply(B.invert()).multiply(this._restQuatRightEye))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let t=h.MathUtils.RAD2DEG*e.y,n=h.MathUtils.RAD2DEG*e.x;this.applyYawPitch(t,n)}_getWorldFaceFrontQuat(e){if(this.faceFront.distanceToSquared(gr)<.01)return e.identity();let[t,n]=Pe(this.faceFront);return D.set(0,.5*Math.PI+t,n,"YZX"),e.setFromEuler(D)}};ie.type="bone";var Te=class{constructor(e,t,n,i,r){this.expressions=e,this.rangeMapHorizontalInner=t,this.rangeMapHorizontalOuter=n,this.rangeMapVerticalDown=i,this.rangeMapVerticalUp=r}applyYawPitch(e,t){t<0?(this.expressions.setValue("lookDown",0),this.expressions.setValue("lookUp",this.rangeMapVerticalUp.map(-t))):(this.expressions.setValue("lookUp",0),this.expressions.setValue("lookDown",this.rangeMapVerticalDown.map(t))),e<0?(this.expressions.setValue("lookLeft",0),this.expressions.setValue("lookRight",this.rangeMapHorizontalOuter.map(-e))):(this.expressions.setValue("lookRight",0),this.expressions.setValue("lookLeft",this.rangeMapHorizontalOuter.map(e)))}lookAt(e){console.warn("VRMLookAtBoneApplier: lookAt() is deprecated. use apply() instead.");let t=h.MathUtils.RAD2DEG*e.y,n=h.MathUtils.RAD2DEG*e.x;this.applyYawPitch(t,n)}};Te.type="expression";var ke=class{constructor(e,t){this.inputMaxValue=e,this.outputScale=t}map(e){return this.outputScale*Jn(e/this.inputMaxValue)}},_r=new Set(["1.0","1.0-beta"]),Zt=class{constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}get name(){return"VRMLookAtLoaderPlugin"}afterRoot(e){return S(this,void 0,void 0,function*(){let t=e.userData.vrmHumanoid;if(t===null)return;if(t===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmHumanoid is undefined. VRMHumanoidLoaderPlugin have to be used first");let n=e.userData.vrmExpressionManager;if(n!==null){if(n===void 0)throw new Error("VRMLookAtLoaderPlugin: vrmExpressionManager is undefined. VRMExpressionLoaderPlugin have to be used first");e.userData.vrmLookAt=yield this._import(e,t,n)}})}_import(e,t,n){return S(this,void 0,void 0,function*(){if(t==null||n==null)return null;let i=yield this._v1Import(e,t,n);if(i)return i;let r=yield this._v0Import(e,t,n);return r||null})}_v1Import(e,t,n){var i,r,s;return S(this,void 0,void 0,function*(){let a=this.parser.json;if(!(((i=a.extensionsUsed)===null||i===void 0?void 0:i.indexOf("VRMC_vrm"))!==-1))return null;let l=(r=a.extensions)===null||r===void 0?void 0:r.VRMC_vrm;if(!l)return null;let c=l.specVersion;if(!_r.has(c))return console.warn(`VRMLookAtLoaderPlugin: Unknown VRMC_vrm specVersion "${c}"`),null;let d=l.lookAt;if(!d)return null;let f=d.type==="expression"?1:10,m=this._v1ImportRangeMap(d.rangeMapHorizontalInner,f),T=this._v1ImportRangeMap(d.rangeMapHorizontalOuter,f),g=this._v1ImportRangeMap(d.rangeMapVerticalDown,f),v=this._v1ImportRangeMap(d.rangeMapVerticalUp,f),_;d.type==="expression"?_=new Te(n,m,T,g,v):_=new ie(t,m,T,g,v);let R=this._importLookAt(t,_);return R.offsetFromHeadBone.fromArray((s=d.offsetFromHeadBone)!==null&&s!==void 0?s:[0,.06,0]),R})}_v1ImportRangeMap(e,t){var n,i;return new ke((n=e?.inputMaxValue)!==null&&n!==void 0?n:90,(i=e?.outputScale)!==null&&i!==void 0?i:t)}_v0Import(e,t,n){var i,r,s,a;return S(this,void 0,void 0,function*(){let l=(i=this.parser.json.extensions)===null||i===void 0?void 0:i.VRM;if(!l)return null;let c=l.firstPerson;if(!c)return null;let d=c.lookAtTypeName==="BlendShape"?1:10,f=this._v0ImportDegreeMap(c.lookAtHorizontalInner,d),m=this._v0ImportDegreeMap(c.lookAtHorizontalOuter,d),T=this._v0ImportDegreeMap(c.lookAtVerticalDown,d),g=this._v0ImportDegreeMap(c.lookAtVerticalUp,d),v;c.lookAtTypeName==="BlendShape"?v=new Te(n,f,m,T,g):v=new ie(t,f,m,T,g);let _=this._importLookAt(t,v);return c.firstPersonBoneOffset?_.offsetFromHeadBone.set((r=c.firstPersonBoneOffset.x)!==null&&r!==void 0?r:0,(s=c.firstPersonBoneOffset.y)!==null&&s!==void 0?s:.06,-((a=c.firstPersonBoneOffset.z)!==null&&a!==void 0?a:0)):_.offsetFromHeadBone.set(0,.06,0),_.faceFront.set(0,0,-1),v instanceof ie&&v.faceFront.set(0,0,-1),_})}_v0ImportDegreeMap(e,t){var n,i;let r=e?.curve;return JSON.stringify(r)!=="[0,0,0,1,1,1,1,0]"&&console.warn("Curves of LookAtDegreeMap defined in VRM 0.0 are not supported"),new ke((n=e?.xRange)!==null&&n!==void 0?n:90,(i=e?.yRange)!==null&&i!==void 0?i:t)}_importLookAt(e,t){let n=new Ve(e,t);if(this.helperRoot){let i=new Qt(n);this.helperRoot.add(i),i.renderOrder=this.helperRoot.renderOrder}return n}};function vr(u,e){return typeof u!="string"||u===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(u)&&(e=e.replace(/(^https?:\/\/[^/]+).*/i,"$1")),/^(https?:)?\/\//i.test(u)||/^data:.*,.*$/i.test(u)||/^blob:.*$/i.test(u)?u:e+u)}var Tr=new Set(["1.0","1.0-beta"]),Jt=class{constructor(e,t){var n,i,r;this.parser=e,this.needThumbnailImage=(n=t?.needThumbnailImage)!==null&&n!==void 0?n:!0,this.acceptLicenseUrls=(i=t?.acceptLicenseUrls)!==null&&i!==void 0?i:["https://vrm.dev/licenses/1.0/"],this.acceptV0Meta=(r=t?.acceptV0Meta)!==null&&r!==void 0?r:!0}get name(){return"VRMMetaLoaderPlugin"}afterRoot(e){return S(this,void 0,void 0,function*(){e.userData.vrmMeta=yield this._import(e)})}_import(e){return S(this,void 0,void 0,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){var t,n,i;return S(this,void 0,void 0,function*(){let r=this.parser.json;if(!(((t=r.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRMC_vrm"))!==-1))return null;let a=(n=r.extensions)===null||n===void 0?void 0:n.VRMC_vrm;if(a==null)return null;let o=a.specVersion;if(!Tr.has(o))return console.warn(`VRMMetaLoaderPlugin: Unknown VRMC_vrm specVersion "${o}"`),null;let l=a.meta;if(!l)return null;let c=l.licenseUrl;if(!new Set(this.acceptLicenseUrls).has(c))throw new Error(`VRMMetaLoaderPlugin: The license url "${c}" is not accepted`);let f;return this.needThumbnailImage&&l.thumbnailImage!=null&&(f=(i=yield this._extractGLTFImage(l.thumbnailImage))!==null&&i!==void 0?i:void 0),{metaVersion:"1",name:l.name,version:l.version,authors:l.authors,copyrightInformation:l.copyrightInformation,contactInformation:l.contactInformation,references:l.references,thirdPartyLicenses:l.thirdPartyLicenses,thumbnailImage:f,licenseUrl:l.licenseUrl,avatarPermission:l.avatarPermission,allowExcessivelyViolentUsage:l.allowExcessivelyViolentUsage,allowExcessivelySexualUsage:l.allowExcessivelySexualUsage,commercialUsage:l.commercialUsage,allowPoliticalOrReligiousUsage:l.allowPoliticalOrReligiousUsage,allowAntisocialOrHateUsage:l.allowAntisocialOrHateUsage,creditNotation:l.creditNotation,allowRedistribution:l.allowRedistribution,modification:l.modification,otherLicenseUrl:l.otherLicenseUrl}})}_v0Import(e){var t;return S(this,void 0,void 0,function*(){let i=(t=this.parser.json.extensions)===null||t===void 0?void 0:t.VRM;if(!i)return null;let r=i.meta;if(!r)return null;if(!this.acceptV0Meta)throw new Error("VRMMetaLoaderPlugin: Attempted to load VRM0.0 meta but acceptV0Meta is false");let s;return this.needThumbnailImage&&r.texture!=null&&r.texture!==-1&&(s=yield this.parser.getDependency("texture",r.texture)),{metaVersion:"0",allowedUserName:r.allowedUserName,author:r.author,commercialUssageName:r.commercialUssageName,contactInformation:r.contactInformation,licenseName:r.licenseName,otherLicenseUrl:r.otherLicenseUrl,otherPermissionUrl:r.otherPermissionUrl,reference:r.reference,sexualUssageName:r.sexualUssageName,texture:s??void 0,title:r.title,version:r.version,violentUssageName:r.violentUssageName}})}_extractGLTFImage(e){var t;return S(this,void 0,void 0,function*(){let i=(t=this.parser.json.images)===null||t===void 0?void 0:t[e];if(i==null)return console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image doesn't exist`),null;let r=i.uri;if(i.bufferView!=null){let a=yield this.parser.getDependency("bufferView",i.bufferView),o=new Blob([a],{type:i.mimeType});r=URL.createObjectURL(o)}return r==null?(console.warn(`VRMMetaLoaderPlugin: Attempt to use images[${e}] of glTF as a thumbnail but the image couldn't load properly`),null):yield new h.ImageLoader().loadAsync(vr(r,this.parser.options.path)).catch(a=>(console.error(a),console.warn("VRMMetaLoaderPlugin: Failed to load a thumbnail image"),null))})}},en=class{constructor(e){this.scene=e.scene,this.meta=e.meta,this.humanoid=e.humanoid,this.expressionManager=e.expressionManager,this.firstPerson=e.firstPerson,this.lookAt=e.lookAt}update(e){this.humanoid.update(),this.lookAt&&this.lookAt.update(e),this.expressionManager&&this.expressionManager.update()}};var tn=class extends en{constructor(e){super(e),this.materials=e.materials,this.springBoneManager=e.springBoneManager,this.nodeConstraintManager=e.nodeConstraintManager}update(e){super.update(e),this.nodeConstraintManager&&this.nodeConstraintManager.update(),this.springBoneManager&&this.springBoneManager.update(e),this.materials&&this.materials.forEach(t=>{t.update&&t.update(e)})}};function be(u,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(d){s(d)}}function o(c){try{l(n.throw(c))}catch(d){s(d)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((n=n.apply(u,e||[])).next())})}function Q(u,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(d){s(d)}}function o(c){try{l(n.throw(c))}catch(d){s(d)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((n=n.apply(u,e||[])).next())})}var Er=`// #define PHONG

varying vec3 vViewPosition;

#ifndef FLAT_SHADED
  varying vec3 vNormal;
#endif

#include <common>

// #include <uv_pars_vertex>
#ifdef MTOON_USE_UV
  varying vec2 vUv;
  uniform mat3 uvTransform;
#endif

#include <uv2_pars_vertex>
// #include <displacementmap_pars_vertex>
// #include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
  uniform sampler2D outlineWidthMultiplyTexture;
  uniform mat3 outlineWidthMultiplyTextureUvTransform;
#endif

uniform float outlineWidthFactor;

void main() {

  // #include <uv_vertex>
  #ifdef MTOON_USE_UV
    vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
  #endif

  #include <uv2_vertex>
  #include <color_vertex>

  #include <beginnormal_vertex>
  #include <morphnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>

  // we need this to compute the outline properly
  objectNormal = normalize( objectNormal );

  #include <defaultnormal_vertex>

  #ifndef FLAT_SHADED // Normal computed with derivatives when FLAT_SHADED
    vNormal = normalize( transformedNormal );
  #endif

  #include <begin_vertex>

  #include <morphtarget_vertex>
  #include <skinning_vertex>
  // #include <displacementmap_vertex>
  #include <project_vertex>
  #include <logdepthbuf_vertex>
  #include <clipping_planes_vertex>

  vViewPosition = - mvPosition.xyz;

  float outlineTex = 1.0;

  #ifdef OUTLINE
    #ifdef USE_OUTLINEWIDTHMULTIPLYTEXTURE
      vec2 outlineWidthMultiplyTextureUv = ( outlineWidthMultiplyTextureUvTransform * vec3( vUv, 1 ) ).xy;
      outlineTex = texture2D( outlineWidthMultiplyTexture, outlineWidthMultiplyTextureUv ).g;
    #endif

    #ifdef OUTLINE_WIDTH_WORLD
      float worldNormalLength = length( transformedNormal );
      vec3 outlineOffset = outlineWidthFactor * outlineTex * worldNormalLength * objectNormal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( outlineOffset + transformed, 1.0 );
    #endif

    #ifdef OUTLINE_WIDTH_SCREEN
      vec3 clipNormal = ( projectionMatrix * modelViewMatrix * vec4( objectNormal, 0.0 ) ).xyz;
      vec2 projectedNormal = normalize( clipNormal.xy );
      projectedNormal.x *= projectionMatrix[ 0 ].x / projectionMatrix[ 1 ].y;
      gl_Position.xy += 2.0 * outlineWidthFactor * outlineTex * projectedNormal.xy;
    #endif

    gl_Position.z += 1E-6 * gl_Position.w; // anti-artifact magic
  #endif

  #include <worldpos_vertex>
  // #include <envmap_vertex>
  #include <shadowmap_vertex>
  #include <fog_vertex>

}`,xr=`// #define PHONG

uniform vec3 litFactor;

uniform float opacity;

uniform vec3 shadeColorFactor;
#ifdef USE_SHADEMULTIPLYTEXTURE
  uniform sampler2D shadeMultiplyTexture;
  uniform mat3 shadeMultiplyTextureUvTransform;
#endif

uniform float shadingShiftFactor;
uniform float shadingToonyFactor;

#ifdef USE_SHADINGSHIFTTEXTURE
  uniform sampler2D shadingShiftTexture;
  uniform mat3 shadingShiftTextureUvTransform;
  uniform float shadingShiftTextureScale;
#endif

uniform float giEqualizationFactor;

uniform vec3 parametricRimColorFactor;
#ifdef USE_RIMMULTIPLYTEXTURE
  uniform sampler2D rimMultiplyTexture;
  uniform mat3 rimMultiplyTextureUvTransform;
#endif
uniform float rimLightingMixFactor;
uniform float parametricRimFresnelPowerFactor;
uniform float parametricRimLiftFactor;

#ifdef USE_MATCAPTEXTURE
  uniform vec3 matcapFactor;
  uniform sampler2D matcapTexture;
  uniform mat3 matcapTextureUvTransform;
#endif

uniform vec3 emissive;
uniform float emissiveIntensity;

uniform vec3 outlineColorFactor;
uniform float outlineLightingMixFactor;

#ifdef USE_UVANIMATIONMASKTEXTURE
  uniform sampler2D uvAnimationMaskTexture;
  uniform mat3 uvAnimationMaskTextureUvTransform;
#endif

uniform float uvAnimationScrollXOffset;
uniform float uvAnimationScrollYOffset;
uniform float uvAnimationRotationPhase;

#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>

// #include <uv_pars_fragment>
#if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
  varying vec2 vUv;
#endif

#include <uv2_pars_fragment>
#include <map_pars_fragment>

#ifdef USE_MAP
  uniform mat3 mapUvTransform;
#endif

// #include <alphamap_pars_fragment>

#if THREE_VRM_THREE_REVISION >= 132
  #include <alphatest_pars_fragment>
#endif

#include <aomap_pars_fragment>
// #include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>

#ifdef USE_EMISSIVEMAP
  uniform mat3 emissiveMapUvTransform;
#endif

// #include <envmap_common_pars_fragment>
// #include <envmap_pars_fragment>
// #include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>

// #include <bsdfs>
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
  return RECIPROCAL_PI * diffuseColor;
}

#include <lights_pars_begin>

#if THREE_VRM_THREE_REVISION >= 132
  #include <normal_pars_fragment>
#endif

// #include <lights_phong_pars_fragment>
varying vec3 vViewPosition;

#if THREE_VRM_THREE_REVISION < 132
  #ifndef FLAT_SHADED
    varying vec3 vNormal;
  #endif
#endif

struct MToonMaterial {
  vec3 diffuseColor;
  vec3 shadeColor;
  float shadingShift;
};

float linearstep( float a, float b, float t ) {
  return clamp( ( t - a ) / ( b - a ), 0.0, 1.0 );
}

/**
 * Convert NdotL into toon shading factor using shadingShift and shadingToony
 */
float getShading(
  const in float dotNL,
  const in float shadow,
  const in float shadingShift
) {
  float shading = dotNL;
  shading = shading + shadingShift;
  shading = linearstep( -1.0 + shadingToonyFactor, 1.0 - shadingToonyFactor, shading );
  shading *= shadow;
  return shading;
}

/**
 * Mix diffuseColor and shadeColor using shading factor and light color
 */
vec3 getDiffuse(
  const in MToonMaterial material,
  const in float shading,
  in vec3 lightColor
) {
  #ifdef DEBUG_LITSHADERATE
    return vec3( BRDF_Lambert( shading * lightColor ) );
  #endif

  #if THREE_VRM_THREE_REVISION < 132
    #ifndef PHYSICALLY_CORRECT_LIGHTS
      lightColor *= PI;
    #endif
  #endif

  vec3 col = lightColor * BRDF_Lambert( mix( material.shadeColor, material.diffuseColor, shading ) );

  // The "comment out if you want to PBR absolutely" line
  #ifdef V0_COMPAT_SHADE
    col = min( col, material.diffuseColor );
  #endif

  return col;
}

void RE_Direct_MToon( const in IncidentLight directLight, const in GeometricContext geometry, const in MToonMaterial material, const in float shadow, inout ReflectedLight reflectedLight ) {
  float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
  vec3 irradiance = directLight.color;

  #if THREE_VRM_THREE_REVISION < 132
    #ifndef PHYSICALLY_CORRECT_LIGHTS
      irradiance *= PI;
    #endif
  #endif

  // directSpecular will be used for rim lighting, not an actual specular
  reflectedLight.directSpecular += irradiance;

  irradiance *= dotNL;

  float shading = getShading( dotNL, shadow, material.shadingShift );

  // toon shaded diffuse
  reflectedLight.directDiffuse += getDiffuse( material, shading, directLight.color );
}

void RE_IndirectDiffuse_MToon( const in vec3 irradiance, const in GeometricContext geometry, const in MToonMaterial material, inout ReflectedLight reflectedLight ) {
  // indirect diffuse will use diffuseColor, no shadeColor involved
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );

  // directSpecular will be used for rim lighting, not an actual specular
  reflectedLight.directSpecular += irradiance;
}

#define RE_Direct RE_Direct_MToon
#define RE_IndirectDiffuse RE_IndirectDiffuse_MToon
#define Material_LightProbeLOD( material ) (0)

#include <shadowmap_pars_fragment>
// #include <bumpmap_pars_fragment>

// #include <normalmap_pars_fragment>
#ifdef USE_NORMALMAP

  uniform sampler2D normalMap;
  uniform mat3 normalMapUvTransform;
  uniform vec2 normalScale;

#endif

#ifdef OBJECTSPACE_NORMALMAP

  uniform mat3 normalMatrix;

#endif

#if ! defined ( USE_TANGENT ) && defined ( TANGENTSPACE_NORMALMAP )

  // Per-Pixel Tangent Space Normal Mapping
  // http://hacksoflife.blogspot.ch/2009/11/per-pixel-tangent-space-normal-mapping.html

  // three-vrm specific change: it requires \`uv\` as an input in order to support uv scrolls

  // Temporary compat against shader change @ Three.js r126
  // See: #21205, #21307, #21299
  #if THREE_VRM_THREE_REVISION >= 126

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      vec3 N = normalize( surf_norm );

      vec3 q1perp = cross( q1, N );
      vec3 q0perp = cross( N, q0 );

      vec3 T = q1perp * st0.x + q0perp * st1.x;
      vec3 B = q1perp * st0.y + q0perp * st1.y;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?
      if ( length( T ) == 0.0 || length( B ) == 0.0 ) {
        return surf_norm;
      }

      float det = max( dot( T, T ), dot( B, B ) );
      float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );

      return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );

    }

  #else

    vec3 perturbNormal2Arb( vec2 uv, vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {

      // Workaround for Adreno 3XX dFd*( vec3 ) bug. See #9988

      vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
      vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
      vec2 st0 = dFdx( uv.st );
      vec2 st1 = dFdy( uv.st );

      float scale = sign( st1.t * st0.s - st0.t * st1.s ); // we do not care about the magnitude

      vec3 S = ( q0 * st1.t - q1 * st0.t ) * scale;
      vec3 T = ( - q0 * st1.s + q1 * st0.s ) * scale;

      // three-vrm specific change: Workaround for the issue that happens when delta of uv = 0.0
      // TODO: Is this still required? Or shall I make a PR about it?

      if ( length( S ) == 0.0 || length( T ) == 0.0 ) {
        return surf_norm;
      }

      S = normalize( S );
      T = normalize( T );
      vec3 N = normalize( surf_norm );

      #ifdef DOUBLE_SIDED

        // Workaround for Adreno GPUs gl_FrontFacing bug. See #15850 and #10331

        bool frontFacing = dot( cross( S, T ), N ) > 0.0;

        mapN.xy *= ( float( frontFacing ) * 2.0 - 1.0 );

      #else

        mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

      mat3 tsn = mat3( S, T, N );
      return normalize( tsn * mapN );

    }

  #endif

#endif

// #include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

// == post correction ==========================================================
void postCorrection() {
  #include <tonemapping_fragment>
  #include <encodings_fragment>
  #include <fog_fragment>
  #include <premultiplied_alpha_fragment>
  #include <dithering_fragment>
}

// == main procedure ===========================================================
void main() {
  #include <clipping_planes_fragment>

  vec2 uv = vec2(0.5, 0.5);

  #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
    uv = vUv;

    float uvAnimMask = 1.0;
    #ifdef USE_UVANIMATIONMASKTEXTURE
      vec2 uvAnimationMaskTextureUv = ( uvAnimationMaskTextureUvTransform * vec3( uv, 1 ) ).xy;
      uvAnimMask = texture2D( uvAnimationMaskTexture, uvAnimationMaskTextureUv ).b;
    #endif

    uv = uv + vec2( uvAnimationScrollXOffset, uvAnimationScrollYOffset ) * uvAnimMask;
    float uvRotCos = cos( uvAnimationRotationPhase * uvAnimMask );
    float uvRotSin = sin( uvAnimationRotationPhase * uvAnimMask );
    uv = mat2( uvRotCos, -uvRotSin, uvRotSin, uvRotCos ) * ( uv - 0.5 ) + 0.5;
  #endif

  #ifdef DEBUG_UV
    gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
    #if ( defined( MTOON_USE_UV ) && !defined( MTOON_UVS_VERTEX_ONLY ) )
      gl_FragColor = vec4( uv, 0.0, 1.0 );
    #endif
    return;
  #endif

  vec4 diffuseColor = vec4( litFactor, opacity );
  ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
  vec3 totalEmissiveRadiance = emissive * emissiveIntensity;

  #include <logdepthbuf_fragment>

  // #include <map_fragment>
  #ifdef USE_MAP
    vec2 mapUv = ( mapUvTransform * vec3( uv, 1 ) ).xy;
    #if THREE_VRM_THREE_REVISION >= 137
      vec4 sampledDiffuseColor = texture2D( map, mapUv );
      #ifdef DECODE_VIDEO_TEXTURE
        sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
      #endif
      diffuseColor *= sampledDiffuseColor;
    #else
      // COMPAT: pre-r137
      vec4 texelColor = texture2D( map, mapUv );
      texelColor = mapTexelToLinear( texelColor );
      diffuseColor *= texelColor;
    #endif
  #endif

  // #include <color_fragment>
  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    diffuseColor.rgb *= vColor;
  #endif

  // #include <alphamap_fragment>

  #include <alphatest_fragment>

  // #include <specularmap_fragment>
  #include <normal_fragment_begin>

  #ifdef OUTLINE
    normal *= -1.0;
  #endif

  // #include <normal_fragment_maps>

  #ifdef OBJECTSPACE_NORMALMAP

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;
    normal = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0; // overrides both flatShading and attribute normals

    #ifdef FLIP_SIDED

      normal = - normal;

    #endif

    #ifdef DOUBLE_SIDED

      // Temporary compat against shader change @ Three.js r126
      // See: #21205, #21307, #21299
      #if THREE_VRM_THREE_REVISION >= 126

        normal = normal * faceDirection;

      #else

        normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );

      #endif

    #endif

    normal = normalize( normalMatrix * normal );

  #elif defined( TANGENTSPACE_NORMALMAP )

    vec2 normalMapUv = ( normalMapUvTransform * vec3( uv, 1 ) ).xy;
    vec3 mapN = texture2D( normalMap, normalMapUv ).xyz * 2.0 - 1.0;
    mapN.xy *= normalScale;

    #ifdef USE_TANGENT

      normal = normalize( vTBN * mapN );

    #else

      // Temporary compat against shader change @ Three.js r126
      // See: #21205, #21307, #21299
      #if THREE_VRM_THREE_REVISION >= 126

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN, faceDirection );

      #else

        normal = perturbNormal2Arb( uv, -vViewPosition, normal, mapN );

      #endif

    #endif

  #endif

  // #include <emissivemap_fragment>
  #ifdef USE_EMISSIVEMAP
    vec2 emissiveMapUv = ( emissiveMapUvTransform * vec3( uv, 1 ) ).xy;
    #if THREE_VRM_THREE_REVISION >= 137
      totalEmissiveRadiance *= texture2D( emissiveMap, emissiveMapUv ).rgb;
    #else
      // COMPAT: pre-r137
      totalEmissiveRadiance *= emissiveMapTexelToLinear( texture2D( emissiveMap, emissiveMapUv ) ).rgb;
    #endif
  #endif

  #ifdef DEBUG_NORMAL
    gl_FragColor = vec4( 0.5 + 0.5 * normal, 1.0 );
    return;
  #endif

  // -- MToon: lighting --------------------------------------------------------
  // accumulation
  // #include <lights_phong_fragment>
  MToonMaterial material;

  material.diffuseColor = diffuseColor.rgb;

  material.shadeColor = shadeColorFactor;
  #ifdef USE_SHADEMULTIPLYTEXTURE
    vec2 shadeMultiplyTextureUv = ( shadeMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    #if THREE_VRM_THREE_REVISION >= 137
      material.shadeColor *= texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv ).rgb;
    #else
      // COMPAT: pre-r137
      material.shadeColor *= shadeMultiplyTextureTexelToLinear( texture2D( shadeMultiplyTexture, shadeMultiplyTextureUv) ).rgb;
    #endif
  #endif

  #if ( defined( USE_COLOR ) && !defined( IGNORE_VERTEX_COLOR ) )
    material.shadeColor.rgb *= vColor;
  #endif

  material.shadingShift = shadingShiftFactor;
  #ifdef USE_SHADINGSHIFTTEXTURE
    vec2 shadingShiftTextureUv = ( shadingShiftTextureUvTransform * vec3( uv, 1 ) ).xy;
    material.shadingShift += texture2D( shadingShiftTexture, shadingShiftTextureUv ).r * shadingShiftTextureScale;
  #endif

  // #include <lights_fragment_begin>

  // MToon Specific changes:
  // Since we want to take shadows into account of shading instead of irradiance,
  // we had to modify the codes that multiplies the results of shadowmap into color of direct lights.

  GeometricContext geometry;

  geometry.position = - vViewPosition;
  geometry.normal = normal;
  geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );

  #ifdef CLEARCOAT

    geometry.clearcoatNormal = clearcoatNormal;

  #endif

  IncidentLight directLight;

  // since these variables will be used in unrolled loop, we have to define in prior
  float shadow;

  #if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

    PointLight pointLight;
    #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
    PointLightShadow pointLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {

      pointLight = pointLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 132
        getPointLightInfo( pointLight, geometry, directLight );
      #else
        getPointDirectLightIrradiance( pointLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
      pointLightShadow = pointLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
      #endif

      RE_Direct( directLight, geometry, material, shadow, reflectedLight );

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )

    SpotLight spotLight;
    #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
    SpotLightShadow spotLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {

      spotLight = spotLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 132
        getSpotLightInfo( spotLight, geometry, directLight );
      #else
        getSpotDirectLightIrradiance( spotLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
      spotLightShadow = spotLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
      #endif

      RE_Direct( directLight, geometry, material, shadow, reflectedLight );

    }
    #pragma unroll_loop_end

  #endif

  #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )

    DirectionalLight directionalLight;
    #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
    DirectionalLightShadow directionalLightShadow;
    #endif

    #pragma unroll_loop_start
    for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {

      directionalLight = directionalLights[ i ];

      #if THREE_VRM_THREE_REVISION >= 132
        getDirectionalLightInfo( directionalLight, geometry, directLight );
      #else
        getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
      #endif

      shadow = 1.0;
      #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
      directionalLightShadow = directionalLightShadows[ i ];
      shadow = all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
      #endif

      RE_Direct( directLight, geometry, material, shadow, reflectedLight );

    }
    #pragma unroll_loop_end

  #endif

  // #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )

  //   RectAreaLight rectAreaLight;

  //   #pragma unroll_loop_start
  //   for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {

  //     rectAreaLight = rectAreaLights[ i ];
  //     RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );

  //   }
  //   #pragma unroll_loop_end

  // #endif

  #if defined( RE_IndirectDiffuse )

    vec3 iblIrradiance = vec3( 0.0 );

    vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );

    #if THREE_VRM_THREE_REVISION >= 133
      irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
    #else
      irradiance += getLightProbeIrradiance( lightProbe, geometry );
    #endif

    #if ( NUM_HEMI_LIGHTS > 0 )

      #pragma unroll_loop_start
      for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {

        #if THREE_VRM_THREE_REVISION >= 133
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
        #else
          irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
        #endif

      }
      #pragma unroll_loop_end

    #endif

  #endif

  // #if defined( RE_IndirectSpecular )

  //   vec3 radiance = vec3( 0.0 );
  //   vec3 clearcoatRadiance = vec3( 0.0 );

  // #endif

  #include <lights_fragment_maps>
  #include <lights_fragment_end>

  // modulation
  #include <aomap_fragment>

  vec3 col = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;

  #ifdef DEBUG_LITSHADERATE
    gl_FragColor = vec4( col, diffuseColor.a );
    postCorrection();
    return;
  #endif

  // -- MToon: rim lighting -----------------------------------------
  vec3 viewDir = normalize( vViewPosition );

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    reflectedLight.directSpecular /= PI;
  #endif
  vec3 rimMix = mix( vec3( 1.0 ), reflectedLight.directSpecular, 1.0 );

  vec3 rim = parametricRimColorFactor * pow( saturate( 1.0 - dot( viewDir, normal ) + parametricRimLiftFactor ), parametricRimFresnelPowerFactor );

  #ifdef USE_MATCAPTEXTURE
    {
      vec3 x = normalize( vec3( viewDir.z, 0.0, -viewDir.x ) );
      vec3 y = cross( viewDir, x ); // guaranteed to be normalized
      vec2 sphereUv = 0.5 + 0.5 * vec2( dot( x, normal ), -dot( y, normal ) );
      sphereUv = ( matcapTextureUvTransform * vec3( sphereUv, 1 ) ).xy;
      #if THREE_VRM_THREE_REVISION >= 137
        vec3 matcap = texture2D( matcapTexture, sphereUv ).rgb;
      #else
        // COMPAT: pre-r137
        vec3 matcap = matcapTextureTexelToLinear( texture2D( matcapTexture, sphereUv ) ).rgb;
      #endif
      rim += matcapFactor * matcap;
    }
  #endif

  #ifdef USE_RIMMULTIPLYTEXTURE
    vec2 rimMultiplyTextureUv = ( rimMultiplyTextureUvTransform * vec3( uv, 1 ) ).xy;
    #if THREE_VRM_THREE_REVISION >= 137
      rim *= texture2D( rimMultiplyTexture, rimMultiplyTextureUv ).rgb;
    #else
      // COMPAT: pre-r137
      rim *= rimMultiplyTextureTexelToLinear( texture2D( rimMultiplyTexture, rimMultiplyTextureUv ) ).rgb;
    #endif
  #endif

  col += rimMix * rim;

  // -- MToon: Emission --------------------------------------------------------
  col += totalEmissiveRadiance;

  // #include <envmap_fragment>

  // -- Almost done! -----------------------------------------------------------
  #if defined( OUTLINE )
    col = outlineColorFactor.rgb * mix( vec3( 1.0 ), col, outlineLightingMixFactor );
  #endif

  gl_FragColor = vec4( col, diffuseColor.a );
  postCorrection();
}
`,Rr={None:"none",Normal:"normal",LitShadeRate:"litShadeRate",UV:"uv"},Wt={None:"none",WorldCoordinates:"worldCoordinates",ScreenCoordinates:"screenCoordinates"},Mr=3002,yr=3004,wr=3005,Ar=3006,Sr=3007,br=u=>{if(parseInt(h.REVISION,10)>=136)switch(u){case h.LinearEncoding:return["Linear","( value )"];case h.sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",u),["Linear","( value )"]}else switch(u){case h.LinearEncoding:return["Linear","( value )"];case h.sRGBEncoding:return["sRGB","( value )"];case Mr:return["RGBE","( value )"];case yr:return["RGBM","( value, 7.0 )"];case wr:return["RGBM","( value, 16.0 )"];case Ar:return["RGBD","( value, 256.0 )"];case Sr:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw new Error("unsupported encoding: "+u)}},jt=(u,e)=>{let t=br(e);return"vec4 "+u+"( vec4 value ) { return "+t[0]+"ToLinear"+t[1]+"; }"};function zt(u,e){let t;return u&&u.isTexture?t=u.encoding:t=h.LinearEncoding,parseInt(h.REVISION,10)>=133&&e&&u&&u.isTexture&&u.format===h.RGBAFormat&&u.type===h.UnsignedByteType&&u.encoding===h.sRGBEncoding&&(t=h.LinearEncoding),t}var pe=class extends h.ShaderMaterial{constructor(e={}){super({vertexShader:Er,fragmentShader:xr}),this.uvAnimationScrollXSpeedFactor=0,this.uvAnimationScrollYSpeedFactor=0,this.uvAnimationRotationSpeedFactor=0,this.fog=!0,this.normalMapType=h.TangentSpaceNormalMap,this._ignoreVertexColor=!0,this._v0CompatShade=!1,this._debugMode=Rr.None,this._outlineWidthMode=Wt.None,this._isOutline=!1,e.transparentWithZWrite&&(e.depthWrite=!0),delete e.transparentWithZWrite,e.fog=!0,e.lights=!0,e.clipping=!0,parseInt(h.REVISION,10)<129&&(e.skinning=e.skinning||!1),parseInt(h.REVISION,10)<131&&(e.morphTargets=e.morphTargets||!1,e.morphNormals=e.morphNormals||!1),this.uniforms=h.UniformsUtils.merge([h.UniformsLib.common,h.UniformsLib.normalmap,h.UniformsLib.emissivemap,h.UniformsLib.fog,h.UniformsLib.lights,{litFactor:{value:new h.Color(1,1,1)},mapUvTransform:{value:new h.Matrix3},colorAlpha:{value:1},normalMapUvTransform:{value:new h.Matrix3},shadeColorFactor:{value:new h.Color(.97,.81,.86)},shadeMultiplyTexture:{value:null},shadeMultiplyTextureUvTransform:{value:new h.Matrix3},shadingShiftFactor:{value:0},shadingShiftTexture:{value:null},shadingShiftTextureUvTransform:{value:new h.Matrix3},shadingShiftTextureScale:{value:null},shadingToonyFactor:{value:.9},giEqualizationFactor:{value:.9},matcapFactor:{value:new h.Color(0,0,0)},matcapTexture:{value:null},matcapTextureUvTransform:{value:new h.Matrix3},parametricRimColorFactor:{value:new h.Color(0,0,0)},rimMultiplyTexture:{value:null},rimMultiplyTextureUvTransform:{value:new h.Matrix3},rimLightingMixFactor:{value:0},parametricRimFresnelPowerFactor:{value:1},parametricRimLiftFactor:{value:0},emissive:{value:new h.Color(0,0,0)},emissiveIntensity:{value:1},emissiveMapUvTransform:{value:new h.Matrix3},outlineWidthMultiplyTexture:{value:null},outlineWidthMultiplyTextureUvTransform:{value:new h.Matrix3},outlineWidthFactor:{value:.5},outlineColorFactor:{value:new h.Color(0,0,0)},outlineLightingMixFactor:{value:1},uvAnimationMaskTexture:{value:null},uvAnimationMaskTextureUvTransform:{value:new h.Matrix3},uvAnimationScrollXOffset:{value:0},uvAnimationScrollYOffset:{value:0},uvAnimationRotationPhase:{value:0}},e.uniforms]),this.setValues(e),this._uploadUniformsWorkaround(),this.customProgramCacheKey=()=>[...Object.entries(this._generateDefines()).map(([t,n])=>`${t}:${n}`),this.matcapTexture?`matcapTextureEncoding:${this.matcapTexture.encoding}`:"",this.shadeMultiplyTexture?`shadeMultiplyTextureEncoding:${this.shadeMultiplyTexture.encoding}`:"",this.rimMultiplyTexture?`rimMultiplyTextureEncoding:${this.rimMultiplyTexture.encoding}`:""].join(","),this.onBeforeCompile=(t,n)=>{let i=n.capabilities.isWebGL2,r=parseInt(h.REVISION,10),s=Object.entries(Object.assign(Object.assign({},this._generateDefines()),this.defines)).filter(([o,l])=>!!l).map(([o,l])=>`#define ${o} ${l}`).join(`
`)+`
`,a="";parseInt(h.REVISION,10)<137&&(a=(this.matcapTexture!==null?jt("matcapTextureTexelToLinear",zt(this.matcapTexture,i))+`
`:"")+(this.shadeMultiplyTexture!==null?jt("shadeMultiplyTextureTexelToLinear",zt(this.shadeMultiplyTexture,i))+`
`:"")+(this.rimMultiplyTexture!==null?jt("rimMultiplyTextureTexelToLinear",zt(this.rimMultiplyTexture,i))+`
`:"")),t.vertexShader=s+t.vertexShader,t.fragmentShader=s+a+t.fragmentShader,r<132&&(t.fragmentShader=t.fragmentShader.replace("#include <normal_pars_fragment>",""),t.fragmentShader=t.fragmentShader.replace("#include <alphatest_pars_fragment>",""))}}get color(){return this.uniforms.litFactor.value}set color(e){this.uniforms.litFactor.value=e}get map(){return this.uniforms.map.value}set map(e){this.uniforms.map.value=e}get normalMap(){return this.uniforms.normalMap.value}set normalMap(e){this.uniforms.normalMap.value=e}get normalScale(){return this.uniforms.normalScale.value}set normalScale(e){this.uniforms.normalScale.value=e}get emissive(){return this.uniforms.emissive.value}set emissive(e){this.uniforms.emissive.value=e}get emissiveIntensity(){return this.uniforms.emissiveIntensity.value}set emissiveIntensity(e){this.uniforms.emissiveIntensity.value=e}get emissiveMap(){return this.uniforms.emissiveMap.value}set emissiveMap(e){this.uniforms.emissiveMap.value=e}get shadeColorFactor(){return this.uniforms.shadeColorFactor.value}set shadeColorFactor(e){this.uniforms.shadeColorFactor.value=e}get shadeMultiplyTexture(){return this.uniforms.shadeMultiplyTexture.value}set shadeMultiplyTexture(e){this.uniforms.shadeMultiplyTexture.value=e}get shadingShiftFactor(){return this.uniforms.shadingShiftFactor.value}set shadingShiftFactor(e){this.uniforms.shadingShiftFactor.value=e}get shadingShiftTexture(){return this.uniforms.shadingShiftTexture.value}set shadingShiftTexture(e){this.uniforms.shadingShiftTexture.value=e}get shadingShiftTextureScale(){return this.uniforms.shadingShiftTextureScale.value}set shadingShiftTextureScale(e){this.uniforms.shadingShiftTextureScale.value=e}get shadingToonyFactor(){return this.uniforms.shadingToonyFactor.value}set shadingToonyFactor(e){this.uniforms.shadingToonyFactor.value=e}get giEqualizationFactor(){return this.uniforms.giEqualizationFactor.value}set giEqualizationFactor(e){this.uniforms.giEqualizationFactor.value=e}get matcapFactor(){return this.uniforms.matcapFactor.value}set matcapFactor(e){this.uniforms.matcapFactor.value=e}get matcapTexture(){return this.uniforms.matcapTexture.value}set matcapTexture(e){this.uniforms.matcapTexture.value=e}get parametricRimColorFactor(){return this.uniforms.parametricRimColorFactor.value}set parametricRimColorFactor(e){this.uniforms.parametricRimColorFactor.value=e}get rimMultiplyTexture(){return this.uniforms.rimMultiplyTexture.value}set rimMultiplyTexture(e){this.uniforms.rimMultiplyTexture.value=e}get rimLightingMixFactor(){return this.uniforms.rimLightingMixFactor.value}set rimLightingMixFactor(e){this.uniforms.rimLightingMixFactor.value=e}get parametricRimFresnelPowerFactor(){return this.uniforms.parametricRimFresnelPowerFactor.value}set parametricRimFresnelPowerFactor(e){this.uniforms.parametricRimFresnelPowerFactor.value=e}get parametricRimLiftFactor(){return this.uniforms.parametricRimLiftFactor.value}set parametricRimLiftFactor(e){this.uniforms.parametricRimLiftFactor.value=e}get outlineWidthMultiplyTexture(){return this.uniforms.outlineWidthMultiplyTexture.value}set outlineWidthMultiplyTexture(e){this.uniforms.outlineWidthMultiplyTexture.value=e}get outlineWidthFactor(){return this.uniforms.outlineWidthFactor.value}set outlineWidthFactor(e){this.uniforms.outlineWidthFactor.value=e}get outlineColorFactor(){return this.uniforms.outlineColorFactor.value}set outlineColorFactor(e){this.uniforms.outlineColorFactor.value=e}get outlineLightingMixFactor(){return this.uniforms.outlineLightingMixFactor.value}set outlineLightingMixFactor(e){this.uniforms.outlineLightingMixFactor.value=e}get uvAnimationMaskTexture(){return this.uniforms.uvAnimationMaskTexture.value}set uvAnimationMaskTexture(e){this.uniforms.uvAnimationMaskTexture.value=e}get uvAnimationScrollXOffset(){return this.uniforms.uvAnimationScrollXOffset.value}set uvAnimationScrollXOffset(e){this.uniforms.uvAnimationScrollXOffset.value=e}get uvAnimationScrollYOffset(){return this.uniforms.uvAnimationScrollYOffset.value}set uvAnimationScrollYOffset(e){this.uniforms.uvAnimationScrollYOffset.value=e}get uvAnimationRotationPhase(){return this.uniforms.uvAnimationRotationPhase.value}set uvAnimationRotationPhase(e){this.uniforms.uvAnimationRotationPhase.value=e}get ignoreVertexColor(){return this._ignoreVertexColor}set ignoreVertexColor(e){this._ignoreVertexColor=e,this.needsUpdate=!0}get v0CompatShade(){return this._v0CompatShade}set v0CompatShade(e){this._v0CompatShade=e,this.needsUpdate=!0}get debugMode(){return this._debugMode}set debugMode(e){this._debugMode=e,this.needsUpdate=!0}get outlineWidthMode(){return this._outlineWidthMode}set outlineWidthMode(e){this._outlineWidthMode=e,this.needsUpdate=!0}get isOutline(){return this._isOutline}set isOutline(e){this._isOutline=e,this.needsUpdate=!0}get isMToonMaterial(){return!0}update(e){this._uploadUniformsWorkaround(),this._updateUVAnimation(e)}copy(e){return super.copy(e),this.map=e.map,this.normalMap=e.normalMap,this.emissiveMap=e.emissiveMap,this.shadeMultiplyTexture=e.shadeMultiplyTexture,this.shadingShiftTexture=e.shadingShiftTexture,this.matcapTexture=e.matcapTexture,this.rimMultiplyTexture=e.rimMultiplyTexture,this.outlineWidthMultiplyTexture=e.outlineWidthMultiplyTexture,this.uvAnimationMaskTexture=e.uvAnimationMaskTexture,this.normalMapType=e.normalMapType,this.uvAnimationScrollXSpeedFactor=e.uvAnimationScrollXSpeedFactor,this.uvAnimationScrollYSpeedFactor=e.uvAnimationScrollYSpeedFactor,this.uvAnimationRotationSpeedFactor=e.uvAnimationRotationSpeedFactor,this.ignoreVertexColor=e.ignoreVertexColor,this.v0CompatShade=e.v0CompatShade,this.debugMode=e.debugMode,this.outlineWidthMode=e.outlineWidthMode,this.isOutline=e.isOutline,this.needsUpdate=!0,this}_updateUVAnimation(e){this.uniforms.uvAnimationScrollXOffset.value+=e*this.uvAnimationScrollXSpeedFactor,this.uniforms.uvAnimationScrollYOffset.value+=e*this.uvAnimationScrollYSpeedFactor,this.uniforms.uvAnimationRotationPhase.value+=e*this.uvAnimationRotationSpeedFactor,this.uniformsNeedUpdate=!0}_uploadUniformsWorkaround(){this.uniforms.opacity.value=this.opacity,this._updateTextureMatrix(this.uniforms.map,this.uniforms.mapUvTransform),this._updateTextureMatrix(this.uniforms.normalMap,this.uniforms.normalMapUvTransform),this._updateTextureMatrix(this.uniforms.emissiveMap,this.uniforms.emissiveMapUvTransform),this._updateTextureMatrix(this.uniforms.shadeMultiplyTexture,this.uniforms.shadeMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.shadingShiftTexture,this.uniforms.shadingShiftTextureUvTransform),this._updateTextureMatrix(this.uniforms.matcapTexture,this.uniforms.matcapTextureUvTransform),this._updateTextureMatrix(this.uniforms.rimMultiplyTexture,this.uniforms.rimMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.outlineWidthMultiplyTexture,this.uniforms.outlineWidthMultiplyTextureUvTransform),this._updateTextureMatrix(this.uniforms.uvAnimationMaskTexture,this.uniforms.uvAnimationMaskTextureUvTransform),parseInt(h.REVISION,10)>=132&&(this.uniforms.alphaTest.value=this.alphaTest),this.uniformsNeedUpdate=!0}_generateDefines(){let e=parseInt(h.REVISION,10),t=this.outlineWidthMultiplyTexture!==null,n=this.map!==null||this.emissiveMap!==null||this.shadeMultiplyTexture!==null||this.shadingShiftTexture!==null||this.rimMultiplyTexture!==null||this.uvAnimationMaskTexture!==null;return{THREE_VRM_THREE_REVISION:e,OUTLINE:this._isOutline,MTOON_USE_UV:t||n,MTOON_UVS_VERTEX_ONLY:t&&!n,V0_COMPAT_SHADE:this._v0CompatShade,USE_SHADEMULTIPLYTEXTURE:this.shadeMultiplyTexture!==null,USE_SHADINGSHIFTTEXTURE:this.shadingShiftTexture!==null,USE_MATCAPTEXTURE:this.matcapTexture!==null,USE_RIMMULTIPLYTEXTURE:this.rimMultiplyTexture!==null,USE_OUTLINEWIDTHMULTIPLYTEXTURE:this._isOutline&&this.outlineWidthMultiplyTexture!==null,USE_UVANIMATIONMASKTEXTURE:this.uvAnimationMaskTexture!==null,IGNORE_VERTEX_COLOR:this._ignoreVertexColor===!0,DEBUG_NORMAL:this._debugMode==="normal",DEBUG_LITSHADERATE:this._debugMode==="litShadeRate",DEBUG_UV:this._debugMode==="uv",OUTLINE_WIDTH_WORLD:this._isOutline&&this._outlineWidthMode===Wt.WorldCoordinates,OUTLINE_WIDTH_SCREEN:this._isOutline&&this._outlineWidthMode===Wt.ScreenCoordinates}}_updateTextureMatrix(e,t){e.value&&(e.value.matrixAutoUpdate&&e.value.updateMatrix(),t.value.copy(e.value.matrix))}},nn=class{constructor(e,t){this._parser=e,this._materialParams=t,this._pendings=[]}get pending(){return Promise.all(this._pendings)}assignPrimitive(e,t){t!=null&&(this._materialParams[e]=t)}assignColor(e,t,n){t!=null&&(this._materialParams[e]=new h.Color().fromArray(t),n&&this._materialParams[e].convertSRGBToLinear())}assignTexture(e,t,n){return Q(this,void 0,void 0,function*(){let i=Q(this,void 0,void 0,function*(){t!=null&&(yield this._parser.assignTexture(this._materialParams,e,t),n&&(this._materialParams[e].encoding=h.sRGBEncoding))});return this._pendings.push(i),i})}assignTextureByIndex(e,t,n){return Q(this,void 0,void 0,function*(){return this.assignTexture(e,t!=null?{index:t}:void 0,n)})}},Lr=new Set(["1.0","1.0-beta"]),We=class u{constructor(e,t={}){var n,i,r;this.parser=e,this.renderOrderOffset=(n=t.renderOrderOffset)!==null&&n!==void 0?n:0,this.v0CompatShade=(i=t.v0CompatShade)!==null&&i!==void 0?i:!1,this.debugMode=(r=t.debugMode)!==null&&r!==void 0?r:"none",this._mToonMaterialSet=new Set}get name(){return u.EXTENSION_NAME}beforeRoot(){return Q(this,void 0,void 0,function*(){this._removeUnlitExtensionIfMToonExists()})}afterRoot(e){return Q(this,void 0,void 0,function*(){e.userData.vrmMToonMaterials=Array.from(this._mToonMaterialSet)})}getMaterialType(e){return this._getMToonExtension(e)?pe:null}extendMaterialParams(e,t){let n=this._getMToonExtension(e);return n?this._extendMaterialParams(n,t):null}loadMesh(e){var t;return Q(this,void 0,void 0,function*(){let n=this.parser,r=(t=n.json.meshes)===null||t===void 0?void 0:t[e];if(r==null)throw new Error(`MToonMaterialLoaderPlugin: Attempt to use meshes[${e}] of glTF but the mesh doesn't exist`);let s=r.primitives,a=yield n.loadMesh(e);if(s.length===1){let o=a,l=s[0].material;l!=null&&this._setupPrimitive(o,l)}else{let o=a;for(let l=0;l<s.length;l++){let c=o.children[l],d=s[l].material;d!=null&&this._setupPrimitive(c,d)}}return a})}_removeUnlitExtensionIfMToonExists(){let n=this.parser.json.materials;n?.map((i,r)=>{var s;this._getMToonExtension(r)&&(!((s=i.extensions)===null||s===void 0)&&s.KHR_materials_unlit)&&delete i.extensions.KHR_materials_unlit})}_getMToonExtension(e){var t,n;let s=(t=this.parser.json.materials)===null||t===void 0?void 0:t[e];if(s==null){console.warn(`MToonMaterialLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=s.extensions)===null||n===void 0?void 0:n[u.EXTENSION_NAME];if(a==null)return;let o=a.specVersion;if(!Lr.has(o)){console.warn(`MToonMaterialLoaderPlugin: Unknown ${u.EXTENSION_NAME} specVersion "${o}"`);return}return a}_extendMaterialParams(e,t){var n;return Q(this,void 0,void 0,function*(){delete t.metalness,delete t.roughness;let i=new nn(this.parser,t);i.assignPrimitive("transparentWithZWrite",e.transparentWithZWrite),i.assignColor("shadeColorFactor",e.shadeColorFactor),i.assignTexture("shadeMultiplyTexture",e.shadeMultiplyTexture,!0),i.assignPrimitive("shadingShiftFactor",e.shadingShiftFactor),i.assignTexture("shadingShiftTexture",e.shadingShiftTexture,!0),i.assignPrimitive("shadingShiftTextureScale",(n=e.shadingShiftTexture)===null||n===void 0?void 0:n.scale),i.assignPrimitive("shadingToonyFactor",e.shadingToonyFactor),i.assignPrimitive("giEqualizationFactor",e.giEqualizationFactor),i.assignColor("matcapFactor",e.matcapFactor),i.assignTexture("matcapTexture",e.matcapTexture,!0),i.assignColor("parametricRimColorFactor",e.parametricRimColorFactor),i.assignTexture("rimMultiplyTexture",e.rimMultiplyTexture,!0),i.assignPrimitive("rimLightingMixFactor",e.rimLightingMixFactor),i.assignPrimitive("parametricRimFresnelPowerFactor",e.parametricRimFresnelPowerFactor),i.assignPrimitive("parametricRimLiftFactor",e.parametricRimLiftFactor),i.assignPrimitive("outlineWidthMode",e.outlineWidthMode),i.assignPrimitive("outlineWidthFactor",e.outlineWidthFactor),i.assignTexture("outlineWidthMultiplyTexture",e.outlineWidthMultiplyTexture,!1),i.assignColor("outlineColorFactor",e.outlineColorFactor),i.assignPrimitive("outlineLightingMixFactor",e.outlineLightingMixFactor),i.assignTexture("uvAnimationMaskTexture",e.uvAnimationMaskTexture,!1),i.assignPrimitive("uvAnimationScrollXSpeedFactor",e.uvAnimationScrollXSpeedFactor),i.assignPrimitive("uvAnimationScrollYSpeedFactor",e.uvAnimationScrollYSpeedFactor),i.assignPrimitive("uvAnimationRotationSpeedFactor",e.uvAnimationRotationSpeedFactor),i.assignPrimitive("v0CompatShade",this.v0CompatShade),i.assignPrimitive("debugMode",this.debugMode),yield i.pending})}_setupPrimitive(e,t){let n=this._getMToonExtension(t);if(n){let i=this._parseRenderOrder(n);e.renderOrder=i+this.renderOrderOffset,this._generateOutline(e),this._addToMaterialSet(e);return}}_generateOutline(e){let t=e.material;if(!(t instanceof pe)||t.outlineWidthMode==="none"||t.outlineWidthFactor<=0)return;e.material=[t];let n=t.clone();n.name+=" (Outline)",n.isOutline=!0,n.side=h.BackSide,e.material.push(n);let i=e.geometry,r=i.index?i.index.count:i.attributes.position.count/3;i.addGroup(0,r,0),i.addGroup(0,r,1)}_addToMaterialSet(e){let t=e.material,n=new Set;Array.isArray(t)?t.forEach(i=>n.add(i)):n.add(t);for(let i of n)i instanceof pe&&this._mToonMaterialSet.add(i)}_parseRenderOrder(e){var t;return(e.transparentWithZWrite?0:19)+((t=e.renderQueueOffsetNumber)!==null&&t!==void 0?t:0)}};We.EXTENSION_NAME="VRMC_materials_mtoon";function Ir(u,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(d){s(d)}}function o(c){try{l(n.throw(c))}catch(d){s(d)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((n=n.apply(u,e||[])).next())})}var je=class u{constructor(e){this.parser=e}get name(){return u.EXTENSION_NAME}extendMaterialParams(e,t){return Ir(this,void 0,void 0,function*(){let n=this._getHDREmissiveMultiplierExtension(e);if(n==null)return;console.warn("VRMMaterialsHDREmissiveMultiplierLoaderPlugin: `VRMC_materials_hdr_emissiveMultiplier` is archived. Use `KHR_materials_emissive_strength` instead.");let i=n.emissiveMultiplier;t.emissiveIntensity=i})}_getHDREmissiveMultiplierExtension(e){var t,n;let s=(t=this.parser.json.materials)===null||t===void 0?void 0:t[e];if(s==null){console.warn(`VRMMaterialsHDREmissiveMultiplierLoaderPlugin: Attempt to use materials[${e}] of glTF but the material doesn't exist`);return}let a=(n=s.extensions)===null||n===void 0?void 0:n[u.EXTENSION_NAME];if(a!=null)return a}};je.EXTENSION_NAME="VRMC_materials_hdr_emissiveMultiplier";function Pr(u,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(d){s(d)}}function o(c){try{l(n.throw(c))}catch(d){s(d)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((n=n.apply(u,e||[])).next())})}function ee(u){return Math.pow(u,2.2)}var rn=class{constructor(e){var t;this.parser=e,this._renderQueueMapTransparent=new Map,this._renderQueueMapTransparentZWrite=new Map;let n=this.parser.json;n.extensionsUsed=(t=n.extensionsUsed)!==null&&t!==void 0?t:[],n.extensionsUsed.indexOf("KHR_texture_transform")===-1&&n.extensionsUsed.push("KHR_texture_transform")}get name(){return"VRMMaterialsV0CompatPlugin"}beforeRoot(){var e;return Pr(this,void 0,void 0,function*(){let t=this.parser.json,n=(e=t.extensions)===null||e===void 0?void 0:e.VRM,i=n?.materialProperties;i&&(this._populateRenderQueueMap(i),i.forEach((r,s)=>{var a,o;let l=(a=t.materials)===null||a===void 0?void 0:a[s];if(l==null){console.warn(`VRMMaterialsV0CompatPlugin: Attempt to use materials[${s}] of glTF but the material doesn't exist`);return}if(r.shader==="VRM/MToon"){let c=this._parseV0MToonProperties(r,l);t.materials[s]=c}else if(!((o=r.shader)===null||o===void 0)&&o.startsWith("VRM/Unlit")){let c=this._parseV0UnlitProperties(r,l);t.materials[s]=c}else r.shader==="VRM_USE_GLTFSHADER"||console.warn(`VRMMaterialsV0CompatPlugin: Unknown shader: ${r.shader}`)}))})}_parseV0MToonProperties(e,t){var n,i,r,s,a,o,l,c,d,f,m,T,g,v,_,R,x,E,y,w,M,L,b,I,P,N,H,k,O,K,se,oe,et,tt,nt,it,rt,st,ot,at,lt,ut,ct,dt;let mn=(i=(n=e.keywordMap)===null||n===void 0?void 0:n._ALPHABLEND_ON)!==null&&i!==void 0?i:!1,ii=((r=e.floatProperties)===null||r===void 0?void 0:r._ZWrite)===1&&mn,ri=this._v0ParseRenderQueue(e),gn=(a=(s=e.keywordMap)===null||s===void 0?void 0:s._ALPHATEST_ON)!==null&&a!==void 0?a:!1,si=mn?"BLEND":gn?"MASK":"OPAQUE",oi=gn?(o=e.floatProperties)===null||o===void 0?void 0:o._Cutoff:void 0,ai=((c=(l=e.floatProperties)===null||l===void 0?void 0:l._CullMode)!==null&&c!==void 0?c:2)===0,X=this._portTextureTransform(e),li=(f=(d=e.vectorProperties)===null||d===void 0?void 0:d._Color)===null||f===void 0?void 0:f.map((wn,Hi)=>Hi===3?wn:ee(wn)),_n=(m=e.textureProperties)===null||m===void 0?void 0:m._MainTex,ui=_n!=null?{index:_n,extensions:Object.assign({},X)}:void 0,ci=(T=e.floatProperties)===null||T===void 0?void 0:T._BumpScale,vn=(g=e.textureProperties)===null||g===void 0?void 0:g._BumpMap,di=vn!=null?{index:vn,scale:ci,extensions:Object.assign({},X)}:void 0,hi=(_=(v=e.vectorProperties)===null||v===void 0?void 0:v._EmissionColor)===null||_===void 0?void 0:_.map(ee),Tn=(R=e.textureProperties)===null||R===void 0?void 0:R._EmissionMap,fi=Tn!=null?{index:Tn,extensions:Object.assign({},X)}:void 0,pi=(E=(x=e.vectorProperties)===null||x===void 0?void 0:x._ShadeColor)===null||E===void 0?void 0:E.map(ee),En=(y=e.textureProperties)===null||y===void 0?void 0:y._ShadeTexture,mi=En!=null?{index:En,extensions:Object.assign({},X)}:void 0,xe=(M=(w=e.floatProperties)===null||w===void 0?void 0:w._ShadeShift)!==null&&M!==void 0?M:0,Re=(b=(L=e.floatProperties)===null||L===void 0?void 0:L._ShadeToony)!==null&&b!==void 0?b:.9;Re=h.MathUtils.lerp(Re,1,.5+.5*xe),xe=-xe-(1-Re);let xn=(I=e.floatProperties)===null||I===void 0?void 0:I._IndirectLightIntensity,gi=xn?1-xn:void 0,ht=(P=e.textureProperties)===null||P===void 0?void 0:P._SphereAdd,_i=ht!=null?[1,1,1]:void 0,vi=ht!=null?{index:ht}:void 0,Ti=(N=e.floatProperties)===null||N===void 0?void 0:N._RimLightingMix,Rn=(H=e.textureProperties)===null||H===void 0?void 0:H._RimTexture,Ei=Rn!=null?{index:Rn,extensions:Object.assign({},X)}:void 0,xi=(O=(k=e.vectorProperties)===null||k===void 0?void 0:k._RimColor)===null||O===void 0?void 0:O.map(ee),Ri=(K=e.floatProperties)===null||K===void 0?void 0:K._RimFresnelPower,Mi=(se=e.floatProperties)===null||se===void 0?void 0:se._RimLift,yi=["none","worldCoordinates","screenCoordinates"][(et=(oe=e.floatProperties)===null||oe===void 0?void 0:oe._OutlineWidthMode)!==null&&et!==void 0?et:0],ft=(nt=(tt=e.floatProperties)===null||tt===void 0?void 0:tt._OutlineWidth)!==null&&nt!==void 0?nt:0;ft=.01*ft;let Mn=(it=e.textureProperties)===null||it===void 0?void 0:it._OutlineWidthTexture,wi=Mn!=null?{index:Mn,extensions:Object.assign({},X)}:void 0,Ai=(st=(rt=e.vectorProperties)===null||rt===void 0?void 0:rt._OutlineColor)===null||st===void 0?void 0:st.map(ee),Si=((ot=e.floatProperties)===null||ot===void 0?void 0:ot._OutlineColorMode)===1?(at=e.floatProperties)===null||at===void 0?void 0:at._OutlineLightingMix:0,yn=(lt=e.textureProperties)===null||lt===void 0?void 0:lt._UvAnimMaskTexture,bi=yn!=null?{index:yn,extensions:Object.assign({},X)}:void 0,Li=(ut=e.floatProperties)===null||ut===void 0?void 0:ut._UvAnimScrollX,Me=(ct=e.floatProperties)===null||ct===void 0?void 0:ct._UvAnimScrollY;Me!=null&&(Me=-Me);let Ii=(dt=e.floatProperties)===null||dt===void 0?void 0:dt._UvAnimRotation,Pi={specVersion:"1.0",transparentWithZWrite:ii,renderQueueOffsetNumber:ri,shadeColorFactor:pi,shadeMultiplyTexture:mi,shadingShiftFactor:xe,shadingToonyFactor:Re,giEqualizationFactor:gi,matcapFactor:_i,matcapTexture:vi,rimLightingMixFactor:Ti,rimMultiplyTexture:Ei,parametricRimColorFactor:xi,parametricRimFresnelPowerFactor:Ri,parametricRimLiftFactor:Mi,outlineWidthMode:yi,outlineWidthFactor:ft,outlineWidthMultiplyTexture:wi,outlineColorFactor:Ai,outlineLightingMixFactor:Si,uvAnimationMaskTexture:bi,uvAnimationScrollXSpeedFactor:Li,uvAnimationScrollYSpeedFactor:Me,uvAnimationRotationSpeedFactor:Ii};return Object.assign(Object.assign({},t),{pbrMetallicRoughness:{baseColorFactor:li,baseColorTexture:ui},normalTexture:di,emissiveTexture:fi,emissiveFactor:hi,alphaMode:si,alphaCutoff:oi,doubleSided:ai,extensions:{VRMC_materials_mtoon:Pi}})}_parseV0UnlitProperties(e,t){var n,i,r,s;let a=e.shader==="VRM/UnlitTransparentZWrite",o=e.shader==="VRM/UnlitTransparent"||a,l=this._v0ParseRenderQueue(e),c=e.shader==="VRM/UnlitCutout",d=o?"BLEND":c?"MASK":"OPAQUE",f=c?(n=e.floatProperties)===null||n===void 0?void 0:n._Cutoff:void 0,m=this._portTextureTransform(e),T=(r=(i=e.vectorProperties)===null||i===void 0?void 0:i._Color)===null||r===void 0?void 0:r.map(ee),g=(s=e.textureProperties)===null||s===void 0?void 0:s._MainTex,v=g!=null?{index:g,extensions:Object.assign({},m)}:void 0,_={specVersion:"1.0",transparentWithZWrite:a,renderQueueOffsetNumber:l,shadeColorFactor:T,shadeMultiplyTexture:v};return Object.assign(Object.assign({},t),{pbrMetallicRoughness:{baseColorFactor:T,baseColorTexture:v},alphaMode:d,alphaCutoff:f,extensions:{VRMC_materials_mtoon:_}})}_portTextureTransform(e){var t,n,i,r,s;let a=(t=e.vectorProperties)===null||t===void 0?void 0:t._MainTex;if(a==null)return{};let o=[(n=a?.[0])!==null&&n!==void 0?n:0,(i=a?.[1])!==null&&i!==void 0?i:0],l=[(r=a?.[2])!==null&&r!==void 0?r:1,(s=a?.[3])!==null&&s!==void 0?s:1];return o[1]=l[1]*(1-o[1])%1,{KHR_texture_transform:{offset:o,scale:l}}}_v0ParseRenderQueue(e){var t,n,i;let r=(n=(t=e.keywordMap)===null||t===void 0?void 0:t._ALPHABLEND_ON)!==null&&n!==void 0?n:!1,s=((i=e.floatProperties)===null||i===void 0?void 0:i._ZWrite)===1,a=0;if(r){let o=e.renderQueue;o!=null&&(s?a=this._renderQueueMapTransparentZWrite.get(o):a=this._renderQueueMapTransparent.get(o))}return a}_populateRenderQueueMap(e){let t=new Set,n=new Set;e.forEach(i=>{var r,s,a;let o=(s=(r=i.keywordMap)===null||r===void 0?void 0:r._ALPHABLEND_ON)!==null&&s!==void 0?s:!1,l=((a=i.floatProperties)===null||a===void 0?void 0:a._ZWrite)===1;if(o){let c=i.renderQueue;c!=null&&(l?n.add(c):t.add(c))}}),t.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${t.size} render queues for Transparent materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),n.size>10&&console.warn(`VRMMaterialsV0CompatPlugin: This VRM uses ${n.size} render queues for TransparentZWrite materials while VRM 1.0 only supports up to 10 render queues. The model might not be rendered correctly.`),Array.from(t).sort().forEach((i,r)=>{let s=Math.min(Math.max(r-t.size+1,-9),0);this._renderQueueMapTransparent.set(i,s)}),Array.from(n).sort().forEach((i,r)=>{let s=Math.min(Math.max(r,0),9);this._renderQueueMapTransparentZWrite.set(i,s)})}};var z=new h.Vector3,me=class extends h.Group{constructor(e){super(),this._attrPosition=new h.BufferAttribute(new Float32Array([0,0,0,0,0,0]),3),this._attrPosition.setUsage(h.DynamicDrawUsage);let t=new h.BufferGeometry;t.setAttribute("position",this._attrPosition);let n=new h.LineBasicMaterial({color:16711935,depthTest:!1,depthWrite:!1});this._line=new h.Line(t,n),this.add(this._line),this.constraint=e}updateMatrixWorld(e){z.setFromMatrixPosition(this.constraint.destination.matrixWorld),this._attrPosition.setXYZ(0,z.x,z.y,z.z),this.constraint.source&&z.setFromMatrixPosition(this.constraint.source.matrixWorld),this._attrPosition.setXYZ(1,z.x,z.y,z.z),this._attrPosition.needsUpdate=!0,super.updateMatrixWorld(e)}};function qn(u,e){return e.set(u.elements[12],u.elements[13],u.elements[14])}var Hr=new h.Vector3,Nr=new h.Vector3;function Ur(u,e){return u.decompose(Hr,e,Nr),e}function ze(u){return u.invert?u.invert():u.inverse(),u}var Ee=class{constructor(e,t){this.destination=e,this.source=t,this.weight=1}},Or=new h.Vector3,Cr=new h.Vector3,Dr=new h.Vector3,Br=new h.Quaternion,Fr=new h.Quaternion,Vr=new h.Quaternion,sn=class extends Ee{constructor(e,t){super(e,t),this._aimAxis="PositiveX",this._v3AimAxis=new h.Vector3(1,0,0),this._dstRestQuat=new h.Quaternion}get aimAxis(){return this._aimAxis}set aimAxis(e){this._aimAxis=e,this._v3AimAxis.set(e==="PositiveX"?1:e==="NegativeX"?-1:0,e==="PositiveY"?1:e==="NegativeY"?-1:0,e==="PositiveZ"?1:e==="NegativeZ"?-1:0)}get dependencies(){let e=new Set([this.source]);return this.destination.parent&&e.add(this.destination.parent),e}setInitState(){this._dstRestQuat.copy(this.destination.quaternion)}update(){this.destination.updateWorldMatrix(!0,!1),this.source.updateWorldMatrix(!0,!1);let e=Br.identity(),t=Fr.identity();this.destination.parent&&(Ur(this.destination.parent.matrixWorld,e),ze(t.copy(e)));let n=Or.copy(this._v3AimAxis).applyQuaternion(this._dstRestQuat).applyQuaternion(e),i=qn(this.source.matrixWorld,Cr).sub(qn(this.destination.matrixWorld,Dr)).normalize(),r=Vr.setFromUnitVectors(n,i).premultiply(t).multiply(e).multiply(this._dstRestQuat);this.destination.quaternion.copy(this._dstRestQuat).slerp(r,this.weight)}};function Yn(u,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(d){s(d)}}function o(c){try{l(n.throw(c))}catch(d){s(d)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((n=n.apply(u,e||[])).next())})}function kr(u,e){let t=[u],n=u.parent;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}var on=class{constructor(){this._constraints=new Set,this._objectConstraintsMap=new Map}get constraints(){return this._constraints}addConstraint(e){this._constraints.add(e);let t=this._objectConstraintsMap.get(e.destination);t==null&&(t=new Set,this._objectConstraintsMap.set(e.destination,t)),t.add(e)}deleteConstraint(e){this._constraints.delete(e),this._objectConstraintsMap.get(e.destination).delete(e)}setInitState(){let e=new Set,t=new Set;for(let n of this._constraints)this._processConstraint(n,e,t,i=>i.setInitState())}update(){let e=new Set,t=new Set;for(let n of this._constraints)this._processConstraint(n,e,t,i=>i.update())}_processConstraint(e,t,n,i){if(n.has(e))return;if(t.has(e))throw new Error("VRMNodeConstraintManager: Circular dependency detected while updating constraints");t.add(e);let r=e.dependencies;for(let s of r)kr(s,a=>{let o=this._objectConstraintsMap.get(a);if(o)for(let l of o)this._processConstraint(l,t,n,i)});i(e),n.add(e)}},Wr=new h.Quaternion,jr=new h.Quaternion,an=class extends Ee{constructor(e,t){super(e,t),this._dstRestQuat=new h.Quaternion,this._invSrcRestQuat=new h.Quaternion}get dependencies(){return new Set([this.source])}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),ze(this._invSrcRestQuat.copy(this.source.quaternion))}update(){let e=Wr.copy(this._invSrcRestQuat).multiply(this.source.quaternion),t=jr.copy(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(t,this.weight)}},zr=new h.Vector3,Gr=new h.Quaternion,Xr=new h.Quaternion,ln=class extends Ee{constructor(e,t){super(e,t),this._rollAxis="X",this._v3RollAxis=new h.Vector3(1,0,0),this._dstRestQuat=new h.Quaternion,this._invDstRestQuat=new h.Quaternion,this._invSrcRestQuatMulDstRestQuat=new h.Quaternion}get rollAxis(){return this._rollAxis}set rollAxis(e){this._rollAxis=e,this._v3RollAxis.set(e==="X"?1:0,e==="Y"?1:0,e==="Z"?1:0)}get dependencies(){return new Set([this.source])}setInitState(){this._dstRestQuat.copy(this.destination.quaternion),ze(this._invDstRestQuat.copy(this._dstRestQuat)),ze(this._invSrcRestQuatMulDstRestQuat.copy(this.source.quaternion)).multiply(this._dstRestQuat)}update(){let e=Gr.copy(this._invDstRestQuat).multiply(this.source.quaternion).multiply(this._invSrcRestQuatMulDstRestQuat),t=zr.copy(this._v3RollAxis).applyQuaternion(e),i=Xr.setFromUnitVectors(t,this._v3RollAxis).premultiply(this._dstRestQuat).multiply(e);this.destination.quaternion.copy(this._dstRestQuat).slerp(i,this.weight)}},qr=new Set(["1.0","1.0-beta"]),Ge=class u{constructor(e,t){this.parser=e,this.helperRoot=t?.helperRoot}get name(){return u.EXTENSION_NAME}afterRoot(e){return Yn(this,void 0,void 0,function*(){e.userData.vrmNodeConstraintManager=yield this._import(e)})}_import(e){var t;return Yn(this,void 0,void 0,function*(){let n=this.parser.json;if(!(((t=n.extensionsUsed)===null||t===void 0?void 0:t.indexOf(u.EXTENSION_NAME))!==-1))return null;let r=new on,s=yield this.parser.getDependencies("node");return s.forEach((a,o)=>{var l;let c=n.nodes[o],d=(l=c?.extensions)===null||l===void 0?void 0:l[u.EXTENSION_NAME];if(d==null)return;let f=d.specVersion;if(!qr.has(f)){console.warn(`VRMNodeConstraintLoaderPlugin: Unknown ${u.EXTENSION_NAME} specVersion "${f}"`);return}let m=d.constraint;if(m.roll!=null){let T=this._importRollConstraint(a,s,m.roll);r.addConstraint(T)}else if(m.aim!=null){let T=this._importAimConstraint(a,s,m.aim);r.addConstraint(T)}else if(m.rotation!=null){let T=this._importRotationConstraint(a,s,m.rotation);r.addConstraint(T)}}),e.scene.updateMatrixWorld(),r.setInitState(),r})}_importRollConstraint(e,t,n){let{source:i,rollAxis:r,weight:s}=n,a=t[i],o=new ln(e,a);if(r!=null&&(o.rollAxis=r),s!=null&&(o.weight=s),this.helperRoot){let l=new me(o);this.helperRoot.add(l)}return o}_importAimConstraint(e,t,n){let{source:i,aimAxis:r,weight:s}=n,a=t[i],o=new sn(e,a);if(r!=null&&(o.aimAxis=r),s!=null&&(o.weight=s),this.helperRoot){let l=new me(o);this.helperRoot.add(l)}return o}_importRotationConstraint(e,t,n){let{source:i,weight:r}=n,s=t[i],a=new an(e,s);if(r!=null&&(a.weight=r),this.helperRoot){let o=new me(a);this.helperRoot.add(o)}return a}};Ge.EXTENSION_NAME="VRMC_node_constraint";var Xe=class{},Gt=new h.Vector3,$=new h.Vector3,qe=class extends Xe{constructor(e){var t,n,i;super(),this.offset=(t=e?.offset)!==null&&t!==void 0?t:new h.Vector3(0,0,0),this.tail=(n=e?.tail)!==null&&n!==void 0?n:new h.Vector3(0,0,0),this.radius=(i=e?.radius)!==null&&i!==void 0?i:0}get type(){return"capsule"}calculateCollision(e,t,n,i){Gt.copy(this.offset).applyMatrix4(e),$.copy(this.tail).applyMatrix4(e),$.sub(Gt);let r=$.lengthSq();i.copy(t).sub(Gt);let s=$.dot(i);s<=0||(r<=s||$.multiplyScalar(s/r),i.sub($));let a=n+this.radius,o=i.length()-a;return i.normalize(),o}},Ye=class extends Xe{constructor(e){var t,n;super(),this.offset=(t=e?.offset)!==null&&t!==void 0?t:new h.Vector3(0,0,0),this.radius=(n=e?.radius)!==null&&n!==void 0?n:0}get type(){return"sphere"}calculateCollision(e,t,n,i){i.copy(this.offset).applyMatrix4(e),i.negate().add(t);let r=n+this.radius,s=i.length()-r;return i.normalize(),s}},F=new h.Vector3,un=class extends h.BufferGeometry{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new h.Vector3,this._currentTail=new h.Vector3,this._shape=e,this._attrPos=new h.BufferAttribute(new Float32Array(396),3),this.setAttribute("position",this._attrPos),this._attrIndex=new h.BufferAttribute(new Uint16Array(264),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1,t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0);let n=F.copy(this._shape.tail).divideScalar(this.worldScale);this._currentTail.distanceToSquared(n)>1e-10&&(this._currentTail.copy(n),e=!0),e&&this._buildPosition()}_buildPosition(){F.copy(this._currentTail).sub(this._currentOffset);let e=F.length()/this._currentRadius;for(let i=0;i<=16;i++){let r=i/16*Math.PI;this._attrPos.setXYZ(i,-Math.sin(r),-Math.cos(r),0),this._attrPos.setXYZ(17+i,e+Math.sin(r),Math.cos(r),0),this._attrPos.setXYZ(34+i,-Math.sin(r),0,-Math.cos(r)),this._attrPos.setXYZ(51+i,e+Math.sin(r),0,Math.cos(r))}for(let i=0;i<32;i++){let r=i/16*Math.PI;this._attrPos.setXYZ(68+i,0,Math.sin(r),Math.cos(r)),this._attrPos.setXYZ(100+i,e,Math.sin(r),Math.cos(r))}let t=Math.atan2(F.y,Math.sqrt(F.x*F.x+F.z*F.z)),n=-Math.atan2(F.z,F.x);this.rotateZ(t),this.rotateY(n),this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<34;e++){let t=(e+1)%34;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(68+e*2,34+e,34+t)}for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(136+e*2,68+e,68+t),this._attrIndex.setXY(200+e*2,100+e,100+t)}this._attrIndex.needsUpdate=!0}},cn=class extends h.BufferGeometry{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentOffset=new h.Vector3,this._shape=e,this._attrPos=new h.BufferAttribute(new Float32Array(32*3*3),3),this.setAttribute("position",this._attrPos),this._attrIndex=new h.BufferAttribute(new Uint16Array(64*3),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1,t=this._shape.radius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentOffset.equals(this._shape.offset)||(this._currentOffset.copy(this._shape.offset),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){let t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentOffset.x,this._currentOffset.y,this._currentOffset.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.needsUpdate=!0}},Yr=new h.Vector3,$e=class extends h.Group{constructor(e){if(super(),this.matrixAutoUpdate=!1,this.collider=e,this.collider.shape instanceof Ye)this._geometry=new cn(this.collider.shape);else if(this.collider.shape instanceof qe)this._geometry=new un(this.collider.shape);else throw new Error("VRMSpringBoneColliderHelper: Unknown collider shape type detected");let t=new h.LineBasicMaterial({color:16711935,depthTest:!1,depthWrite:!1});this._line=new h.LineSegments(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.collider.updateWorldMatrix(!0,!1),this.matrix.copy(this.collider.matrixWorld);let t=this.matrix.elements;this._geometry.worldScale=Yr.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}},dn=class extends h.BufferGeometry{constructor(e){super(),this.worldScale=1,this._currentRadius=0,this._currentTail=new h.Vector3,this._springBone=e,this._attrPos=new h.BufferAttribute(new Float32Array(294),3),this.setAttribute("position",this._attrPos),this._attrIndex=new h.BufferAttribute(new Uint16Array(194),1),this.setIndex(this._attrIndex),this._buildIndex(),this.update()}update(){let e=!1,t=this._springBone.settings.hitRadius/this.worldScale;this._currentRadius!==t&&(this._currentRadius=t,e=!0),this._currentTail.equals(this._springBone.initialLocalChildPosition)||(this._currentTail.copy(this._springBone.initialLocalChildPosition),e=!0),e&&this._buildPosition()}_buildPosition(){for(let e=0;e<32;e++){let t=e/16*Math.PI;this._attrPos.setXYZ(e,Math.cos(t),Math.sin(t),0),this._attrPos.setXYZ(32+e,0,Math.cos(t),Math.sin(t)),this._attrPos.setXYZ(64+e,Math.sin(t),0,Math.cos(t))}this.scale(this._currentRadius,this._currentRadius,this._currentRadius),this.translate(this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.setXYZ(96,0,0,0),this._attrPos.setXYZ(97,this._currentTail.x,this._currentTail.y,this._currentTail.z),this._attrPos.needsUpdate=!0}_buildIndex(){for(let e=0;e<32;e++){let t=(e+1)%32;this._attrIndex.setXY(e*2,e,t),this._attrIndex.setXY(64+e*2,32+e,32+t),this._attrIndex.setXY(128+e*2,64+e,64+t)}this._attrIndex.setXY(192,96,97),this._attrIndex.needsUpdate=!0}},$r=new h.Vector3,hn=class extends h.Group{constructor(e){super(),this.matrixAutoUpdate=!1,this.springBone=e,this._geometry=new dn(this.springBone);let t=new h.LineBasicMaterial({color:16776960,depthTest:!1,depthWrite:!1});this._line=new h.LineSegments(this._geometry,t),this.add(this._line)}dispose(){this._geometry.dispose()}updateMatrixWorld(e){this.springBone.bone.updateWorldMatrix(!0,!1),this.matrix.copy(this.springBone.bone.matrixWorld);let t=this.matrix.elements;this._geometry.worldScale=$r.set(t[0],t[1],t[2]).length(),this._geometry.update(),super.updateMatrixWorld(e)}},Qe=class extends h.Object3D{constructor(e){super(),this.shape=e}},Qr=new h.Matrix4;function ti(u){return u.invert?u.invert():u.getInverse(Qr.copy(u)),u}var fn=class{constructor(e){this._inverseCache=new h.Matrix4,this._shouldUpdateInverse=!0,this.matrix=e;let t={set:(n,i,r)=>(this._shouldUpdateInverse=!0,n[i]=r,!0)};this._originalElements=e.elements,e.elements=new Proxy(e.elements,t)}get inverse(){return this._shouldUpdateInverse&&(this._inverseCache.copy(this.matrix),ti(this._inverseCache),this._shouldUpdateInverse=!1),this._inverseCache}revert(){this.matrix.elements=this._originalElements}},Kr=new h.Matrix4,V=new h.Vector3,he=new h.Vector3,Zr=new h.Vector3,te=new h.Vector3,$n=new h.Vector3,fe=new h.Vector3,Qn=new h.Quaternion,ne=new h.Matrix4,Jr=new h.Matrix4,pn=class{constructor(e,t,n={},i=[]){var r,s,a,o,l,c;this._currentTail=new h.Vector3,this._prevTail=new h.Vector3,this._boneAxis=new h.Vector3,this._worldSpaceBoneLength=0,this._center=null,this._initialLocalMatrix=new h.Matrix4,this._initialLocalRotation=new h.Quaternion,this._initialLocalChildPosition=new h.Vector3,this.bone=e,this.bone.matrixAutoUpdate=!1,this.child=t,this.settings={hitRadius:(r=n.hitRadius)!==null&&r!==void 0?r:0,stiffness:(s=n.stiffness)!==null&&s!==void 0?s:1,gravityPower:(a=n.gravityPower)!==null&&a!==void 0?a:0,gravityDir:(l=(o=n.gravityDir)===null||o===void 0?void 0:o.clone())!==null&&l!==void 0?l:new h.Vector3(0,-1,0),dragForce:(c=n.dragForce)!==null&&c!==void 0?c:.4},this.colliderGroups=i}get center(){return this._center}set center(e){var t;!((t=this._center)===null||t===void 0)&&t.userData.inverseCacheProxy&&(this._center.userData.inverseCacheProxy.revert(),delete this._center.userData.inverseCacheProxy),this._center=e,this._center&&(this._center.userData.inverseCacheProxy||(this._center.userData.inverseCacheProxy=new fn(this._center.matrixWorld)))}get initialLocalChildPosition(){return this._initialLocalChildPosition}get _parentMatrixWorld(){return this.bone.parent?this.bone.parent.matrixWorld:Kr}setInitState(){this._initialLocalMatrix.copy(this.bone.matrix),this._initialLocalRotation.copy(this.bone.quaternion),this.child?this._initialLocalChildPosition.copy(this.child.position):this._initialLocalChildPosition.copy(this.bone.position).normalize().multiplyScalar(.07);let e=this._getMatrixWorldToCenter(ne);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail),this._boneAxis.copy(this._initialLocalChildPosition).normalize()}reset(){this.bone.quaternion.copy(this._initialLocalRotation),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix);let e=this._getMatrixWorldToCenter(ne);this.bone.localToWorld(this._currentTail.copy(this._initialLocalChildPosition)).applyMatrix4(e),this._prevTail.copy(this._currentTail)}update(e){if(e<=0)return;this._calcWorldSpaceBoneLength(),te.setFromMatrixPosition(this.bone.matrixWorld);let t=this._getMatrixWorldToCenter(ne);$n.copy(te).applyMatrix4(t);let n=Qn.setFromRotationMatrix(t),i=Jr.copy(t).multiply(this._parentMatrixWorld),r=he.copy(this._boneAxis).applyMatrix4(this._initialLocalMatrix).applyMatrix4(i).sub($n).normalize(),s=Zr.copy(this.settings.gravityDir).applyQuaternion(n).normalize(),a=this._getMatrixCenterToWorld(ne);fe.copy(this._currentTail).add(V.copy(this._currentTail).sub(this._prevTail).multiplyScalar(1-this.settings.dragForce)).add(V.copy(r).multiplyScalar(this.settings.stiffness*e)).add(V.copy(s).multiplyScalar(this.settings.gravityPower*e)).applyMatrix4(a),fe.sub(te).normalize().multiplyScalar(this._worldSpaceBoneLength).add(te),this._collision(fe),t=this._getMatrixWorldToCenter(ne),this._prevTail.copy(this._currentTail),this._currentTail.copy(V.copy(fe).applyMatrix4(t));let o=ti(ne.copy(this._parentMatrixWorld).multiply(this._initialLocalMatrix)),l=Qn.setFromUnitVectors(this._boneAxis,V.copy(fe).applyMatrix4(o).normalize());this.bone.quaternion.copy(this._initialLocalRotation).multiply(l),this.bone.updateMatrix(),this.bone.matrixWorld.multiplyMatrices(this._parentMatrixWorld,this.bone.matrix)}_collision(e){this.colliderGroups.forEach(t=>{t.colliders.forEach(n=>{let i=n.shape.calculateCollision(n.matrixWorld,e,this.settings.hitRadius,V);i<0&&(e.add(V.multiplyScalar(-i)),e.sub(te).normalize().multiplyScalar(this._worldSpaceBoneLength).add(te))})})}_calcWorldSpaceBoneLength(){V.setFromMatrixPosition(this.bone.matrixWorld),this.child?he.setFromMatrixPosition(this.child.matrixWorld):(he.copy(this._initialLocalChildPosition),he.applyMatrix4(this.bone.matrixWorld)),this._worldSpaceBoneLength=V.sub(he).length()}_getMatrixCenterToWorld(e){return this._center?e.copy(this._center.matrixWorld):e.identity(),e}_getMatrixWorldToCenter(e){return this._center?e.copy(this._center.userData.inverseCacheProxy.inverse):e.identity(),e}};function Le(u,e,t,n){function i(r){return r instanceof t?r:new t(function(s){s(r)})}return new(t||(t=Promise))(function(r,s){function a(c){try{l(n.next(c))}catch(d){s(d)}}function o(c){try{l(n.throw(c))}catch(d){s(d)}}function l(c){c.done?r(c.value):i(c.value).then(a,o)}l((n=n.apply(u,e||[])).next())})}function es(u,e){let t=[],n=u;for(;n!==null;)t.unshift(n),n=n.parent;t.forEach(i=>{e(i)})}function ni(u,e){u.children.forEach(t=>{e(t)||ni(t,e)})}var Ke=class{constructor(){this._joints=new Set,this._objectSpringBonesMap=new Map}get joints(){return this._joints}get springBones(){return console.warn("VRMSpringBoneManager: springBones is deprecated. use joints instead."),this._joints}get colliderGroups(){let e=new Set;return this._joints.forEach(t=>{t.colliderGroups.forEach(n=>{e.add(n)})}),Array.from(e)}get colliders(){let e=new Set;return this.colliderGroups.forEach(t=>{t.colliders.forEach(n=>{e.add(n)})}),Array.from(e)}addJoint(e){this._joints.add(e);let t=this._objectSpringBonesMap.get(e.bone);t==null&&(t=new Set,this._objectSpringBonesMap.set(e.bone,t)),t.add(e)}addSpringBone(e){console.warn("VRMSpringBoneManager: addSpringBone() is deprecated. use addJoint() instead."),this.addJoint(e)}deleteJoint(e){this._joints.delete(e),this._objectSpringBonesMap.get(e.bone).delete(e)}deleteSpringBone(e){console.warn("VRMSpringBoneManager: deleteSpringBone() is deprecated. use deleteJoint() instead."),this.deleteJoint(e)}setInitState(){let e=new Set,t=new Set,n=new Set;for(let i of this._joints)this._processSpringBone(i,e,t,n,r=>r.setInitState())}reset(){let e=new Set,t=new Set,n=new Set;for(let i of this._joints)this._processSpringBone(i,e,t,n,r=>r.reset())}update(e){let t=new Set,n=new Set,i=new Set;for(let r of this._joints)this._processSpringBone(r,t,n,i,s=>s.update(e)),ni(r.bone,s=>{var a,o;return((o=(a=this._objectSpringBonesMap.get(s))===null||a===void 0?void 0:a.size)!==null&&o!==void 0?o:0)>0?!0:(s.updateWorldMatrix(!1,!1),!1)})}_processSpringBone(e,t,n,i,r){if(n.has(e))return;if(t.has(e))throw new Error("VRMSpringBoneManager: Circular dependency detected while updating springbones");t.add(e);let s=this._getDependencies(e);for(let a of s)es(a,o=>{let l=this._objectSpringBonesMap.get(o);if(l)for(let c of l)this._processSpringBone(c,t,n,i,r);else i.has(o)||(o.updateWorldMatrix(!1,!1),i.add(o))});e.bone.updateMatrix(),e.bone.updateWorldMatrix(!1,!1),r(e),i.add(e.bone),n.add(e)}_getDependencies(e){let t=new Set,n=e.bone.parent;return n&&t.add(n),e.colliderGroups.forEach(i=>{i.colliders.forEach(r=>{t.add(r)})}),t}},ts=new Set(["1.0","1.0-beta"]),Ze=class u{constructor(e,t){this.parser=e,this.jointHelperRoot=t?.jointHelperRoot,this.colliderHelperRoot=t?.colliderHelperRoot}get name(){return u.EXTENSION_NAME}afterRoot(e){return Le(this,void 0,void 0,function*(){e.userData.vrmSpringBoneManager=yield this._import(e)})}_import(e){return Le(this,void 0,void 0,function*(){let t=yield this._v1Import(e);if(t!=null)return t;let n=yield this._v0Import(e);return n??null})}_v1Import(e){var t,n,i,r,s;return Le(this,void 0,void 0,function*(){let a=e.parser.json;if(!(((t=a.extensionsUsed)===null||t===void 0?void 0:t.indexOf(u.EXTENSION_NAME))!==-1))return null;let l=new Ke,c=yield e.parser.getDependencies("node"),d=(n=a.extensions)===null||n===void 0?void 0:n[u.EXTENSION_NAME];if(!d)return null;let f=d.specVersion;if(!ts.has(f))return console.warn(`VRMSpringBoneLoaderPlugin: Unknown ${u.EXTENSION_NAME} specVersion "${f}"`),null;let m=(i=d.colliders)===null||i===void 0?void 0:i.map((g,v)=>{var _,R,x,E,y;let w=c[g.node],M=g.shape;if(M.sphere)return this._importSphereCollider(w,{offset:new h.Vector3().fromArray((_=M.sphere.offset)!==null&&_!==void 0?_:[0,0,0]),radius:(R=M.sphere.radius)!==null&&R!==void 0?R:0});if(M.capsule)return this._importCapsuleCollider(w,{offset:new h.Vector3().fromArray((x=M.capsule.offset)!==null&&x!==void 0?x:[0,0,0]),radius:(E=M.capsule.radius)!==null&&E!==void 0?E:0,tail:new h.Vector3().fromArray((y=M.capsule.tail)!==null&&y!==void 0?y:[0,0,0])});throw new Error(`VRMSpringBoneLoaderPlugin: The collider #${v} has no valid shape`)}),T=(r=d.colliderGroups)===null||r===void 0?void 0:r.map((g,v)=>{var _;return{colliders:((_=g.colliders)!==null&&_!==void 0?_:[]).map(x=>{let E=m?.[x];if(E==null)throw new Error(`VRMSpringBoneLoaderPlugin: The colliderGroup #${v} attempted to use a collider #${x} but not found`);return E}),name:g.name}});return(s=d.springs)===null||s===void 0||s.forEach((g,v)=>{var _;let R=g.joints,x=(_=g.colliderGroups)===null||_===void 0?void 0:_.map(w=>{let M=T?.[w];if(M==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${v} attempted to use a colliderGroup ${w} but not found`);return M}),E=g.center!=null?c[g.center]:void 0,y;R.forEach(w=>{if(y){let M=y.node,L=c[M],b=w.node,I=c[b],P={hitRadius:y.hitRadius,dragForce:y.dragForce,gravityPower:y.gravityPower,stiffness:y.stiffness,gravityDir:y.gravityDir!=null?new h.Vector3().fromArray(y.gravityDir):void 0},N=this._importJoint(L,I,P,x);E&&(N.center=E),l.addJoint(N)}y=w})}),l.setInitState(),l})}_v0Import(e){var t,n,i;return Le(this,void 0,void 0,function*(){let r=e.parser.json;if(!(((t=r.extensionsUsed)===null||t===void 0?void 0:t.indexOf("VRM"))!==-1))return null;let a=(n=r.extensions)===null||n===void 0?void 0:n.VRM,o=a?.secondaryAnimation;if(!o)return null;let l=o?.boneGroups;if(!l)return null;let c=new Ke,d=yield e.parser.getDependencies("node"),f=(i=o.colliderGroups)===null||i===void 0?void 0:i.map(m=>{var T;let g=d[m.node];return{colliders:((T=m.colliders)!==null&&T!==void 0?T:[]).map((_,R)=>{var x,E,y;let w=new h.Vector3(0,0,0);return _.offset&&w.set((x=_.offset.x)!==null&&x!==void 0?x:0,(E=_.offset.y)!==null&&E!==void 0?E:0,_.offset.z?-_.offset.z:0),this._importSphereCollider(g,{offset:w,radius:(y=_.radius)!==null&&y!==void 0?y:0})})}});return l?.forEach((m,T)=>{let g=m.bones;g&&g.forEach(v=>{var _,R,x,E;let y=d[v],w=new h.Vector3;m.gravityDir?w.set((_=m.gravityDir.x)!==null&&_!==void 0?_:0,(R=m.gravityDir.y)!==null&&R!==void 0?R:0,(x=m.gravityDir.z)!==null&&x!==void 0?x:0):w.set(0,-1,0);let M=m.center!=null?d[m.center]:void 0,L={hitRadius:m.hitRadius,dragForce:m.dragForce,gravityPower:m.gravityPower,stiffness:m.stiffiness,gravityDir:w},b=(E=m.colliderGroups)===null||E===void 0?void 0:E.map(I=>{let P=f?.[I];if(P==null)throw new Error(`VRMSpringBoneLoaderPlugin: The spring #${T} attempted to use a colliderGroup ${I} but not found`);return P});y.traverse(I=>{var P;let N=(P=I.children[0])!==null&&P!==void 0?P:null,H=this._importJoint(I,N,L,b);M&&(H.center=M),c.addJoint(H)})})}),e.scene.updateMatrixWorld(),c.setInitState(),c})}_importJoint(e,t,n,i){let r=new pn(e,t,n,i);if(this.jointHelperRoot){let s=new hn(r);this.jointHelperRoot.add(s),s.renderOrder=this.jointHelperRoot.renderOrder}return r}_importSphereCollider(e,t){let{offset:n,radius:i}=t,r=new Ye({offset:n,radius:i}),s=new Qe(r);if(e.add(s),this.colliderHelperRoot){let a=new $e(s);this.colliderHelperRoot.add(a),a.renderOrder=this.colliderHelperRoot.renderOrder}return s}_importCapsuleCollider(e,t){let{offset:n,radius:i,tail:r}=t,s=new qe({offset:n,radius:i,tail:r}),a=new Qe(s);if(e.add(a),this.colliderHelperRoot){let o=new $e(a);this.colliderHelperRoot.add(o),o.renderOrder=this.colliderHelperRoot.renderOrder}return a}};Ze.EXTENSION_NAME="VRMC_springBone";var Je=class{constructor(e,t){var n,i,r,s,a,o,l,c,d,f;this.parser=e;let m=t?.helperRoot,T=t?.autoUpdateHumanBones;this.expressionPlugin=(n=t?.expressionPlugin)!==null&&n!==void 0?n:new Oe(e),this.firstPersonPlugin=(i=t?.firstPersonPlugin)!==null&&i!==void 0?i:new qt(e),this.humanoidPlugin=(r=t?.humanoidPlugin)!==null&&r!==void 0?r:new Yt(e,{helperRoot:m,autoUpdateHumanBones:T}),this.lookAtPlugin=(s=t?.lookAtPlugin)!==null&&s!==void 0?s:new Zt(e,{helperRoot:m}),this.metaPlugin=(a=t?.metaPlugin)!==null&&a!==void 0?a:new Jt(e),this.mtoonMaterialPlugin=(o=t?.mtoonMaterialPlugin)!==null&&o!==void 0?o:new We(e),this.materialsHDREmissiveMultiplierPlugin=(l=t?.materialsHDREmissiveMultiplierPlugin)!==null&&l!==void 0?l:new je(e),this.materialsV0CompatPlugin=(c=t?.materialsV0CompatPlugin)!==null&&c!==void 0?c:new rn(e),this.springBonePlugin=(d=t?.springBonePlugin)!==null&&d!==void 0?d:new Ze(e,{colliderHelperRoot:m,jointHelperRoot:m}),this.nodeConstraintPlugin=(f=t?.nodeConstraintPlugin)!==null&&f!==void 0?f:new Ge(e,{helperRoot:m})}get name(){return"VRMLoaderPlugin"}beforeRoot(){return be(this,void 0,void 0,function*(){yield this.materialsV0CompatPlugin.beforeRoot(),yield this.mtoonMaterialPlugin.beforeRoot()})}loadMesh(e){return be(this,void 0,void 0,function*(){return yield this.mtoonMaterialPlugin.loadMesh(e)})}getMaterialType(e){let t=this.mtoonMaterialPlugin.getMaterialType(e);return t??null}extendMaterialParams(e,t){return be(this,void 0,void 0,function*(){yield this.materialsHDREmissiveMultiplierPlugin.extendMaterialParams(e,t),yield this.mtoonMaterialPlugin.extendMaterialParams(e,t)})}afterRoot(e){return be(this,void 0,void 0,function*(){yield this.metaPlugin.afterRoot(e),yield this.humanoidPlugin.afterRoot(e),yield this.expressionPlugin.afterRoot(e),yield this.lookAtPlugin.afterRoot(e),yield this.firstPersonPlugin.afterRoot(e),yield this.springBonePlugin.afterRoot(e),yield this.nodeConstraintPlugin.afterRoot(e),yield this.mtoonMaterialPlugin.afterRoot(e);let t=e.userData.vrmMeta,n=e.userData.vrmHumanoid;if(t&&n){let i=new tn({scene:e.scene,expressionManager:e.userData.vrmExpressionManager,firstPerson:e.userData.vrmFirstPerson,humanoid:n,lookAt:e.userData.vrmLookAt,meta:t,materials:e.userData.vrmMToonMaterials,springBoneManager:e.userData.vrmSpringBoneManager,nodeConstraintManager:e.userData.vrmNodeConstraintManager});e.userData.vrm=i}})}};function Kn(u){if(Object.values(u).forEach(e=>{e?.isTexture&&e.dispose()}),u.isShaderMaterial){let e=u.uniforms;e&&Object.values(e).forEach(t=>{let n=t.value;n?.isTexture&&n.dispose()})}u.dispose()}function ns(u){let e=u.geometry;e&&e.dispose();let t=u.skeleton;t&&t.dispose();let n=u.material;n&&(Array.isArray(n)?n.forEach(i=>Kn(i)):n&&Kn(n))}function is(u){u.traverse(ns)}function rs(u){let e=new Map;u.traverse(t=>{if(t.type!=="SkinnedMesh")return;let n=t,r=n.geometry.getAttribute("skinIndex"),s=e.get(r);if(!s){let a=[],o=[],l={},c=r.array;for(let d=0;d<c.length;d++){let f=c[d];l[f]===void 0&&(l[f]=a.length,a.push(n.skeleton.bones[f]),o.push(n.skeleton.boneInverses[f])),c[d]=l[f]}r.copyArray(c),r.needsUpdate=!0,s=new h.Skeleton(a,o),e.set(r,s)}n.bind(s,new h.Matrix4)})}function ss(u){let e=new Map;u.traverse(t=>{var n,i,r,s;if(!t.isMesh)return;let a=t,o=a.geometry,l=o.index;if(l==null)return;let c=e.get(o);if(c!=null){a.geometry=c;return}let d=new h.BufferGeometry;d.name=o.name,d.morphTargetsRelative=o.morphTargetsRelative,o.groups.forEach(g=>{d.addGroup(g.start,g.count,g.materialIndex)}),d.boundingBox=(i=(n=o.boundingBox)===null||n===void 0?void 0:n.clone())!==null&&i!==void 0?i:null,d.boundingSphere=(s=(r=o.boundingSphere)===null||r===void 0?void 0:r.clone())!==null&&s!==void 0?s:null,d.setDrawRange(o.drawRange.start,o.drawRange.count),d.userData=o.userData,e.set(o,d);let f=[],m=[];{let g=l.array,v=new g.constructor(g.length),_=0;for(let R=0;R<g.length;R++){let x=g[R],E=f[x];E==null&&(f[x]=_,m[_]=x,E=_,_++),v[R]=E}d.setIndex(new Ie.BufferAttribute(v,1,!1))}Object.keys(o.attributes).forEach(g=>{let v=o.attributes[g];if(v.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let _=v.array,{itemSize:R,normalized:x}=v,E=new _.constructor(m.length*R);m.forEach((y,w)=>{for(let M=0;M<R;M++)E[w*R+M]=_[y*R+M]}),d.setAttribute(g,new Ie.BufferAttribute(E,R,x))});let T=!0;Object.keys(o.morphAttributes).forEach(g=>{d.morphAttributes[g]=[];let v=o.morphAttributes[g];for(let _=0;_<v.length;_++){let R=v[_];if(R.isInterleavedBufferAttribute)throw new Error("removeUnnecessaryVertices: InterleavedBufferAttribute is not supported");let x=R.array,{itemSize:E,normalized:y}=R,w=new x.constructor(m.length*E);m.forEach((M,L)=>{for(let b=0;b<E;b++)w[L*E+b]=x[M*E+b]}),T=T&&w.every(M=>M===0),d.morphAttributes[g][_]=new Ie.BufferAttribute(w,E,y)}}),T&&(d.morphAttributes={}),a.geometry=d}),Array.from(e.keys()).forEach(t=>{t.dispose()})}function os(u){var e;((e=u.meta)===null||e===void 0?void 0:e.metaVersion)==="0"&&(u.scene.rotation.y=Math.PI)}var G=class{constructor(){}};G.deepDispose=is;G.removeUnnecessaryJoints=rs;G.removeUnnecessaryVertices=ss;G.rotateVRM0=os;window.THREE_GLTFLoader=we;window.THREE_VRM={VRMLoaderPlugin:Je,VRMUtils:G};})();
/*! Bundled license information:

@pixiv/three-vrm/lib/three-vrm.module.js:
  (*!
   * @pixiv/three-vrm v1.0.9
   * VRM file loader for three.js.
   *
   * Copyright (c) 2019-2023 pixiv Inc.
   * @pixiv/three-vrm is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-core v1.0.9
   * The implementation of core features of VRM, for @pixiv/three-vrm
   *
   * Copyright (c) 2020-2023 pixiv Inc.
   * @pixiv/three-vrm-core is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)

@pixiv/three-vrm/lib/three-vrm.module.js:
  (*!
   * @pixiv/three-vrm-materials-mtoon v1.0.9
   * MToon (toon material) module for @pixiv/three-vrm
   *
   * Copyright (c) 2020-2023 pixiv Inc.
   * @pixiv/three-vrm-materials-mtoon is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier v1.0.9
   * Support VRMC_hdr_emissiveMultiplier for @pixiv/three-vrm
   *
   * Copyright (c) 2020-2023 pixiv Inc.
   * @pixiv/three-vrm-materials-hdr-emissive-multiplier is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-materials-v0compat v1.0.9
   * VRM0.0 materials compatibility layer plugin for @pixiv/three-vrm
   *
   * Copyright (c) 2020-2023 pixiv Inc.
   * @pixiv/three-vrm-materials-v0compat is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-node-constraint v1.0.9
   * Node constraint module for @pixiv/three-vrm
   *
   * Copyright (c) 2020-2023 pixiv Inc.
   * @pixiv/three-vrm-node-constraint is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
  (*!
   * @pixiv/three-vrm-springbone v1.0.9
   * Spring bone module for @pixiv/three-vrm
   *
   * Copyright (c) 2020-2023 pixiv Inc.
   * @pixiv/three-vrm-springbone is distributed under MIT License
   * https://github.com/pixiv/three-vrm/blob/release/LICENSE
   *)
*/

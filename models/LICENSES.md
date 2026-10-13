# 3D model licenses

All VRM files in this folder were checked for an explicit license that allows
redistribution **and** modification in a free (non-paid) fan game. The `.vrm.js`
files are the same VRM data base64-encoded so the game can load them from a
double-clicked `index.html` (browsers block `fetch()` on `file://`).
In-game the models are recoloured (hair, eyes, outfit textures) and have extra
accessory meshes attached; they are not sold and are not offered as a
character-creation service.

| File | Used for | Source | Author / copyright | License (verified) |
|---|---|---|---|---|
| `girl-twist-sample.vrm` | Hoshimi Lulu (hair recoloured pink), Hinata Pochi | https://github.com/vrm-c/vrm-specification/tree/master/samples/VRM1_Constraint_Twist_Sample (also shipped in pixiv/three-vrm examples) | (c) 2022 pixiv Inc. | **VRM Public License 1.0** (https://vrm.dev/licenses/1.0/). Embedded VRM meta: `avatarPermission: everyone`, `commercialUsage: corporation`, `allowRedistribution: true`, `modification: allowModificationRedistribution`, `creditNotation: unnecessary`, `allowAntisocialOrHateUsage: false`. |
| `boy-avatarsample-c.vrm` | Amane Luna (hair recoloured purple) | VRoid Studio official sample "AvatarSample_C"; file mirrored at https://github.com/madjin/vrm-samples/blob/master/vroid/stable/AvatarSample_C.vrm ; official page https://hub.vroid.com/en/characters/1248981995540129234/models/8640547963669442173 | pixiv Inc. (VRoid) | **VRoid sample-model conditions of use** (https://vroid.pixiv.help/hc/en-us/articles/4402394424089, updated 2024-12-26): usable by anyone, for-profit or not; editing and redistribution allowed; no credit required. Prohibited: re-licensing as CC0, redistributing the model/VRM for a fee, building a character-creation service from its data, implying pixiv endorsement, illegal/discriminatory/extremist use. Embedded meta: allowedUserName Everyone, commercial Allow, licenseName Other. |
| `girl-avatarsample-a.vrm` | Aoba Rinne, Shirayuki Mai | VRoid "AvatarSample_A", mirror https://github.com/madjin/vrm-samples/blob/master/vroid/stable/AvatarSample_A.vrm | pixiv Inc. (VRoid) | Same VRoid sample-model conditions as above. |
| `girl-avatarsample-b.vrm` | Kurenai Sera | VRoid "AvatarSample_B", mirror https://github.com/madjin/vrm-samples/blob/master/vroid/stable/AvatarSample_B.vrm | pixiv Inc. (VRoid) | Same VRoid sample-model conditions as above. |

Skipped:
- Seed-san (VirtualCast, VRM Public License 1.0, credit required) – license is fine, but it is a robot-gear design that doesn't fit an idol, so it was not included.
- Open Source Avatars / 100Avatars / Xmas Chibis (CC0) – licenses are clear, but no anime-idol style boy/girl fit; not included.

Libraries: three.js r149 (MIT, `lib/three-LICENSE`), @pixiv/three-vrm 1.0.9 (MIT, `lib/three-vrm-LICENSE`), bundled locally in `lib/`.

Note: a mirror (madjin/vrm-samples) was used to download the VRoid samples because VRoid Hub downloads require login; the files' embedded meta (author "VRoid", title AvatarSample_A/B/C) match the official samples. Conditions may change; re-check the official page before publishing.

## Costume modifications (added 2026-10-13)
The game hides each model's original Tops/Bottoms meshes at runtime and dresses the models in
procedurally generated idol costumes (fitted to the body and skinned to the model's own skeleton),
with original canvas-painted fabric textures. No third-party clothing assets are used. The .vrm.js
files themselves are unmodified base64 copies of the original models.

## User-supplied art (added 2026-10-13)
assets/user/*.png (Lunar Revel logo, Luna promo art, Luna reference sheet, three Lunar Revel coord illustrations)
are the user's own original art, supplied by the user for use in this game. assets/user/web/ holds resized
crops used as card images, the brand logo, and Luna's portrait. Not covered by the VRM licenses above.

## Additional male VRM bodies — checked and skipped (2026-10-13)
HairSample_Male, Sendagaya_Shibu and Darkness_Shibu (VRoid beta samples, mirrored in madjin/vrm-samples) have
"CC0" in their embedded VRM metadata. pixiv's sample-model terms page says its sample models are not CC0, and
the mirror's provenance can't be confirmed, so the license is unclear. Per this project's rule they were not used.
The three new boys (Taiyo, Ren, Kanata) reuse AvatarSample_C with different hair/skin/eye colours,
accessories, and costumes.

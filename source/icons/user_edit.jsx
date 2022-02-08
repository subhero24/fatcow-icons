import * as React from "react"; 
	
export default function UserEditIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAB19JREFUeNqsV2twVOUZfs59L9mEhCXZTVChQxHoVBNEpAEZnIy2hdY60xm8tLTghVHwwjD+8dJOHWy8dDqMjqhjR0tRsJBRVFqk42VAqZg0CYtICEEC0WRDsiF73z3fufY9m0WSSJbEyZl5Zzeb7/ue532/570czrZtOA/HcSjwCBuWTnlJ5Pnf2RyncBhay8FmhmVu23wgdh/9aWKCj4PNXYIAt+a6klllbqGDl3j4/TJ8xRIMg0OWWUglNaQTFiTeRCRlzH6tMf6Vc+5ECIiXWCOXecQOxSVg3lwPvF4vBF6GbnKIJw36niUiaUSjFqb5pA5a7yJjE4kCXyjs6xeX1ouSgB/OkuH1FIEXiIBcBFnxwe32weWiT5cXhskTKQEPLi2rd/ZNFgGXWxbWuz2A1+0mcAWi7IYgeiApxfTdB0n25H6XFAWpjAWvS1yfj8LkEOB4XvF4yTuLBydIEMgkioAoFxORIvJaAcdLEOl3VSNBOWwmSKCQBgSOc/hZ0DRAJwBeJCIU7nDfIE60n4bb50VfJAqNBGmZ1nkhC5NFgLAJ3BQJUEVXT5jUfxbxRBaB6UHcumYFZs6qQjqZwTObXkcmFcf3eQoSsGyL6ZqprFx9GyL9g+A5yobqufB4XZSCGSRjKeJoYf7COXj/TJiiYLPJJGAlVeOgpKIuWBXAvEXzYSTTyGaySCXSUFUGpmowTRPl5aWQZR6xrHYwd2ejUvnIsx8z29RR/chPHY1o4xWh1hPX32EpHf3hftgZFapjWQJmGulCh2bQp64hScR8lC0DSbaf9unDwY/XH2BlV86BPGMmmh9rcCIkj5cA+1db+n1NswcGB2MwDSMHqutG3nSY9GkaJjQ1SxEQIw2h1M5hhUjeuuOf7IPydqhxilgig4z/MjRt+PsIEgUjQBY/GjEf7u7sJT3YVHDMHLCRM4NEacEgDaTPxdDSaz5M62P5ffKrb77Hrq2Zj1//4mbsONsAncq2mmaw9Bw/73gIODU9eeBU+tM97+7fFTp0BLZlktDM3L07aWfbFk4e60RjY9uuT0/GnPtPOLr63+M/Yi7FQ32jBCc7vkJF2TTsTL2LqeETWLTl3kXjT8Mhb6KSxLlOdcch+KLgiASjwsAYw6nOHoS+OEPFKVeAos6Gzx+9ii24+xYsCE7HC9s/gain0d7eDlPhcc2La5fSkh6y9LfdrkA35Jb/9fDPDdm3UZWm1tXPfhvuaBs6uweo+SRIeEkkEglkfbPRWr2N6kF875buhctr1t4OBNYQkz8BJxuwsfsJUkUMm5/5swN+mqz/fCaM1Q25uvrPlvNKyVvFPlm5paYMty6YgnCzjr6oiaDfA49E7VdgEG0eQrGOh35loO/Jq5fX3PdboILAP9tE4P+m+LqwMLYdtz8f+g74WBEQlz11+KPL/N6la5dV4KqgG1+ngJl+CYraj66j+xAfDCMW6YItFsOWSxCsWYnUyzfiunXkefAe4NCTQMd7dJKFN0JXYNWWw2OCjx5IxCVPNB2onTO19v66KoSTFr6kW+3PcqAWgLurZdAsAtWwqQmR+sl7zRZw5o8zULv+N0ClA75pCJw3sK21Ek9P3XHoeH31HXR8eDT4eQLDs8Bjc3ztqsVBtJ7VsK/LQC8NHZah09Ch44XGNOU8o2akUhZQ/hOBzsemo3bdHaPAdbzWVIEf1x+DIvE/cTLpYuAXS0PF7xVwjirf5z3koUY5T6aRGbqJDDPxfJMOmxNpKHGj49EqLHlgFVA10vN/NAfQtrqd+gTVimzyUqk+QoRcVtURzwwB09SF4Xlh0TldTMDTTTJW7K7E9Q/+nsDXXrhzJ+wtFWhe2Q6JSnMi5ZyjD82u421GjKpbNGtCZQZ1vgs7SSowaDZIQ8Fde6pQ/QCBV44Ef6MlgE9+eRyuVAyapSGWFomANrFumKBSmcg6A4gxIm4WzRhZskdCl2PeutUj1S4QeGsA/7npKFzpAZqeNCJsIU7i1al/TIhAOJJEUnXqvU1l1/rWe52WBfp3ovgmuvMrqOTv3ziU54KF7a1B7F7SCk/6XM7z3GXxPBK5c8yJzYTUKAb/e6wXJTIFn+o8y4lvyJsVpSFMr3sc5tcfw9KyBK7jzVAQ2xc0gcsQuJrJNSqO9jn7D34ZdkTYean3hOER0JKNf7vroHbP7p6+OKoqyuhFpJgmXhfmxPai9moi1bMXQqwdHV0xtB2vwju1LSi3E1QRTYoTn/M4EkkgRDPj6W+I1JHXNxZKwdGV0OnRAaF05lz5mnsfspQpV2p8yQ9sy4UN5a/AP82P+39Wgq0NTXi19wYctZcQZAaCrTuvaPkzyIxUJ8fiJ7SWl58zo6fb6Oe+sUiMroSO6J2uVkrmJ/M5I/adK+YtG3RV/6FS6NK5xKnNW/ad/fAiY9cFvQ4NJE4BGMh3SDbWNYxuRs4ilSyS7+sOmaLA7MW7cObwX158q3nPsP8ZBWYIMw/KCqzDeNqx8xSRTctrJZ73jBWIwKS/HUv5SJiTCTycwP8FGACFAMpbq6a4uAAAAABJRU5ErkJggg==" alt="UserEdit" data-type="icon fatcow-icon" {...props} />
}
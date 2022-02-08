import * as React from "react"; 
	
export default function ReportPictureIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABsFJREFUeNqsV29wTFcU/733djfJRiQU/aBMCWZMZ7RkKEnJ6IwSOob++WDGTE200/rQT/qhQbObSNApWp2paZWOofiAGbQiWRmjqKqoDkLoaBKhUYSQyJ/N7nu359z73v7Lhhpucva+d999957zO79zzn0aos31zuqD+wT0OaZlAQLQdA2apiFsWjAtgadtBq3n1sXBvcvenEe34cTnGfNXV4m6h0JcaLXE+bs9orY1LGb5Dohn2eaWHWRLMiJWxyiQGqLbYt8q1LuHYeaM1+WgZZqy33r6HnRNgDB5YssF/VlCw6JJAx0kU0naHQU8ZWWrg9Pz89B6519sO3YEExd/DY0n0l6avZ+b4DM0LXL/RArQ5ma8B7VYBNwrVhRlUz945srAqY/X7USzawga/m6EZujSYkv6jyRGoYgiQv7HK2aPRRXoPRarQIiklRXhNQZkDcAv55qgMwA2CtwRANB1pbou0dCVi+yVeUxtJiKbWsKSPQEAuoTZlwJ+/8pxmgiZ1zMsrPEVoWXQeORPy40sRkEg4ZdKSDR0rN8RQO7Lo6RPp74yGmu3V8p7ZS37XGDKuGxYllCWa2qdZAqkuFyuo9Pz83GPOPBj4BwmzHxfkc+G1XQQ0NQQK7Z04RtRSylsly6cGYc/b8rj/I6jgNWHAsyBMdQPKSgLnFiybg9ajEzUXrpCecDmgKUglosJZUmYLRPxXE9kmeagJv2GRCJGFAiStPAUFzme/Xz+4hWaTxvwzqw5FAGdkMrLzsDgdOOx7L/TYeK3+nZphGEjkRhE7NIem4StQnNh05atqDl9RjLHsrOfdIGuhFfgzUv8PlRVVsrnpSV+HA5UofLQIXnv9/GzQ0pJLfpuXwh4yiN54Ca2bf4JEwq/gRnDAeGw3OYCN5+/JLJIsc8ft6i/pCTGFewGLcoBLQkHltt5YHZ54NQHXx5Am+7FmTMXVC1gBejNxPgvLS3B5MlTpKIFBQUooU1zc3Ml8ZikguKuoGA2OFrlO1o0RPvMAy5KtW0PHuD3q1dtDqjdTLrjMOTXHQSKi31xC/l8vuQFiN4zdKWBlSSNx3HAIg7s3rsftbUXFfSShJpygc1mw4agtJT9HkCgqkr6m9uq8pU4Uh2Q14crK2TvcRnwUBr1uHTYnng0B7Zv3oPswo3o6eyImW1FWUwqt3ZbhIC/lzXLln8WuZ4xa7acl5UWjZZBqdGMGRuu6STPOxwofPd1dGkGjh+vkRy40XgT3y+dg6u3umQIQqjU7OQUtnBn9Z+41HhbEk4o1kjAY5OX3IzPA4ZBvibRcXJ30Zz8OA7QIK411KPun/vK13bgxvoedjp2/JdCFeRy4y1sWzEfQVMpxuMe9r9D+tjCRdcuN7BkbUUujXhdNgdY3BZZXn30BIKaF9mjRshiEiFLkjosixIFOJfboWmk/NlSjBZ76Ek3lml/IQXRCJCb03LppN0n4yFPWay/bnNAnDx+7NZHY1qQeW4HxufkyFog7OQtCHMHzmTCs4gxGPlwF9BFtnfpSCcr+9HlwPZvMfT6MNnzfViLus+mlMoDuVOnTd5YNwBvbahGzrhRCIfNyDmQf8l1kYwWK4ZKdgjxqp0PSZP7aNDflpt5CQK95XNyTZbsvURCL40HRR95gDlQU3MWt1o7VOGJpC6VzRLTiK6pcXlkIf9vGHldvkfGox/1HfVFCJlpdK7wkJvS4G74FGkj1tBYn3nAwPnay2huvqnYEpO8H+UCxogRyCQ0smjFfoay9EHzdwjSg2A4LPsHzZuQloBALw4MPPcDxk/IIZKEyQWqHmhwDiS9xUlMXDqY0hz2LKm0csaQRejsbENn90PZ96P7VIMJGA2MuFowZ1Xg1HtfVUvj919rIAbrcQj0ioIIAhp6yKr0FMdhiv1jX10PPWU9mhYPxvAtd2BR4ScwEIo5RMZxINUQ+LniCII9pgwxLh58qOAE4qJUmPhtwgi45MeLOiw2XMmhsPTKDCCX16n3eNB124P6ugJYPV0ww+14adIfkeN9XB7go7cTcvyY8wBvkOZhRnrkOS9RAY9L5QKTSdcWUlERKZ1UfnQye/lYdLQGZWib4ZCcm+zDRHS33/1V6/9cXuzpltNm4doKeQRL1ljZFLcuI2Rg/7lour6L0HMnnWtZIQwftiAOyVgFuveVLviQa0bC+OOae175wUMueiNvYhlem1TW58eLPKKT8FxD761AF0kTye0kR7dHtSzd6rmx9IuKF+xv2j4/34RdqmQSE+EbUMH+1C2T5EX2AKJ16nGNM9w9ksZnoQA73GsXwP+7nrCJ3/mfAAMAwkgtF7rPmhUAAAAASUVORK5CYII=" alt="ReportPicture" data-type="icon fatcow-icon" {...props} />
}
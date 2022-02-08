import * as React from "react"; 
	
export default function IceCubeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkM1MjRFQTlBNzQ1MTFFMTg1REQ5MjYzM0QzNjQxOUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkM1MjRFQUFBNzQ1MTFFMTg1REQ5MjYzM0QzNjQxOUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCQzUyNEVBN0E3NDUxMUUxODVERDkyNjMzRDM2NDE5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCQzUyNEVBOEE3NDUxMUUxODVERDkyNjMzRDM2NDE5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkw1xI8AAAVPSURBVHjaxFc7b1xFGP1m7mv9WJzECQ6vFFBAiQQVERUPiYIiFDQ0/AAaCgokHgIhUeRP0ECBkFIigehIlSgFEi8pipCj2I7fj7W9u/fODOfMzF3f9a6RYYlia+5r58453/nOfDNXOefkYf6lPCilRp5/8ePStyorrsik/DC0K3vXPnrt8bdxV438TAWOEcg/+2m19+6L86Lxm50QX6NZjP/VzQ359JVHC9z2RxRogn/yw/3eey+dl69vdeTSfCqTZoixLW5UwjENxv789YUhEk0C+Yffr/Tef/mC3FzqydyUkvkpLXZCAhoEdjDWLYzJsUtgfPnGxQGJmkD6wbU733386oL8tlbK2alE9rpOzuBsIcEkKmhI0C4sxtRye7MSYlTAunrl6bfoiZrAlM5ab/65XgLMetZnWwr+caEd82iTT5OcO/Kdb+HgZC5XYi0DcfIHMIhFTLS9mkBhAPzMuUy++aUjKRgsbVfy3EI2kgLn8+okweCZ1pImyJ12kiUa90paqZJOaWUXCuJSchyWO5VcTFL/+7MXMiEWMZsEtDHOy80XMli3yERaORxsjyLjOYUcJJiiD8+ZP0dwvLOyZ2WnZ0BMi0qYAhdIR0UqYFTG1RPkyISVDbn2AyfBPDkOJgInTkmSyAB4iADkYJru7RiMI/JIkfjnGZ7naHMtPkNfdGLwVUPWAQHmiMTYidIlEgBIMxkA4lqpIRI5Dn3IdG/HeiLTeZMkCQAcz2bAiEoZSyw7SsDYUHSSGL1mGjASi5GuwTkoCCQxugx9tw8NmpNpyJ8nw+qwfw6ENn4oUgbjvKJmnAKVMz7ftaztQst0GuxfR55EEjmuNcDW9q10S5HZIrxTK5U0fMJ30jQUJDamOZpwNAUWDAmKFMp+pmQqQ28XgVWIiFHTFCv71o/WLgIwZ0UdNclQRVWfYxDW8sZ5rPEpcCGaXPOs/ZSqCdQRdQ1lt5DUxRkxrI5/ZbDQBAIkvdqxch+kn38sF2PGmTA+pAIJzZRZ7wEOwnsOvAXgLvoVaZh6jLqOXmslqlmIVKiCh5WTn//qYV3JPFkV1R71AAzA/ExDeg42S+PQkHiFGdsEOOuEJ6jD4F4ZFTVuzHVG3ek52e6GSUxAqsrxVcQaJWBCuShQBFJUtgpv0OklJe/aMDUJTgOqKHuUWzUWnv3S+RSZeO99obQ/21h/xs4Cv+jgfwYK0Dx9EOpBPg5IyWtAXQOrI1Be9tB/a9/A4cpXwCwSq4saA7Bej1Bxx5gwyJKl4pku7xqZOZfKVKJ8HWAqlG5EG/Pcxx5nt2+9UgodMjW0GfLEVTSoHlJ7xAMuDIq20w1TLM/CMLqR33qlA6bPc986f0+nH181PQEdoqcSDEyfVIh8eQTLXRinQNTtVoJpqAdyeamBwFLKtFS48PVeq3/cDfmZwhUTZxOls9aMrwOUuYD5DsuwMN1ZDx0pIXN8G2v5BvJMIupf7Ij6WKHWDqwszKZM5AmLEQDYmcVnbc9gGmLHgBSU6LyMIrJ9gI0FdjXc2cjRzDvVnnAb4IubpTx1JvUpsWM9wJ0QK10Z1m9uMO7uVrJ54AaLk6p3PU5OvVvnOyS+2jGyjko4P8O1wA3tmgdrAR28BFDO419XS9mK4LW53H9pLpjvyblUfl/p+YjtSSZMIfmNuz154kwmTW9Nsil1MQ0F6wtnVEq/mXHfBSi/0OOdF9ryQL7Wom9aWqTpoJqAM52165ev3rjMgvSgvhZDXQCDg/XrtZ3qT7M2ri+hnR/ztfR///H7cB1tkbvimkAa9+ktOf0Mm8QWXbRDT+Zhf57/LcAAbaVRkgDG2DwAAAAASUVORK5CYII=" alt="IceCube" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function TokenAtomicGroupIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjA1Q0Y4REM2OUFFMTFFMzhERDVDM0M4OTYwNTI4ODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjA1Q0Y4REQ2OUFFMTFFMzhERDVDM0M4OTYwNTI4ODAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMDVDRjhEQTY5QUUxMUUzOERENUMzQzg5NjA1Mjg4MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMDVDRjhEQjY5QUUxMUUzOERENUMzQzg5NjA1Mjg4MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsRJAeYAAAT7SURBVHjatFfbbxRVGP+d2d1eKEptWqKAsTfbWiSINWICacREQksIMSFojE8++OqDf4f/gA/4Ao8qidIqicbUS4BS+9Bauch2E9sG2tKLlNLuzM74/eab2Z3ZnVoeuic5O7Pnu/y+893OGYNgHP0ETc+14RvXQr/noSrDGMByMbI8jfeuf4Elf40/Rz5Cc8shLAz2ncHx3gHQAANLJXZiiEIPrq/u16lhDI19i4UJtIxfxGJayJmWV3B54PXTONr1Dq7lvsTi47tY2VjZ0d031jWiueFlwfhQ7HEx7Fy5LMsnaEA90jj2Vs/bGJu5iHtLY0iJpZlU4J6dcIDMtfwKVjdHRamLwx1nMfzHlWPEpgG1dHnBdbC4/jcy4nnLqk4OSPx9jJp0Rq0S7HSQG3CNLVauIv0Uod+Kvl3ycmPEcGEXVaXDN1c8YIliY23teiogPRUYGRpCYPWiPF3q2spy9QKxwlE0oODlfeBwVpSPgKaFO5cFstPA/P0Io4DvfR5obwNa2wHHUSOSPGICrAoDPBoQ7MqUgackITc3gR+vAisrqsVYca0L8zIfALdvAf0nJLi1AlSoNIL6vCQDChIXK8EAgueFf+g73VnDbqD3VWDfPhGuUR5H6HNzwNSkGLiqvKfPADU1akQsjEaxiv9LOZDX+JvSJHhGEvbnnxR8TyNwckDcLK6uqdWwcPKda6SRh7yUoSx1RHUSg1gJOWBXhIDC2Xvq9oYG4N2TsiYSs/8AYzeB9XXl27UL6HsD2P+i8tADlKEsDYuGwQRYMQ8YP4/iSUhXMduzWTXq8Gvq0rlZ4JcRYGOjtCu+c4008pCX65SlDssgpjvEinnA9eI5EIbg/py67aVW/X9zVGkHJQ96D6rs1J/A5ITSWluV9/ffVJYyjoPYjl0vKQegVWCZspgFptbVabwfr2nZHekrKfXfPaWRh7xhxkdnqJtY8RzgomtHzClrCJ4Ke5HeXi+JZ4KFutoSLQQpLpQ3lhDLlHmggHyFxb61ngqxnLg7JiNlx8cl4/fo5DvXSCOPX3qBbJLOAv6vEcUaBvCC1PsD6Xq5HNDVBRzvB74fAm5cl3ktuiul0QDyclDW8+Jnh0G8EVmlI9P2/xQ95mlfJyiVMMH4bJdWOziopccdcvKda6RFeX1ZV3UVqyvASuiE+YouSCXd3Zrhy8vA118B584BnZ06y4dtK8+aJGNTk8qyi5afntEQlDwQbUSmFAKW0MApLaeHD4FLl6Tf39E483Di5DvXSCMPeSlDWS8hDzwvwQNuggdCL9SJi89/oLFfkqvk1R9kRs7/6A6581ODWoo0LOnuUFGG/oUkOIySBhOsXhSefx+4cxu4JSfezExJOekHDgA9PRL3bg1FeCcoNyDEquiEnpvf+g7IZJPd2PLs6NDkSryQkCcfAd9KXdJh5MLZ9ioWgpTvLgxFUkgSPQonyYBNOTiMlNXTf5UkXTa2vZhKoyBWRQ7A5CV70/AKNqo5UlbKxzKRMvScJxi/O70uR2kGaakhSzwRXjZ2bhpfNzGIRUxi0wOboxfwabreGeEXS2cbwyASntnRnRs5uWwJfTa3gcm/XBCT2ESRixP2PrsfvW9+jM8zu3GoGt+mJvixH2HixgV89u8spmRlPtymHKholimXazzDUFUpBXhOPpLJS/1i6IFwZPzvRDXGVMkAOpcl8IRHBxf+E2AAMaEMJqgzOk4AAAAASUVORK5CYII=" alt="TokenAtomicGroup" data-type="icon fatcow-icon" {...props} />
}
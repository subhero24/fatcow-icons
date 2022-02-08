import * as React from "react"; 
	
export default function UserBenderIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEU2NTVFRkQ1NDBGMTFFMUFEOTBFNEY4NTlBN0RBMTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEU2NTVFRkU1NDBGMTFFMUFEOTBFNEY4NTlBN0RBMTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTY1NUVGQjU0MEYxMUUxQUQ5MEU0Rjg1OUE3REExNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTY1NUVGQzU0MEYxMUUxQUQ5MEU0Rjg1OUE3REExNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjyRGEQAAAVPSURBVHjatFd9TFtVFD+v76uvHZu4Am0pMAjTSMSoic5kMYsffy384UxMcImSuMTMLM7JMiXCcDJAnMM5YXExMwZN1MXEGbP5h5nxKwa/QuYKhm5MprOUr0U2R/s++vo85762wlLYo2w3XE7ffffc8/U759wHlmUBzTyG9OrBI8Qo5cOckeuC/If3KprXWI4CYiqVYnQ5CnAZ93Mc50jhl9rfaBBEqR3ZgsRLfPg3ljT0ls6Wxj7ck3IagnmxcGLx7q7ewfePfm5Fx6esuSOGz324Tu+deiQr16ECYmtX79DJb/qZwLHYpHU6HLGGz5yzBn8/yxSg8dV3P6ISPUNOlFgKCF27Wl97ak15ac1DG+6DH/pPwfCZUZhNqKCqBiRUDSIjf0L/z7/Bg/evg8ryUA3td4ovwUm68QJfX11VASe+/B4uzVwGt1uCBCogyyIYySRTRNU0mLl0GSpCATg3er4e+QgP6nJAyDVs3bl2ta/otGlaMgnQdB1SKQIe+lgQQRB4SCZNMAwD0KHgcrlAliRwyzLwPKddnJ66o+9w91ny+EIgXMwDkq+oJBIOhyEajcHjjz0Czbu2ZV+2tnfDBx8fgyfqN0Fby87sesfrh+CjTz6D0tKAXFtbG8ElN04tnzrgIYumpy+SM5hwO+VsT5FQt+LOCs+8s5XkGB/x0zn5FqJrInkG8eAkffOuhFTpfL7VLISd6Nq5KbsbQ+CWJUbnphWFgPYTX7pS5g3CwtvvvOeBhzc++iHukDWVQGhA0jSBdgqiAAKfBiFmAgmlZwKhjCDE47STX3y6efDUL1/jy38WAuFiCsg4S3Cu6ep599vbqqpBFHmGcAXTUMH4e5DqKJxqQiKhs1Q09BQMjUSg6dktG5D3PM6JXCB0kgV6mlkw0UrTTAEvcMRJGGNpl5pXRS2WoiZ6iPbj+DvNr+dbiKy05lcYWFwc/HVhDC5Ex2ACEU7CubQl5L1AcRGUhYJQ6g9k+K8sln5LasccptNPvw6A1+uGHc80MIHv9XTYtLeTpdtzW58EjyJDP+5Lp991a8fFePOZ0FQVsAnZluNeQjhR1lBIIK0j5XFWVISgafsWws/ktdqxI1VZLBBk69fdDR3NO5jwIwf3zqPtuL7+3rvgplWrlnTFc+SBjgPvTNSsvQVi4+OOMBCODEPz80878oCTbsiEpRDdJODW6iqWhm6Mt4KFiGpAPKFhGmoQx1qhawbbf73uhOLe7sMD5OJMypEilGpJFEzCdYOmweoBrSUxXel92/63B5yU84VCwG1/8eWqkkAoXHyzT1npXYFxNrNKEAu1Yg8WoxVeGbxIZUUCDa2ngqRpOoxNTkFscjIxEYvWvrXvlT+ubsmLgZBratu/sayscqTMH1QKvF4GMiutJCGepmWlmMW6YYKKHqDiIwp2eXbxLvAVFkJFMKSEyitH6DzWIh2EwNXS+WZj0B88HirxswNt4VYOEIHtfh1DgVRF60lBUeKZEjwqoWDZDvn9QOe1dB5ozGXw3BAIe/YdOhYKlNYVeLxgosvZpRWstPOsDIHMk4Wllzqix4N9wSNjOBSQsEnFsTfEMRTxOPYI1a7E/87GIToePb7nhW2b8DGZKwsU7HB1K9HldLgsCWiFgF5wsXjz6A0RrRJEso7H3zz7TZ61r2XkDQNm4wkEqt0TmBcUkT2LYgGmr1BHckifXL3AnTE2AzSGestuMhyGwsQocvQPhbpYieayVXE+mK15oSJPWf+vuhdSgIMlDGvu180Sv8YWwkAhkkq6iMCNG3QxGSWa60Iipb90xRuogIFzlu4IGbn/CTAAfxIIP8bu67wAAAAASUVORK5CYII=" alt="UserBender" data-type="icon fatcow-icon" {...props} />
}
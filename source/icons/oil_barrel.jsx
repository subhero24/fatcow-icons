import * as React from "react"; 
	
export default function OilBarrelIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0RBOTBEQkI1OEZCMTFFMjlGRUVGNjNDOUI2NDVEQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0RBOTBEQkM1OEZCMTFFMjlGRUVGNjNDOUI2NDVEQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3REE5MERCOTU4RkIxMUUyOUZFRUY2M0M5QjY0NURDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3REE5MERCQTU4RkIxMUUyOUZFRUY2M0M5QjY0NURDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkhTbZYAAAWDSURBVHjatFdLiBxlEK5+TM9rN7MzO+awG8TAgpcEjQ8iiB5WouBexLNsbl7EGNlFk5snNRLQSw65eAgRDwrGJEvEQA5CPKhh2QVRcV9GcE0yu9nHPLv779+vqrs3s5MZMy3YUPR0T/9VX1V9VX/9htaa2i/DMOwXXn71gu96E67vUaB8CoIAosj38VspUnhW+O15HlZoslMpskyLLNuWu2mFYpmm3FP4P5VyZq5d+eoVLPDbbdp0/5XFBxMfnXqfVldX6U5ljdbWK3R3fYM2NzeoWqtSo96gVqtJCmAAGYYtyqQzlMvnaHBwDw0VClQslahcLtNDw0XaNzpKb02dmGDdkO12Y90AZNjjFJR+ceEyvPVJwVMR5SIKgURFISIa3yFixB7VgwY1XY+2tqv0963bZFk2vLfJsFI0fex1fBOI7n4AGCZC99viMkILBT7CBUMa3gaBCYMB9bqARQDxessKU2JCfl9YYaXySeeabgBEweLyH2RjMdyUvPO7WDSLoUnLt2zQgqdR7tu+i0EsQJcVAqC+ACAFtSuXL+Vdz5UwP4iEFiJlm/b9JEQ0GNivP88zR2p9A0BO8zEJK2trtL6+Tht3N2lra5Oq1SrV6jXyXHc3CZ005QbyNDAwSAWQsFQq0nCpDCKWaHRkhKbeOZlPEgEaLhbozNlPxXP2VnluSEKFaPjdSKip6flCwlu37+yQECSg904cl6j1HwGIC0YzcQwK5A0bCWAkYAAQpUNiMgeEW8JAThVzQkekNAUgV0evqysAVtlshflvtVrURN27zSY4wBEAD3xERSupjpD1IGHciCC2nSIn5VA6o8nJZMmFLiMRAChtYVELeT759hv01BOPy3sXxgUQ/msCUAPC0cmk05RGI8qkYdRhSYvBH2/M0oefnBVdEqFuFdcrNC23Jaxn41xwLldAwKkQkpKHNs1VoKIq4Wf+XyE9DIwj9fSTh0RHE7p6RaAHACNMQdSzUUx06eJFOjI+To8dOEAv4f75+c+kJCeOvEjjzz1Pg2D/oYMH6dGxMen9DCaqqDAClCACHC23gzjTU1O0VqnQ8vKyeH7+3Dkq791LuWyWsrkcZTK8F+Qph982an93NL1eGejOAcm3uztv7JUZdzO85y5pRZ2PvTTaOqDR4Y3oSpICISGj7haaB13RNzFYTh8DMJKSMER9bxGTSbc1E35WskGFJNSRxIbjNBgSAS95BELU9969eewYOSixMZDMQTpem5ykZqNB9XqdGrhzWdZx53Wj2P+LxaG2aPaOgN27DL0db3QEYPLoUZqbm6NH9u+XnNdgfObqVekD29Vtmp2fF1I6tt22s/6XCECY6ezpjdk5ebZhcA82mcPPHKbCUEFI6DgYxSxTJIXux05Gg4dcP2Etk5d1JeqErMnDxuKgs33w8Rlq1OphK8ZmpPxoc+qjFWdQkrn8ALm8bSdPgStE4vDyvu7DE19xdwQAgPMBIN6MTNMO938xHgIQAQjW4SbejISEvuxmOxMOwmxqS3Y6zWEPwokoHsF6Cetwk5LQkBR4PZX2O5LF4np+MgCo79oP33+XD88FSoaScCRTyUYygGNuMJey6WwtwUSk86dPn6LVvzCS4VxQwbmAR7L4XFBnUmKHU9jxuJA6R7IinwuGh6nMgpFs38goHZ9+N59gJgyklr/8eqaPc0HQfSRbWuk4F+j+U/B/nAvMJGM5L15a+VNq2eNxhAHgndZW6AkLNx0eu6M+IDnvEClJ6FhcuSnP/QLQntu8fu3bb571eP6DSO3L3Rfy+UpFJGQOBHI4ta2oCUX38LcpaVha+IW/vx519d1R63I6HsTtYUj53xpVwouRViA3+WzYbrMbADs6xWZ6zlHJLzbCE2yj83j+jwADAGkaYNoySXjkAAAAAElFTkSuQmCC" alt="OilBarrel" data-type="icon fatcow-icon" {...props} />
}
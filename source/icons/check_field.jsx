import * as React from "react"; 
	
export default function CheckFieldIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzIzMDFERjAxMDlDMTFFM0E4MzNEN0FCREFBNjZFNzkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzIzMDFERjExMDlDMTFFM0E4MzNEN0FCREFBNjZFNzkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozMjMwMURFRTEwOUMxMUUzQTgzM0Q3QUJEQUE2NkU3OSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozMjMwMURFRjEwOUMxMUUzQTgzM0Q3QUJEQUE2NkU3OSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlFpM8YAAATISURBVHjaxFdbTBxVGP7OmZm9srBgawFttRcDPogVa2I18ckYmtW0phfvl8SUB/XNpKEgVh/QxpgYH+pTH2ovia0SaWpZShtjmrQP1lR6McFUommCtKQCBdwLuzPH/8yZXdh1d9hdjZzw79zO/N/3X+eHofjS6z842RczWSRlWhACZS3GAEPjCGji5I09kS10K40yV6j6vX7xb5fUIXUVtdKFgE9aLtdPU/K3TBeA4aEw4OjwkcyUS4Bl3F5rQIWAlYgtVAjsU+GwqcADWZsbg4BlsXLwwfl8LrgtdwJcs48e+cNR0ZKJGK+QgDU3MX6c7T61GU4u5PrYOVrCJie56mzeS9ypAl9y+ty0SwLlO4h9c3jfao9hPFbl975T5dHXc2Hi0vC1Xrm1pXndVqnrxvj4hS+Pnz56ccNbn1zt3LyJ3ksV0S9L7xbJ9WJJKAnozbuifZ89HYw0BacQTySRTiVhmNMIVPtRW78GCNTjj8unUbd8JXhgBbg3jFgsDp3IcZHElQkNbx4bGxj+9Nk38updWp4gkVHgkY+RlDf6d8FLh7lMCPzgeqQ1PINwXRgz00QilkB8JgUr7cNcWiAUpDIWKcyZAn7dQCBUjXBjkzLcnMEDqQuAN9jmWFnIUs+mvUhue1lREhaS0Q5FQhLwSVYpy4Rph1TYYbXIOcIuI2GLc0EvW1QRlqovekfmh5k26ZIXq3cbfMerwGC/urHjFXI9R1J6QldhoD/TzK09t+pYuIc02TcYL5RTnraPCJwAvz9DTvIiv6UHs1VgWWb5zV4jjZoOLw9AYwYKgT9Hlp8/SxeGYrfxCeDoIWCgA4/mlKF0bamLM57N4dZ3DVQHiAd+KWj5D+epHB1uj2zMghMNjJL8pWcUWWba8SBbpMNz6NJyWq2dDDvbCY209B5pwpUF4NsJ/NKP85a3bCDwgwS+2wb/jWQ8k4T2DmGlS2q1jFyv6QGs72Jo3wmMXFXR2PaSnUY35Z7tlO3DQ4qYfNb8IHDs0D/BSwsBc782HAt//RnY+qK6J891Q4Gvvb84eE6HlwSkdYyrorAP9EWR8eZ0lM/UUe5NYKhHYP9+YBW1A49HERkdUSLd7iVZI8EPFwfPEuCk1WMwGB6NXiTRNXIffUTiCUxPTiGViBM4w+zsLF3fAjOUGy4SiS8OAA1rHRIL5O51wFcEfsoFPOPQO1u6v7v5+T0nEDM1uwkxlklGQX2Gmk+g0fYni41S67XsfAnVLEM4XA8/D6F96AU8T3GfHFVK6+4Cvj7ibnkOgYe7B0dSMKpM2f2E80VjqmmkqMMduG/A3vz6tTYYzFQPSOROzrzgVh0aQs12DsgK7SXwaAngGQI0OGG1HHwKpJze8vbBTq12pVQGc+L62cv7XvvQ+eAY9/acif7e9eTCr6HxzF5ET3SUBp4hINtEMDN35C1Z8HeQ1DjXt0n+JElKwg09g8NjXU810/mk87zK0TVZCjgW6Tr6ive/7YtbXI3lrt8GltfEBIVG0EDCEDT47bHutuUuM8P/MpaHl3os91RC4L8cyyubijNKlmwsl1PtUo7lwpecOlezJ/q4jKNVZgrMj+VTZY3lOVVAsopk2WKeclkljeVu3vE7gyarkMDCsbzgv+d/CzAAloRkbCslkvIAAAAASUVORK5CYII=" alt="CheckField" data-type="icon fatcow-icon" {...props} />
}
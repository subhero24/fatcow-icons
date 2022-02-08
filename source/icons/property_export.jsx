import * as React from "react"; 
	
export default function PropertyExportIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDlEMUNGNDA1OEZFMTFFMjg0RkNBQUZBQUYzQzIzMTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDlEMUNGNDE1OEZFMTFFMjg0RkNBQUZBQUYzQzIzMTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowOUQxQ0YzRTU4RkUxMUUyODRGQ0FBRkFBRjNDMjMxMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowOUQxQ0YzRjU4RkUxMUUyODRGQ0FBRkFBRjNDMjMxMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgZ3e4AAAAd+SURBVHjarFd7bFPXHf6urx27OA8SRHBCUxJISFhJAmVsXVHDBl1hRWTQlXXaNP5o/+vK2KpSTRqT9tI2TdofqzR12qRNaqd1k1BCeBRW1CmCTFqLBjQ0DU0ISWycxI7t+O3r+zr7nXNv/CCw0jVHPj6+j3O+7/f9HudY+uBP2/DxjdGH8W9I9h1DA/58fs77jZ66s7IDO8U7okkl8ySrS4tXxWefPTrspkF1Ambxxbu0zc/9x3nl910nZUnfB2bYC0pEgOHIt7ahvrUbFe4VFkn+jJkwmQ7JNKyRaTBNwqCRiVGnkdhj2CsIOMwcmFRB3XkvEg/IkrGv6/AZej1OHHJIRsLIhYZR11APyNVARS3ZkRedGSok6sxUSKY8TPoNiTDoN2MKjURI1/m6Lv7lvLnuL9g49XWYDi/MAokyIh4GSdcn33RquTmEJ4aR06qxce9x5IP/IKAgHJXrIbmqxOLQS8A5KcMiBVOlaz6SAkwrLO6QjQTG1/0VspGETGpITEfRn5a7h0ayvwyMXkJ4ahzRcAKte34ELTwE4T4ibaYmYObm6dKkxclN1JeMBGzJbwgSBQIOYiObaSLxhuiymYED5DuJLQqRe/HVW2/85vWrR0JEoOOpn4Clx2itFIIfXuThQHTJ7+lbZGRUkGfMFKBYQsKwSLASAnwCt5pbLxspjLf8HVpGhZpl0LLiHdIR4T2dVdsf+vzzcHsfgJG6iVhgBO41XxBySoyTJRoZTiJmk2Aliuj2aIpYAHdJkYCdZmSFQ0RvntYyrHuWAqzveNuXNrQ/fLi+Yye0+ctIR/xIpXX4OnZZ+QgDs2OXxRQzPUkkFmwSum25afmeVONBfIcC5flOCSZSRuL+JcYv7vfVNTfW9a/f9T3o0cvIp+YRmr6BlsePwghfFOCx26PwNPRYqUaWm+lpSogFOy2ZeMcg9zA9V1Di3gRokeDG10gJDVu/c9X17Z3V19fvehlObRq6EsHtkUE07zwOM36ZjEohFb2NTN6NNW2PkXW6MECQyAZganEhuZEJCtk5uGXg/1CAs+Mkuo+MyoO/antt7fZvNlTWeGmRACavnIXvc9+Fy5yFkZ2BkllAdHYOLTteQH7mHAWkidDUmFCP100zG6T3ArZLqTDpGhQlj0xaKSA6BSxjJRQY9j7VK/X/oPHLvuau5xu79kCdGURk8n04JBkr61YhT9LznJ8Zv4aW3T+DHnoH0JJYCM9CM1fQCloh1QxVhU61QddU4Q5V1aGkjaIChmHEdV1nqqpS15imG+zMQJ/Z3Nx0rnX3S9BC/ybpE0iEb6F6dQsiI3+DLEvwfzCEtY8ehSN3g2pAEOlEFLFQCM07nhPFiHxICqWh5DIUp3nk0hoiIQV+f25q8GriF0ISrgDV6Zr9+/eXOeLG60+gee8PKZg+orhKYG7iXVTW1GN+7IpQKxt7CCsqq1BZ6aJqOIx8LotIMIgNX/w+9OBZUReUdJaAFUppBZGIgfGZ9MmX/jD1x1Bc43ka5vVlkYAAnZyahuSQ4aioRjJ4DW6PC+r8NHLJMPRMAtO5NkzXvyqc5EudwTp2CVrwHKU6w+ytUfi2HAYSFJhEOJ8hcFVBOpZA3P0YLlXsxrFfP/tzmhyinqGu2PXFigHeZJnAHU6qzQ7yNcHE34NMT2dGLmJW3wTjMy9jX2e78OP4zQfx/o0uJK++iTpvHKvbvwKvR4Ea9UPJZqHm+Ia1gDmpCw/u+ik2jY3Ctnp2UfqyILRqMgETsuww4V/1ApL/HEZN7hoSnm6wza9g68NtMHRFEGjb0ASf7wCGr28Cm/kxVsKD2EfnaUNykvUKpWYCUecjkGieko6SKtnFimrcudU6iruSLAjwstzecxhS5ysYa/ot0HkMWzs7rD3czhZe06u8bvTsoMPMI7/D4GQjAmRbeMKPaMREoOpZSF3HsK17EyYnxrDnySdwcmCAy19xJ4GiC0gBSeJnFoY1q1fBV78a3Zs7RNBZBwhLpWK+0gZE9ze2NqGx4WkMD3cgmcpihdeD9rYNaFrbYG9EDNN+P77a24v+/v78wYMHxUnori7gBKzFRRmxT2JsKXhpE2p48PiO7TTfWuPt82/hw+sQxni9PFuqMBeex4EDB4hEH5F4ukCihIAM6S4HIkmS7uPIyIRbGKwj2zPPfK3scTJF9SCfx3wkSiQOlilRJCBLuA+o+zrAxmILS4xwUYzxFo8nhRKnTp3K9/b2ugsEnPeS+P9ovGSXClcs9ZRllOaaVtiMvGUxsCzgIp2tlOaAeZLe6XQKEvy+y+XC6dOnQS54VBj+sUH2CRsvaH19fWLkKtTUrERPT48gsbCwgKGhIQ5OhwcEeVVcdgW4vw8dOlTIqhMnTiBL1bG2trYUfNKujGpZKS7dlj9VGPIDCe0xsh14Ho8HAwMDS8CFCxbTbDkJlKZva2srLly4wCN/Cbgd/I7ChPvK+U/YtmzZgkAgANvnZeCLhShNUVlpiiM0W1ZwbhA3MJFI/IsuU3eCL/593Uq99p7/Tj9940kfoe63SSwhsPJuu9QyNmYfQHI2mbL2XwEGABb6On+3clPvAAAAAElFTkSuQmCC" alt="PropertyExport" data-type="icon fatcow-icon" {...props} />
}
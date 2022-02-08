import * as React from "react"; 
	
export default function ResetSlideIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDM0RUUxMjAxMDlDMTFFM0JCMDFDQjk4Q0Q4RTZFNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDM0RUUxMjExMDlDMTFFM0JCMDFDQjk4Q0Q4RTZFNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MzRFRTExRTEwOUMxMUUzQkIwMUNCOThDRDhFNkU0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MzRFRTExRjEwOUMxMUUzQkIwMUNCOThDRDhFNkU0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiX345gAAAUySURBVHjazFdbbBVVFF3nzMy9tQ9qgJKaQNP0i1JqYpQQk/KhEBBBU3zEGCDGR3wkjbHREFpILIqNRuHDH6ipHxjBmJrmIijUFz/VpFp/QENbgi1trQ1RSom2vb0zc9z7zEw7t50piK3xJPs+5pyz136svc8ZoZTC/3kkbtt/Wi1/4wu2MrEQAHIu8CUNn6Wbtm/ApO3w/7yFMEDEgRcR+Asb16Gs0ETNsa9gGQaE8LYYym51f+16+o/3d11dCAMSRfs+T9duqkLn0BhWLrWwsSwfipayAfSJvpE0DrV345f+3qcuNz5yhPa482VAoqChLb1nSxXO9I2SWldrLs6zMJOrtWuXYMex7zHcf7F65ODOT+mRmg8DOM9l2H3y7Jvb1iHVM6oXFOd7/GMErhrHVfr3hpIc1KW++2uicetS+jtxMwaYLK2pVDsBrVXKhUE+33t3JQre+QYHH1uPgqRA7cdnYBOiTcDMhfr77sTpPgflRblIO27eteGB8S+/7YASktIkru+1t6bjoerqKv6xiAxQUQOvpFTzuTFl1Z3Ien7L3pOqovmSSl0YV9h1XN3MYEzG5ggkg2Z07ufzmmiSPpKmwOWaCiw79LXO1FDvBYzbLgosSdRQMA1J0SBKSoHfentwbdKFE8cCNZ0+hqqsKIePmTTDPDBNAwYpDpS79D3y0u16jsGTBgHTDkUGFhEvDnSOwpASyYSFXCOehYzFvLEdMtLJKhhhBr9cxV4ZSFgG2jr68VPfVVIuEKRUK6HNz1avQXnCRfvZTv2sIuli6M8k3kv9ACm5TmdzgCO2uvRWbFpbgkk4GitMQh9Aae8tikLP0CgK801PYSiMDpXlpeEraNm5hlqop8SlAPb0/45FtJ6jEdVZ2ADWuZV06wqKMoALXkpKAUkO5TlJkcgyQEdJ4sfuQXSeH8hmNa3LoWzKmApwfVDWLaXKalvTKSCPJHnAyiwywLKELhcx5ZLS3TA20SJwXszgn0c8R3m6GcNFVAR8A5QSWFW6GBcHR2jDP2hvag4Sksesk3UzBqINgGcAeXDPHWVYf5dEZEQVbvRhlmGceyaxZwDiDdBdinKl3Y+A4W7pkvCs5FJ19ZEx9/HmG8G6Z/LEnN5Hk4ahmdzV3YXh4WGPA/4Gr4koFBcXY9XKcloH1LzdhsO7N+v7AivmHMc1Yq4gm3oJRyK8ygx3CwY3qdMwuGVZs/o6G8BzlasrYQilq+T5t06hqe5+vHigDZmMG5k2JmGGwJvqtyA9aQORfYB2cpkY+uIhsryfeZBwv2BmNe99QJdYhnL77subsxpXVCfUkWKehRbJwDMv9WJW7UcNL1IST752XH8b/h4VI9NE8KLGWEEzyuYAKZ7J0siLJEVA+NF44tUUjuzbhucaTyCdYS7EpcDBh/sfxdh4OpoDOgK+AXNd1XlO+g3ig9cf1to5v4f3PDgViUgS0lGZzthE1OzyluESNHxx+SpGEjA/kOB5kIId9S36PDP9fbp0hREp+pSV3kkbjvKsPsCjZMUK9A8MeCQMHYdsBM/5B4Cu+e31H+Fo4+N4puETpCnMcc2LCXiUUgA1O8XLWlpb9S3FzmSUbduKvIy9yfCcXuPYoaeOcuw0TWZixaX5iYlxvZcHYzK2GW5e3IjCuY4lYRDCqTXcxKw5XjM4CwoJOR1QEU6B8BXeyIXy37yChNUHmGwAhc8epEvicn1TWeiXVf88cBxnUPc/+igkKSVZfJ13xfkcfHxdIeljAzh5uf7br/iPDOAwT5KM/S3AAMJn61pnEKzYAAAAAElFTkSuQmCC" alt="ResetSlide" data-type="icon fatcow-icon" {...props} />
}
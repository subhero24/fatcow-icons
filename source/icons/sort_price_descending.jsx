import * as React from "react"; 
	
export default function SortPriceDescendingIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTUxQkU4MDA1OTVCMTFFMjgyM0NGQzA2REVDMDJBNjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTUxQkU4MDE1OTVCMTFFMjgyM0NGQzA2REVDMDJBNjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBNTFCRTdGRTU5NUIxMUUyODIzQ0ZDMDZERUMwMkE2MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBNTFCRTdGRjU5NUIxMUUyODIzQ0ZDMDZERUMwMkE2MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhuvNIoAAAUNSURBVHjavFdbbFRFGP5nztm2LPay0AsxFKto0tYLIgGLqZXoizGxmBDAB2NiC080vhAT0iKNN0JM+2BDUJQ1QURBYqHlEh8M0EKMlYjXCtWULtbgbrftdrew2+3uOeM/c+Zsd7d7drdVO8mfns4/c75vvv8yewDmP9SOw2fOcePPsMBDbTvUebLnSj/jxp8XkoTS7jzZee7iVWaO89/+wtqdnZ3ctxDgJ4529wpgl9vPBm/5xDOf4765kiDmw87Wdkd5xQMfAaWb8H0AbPZiHedLlxTCSxvrYMQfhDFfUCwrdtihtNAOn3b1wsi4HyghKZEIn9f1L4ddf2xvf2OnL0agoWlX8aq1td66dQ/Co5UVGVmPToRgLBAEQg0gpjNYWmCH4qJFGff+eN0Fvd/1w09XLpd8vH/fKE8ctXrVWqcJ7vLcgbBGgVFbvEByMCAsAkSPAFVozMsUAuO3QzA+GUoLnmtTYgeMTIed+GcTJ7BIteXWc8eQexI0yIGCgX1gu/UVwilGKIipogaRu5+FYPUuIFqYByVOYqmGFTo6IhpDDL8g0dPXXy+wBTFVkWsYUFUV4MVbDwFoLkwpB2pUBCxwDYi9CkaPNwJ5ZDdQCKdBs+QAIr8kFsfmBOiykiIxKZKHUjyNIpJZd5+F6dAd0IKTEA35oXD9+8KnEJQfbc4M4jUztlLRPExWggCabi8Hz4kmHlw+K0Ngg/DwDlShXKwTGQ1kzgSSd6jxcRNZzfGCw1C6hYdgCFdgCJQi0APXgS6uAu/xbUIgwskxkiSwKInMcUgmYA7jZHFyuU8nheADIZrQjeQlvExs0zW0aZzXssVPJKBIBWDxcvB80SSbmhmCHJgabkKVcsDWtQGBojx2M+j85CueA311CyoXtlQiLQEjB3DR7WEo2+pMEYJqzI0dULoZldAGYxWiY4VQrBDvsUaga15HctnnRxIBKkKgWYbgoOypdHaF1BzAlKCookimrCskgQBRmFGBd5VbhACrgCqGTyTgTIVM/YnhwX0Cm7KM+CyBgPyP17d4YYYQlG3ej74bSb5KGDm2TbQRkaUJOWBdISlzADKGgFhWiCKuEAXzU5nJT7MDadFZJNT47kAV2QfyV8wxBLJClFwIfWZUCG9usZLGslTvex5y1rUYJJIJmPe32Qf0wE0oe9EMwZIsQyB9W1CJ6KDhi6sQz+evQN76FmxgdDaBv70TMQLMrGk8ge7uhkgoCFEh8wRm+kEpIfd1WfjwAJ7Tib7HD8QuTCIPS+IJRKNG4akYAl7COSvrwYM1DUQ1wkCMRJoaagAlHysEk83oWDQ7340GfOdGEBFWJAFJhCPok/7x8z9ccz29uqpC5ErBE80AaCRNF2MZLpkUt4SY41WCWMAxzcsx/977K2vfO3yGXf1tiGU7NLSoNI1lPzgGx+KYHJtIFUqW37PyocZXm/c4lpbV8gxO1Uf4j9ISRwG8/MJTKc4GcORUD3h9gZi8yYrwed+Y57KzY++bf90c/BWnvObKXDRMd1jGI5DmI0Pd/e6HzRuerKl7pubhBMfR7ksw8PtA71uvbd/L08piP58PoLnRxtHCyRWRz39lo5VaWDnamj1tzp6vv/k5JuvZC9+z1nZnD/fJNVb7iyXGvL+iFPmSx1rbnL0X5acZf+Zz0vf/fx2ZJN7u+KTvnY4jff8GnMyTBJcQWx2Uyf89aL40sf/PCZgk8uTz1HzA+fhHgAEADXnXf4ozeoEAAAAASUVORK5CYII=" alt="SortPriceDescending" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function SortAscAzIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjhFQ0EyQjYxMDdDMTFFMzgzMDZGMjU3QUJFQzUxMTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjhFQ0EyQjcxMDdDMTFFMzgzMDZGMjU3QUJFQzUxMTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2OEVDQTJCNDEwN0MxMUUzODMwNkYyNTdBQkVDNTExOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2OEVDQTJCNTEwN0MxMUUzODMwNkYyNTdBQkVDNTExOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pi6h9X0AAATXSURBVHjarFd9TBxFFJ/ZvY+9A+WkheYsmBAl6LUGTGlpi9av1CJnY9VoqjGtSggmxTSmxlQBPRrxo2mM4S9JMVFr0mjU1KRUtBoUkYKC2moCbbWEcNXSYoEiHHu7O+ObY665W3b3dptu8jKzu5OZ3/u933tvF1NKEbswxugqXq7lezoOEUEMs10FSjqiTdVbYKqmLmJnCzY289z3xlGG0uMAgI9gMdxQXYnuX1UO3glh9sxoYSYAwvrn2rYgVUV3vfTxXrgXbQKQCCVIA/vi9CXma+LZlQDwSDn5EaIRJHqynjXbxODCC5HFyO8SEA8udgwgWHpvAAviLZRo4ATxrq9v22YDdHos3HjBfzOKrYRUvLGmnYL3SXP7A/VOtMBY8LmsxW0FwCe6vOHpseGDVNMQM0FwhUKbdxab0bloc1glucQrYkCs3NH+Ojt08MPdbbMT0W+SIHKLyloYOzY5AAAYUeocgE+UsuvlmYvfwvzcSPfBvZRAGMAEt2+zWUotUqIgJDTgNARC+VNvb2fe/nFoXyPcX7hwqu+kPDP5G+EsrKlprc8kRppIBYy8LAQWFBhR6fH4c3Yw0ZU++uqxtE3hWWKBL6cJhnfA5iwZAOf9orMswLc+9HIFRpB63FtDI1Qqe6y5OpMYBUyRN0MI9Ax4svOKPmF53/tuTZWudguh8K6tgcLQMwmRBK5vheEw2LxZCoqgAUkUbDPgWVe7f55QnA9Ooora9zrh2Umw37mdzg7evJW9YwbrgrA+ZlUXBIiBxBig9hhwH9tfWwJjPqf2PNgk2Cx/f81P7bVrYFzKe0Kcr3Hz+SIZilAIfKJ1HUgFoDDFg02l3Csp7xnVZ/kaZLImvZgAv16XfQ3EjT1JO2zKfhfASGUl3NJ/AxF+/kC5TG1tj9DDhwe8VqDjoBWVIEcAslRCbfn3y/npOhhMAbAaIGsUacQZA26G+MvR8aYDQ9E+XtCEF1fd9EhZXk5dctGcop15c+DP7/WfWHqGZAgBcwg7AKA80Tm4AkYgD7FPGS2YJQVWLrm2Tkspp419Q9u5GGUr71gINGpdrvQAWMqNcc+Y6sVIRcmnCRb5+SOX5j44NyuPwnQGjFgxMK9SYIA4CkFqJuCG1SXrRCzckdQFoVRu7h/ex+uDkkmlcYinpjkLQVpGFGb7vk6lvufvf3dz6mN2voZiEAKFIMvvATMA4luVK1vAcSlJfUzVzhwYHjsC02mukUWAC1q+kpWE8glSoF7HFDWRhnGYL40cGWe9wQ3dMdqw6XL2GAK4pyBvCZTQXakpGekfehKGCQvhZbGU++jpjUC9iv66OI96owvduvnBDejGXAl5XC607f2jibVWANybblj2mZZC26mp/1pnFDXKhNdcEfLDQSuu87r7n+85kVYH/mmqWvu41tF3922rIfbaZY1+NzqHfojKqOvXn9FEJLxW9/2e9muGd5YW3wmx77JTjF748UQuFyTiXZE1sqJlezq6by8t5yAgntCQeo4PoPFXwhtYIvEmFjf6NfMG/VIXo96O8U6YmkFs4xF2UO/xQdYPE8bm+sPNGMgGKwTL021udE3yDSf1YkwyUfBaZzd7EG2sMjycna0H4OECcduIgMILl1EvSIJYzu/P6g83A3A1r6QzyAwoO/t/AQYAYctB7yZBXwcAAAAASUVORK5CYII=" alt="SortAscAz" data-type="icon fatcow-icon" {...props} />
}
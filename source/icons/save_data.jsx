import * as React from "react"; 
	
export default function SaveDataIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUEzRkM4NTYxMDdEMTFFM0IwNzlGNThCQUYxOTVCNDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUEzRkM4NTcxMDdEMTFFM0IwNzlGNThCQUYxOTVCNDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QTNGQzg1NDEwN0QxMUUzQjA3OUY1OEJBRjE5NUI0MSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QTNGQzg1NTEwN0QxMUUzQjA3OUY1OEJBRjE5NUI0MSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PudPOFkAAAN3SURBVHja7FfLahRBFD3VVd3zzhB1NMEgol+gmxgM8QEKvgK6cOVOFASR7NzF6A+oC3Vh0LVuRMFEhPhCkCwUsxORIBoTF+IDdZxMP8p7qzvOdCZGJ2nMxoKazEzd1Dl16t5ze4TWGks5xH8CS06Apmo/M/T4u4dO1w/+CagtLeQURqf6d3fz55aW/iH9rwdjMrail9TMyYfHgTR9Y1uRNkkOgnMJpuIBu9bR+xAzpeqhWtNA17kbSBsGyY8KMXjStz+WAioiZ0ZLCnCUhX0bO6F1UFtIINOEsHDz6ajBqMdU9XEZmxZopZDWCBg/oQoRQsCytNmbMepHjEBaAgETSAn49CZISAGLFJD0wvsxRiOBCChrhwTyGU6SUI2/O+FMIonfKmDLcC2fQiwyroAKQYtZC1WPeem/OJ0wp7NELOEbYqpeQHEWsqrmBT9mE0hFyd+ak/B9lkz/8W4VIQ/ef4GxN5/MtXk6Uk40kmCl7JM3oQi8mLZrCsRgSPsjlx9HX+o/ai9pM4fkfdi3BxWq7Z52Ne+/PJr0kHUkdl28UyMQk+/sgeaTjE7lwEfnlXF8PtGOu/ceQlPZsUJmT5JEUFnv3L4FW65OYezoelNlvwjwfSwuywW+uhqZjAWP7mBT97aQQF1OMAHP803MV0/HqkBnhTdRPDXcwfbYTOnNlFfWliiTyxUczh2S+cH9OQns2NpjYr5XfUTiGALV96d799LfZbznQprb8oHbw2VSwBDwqK12bUYwKwstosFrIQEdK8Myzdc0JxfYglr5rstUZkUysJEJFz0rJbxZSiraeWTKNzEcizoFXJpfFvtQMe1rKi2JwVc+Lr30GuqHY2y6Lo7h2DmNaDFjmowrT8f0KOO9gDxk5v6jcpbGM1gJYWKRNIEKJZ9NCIfWCBzcUKqlk+lqoeTXn3/AtbdhbKIEWE6XgBwq5642ifGpb7h04TxViYXDx47DdV1IUqGrTeHGZGBiE78CKixyOAspynJb2ijkchDkkLmMg6pkI9L0rEENzwljE1WAjUhJhVIOKBUUAiKwIq+MTa8q2KRAmAfca0o538RaYr7+2dworR649cy37A6XXIyf+0DSSwLhbuqTMwWR73JH5qc9rgYZuBPvBno3JkGgSHNtk0bGjD6y/yRBgPtqlqbThKJcnNXIBJd2/P9t+FOAAQASsbqaEAQD3AAAAABJRU5ErkJggg==" alt="SaveData" data-type="icon fatcow-icon" {...props} />
}
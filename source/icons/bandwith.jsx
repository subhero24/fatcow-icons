import * as React from "react"; 
	
export default function BandwithIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjNERkM0MUU1OEY5MTFFMjlCNDRFRTIwMjBEMUY4NzUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjNERkM0MUY1OEY5MTFFMjlCNDRFRTIwMjBEMUY4NzUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCM0RGQzQxQzU4RjkxMUUyOUI0NEVFMjAyMEQxRjg3NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCM0RGQzQxRDU4RjkxMUUyOUI0NEVFMjAyMEQxRjg3NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ps+Ls24AAAf3SURBVHjanFd7bFvl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" alt="Bandwith" data-type="icon fatcow-icon" {...props} />
}
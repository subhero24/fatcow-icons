import * as React from "react"; 
	
export default function MarkupShowModeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDQ4MUQ5QzYxMDc1MTFFMzhFQzdENDM5NjhCMkVGQzciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ4MUQ5QzcxMDc1MTFFMzhFQzdENDM5NjhCMkVGQzciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpENDgxRDlDNDEwNzUxMUUzOEVDN0Q0Mzk2OEIyRUZDNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpENDgxRDlDNTEwNzUxMUUzOEVDN0Q0Mzk2OEIyRUZDNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoT7W7gAAAg4SURBVHjanFd7UJTX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" alt="MarkupShowMode" data-type="icon fatcow-icon" {...props} />
}
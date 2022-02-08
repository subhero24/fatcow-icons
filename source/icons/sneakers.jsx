import * as React from "react"; 
	
export default function SneakersIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjE4M0YxRDJBNzVBMTFFMTg5Rjg4NTI4RTU5NDU0OTIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjE4M0YxRDNBNzVBMTFFMTg5Rjg4NTI4RTU5NDU0OTIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MTgzRjFEMEE3NUExMUUxODlGODg1MjhFNTk0NTQ5MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MTgzRjFEMUE3NUExMUUxODlGODg1MjhFNTk0NTQ5MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PruwPQQAAAfFSURBVHjajFddbBxX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" alt="Sneakers" data-type="icon fatcow-icon" {...props} />
}
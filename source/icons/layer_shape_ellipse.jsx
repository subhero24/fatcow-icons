import * as React from "react"; 
	
export default function LayerShapeEllipseIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTBDOUFEM0JBNzRDMTFFMTlBMTNEQjE5NkUwOUE5M0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBDOUFEM0NBNzRDMTFFMTlBMTNEQjE5NkUwOUE5M0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxMEM5QUQzOUE3NEMxMUUxOUExM0RCMTk2RTA5QTkzQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxMEM5QUQzQUE3NEMxMUUxOUExM0RCMTk2RTA5QTkzQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuYTdNwAAAaISURBVHjazFd7bJNV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" alt="LayerShapeEllipse" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function ShoppingCartResetIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJCQUUxQjg3NkNEMTFFMkEwNTNCODcyMTc2NDIwMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJCQUUxQjk3NkNEMTFFMkEwNTNCODcyMTc2NDIwMDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MkJBRTFCNjc2Q0QxMUUyQTA1M0I4NzIxNzY0MjAwMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MkJBRTFCNzc2Q0QxMUUyQTA1M0I4NzIxNzY0MjAwMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PisPPc4AAAexSURBVHjavFcJbJPn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" alt="ShoppingCartReset" data-type="icon fatcow-icon" {...props} />
}
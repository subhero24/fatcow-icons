import * as React from "react"; 
	
export default function InsertTableOfAuthoritiesIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjBFQzA2RjYxMDYzMTFFM0I2NjlGNkE0Rjk3MjFBREIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjBFQzA2RjcxMDYzMTFFM0I2NjlGNkE0Rjk3MjFBREIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2MEVDMDZGNDEwNjMxMUUzQjY2OUY2QTRGOTcyMUFEQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2MEVDMDZGNTEwNjMxMUUzQjY2OUY2QTRGOTcyMUFEQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiQwmrgAAAZGSURBVHjanBdpbxNX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" alt="InsertTableOfAuthorities" data-type="icon fatcow-icon" {...props} />
}
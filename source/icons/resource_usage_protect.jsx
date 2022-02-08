import * as React from "react"; 
	
export default function ResourceUsageProtectIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkZGQkI1Njk1OThBMTFFMjlDM0VGMUQyOUQ0ODEwNEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkZGQkI1NkE1OThBMTFFMjlDM0VGMUQyOUQ0ODEwNEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2RkZCQjU2NzU5OEExMUUyOUMzRUYxRDI5RDQ4MTA0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2RkZCQjU2ODU5OEExMUUyOUMzRUYxRDI5RDQ4MTA0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pr29WZoAAAafSURBVHjaxFddaFxF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" alt="ResourceUsageProtect" data-type="icon fatcow-icon" {...props} />
}
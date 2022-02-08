import * as React from "react"; 
	
export default function UserCookIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTQ3NjIzOEY0REM0MTFFMTlDOEE5OUYyQjE0RTc3MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTQ3NjIzOTA0REM0MTFFMTlDOEE5OUYyQjE0RTc3MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNDc2MjM4RDREQzQxMUUxOUM4QTk5RjJCMTRFNzcxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNDc2MjM4RTREQzQxMUUxOUM4QTk5RjJCMTRFNzcxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoJrk5IAAAZ8SURBVHjarFdbbFRV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" alt="UserCook" data-type="icon fatcow-icon" {...props} />
}
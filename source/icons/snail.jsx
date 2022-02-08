import * as React from "react"; 
	
export default function SnailIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUMyMTA3MTY1NTdEMTFFMThGQjlCQTlDNkRCMzY2Q0EiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUMyMTA3MTc1NTdEMTFFMThGQjlCQTlDNkRCMzY2Q0EiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QzIxMDcxNDU1N0QxMUUxOEZCOUJBOUM2REIzNjZDQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QzIxMDcxNTU1N0QxMUUxOEZCOUJBOUM2REIzNjZDQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgEv7MwAAAalSURBVHja7FdpbFRV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" alt="Snail" data-type="icon fatcow-icon" {...props} />
}
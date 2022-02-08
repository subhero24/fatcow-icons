import * as React from "react"; 
	
export default function DoNotDisturbIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0IwODUxRDI1NTlEMTFFMTk3NDBCODcxQTk2OUM5ODQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0IwODUxRDM1NTlEMTFFMTk3NDBCODcxQTk2OUM5ODQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QjA4NTFEMDU1OUQxMUUxOTc0MEI4NzFBOTY5Qzk4NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QjA4NTFEMTU1OUQxMUUxOTc0MEI4NzFBOTY5Qzk4NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgDYdqAAAAY7SURBVHjarFdpbFRV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" alt="DoNotDisturb" data-type="icon fatcow-icon" {...props} />
}
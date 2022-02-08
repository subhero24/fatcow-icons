import * as React from "react"; 
	
export default function DnsServerIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEU2NjFCNUM3NkNEMTFFMkEzODZGQjEyMEZBNzNFMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEU2NjFCNUQ3NkNEMTFFMkEzODZGQjEyMEZBNzNFMjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RTY2MUI1QTc2Q0QxMUUyQTM4NkZCMTIwRkE3M0UyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RTY2MUI1Qjc2Q0QxMUUyQTM4NkZCMTIwRkE3M0UyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjhJ5I0AAAgNSURBVHjapFcLVFXH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" alt="DnsServer" data-type="icon fatcow-icon" {...props} />
}
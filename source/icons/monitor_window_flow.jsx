import * as React from "react"; 
	
export default function MonitorWindowFlowIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0NCMDgxNDY1OEZBMTFFMkFBQjFGMTlDOTEzREIzMzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0NCMDgxNDc1OEZBMTFFMkFBQjFGMTlDOTEzREIzMzAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozQ0IwODE0NDU4RkExMUUyQUFCMUYxOUM5MTNEQjMzMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozQ0IwODE0NTU4RkExMUUyQUFCMUYxOUM5MTNEQjMzMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pna71ggAAAbJSURBVHjatFddiFVV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" alt="MonitorWindowFlow" data-type="icon fatcow-icon" {...props} />
}
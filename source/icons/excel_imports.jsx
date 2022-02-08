import * as React from "react"; 
	
export default function ExcelImportsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTFGMkU0QzYxMDhDMTFFM0JGNUNDOEVBNzI1N0FGM0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTFGMkU0QzcxMDhDMTFFM0JGNUNDOEVBNzI1N0FGM0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMUYyRTRDNDEwOEMxMUUzQkY1Q0M4RUE3MjU3QUYzRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMUYyRTRDNTEwOEMxMUUzQkY1Q0M4RUE3MjU3QUYzRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqI9bT8AAAZkSURBVHjatFd7bJRF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" alt="ExcelImports" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function ProtectWorkbookIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk3NzY0QjYxMDdDMTFFMzgxMzg5MEVGMEUwN0VCNzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk3NzY0QjcxMDdDMTFFMzgxMzg5MEVGMEUwN0VCNzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTc3NjRCNDEwN0MxMUUzODEzODkwRUYwRTA3RUI3OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5OTc3NjRCNTEwN0MxMUUzODEzODkwRUYwRTA3RUI3OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkmvWXIAAAbhSURBVHjarFdrbBRV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" alt="ProtectWorkbook" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function UserLevelFilteringIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTdFRDVFQkE3NkFDMTFFMjg0RDdDOTZCQ0VDQjVCNUYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTdFRDVFQkI3NkFDMTFFMjg0RDdDOTZCQ0VDQjVCNUYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFN0VENUVCODc2QUMxMUUyODREN0M5NkJDRUNCNUI1RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFN0VENUVCOTc2QUMxMUUyODREN0M5NkJDRUNCNUI1RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Php22ZgAAAehSURBVHjapFd7cFTV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" alt="UserLevelFiltering" data-type="icon fatcow-icon" {...props} />
}
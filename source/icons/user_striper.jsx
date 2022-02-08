import * as React from "react"; 
	
export default function UserStriperIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDA3OERGNDg1NDBDMTFFMUI2REM5N0EwNEZGM0Y2NEIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDA3OERGNDk1NDBDMTFFMUI2REM5N0EwNEZGM0Y2NEIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MDc4REY0NjU0MEMxMUUxQjZEQzk3QTA0RkYzRjY0QiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0MDc4REY0NzU0MEMxMUUxQjZEQzk3QTA0RkYzRjY0QiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqq3GmIAAAdsSURBVHjatFd9bFPX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" alt="UserStriper" data-type="icon fatcow-icon" {...props} />
}
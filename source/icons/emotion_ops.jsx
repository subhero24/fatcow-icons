import * as React from "react"; 
	
export default function EmotionOpsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkQwREFENTE5NEIwMTFFMjlFRTVEOEZCMjNDRTc2RUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkQwREFENTI5NEIwMTFFMjlFRTVEOEZCMjNDRTc2RUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRDBEQUQ0Rjk0QjAxMUUyOUVFNUQ4RkIyM0NFNzZFQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRDBEQUQ1MDk0QjAxMUUyOUVFNUQ4RkIyM0NFNzZFQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtR6AHYAAAfNSURBVHjatFd5bBTn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" alt="EmotionOps" data-type="icon fatcow-icon" {...props} />
}
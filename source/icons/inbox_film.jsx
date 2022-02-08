import * as React from "react"; 
	
export default function InboxFilmIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTlBRTk2RUVBNzRCMTFFMUI5QkNCRDY1MzM1REM1RDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTlBRTk2RUZBNzRCMTFFMUI5QkNCRDY1MzM1REM1RDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1OUFFOTZFQ0E3NEIxMUUxQjlCQ0JENjUzMzVEQzVEMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1OUFFOTZFREE3NEIxMUUxQjlCQ0JENjUzMzVEQzVEMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjcIwWYAAAZdSURBVHjavFdrbBRV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" alt="InboxFilm" data-type="icon fatcow-icon" {...props} />
}
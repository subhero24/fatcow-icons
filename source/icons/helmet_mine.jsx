import * as React from "react"; 
	
export default function HelmetMineIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTFGRjA5MzFBNzQ1MTFFMUFGMjRGQkJFQjUyMDY5Q0UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTFGRjA5MzJBNzQ1MTFFMUFGMjRGQkJFQjUyMDY5Q0UiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MUZGMDkyRkE3NDUxMUUxQUYyNEZCQkVCNTIwNjlDRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5MUZGMDkzMEE3NDUxMUUxQUYyNEZCQkVCNTIwNjlDRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmR7R+4AAAjqSURBVHjanFdrbBTX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" alt="HelmetMine" data-type="icon fatcow-icon" {...props} />
}
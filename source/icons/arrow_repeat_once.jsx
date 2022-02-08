import * as React from "react"; 
	
export default function ArrowRepeatOnceIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA1NzNCMkU3NkE4MTFFMjhEM0ZFRjMxQTQxMThGQTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA1NzNCMkY3NkE4MTFFMjhEM0ZFRjMxQTQxMThGQTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MDU3M0IyQzc2QTgxMUUyOEQzRkVGMzFBNDExOEZBNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3MDU3M0IyRDc2QTgxMUUyOEQzRkVGMzFBNDExOEZBNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PseUrywAAAZlSURBVHjatFdrbBRV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" alt="ArrowRepeatOnce" data-type="icon fatcow-icon" {...props} />
}
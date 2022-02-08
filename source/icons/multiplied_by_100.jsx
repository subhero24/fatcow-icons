import * as React from "react"; 
	
export default function MultipliedBy100Icon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDc0NEY1NjA1NEMxMTFFMUI5QkZBRTI3M0MxN0Y4RjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDc0NEY1NjE1NEMxMTFFMUI5QkZBRTI3M0MxN0Y4RjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowNzQ0RjU1RTU0QzExMUUxQjlCRkFFMjczQzE3RjhGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowNzQ0RjU1RjU0QzExMUUxQjlCRkFFMjczQzE3RjhGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoWqoYgAAAYTSURBVHjatFd9UFRV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" alt="MultipliedBy100" data-type="icon fatcow-icon" {...props} />
}
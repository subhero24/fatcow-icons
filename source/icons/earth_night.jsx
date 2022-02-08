import * as React from "react"; 
	
export default function EarthNightIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzgxOUE0NzE1NThFMTFFMUI4MzVBMzlFNjE1OUYxMjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzgxOUE0NzI1NThFMTFFMUI4MzVBMzlFNjE1OUYxMjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDODE5QTQ2RjU1OEUxMUUxQjgzNUEzOUU2MTU5RjEyMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDODE5QTQ3MDU1OEUxMUUxQjgzNUEzOUU2MTU5RjEyMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PohVsW8AAAoESURBVHjanFd7cFTV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" alt="EarthNight" data-type="icon fatcow-icon" {...props} />
}
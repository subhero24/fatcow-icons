import * as React from "react"; 
	
export default function AddOnIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTUyQjNFMzcxMDlDMTFFMzgxOUJEMzZDODY4RjczNDAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTUyQjNFMzgxMDlDMTFFMzgxOUJEMzZDODY4RjczNDAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNTJCM0UzNTEwOUMxMUUzODE5QkQzNkM4NjhGNzM0MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNTJCM0UzNjEwOUMxMUUzODE5QkQzNkM4NjhGNzM0MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgqEkpYAAAiMSURBVHjarFcJbBTn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" alt="AddOn" data-type="icon fatcow-icon" {...props} />
}
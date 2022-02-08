import * as React from "react"; 
	
export default function OmsDeleteIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjUxNkIzMDE2OUFBMTFFM0IyQTNGMzNCQTlEMDZBREYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjUxNkIzMDI2OUFBMTFFM0IyQTNGMzNCQTlEMDZBREYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGNTE2QjJGRjY5QUExMUUzQjJBM0YzM0JBOUQwNkFERiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGNTE2QjMwMDY5QUExMUUzQjJBM0YzM0JBOUQwNkFERiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ptx/sH4AAAZCSURBVHjavFdrbBRV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" alt="OmsDelete" data-type="icon fatcow-icon" {...props} />
}
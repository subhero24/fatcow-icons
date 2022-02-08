import * as React from "react"; 
	
export default function HorizontalLineInsertIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkJGQkYzNzM2OUFBMTFFM0FDNzQ5QjA1MjYzRkVCMDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkJGQkYzNzQ2OUFBMTFFM0FDNzQ5QjA1MjYzRkVCMDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2QkZCRjM3MTY5QUExMUUzQUM3NDlCMDUyNjNGRUIwOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2QkZCRjM3MjY5QUExMUUzQUM3NDlCMDUyNjNGRUIwOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnSGnJkAAAYGSURBVHjavFdrbBRV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" alt="HorizontalLineInsert" data-type="icon fatcow-icon" {...props} />
}
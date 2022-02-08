import * as React from "react"; 
	
export default function TokenAnchorsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUFEMjlBRjQ2OUFEMTFFM0EwN0Y5NzNCNjNERDk2QzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUFEMjlBRjU2OUFEMTFFM0EwN0Y5NzNCNjNERDk2QzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQUQyOUFGMjY5QUQxMUUzQTA3Rjk3M0I2M0REOTZDMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQUQyOUFGMzY5QUQxMUUzQTA3Rjk3M0I2M0REOTZDMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhPX3RUAAAXiSURBVHjatFdrbBRV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" alt="TokenAnchors" data-type="icon fatcow-icon" {...props} />
}
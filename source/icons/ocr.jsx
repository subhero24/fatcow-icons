import * as React from "react"; 
	
export default function OcrIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjU0ODE0NjE2OUFEMTFFMzhCRTNEMzc3NDcxRTg5MEUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjU0ODE0NjI2OUFEMTFFMzhCRTNEMzc3NDcxRTg5MEUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2NTQ4MTQ1RjY5QUQxMUUzOEJFM0QzNzc0NzFFODkwRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2NTQ4MTQ2MDY5QUQxMUUzOEJFM0QzNzc0NzFFODkwRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrXgHgUAAAc7SURBVHjatFdpbFRV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" alt="Ocr" data-type="icon fatcow-icon" {...props} />
}
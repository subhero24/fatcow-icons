import * as React from "react"; 
	
export default function SaveCloseIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEU0MTc0QzE2OUFDMTFFMzg3RTBBMkQxODI2MkUwODciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEU0MTc0QzI2OUFDMTFFMzg3RTBBMkQxODI2MkUwODciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRTQxNzRCRjY5QUMxMUUzODdFMEEyRDE4MjYyRTA4NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRTQxNzRDMDY5QUMxMUUzODdFMEEyRDE4MjYyRTA4NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqheinAAAAeISURBVHjarFdrbBRV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" alt="SaveClose" data-type="icon fatcow-icon" {...props} />
}
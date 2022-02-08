import * as React from "react"; 
	
export default function SlideShapeIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUI0RUVCNjYxMDlFMTFFM0JBMkZCNDEyOUQxNUQyRUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUI0RUVCNjcxMDlFMTFFM0JBMkZCNDEyOUQxNUQyRUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QjRFRUI2NDEwOUUxMUUzQkEyRkI0MTI5RDE1RDJFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QjRFRUI2NTEwOUUxMUUzQkEyRkI0MTI5RDE1RDJFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmDVaO8AAAYrSURBVHjaxFdbbFRF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" alt="SlideShape" data-type="icon fatcow-icon" {...props} />
}
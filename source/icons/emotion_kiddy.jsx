import * as React from "react"; 
	
export default function EmotionKiddyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUM2Mzk4ODcxMDA0MTFFMzhGOEJERjZCNDA3NDA1QTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUM2Mzk4ODgxMDA0MTFFMzhGOEJERjZCNDA3NDA1QTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQzYzOTg4NTEwMDQxMUUzOEY4QkRGNkI0MDc0MDVBMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQzYzOTg4NjEwMDQxMUUzOEY4QkRGNkI0MDc0MDVBMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjcawkIAAAgvSURBVHjanFd7bFtn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" alt="EmotionKiddy" data-type="icon fatcow-icon" {...props} />
}
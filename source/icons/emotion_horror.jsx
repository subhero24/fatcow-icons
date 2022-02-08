import * as React from "react"; 
	
export default function EmotionHorrorIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTEzMUEyQjI1NTY0MTFFMUFFMzJFNzE2MjkzNDlENzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTEzMUEyQjM1NTY0MTFFMUFFMzJFNzE2MjkzNDlENzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMTMxQTJCMDU1NjQxMUUxQUUzMkU3MTYyOTM0OUQ3OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMTMxQTJCMTU1NjQxMUUxQUUzMkU3MTYyOTM0OUQ3OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pgri5hkAAAgQSURBVHjavFd7cFRX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" alt="EmotionHorror" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function RunMacrosIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEE0MUY2RTYxMDk5MTFFMzk5MzNFRUY5NTZDMkVGQkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEE0MUY2RTcxMDk5MTFFMzk5MzNFRUY5NTZDMkVGQkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QTQxRjZFNDEwOTkxMUUzOTkzM0VFRjk1NkMyRUZCQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QTQxRjZFNTEwOTkxMUUzOTkzM0VFRjk1NkMyRUZCQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PihDDjsAAAYJSURBVHjarJdrbBRV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" alt="RunMacros" data-type="icon fatcow-icon" {...props} />
}
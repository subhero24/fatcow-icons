import * as React from "react"; 
	
export default function CommentsFacebookIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJEODQ2OEJBNzM3MTFFMTkyRUNENDEzODYwRjNBOTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJEODQ2OENBNzM3MTFFMTkyRUNENDEzODYwRjNBOTciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGQkQ4NDY4OUE3MzcxMUUxOTJFQ0Q0MTM4NjBGM0E5NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGQkQ4NDY4QUE3MzcxMUUxOTJFQ0Q0MTM4NjBGM0E5NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqd6XawAAAc3SURBVHjavFdpbFRV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" alt="CommentsFacebook" data-type="icon fatcow-icon" {...props} />
}
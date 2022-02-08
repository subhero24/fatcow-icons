import * as React from "react"; 
	
export default function CommentTwitterRetwitIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REEwNzUxRDFBNzM3MTFFMTlEQzdBQkU0MTgwQzE0MDkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REEwNzUxRDJBNzM3MTFFMTlEQzdBQkU0MTgwQzE0MDkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEQTA3NTFDRkE3MzcxMUUxOURDN0FCRTQxODBDMTQwOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEQTA3NTFEMEE3MzcxMUUxOURDN0FCRTQxODBDMTQwOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoYIhLMAAAa1SURBVHjazFcJbFRV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" alt="CommentTwitterRetwit" data-type="icon fatcow-icon" {...props} />
}
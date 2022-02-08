import * as React from "react"; 
	
export default function ServerPropertyIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjM5MkExMUI1OTU2MTFFMkJENkJERDhBN0UyRUM1RDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjM5MkExMUM1OTU2MTFFMkJENkJERDhBN0UyRUM1RDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGMzkyQTExOTU5NTYxMUUyQkQ2QkREOEE3RTJFQzVENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGMzkyQTExQTU5NTYxMUUyQkQ2QkREOEE3RTJFQzVENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph8yIRoAAAhwSURBVHjapFcLcFRX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" alt="ServerProperty" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function CommentFacebookIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkQ0QTcxNUY1NTlEMTFFMUI5NzREQTU0QUIxN0QxNzgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkQ0QTcxNjA1NTlEMTFFMUI5NzREQTU0QUIxN0QxNzgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRDRBNzE1RDU1OUQxMUUxQjk3NERBNTRBQjE3RDE3OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRDRBNzE1RTU1OUQxMUUxQjk3NERBNTRBQjE3RDE3OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PngOm2YAAAYWSURBVHjaxFdrbNNV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" alt="CommentFacebook" data-type="icon fatcow-icon" {...props} />
}
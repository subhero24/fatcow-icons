import * as React from "react"; 
	
export default function AnonymousFtpControlsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzY4REVFQTU3NkFEMTFFMkI4NTc5M0Q3RkVGRjMzMDciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzY4REVFQTY3NkFEMTFFMkI4NTc5M0Q3RkVGRjMzMDciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNjhERUVBMzc2QUQxMUUyQjg1NzkzRDdGRUZGMzMwNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNjhERUVBNDc2QUQxMUUyQjg1NzkzRDdGRUZGMzMwNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmcGN+YAAAaYSURBVHjarFdrbBRV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" alt="AnonymousFtpControls" data-type="icon fatcow-icon" {...props} />
}
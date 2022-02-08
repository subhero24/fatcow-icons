import * as React from "react"; 
	
export default function CarTaxiIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkRBNDFBNTc1NTlEMTFFMUIwRkVCNzU0RTMyNkM5OUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkRBNDFBNTg1NTlEMTFFMUIwRkVCNzU0RTMyNkM5OUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2REE0MUE1NTU1OUQxMUUxQjBGRUI3NTRFMzI2Qzk5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2REE0MUE1NjU1OUQxMUUxQjBGRUI3NTRFMzI2Qzk5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pm430rUAAAZzSURBVHjaxFdZbFRV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" alt="CarTaxi" data-type="icon fatcow-icon" {...props} />
}
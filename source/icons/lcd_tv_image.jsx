import * as React from "react"; 
	
export default function LcdTvImageIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODYzMzFDQkE1OThCMTFFMkIzQjU5RjVEMjgzNDJGMEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODYzMzFDQkI1OThCMTFFMkIzQjU5RjVEMjgzNDJGMEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4NjMzMUNCODU5OEIxMUUyQjNCNTlGNUQyODM0MkYwQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4NjMzMUNCOTU5OEIxMUUyQjNCNTlGNUQyODM0MkYwQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuDsfjcAAAYXSURBVHjaxFdLjBRF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" alt="LcdTvImage" data-type="icon fatcow-icon" {...props} />
}
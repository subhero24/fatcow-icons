import * as React from "react"; 
	
export default function FromTextIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEJCODQ5NjYxMDdDMTFFM0JDREJDOUFGNzRGNTQxRDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEJCODQ5NjcxMDdDMTFFM0JDREJDOUFGNzRGNTQxRDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0QkI4NDk2NDEwN0MxMUUzQkNEQkM5QUY3NEY1NDFENCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0QkI4NDk2NTEwN0MxMUUzQkNEQkM5QUY3NEY1NDFENCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnIj1PgAAAblSURBVHjapFdrbFRF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" alt="FromText" data-type="icon fatcow-icon" {...props} />
}
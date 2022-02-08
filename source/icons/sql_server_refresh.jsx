import * as React from "react"; 
	
export default function SqlServerRefreshIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0EzQzMyMzE3NkNFMTFFMkEyMzlFQTY1N0RCMTFFOTUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0EzQzMyMzI3NkNFMTFFMkEyMzlFQTY1N0RCMTFFOTUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3QTNDMzIyRjc2Q0UxMUUyQTIzOUVBNjU3REIxMUU5NSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3QTNDMzIzMDc2Q0UxMUUyQTIzOUVBNjU3REIxMUU5NSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj4RUfkAAAfqSURBVHjatFcLcFTV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" alt="SqlServerRefresh" data-type="icon fatcow-icon" {...props} />
}
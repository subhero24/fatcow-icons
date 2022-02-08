import * as React from "react"; 
	
export default function SelectPhpVersionIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhCMzM5N0U3QjkxMTFFMkJBRkI5Rjc4QjlERTAwRkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhCMzM5N0Y3QjkxMTFFMkJBRkI5Rjc4QjlERTAwRkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOEIzMzk3QzdCOTExMUUyQkFGQjlGNzhCOURFMDBGQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOEIzMzk3RDdCOTExMUUyQkFGQjlGNzhCOURFMDBGQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqvTPSMAAAdBSURBVHjaxFd9cFTV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" alt="SelectPhpVersion" data-type="icon fatcow-icon" {...props} />
}
import * as React from "react"; 
	
export default function ScrollPaneImageIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTMzMDU3MDE1OUFCMTFFMkJGMDFDNkI3OEUyQ0NGRkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTMzMDU3MDI1OUFCMTFFMkJGMDFDNkI3OEUyQ0NGRkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBMzMwNTZGRjU5QUIxMUUyQkYwMUM2Qjc4RTJDQ0ZGRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBMzMwNTcwMDU5QUIxMUUyQkYwMUM2Qjc4RTJDQ0ZGRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjKPz7sAAAabSURBVHjaxFdtiFRV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" alt="ScrollPaneImage" data-type="icon fatcow-icon" {...props} />
}
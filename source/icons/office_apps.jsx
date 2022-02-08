import * as React from "react"; 
	
export default function OfficeAppsIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUU1Njc5RDAxMDA5MTFFMzk1RENFNzJGOEI1NEY1MDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUU1Njc5RDExMDA5MTFFMzk1RENFNzJGOEI1NEY1MDEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RTU2NzlDRTEwMDkxMUUzOTVEQ0U3MkY4QjU0RjUwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RTU2NzlDRjEwMDkxMUUzOTVEQ0U3MkY4QjU0RjUwMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkp1twIAAAd2SURBVHjarFdpbFVl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" alt="OfficeApps" data-type="icon fatcow-icon" {...props} />
}
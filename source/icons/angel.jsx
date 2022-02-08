import * as React from "react"; 
	
export default function AngelIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQ2RDVERUE5ODQzMTFFMjg4OTdGMTA2QUVGQzM5MjEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ2RDVERUI5ODQzMTFFMjg4OTdGMTA2QUVGQzM5MjEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDZENURFODk4NDMxMUUyODg5N0YxMDZBRUZDMzkyMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDZENURFOTk4NDMxMUUyODg5N0YxMDZBRUZDMzkyMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pp0XvW8AAAb6SURBVHjatFdbbBzV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" alt="Angel" data-type="icon fatcow-icon" {...props} />
}
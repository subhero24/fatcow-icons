import * as React from "react"; 
	
export default function NoCommercialIcon(props) {
	return <img width={32} height={32} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0U0ODdGM0E5ODQzMTFFMkJGODA4Q0VFODY5NTczRUUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0U0ODdGM0I5ODQzMTFFMkJGODA4Q0VFODY5NTczRUUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDRTQ4N0YzODk4NDMxMUUyQkY4MDhDRUU4Njk1NzNFRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDRTQ4N0YzOTk4NDMxMUUyQkY4MDhDRUU4Njk1NzNFRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgDPTeIAAAZ+SURBVHjavFd9TFVl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" alt="NoCommercial" data-type="icon fatcow-icon" {...props} />
}